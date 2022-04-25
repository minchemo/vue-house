<template>
  <div class="s2" id="scene">
    <img
      class="title"
      data-aos="fade-up"
      src="@/projects/ruo/s2/title.svg"
      alt=""
      srcset=""
      v-if="!isMobile"
    />
    <img
      v-else
      class="title"
      data-aos="fade-up"
      src="@/projects/ruo/s2/title_m.svg"
      alt=""
      srcset=""
    />
    <template v-if="isMobile">
      <GodModView :bgUrl="require('@/projects/ruo/s2/bg.jpg')" />
    </template>
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
    height: size-m(667);
    background: unset;
    .title {
      position: absolute;
      width: size-m(313.27);
      top: size-m(52);
      left: size-m(33);
      z-index: 1;
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
import GodModView from "@/components/GodModView.vue";
export default {
  name: "s2",
  props: ["scrollInstance"],
  components: {
    GodModView,
  },
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
  mounted() {},
  created() {},
};
</script>