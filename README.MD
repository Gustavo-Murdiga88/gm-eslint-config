# @gm-dev/eslint-config

<p>
This package was built for help when you need config eslint on your project. This packege has config several, you can applicate this in projects as nextJS, vite and projects back-end with nodeJs. 
</p>

# Install

```js
  npm i @gm-dev/eslint-config -D
```
# Usage example

```js
// eslint.config.mjs

import gm from "@gm-dev/eslint-config/node";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
		files: ["*.ts", "*.tsx"],
		ignores: [], 
	},
  ...gm
];

```

<!-- # Indicate
<p>
I indicate a config  for more patterns in the config eslint.

for more information's find in
<a href="https://github.com/Tibfib/eslint-plugin-import-helpers">
eslint-plugin-import-helpers
</a>
<p>

<br/>

```json
"import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^(react)$/",
          "/^(@/components)/",
          "/^(assets|styles)/",
          "/^(./)/"
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ],

```

```json
   "plugins": ["eslint-plugin-import-helpers"]

``` -->