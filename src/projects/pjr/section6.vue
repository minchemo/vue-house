<template>
  <div class="section6">
    <div class="intro">
      <h2 data-aos="fade-up">擁有高度的中山北路<br />收藏無價的風景之作</h2>
    </div>
    <GodModView />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section6 {
  height: 100vh;
  overflow: hidden;
  position: relative;
  .intro {
    position: absolute;
    width: 100%;
    top: size(200);
    z-index: 1;
    h2 {
      color: #fff;
      font-size: size(60);
      font-weight: 300;
      line-height: 1.4;
      letter-spacing: size(2);
      pointer-events: none;
    }
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: size(240);
      background-color: #fff;
      right: 50%;
      transform: translate(50%, -#{size(180)});
      bottom: 0;
    }
  }
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
import GodModView from "@/components/GodModView.vue"

export default {
  name: 'section6',
  components: {
    GodModView
  },
  data() {
    return {
      isMobile
    }
  },
}
</script>
