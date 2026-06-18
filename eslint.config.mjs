import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{
		ignores: ['dist/**', '.astro/**', 'node_modules/**'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,cjs,ts,astro}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'comma-dangle': ['error', 'always-multiline'],
			'eol-last': ['error', 'always'],
			'no-trailing-spaces': 'error',
			'quotes': ['error', 'single', { avoidEscape: true }],
			'semi': ['error', 'always'],
		},
	},
	{
		files: ['**/*.{ts,astro}'],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
		},
	},
];
