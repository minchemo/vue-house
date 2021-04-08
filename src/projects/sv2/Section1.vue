<template>
  <div class="section1">
    <img
      src="./s1/t1.gif"
      class="logo"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-delay="500"
    />
    <div class="txt">
      <h3
        class="title1"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        Check in奢華的完美假期
      </h3>
      <h4
        class="title2"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="700"
      >
        體驗式風格 休旅美學
      </h4>
      <div
        class="title3"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="900"
      >
        打造<b>2021</b>獨有生活風格新地標<br />重繪A7最美天際線
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section1 {
  width: 100%;
  height: calc(100vh - #{$nav_pc_height});
  margin-top: $nav_pc_height;
  .logo {
    width: 14.9vw;
    position: absolute;
    top: calc(50% - 14.5vw);
    left: 64.5vw;
    z-index: 2;
    filter: brightness(1.2);
  }
  .txt {
    width: 100%;
    position: absolute;
    top: calc(50% + 1vw);
    z-index: 1;
    left: 22vw;
    color: #fff;
    font-size: calc(100vw * 46 / 1920);
    line-height: 1.3;
    .title2 {
      font-weight: 500;
      font-size: 1.22em;
      color: #b59668;
    }
    .title3 {
      font-weight: 600;
      font-size: 0.6em;
      line-height: 1.6em;
      b {
        letter-spacing: 0.02em;
        font-size: 1.15em;
      }
    }
  }
  .bg {
    display: block;
    height: 100%;
    position: relative;
    background: url("s1/bg.jpg");
    background-size: cover;
    background-position: center;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    height: calc(100vh - 60px - 63px);
    max-height: calc(100vw * 750 / 375);
    min-height: calc(100vw * 530 / 375);
    margin-top: 60px;
    .logo {
      width: 40vw;
      top: calc(50% - 67vw);
      left: calc(50% - 20vw);
      z-index: 2;
    }
    .txt {
      font-size: calc(100vw * 21 / 375);
      top: calc(50% + -27vw);
      left: 0;
      .title3 {
        font-weight: 400;
        letter-spacing: 0.1em;
        text-shadow: 0 0 0.8em #069;
      }
    }

    .bg {
      background: url("s1/bg_m.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom;
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
import { isMobile } from "@/utils";
export default {
  name: "section1",

  data() {
    return {
      isMobile
    };
  },

  methods: {},

  created() {}
};
</script>
