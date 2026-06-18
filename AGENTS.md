# Mona Mayhem - AI Agent Instructions

## Project Overview

**Mona Mayhem** is a GitHub Contribution Battle Arena built with [Astro](https://astro.build) — a modern static-first web framework optimized for content-driven sites with server capabilities.

The app compares GitHub contribution graphs of two users in a retro arcade-themed interface. This repository serves as a workshop template for learning GitHub Copilot's planning and agentic features.

**Scope:** Focus on the `src/` directory (pages, components, styles, API endpoints). The `workshop/` folder contains instructions for learners and should not be modified.

## Build & Development

### Commands
- `npm run dev` — Start development server on `http://localhost:3000`
- `npm run build` — Build for production (outputs to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run astro` — Run any Astro CLI command directly

### Environment
- **Runtime:** Node.js with Astro's `@astrojs/node` adapter
- **Output mode:** Server-side rendering (`output: 'server'`)
- **TypeScript:** Enabled (strict mode)

## Project Structure

```
src/
├── pages/
│   ├── index.astro           # Landing page
│   └── api/
│       └── contributions/
│           └── [username].ts # API endpoint for GitHub contrib data
public/
├── Favicon and static assets
docs/
├── Static documentation site (separate from main app)
```

## Astro Best Practices for This Project

### Pages & Routing
- **File-based routing:** Create `.astro` files in `src/pages/` (auto-routed by filename)
- **Dynamic routes:** Use `[param].ts` for dynamic segments (e.g., `[username].ts`)
- **API routes:** TypeScript files in `src/pages/api/` export `APIRoute` handlers (`GET`, `POST`, etc.)

### Astro Component Syntax
```astro
---
// Component script (runs on server, never sent to browser)
const data = await fetch('...');
---

<!-- HTML template (can use variables from script) -->
<div>{data}</div>
```

### Server vs. Client
- By default, components are **server-rendered** (no JavaScript sent to browser unless explicitly requested)
- For interactivity, use `client:` directives: `client:load`, `client:idle`, `client:visible`
- API routes: Mark dynamic routes with `export const prerender = false`

### Common Patterns
- **Layouts:** Create reusable Astro components in `src/` and import into pages
- **Props:** Pass data via component props; use TypeScript for type safety
- **Styling:** Import CSS directly in Astro components or use `<style>` blocks with CSS scoping

## Key Implementation Notes

### GitHub Contributions API
The `[username].ts` endpoint should:
1. Accept GitHub username as `params.username`
2. Fetch user contribution data (likely via GitHub's public `.contribs` endpoint or GraphQL API)
3. Return JSON response with contribution graph data
4. Handle errors gracefully (invalid users, rate limits)

### Common Pitfalls
- **Not disabling prerendering:** Dynamic routes must have `export const prerender = false`
- **Mixing server/client:** Remember `.astro` is server-only by default
- **Scope isolation:** CSS in Astro components is automatically scoped to that component

## Resources
- [Astro Docs](https://docs.astro.build/)
- [Astro Server Endpoints](https://docs.astro.build/en/guides/endpoints/)
- [GitHub REST API - User contributions](https://docs.github.com/en/rest)
