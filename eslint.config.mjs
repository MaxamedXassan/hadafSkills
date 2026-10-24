import js from '@eslint/js';

export default [
  {
    ...js.configs.recommended,
    files: ['app/**/*.{js,jsx}'],
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z]' }],
    },
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        console: 'readonly',
        FormData: 'readonly',
        window: 'readonly',
      },
    },
  },
  { ignores: ['.next/**', 'out/**', 'node_modules/**'] },
];
