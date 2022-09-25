/*
 * @FilePath: \hel-micro-utils\src\utils\file\fileToBase64.ts
 * @Date: 2022-09-25 23:58:23
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 00:00:46
 * @Description: 文件转base64
 */

/**
 * 文件转base64
 * @param file 文件
 * @returns string
 */
export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result as string);
        };
        reader.onerror = error => {
            reject(error);
        };
    });
}

