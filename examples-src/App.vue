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
                        <h2 class="ma0 pb2 f2 fw4 lh-1">Default svg-progress-bar</h2>
                        <p class="ma0 lh-copy f6">
                            svg-progress-bar can be used with no configuration or very little configuration.</p>
                    </a>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Default circle</div>
                        <div class="tc">
                            <progress-bar value="65.55"></progress-bar>
                        </div>
                    </div>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Default rect</div>
                        <div class="tc">
                            <progress-bar value="65.55" type="rect"></progress-bar>
                        </div>
                    </div>
                </div>
                <div class="pt5 nb5" id="custom-options">
                    <a href="#custom-sizes" :class="header_cls">
                        <h2 class="ma0 pb2 f2 fw4 lh-1">Custom options</h2>
                        <p class="ma0 lh-copy f6">vue-progress-bar can also have any arbitrary options .</p>
                    </a>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom color (['#999','rgb(33, 150, 243)'])</div>
                        <div class="tc">
                            <progress-bar value="65.55"
                                          :options="{pathColors: ['#999','rgb(33, 150, 243)']}"></progress-bar>
                        </div>
                    </div>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom circleLinecap ('round')</div>
                        <div class="tc">
                            <progress-bar value="65.55"
                                          :options="{circleLineCap: 'round'}"></progress-bar>
                        </div>
                    </div>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom gradientColor (['rgb(33, 150, 243)','rgb(255, 0, 0)'])</div>
                        <div class="tc">
                            <progress-bar value="65.55"
                                          :options="{gradientColor: ['rgb(33, 150, 243)','rgb(255, 0, 0)']}"></progress-bar>
                        </div>
                    </div>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom text (text: func , textColor: 'rgb(33, 150, 243)')</div>
                        <div class="tc">
                            <progress-bar value="65.55" :options="options1"></progress-bar>
                        </div>
                    </div>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom duration (duration: 150)</div>
                        <div class="tc">
                            <progress-bar value="65.55" :options="{duration:150}"></progress-bar>
                        </div>
                    </div>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">
                            Custom rect width height rectRadius (rectWidth: 380,rectHeight: 28,rectRadius:14)
                        </div>
                        <div class="tc">
                            <progress-bar value="65" type="rect"
                                          :options="{rectWidth:380,rectHeight:28,rectRadius:14}"></progress-bar>
                        </div>
                    </div>
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">
                            Custom rect width gradientColor (gradientColor:['rgb(33, 150, 243)','rgb(0, 0, 0)'])
                        </div>
                        <div class="tc">
                            <progress-bar value="65" type="rect"
                                          :options="{gradientColor: ['rgb(33, 150, 243)','rgb(0, 0, 0)']}"></progress-bar>
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
      return {}
    },
    methods: {
      update () {
        let now = this.$refs.uuu.getVal();
        this.$refs.uuu.update(now + 5, 20)
      }
    },
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
      options () {
        return {
          radius: 80,
          value: 60.29,
          text: function (value) {
            return this.htmlifyNumber(value) + '<span style="font-size: 0.4em;">%</span>';
          },
          type: 'rect',
          rectWidth: 600,
          rectHeight: 50,
          rectRadius: 25,
        }
      },
      options1 () {
        return {
          radius: 80,
          value: 60.29,
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
