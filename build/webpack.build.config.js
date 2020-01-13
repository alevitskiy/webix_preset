const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const RemovePlugin = require("remove-files-webpack-plugin");

const buildWebpackConfig = merge(baseWebpackConfig, {
	mode: "production",
	plugins: [
		new RemovePlugin({
			before: {
				include: [
					"dist"
				]
			}
		})
	]
});

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig);
});
