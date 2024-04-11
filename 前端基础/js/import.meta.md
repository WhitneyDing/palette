# import.meta

开发者使用一个模块时，有时需要知道模板本身的一些信息（比如模块的路径）。

一、import.meta

在 ES6 中，JavaScript 提供了新的模块化语法，通过 import 和 export 实现导入和导出模块。在 ES10 中，JavaScript 引入了 import() 函数的语法，可以在任意位置导入模块。而在 ES11 中，JavaScript 引入了 import.meta 对象，可以获取到当前模块的信息。
import.meta 对象包含了以下属性：

- import.meta.url：获取当前模块的 URL 地址。
- import.meta.scriptElement：获取当前模块对应的 script 标签。
- import.meta.env：获取环境变量。

二、使用举 🌰

> 本文只举例 import.meta.url

在 mjs 文件中使用 import.meta.url，返回如下：

```js
console.log(import.meta.url);
// file:///C:/resources/webankProjects/rpams/packages/rpams-shared/scripts/icon.mjs
```

如果不想要前面的 file://，则使用 fileURLToPath 将文件的 URL 转换为本地文件系统中的路径

```js
import { fileURLToPath } from "node:url";

console.log(fileURLToPath(import.meta.url));
// C:\resources\webankProjects\rpams\packages\rpams-shared\scripts\icon.mjs
```

需要上一级目录则：

```js
import path from "node:path";
import { fileURLToPath } from "node:url";

console.log(path.dirname(fileURLToPath(import.meta.url)));
// C:\resources\webankProjects\rpams\packages\rpams-shared\scripts
```
