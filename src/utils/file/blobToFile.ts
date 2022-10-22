/*
 * @FilePath: \hel-micro-utils\src\utils\file\BlobToFile.ts
 * @Date: 2022-09-26 22:17:53
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 23:41:34
 * @Description: blob转file
 */


/**
 * blob转file
 * @param blob blob
 * @param fileName 文件名
 * @returns File
 */
export const blobToFile = (blob: Blob, fileName: string): File => {

    const file = blob as File

    return new File([file], fileName, { type: file.type })

}