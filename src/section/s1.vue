<template>
  <article class="s1" id="s1">
   <!--  
    <img class="t0" src="./s1/mo.jpg" alt="" srcset=""> 
    
    <div class="bg"></div> -->
    <div class="logo" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"><img src="./s1/logo.svg" class="img"></div>
    <img src="./s1/t3.svg" class="t3" alt="" v-if="isMobile" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <img src="./s1/t1.svg" class="t1" alt="" v-if="!isMobile" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <img src="./s1/t1m.svg" class="t1" alt="" v-else data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.t0{width: 100% ;position:absolute;top:0;left: 0;z-index: 10;opacity: .2;}

@keyframes op {
  50% {
     opacity: 0;
  }
}


.s1 {
  
  @apply relative w-full h-screen;
// background: url("./s1/bg.webp") 50% 50%;
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
      width:size(600);text-align: center;
    background:url("./s1/light1.svg") ,url("./s1/logobg.jpg") ;background-size: cover, cover;
  box-shadow: size(3) size(5) size(15) size(8) #3009;padding: size(66) 0;
  margin: 4em auto 2.5em;
.img{width: 65%;}  
}
  .t1{
    width:size(594);
    margin: 0 auto 3em;
    }

  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    // background: url("./s1/bgm.webp") 50% 50%;
    background-size: cover;
    height: sizem(667);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(12);
  .logo{
    width:sizem(280);
    box-shadow: sizem(3) sizem(5) sizem(15) sizem(8) #3009;
    padding: sizem(35) 0;
    .img{width: 74%;}
    
    }
  .t1{
    width:sizem(203);
    }

    .t3{
    width:sizem(280);
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