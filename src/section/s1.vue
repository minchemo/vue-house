<template>
  <article class="s1">
    <!-- 
    <img class="i0" src="./s1/mo.jpg" alt=""> -->
    <img class="chunfulogo" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600" src="./s1/chunfulogo.svg" alt="" srcset="">
    <img class="img" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600" src="./s1/img.png" alt="" srcset="">
    <div class="txt">
    <img class="logo" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="0" src="./s1/opening.svg" alt="" srcset=""><br />
    <img class="t1" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" src="./s1/t1.svg" alt="" srcset="">
    <div class="t2" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" >永康國際雙語特區｜<span>2-3</span>房</div>
</div>


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen ;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .i0{position: absolute;top: 0;left: 0;width: 100%;
  opacity: .5;z-index: 2
  }
  .chunfulogo {
    @apply absolute;
    top: size(20);
    left: size(20);
    height: size(50);
  }
  .img {
    @apply absolute;
    bottom: size(15);
    right: 0;
    height: size(229);
    transform-origin: 100% 100%
  }
  .txt {
    @apply relative;
font-weight: 400;
font-size:size(37);
text-align: center;
color: #FFF;
margin-bottom: 1.8em;
line-height: 1.6;
  }

  .logo {
    width: size(434);margin-left: 1em;
  }
  .t1 {
    width: size(712);
    margin: -.5em auto 1em auto;
  }
  .t2 {
    span{
      
font-weight: 700;
font-size:1.1em;
    }
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: sizem(667);
    max-height: sizem(812);
  .chunfulogo {
    top: sizem(20);
    left: sizem(20);
    height: sizem(25);
  }
  .img {
    bottom: sizem(75);
    right:sizem(-25);
    height: sizem(69);
  }
  .txt {
font-size:sizem(21);
margin-bottom: 2.8em;
}

  .logo {
    width: sizem(188);
  }
  .t1 {
    width: sizem(310);
    margin: -.3em auto 1.1em auto;
  }
  }
  
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
