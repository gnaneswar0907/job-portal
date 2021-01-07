module.exports = {
  presets: [
    ["@babel/preset-env", { exclude: ["transform-classes"] }],
    "@babel/preset-react",
  ],
  plugins: [
    "babel-plugin-jsx-control-statements",
    [
      "babel-plugin-module-resolver",
      {
        root: ["./"],
        alias: {
          "^components/(.+)": "./src/components/\\1",
          "^views/(.+)": "./src/views/\\1",
          "^state/(.+)": "./src/state/\\1",
          "^api/(.+)": "./src/api/\\1",
          "^hooks/(.+)": "./src/hooks/\\1",
        },
      },
    ],
  ],
}
