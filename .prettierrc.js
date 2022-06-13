const { join } = require("path");

module.exports = {
  ...require("@deepsquare/prettier-config"),
  plugins: [
    join(__dirname, "node_modules/@trivago/prettier-plugin-sort-imports"),
  ]
};
