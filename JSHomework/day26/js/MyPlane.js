/**
 *MyPlane.js
 *author:jessie-zly
 *2017/11/6
 *description: 本类用于实现友方战机,继承于MyPlane
 */

class MyPlane extends Spirit {

    /**
     *  构造器
     * @param option 游戏难度系数
     */
    constructor(option) {
        super();
        //
        this.init();
        this.fly();
        this.fire(option);
    }

    /**
     * 初始化飞机位置
     */
    init() {
        //
        this.ele.className = "my-warplain";
        document.body.appendChild(this.ele);
        //初始化坐标
        let myPlaneX = (document.body.clientWidth - this.ele.offsetWidth) / 2;
        let myPlaneY = document.body.clientHeight - this.ele.offsetHeight;
        //样式
        this.ele.style.left = myPlaneX + "px";
        this.ele.style.top = myPlaneY + "px";
    }

    /**
     * 飞机飞行方法
     */
    fly() {
        //
        document.onmousemove = (event) => {
            //兼容
            event = event || window.event;
            //
            let body_main = document.getElementById("body_main");
            //主界面
            let body_main_X = body_main.offsetLeft;//左边距
            console.log(body_main_X);

            let body_main_Y = body_main.offsetHeight;//高
            //
            let myPlaneX=event.clientX - this.ele.offsetWidth / 2;
            let myPlaneY=event.clientY-this.ele.offsetHeight/2;
            //判断飞机是否左右越界
            if (myPlaneX <= body_main_X) {
                myPlaneX = body_main_X;
            }
            if(myPlaneX+this.ele.offsetWidth>=body_main_X+body_main.offsetWidth){
                myPlaneX=body_main_X+body_main.offsetWidth-this.ele.offsetWidth;
            }
            //判断飞机是否上下越界
            // if(myPlaneY<=)



            //飞机坐标
            this.ele.style.left = myPlaneX + "px";
            this.ele.style.top = myPlaneY + "px";


        }
    }

    /**
     * 飞机发射子弹方法
     * @param option 难度系数
     */

    fire(option) {
        //
        setInterval(() => {
            //
            let bulletX = this.ele.offsetLeft;
            let bulletY = this.ele.offsetHeight;
            let bulletWidth = this.ele.offsetWidth;
            //
            engine.bulletArr.push(Bullet(bulletX, bulletY, bulletWidth, option));
        }, 300)

    }

}