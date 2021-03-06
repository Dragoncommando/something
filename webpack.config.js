'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		content: './src/content',
		background: './src/background',
		options: './src/options'
	},
	plugins: [
		new webpack.DefinePlugin({
			process: '0'
		}),
		new webpack.optimize.ModuleConcatenationPlugin()
	],
	output: {
		path: path.join(__dirname, 'extension'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
