
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    filename: "nxt-reader-core.js",
    path: __dirname + "/dist",
    library: "NxtReaderCore",
    libraryTarget: "umd",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: false,

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins:[new CleanWebpackPlugin()],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {}
};