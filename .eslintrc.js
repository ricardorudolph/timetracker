module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    plugins: ['react'],
    rules: {
        '@typescript-eslint/consistent-type-definitions': 'warn',
        '@typescript-eslint/dot-notation': 'warn',
        '@typescript-eslint/explicit-member-accessibility': [
            'warn',
            {
                accessibility: 'no-public'
            }
        ],
        '@typescript-eslint/indent': ['warn', 'tab'],
        '@typescript-eslint/member-delimiter-style': [
            'warn',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false
                }
            }
        ],
        '@typescript-eslint/member-ordering': 'warn',
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                leadingUnderscore: 'allow',
                format: ['camelCase', 'PascalCase']
            },

            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE']
            },

            {
                selector: ['objectLiteralProperty', 'typeProperty'],
                leadingUnderscore: 'allow',
                format: ['camelCase', 'snake_case', 'PascalCase']
            },
            {
                selector: 'parameter',
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow'
            },

            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase']
            },

            {
                selector: 'typeLike',
                format: ['PascalCase']
            }
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-inferrable-types': [
            'warn',
            {
                ignoreParameters: true
            }
        ],
        '@typescript-eslint/no-misused-new': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-shadow': [
            'warn',
            {
                hoist: 'all'
            }
        ],
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/quotes': ['warn', 'single'],
        '@typescript-eslint/semi': ['warn', 'always'],
        '@typescript-eslint/type-annotation-spacing': 'warn',
        '@typescript-eslint/unified-signatures': 'warn',
        'arrow-body-style': 'warn',
        'brace-style': ['warn', '1tbs'],
        'comma-dangle': 'warn',
        'constructor-super': 'warn',
        curly: 'warn',
        'default-case': 'warn',
        'eol-last': 'warn',
        eqeqeq: ['warn', 'always'],
        'guard-for-in': 'warn',
        'id-blacklist': [
            'warn',
            'any',
            'Number',
            'number',
            'String',
            'string',
            'Boolean',
            'boolean',
            'Undefined',
            'undefined'
        ],
        'id-match': 'warn',
        'max-len': [
            'warn',
            {
                code: 140
            }
        ],
        'no-bitwise': 'warn',
        'no-caller': 'warn',
        'no-console': [
            'warn',
            {
                allow: [
                    'warn',
                    'dir',
                    'timeLog',
                    'assert',
                    'clear',
                    'count',
                    'countReset',
                    'group',
                    'groupEnd',
                    'table',
                    'info',
                    'dirxml',
                    'error',
                    'groupCollapsed',
                    'Console',
                    'profile',
                    'profileEnd',
                    'timeStamp',
                    'context'
                ]
            }
        ],
        'no-debugger': 'warn',
        'no-empty': 'off',
        'no-eval': 'warn',
        'no-fallthrough': 'warn',
        'no-multiple-empty-lines': 'warn',
        'no-new-wrappers': 'warn',
        'no-throw-literal': 'warn',
        'no-trailing-spaces': 'warn',
        'no-undef': 'off',
        'no-undef-init': 'warn',
        'no-underscore-dangle': 'warn',
        'no-unused-labels': 'warn',
        'no-var': 'warn',
        'prefer-const': 'warn',
        radix: 'warn',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'spaced-comment': [
            'warn',
            'always',
            {
                markers: ['/']
            }
        ],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off'
    }
};
