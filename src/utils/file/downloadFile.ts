/*
 * @FilePath: \hel-micro-utils\src\utils\file\downloadFile.ts
 * @Date: 2022-09-26 00:07:17
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 00:15:12
 * @Description: 下载流文件
 */


/**
 * 下载流文件-a标签方式-兼容火狐
 * @param data 文件体
 * @param type 文件类型 例：`application/json;charset=UTF-8`，`image/jpeg`
 * @param fileName 文件名
 * @returns void
 */
export const downloadFile = (data: Blob, type: string, fileName: string = `downloadFile-${new Date().toLocaleDateString()}`): void => {
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);
    let a: HTMLAnchorElement | null = document.createElement('a');
    a.href = url;
    a.download = fileName;
    // a.click();
    // 兼容火狐
    a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    // 释放内存
    a = null;
    window.URL.revokeObjectURL(url);
}