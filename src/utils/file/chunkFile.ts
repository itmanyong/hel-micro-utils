/*
 * @FilePath: \hel-micro-utils\src\utils\file\chunkFile.ts
 * @Date: 2022-09-26 00:29:10
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 00:33:58
 * @Description: 将指定文件切片为指定大小的多个文件
 */


/**
 * 将指定文件切片为指定大小的多个文件
 * @param file 文件
 * @param chunkSize 切片大小 默认 2M
 * @returns Promise<File[]>
 */
export const chunkFile = (file: File, chunkSize: number = 1024 * 1024 * 2): Promise<File[]> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
            const arrayBuffer = e.target!.result as ArrayBuffer;
            const chunkCount = Math.ceil(arrayBuffer.byteLength / chunkSize);
            const chunks: File[] = [];
            for (let i = 0; i < chunkCount; i++) {
                const start = i * chunkSize;
                const end = Math.min(start + chunkSize, arrayBuffer.byteLength);
                const chunk = arrayBuffer.slice(start, end);
                const chunkFile = new File([chunk], file.name, {
                    type: file.type,
                    lastModified: file.lastModified
                });
                chunks.push(chunkFile);
            }
            resolve(chunks);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}