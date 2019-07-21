module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    "plugins": [
        [
            "babel-plugin-root-import",
            {
                "@common/*": "./src/common/*",
                "@components/*": "./src/components/*",
                "@page/*": "./src/page/*",
                "@api/*": "./src/api/*",
                "app/*": "./src/app/*",
                "@assets/*": "./src/assets/*"
            }
        ]
    ],
};