/*
 * @FilePath: \hel-micro-utils\src\utils\string\base64ToStr.ts
 * @Date: 2022-09-27 00:30:10
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:30:10
 * @Description: base64转字符串
 */

/**
 * base64转字符串
 * @param base64 base64
 * @returns 字符串
 */
export const base64ToStr = (base64: string) => {
    return decodeURIComponent(escape(atob(base64)));
}
