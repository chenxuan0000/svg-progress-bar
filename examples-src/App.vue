<template>
    <div id="app">
        <div class="fixed top-0 w-100 z-1 flex-none flex flex-row items-center pv3 ph4 bg-blue white">
            <div class="flex-none"><a href="https://github.com/chenxuan0000/svg-progress-bar" rel="noopener"
                                      target="_blank" title="View on Github">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 16 16">
                    <path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"></path>
                </svg>
            </a>
            </div>
            <div class="flex-none" style="margin-left: 10px;"><a
                    href="https://github.com/chenxuan0000/svg-progress-bar"
                    class="white no-underline underline-hover">svg-progress-bar</a></div>
        </div>
        <div class="flex-fill" style="padding-bottom: 10rem">
            <div class="mb5 center" style="max-width: 57rem">
                <div class="pt5 nb5">
                    <a href="#default-spinners" :class="header_cls">
                        <h2 class="ma0 pb2 f2 fw4 lh-1">Default svg-progress-bar(缺省参数的svg-progress-bar)</h2>
                        <p class="ma0 lh-copy f6">
                            svg-progress-bar can be used with no configuration or very little configuration.</p>
                    </a>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Default circle</div>
                        <div class="tc">
                            <progress-bar value="65"></progress-bar>
                        </div>
                    </div>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Default rect</div>
                        <div class="tc">
                            <progress-bar value="65" type="rect"></progress-bar>
                        </div>
                    </div>
                </div>
                <div class="pt5 nb5" id="custom-options">
                    <a href="#custom-sizes" :class="header_cls">
                        <h2 class="ma0 pb2 f2 fw4 lh-1">Custom options</h2>
                        <p class="ma0 lh-copy f6">vue-progress-bar can also have any arbitrary options .</p>
                    </a>
                    <!--valAddCalBack of svg bar-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom <span
                                class="normal"> valAddCalBack of svg bar (带值变化回调的svg bar)</span>
                        </div>
                        <div class="tc" style="position: relative;">
                            <div class="dot-test">
                                <span class="one" :class="{active: dotValArr.per20}"><span class="text"
                                                                                           v-text="dotValArr.per20"></span></span>
                                <span class="two" :class="{active: dotValArr.per40}"><span class="text"
                                                                                           v-text="dotValArr.per40"></span></span>
                                <span class="three" :class="{active: dotValArr.per60}"><span class="text"
                                                                                             v-text="dotValArr.per60"></span></span>
                                <span class="four" :class="{active: dotValArr.per80}"><span class="text"
                                                                                            v-text="dotValArr.per80"></span></span>
                            </div>
                            <progress-bar value="90" type="rect" :valAddCalBack="valAddCalBack1"
                                          :options="{rectWidth:800,rectHeight:10,duration: 1800,text: '',pathColors: ['#bbb','yellow']}"></progress-bar>
                        </div>
                    </div>
                    <!--valAddCalBack of svg bar2-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom <span
                                class="normal"> valAddCalBack of svg bar (带小数值变化回调的svg bar)</span>
                        </div>
                        <div class="tc" style="position: relative;">
                            <div class="dot-test">
                                <span class="one2" :class="{active: dotValArr2.per1}"><span class="text"
                                                                                            v-text="dotValArr2.per1"></span></span>
                                <span class="two2" :class="{active: dotValArr2.per2}"><span class="text"
                                                                                            v-text="dotValArr2.per2"></span></span>
                                <span class="three2" :class="{active: dotValArr2.per3}"><span class="text"
                                                                                              v-text="dotValArr2.per3"></span></span>
                                <span class="four2" :class="{active: dotValArr2.per4}"><span class="text"
                                                                                             v-text="dotValArr2.per4"></span></span>
                            </div>
                            <progress-bar value="90" type="rect" :valAddCalBack="valAddCalBack2"
                                          :options="{rectWidth:800,rectHeight:10,duration: 1800,text: '',valRate: 0.28,pathColors: ['#bbb','yellow']}"></progress-bar>
                        </div>
                    </div>
                    <!--自定义路径颜色-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom <span class="normal">color(自定义路径颜色) (['#999','rgb(33, 150, 243)'])</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="65.55"
                                          :options="{pathColors: ['#999','rgb(33, 150, 243)']}"></progress-bar>
                        </div>
                    </div>
                    <!--自定义闭合为圆角-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom <span class="normal">circleLinecap(自定义闭合为圆角) ('round')</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="65.55"
                                          :options="{circleLineCap: 'round'}"></progress-bar>
                        </div>
                    </div>
                    <!--自定义为扇形-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom <span
                                class="normal"> fan of svg circleWidth === radius(自定义为扇形)</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="100"
                                          :options="{radius:130,circleWidth:130,duration: 3000,pathColors: ['#bbb','rgb(33, 150, 243)']}"></progress-bar>
                        </div>
                    </div>
                    <!--自定义两条路径宽度-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom Wide ranging <span
                                class="normal"> varyStrokeArray (自定义两条路径宽度) ([10,20])</span></div>
                        <div class="tc">
                            <progress-bar value="70"
                                          :options="{radius:189,circleLineCap: 'round',varyStrokeArray: [10,20]}"></progress-bar>
                        </div>
                    </div>
                    <!--自定义两条路径宽度-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom Wide ranging <span
                                class="normal"> varyStrokeArray (自定义两条路径宽度) ([30,15])</span></div>
                        <div class="tc">
                            <progress-bar value="70"
                                          :options="{radius:189,circleLineCap: 'round',varyStrokeArray: [30,15]}"></progress-bar>
                        </div>
                    </div>
                    <!--自定义文本格式-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom <span class="normal">text (自定义文本格式) (text: func , textColor: 'rgb(33, 150, 243)')</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="65.55" :options="options1"></progress-bar>
                        </div>
                    </div>
                    <!--自定义动画执行时间-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom duration (自定义动画执行时间) <span class="normal">(duration: 150)(duration: 0)</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="65.55" :options="{duration:150}"></progress-bar>
                        </div>
                        <div class="tc">
                            <progress-bar :value="61" :options="{duration:0}"></progress-bar>
                        </div>
                    </div>
                    <!--自定义rect的大小和圆角弧度-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">
                            Custom rect <span class="normal">width height rectRadius (自定义rect的大小和圆角弧度) (rectWidth: 380,rectHeight: 28,rectRadius:14)</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="65" type="rect"
                                          :options="{rectWidth:380,rectHeight:28,rectRadius:14}"></progress-bar>
                        </div>
                    </div>
                    <!--自定义rect的渐变色-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">
                            Custom rect <span class="normal">width gradientColor (自定义rect的渐变色) (gradientColor:['rgb(33, 150, 243)','rgb(0, 0, 0)'])</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="16" type="rect"
                                          :options="{gradientColor: ['rgb(33, 150, 243)','rgb(0, 0, 0)']}"></progress-bar>
                        </div>
                    </div>
                    <!--无文本-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">
                            Custom rect <span class="normal">no text (无文本)(text:func)</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="26" type="rect"
                                          :options="{text: ''}"></progress-bar>
                        </div>
                    </div>
                    <!--不等高度的rect1-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">
                            Custom rect <span class="normal">varyStrokeArray (自定义两条路径高度) ([10,20])</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="66" type="rect"
                                          :options="{varyStrokeArray: [10,20]}"></progress-bar>
                        </div>
                    </div>
                    <!--不等高度的rect2-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">
                            Custom rect <span class="normal">varyStrokeArray (自定义两条路径高度) ([30,10])</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="66" type="rect"
                                          :options="{varyStrokeArray: [30,10]}"></progress-bar>
                        </div>
                    </div>
                    <!--数值增长的幅度-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">
                            Custom rect <span class="normal">valRate (数值增长的幅度) (.1)</span>
                        </div>
                        <div class="tc">
                            <progress-bar value="66" type="rect"
                                          :options="{valRate: 0.1}"></progress-bar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import progressBar from 'src/components/progress-bar.vue'

  export default {
    name: 'app',
    data () {
      return {
        dotValArr: {
          per20: '',
          per40: '',
          per60: '',
          per80: ''
        },
        dotValArr2: {
          per1: '',
          per2: '',
          per3: '',
          per4: ''
        }
      }
    },
    methods: {},
    computed: {
      header_cls () {
        return 'db mt5 pb3 dark-gray hover-blue lh-1 no-underline'
      },
      box_cls () {
        return 'db pt3 pb5 ph3 ph0-l bt b--black-10 relative'
      },
      box_style () {
        return 'min-height: 100px'
      },
      label_cls () {
        return 'mb4 f6 fw6 dark-gray'
      },
      cell_cls () {
        return 'ph1 pv1 ba b--moon-gray'
      },
      valAddCalBack1 () {
        return [
          {
            value: 20,
            func: () => {
              this.dotValArr.per20 = 20
            }
          },
          {
            value: 40,
            func: () => {
              this.dotValArr.per40 = 40
            }
          },
          {
            value: 60,
            func: () => {
              this.dotValArr.per60 = 60
            }
          },
          {
            value: 80,
            func: () => {
              this.dotValArr.per80 = 80
            }
          }
        ]
      },
      valAddCalBack2 () {
        return [
          {
            value: 16.67,
            func: () => {
              this.dotValArr2.per1 = 16.67
            }
          },
          {
            value: 33.33,
            func: () => {
              this.dotValArr2.per2 = 33.33
            }
          },
          {
            value: 50,
            func: () => {
              this.dotValArr2.per3 = 50
            }
          },
          {
            value: 66.67,
            func: () => {
              this.dotValArr2.per4 = 66.67
            }
          },
          {
            value: 83.33,
            func: () => {
            }
          },
          {
            value: 100,
            func: () => {
            }
          }
        ]
      },
      options1 () {
        return {
          radius: 80,
          text: function (value) {
            return this.htmlifyNumber(value) + '<span style="font-size: 0.4em;">%</span>';
          },
          textColor: 'rgb(33, 150, 243)'
        }
      }
    },
    components: {
      progressBar
    }
  }
