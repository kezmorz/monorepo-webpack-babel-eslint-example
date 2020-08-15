const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = directory => {
  return {
    entry: path.join(directory, './src/index.js'),
    output: {
      filename: 'index.js',
      path: path.join(directory, 'dist'),
      libraryTarget: 'umd'
    },
    externals: [
      nodeExternals({modulesDir: path.join(directory, 'node_modules')}),
      nodeExternals({modulesDir: path.join(__dirname, 'node_modules')})
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin()
      ]
    }
  }
}