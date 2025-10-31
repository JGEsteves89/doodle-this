import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', 'dist'],
    plugins: {
      '@stylistic': stylistic,
      react,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        browser: true,
        node: true,
        amd: true,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      // ======================================================
      // REACT + ACCESSIBILITY RULES
      // ======================================================
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/accessible-emoji': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],

      // ======================================================
      // TYPESCRIPT RULES
      // ======================================================
      '@typescript-eslint/explicit-function-return-type': 'off',

      // ======================================================
      // IMPORT SORTING
      // ======================================================
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // ======================================================
      // STYLISTIC (FORMATTING) RULES
      // ======================================================

      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/quotes': [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: 'always' },
      ],
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/max-len': [
        'warn',
        {
          code: 120,
          ignoreComments: false,
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
          ignoreUrls: true,
          ignorePattern: '^import |^export ',
        },
      ],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': [
        'error',
        { max: 2, maxEOF: 0, maxBOF: 0 },
      ],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' },
      ],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/operator-linebreak': [
        'error',
        'after',
        { overrides: { '?': 'before', ':': 'before' } },
      ],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/jsx-curly-spacing': [
        'error',
        { when: 'never', attributes: true, children: false },
      ],
      '@stylistic/object-property-newline': [
        'error',
        { allowAllPropertiesOnSameLine: true },
      ],
      '@stylistic/key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
          mode: 'minimum',
        },
      ],

      // Disable overlapping core rules
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
      'no-trailing-spaces': 'off',
      'eol-last': 'off',
      'no-multiple-empty-lines': 'off',
      'keyword-spacing': 'off',
      'space-before-function-paren': 'off',
      'arrow-spacing': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'operator-linebreak': 'off',
      'space-before-blocks': 'off',
      'space-in-parens': 'off',
      'key-spacing': 'off',
      'linebreak-style': 'off',
    },
  },
);
