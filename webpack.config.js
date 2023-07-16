const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      HOST: "0.0.0.0",
      POST: "8080",
    }),
    // new webpack.EnvironmentPlugin({
    //   HOST: JSON.stringify(process.env.PORT) || "0.0.0.0",
    //   POST: JSON.stringify(process.env.PORT) || "8080",
    // }),
    // new webpack.DefinePlugin({
    //   "process.env.HOST": JSON.stringify(process.env.HOST),
    //   "process.env.PORT": JSON.stringify(process.env.PORT),
    // }),
  ],
};
