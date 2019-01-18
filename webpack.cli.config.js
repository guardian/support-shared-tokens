const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const base = require('./webpack.config.js');
const requireFromString = require('require-from-string');
const TargetToHtmlPlugin = require('./webpack/TargetToHtmlPlugin');
const path = require('path');

module.exports = {
	...base,
	output: {
		...base.output,
		path: path.resolve(__dirname, './dist'),
	},
	target: 'node',
	entry: {
		head: ['./targets/header.target'],
	},
	module: {
		...base.module,
		rules: [
			{
				test: /\.target$/,
				use: ['babel-loader', TargetToHtmlPlugin.loader],
			},
			{
				test: /\.jsx$/,
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
			filename: '[name].out.css',
		}),
		{
			apply: compiler => {
				compiler.plugin('emit', function(compilation, callback) {
					compilation.chunks.forEach(function(chunk) {
						chunk.files.filter(function(filename) {
							if (filename.includes('.js')) {
								var src = compilation.assets[filename].source();
								const m = requireFromString(src);
								compilation.assets[filename.replace('.js', '.html')] = {
									source: () => m.default,
									size: () => m.default.length,
								};
								delete compilation.assets[filename];
								return false;
							}
							return true;
						});
					});

					callback();
				});
			},
		},
	],
	externals: [nodeExternals()],
};
