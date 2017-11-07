/**
 *Engine.js
 *author:jessie-zly
 *2017/11/6
 *description: 本类用于实现游戏启动
 */
class Engine {
    /**
     *
     */
    constructor() {
        //保存Engine中的this值
        // let _this = this;
        //
        this.bulletArr = [];
        this.enemyArr = [];
        //显示logo
        this.logo = new Logo();
        //
        this.option = new Option((select) => { // 箭头函数可以锁定this,强制指向宿主 Engine
            //
            this.loading = new Loading(() => {
                //隐藏logo
                this.logo.hide();
                //
                new MyPlane(select);

            });
        });
    }
}