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
      this.vueProgress = vueProgress.create(
        Object.assign(
          {
            dom: this.$refs.progress,
            type: this.type,
            value: this.value,
            valAddCalBack: this.valAddCalBack
          },
          this.options
        )
      );      
    }
  }
</script>