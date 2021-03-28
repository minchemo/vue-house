<template>
  <div class="home">
    <div ref="gtmNoScript" />
    <Loading :loading="loading" />
    <img v-if="!isMobile" src="../projects/ywh/暫時首頁.png" alt="" class="bg">
    <img v-if="isMobile" src="../projects/ywh/暫時首頁MO.png" alt="" class="bg">
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
</style>

<style lang="scss" scoped>
.bg {
  width: 100vw;
}
</style>

<script>
// @ is an alias to /src
// import Navigation from '@/layouts/Navigation.vue'
// import SideNavigation from '@/layouts/SideNavigation.vue'
// import ContactSection from '@/layouts/ContactSection.vue'
// import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'
import { isMobile } from '@/utils'

// import Section1 from '@/projects/ycg/Section1.vue'
// import Section2 from '@/projects/ycg/Section2.vue'
// import Section3 from '@/projects/ycg/Section3.vue'
// import Section4 from '@/projects/ycg/Section4.vue'
// import SimpleOrder from '@/components/SimpleOrder.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Loading,
    // Navigation,
    // SideNavigation,
    // ContactSection,
    // MobileNav,
    // Section1,
    // Section2,
    // Section3,
    // Section4,
    // SimpleOrder,

  },

  data() {
    return {
      isSide: true,
      loading: true,
      isMobile,
    }
  },
  created() {
    this.$Lazyload.$on('loaded', ({ el, src }) => {
      setTimeout(() => {
        if (this.loading) {
          this.loading = false
        }
      }, 0)
    })
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
