/*
 * @FilePath: \hel-micro-utils\src\utils\other\genUUID.ts
 * @Date: 2022-09-27 00:35:18
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:38:56
 * @Description: 生成uuid
 */

/**
 * 生成uuid
 */
export const genUUID = () => {
    const url = URL.createObjectURL(new Blob([]));

    const uuid = url.substring(url.lastIndexOf('/') + 1);

    URL.revokeObjectURL(url);

    return uuid;
}

/**
 * 生成uuid
 * @returns string
 */
export const uuidV4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}