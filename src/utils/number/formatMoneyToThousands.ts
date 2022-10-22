/*
 * @FilePath: \hel-micro-utils\src\utils\number\formatMoneyToThousands.ts
 * @Date: 2022-09-27 00:46:42
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-27 00:52:55
 * @Description: 千分位格式化金额
 */


/**
 * 千分位格式化金额
 * @param money 金额
 * @param decimal 保留小数位数
 * @returns string 格式化后的金额
 */
export const formatMoneyToThousands = (money: number | string, decimal: number = 2) => {
    if (typeof money === 'string') {
        money = parseFloat(money);
    }
    if (isNaN(money)) {
        return '0.00';
    }
    money = money.toFixed(decimal);
    const [int, dec] = money.split('.');
    const intArr = int.split('');
    const intArrReverse = intArr.reverse();
    const intArrReverseFormat = intArrReverse.reduce((pre: string[], cur, index) => {
        if (index % 3 === 0 && index !== 0) {
            pre.push(',');
        }
        pre.push(cur);
        return pre;
    }, []);
    const intArrFormat = intArrReverseFormat.reverse();
    return intArrFormat.join('') + '.' + dec;
}