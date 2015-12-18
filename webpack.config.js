var webpack = require('webpack');

module.exports = {
  entry: "./src/js/entry.js",

  devtool: "cheap-module-source-map",

  output: {
    path: "./dist/js/",
    publicPath: "/dist/js/",
    filename: "app.min.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|vendor)/ },
      { test: /\.scss$/, loader: 'style!css!sass', exclude: /src\/fonts/ },
      { test: /\.css$/, loader: "style!css", exclude: /src\/fonts/ },
      { test: /\.(png|woff|woff2|eot|ttf|svg)/, loader: 'url-loader?limit=10000' }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
