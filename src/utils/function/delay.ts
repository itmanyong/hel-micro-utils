/*
 * @FilePath: \hel-micro-utils\src\utils\function\delay.ts
 * @Date: 2022-09-27 00:54:30
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:58:11
 * @Description: 延迟执行指定函数且只执行一次
 */

/**
 * 延迟执行指定函数且只执行一次
 * @param fn 需要延迟执行的函数
 * @param delay 延迟时间，毫秒
 * @param context 函数执行上下文
 * @returns { run:function,cancel:function } run:执行函数 cancel:取消函数
 */
export const delay = (fn: Function, delay: number = 1e5, context = null) => {

    let ticket: any = null, runned: boolean = false;

    return {
        run(...args: any[]) {
            return new Promise((resolve, reject) => {
                if (runned === true) {
                    return;
                }
                runned = true;
                ticket = setTimeout(async () => {
                    try {
                        const res = await fn.apply(context, args);
                        resolve(res);
                    } catch (err) {
                        reject(err)
                    }
                }, delay)
            })
        },
        cancel: () => {
            clearTimeout(ticket);
        }
    }
}

