const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const base = require('./webpack.config.js');

module.exports = {
	...base,
	target: 'node',
	entry: {
		header: ['./static-target/header.js'],
	},
	module: {
		...base.module,
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		{
			apply: compiler => {},
		},
	],
	externals: [nodeExternals()],
};
