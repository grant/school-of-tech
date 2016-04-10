var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    //"webpack-dev-server/client?http://localhost:3000", // Needed for hot reloading
    //"webpack/hot/only-dev-server", // See above
    path.resolve(__dirname, 'js/app.js')
  ],
  output: {
    path: path.resolve(__dirname, '../static/build'),
    filename: "js/[name].js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
  ],
  target: "web",
  stats: false,
  progress: true
};
