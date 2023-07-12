module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['react-hooks', 'i18next'],
  ignorePatterns: ['webpack.config.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'i18next/no-literal-string': 2,
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
    ],
  },
  settings: {
    'babel-plugin-root-import': {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  },
}
