<template>
  <article class="s1" id="s1">
    <!-- <img src="./s1/pc.jpg" class="t0" alt="">
    <img src="./s1/mo.png" class="t0" alt="">  -->
    <div class="img">
      <div class="img1 absolute"  data-aos="zoom-in" data-aos-delay="800" data-aos-duration="3000"><img src="./s1/1.webp" alt="" /></div>
      <div class="img2 absolute" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="2000"><img src="./s1/2.webp" alt="" /></div>      
    <div class="img3 absolute" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000"><div><img src="./s1/3.webp" alt="" /></div></div>
      
    </div>
    <img src="./s1/slogo1.svg" class="slogo1 absolute" alt="" data-aos="zoom-in" data-aos-delay="0"
      data-aos-duration="1000" />
    <img src="./s1/slogo2.svg" class="slogo2 absolute" alt="" data-aos="zoom-in" data-aos-offset="-200"
      data-aos-delay="0" data-aos-duration="1000" />
    <img src="./s1/logo.svg" class="logo absolute" alt="" data-aos="zoom-in" data-aos-delay="0"
      data-aos-duration="1000" />
    <img src="./s1/t1.svg" class="t1 absolute" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" />
    <!-- 	 <img src="./s1/housem.webp" class="house" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600" v-if="isMobile"> 
	 <img src="./s1/house.webp" class="house" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600" v-else> 
   <img src="./s1/llm.webp" class="style2" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" v-if="isMobile"> 
   <img src="./s1/ll.webp" class="style2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000" v-else>  
    
    
    
 -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  @apply relative w-full h-screen;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(62deg, #7C1924 6.04%, #902B32 23.64%, #C55C57 58.86%, #D76C64 69.98%);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);

  // height: auto;  
  @media screen and (max-width: 767px) {
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    //  background-image:url("../section/s1/bgm.webp");
  }

  .t0 {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: .3;
  }

  .logo {
    bottom: calc(30% + #{size(130 - 1080 * .3)});
    left: size(113);
    width: size(600);

    @media screen and (max-width: 767px) {
      left: 0;
      right: 0;
      margin: auto;
      width: sizem(280);
      bottom: calc(50% + #{sizem(150 - 604 * .5)});
    }
  }

  .t1 {
    bottom: calc(40% + #{size(135 - 1080 * .4)});
    right: size(160);
    width: size(666);

    @media screen and (max-width: 767px) {
      left: sizem(5);
      right: 0;
      margin: auto;
      width: sizem(270);
      bottom: calc(50% + #{sizem(65 - 604 * .5)});
    }
  }

  .slogo1 {
    top: size(76);
    left: size(90);
    height: size(65);
  }

  .slogo2 {
    bottom: size(24);
    right: size(20);
    height: size(30);
  }

  @media screen and (max-width: 767px) {
    .slogo1 {
      top: sizem(15);
      left: sizem(10);
      height: sizem(30);
    }

    .slogo2 {
      bottom: sizem(5);
      right: sizem(10);
      height: sizem(27);
    }
  }

  .img {
    position: absolute;
    top: calc(30% + #{size(0 - 1080 * .3)});
    right: 0;
    width: size(500);
    aspect-ratio: 1/1;

    @media screen and (max-width: 767px) {
      top: 0;
      width: sizem(110);
    }

    .img1{
        width: 196%;
        top: -38%;
        right: -57%;
        transform-origin: 100% 0;
        img{
        width: 100%;
        transform: rotate(-2deg);
        transform-origin: 100% 0;
        animation: an 5s ease-in-out alternate infinite;}
      }
    .img2{
        width: 114%;
        top: -20%;
        right: 38%;
        transform-origin: 100% 0;
        img{
        width: 100%;
        transform: rotate(-2.5deg);
        transform-origin: 100% 0;
        animation: an 5s -.5s ease-in-out alternate infinite;}
      }
    .img3{
        width: 182.6%;
        top: -49%;
        right: 64%;
        transform-origin: 100% 0;
        div{width: 100%;}
        img{
        width: 100%;
        transform: rotate(-3deg);
        transform-origin: 100% 0;
        animation: an 5s -1s ease-in-out alternate infinite;}
      }
      @media screen and (max-width: 767px) {
        .img1 {
        width: 330%;
        top: -15%;
        right: -141%;
        }

        .img2 {
          width: 214%;
          top: -9%;
          right: -22%;
        }

        .img3 {
        width: 300%;
        top: -71%;
        right: -38%;
        div{transform: rotate(-15deg);}
        
        }

      }

  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>