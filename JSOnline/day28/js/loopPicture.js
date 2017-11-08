/**
 *loopPicture.js
 *author:jessie-zly
 *2017/11/8
 *description:
 */

/**
 * 无缝轮播插件--ES5
 * @param classname 轮播容器类名
 */
function LoopPicture(classname) {
    //
    this.init(classname);
    this.addPicture();
    this.autoPlay();
    this.addContainerEvent();
    this.clickToNext();
    this.addBtnEvent();
}

/**
 * 初始化
 */
LoopPicture.prototype.init = function (classname) {
    //初始化下标
    this.inow = 0;
    //定时器
    this.timer = null;
    //获取
    this.container = document.querySelector(classname); // 容器
    this.list_ul = this.container.querySelector(".list"); // ul
    this.list_ul_li = this.list_ul.getElementsByTagName("li"); // ul->li
    this.tab = this.container.querySelector(".tab"); // tab
    this.tab_a = this.tab.getElementsByTagName("a"); // tab->a
    this.pre_next = this.container.querySelector(".pre-next"); // pre_next
    this.pre = this.pre_next.querySelector(".pre"); // pre_next->pre
    this.next = this.pre_next.querySelector(".next"); // pre_next->next
}

/**
 * 克隆第一张图,并插入到最后
 */
LoopPicture.prototype.addPicture = function () {
    //
    let li = this.list_ul.children[0].cloneNode(true);
    this.list_ul.appendChild(li);
    //重新定义ul宽度
    this.list_ul.style.width = this.list_ul_li.length * this.list_ul_li[0].offsetWidth + "px";
}

/**
 * 轮播原理
 */
LoopPicture.prototype.toImg = function () {
    //ul动left
    moveFramework(this.list_ul, {"left": -this.inow * this.list_ul_li[0].offsetWidth});
    //处理circle中的a标签
    for (let i in this.tab_a) {
        this.tab_a[i].className = "";
    }
    //判断下标是否越界
    this.tab_a[this.inow == this.list_ul_li.length - 1 ? 0 : this.inow].className = "active";
}

/**
 * 自动轮播
 */
LoopPicture.prototype.autoPlay = function () {
    //
    let _this = this;
    //
    this.timer = setInterval(function () {
        //判断下标是否越界
        if (_this.inow == _this.list_ul_li.length - 1) {
            _this.inow = 1;
            //
            _this.list_ul.style.left = 0;
        } else {
            _this.inow++;
        }
        //
        _this.toImg();
    }, 1500);
}

/**
 * container 事件
 */
LoopPicture.prototype.addContainerEvent = function () {
    //
    let _this = this;
    //移入
    _this.container.onmouseover = function () {
        clearInterval(_this.timer);
    }
    //移出
    _this.container.onmouseout = function () {
        _this.autoPlay();
    }
}

/**
 * tab 点击事件
 */
LoopPicture.prototype.clickToNext = function () {
    //
    let _this = this;
    //
    for (let i in this.tab_a) {
        //点击事件
        _this.tab_a[i].onclick = function () {
            //处理a标签
            for (let j = 0; j < _this.tab_a.length; j++) {
                _this.tab_a[j].className = "";
            }
            _this.tab_a[i].className = "active";
            //顺序轮播
            _this.inow = i;
            //
            moveFramework(_this.list_ul, {"left": -i * _this.list_ul_li[0].offsetWidth})
        }
    }
}

/**
 * pre-next 点击事件
 */
LoopPicture.prototype.addBtnEvent = function () {
    //
    let _this = this;
    //左边
    _this.pre.onclick = function () {
        //判断下标是否越界
        if (_this.inow <= 0) {
            _this.inow = _this.list_ul_li.length - 2;
            _this.list_ul.style.left = -(_this.list_ul_li.length - 1) * _this.list_ul_li[0].offsetWidth + "px";
        } else {
            _this.inow--;
        }
        _this.toImg();
    }
    //右边
    _this.next.onclick = () => {
        //判断下标是否越界
        if (_this.inow == _this.list_ul_li.length - 1) {
            _this.inow = 1;
            _this.list_ul.style.left = 0;
        } else {
            _this.inow++;
        }
        _this.toImg();
    }
}
