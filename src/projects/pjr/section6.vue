<template>
  <div class="section6 " >
    <div class="intro hasdivider">
      <h2 data-aos="fade-up">擁有高度的中山北路<br />收藏無價的風景之作</h2>
    </div>
    <div class="caption">高層視野拍攝實景</div>
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
      font-weight: 500;
      line-height: 1.4;
      letter-spacing: size(2);
      pointer-events: none;
      font-family: "Noto Serif TC",Noto Sans TC,serif;
    }
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: size(240);
      background-color: #fff;
      bottom: size(200);
    }
  }
  .caption {
          position: absolute;
          z-index: 1;
          color: #fff;
          right: size(40);
          bottom: size(30);
          font-size: size(20);
          font-weight: 200;
          text-shadow: #000 0.1em 0.1em 0.1em;
        }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section6 {
    height:size-m(667);
    .intro {
      top: size-m(70);

      h2 {
        font-size: size-m(25);
        letter-spacing: size-m(2);
        font-weight: 600;
      }
      &::after {
        content: unset;
      }
    }
    
      .caption {
            position: absolute;
            z-index: 1;
            color: #fff;
            right: size-m(10);
            bottom: size-m(20);
            font-size: size-m(12);
            text-shadow: #000 0.1em 0.1em 0.1em;
            font-weight: 300;
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
