var path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src') + '/index.js',
    'webpack-dev-server/client?http://0.0.0.0:80'
  ],
  output: {
      path: path.resolve(__dirname, 'dist') + '/app',
      filename: 'bundle.js',
      publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
      presets: ['react', 'env']
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }, ]
    }]
  }
};
