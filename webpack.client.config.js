const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const buildDirectory = 'dist';
const outputDirectory = buildDirectory + '/client';

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
      path: path.join(__dirname, buildDirectory),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
 	,{
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'file-loader' }
	]
    }
    ,
    devServer: {

            allowedHosts: [ 'ec2-3-16-66-179.us-east-2.compute.amazonaws.com'],

            port: 3000,
        open: true,
    
      historyApiFallback: true,

    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, buildDirectory)]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
