module.exports.js = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: "babel-loader",
}

module.exports.css = {
  test: /\.css$/,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: "css-loader",
      // options: {
      //   modules: {
      //     localIdentName: "__[name]-[local]",
      //   },
      //   importLoaders: 1,
      //   sourceMap: true,
      // },
    },
  ],
}
