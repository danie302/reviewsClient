const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  // webpack will take the files from ./src/index
  entry: "./src/index",

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js",
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: [".jsx", ".js"],
  },

  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMap: false,
          },
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.(scss|sass|css)$/,
        loaders: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              importLoaders: 2,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
        loader: require.resolve("file-loader"),
        options: {
          name: "[name].[ext]?[hash]",
          outputPath: "assets/",
        },
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
          options: { minimize: true },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
    new Dotenv({
      safe: "./.env.example",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    hot: true,
    historyApiFallback: true,
    port: 9000,
  },
};
