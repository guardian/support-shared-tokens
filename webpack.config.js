const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].out.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
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
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		contentBase: './dist',
	},
};
