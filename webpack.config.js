const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'dist'),
};

module.exports = {
    entry: {
        'index': paths.src + '/js/index.js',
    },
    devtool: "source-map",
    output: {
        path: paths.public,
        filename: "[name].min.js",
    },
    devServer: {
        port: 4001,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/ui-kit/index.pug',
            filename: 'index.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/landing/index.pug',
            filename: 'landing.html',
            inject: 'body',
        }),
        new ExtractTextPlugin({
            filename: '[name].min.css'
        })
    ],
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: "url-loader",
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true,
                }
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            },
        ]
    }
};
