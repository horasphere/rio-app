
var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
      App: './src/main.js'
  },
  output: {
		path: path.join(__dirname, "assets"),
		publicPath: "assets/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
  },
  externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
  },
  module: {
    loaders: [
        { test: /\.html$/, loader: 'raw-loader' },
        { test: /\.json/, loader: 'raw-loader' },
        { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.tag$/, loader: 'tag' }
        ]
      },
    resolve: {
        root: [path.join(__dirname, "bower_components"), path.join(__dirname, "src")]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
            riot: "riot",
            _: "underscore",
            jQuery: "jquery",
            $: "jquery"
        })
    ]
};