</script>

<style lang="scss">
    .dot-test {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 800px;
        z-index: 99;
        > span {
            position: absolute;
            width: 10px;
            height: 10px;
            top: 5px;
            border: 4px solid #e80707;
            transform: translate(-50%, -18%);
            border-radius: 50%;
            &.active {
                width: 14px;
                height: 14px;
                border-width: 6px;
            }
            .text {
                position: absolute;
                left: -9px;
                width: 30px;
                top: -30px;
            }
            &.one {
                left: 20%;
            }
            &.two {
                left: 40%;
            }
            &.three {
                left: 60%;
            }
            &.four {
                left: 80%;
            }
            &.one2 {
                left: 16.67%;
            }
            &.two2 {
                left: 33.33%;
            }
            &.three2 {
                left: 50%;
            }
            &.four2 {
                left: 66.67%;
            }
        }
    }

    #app {
        padding-bottom: 100px;
    }

    .flex-fill {
        -ms-flex: 1 1;
        flex: 1 1;
    }

    .options {
        width: 300px;
        font-size: 15px;
        margin-right: 60px;
        p {
            color: #000;
            margin-bottom: 30px;
            b {
                font-size: 16px;
                font-style: italic;
            }
        }
    }

    .wd800 {
        width: 800px;
        margin: 30px auto;
    }

    .warp {
        height: 260px;
        width: 360px;
        overflow: hidden;
        ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            li {
                height: 30px;
                line-height: 30px;
                display: flex;
                justify-content: space-between;
                font-size: 15px;
            }
        }
    }

    @media screen and (max-width: 770px) {
        .warp {
            width: 90%;
            margin: 0 auto;
        }
        body {
            background-color: lightblue;
        }
        .wd800 {
            width: 100%;
        }
        .flex.wd800 {
            display: block;
        }
        .options {
            width: 90%;
            margin: 20px auto;
            p {
                margin-bottom: 0;
            }
        }
    }
</style>
