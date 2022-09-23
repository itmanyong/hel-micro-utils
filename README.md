# hel-micro-lodash

## 使用

1.安装 hel-micro 依赖包

```js
pnpm add hel-micro
```

2.预加载主包

```js
// 安装主包
pnpm add hel-micro-lodash
// 在使用之前加载主包
import { preFetchLib } from 'hel-micro'
await preFetchLib('hel-micro-lodash')
// 后续使用
import helLodash from 'hel-micro-lodash';
helLodash.apiName()
```

3.懒加载主包
```js
// 后续再次加载会直接复用
const helLodashLib = await preFetchLib("hel-micro-lodash");
helLodashLib.apiName();
```
## 其他
  1.将lodash通过hel-micro的方式进行提供，包含所有lodash导出
  2.版本号与lodash保持一致，尾号为包更新版本号