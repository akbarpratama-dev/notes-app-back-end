import js from '@eslint/js';
import globals from 'globals';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  js.configs.recommended,
  daStyle,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
];