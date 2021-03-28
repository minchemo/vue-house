import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '@/assets/style/global.scss'

/* 全局配置 https://blog.csdn.net/FireBird_one/article/details/80295229 */
import config from './lib/config.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueScrollTo from 'vue-scrollto' // scroll 錨點
import VueLazyload from 'vue-lazyload' // 圖片 lazy load
import VueScrollReveal from 'vue-scroll-reveal'
import VuePhotoZoomPro from 'vue-photo-zoom-pro'
import VueTouch from 'vue-touch'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faTimes,
  faPhone,
  faPen,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

import AOS from '@/lib/aos/src/js/aos'
import 'aos/dist/aos.css'

import {
  faFacebookMessenger,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSvgIcon from 'vue-svgicon'

// AOS.init()

library.add(faBars)
library.add(faTimes)
library.add(faPhone)
library.add(faPen)
library.add(faFacebookMessenger)
library.add(faFacebookF)
library.add(faMapMarkerAlt)

Vue.use(VuePhotoZoomPro)

VueTouch.config.swipe = {
  direction: 'horizontal'
}
Vue.use(VueTouch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSvgIcon, {
  tagName: 'icon'
})

Vue.use(config)

Vue.use(ElementUI)
Vue.use(VueScrollTo)
Vue.use(VueLazyload)
Vue.use(VueScrollReveal)

new Vue({
  router,
  store,
  methods: {
    recaptcha() {
      this.$recaptchaLoaded('homepage').then((token) => {
        console.log(token) // Will print the token
      })
    }
  },
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
