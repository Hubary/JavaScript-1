/**
 * jQuery.jessie.slideDirection.js
 * author: jessie-zly
 * 2017/11/11
 * description: 检测鼠标滑动方向,让动画方向与鼠标滑动方向保持一致
 */



$.extend({
    /**
     * 检测鼠标进入元素时的方向
     * @param $ele 选中的 jQuery 对象
     * @param coordinates 鼠标的坐标(x,y) 对象
     * @returns {number} 返回 0->上 1->右 2->下 3->左
     */
    slideDirection: function ($ele, coordinates) {
        let width = $ele.width(),
            height = $ele.height(),
            cursorX = (coordinates.x - $ele.offset().left - (width / 2)) * (width > height ? (height / width) : 1),
            cursorY = (coordinates.y - $ele.offset().top - (height / 2)) * (height > width ? (width / height) : 1);

        //获取方向值
        let direction=Math.round(((Math.atan2(cursorY,cursorX) * (180/Math.PI) + 180)/90)+3)%4;
        //
        return direction;
    }
})