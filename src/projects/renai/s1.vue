<template>
  <div class="s1">
    <div class="main">
      <div class="left">
        <img
          class="main-text"
          src="@/projects/renai/s1/main.svg"
          alt=""
          srcset=""
        />
        <div class="bg">
          <img
            class="bg1"
            src="@/projects/renai/s1/mainbg1.svg"
            alt=""
            srcset=""
          />
          <img
            class="bg2"
            src="@/projects/renai/s1/mainbg2.svg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="right">
        <img
          class="text"
          src="@/projects/renai/s1/title.svg"
          alt=""
          srcset=""
        />
        <div class="order-button">立即預約</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: size(1372);
  background-size: 100%;
  background-position: bottom;
  background-color: #eb5c20;
  padding-top: #{$nav_pc_height + size(138)};
  .main {
    position: relative;
    width: size(1490);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .left {
      width: size(655.31);
      height: size(927.12);
      display: flex;
      align-items: center;
      justify-content: center;
      .main-text {
        position: absolute;
        width: size(276.8);
      }
      .bg {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }
    .right {
      .text {
        width: size(709.92);
        height: size(495.48);
      }
      .order-button {
        width: size(674);
        height: size(77);
        font-size: size(44);
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #eb5c20;
        margin: 0 auto;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s1 {
    position: relative;
    width: size-m(375);
    height: size-m(720);
    min-height: 0;
    max-height: size-m(812);
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
  name: "s1",
  props: ["scrollInstance"],

  data() {
    return {
      isMobile,
    };
  },

  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },

  created() {},
};
</script>
