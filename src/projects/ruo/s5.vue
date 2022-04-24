<template>
  <div class="s5" id="scene">
    <img class="bg" src="@/projects/ruo/s5/bg.png" alt="" srcset="" />
    <img class="img1" src="@/projects/ruo/s5/1.jpg" alt="" srcset="" />
    <img class="title" src="@/projects/ruo/s5/title.svg" alt="" srcset="" />
    <img class="circle" src="@/projects/ruo/s5/circle.svg" alt="" srcset="" />
    <img class="circle2" src="@/projects/ruo/s5/circle2.svg" alt="" srcset="" />
    <img class="large" src="@/projects/ruo/s5/large.svg" alt="" srcset="" />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s5 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: #efeff1;
  z-index: 2;
  .title {
    position: absolute;
    z-index: 2;
    left: size(664);
    top: size(150);
    width: size(464.27);
  }
  .img1 {
    position: absolute;
    z-index: 1;
    height: 100%;
    right: 0;
    top: 0;
  }
  .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: size(1557.4997);
    z-index: 2;
  }
  .circle {
    position: absolute;
    width: size(297.6767);
    top: size(63);
    left: size(995);
    animation: float 5s alternate-reverse infinite ease-in-out;
    z-index: 1;
  }
  .circle2 {
    position: absolute;
    width: size(535.54);
    bottom: -#{size(250)};
    left: -#{size(246)};
    animation: float 5s alternate-reverse infinite ease-in-out;
    z-index: 1;
  }
  .large {
    position: absolute;
    z-index: 2;
    right: size(93);
    bottom: 0;
    width: size(936);
  }
  @keyframes float {
    from {
      transform: translateY(0) skew(1deg);
    }
    to {
      transform: translateY(-40px) skew(0deg);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s5 {
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
  name: "s5",
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