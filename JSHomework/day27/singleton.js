/**
 *singleton.js
 *author:jessie-zly
 *2017/11/7
 *description:
 */
function Singleton() {
    //
    if (!Singleton.instance) {
        //蒙板层
        let filter = document.createElement("div");
        filter.className = "filter";
        //内容框
        let content = document.createElement("div");
        content.className = "content";
        //确定键
        let confirmBtn = document.createElement("button");
        confirmBtn.innerHTML = "确定";
        confirmBtn.className = "btn left"
        //取消键
        let cancelBtn = document.createElement("button");
        cancelBtn.innerHTML = "取消";
        cancelBtn.className = "btn right"
        //文本显示
        let text = document.createElement("span");
        //text.innerHTML = "随便给点什么";
        text.className = "text";
        //页面显示
        content.appendChild(confirmBtn);
        content.appendChild(cancelBtn);
        content.appendChild(text);
        filter.appendChild(content);
        document.body.appendChild(filter);

        //初始化
        Singleton.instance = new Object();
        //增加属性
        Singleton.instance.ele = filter;
        //
        Singleton.instance.ele.style.display = "none";
        /**
         * 增加show方法
         * @param content 显示内容
         * @param confirmFn 确定按钮执行的回调函数
         * @param cancelFn 取消按钮执行的回调函数
         */
        Singleton.instance.show = function (content, confirmFn, cancelFn) {
            //
            Singleton.instance.ele.style.display = "block";
            text.innerHTML = content;
            //增加确定按钮方法
            Singleton.instance.confirmFn = confirmFn;
            //增加取消按钮方法
            Singleton.instance.cancelFn = cancelFn;
        }

        //增加隐藏方法
        Singleton.instance.hide = function () {
            //
            Singleton.instance.ele.style.display = "none";
        }

        console.log(confirmBtn);
        console.log(cancelBtn);

        //取得按钮点击事件
        confirmBtn.onclick = (event) => {
            //
            event = event || window.event;
            //
            event.stopPropagation();
            //
            Singleton.instance.hide();
            Singleton.instance.confirmFn();
        }


        // confirmBtn.onclick = function (event) {
        //     //
        //     event = event || window.event;
        //     //
        //     event.stopPropagation();
        //     //
        //     Singleton.instance.hide();
        //     Singleton.instance.confirmFn();
        // }
        //
        cancelBtn.onclick = function (event) {
            //
            event = event || window.event;
            //阻止冒泡事件
            event.stopPropagation();
            //
            Singleton.instance.hide();
            Singleton.instance.cancelFn();
        }
    }
    //
    return Singleton.instance;
}