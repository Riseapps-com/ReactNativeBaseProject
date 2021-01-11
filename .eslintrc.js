module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
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
    // airbnb es lint
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    camelcase: 'off',
    'no-throw-literal': 'off',
    'class-methods-use-this': 'off',
    'max-depth': ['error', 3],
    'max-len': ['error', 100],
    'max-lines': ['error', { max: 200 }],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 5],
    'max-statements': ['error', 20],
    'no-negated-condition': 'error',
    'no-console': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'block', 'block-like'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
    ],

    // typescript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
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
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // typescript extension
    'no-shadow': 'off',
    'default-param-last': 'off',
    'func-call-spacing': 'off',
    'no-duplicate-imports': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-use-before-define': 'off',
    'space-infix-ops': 'off',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/no-duplicate-imports': ['error', { includeExports: true }],
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1],
        ignoreDefaultValues: true,
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: false }],
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
    '@typescript-eslint/no-shadow': ['error'],

    // react
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-deprecated': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-unused-prop-types': 'error',
    'react/self-closing-comp': 'error',
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
      files: ['*.stories.tsx', '*.e2e.ts', '*.test.ts', '*.test.tsx', '**/__data__/*.ts'],
      rules: {
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'react/jsx-handler-names': 'off',
        'react/jsx-no-literals': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
