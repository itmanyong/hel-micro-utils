/*
 * @FilePath: \hel-micro-utils\src\utils\file\base64ToBlob.ts
 * @Date: 2022-09-26 23:50:09
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 23:58:32
 * @Description: base64转blob
 */

/**
 * base64转blob
 * @param base64 完整的base64，需要包含data:image/png;base64,这样的头部信息
 * @returns blob
 */
export const base64ToBlob = (base64: string): Blob => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
