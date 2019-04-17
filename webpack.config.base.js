var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [path.resolve(__dirname, 'client/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {
    preLoaders: [],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.html$/, loader: 'html', query: { name: '[name].[ext]' }},
      {test: /\.s?(c|a)ss$/, loader: 'style'},
      {test: /\.s?(c|a)ss$/, loader: 'css'},
      {test: /\.s(c|a)ss$/, loader: 'postcss'},
      {test: /\.s(c|a)ss$/, loader: 'sass', query: { outputStyle: 'expanded' }},
      {test: /\.(gif|png|jpg|svg|woff|woff2|ttf|eot)$/, loader: 'url', query: { limit: 25000 }},
      {test: /\.json$/, loader: 'json'},
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html')
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.jQuery': 'jquery',
      angular: 'imports?this=>global!exports?this.angular!angular',
      'angular.mock': 'imports?this=>global&angular!exports?this.angular.mock!angular-mocks'
    })
  ],
  postcss: function() {
    return [require('autoprefixer')];
  }
};
