module.exports = {
	extends: [
		"plugin:@typescript-eslint/recommended",
		"eslint-config-prettier",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"airbnb",
		"prettier",
	],

	env: {
		browser: true,
		es2021: true,
	},

	plugins: ["react", "@typescript-eslint", "jsx-a11y","simple-import-sort"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},

		extraFileExtensions: [".ts", ".tsx", ".d.ts"],
		ecmaVersion: "latest",
		sourceType: "module",
	},

	rules: {
		camelcase: "off",
		"no-useless-constructor": "off",
		"max-classes-per-file": "off",
		"class-methods-use-this": "off",
		"no-plusplus": "off",
		"import/no-extraneous-dependencies": "off",
		"tailwindcss/no-custom-classname": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"react/style-prop-object": "off",
		"import/first": "off",
		"no-shadow": "off",
		"react/jsx-no-bind": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-var-requires": "off",
		"global-require": "off",
		"prefer-const": "off",
		"no-restricted-exports": "off",
    "import/no-unresolved": "off",
		"import/extensions": "off",
		"react/jsx-props-no-spreading": "off",
		"react/require-default-props": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-runtime": "off",
		"react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
		"no-async-promise-executor": "off",
		"no-debugger": "warn",

		"prettier/prettier": [
			"error",
			{
				printWidth: 80,
				allowParens: "always",
				bracketSameLine: false,
				trailingComma: "all",
				endOfLine: "auto",
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
				selector: "interface",
				format: ["PascalCase"],
				custom: {
					regex: "^I[A-Z]",
					match: true,
				},
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
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
		react: {
			version: "detect",
		},
		"import/parsers": {
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
	},

	ignorePatterns: [
    "node_modules"
  ]
};
