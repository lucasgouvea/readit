const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
