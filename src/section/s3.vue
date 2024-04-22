<template>
  <article class="s3">
    <img src="./s3/bgm.jpg" alt="bg" class="bg" srcset="" v-if="isMobile">
    <img src="./s3/bg.jpg" alt="bg" class="bg" srcset="" v-else>
    <img src="./s3/txtm.svg" class="t1" alt="t1" srcset="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500" v-if="isMobile">
    <img src="./s3/txt.svg" class="t1" alt="t1" srcset="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500" v-else>
    <img src="./s3/7m.svg" class="year absolute" alt="7" srcset="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500" v-if="isMobile">
    <img src="./s3/7.svg" class="year absolute" alt="7" srcset="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500" v-else>
   <!--   <div class="txt">
    <img src="./s3/img.webp" class="img" alt="img" srcset="" >
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">淡水正核心 贏接市中心</h3>
      </div>
    <div class="caption">空拍合成示意圖</div> --> 
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative flex flex-col ;
  width: 100%;
  height: size(1080);
  justify-content: center;
  align-items: center;
  background: #FFF;
  .bg{ position: absolute;height: 100%;top: 0;right:0%;width: auto
  }
  .t1{
  @apply relative;
  display: block;
    width:size(1520);
    margin:0 auto size(610);
  }
  .year{
  @apply absolute;
    bottom:size(0);left: size(190);width:size(604);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
    height: sizem(832);
  background: none;
  font-size:sizem(14);
  .bg{ height: auto;top: auto;width: 100%;bottom: 0;
  }
  .t1{
  @apply absolute;
    top: sizem(250);right: sizem(45);width:sizem(100);left: auto;margin: 0;
  }
  .year{
    top:sizem(190);left: sizem(30);width:sizem(170);right: auto;bottom:auto;}
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
