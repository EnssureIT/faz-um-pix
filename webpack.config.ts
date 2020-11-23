// tslint:disable:object-literal-sort-keys
import path = require("path");
import * as webpack from "webpack";
import * as pkg from "./package.json";

const banner = `/**
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * Author: ${pkg.author}
 */`;

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: `${pkg.name}.js`,
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
    library: pkg.name,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }]
  },

  plugins: [new webpack.BannerPlugin(banner)]
};
