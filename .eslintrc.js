module.exports = {
    root: true,
    plugins: [
        "react",
        "react-native",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
            modules: true
        },
        sourceType: "module",
        useJSXTextNode: false
    },
    extends: [
        "airbnb",
        "standard",
        "standard-react",
        "plugin:react/recommended",
        "plugin:react-native/all",
        "plugin:prettier/recommended",
        "prettier/react",
        "prettier",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react-native/no-raw-text": 0,
        indent: [
            "error",
            4
        ],
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        'import/no-unresolved': "off",
        'import/no-unassigned-import': "off",
        'import/no-extraneous-dependencies': "off",
        'react/void-dom-elements-no-children': 0,
        'react/sort-comp': 0,
        'react/require-render-return': 0,
        'react/require-default-props': 0,
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
        'react/prefer-es6-class': 0,
        'react/no-unused-state': 0,
        'react/no-unused-prop-types': 0,
        'react/no-unsafe': 0,
        'react/no-this-in-sfc': 0,
        'react/no-string-refs': 0,
        'react/no-typos': 0,
        'react/no-set-state': 0,
        'react/no-redundant-should-component-update': 0,
        'react/no-multi-comp': 0,
        'react/no-direct-mutation-state': 0,
        'react/no-deprecated': 0,
        'react/default-props-match-prop-types': 0,
        '@typescript-eslint/prefer-interface': 0,
        'prettier/prettier': [true, './.prettierrc']
    },
    globals: {
        "fetch": true,
        "it": true
    }
};
