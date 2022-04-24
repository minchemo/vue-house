<template>
  <div class="s2" id="scene">
    <img
      class="title"
      data-aos="fade-up"
      src="@/projects/ruo/s2/title.svg"
      alt=""
      srcset=""
    />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s2 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-size: 100%;
  background-position: bottom;
  background-color: #eb5c20;
  background-image: url("~@/projects/ruo/s2/bg.jpg");
  z-index: 1;
  .title {
    position: absolute;
    width: size(1244);
    top: size(155);
    left: size(156);
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