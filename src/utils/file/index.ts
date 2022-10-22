
/*
 * @FilePath: \hel-micro-utils\src\utils\file\index.ts
 * @Date: 2022-09-26 00:01:07
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:26:22
 * @Description: 文件类方法统一出口
 */
import { fileToBase64 } from './fileToBase64'
import { base64ToFile } from './base64ToFile'
import { downloadFile } from './downloadFile'
import { compressImage } from './compressImage'
import { chunkFile } from './chunkFile'
import { getMediaDuration } from './getMediaDuration'
import { downloadStringFile } from './downloadStringFile'
import { blobToFile } from './blobToFile'
import { fileToBlob } from './fileToBlob'
import { blobToBase64 } from './blobToBase64'
import { base64ToBlob } from './base64ToBlob'
import { fileToUrl } from './fileToUrl'
import { urlToFile } from './urlToFile'


export {
    fileToBase64,
    base64ToFile,
    downloadFile,
    compressImage,
    chunkFile,
    getMediaDuration,
    downloadStringFile,
    blobToFile,
    fileToBlob,
    blobToBase64,
    base64ToBlob,
    fileToUrl,
    urlToFile
}