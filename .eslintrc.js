module.exports = {
    root: true,
    plugins: [
        "react",
        "react-native",
        "prettier"
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
        "plugin:prettier/recommended"
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "import/no-unresolved": "off",
        "react-native/no-raw-text": 0,
        indent: [
            "error",
            2
        ],
    },
    globals: {
        "fetch": true,
        "it": true
    }
};