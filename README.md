# vue-progress-bar 
> A simple,progress bar for Vue.js
[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-seamless-scroll) ![](https://img.shields.io/npm/v/vue-seamless-scroll.svg)
                                         
<p align="center">
    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2176389216,1520905711&fm=27&gp=0.jpg" width="350"/>
</p>                                          
<p align="center">
    🐾 <a href="#快速开始" target="_blank">快速开始</a> | 
    🌾 <a href="README.md">English Document</a>
</p>

## Browser support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## vue-progress-bar是什么？
`vue-progress-bar` 是一款基于 [circles](https://github.com/lugolabs/circles)项目二次开发的vue组件

## 功能特性
* [x] 零依赖,体积小
* [x] 目前支持圆环/矩形的进度条
* [x] 持续维护

#快速开始
## 安装
### NPM

```bash
npm install vue-seamless-scroll --save
```

## 使用
### ES6
> 详细介绍 [example-src/App.vue](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/examples-src/App.vue)

```js
import Vue from 'vue'
import vueProgressBar from 'vue-progress-bar'

new Vue({
  components: {
    vueProgressBar
  }
})
```

### 普通模式 (script引入 )

例子:
> 详细介绍 [test/test.html](https://github.com/chenxuan0000/vue-seamless-scroll/blob/master/test/test.html)
```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
  </div>
  <script src="vue.js"></script>
  <script src="vue-progress-bar"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## 配置参数
|key|description|defualt|options|
|:---|---|---|---|
| `type`|type of the progress bar|`'circle'`|`'circle'` `'rect'`|
|`radius`|radius of the circle progress bar|`50`|`Number`|
|`circleWidth`|stoke-width of the circle progress bar|`10`|`Number`|
|`circleLinecap`|circleLinecap of the circle progress bar|`''`|`'round',''`|
|`maxValue`|maxValue of the progress bar|`100`|`Number`|
|`text`|text of the progress bar|`function (value) {return this.htmlifyNumber(value)}`|`Function`|
|`textColor`|text color of the progress bar|`#000`|`color`|
|`pathColors`|pathColors of the progress bar|`['#EEE', '#F00']`|`Array`|
|`duration`|duration of the progress bar|`500`|`Number`|
|`rectWidth`|rectWidth of the rect progress bar|`400`|`Number`|
|`rectHeight`|rectHeight of the rect progress bar|`40`|`Number`|
|`rectRadius`|rectRadius of the rect progress bar|`0`|`Number`|


## License
vue-progress-bar is open source and released under the [MIT License](LICENSE).