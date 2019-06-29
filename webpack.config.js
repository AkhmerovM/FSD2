const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
    src: path.resolve(__dirname, '/src'),
    public: path.resolve(__dirname, '/dist'),
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
    entry: './index.js',
    output: {
        path: paths.public,
        filename: "[name].min.js",
    },
    devServer: {
        port: 4000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/firstpage.pug'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
        ]
    }
};
