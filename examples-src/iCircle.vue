<template>
  <div :style="circleSize" :class="wrapClasses">
    <svg viewBox="0 0 100 100">
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#db3c24;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f3b66d;stop-opacity:1" />
      </linearGradient>

      <path :d="pathString" :stroke="trailColor" :stroke-width="trailWidth" :fill-opacity="0" />
      <path :d="pathString" :stroke-linecap="strokeLinecap" stroke="url(#gradient)" :stroke-width="strokeWidth" fill-opacity="0" :style="pathStyle" v-show="percent !== 0"/>
    </svg>
    <div :class="innerClasses">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
  .ivu-chart-circle-inner {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    line-height: 1;
  }
</style>
<script>
  export default {
    name: 'i-circle',
    data () {
      return {}
    },
    props: {
      percent: {
        type: [Number, String],
        default: 0
      },
      size: {
        type: [Number, String],
        default: 120
      },
      strokeWidth: {
        type: [Number, String],
        default: 6
      },
      strokeColor: {
        type: String,
        default: '#2db7f5'
      },
      strokeLinecap: {
        default: 'round'
      },
      trailWidth: {
        type: [Number, String],
        default: 5
      },
      trailColor: {
        type: String,
        default: '#eaeef2'
      }
    },
    computed: {
      circleSize: function circleSize () {
        return {
          width: this.size + 'px',
          height: this.size + 'px'
        }
      },
      radius: function radius () {
        return 50 - this.strokeWidth / 2
      },
      pathString: function pathString () {
        return 'M 50,50 m 0,-' + this.radius + 'a ' + this.radius + ',' + this.radius + ' 0 1 1 0,' + 2 * this.radius + 'a ' + this.radius + ',' + this.radius + ' 0 1 1 0,-' + 2 * this.radius
      },
      len: function len () {
        return Math.PI * 2 * this.radius
      },
      pathStyle: function pathStyle () {
        return {
          'stroke-dasharray': this.len + 'px ' + this.len + 'px',
          'stroke-dashoffset': (100 - this.percent) / 100 * this.len + 'px',
          'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
      },
      wrapClasses: function wrapClasses () {
        return 'ivu-chart-circle'
      },
      innerClasses: function innerClasses () {
        return 'ivu-chart-circle-inner'
      }
    },
    components: {},
    methods: {},
    created () {}
  }
</script>
