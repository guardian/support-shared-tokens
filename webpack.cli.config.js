const path = require('path');
const nodeExternals = require('webpack-node-externals');
const base = require('./webpack.config.js');

module.exports = {
	...base,
	target: 'node',
	entry: {
		app: ['./src/scripts.js'],
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle-back.js',
	},
	externals: [nodeExternals()],
};
