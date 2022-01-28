const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'client', 'dist');
const SRC_DIR = path.resolve(__dirname, 'client', 'src');
const SRC_FILE = path.resolve(SRC_DIR, 'index.js');
const HTML_FILE = path.resolve(SRC_DIR, 'index_template.html');

module.exports = {
  entry: ['babel-polyfill', SRC_FILE],
  output: {
    filename: 'index_bundle.js',
    path: DIST_DIR,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Gradientize',
      template: HTML_FILE,
      inject: false,
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: DIST_DIR,
      contentBase: [SRC_DIR + '/assets'],
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.?(jpg|gif|svg|png|jpeg|tif|tiff)$/i,
        type: 'asset/resource',
        // use: ['file-loader?name=./assets/images/[name].[ext]'],
      },
    ],
  },
  resolve: {
    extensions: ['.css', '.tsx', '.jsx', '.ts', '.js', '...'],
  },
};
