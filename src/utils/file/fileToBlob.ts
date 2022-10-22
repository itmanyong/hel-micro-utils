/*
 * @FilePath: \hel-micro-utils\src\utils\file\FileToBlob.ts
 * @Date: 2022-09-26 22:28:26
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 23:41:14
 * @Description: file转blob
 */


/**
 * file转blob
 * @param file file
 * @returns Blob
 */
export const fileToBlob = (file: File): Blob => {

    return new Blob([file], { type: file.type })

}
