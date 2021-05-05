## Editor config
Configurações da IDE, `.editorconfig`
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

## Eslint
```bash
yarn add eslint eslint-import-resolver-typescript -D
yarn eslint --init
```
Ignorar arquivos, `.eslintignore`
```
/*.js
node_modules
dist
```

Configurações Eslint, `.eslintrc.json`
```json
{
  "env": {
      "es2021": true,
      "node": true
  },
  "extends": [
      "airbnb-base",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint",
      "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "no-use-before-define": "off",
    "no-console": "off",
    "camelcase": "off",
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

## Pretter
Dependências que precisam ser adicionadas
```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Arquivo de configuração do pretter, `prettier.config.js`
```js
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
	arrowParens: 'avoid',
}
```

## Debug VSCode
Configurações de debug do VScode, `.vscode/launch.json`
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "protocol": "inspector",
      "restart": true,
      "name": "Debug",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ]
    }
  ]
}
```

## Build
Dependências que precisam ser adicionada
```bash
yarn add @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver babel-plugin-transform-typescript-metadata @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D
```
Arquivo de configurações do babel, `babel.config.js`
```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@modules': './src/modules',
        '@config': './src/config',
        '@shared': './src/shared'
      }
    }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ],
}
```
