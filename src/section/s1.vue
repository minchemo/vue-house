<template>
  <article class="s1">
<!--  -->
    <img class="t0 absolute top-0 left-0 w-full z-10" src="./s1/mo.jpg" alt="" />
    <div class="content">
      <img class="t1" src="./s1/t1.svg" alt="" data-aos="fade-up" data-aos-delay="0"/>
      <img class="logo" src="./s1/logo.svg" alt="" data-aos="fade-up" data-aos-delay="100"/>
    </div>
    <img class="slogo absolute" src="./s1/slogo.svg" alt="" data-aos="fade-up" data-aos-delay="100"/>
    <div class="style">
      <img src="./s1/style1.webp" alt="" data-aos="fade-left" data-aos-delay="500"/>
      <img src="./s1/style2.png" alt="" data-aos="fade-left" data-aos-delay="500"/>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full max-h-screen;
  @apply flex flex-col items-center justify-center;
  background-image: url("@/section/s1/bgm.webp");
  padding-top: sizem(129);
  height: sizem(667);
  @media screen and (min-width: 768px) {
    background-image: url("@/section/s1/bg.webp");
    padding-bottom: size(160);
    height: size(1080);
  }
  .t0{
	pointer-events: none;opacity: .3;}
  .slogo{top: sizem(13);right: sizem(13);width: sizem(77);
    @media screen and (min-width: 768px) {
      top: size(13);right: size(13);width: size(141);
    }
  }


  .content {
    @apply relative z-10;
    @apply flex flex-col items-center justify-center;
    .t1 {
      width: sizem(168);
    }
    .logo {
      width: sizem(114);
    }
    @media screen and (min-width: 768px) {
      gap: size(42);
      .t1 {
        width: size(400);
      }
      .logo {
        width: size(269);
      }
    }
  }

  .style{
    position: absolute;
    width: size(516);
    right:0;
    bottom: size(100);
    img{width: 100%;mix-blend-mode: multiply;
    &:last-child{
      position: absolute;top:0;left: 0;mix-blend-mode: normal;
    }
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
