const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
        const webpackMode = env === 'production' ? 'production' : 'development';
        const plugins = config.plugins || [];

        config.plugins = [
            ...plugins,
            new webpack.DefinePlugin({
                SERVICE_VERSION: JSON.stringify(packageJson.version),
                SERVICE_ENVIRONMENT: JSON.stringify(webpackMode),
            }),
        ];
        return config;
    },
};
