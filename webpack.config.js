const path = require('path');

module.exports = {
  entry: [
    './src/scripts/projects.js',
    './src/scripts/projectsData.js',
    './src/scripts/index.js'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
    watch: true,
};
