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
    mounted () {
      this.vueProgress = vueProgress.create({
        dom: this.$refs.progress,
        type: this.type,
        radius: this.options.radius,
        circleWidth: this.options.circleWidth,
        circleLinecap: this.options.circleLinecap,
        maxValue: this.options.maxValue,
        value: this.value,
        text: this.options.text,
        textColor: this.options.textColor,
        pathColors: this.options.pathColors,
        duration: this.options.duration,
        rectWidth: this.options.rectWidth,
        rectHeight: this.options.rectHeight,
        rectRadius: this.options.rectRadius
      });
    }
  }
</script>