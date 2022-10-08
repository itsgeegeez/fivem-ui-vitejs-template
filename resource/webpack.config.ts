import * as webpack from "webpack";
import * as path from "path";
import CopyPlugin from "copy-webpack-plugin";

const client = (env: any, argv: any): webpack.Configuration => {
  const isProduction = argv.mode === "production";
  return {
    resolve: {
      extensions: ['.ts']
    },
    entry: "./client/index.ts",
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "client.js",
    },
    devtool: !isProduction ? "source-map" : undefined,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "esbuild-loader",
          options: {
            loader: "ts", // Or 'ts' if you don't need tsx
            target: "esnext",
            tsconfigRaw: require("./client/tsconfig.json"),
          },
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "static",
            to: "../",
          },
        ],
      }),
    ],
  };
};

const server = (env: any, argv: any): webpack.Configuration => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./server/index.ts",
    resolve: {
      extensions: ['.ts']
    },
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "server.js",
    },
    devtool: !isProduction ? "source-map" : undefined,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "esbuild-loader",
          options: {
            loader: "ts", // Or 'ts' if you don't need tsx
            target: "es2015",
            tsconfigRaw: require("./server/tsconfig.json"),
          },
        },
      ],
    },
    plugins: [],
  };
};

module.exports = [client, server];