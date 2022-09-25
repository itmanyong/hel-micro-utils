/*
 * @FilePath: \hel-micro-utils\src\utils\file\getMediaDuration.ts
 * @Date: 2022-09-26 00:35:09
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 00:39:44
 * @Description: 获取媒体文件时长
 */


/**
 * 获取媒体文件时长
 * @param file 媒体文件
 * @returns Promise<number>
 */
export const getMediaDuration = (file: File): Promise<number> => {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const audio = new Audio(url);
        audio.addEventListener('loadedmetadata', () => {
            resolve(audio.duration);
            // 释放内存
            URL.revokeObjectURL(url);
        });
        audio.addEventListener('error', (error) => {
            reject(error);
            // 释放内存
            URL.revokeObjectURL(url);
        });
    });
}
