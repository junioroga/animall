module.exports = {
  extends: [
    'universe',
    'universe/shared/typescript-analysis',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['react-hooks', 'i18next', '@tanstack/query', 'simple-import-sort'],
  ignorePatterns: ['webpack.config.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'i18next/no-literal-string': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'no-console': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'lodash',
        message: 'Please import submodules instead of the full lodash package.',
      },
      {
        name: 'date-fns',
        message:
          'Please import submodules instead of the full date-fns package.',
      },
    ],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000', '^react', '^react-native'],
          ['^@?\\w', '^react-native-?\\w'],
          ['^expo?\\w'],
          ['^tamagui?\\w', '^@tamagui?\\w'],
          [
            '^@assets',
            '^@components',
            '^@hooks',
            '^@navigators',
            '^@pages',
            '^@router',
            '^@utils',
            '^@store',
            '^@config',
            '^@services',
            '^@test',
          ],
          ['^\\.'],
          ['~?\\w'],
          ['\\./styles'],
        ],
      },
    ],
    'import/order': ['off'],
  },
  settings: {
    'babel-plugin-root-import': {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  },
}
