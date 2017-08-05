var path = require('path');

module.exports={
	devtool: 'eval-source-map',
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
          			presets: ['es2015','react']
        		}
			}
		]
	},

  devServer: {
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true,
    inline: true,
    hot: true,
    compress: true,
    port: 3080
  },
}