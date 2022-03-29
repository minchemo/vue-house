<template>
  <div class="section3">
    <img
      class="title"
      v-if="isMobile"
      src="@/projects/gp/s3/title.svg"
      alt=""
      srcset=""
    />
    <div class="view">
      <GodModView
        v-if="!isMobile"
        v-bind:bgUrl="require('@/projects/gp/s3/view.jpg')"
      />
      <GodModView2
        v-else
        v-bind:bgUrl="require('@/projects/gp/s3/view_m.jpg')"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section3 {
  width: size(1920);
  height: size(1080);
  .view {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section3 {
    width: size-m(375);
    height: size-m(667);
    .title {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
    }
    .view {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
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
import GodModView from "@/components/GodModView.vue"
import GodModView2 from "@/components/GodModView2.vue"

export default {
  name: 'section3',
  components: {
    GodModView,
    GodModView2
  },
  data() {
    return {
      isMobile
    }
  },

  methods: {},

  created() { },

  mounted() {
  }
}
</script>
