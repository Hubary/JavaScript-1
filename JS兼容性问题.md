# JS 兼容性问题总结

*  阻止事件冒泡


`cancelBubble` || `stopPropagetion`

* 事件源

`event` || `window.event`

* 事件代理

`target` || `srcElement`

* 非行间样式

`currentStyle` || `getComputedStyle()`

* 事件监听

`addEventListener` || `attachEvent`

* 阻止浏览器默认事件

`preventDefault()` || `returnValue=false`

* 键盘事件

`event.keyCode` || `event.which`

* 滚动条高度

`document.body.scrollTop` || `document.documentElement.scrollTop`