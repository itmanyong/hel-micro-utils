# hel-micro-lodash

## 使用

1.安装 hel-micro 依赖包

```js
pnpm add hel-micro
```

2.预加载主包

```js
// 安装主包
pnpm add hel-micro-utils
// 在使用之前加载主包
import { preFetchLib } from 'hel-micro'
await preFetchLib('hel-micro-utils')
// 后续使用
import helUtils from 'hel-micro-utils';
helUtils.apiName()
```

3.懒加载主包
```js
// 后续再次加载会直接复用
const helUtilsLib = await preFetchLib("hel-micro-utils");
helUtilsLib.apiName();
```
## 其他
  1.个人常用、收集的业务工具函数