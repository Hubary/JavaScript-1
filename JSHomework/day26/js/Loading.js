/**
 *Loading.js
 *author:jessie-zly
 *2017/11/6
 *description: 本类实现页面缓冲加载功能
 */

class Loading {
    /**
     * 构造器
     * @param callBack 回调函数,加载完成后再执行其他操作
     */
    constructor(callBack) {
        //
        this.ele = document.createElement("div");
        this.ele.className = "loading";
        //插入到页面
        document.body.appendChild(this.ele);

        //初始化背景图
        let bgSelect = 0;
        //加载动画
        let timer = setInterval(() => {
            //
            bgSelect < 3 ? bgSelect++ : bgSelect = 1;
            //改变背景图url
            this.ele.style.background = `url(images/loading${bgSelect}.png) no-repeat`;
        }, 300);

        //
        setTimeout(() => {
            clearInterval(timer);
            this.ele.remove();
            callBack();
        }, 2000);

    }
}

