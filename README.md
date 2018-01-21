# svg-progress-bar
> A simple,progress bar for Vue.js

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/svg-progress-bar) ![](https://img.shields.io/npm/v/svg-progress-bar.svg)
                                         
<p align="center">
    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2176389216,1520905711&fm=27&gp=0.jpg" width="350"/>
</p>                                          
<p align="center">
   🐾<a href="https://chenxuan0000.github.io/component-document/index_prod.html#/component/svg-bar-default">online demo</a> |
   🌾 <a href="https://chenxuan0000.github.io/svg-progress-bar/" target="_blank">simple demo</a> |
   📘 <a href="./document/README.md">Chinese Document</a>
</p>

## Browser support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## What is svg-progress-bar？
`svg-progress-bar` is a based on [circles](https://github.com/lugolabs/circles) of the secondary development of project vue components

## Features
* [x] zero dependence, small volume.
* [x] currently supports loop/rectangle progress bar.
* [x] the configuration meets a variety of requirements.
* [x] ongoing maintenance

## Installation

### NPM

```bash
npm install svg-progress-bar --save
```

## Usage
### ES6
> Specific reference [example-src/App.vue](https://github.com/chenxuan0000/svg-progress-bar/blob/master/examples-src/App.vue)

```js
// **main.js**
import Vue from 'vue'
import svg from 'svg-progress-bar'
// you can set componentName default componentName is svg-progress-bar
Vue.use(svg,{componentName: 'percent-bar'})
```
s

### normal use (script tag)

Example:
> Specific reference [test/test.html](https://github.com/chenxuan0000/svg-progress-bar/blob/master/test/test.html)
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

## Configure list
|key|description|default|val|
|:---|---|---|---|
|`type`|type of the progress bar|`'circle'`|`'circle'` `'rect'`|
|`value`|value of the progress bar|`0`|`Number` `String`|
|`valAddCalBack`|valAddCalBack of the progress bar|`[]`|`[{value: 20,func: () => {this.dotValArr.per20 = 20}},{value: 40,func: () => {this.dotValArr.per40 = 40}}]`|
|`options`|options of the progress bar|`{}`|`Object`|
|`options.valRate`|value add Rate of the circle progress bar(suggest <= 1)|`1`|`Number`|
|`options.radius`|radius of the circle progress bar|`50`|`Number`|
|`options.circleWidth`|stokeWidth of the circle progress bar|`10`|`Number`|
|`options.varyStrokeArray`|varyStrokeArray of the circle progress bar if you want wide ranging|`null`|`Array`|
|`options.circleLinecap`|circleLinecap of the circle progress bar|`''`|`'round',''`|
|`options.maxValue`|maxValue of the progress bar|`100`|`Number`|
|`options.text`|text of the progress bar|`function (value) {return this.htmlifyNumber(value)}`|`Function`|
|`options.textColor`|text color of the progress bar|`#000`|`color`|
|`options.pathColors`|pathColors of the progress bar|`['#EEE', '#F00']`|`Array`|
|`options.gradientColor`|gradientColor of the progress bar|`null`|`Array`|
|`options.gradientOpacity`|gradientOpacity of the progress bar|`[1,1]`|`Array`|
|`options.duration`|duration of the progress bar|`500`|`Number`|
|`options.rectWidth`|rectWidth of the rect progress bar|`400`|`Number`|
|`options.rectHeight`|rectHeight of the rect progress bar|`40`|`Number`|
|`options.rectRadius`|rectRadius of the rect progress bar|`0`|`Number`|


## License
svg-progress-bar is open source and released under the [MIT License](LICENSE).