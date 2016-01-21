const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const sassLoaders = [
  "css-loader",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./"),
];

module.exports = {
   entry: './App.jsx',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/../build'
   },
   module: {
      loaders: [
		 { test: /\.jsx/, loaders: ['babel'], exclude: /node_modules/ },
         { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
         { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!")) },
         {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.jpg$/,
                loader: 'file'
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin("site.css"),
   ],
  resolve: {
    extensions: ["", ".js", ".scss"],
    modulesDirectories: ["", "node_modules"],
  }
}
