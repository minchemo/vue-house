<template>
  <article class="s2">
    <div class="bg absolute">
    <img src="./s2/bgm.jpg" alt="bg" srcset="" v-if="isMobile">
    <img src="./s2/bg.jpg" alt="bg" srcset="" v-else></div>
    <img src="./s2/txtm.svg" class="t1" alt="t1" srcset="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500" v-if="isMobile" >
    <img src="./s2/txt.svg" class="t1" alt="t1" srcset="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500" v-else>
    <img src="./s2/img1.webp" class="img1" alt="img" srcset=""  data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500">
    <img src="./s2/img2.webp" class="img2" alt="img" srcset=""  data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500">
    <img src="./s2/23.svg" class="year absolute" alt="23" srcset=""  data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500">
   <!--   <div class="txt">
    <img src="./s2/img.webp" class="img" alt="img" srcset="" >
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">淡水正核心 贏接市中心</h3>
      </div>
    <div class="caption">空拍合成示意圖</div> --> 
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative flex flex-col ;
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1060);
  font-size:size(18);
  justify-content: center;
  align-items: center;
  .bg{ position: absolute;width: 100%;left: 0%;
    top: calc(50% + #{size(0 - 1060 * .5)});
   img{width: 100%;height: 100%;}
  }
  .t1{
  @apply relative;
  display: block;
    width:size(1520);
    margin:0 auto size(550);
  }
  .img{
  @apply absolute;
    bottom: size(88);left: size(190);height:size(518);}
  .img1{
  @apply absolute;
  left: size(200);width:size(220);
    bottom: calc(20% + #{size(16 - 1060 * .2)});
  }
  .img2{
  @apply absolute;
  left: size(438);width:size(155);
    bottom: calc(20% + #{size(26 - 1060 * .2)});
  }
  .year{
  @apply absolute;
   right: size(190);height:size(518);
    bottom: calc(20% + #{size(88 - 1060 * .2)});
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
    height:sizem(667);
    min-height: sizem(667);
    max-height: sizem(667);
  font-size:sizem(14);
  .bg{ 
    top:0;
  }
  .t1{
  @apply absolute;
    top: sizem(320);right: sizem(55);width:sizem(100);left: auto;margin: 0;
  }
  .img1{
    top: sizem(430);left: sizem(44);width:sizem(103);bottom:auto;}
  .img2{
    top: sizem(472);left: sizem(150);width:sizem(84);bottom:auto;}
  .year{
    top:sizem(110);left: sizem(49);height:sizem(168);right: auto;bottom:auto;}
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
