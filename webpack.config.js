const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js",
    },
    devServer: {
        port: 4000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./index.pug`
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
        ]
    }
};
