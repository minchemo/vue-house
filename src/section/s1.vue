<template>
  <article class="s1" id="s1">
   <!--  <img class="t0" src="./s1/pc.jpg" alt="" srcset="">  -->
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/>
    <img src="./s1/t1.svg" class="t1" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>

    <img src="./s1/t2.svg" class="t2" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <img src="./s1/t3.svg" class="t3" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    
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
  background-size: cover;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(25);

  .logo{
    width:size(645);
    margin: 1em auto 1.2em;
    }
  .t1{
    width:size(602);
    margin: 0 auto 2em;
    }
    .t2{
    width:size(602);
    margin: 0 auto 2em;
    }
  .t3{
    position: absolute;
    bottom: size(50);
    right: size(50);
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
    min-height: sizem(604);
    max-height: sizem(812);
    font-size:sizem(12);
  .logo{
    width:sizem(246);
    margin: 0em auto 1.2em;
    }
  .t1{
    width:sizem(246);
    }
  .t2{
    width:sizem(286);
    margin: 2em auto 1.2em;
    }

    .t3{
    width:sizem(288);
    right:sizem(40);
    bottom:sizem(30);

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