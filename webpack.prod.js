const commonConfig = require("./webpack.common")

module.exports = {
  mode: "production",
  devtool: "none",
  ...commonConfig,
}
