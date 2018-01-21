import vueProgress from './components/progress-bar.vue'

let svg

const defaultComponentName = 'svg-progress-bar'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component(defaultComponentName, vueProgress)
} else {
  // install method
  svg = {
    install: function (Vue, options = {}) { //提供可选的组件名
      Vue.component(options.componentName || defaultComponentName, vueProgress)
    }
  }
}

export default svg
