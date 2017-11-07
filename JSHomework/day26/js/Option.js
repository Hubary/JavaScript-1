/**
 *Option.js
 *author:jessie-zly
 *2017/11/6
 *description: 本类用于实现本项目初始界面,并进行难度选择
 */

class Option {
    /**
     * 构造器
     * @param callBackFn 回调函数,获取难度选项
     */
    constructor(callBackFn) {
        //
        let body_main = document.getElementById("body_main");
        //页面显示
        body_main.innerHTML = `<ul id="options" class="options">
                                    <li value="1">超级困难</li>
                                    <li value="2">非常困难</li>
                                    <li value="3">比较困难</li>
                                    <li value="4">简单</li>
                                </ul>`;

        //
        let option_ul = document.getElementById("options");
        let option_li = Array.from(option_ul.getElementsByTagName("li"));
        //
        for (let i in option_li) {
            //li点击事件
            option_li[i].onclick = () => {
                //隐藏
                option_ul.style.display = "none";
                //执行回调函数,获取难度系数,同时进行页面加载
                callBackFn(i);
            }
        }


        /*  //事件代理
          option_ul.onclick=(event)=>{
              //兼容处理
              event=event||window.event;
              let target=event.target||event.srcElement;
              //判断是否点击到li
              if(target.tagName.toLowerCase()=="li"){
                  //隐藏ul
                  option_ul.style.display="none";
              }

          }*/

    }

}