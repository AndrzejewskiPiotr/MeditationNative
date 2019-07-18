module.exports = {
    resolver: {
        resolverMainFields: ['react-native'],
    },
    transformer: {
        getTransformOptions: async() => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};