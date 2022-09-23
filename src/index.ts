/*
 * @FilePath: \hel-micro-utils\src\index.ts
 * @Date: 2022-09-24 03:03:23
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-24 03:58:01
 * @Description: 
 */

async function main() {
  const { libReady, isMasterApp } = await import('hel-lib-proxy');
  const { LIB_NAME } = await import('./configs/subApp');
  const libProperties = await import('./entrance/libProperties');
  // 注意此处传递的是 default
  libReady(LIB_NAME, libProperties.default);

  if (isMasterApp()) {
    // 这里加载其他后置内容
  }
};

main().catch(console.error);

// avoid isolatedModules warning
export default 'HEL REMOTE MOD';
