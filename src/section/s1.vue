<template>
  <article class="s1">
    <div class="relative z-10 flex flex-col items-center justify-center">
    <img class="cathayredlogo" src="./s1/cathayredlogo.svg" alt="國泰建設logo" data-aos="zoom-in" data-aos-delay="0" />
    <img class="t1" src="./s1/t1a.svg" alt="在13期找回生活的原點" data-aos="zoom-in" data-aos-delay="200" />
    <img class="t2" src="./s1/t2.svg" alt="en1" data-aos="zoom-in" data-aos-delay="400" />
    <img class="t3" src="./s1/t3.svg" alt="en2" data-aos="zoom-in" data-aos-delay="600" />
    <img class="t4" src="./s1/t4.svg" alt="當城裡的時光遇見生活的芬芳" data-aos="zoom-in" data-aos-delay="800" />
  </div>
  <div class="tree1 absolute" data-aos="fade-left" data-aos-delay="800" data-aos-duration="6000">
    <img src="@/section/s1/tree.webp" alt="" srcset="">
  </div>
  <div class="tree2 absolute" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="6000">
    <img src="@/section/s1/tree.webp" alt="" srcset="">
  </div>

  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full;
  @media screen and (min-width: 768px) {
   // background-image: url("@/section/s1/bg.webp");
    background-size: 100% auto;
  }
  .t0{
	pointer-events: none;opacity: .3;}
  .cathayredlogo{
    width: sizem(148);
    margin: sizem(75) auto 0 auto;
    @media screen and (min-width: 768px) {
      width: size(200);
      margin: size(110) auto 0 auto;
    }
  }
  .t1{
    width: sizem(290);
    margin: sizem(77) auto 0 auto;
    @media screen and (min-width: 768px) {
      width: size(565);
      margin: size(160) auto 0 auto;
    }
  }
  .t2{
    width: sizem(152);
    margin: sizem(17) auto 0 auto;
    @media screen and (min-width: 768px) {
      width: size(295);
      margin: size(77) auto 0 auto;
    }
  }
  .t3{
    width: sizem(170);
    margin: sizem(26) auto sizem(0) auto;
    @media screen and (min-width: 768px) {
      width: size(330);
      margin: size(50) auto 0 auto;
    }
  }
  .t4{
    width: sizem(46);
    margin: sizem(50) auto sizem(0) auto;
    @media screen and (min-width: 768px) {
      width: size(79);
      margin: size(135) auto 0 auto;
    }
  }
  
@keyframes tree{
  to{transform: skewX(-1deg);}
}
  .tree1{
    top: sizem(321);left: sizem(224);width: sizem(940);
    img{width: 100%;transform: skewX(2deg);transform-origin:50% 90%;
      animation:5s tree ease-in-out alternate infinite;
    }
    @media screen and (min-width: 768px) {
      top: size(-10);left: size(1234);width: size(3410);
    }
  }
  .tree2{
    top: sizem(543);right: sizem(95);width: sizem(940);
    img{width: 100%;transform: skewX(2deg);transform-origin:50% 90%;
      animation:5s tree ease-in-out alternate infinite;
    }
    @media screen and (min-width: 768px) {
      top: size(585);right: size(770);width: size(3410);
      
    }
  }

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
/* @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    @apply relative w-full max-h-screen;
    @apply flex flex-col items-center justify-start;
    background-image: url("@/section/s1/bgm.webp");
    padding-bottom: 0;
    padding-top: sizem(129);
    height: sizem(667);

    .content {
      @apply relative z-10;
      @apply flex flex-col items-center justify-center;
      gap: sizem(31);

      .logo {
        width: sizem(270);
      }

      .t1 {
        font-size: sizem(15);
      }
    }


  }
}*/
</style>

<script setup>
import { computed, getCurrentInstance } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
