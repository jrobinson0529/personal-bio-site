const path = require('path');

module.exports = {
  entry: [
    './src/projects.js',
    './src/projectsData.js'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
