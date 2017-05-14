const path = require('path')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  }
};
