const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
    entry: [
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 
                    argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(sc|sa)ss$/,
                use: [
                    argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings or extract to separate file
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new CleanWebpackPlugin(['dist/*.*']), // Remove all files in dist folder
    ],
    devServer: {
        open: true,
        port: 3000,  
        contentBase: './dist'
    },
});
