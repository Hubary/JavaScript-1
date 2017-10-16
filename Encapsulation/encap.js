/**
 *encap.js
 *author:jessie-zly
 *2017/10/11
 *description: 本类库用于封装常用方法,以供调用
 */


/**
 * 功能: 不足位数时前置补0
 * @param num 待补位的数
 * @param length 指定的位数
 * @returns {string}
 */
function addPrefixZero(num, length) {
    //隐式类型转换
    var str = "" + num;
    /**
     * 判断num的长度和length的关系
     */
    if (str.length < length) {
        //num的长度不足指定位数时,进行前置补0
        return (Array(length).join("0") + num).slice(-length);
    } else if (str.length = length) {
        return str;
    } else {
        //如果num的长度比指定位数还大,则提示输入有误
        return "神经病啊," + num + "不足" + length + "位???";
    }
}

/**
 * 功能: 将时间对象转换成字符串
 * @param date 需要转换的时间对象
 * @param devideSign 分隔符
 * @param num 指定补0位数
 * @returns {string}
 */
function dateToString(date, devideSign, num) {
    //判断参数是否传入
    if (devideSign == undefined) {
        //如果没有传入分隔符参数,则默认给予":"
        devideSign = ":";
    }
    //调用前置位0,进行字符串拼接
    return date.getFullYear() + devideSign + addPrefixZero((date.getMonth() + 1), num) + devideSign + addPrefixZero(date.getDate(), num) + " " + addPrefixZero(date.getHours(), num) + ":" + addPrefixZero(date.getMinutes(), num) + ":" + addPrefixZero(date.getSeconds(), num);
}


/**
 * 功能: 生成m-n之间的随机整数
 * @param m 起始数字
 * @param n 终止数字
 * @returns {Number}
 */
function randomNumM_N(m, n) {
    //判断m,n是否为非负数
    if (m < 0 || n <= 0) {
        //提示信息
        return "请重新输入m,n";
    }
    //判断m和n的关系
    if (m > n) {
        //如果m>n,则交换m和n的值
        var temp = m;
        m = n;
        n = temp;
    }
    //返回值
    return parseInt(m + Math.random() * (n - m + 1));
}

/**
 * 功能: 颜色值转换为16进制,不足前置补0
 * @param R 0-255
 * @param G 0-255
 * @param B 0-255
 * @returns {string}
 */
function stringToNum(R, G, B) {
    R = R.toString(16).length < 2 ? "0" + R.toString(16) : R.toString(16);
    G = G.toString(16).length < 2 ? "0" + G.toString(16) : G.toString(16);
    B = B.toString(16).length < 2 ? "0" + B.toString(16) : B.toString(16);
    return R + G + B;
}

/**
 * 功能: 随机颜色
 * @param R 0-255
 * @param G 0-255
 * @param B 0-255
 * @returns {string}
 */
function randomColor() {
    R = randomNumM_N(0, 255);
    G = randomNumM_N(0, 255);
    B = randomNumM_N(0, 255);
    return "#" + stringToNum(R, G, B);
}

/**
 * 功能: 获取元素偏移量
 * @param element 元素对象
 */
function getOffset(element) {
    //获取初始化偏移量值
    obj.left = element.offsetLeft;//左偏移量
    obj.top = element.offsetTop;//右偏移量
    //逻辑判断
    while (element.offsetParent) {//存在父级定位元素
        //元素重置
        var newElement = element.offsetParent;
        //累加
        obj.left += newElement.offsetLeft;
        obj.top += newElement.offsetTop;
    }
    //返回对象
    return obj;
}

