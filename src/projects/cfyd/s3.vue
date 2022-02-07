<template>
  <div class="s3">
    <div class="bg"></div>
    <div class="hc">
      <Honeycomb />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s3 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: #000;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@/projects/cfyd/s3/bg.png");
    background-position: center;
    background-size: cover;
    z-index: 0;
  }
  .hc {
    position: absolute;
    right: 0;
    top: size(130);
    width: size(900);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s3 {
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
import Honeycomb from "@/projects/cfyd/honeycomb.vue";

export default {
  name: "s3",
  props: ["scrollInstance"],
  components: {
    Honeycomb
  },
  data() {
    return {
      isMobile,
      visual: "",
    };
  },

  methods: {
    // scrollTo(el) {
    //   this.scrollInstance.scrollTo(el);
    // },
  },

  created() { },
  mounted() {
  },
};
</script>