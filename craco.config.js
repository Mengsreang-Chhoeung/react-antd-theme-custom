const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1890FF' },
            lessVarsFilePath: './src/styles/antd-theme-custom.less',
            lessVarsFilePathAppendToEndOfContent: true,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};