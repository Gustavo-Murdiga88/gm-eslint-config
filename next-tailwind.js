import pluginJs from "@eslint/js";
import eslint from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
import tailwind from "eslint-plugin-tailwindcss";

/**@type {import("eslint").Linter.Config} */
export default [
	{ languageOptions: { globals: globals.browser } },
	pluginReact.configs.flat.recommended,
	prettier,
	pluginJs.configs.recommended,
	eslint.configs.recommended,
	...tailwind.configs["flat/recommended"],
	...tseslint.configs.recommended,
	...tseslint.config({
		rules: {
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
		},
	}),
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
	{
		plugins: {
			"jsx-a11y": jsxA11y,
			"react-hooks": reactHooks,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			"jsx-a11y/alt-text": "error",
		},
	},
	{
		rules: {
			"react/react-in-jsx-scope": "off",
			"jsx-a11y/alt-text": "error",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			"react/react-in-jsx-scope": "off",
		},
	},
];
