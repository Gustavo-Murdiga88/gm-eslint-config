module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
    "airbnb",
    "prettier",
  ],

  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["@typescript-eslint", "jsx-a11y", "prettier"],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    extraFileExtensions: [".ts", ".tsx", ".d.ts"],
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    "import/extensions": "off",
    "import/no-unresolved":"off",
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "camelcase":"off",
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
        tabWidth: 2,
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
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
