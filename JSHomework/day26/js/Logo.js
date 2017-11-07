/**
 *Logo.js
 *author:jessie-zly
 *2017/11/6
 *description: 本类用于实现项目的logo
 */

class Logo {
    //
    constructor() {
        //
        this.ele = document.createElement("div");
        this.ele.className = "logo";
        //插入到页面
        document.body.appendChild(this.ele);
    }

    /**
     * 隐藏logo
     */
    hide() {
        this.ele.style.display = "none";
    }


}