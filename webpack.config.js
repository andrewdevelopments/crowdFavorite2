const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Display title in JSP way
            title: 'Crowd Favorite Dev Test',
            filename: 'index.html',
            inject: true,
            // Display from this template in dist/index.html
            template: path.resolve(__dirname, 'src', 'crowdFavorite.html'),
        })
    ],
    watch: true,
    devServer: {
        port: 8000,
        contentBase: path.join(__dirname, 'dist')
    }
};
