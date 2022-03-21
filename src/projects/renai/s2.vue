<template>
  <div class="s2">
    <div class="v-title" data-aos="fade-up">
      <img src="@/projects/renai/s2/v-title.svg" alt="" srcset="" />
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="500">
      博愛特區旁歷代菁英搖籃 、台北文藝復興的主舞臺<br />
      濃密綠徑核心十八席 ，切切珍惜輕取仁愛一瞬機緣
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s2 {
  position: relative;
  width: size(1920);
  height: size(1232);
  background-size: cover;
  background-position: center;
  background-color: #eb5c20;
  background-image: url("~@/projects/renai/s2/bg.jpg");
  .v-title {
    position: absolute;
    width: size(166);
    bottom: size(512);
    left: size(877);
    img {
      width: 100%;
    }
  }
  .title {
    position: absolute;
    font-size: size(44);
    font-weight: bold;
    line-height: 1.5;
    width: size(980);
    left: 50%;
    margin-left: -#{size(490)};
    color: #fff;
    bottom: size(291);
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.8));
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s2 {
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
  name: "s2",
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

  mounted() {
  },

  created() { },
};
</script>
