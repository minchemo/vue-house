<template>
  <div class="section5">
    <div class="view">
      <div class="view-title" data-aos="flip-up" data-aos-duration="1000">
        <span class="en">URBAN LIFE </span>  <br v-if="isMobile" />精彩核心
      </div>
      <div class="view-divider"></div>
      <GodModView />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section5 {
  height: auto;
  width: 100vw;
  position: relative;
  background-size: cover;
  background-image: url("~@/assets/img/bg.jpg");
  padding-bottom: 120px;
  .view {
    padding-left: 5vw;
    .view-divider {
    width: 100%;
    position: relative;
    height: 2px;
    background: transparent;
    opacity: 0.5;
    padding-bottom: 4vw;
    border-top: 2px solid;
    }
    .view-title {
      font-size: 2vw;
      font-weight: 900;
      text-align: left;
      padding: 5vw 5vw 3vw 0;
      position: relative;

      .en{
          font-family: "Times New Roman", Times, serif;
        }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section5 {
    height: auto;
    width: 100vw;
    position: relative;
    background-size: contain;
    background-image: url("~@/assets/img/bg.jpg");

    .view {
      padding-left: 0;
      .view-divider {
        width: 100%;
        position: relative;
        height: 1px;
        background: transparent;
        opacity: 0.5;
        padding-bottom: 0vw;
        margin-left: 10vw;
      }
      .view-title {
        font-size: 30px;
        font-weight: 900;
        text-align: left;
        padding-top: 10vh;
        position: relative;
        line-height: 1.3;
        margin-left: 10vw;
        
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
import info from "@/info";
import { isMobile } from "@/utils";
import GodModView from "@/components/GodModView.vue";

export default {
  name: "section5",

  components: {
    GodModView,
  },
  data() {
    return {
      info,
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
