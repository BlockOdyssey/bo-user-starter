module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'react-app',
        'airbnb',
        'prettier',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended'
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: '12',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    ignorePatterns: ['node_modules/', 'serviceWorker.js', 'setupTests.js'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['default/src', 'src']
            }
        }
    },
    rules: {
        'prettier/prettier': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before'
                    },
                    {
                        pattern: 'slices/**',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: 'hooks/**',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: 'assets/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'utils/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '*.+(css|scss)',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true
                        },
                        group: 'object',
                        position: 'after'
                    }
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                warnOnUnassignedImports: true
            }
        ],
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',
        'no-param-reassign': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'no-alert': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-return-assign': 'off',
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
        'no-shadow': 'off',
        'no-nested-ternary': 'off',
        'no-unneeded-ternary': 'off',
        'react/no-array-index-key': 'off',
        'prefer-promise-reject-errors': 'off',
        'global-require': 'off',
        'no-restricted-syntax': 'off'
    }
};
