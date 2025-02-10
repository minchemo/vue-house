<template>
  <article class="s1" id="s1">
   <!--  <img class="t0" src="./s1/pc.jpg" alt="" srcset="">  -->
    <div class="bg"></div>
    <img src="./s1/light2.svg" class="light"/>
    <img src="./s1/logo.webp" class="logo" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/>
    <img src="./s1/t3.svg" class="t3" alt="" v-if="isMobile" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <img src="./s1/t1.svg" class="t1" alt="" v-if="!isMobile" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <img src="./s1/t1m.svg" class="t1" alt="" v-else data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}


.s1 {
  
  @apply relative w-full h-screen;
  background: url("./s1/bg.webp") 50% 50%;
  width: size(1920);
  height: 100vh;
  background-size: cover;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(25);
  //background: #AF1600;
  .logo{
    width:size(679);
    margin: 4em auto .5em;
    }
  .t1{
    width:size(594);
    margin: 0 auto 3em;
    }
    .light{
      position: absolute;
      width:size(1920);
      height: 100vh;
      min-height: size(900);
      max-height: size(1080);
    }

  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    background: url("./s1/bgm.webp") 50% 50%;
    background-size: cover;
    height:calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(12);
  .logo{
    width:sizem(290);
    
    }
  .t1{
    width:sizem(203);
    }

    .t3{
    width:sizem(250);
    margin-top: 0em;
    margin: 0em auto 6em;
    }

  }

  
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>