const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = env => {
	return {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      { 
      test: /\.css$/,
      use: [ 
        'style-loader',
        'css-loader',
      ],
      },
      {
        test: /\.(jpe?g|gif|png|PNG|ico|ogg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            emitFile: false,
          },
        }],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            emitFile: false,
          },
        }],
      },
      {
        test: /\.svg/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            emitFile: false,
            mimetype: 'image/svg+xml'
          }
        }]
      }
    ],
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve(__dirname),
    ],

    alias: {
      '@': path.join(__dirname, 'src')
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      _: 'lodash',
      React: 'react'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  }
}
};