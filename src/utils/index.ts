/*
 * @FilePath: \hel-micro-utils\src\utils\index.ts
 * @Date: 2022-09-24 03:03:23
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:58:40
 * @Description: lodash-v4.17.21
 */
import {
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
} from './file'
import { formatMoneyToThousands } from './number'
import {
    captureVideo,
    beaconReport,
} from './other'
import {
    base64ToStr,
    strToBase64
} from './string'
import { delay } from './function'
import { realativeToAbs } from './url'
import { rangeList } from './array'

export {
    // function
    delay,
    // array
    rangeList,
    // number
    formatMoneyToThousands,
    // string
    base64ToStr,
    strToBase64,
    // file
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
    urlToFile,
    // url
    realativeToAbs,
    // other
    captureVideo,
    beaconReport
}