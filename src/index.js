import vueProgress from './components/progress-bar.vue'

vueProgress.install = function (Vue, options = {}) {
  Vue.component(options.componentName || vueProgress.name, vueProgress)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component(vueProgress.name, vueProgress)
}

export default vueProgress