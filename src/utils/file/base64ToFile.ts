/*
 * @FilePath: \hel-micro-utils\src\utils\file\base64ToFile.ts
 * @Date: 2022-09-26 00:02:14
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 00:16:17
 * @Description: base645转文件
 */

/**
 * base64转文件-支持 file 和 blob 两个类型
 * @param base64 base64字符串
 * @param type 文件类型 'file' | 'blob'
 * @param fileName 文件名
 * @returns file | blob
 */
export const base64ToFile = (base64: string, type?: 'file' | 'blob', fileName?: string): File | Blob => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    if (type === 'blob') {
        return new Blob([u8arr], { type: mime });
    }
    return new File([u8arr], fileName || 'file', { type: mime });
}
