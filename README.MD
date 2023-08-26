# @gm/eslint-config/next

<p>
This package was built for help when you need config eslint on your project. This packege has config several, you can applicate this in projects as nextJS, vite and projects back-end with nodeJs. 
</p>

# Install

```js
npm install @gm/eslint-config -D
```

# Usage example

```json
"extends": ["@gm/eslint-config/next"],
```

# Indicate

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
   plugis: ["eslint-plugin-import-helpers"]

```

<br/>
