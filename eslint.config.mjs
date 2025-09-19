// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/*', '__test__/*', '*.config.js', '*.setup.ts'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
