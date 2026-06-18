import type { APIRoute } from 'astro';

export const prerender = false;

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
	data: unknown;
	expiresAt: number;
}

const cache = new Map<string, CacheEntry>();

function jsonResponse(body: unknown, status: number, cacheStatus?: 'HIT' | 'MISS'): Response {
	const headers: Record<string, string> = { 'Content-Type': 'application/json' };
	if (cacheStatus) headers['X-Cache'] = cacheStatus;
	return new Response(JSON.stringify(body), { status, headers });
}

export const GET: APIRoute = async ({ params }) => {
	const raw = params.username;
	if (!raw || raw.trim() === '') {
		return jsonResponse({ error: 'Username is required' }, 400);
	}
	const username = raw.trim().toLowerCase();

	// Return cached response if still fresh
	const cached = cache.get(username);
	if (cached && Date.now() < cached.expiresAt) {
		return jsonResponse(cached.data, 200, 'HIT');
	}

	// Fetch from upstream with timeout
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 8000);

	let response: Response;
	try {
		response = await fetch(`https://github.com/${username}.contribs`, {
			signal: controller.signal,
			headers: { Accept: 'application/json' },
		});
	} catch (err) {
		clearTimeout(timeout);
		if (err instanceof Error && err.name === 'AbortError') {
			return jsonResponse({ error: 'Request timed out' }, 504);
		}
		return jsonResponse({ error: 'Failed to reach upstream' }, 502);
	} finally {
		clearTimeout(timeout);
	}

	if (!response.ok) {
		if (response.status === 404) {
			return jsonResponse({ error: 'User not found' }, 404);
		}
		if (response.status === 429) {
			return jsonResponse({ error: 'Rate limit exceeded' }, 429);
		}
		return jsonResponse({ error: 'Upstream error', upstreamStatus: response.status }, 502);
	}

	let data: unknown;
	try {
		data = await response.json();
	} catch {
		return jsonResponse({ error: 'Invalid response from upstream' }, 502);
	}

	cache.set(username, { data, expiresAt: Date.now() + CACHE_TTL_MS });
	return jsonResponse(data, 200, 'MISS');
};
