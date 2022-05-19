module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['.eslintrc.js'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018
	}
	// root: true,
	// extends: ['eslint:recommended', 'prettier'],
	// plugins: ['svelte3'],
	// overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	// parserOptions: {
	// 	sourceType: 'module',
	// 	ecmaVersion: 2020
	// },
	// env: {
	// 	browser: true,
	// 	es2017: true,
	// 	node: true
	// }
};
