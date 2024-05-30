const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: gameController } = require('./src/game-controller');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        screenController: './src/screen-controller',
        gameController: './src/game-controller'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'BattleShip',
            template: './src/index.html'
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            }
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};