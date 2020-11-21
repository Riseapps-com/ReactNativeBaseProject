module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2016,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  globals: {
    renderComponent: true,
    createMockParserException: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
    'simple-import-sort',
    'import',
    'jest',
    'jest-formatting',
    'prettier',
    'destructuring',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    typescript: {
      alwaysTryTypes: true,
      directory: './',
    },
  },
  rules: {
    'max-len': ['error', 100],
    'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
    'max-statements': ['error', 20],
    'max-depth': ['error', 3],
    'max-params': ['error', 5],
    complexity: ['error', 20],
    'max-nested-callbacks': ['error', 4],
    'arrow-parens': ['error', 'as-needed'],
    'func-style': ['error', 'expression'],
    'no-negated-condition': 'error',
    'no-console': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-case-declarations': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'block', 'block-like'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-cycle': ['error'],

    'simple-import-sort/imports': 'error',

    'destructuring/in-params': ['error', { 'max-params': 0 }],
    'destructuring/in-methods-params': 'error',

    'react/prop-types': 'off',
    'react/no-deprecated': 'error',
    'react/display-name': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-literals': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['error'],

    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/sort-styles': 'off',

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'memberLike',
        format: ['camelCase'],
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'react/jsx-no-literals': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
      },
    },
  ],
};
