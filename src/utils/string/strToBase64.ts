/*
 * @FilePath: \hel-micro-utils\src\utils\string\strToBase64.ts
 * @Date: 2022-09-27 00:29:19
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:29:54
 * @Description: 字符串转base64
 */
/**
 * 字符串转base64
 * @param str 字符串
 * @returns base64
 */
export const strToBase64 = (str: string) => {
    return btoa(unescape(encodeURIComponent(str)));
}
