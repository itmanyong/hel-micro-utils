/*
 * @FilePath: \hel-micro-utils\src\utils\file\fileToUrl.ts
 * @Date: 2022-09-27 00:17:43
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:17:43
 * @Description: 文件转url
 */

/**
 * @description: 文件转url
 * @param file 文件
 * @returns url
 */
export const fileToUrl = (file: File) => {
    return window.URL.createObjectURL(file);
}
