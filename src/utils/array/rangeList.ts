/*
 * @FilePath: \hel-micro-utils\src\utils\array\rangeList.ts
 * @Date: 2022-09-27 00:40:22
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:42:26
 * @Description: 生成指定范围的数组
 */

/**
 * 生成指定范围的数组
 * @param start 起始值
 * @param stop 结束值
 * @param step 步长
 * @returns 数组
 */
export const rangeList = (start: number, stop: number, step: number): Array<number> => {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
}