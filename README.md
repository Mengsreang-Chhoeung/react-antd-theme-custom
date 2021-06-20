# អំពីការ Configuration Antd Theme Custom ទៅលើ Project React JS

- ទីមួយ:

```js
yarn create react-app project-name --template typescript
```

> **Command** ខាងលើគឺក្នុងលក្ខខ័ណ្ឌអ្នកមិនទាន់បានបង្កើត _Project React JS_ រួចរាល់ តែបើសិនជាអ្នកបានបង្កើតរួចរាល់ហើយ អ្នកអាចទៅជំហានខាងក្រោមទៀត។

- ទីពីរ:

```js
yarn add antd @ant-design/icons
```

> **Command** ខាងលើមាន _packages_ ចំនួនពីរគឺ _antd_ ដែលប្រើសម្រាប់ប្រើ _library_ របស់ _antd_ នឹង _@ant-design/icons_ ប្រើសម្រាប់ប្រើ _icon_ របស់ _antd_។

```js
yarn add @craco/craco
```

> **Command** ខាងលើមាន _package_ ចំនួនមួយគឺ _@craco/craco_ ដែលប្រើសម្រាប់ _custom theme_ ជាមួយ _antd_។

```js
yarn add craco-less
```

> **Command** ខាងលើមាន _package_ ចំនួនមួយគឺ _craco-less_ ដែលប្រើសម្រាប់ _custom theme antd_ ជាមួយ _less_។

- ទីបី:

> បង្កើត _file_ មួយនៅ _root folder_ ឈ្មោះថា `craco.config.js` ហើយសរសេរកូដទាំងនេះនៅពីក្រោមកូដខាងលើ:

```js
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
```

> កូដខាងលើនេះ គឺខ្ញុំសុំពន្យល់ខ្លីៗនៅកន្លែងដែលសំខាន់ ដូចជា `modifyVars` នៅ _property_ មួយនេះគឺយើងចង់កំណត់ជា តម្លៃពណ៍ដំបូងនៅទីនេះក៏បានឬក៏យើងអាចប្រើ _property_ មួយទៀតជំនួសបានគឺ `lessVarsFilePath` ដែល _property_ មួយនេះគឺយើងអាចកំណត់ជា _path_ ទៅកាន់ _file less_ របស់យើង ដូចដែលដែលឃើញចឹងគឺ `./src/styles/antd-theme-custom.less` ដូច្នេះអ្នកត្រូវបង្កើត _less file_ ឲ្យដូចទៅនឹង _path_ ដែលអ្នកបានកំណត់នៅក្នុង `lessVarsFilePath` មួយនេះ។ មួយវិញទៀត អ្នកត្រូវចំណាំថាទាល់តែ _property_ `lessVarsFilePathAppendToEndOfContent: true` នេះមានតម្លៃ `true` ដែរទើប _less file_ របស់អ្នកអាចដំណើរការ។ មួយទៀតគឺនៅក្នុងចំណុចនេះ ខ្ញុំសុំ _comment property_ `modifyVars` ចោលមានន័យថា ខ្ញុំមិនប្រើវា។

> src / styles / antd-theme-custom.less

```js
@import '../../node_modules/antd/dist/antd.less';

@primary-color: #ff18a6; // primary color for all components
@link-color: #1890ff; // link color
@success-color: #52c41a; // success state color
@warning-color: #faad14; // warning state color
@error-color: #f5222d; // error state color
@font-size-base: 14px; // major text font size
@heading-color: rgba(0, 0, 0, 0.85); // heading text color
@text-color: rgba(0, 0, 0, 0.65); // major text color
@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
@disabled-color: rgba(0, 0, 0, 0.25); // disable state color
@border-radius-base: 2px; // major border radius
@border-color-base: #d9d9d9; // major border color
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers
```

> ក្នុងនេះ អ្នកត្រូវ _import style_ ចេញពី `antd.less` ផង ហើយអ្នកអាចផ្លាស់ប្តូរនូវតែអ្នកចង់ផ្លាស់បានហើយ។😉

- ទីបួន:

> ចូលក្នុង `App.tsx` នៅក្នុង _src folder_ ហើយលុបកូដដែលនៅក្នុងនោះចោលទាំងអស់ ហើយសរសេរកូដខាងក្រោមចូល:

```js
import React from "react";
import { Button } from "antd";
import './styles/antd-theme-custom.less';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Button type="primary">Click Me</Button>
    </React.Fragment>
  );
};

export default App;
```

> បន្ទាប់មក យើង _run project_:

```js
yarn start
```

> លទ្ធផល

![react-js-result thumbnail](/_thumbnail_doc/reactjs-result.JPG "React JS Result")
