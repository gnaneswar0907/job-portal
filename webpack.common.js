/** third party packages */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** local imports */
const loaders = require("./loaders")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".css"],
  },
  module: {
    rules: [loaders.js, loaders.css],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
}
