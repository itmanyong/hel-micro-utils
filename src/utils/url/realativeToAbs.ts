/*
 * @FilePath: \hel-micro-utils\src\utils\url\realativeToAbs.ts
 * @Date: 2022-09-27 00:32:47
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:32:47
 * @Description: 相对路径转绝对路径
 */
/**
 * 相对路径转绝对路径
 * @param url 相对路径
 * @returns 绝对路径
 */
export const realativeToAbs = (url: string) => {
    const a = document.createElement('a');
    a.href = url;
    return a.href;
}
