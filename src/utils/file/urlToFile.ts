/*
 * @FilePath: \hel-micro-utils\src\utils\file\urlToFile.ts
 * @Date: 2022-09-27 00:23:32
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:25:59
 * @Description: url转文件
 */

/**
 * url转文件
 * @param url 文件的url地址
 * @param filename 文件名
 * @returns file
 */
export const urlToFile = (url: string, filename: string)=>{
    return fetch(url).then(res => res.blob()).then(blob => {
        return new File([blob], filename, {
            type: blob.type
        })
    })
}