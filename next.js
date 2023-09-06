module.exports = {
	extends: [
		"plugin:@typescript-eslint/recommended",
		"eslint:recommended",
		"eslint-config-prettier",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
		"plugin:react/jsx-runtime",
		"airbnb",
		"prettier",
		"next/core-web-vitals",
	],
	env: {
		es2021: true,
		node: true,
	},
	plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},

		extraFileExtensions: ['.ts', '.tsx', '.d.ts'],
		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	rules: {
		"import/extensions": "off",
		"no-restricted-exports": "off",
		camelcase: "off",
		"react/jsx-props-no-spreading": "off",
		"react/require-default-props": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-runtime": "off",
		"react/react-in-jsx-scope": "off",
    "import/prefer-default-export": 'off',
		"no-async-promise-executor": "off",
		"no-debugger": "warn",
		"prettier/prettier": [
			"error",
			{
				printWidth: 80,
				allowParens: 'always',
				bracketSameLine: false,
				trailingComma: 'all',
				endOfLine: 'auto',
				useTabs: true,
				"tabWidth": 2,
				bracketSpacing: true,
				singleQuote: false,
				jsxSingleQuote: false,
			},
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: true,
				},
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
		],

		"no-param-reassign": [
			"warn",
			{
				props: false,
			},
		],
		"no-unused-vars": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
	},
	
	settings: {
		"import/parsers": {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
		},

		react: {
			version: 'detect',
		},
	},
};
