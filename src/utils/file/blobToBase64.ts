/*
 * @FilePath: \hel-micro-utils\src\utils\file\blobToBase64.ts
 * @Date: 2022-09-26 23:45:30
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 23:48:44
 * @Description:blob转base64
 */


/**
 * blob转base64
 * @param blob blob
 * @returns Promise<base64>
 */
export const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
            const base64 = dataUrl?.toString().split(',')[1];
            resolve(base64 as string);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(blob);
    });
}


