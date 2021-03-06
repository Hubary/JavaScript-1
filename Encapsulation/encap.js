/**
 *encap.js
 *author:jessie-zly
 *2017/10/11
 *description: 本类库用于封装常用方法,以供调用
 */

/**
 * 功能: 交换两个数的值
 * @param a 数1
 * @param b 数2
 */
function changeNum(a, b) {
    var arr = [];
    a = a + b;
    b = a - b;
    a = a - b;
    arr.push(a);
    arr.push(b);
    return arr;
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
 * 功能: 处理数字的小数问题,保留小数
 * @param num 需要处理的数字
 * @param digit 需要保留的位数
 * @returns {number}
 */
function floatNum(num, digit) {
    var m = Math.pow(10, digit);
    return parseInt(f * m, 10) / m;
}

/**
 * 功能: 选择排序
 * @param arr 排序数组
 * @returns {Array}
 */
function selectSort(arr) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        //二次遍历
        for (var j = i + 1; j < arr.length; j++) {
            //寻找最小数
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

/**
 * 功能: 冒泡排序
 * @param arr 排序数组
 * @returns {Array}
 */
function bubbleSort(arr) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        //二次遍历,前后比较
        for (var j = 0; j < arr.length - 1 - i; j++) {
            //寻找最小数
            if (arr[j] > arr[j + 1]) {
                //交换
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }
    return arr;
}

/**
 * 功能: 随机排序
 * @param arr 排序数组
 * @returns {Array}
 */
function randomSort(arr) {
    //
    arr.sort(function () {
        //正值排序,负值不变
        return 0.5 - Math.random();
    })
    //
    return arr;
}

/**
 * 功能: 判断数组中是否有某个元素
 * @param arr 待去重数组
 * @param ele 判断元素
 * @returns {Boolean}
 */
function has(arr, ele) {
    //遍历数组
    for (var i in arr) {
        //判断
        if (arr[i] === ele) {
            return true;
        }
    }
    return false;
}

/**
 * 功能: 去除数组中重复元素,与has()方法联动使用,推荐使用
 * @param arr 待去重数组
 * @returns {Array}
 */
function noRepeat_1(arr) {
    //新数组对象
    var newArr = [];
    //遍历原数组R
    for (var i in arr) {
        //判断是否有重复元素
        if (!has(newArr, arr[i])) {
            //不重复则放入新数组
            newArr.push(arr[i])
        }
    }
    return newArr;
}

/**
 * 功能: 数组去重
 * @param arr 待去重数组
 * @returns {Array}
 */
function noRepeat_2(arr) {
    //声明新数组
    var newArr = [];
    //遍历原数组
    for (var i = 0; i < arr.length; i++) {
        //从i+1处遍历数组
        for (var j = i + 1; j < arr.length; j++) {
            //依次比较arr[i]和后面的值
            if (arr[i] == arr[j]) {
                //相同则删除后面那个值
                delete arr[j];
            }
        }
        //赋值新数组
        newArr.push(arr[i]);
    }
    //返回新数组
    return newArr;
}

/**
 * 功能: 数组去重,推荐使用
 * @param arr 待去重数组
 * @returns {Array}
 */
function noRepeat_3(arr) {
    //遍历数组
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                //相同则删除原数组arr[j],并且确保删除的个数为1
                arr.splice(j, 1);
                //
                i -= 1;
            }
        }
    }
    //返回被splice后的数组
    return arr;
}

/**
 * 功能: 数组去重,推荐使用
 * @param arr 待去重数组
 * @returns {Array}
 */
function noRepeat_4(arr) {
    //声明新数组
    var newArr = [];
    //遍历原数组
    for (var i in arr) {
        //判断新数组是否匹配arr[i]的值
        if (newArr.indexOf(arr[i]) == -1) {
            //新数组元素赋值
            newArr.push(arr[i]);
        }
    }
    //返回新数组
    return newArr;
}

/**
 * 功能: 统计数组中元素出现的个数,也可以进行去重
 * @param arr 需要去重/统计的数组对象
 */
function getNumOfArrEle(arr) {
    //
    var obj = arr.reduce(function (allEle, ele) {
        //判断数组元素是否在对象中出现
        if (ele in allEle) {
            allEle[ele]++;
        } else {
            allEle[ele] = 1;
        }
        //返回处理过的对象
        return allEle;
    }, {})
    //返回处理过的数组对象
    return obj;
}

/**
 * 功能: 数组插入元素,并保持原顺序
 * @param arr 数组
 * @param ele
 * @returns {Array}
 */
function sortAsArr(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        //判断是否超过最大值
        if (arr[arr.length - 1] < ele) {
            arr.push(ele);
        } else if (arr[i] > ele) {
            //插入数组中
            arr.splice(i, 0, ele);
            //跳出
            break;
        }
    }
    return arr
}

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
 * @returns {object}
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

/**
 * 功能: 阻止浏览器默认事件
 * @param event 事件对象
 */
function preBroDef(event) {
    //三元判断
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
}

/**
 * 功能: 封装cookie,用于设置cookie键值,通常与getCookie()和removeCookie()同时调用
 * @param userName cookie的键
 * @param value cookie的值
 * @param expires 要求cookie的过期时间
 */
