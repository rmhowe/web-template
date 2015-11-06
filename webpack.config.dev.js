var webpack = require('webpack');

module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/js/entry.js"]
  },

  output: {
    path: "./dist/js",
    publicPath: "/dist/js",
    filename: "app.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|vendor)/ },
      { test: /\.scss$/, loader: 'style!css!sass', exclude: /src\/fonts/ },
      { test: /\.css$/, loader: "style!css", exclude: /src\/fonts/ },
      { test: /\.(png|woff|woff2|eot|ttf|svg)/, loader: 'url-loader?limit=10000' }
    ]
  }
};