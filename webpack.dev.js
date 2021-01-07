const commonConfig = require("./webpack.common")

module.exports = {
  devtool: "source-map",
  mode: "development",
  devServer: {
    port: 3001,
  },
  ...commonConfig,
}
