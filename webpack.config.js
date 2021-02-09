const path = require('path');

module.exports = {
  entry: [
    './src/scripts/init.js',
    './src/scripts/createProjectCards.js',
    './src/scripts/projectsData.js',
    './src/scripts/index.js',
    './src/scripts/printToDom.js',
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
    watch: true,
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
};
