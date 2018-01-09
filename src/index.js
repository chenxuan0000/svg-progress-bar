import vueProgress from './components/progress-bar.vue'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-progress-bar', vueProgress)
}

export { vueProgress }

export default vueProgress
