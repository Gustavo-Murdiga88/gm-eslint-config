module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "prettier",
  ],

  env: {
    es2021: true,
    node: true,
  },

  plugins: ["@typescript-eslint","simple-import-sort"],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-useless-constructor": "off",
		"max-classes-per-file": "off",
		"class-methods-use-this": "off",
		"no-plusplus": "off",
		"import/no-extraneous-dependencies": "off",
		"@typescript-eslint/no-explicit-any": "off",
    "no-undef": "off",
    "import/no-extraneous-dependencies": "off",
    "max-classes-per-file": "off",
    "no-underscore-dangle": "off",
    "no-new": "off",
    "no-plusplus": "off",
    "no-await-in-loop": "off",
    "class-methods-use-this":"off",
    "import/extensions": "off",
    "import/no-unresolved":"off",
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "camelcase":"off",
    "no-async-promise-executor": "off",
    "no-debugger": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
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
    
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
