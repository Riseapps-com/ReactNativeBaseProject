module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    es6: true,
    'react-native/react-native': true,
    'jest/globals': true,
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
    'jest',
    'jest-formatting',
    'simple-import-sort',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  rules: {
    // es-lint
    // 'max-len': ['error', 100],
    // 'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
    // 'max-statements': ['error', 20],
    // 'max-depth': ['error', 3],
    // 'max-params': ['error', 5],
    // complexity: ['error', 20],
    // 'max-nested-callbacks': ['error', 4],
    // 'arrow-parens': ['error', 'as-needed'],
    // 'func-style': ['error', 'expression'],
    // 'no-negated-condition': 'error',
    // 'no-console': 'error',
    // 'no-param-reassign': ['error', { props: false }],
    // 'no-case-declarations': 'error',
    // 'padding-line-between-statements': [
    //   'error',
    //   {
    //     blankLine: 'always',
    //     prev: '*',
    //     next: 'return',
    //   },
    //   {
    //     blankLine: 'always',
    //     prev: ['const', 'let', 'var', 'block', 'block-like'],
    //     next: '*',
    //   },
    //   {
    //     blankLine: 'any',
    //     prev: ['const', 'let', 'var'],
    //     next: ['const', 'let', 'var'],
    //   },
    // ],

    // typescript
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['camelCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // typescript extension
    'default-param-last': 'off',
    'func-call-spacing': 'off',
    'no-duplicate-imports': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-use-before-define': 'off',
    'space-infix-ops': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@typescript-eslint/no-loop-func': ['error'],
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignore: [0],
        ignoreDefaultValues: true,
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],

    // react
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-deprecated': 'error',
    // jsx
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-handler-names': ['error', { checkLocalVariables: true, checkInlineFunction: true }],
    'react/jsx-no-literals': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-no-duplicate-props': 'error',

    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // react-native
    'react-native/split-platform-components': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',

    // simple-import-sort
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {},
    },
  ],
};
