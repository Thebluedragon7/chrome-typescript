const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const ENTRY = {
  popup: "./src/popup/popup.tsx",
  options: "./src/options/options.tsx",
  background: "./src/background/background.ts",
  content: "./src/content/content.ts",
};

const HTML_ENTRY = ["popup", "options"];

const entryHtmlPlugins = HTML_ENTRY.map((entryName) => {
  return new HtmlWebpackPlugin({
    template: `./src/${entryName}/${entryName}.html`,
    filename: `${entryName}/${entryName}.html`,
    chunks: [entryName],
    inject: false,
  });
});

module.exports = {
  entry: ENTRY,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: ["/node_modules/", "/dist/"],
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  plugins: [
    ...entryHtmlPlugins,
    new CopyPlugin({
      patterns: [
        {
          from: "./public",
        },
      ],
    }),
  ],
};
