const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'dist'),
};

// console.log(pages);
// function generateHtmlPlugins (templateDir) {
//     const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
//     return templateFiles.map(item => {
//         // Split names and extension
//         const parts = item.split('.')
//         const name = parts[0]
//         const extension = parts[1]
//         return new HtmlWebpackPlugin({
//             filename: `${name}.html`,
//             template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
//         })
//     })
// }
// const htmlPlugins = generateHtmlPlugins('./src/pug');
module.exports = {
    entry: {
        'index': paths.src + '/pages/ui-kit/index.js',
        'first': paths.src + '/pages/landing/index.js',
    },
    output: {
        path: paths.public,
        filename: "[name].min.js",
    },
    devServer: {
        port: 4000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/ui-kit/index.pug',
            filename: 'index.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/landing/index.pug',
            filename: 'firstpage.html',
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
