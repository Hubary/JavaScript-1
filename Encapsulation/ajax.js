/**
 *ajax.js
 *author:jessie-zly
 *2017/10/31
 *description: ajax的封装
 */

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

    /**
     *
     */
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