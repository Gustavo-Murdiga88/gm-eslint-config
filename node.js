import pluginJs from "@eslint/js";
import eslint from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

/**@type {import("eslint").Linter.Config} */
export default [
  { languageOptions: { globals: globals.browser } },
  prettier,
  pluginJs.configs.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommended({
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
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];
