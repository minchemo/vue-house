<template>
  <article class="s1">
    <img class="bg" src="./s1/11.gif" alt="" />
<!--
    <img class="t0 absolute top-0 left-0 w-full z-10" src="./s1/pc.jpg" alt="" />  -->
    <div class="content">
      <img class="t1" src="./s1/t1.svg" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="2000"/>
      <img class="logo" src="./s1/logo.svg" alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="2000"/>
    </div>
    <img class="slogo absolute" src="./s1/slogo.svg" alt="" data-aos="fade" data-aos-delay="400"/>
    <div class="style">
      <img src="./s1/style1.webp" alt="" data-aos="fade-left" data-aos-delay="700" data-aos-duration="3000"/>
      <img src="./s1/style2apng.png" alt="" data-aos="fade-left" data-aos-delay="700" data-aos-duration="3000"/>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full max-h-screen;
  @apply flex flex-col items-center justify-center;
  background: url("@/section/s1/bg.webp") 0 0;
  background-size: auto 100%;
  height: sizem(550);
  @media screen and (min-width: 768px) {
   // background-image: url("@/section/s1/bg.webp");
    height: size(1080);
    background-size: 100% auto;
  }
  .t0{
	pointer-events: none;opacity: .0;}
  .slogo{top: sizem(13);right: sizem(13);width: sizem(77);
    @media screen and (min-width: 768px) {
      top: size(13);right: size(23);width: size(141);
    }
  }
.bg{opacity: .6;filter: blur(sizem(3));
  position: absolute;top: 0;left:0%;width: 100%;height: 100%;mix-blend-mode:soft-light;
  
  @media screen and (min-width: 768px) {
    filter: blur(size(5));width: 100%;height: 150%;
    }


}

  .content {
    @apply relative z-10;
    @apply flex flex-col items-center justify-center;
    .t1 {
      width: sizem(168);
      filter:drop-shadow(sizem(1) sizem(1) sizem(3) #3339);
    }
    .logo {
      width: sizem(114);
      margin:sizem(18) auto sizem(44) auto;
      filter: brightness(.52)grayscale(.8);
    }
    @media screen and (min-width: 768px) {
      .t1 {
        width: size(400);
        filter:drop-shadow(size(2) size(2) size(4) #3339);
      }
      .logo {
        width: size(269);
        margin:size(42) auto size(60) auto;
      }
    }
  }

  .style{
    position: absolute;
    width: sizem(231);
    right:0;
    bottom: sizem(25);
    @media screen and (min-width: 768px) {
    width: size(516);
    bottom: size(15);
    }
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
