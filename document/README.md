# svg-progress-bar
> 基于Vue.js的简单的svg进度条

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/svg-progress-bar) ![](https://img.shields.io/npm/v/svg-progress-bar.svg)
                                         
<p align="center">
    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2176389216,1520905711&fm=27&gp=0.jpg" width="350"/>
</p>                                          
<p align="center">
    🌾 <a href="https://chenxuan0000.github.io/svg-progress-bar/" target="_blank">在线demo</a> |
    📘 <a href="../README.md">英文文档</a>
</p>

## 浏览器兼容性
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## svg-progress-bar是什么？
`svg-progress-bar` 是一款基于 [circles](https://github.com/lugolabs/circles)项目二次开发的vue组件

## 功能特性
* [x] 零依赖,体积小
* [x] 目前支持圆环/矩形的进度条
* [x] 配置多满足多样需求
* [x] 持续维护

## 安装
### NPM

```bash
npm install svg-progress-bar --save
```

## 使用
### ES6
> 详细介绍 [example-src/App.vue](https://github.com/chenxuan0000/svg-progress-bar/blob/master/examples-src/App.vue)


```js
// **main.js**
import Vue from 'vue'
import svg from 'svg-progress-bar'
// 你可以自己设置全局注册的组件名 默认注册的组件名是 svg-progress-bar
Vue.use(svg,{componentName: 'percent-bar'})
```

### 普通模式 (script引入 )

例子:
> 详细介绍 [test/test.html](https://github.com/chenxuan0000/svg-progress-bar/blob/master/test/test.html)
```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <svg-progress-bar></svg-progress-bar>
  </div>
  <script src="vue.js"></script>
  <script src="svg-progress-bar"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## 配置参数
|key|description|default|val|
|:---|---|---|---|
|`type`|进度条类型|`'circle'`|`'circle'` `'rect'`|
|`value`|进度条的初始值|`0`|`Number` `String`|
|`valAddCalBack`|进度条value变化对应节点的回调事件|`[]`|`[{value: 20,func: () => {this.dotValArr.per20 = 20}},{value: 40,func: () => {this.dotValArr.per40 = 40}}]`|
|`options`|进度条的options对象参数|`{}`|`Object`|
|`options.radius`|环形进度条半径|`50`|`Number`|
|`options.valRate`|value每次增加的幅度(建议<=1)|`1`|`Number`|
|`options.circleWidth`|环形进度条线宽|`10`|`Number`|
|`options.varyStrokeArray`|如果你想要不等宽的环形条或者柱形条可以设置宽度/高度组|`null`|`Array`|
|`options.circleLinecap`|环形进度条的边角形状|`''`|`'round',''`|
|`options.maxValue`|进度条的最大值|`100`|`Number`|
|`options.text`|进度条的文本格式|`function (value) {return this.htmlifyNumber(value)}`|`Function`|
|`options.textColor`|进度条的文本颜色|`#000`|`color`|
|`options.pathColors`|进度条填充的颜色队列|`['#EEE', '#F00']`|`Array`|
|`options.gradientColor`|进度条填充的渐变色|`null`|`Array`|
|`options.gradientOpacity`|进度条填充的渐变色透明度|`[1,1]`|`Array`|
|`options.duration`|进度条的动画时间|`500`|`Number`|
|`options.rectWidth`|矩形进度条的宽度|`400`|`Number`|
|`options.rectHeight`|矩形进度条的高度|`40`|`Number`|
|`options.rectRadius`|矩形进度条的圆角度|`0`|`Number`|


## License
svg-progress-bar is open source and released under the [MIT License](LICENSE).