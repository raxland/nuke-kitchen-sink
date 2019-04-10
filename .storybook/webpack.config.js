const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: [/\.stories\.js$/, /index\.js$/],
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre',
      },
    ],
  },
  externals: {
    '@weex-module/animation': 'null',
    '@weex-module/dom': 'null',
    '@weex-module/modal': 'null',
    '@weex-module/navigator': 'null',
    '@weex-module/picker': 'null',
    '@weex-module/expressionBinding': 'null',
  },
  resolve: {
    alias: {
      nuke: 'weex-nuke',
      // react: 'rax',
      // 'react-dom': 'rax',
    },
  },
};
