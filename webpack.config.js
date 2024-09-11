const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/todo.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/todo.html",
    }),
  ],
  resolve: {
    fallback: {
      "constants": require.resolve("constants-browserify"),
      "path": require.resolve("path-browserify"),
      "util": require.resolve("util/")
      // Add other fallbacks as needed
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};