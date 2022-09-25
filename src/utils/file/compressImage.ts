/*
 * @FilePath: \hel-micro-utils\src\utils\file\compressImage.ts
 * @Date: 2022-09-26 00:17:06
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 00:23:06
 * @Description: 高质量压缩图片
 */

import { base64ToFile } from './index'
/**
 * 高质量压缩图片
 * @param file 图片文件
 * @param quality 压缩质量比例
 * @returns Promise<File>
 */
export const compressImage = (file: File, quality: number = 0.92): Promise<File> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target!.result as string;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx!.drawImage(img, 0, 0, canvas.width, canvas.height);
                const base64 = canvas.toDataURL('image/jpeg', quality);
                const newFile = base64ToFile(base64, 'file', file.name);
                resolve(newFile as File);
            };
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
}
