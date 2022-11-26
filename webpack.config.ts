const path = require("path");

module.exports = {
  //...
  resolve: {
    alias: {
      layouts: path.resolve(__dirname, "src/layouts/"),
      Templates: path.resolve(__dirname, "src/templates/"),
    },
  },
};
