/**
 * 功能: 缓冲运动完美框架
 * @param obj 运动对象
 * @param json json对象,属性-属性值集合(opacity属性处理过后的值范围为[0-100])
 * @param fn 回调函数,obj对象运动结束后执行的动作
 */
function moveFramework(obj, json, fn) {
    //关闭自身定时器,防止受到干扰
    clearInterval(obj.timer);
    //运动开始
    obj.timer = setInterval(() => {
        //标记开关
        let bstop = true;
        //遍历json对象
        for (let attr in json) {
            //初始化运动起点
            let iCur = 0;
            //判断json中的属性是否为 opacity
            if (attr == "opacity") {
                //如果属性为opacity,初始化透明度
                iCur = parseInt(parseFloat(getNotInlineStyle(obj, attr)) * 100);
            } else {
                //初始化属性
                iCur = parseInt(getNotInlineStyle(obj, attr));
            }
            //初始化速度
            let speed = (json[attr] - iCur) / 8;
            //处理速度(不断变小)
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//为正值,向上取整;为负值,向下取整
            //判断是否为opacity属性
            if (attr == "opacity") {
                //兼容处理
                obj.style.opacity = (iCur + speed) / 100;
                obj.style.filter = "alpha(opacity:" + (iCur + speed) + ")";
            } else {
                obj.style[attr] = (iCur + speed) + "px";
            }
            //处理多种运动的协同
            if (iCur != json[attr]) {
                //如果运动没有全部结束,改变bstop,结束的运动进入等待状态
                bstop = false;
            }
        }
        //判断运动是否都已结束
        if (bstop) {
            clearInterval(obj.timer);
            //处理是否有回调函数
            if (fn) {
                fn();
            }
        }
    }, 30)

}