/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pages = ['index', 'Home', 'parkingSpot'];

module.exports = {
  mode: 'development',
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: pages.reduce((config, page) => {
    config[page] = `./src/scripts/${page}.ts`;
    return config;
  }, {}),
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  module: {
    // configuration regarding modules
    rules: [
      { // define typescript loader and file extensions
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // load files that end with scss and css
        use: [
          'style-loader',
          'css-loader'
        ],
      }
      
    ],
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.js', '.ts'], // files to load
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [].concat(
    pages.map(
      (page) => new HtmlWebpackPlugin({
        inject: true,
        template: `./src/pages/${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
      }),
    ),
    [
      new CleanWebpackPlugin(),
    ],
  ),
};
