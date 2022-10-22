/*
 * @FilePath: \hel-micro-utils\src\utils\file\downloadStringFile.ts
 * @Date: 2022-09-26 23:35:59
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-26 23:40:20
 * @Description: 将字符串封装成文件形式进行文件下载
 */

/**
 * 将字符串封装成文件形式进行文件下载
 * @param content 文件内容,必须字符串
 * @param fileName 文件名,需要带文件扩展名
 * @param type 文件类型
 */
export const downloadStringFile = (content: string, fileName: string, type: string): void => {
    const blob = new Blob([content], { type })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = fileName
    a.rel = "noopener"
    // a.click()
    // 兼容火狐的写法
    a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))
    URL.revokeObjectURL(a.href)
}
