const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
	src: path.join(__dirname, "../src"),
	dist: path.join(__dirname, "../dist"),
	assets: "assets/"
};

module.exports = {
	externals: {
		paths: PATHS
	},

	entry: {
		app: PATHS.src
	},

	output: {
		filename: `${PATHS.assets}js/[name].[hash].js`,
		path: PATHS.dist,
		publicPath: "/" // for server
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: "vendors",
					test: /(node_modules|libs)/,
					chunks: "all",
					enforce: true
				}
			}
		}
	},

	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: /(node_modules|libs)/
		}, {
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			loader: "file-loader",
			options: {
				name: "[name].[ext]"
			}
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: "file-loader",
			options: {
				name: "[name].[ext]"
			}
		}, {
			test: /\.less$/,
			use: [
				"style-loader",
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {sourceMap: true}
				}, {
					loader: "postcss-loader",
					options: {sourceMap: true, config: {path: "./postcss.config.js"}}
				}, {
					loader: "less-loader",
					options: {sourceMap: true}
				}
			]
		}, {
			test: /\.s[ac]ss$/i,
			use: [
				"style-loader",
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {sourceMap: true}
				}, {
					loader: "postcss-loader",
					options: {sourceMap: true, config: {path: "./postcss.config.js"}}
				}, {
					loader: "sass-loader",
					options: {sourceMap: true}
				}
			]
		}, {
			test: /\.css$/,
			use: [
				"style-loader",
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {sourceMap: true}
				}, {
					loader: "postcss-loader",
					options: {sourceMap: true, config: {path: "./postcss.config.js"}}
				}
			]
		}]
	},

	resolve: {
		alias: {
			"~": "src"
		}
	},

	plugins: [
		new webpack.ProvidePlugin({
			webix: `${PATHS.src}/libs/webix/webix`
		}),

		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].[hash].css`
		}),

		new HtmlWebpackPlugin({
			template: `${PATHS.src}/index.html`,
			filename: "./index.html",
			inject: true
		}),

		new CopyWebpackPlugin([
			{from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}/img`},
			{from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}/fonts`},
			{from: `${PATHS.src}/static`, to: ""}
		])
	]
};

