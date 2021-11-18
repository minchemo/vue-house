<template>
  <div class="section1">
    <img v-lazy :temp="require('@/projects/pjr/s1/logo.svg')" alt="" />
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section1 {
  min-height: 100vh;
  background-color: rgba($color: #231815, $alpha: 0.25);
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile
    }
  },

  methods: {},

  created() { },
}
</script>
