import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        rules: {
            'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
            '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
            '@typescript-eslint/no-empty-object-type': ['error', {allowObjectTypes: 'always'}],
        },
    },
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
