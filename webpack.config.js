const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // Add your loaders for handling different file types
    ],
  },
  devServer: {
    setupMiddlewares: (devServer) => {
      // You can add your custom middleware setup here if needed
    },
    // Other devServer configurations
  },
};
