<template>
  <div class="s1" id="scene">
    <img
      class="title"
      data-aos="zoom-in"
      src="@/projects/ruo/s1/title.svg"
      alt=""
      srcset=""
    />
    <img
      class="subtitle"
      src="@/projects/ruo/s1/subtitle.svg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="500"
    />
    <img class="circle" src="@/projects/ruo/s1/circle.png" alt="" srcset="" />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-size: 100%;
  background-position: bottom;
  background-color: #eb5c20;
  background-image: url("~@/projects/ruo/s1/bg.svg");
  z-index: 2;
  .title {
    position: absolute;
    width: size(661.82);
    top: size(331);
    left: size(631);
  }
  .subtitle {
    position: absolute;
    width: size(709.44);
    bottom: size(43);
    left: size(42);
  }
  .circle {
    position: absolute;
    width: size(1684.97);
    height: size(942.8396);
    top: 0;
    right: 0;
    animation: float 5s alternate-reverse infinite ease-in-out;

    @keyframes float {
      from {
        transform: translateY(0) skew(1deg);
      }
      to {
        transform: translateY(-40px) skew(0deg);
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
    height: size-m(623);
    min-height: 0;
    max-height: size-m(812);
    padding-top: size-m(80);
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
  mounted() {
  },
  created() { },
};
</script>