/**
 *encap.js
 *author:jessie-zly
 *2017/10/11
 *description: 用于封装常用方法,以供调用
 */



/**
 * 功能: 不足位数时前置补0
 * @param num 待补位的数
 * @param length 制定的位数
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
    }else if(str.length = length){
        return str;
    }else {
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