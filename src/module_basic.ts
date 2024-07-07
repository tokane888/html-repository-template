// typescriptではimport時の拡張子指定は不要だった。
// ただES modulesのimportでは拡張子指定必須に決まった。
// 矛盾が生じたため、typescript側でも.js拡張子を
// 参考) https://qiita.com/masato_makino/items/8451bf4e62ad27823af1#import%E3%81%A8%E6%8B%A1%E5%BC%B5%E5%AD%90
// 参考) https://github.com/microsoft/TypeScript/issues/40878
import { Util, showMessage } from "./App.js";

showMessage();
