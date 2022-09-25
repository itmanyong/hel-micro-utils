/*
 * @FilePath: \hel-micro-utils\src\utils\file\index.ts
 * @Date: 2022-09-26 00:01:07
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 00:40:20
 * @Description: 文件类方法统一出口
 */
import { fileToBase64 } from './fileToBase64'
import { base64ToFile } from './base64ToFile'
import { downloadFile } from './downloadFile'
import { compressImage } from './compressImage'
import { chunkFile } from './chunkFile'
import { getMediaDuration } from './getMediaDuration'


export {
    fileToBase64,
    base64ToFile,
    downloadFile,
    compressImage,
    chunkFile,
    getMediaDuration
}