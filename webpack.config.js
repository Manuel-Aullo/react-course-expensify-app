// entry -> output
// module.exports (node.js) expose something (object) to another file
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
	const isProduction = env === "production";
	const CSSExtract = new ExtractTextPlugin("styles.css");
	return {
		entry: "./src/app.js",
		output: {
			path: path.join(__dirname, "public", "dist"),
			filename: "bundle.js"
		},// loader
		module: {
			rules: [{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: CSSExtract.extract({
					use:[
							{
								loader: "css-loader",
								options: {
									sourceMap: true
								}
							},
							{
								loader: "sass-loader",
								options: {
									sourceMap: true
								}
							}
					]
				})
			}]
		},
		plugins: [
			CSSExtract
		], // cheap-module-eval-source-map - shows in which component there is an error
		devtool: isProduction ? "source-map" : "inline-source-map",
		devServer: {// configurate dev-server
			contentBase: path.join(__dirname, "public"),
			port: 9090,
			historyApiFallback: true,
			publicPath: "/dist/"
		}
	};


}
