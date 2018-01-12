<template>
    <div ref="progress"></div>
</template>
<style>

</style>
<script>
  import vueProgress from '../lib/vueProgress'

  export default {
    data () {
      return {
        vueProgress: null
      }
    },
    props: {
      options: {
        type: Object,
        default: () => {
          return {}
        }
      },
      value: {
        type: [Number, String]
      },
      type: {
        type: String
      },
      valAddCalBack: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    computed: {},
    components: {},
    methods: {
      update (val, duration) {
        this.vueProgress.update(val, duration)
      },
      getVal () {
        return this.vueProgress.getValue()
      }
    },
    watch: {
      value (val1, val2) {
        this.update(val1, Math.abs(val1 - val2) * 12)
      }
    },
    mounted () {
      this.vueProgress = vueProgress.create({
        dom: this.$refs.progress,
        type: this.type,
        value: this.value,
        radius: this.options.radius,
        circleWidth: this.options.circleWidth,
        circleWidthArray: this.options.circleWidthArray,
        circleLineCap: this.options.circleLineCap,
        maxValue: this.options.maxValue,
        text: this.options.text,
        textColor: this.options.textColor,
        pathColors: this.options.pathColors,
        gradientColor: this.options.gradientColor,
        gradientOpacity: this.options.gradientOpacity,
        duration: this.options.duration,
        rectWidth: this.options.rectWidth,
        rectHeight: this.options.rectHeight,
        rectRadius: this.options.rectRadius,
        valAddCalBack: this.valAddCalBack
      });
    }
  }
</script>