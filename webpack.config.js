require('dotenv').config();
const path = require('path');
const filename =
	process.env.NODE_ENV === 'development' ? 'index.dev.js' : 'index.min.js';
module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: filename,
		library: 'obten',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: '/.(js)$/',
				exclude: '/node_modules/',
				use: 'babel-loader',
			},
		],
	},

	mode: process.env.NODE_ENV,
};
