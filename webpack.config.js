const path = require('path');

module.exports = {
  entry: './src/linked-lists.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
