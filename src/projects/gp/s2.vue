<template>
  <div class="section2">
    <div class="view">
      <GodModView v-bind:bgUrl="require('@/projects/gp/s2/view.jpg')" />
      <img class="mask" src="@/projects/gp/s2/mask.svg" alt="" srcset="" />
      <div class="content">
        <h2>A19生活圈 快捷時尚距離</h2>
        <p>
          正對市中心池景，唯一稀有、無以複製，劃一道幸福的半徑，以最輕鬆的距離，隨時上演繁華，享受優雅轉身的便利，感受生活中的自在與愜意！
        </p>
      </div>
    </div>
    <div class="view"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section2 {
  width: size(1920);
  height: size(1080);
  .view {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .mask {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }

  .content {
    pointer-events: none;
    position: absolute;
    z-index: 2;
    width: size(1102);
    bottom: size(68);
    left: 50%;
    margin-left: -#{size(551)};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: #fff;
    h2 {
      width: size(528);
      font-size: size(48);
      font-weight: 500;
      line-height: 1.5;
    }
    p {
      text-align: left;
      width: size(528);
      font-size: size(20);
      font-weight: 300;
      line-height: 2;
      letter-spacing: 2px;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    width: size-m(375);
    height: size-m(667);

    .mask {
      width: auto;
      height: size-m(149);
    }

    .content {
      pointer-events: none;
      position: absolute;
      z-index: 2;
      width: size-m(314);
      bottom: size-m(15);
      left: 50%;
      margin-left: -#{size-m(157)};
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-direction: column;
      h2 {
        width: 100%;
        font-size: size-m(20);
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 5px;
      }
      p {
        text-align: left;
        width: 100%;
        font-size: size-m(13);
        font-weight: 500;
        line-height: 1.5;
        letter-spacing: 1px;
      }
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
  name: 'section2',
  components: {
    GodModView
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
