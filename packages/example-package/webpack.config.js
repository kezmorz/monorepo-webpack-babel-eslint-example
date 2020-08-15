const config = require('../../webpack.shared')(__dirname);

module.exports = {
  ...config,
  output: {
    ...config.output,
    library: 'org-name/example-package'
  }
};
