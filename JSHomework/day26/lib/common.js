/**
 *common.js
 *author:jessie-zly
 *2017/11/6
 *description: 本类用于封装本项目所需公共方法
 */


/**
 * 功能: 生成m-n之间的随机数
 * @param m 起始整数
 * @param n 终止整数
 */
randomNumber = (m, n) => {
    return ~~(Math.random() * (n - m + 1)) + m;
}



