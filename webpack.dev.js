const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
        proxy: [
            {
                context: ['/proxy-api/**'],
                target: 'https://proxy-api/api/',
                pathRewrite: {'^/api/': '/'},
                secure: false,
                onProxyReq: proxyReq => {
                    proxyReq.setHeader('Host', 'my-custom-host');
                },
            },
        ]
    },
});