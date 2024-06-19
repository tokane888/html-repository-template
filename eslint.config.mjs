import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  { files: ["**/*.jsx"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  ...fixupConfigRules(pluginReactConfig),
];

// TODO: Airbnb等.jsの既存のruleセット導入。
//       現状Airbnbはflat config非対応、かつjsを直接いじる機会は少なそうなので対応後回し