// function setCookie(userName, value, expires) {
//     //获取cookie创建时间
//     var date = new Date();
//     //设置过期时间
//     date.setDate(date.getDate() + expires)
//     //信息输出
//     document.cookie = userName + "=" + value + ";expires=" + date;
// }

/**
 * 功能: 封装cookie,用于设置cookie键值,通常与getCookie()和removeCookie()同时调用
 * @param userName cookie的键
 * @param value cookie的值
 * @param expires 要求cookie的过期时间
 */
setCookie = (userName, value, expires) => {
    //获取cookie创建时间
    var date = new Date();
    //设置过期时间
    date.setDate(date.getDate() + expires)
    //信息输出
    document.cookie = userName + "=" + value + ";expires=" + date;
}

/**
 * 功能: 封装cookie,用于获取cookie的键值,通常与setCookie()和removeCookie()同时调用
 * @param userName 想要获取cookie值对应的键
 * @returns {string}
 */
function getCookie(userName) {
    //获取cookie
    var cookie = document.cookie;
    //将cookie字符串转换成数组
    var arrCookie = cookie.split("; ");//注意空格
    //遍历
    for (var i in arrCookie) {
        //再次分隔数组中的字符串
        var newArrCookie = arrCookie[i].split("=");
        //判断第二次分割后数组的第一个值是否与userName相同
        if (newArrCookie[0] == userName) {
            //相同则返回第二个值
            return newArrCookie[1];//即userName对应的值
        }
    }
}

/**
 * 功能: 封装cookie,用于删除cookie的键值,通常与setCookie()和removeCookie()同时调用
 * @param userName 想要删除的cookie的键
 * @param value 想要删除的cookie的值
 */
function removeCookie(userName, value) {
    //调用setCookie,提前过期时间,来实现删除功能
    setCookie(userName, value, -1);
}

/**
 * 功能: 获取非行间样式
 * @param obj 获取样式的元素对象
 * @param attr 获取的属性
 * @returns {*}
 */
function getNotInlineStyle(obj, attr) {
    //兼容IE
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        //兼容Firefox Chrome...
        return getComputedStyle(obj, false)[attr];
    }
}


//用户名判断 汉字/字母/数字/下划线/-
function checkUserName(str) {
    //正则表达式
    let reg = /^[a-zA-Z0-9_\-(\u2E80-\u9FFF)+]{4,20}$/;
    if (new RegExp(reg).test(str)) {
        return true;
    } else {
        return false;
    }
}

//密码判断 字母/数字/下划线/-
function checkPassword(str) {
    let reg = /^[a-z0-9_-]{6,18}$/;
    if (new RegExp(reg).test(str)) {
        return true;
    } else {
        return false;
    }
}

//手机号判断
function checkMobile(str) {
    let reg = /^[1](3|4|5|7|8)[0-9]{9}$/;
    if (new RegExp(reg).test(str)) {
        return true;
    } else {
        return false;
    }
}

//4位随机验证码
function identityCodeForFour() {
    let arr = [];
    //数字
    for (let i = 48; i <= 57; i++) {
        arr.push(i);
    }
    //大写字母
    for (let i = 65; i <= 90; i++) {
        arr.push(i);
    }
    //小写字母
    for (let i = 97; i <= 122; i++) {
        arr.push(i);
    }
    //随机生成
    let idCode = [];
    for (let i in arr) {
        let index = Math.floor(Math.random() * 61);
        let randomChar = String.fromCharCode(arr[index])
        idCode.push(randomChar);
    }
    return idCode.join("");
}

/**
 * 功能: 6位随机验证码(数字、字母)
 * @returns {string}
 */
function identityCodeForSix() {
    let arr = [];
    for (let i = 0; i <= 5; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr.join("");
}

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

/**
 * 功能: ajax请求
 * @param obj 对象
 */
function ajax(obj) {
    //创建对象
    let xhr = new XMLHttpRequest();
    //判断是否传入请求类型 get/post
    if (obj.type) {
        //
        if (obj.type.toLowerCase() == 'get') {
            //get请求
            xhr.open("GET", obj.url, true);
            xhr.send(null);
        } else {
            //post 请求
            xhr.open("POST", obj.url, true);
            //注意: post请求要设置请求头,进行验证
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            //post 参数在 请求体里面
            // last=111&pageSize=10
            //xhr.send('last=111&pageSize=10')
            //把 对象{pagesize:10,last:1000}转为字符串
            let arr = [];
            //遍历 obj中的params字段
            for (let key in obj.params) {
                //将键值对以字符串形式存入到数组中
                arr.push(key + '=' + encodeURIComponent(obj.params[key]));
            }
            //用&拼接
            xhr.send(arr.join('&'));
        }
    } else {
        //不存在请求类型,默认为 get 请求
        xhr.open("GET", obj.url, true);
        xhr.send(null);
    }

    xhr.onreadystatechange = () => {
        //
        if (xhr.readyState == 4) {

            if (xhr.status == 200) {
                //请求成功,并且数据接收完毕
                let res = JSON.parse(xhr.responseText);
                //判断是否有执行函数
                if (obj.success) {
                    obj.success(res);
                }

            } else {
                //请求失败
                if (obj.error) {
                    //返回状态码
                    obj.error(xhr.status);
                }
            }
        }
    }
}