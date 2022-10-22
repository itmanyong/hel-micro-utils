/*
 * @FilePath: \hel-micro-utils\src\utils\other\captureVideo.ts
 * @Date: 2022-09-27 00:08:02
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:23:16
 * @Description: 视频截图
 */

/**
 * 视频截图
 * @param video 视频节点
 * @returns png-string
 */
export const captureVideo = (video: HTMLVideoElement): string => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
}

