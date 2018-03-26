// entry -> output
// module.exports (node.js) expose something (object) to another file
const path = require("path");
module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js"
	},// loader
	module: {
		rules: [{
			loader: "babel-loader",
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			test: /\.s?css$/,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader"
			]
		}]
	},// cheap-module-eval-source-map - shows in which component there is an error
	devtool: "cheap-module-eval-source-map",
	devServer: {// configurate dev-server
		contentBase: path.join(__dirname, "public"),
		port: 9090,
		historyApiFallback: true
	}

};
