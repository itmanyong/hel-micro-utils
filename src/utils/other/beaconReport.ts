/*
 * @FilePath: \hel-micro-utils\src\utils\other\beaconReport.ts
 * @Date: 2022-09-27 00:44:28
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:44:29
 * @Description: 上报
 */

/**
 * 不影响页面不卡卸载的上报
 * @param url 上报地址
 * @param data 上报数据
 */
export const beaconReport = (url: string, data: any) => {
    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, JSON.stringify(data));
    } else {
        const img = new Image();
        img.src = url;
    }
}
