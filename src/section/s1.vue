<template>
  <article class="s1 relative" id="s1">
   <!--  <img src="./s1/web.png" class="t0"> --><img src="./s1/web.png" class="t0">
    <img src="./s1/logom.webp" class="logo" data-aos="zoom-in" data-aos-delay="0" v-if="isMobile">
    <img src="./s1/logo.png" class="logo" data-aos="zoom-in" data-aos-delay="0" v-else>
    <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/t2.png" class="t2" v-if="!isMobile">

    <img src="./s1/bgbottommo.webp" class="bgbottom" data-aos="flip-up" data-aos-delay="0" v-if="isMobile">
    <img src="./s1/bgbottom.svg" class="bgbottom" data-aos="flip-up" data-aos-delay="0" v-else>
    <img src="./s1/t3.png" class="t3" data-aos="flip-left" data-aos-delay="400" v-if="!isMobile">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
  visibility: visible;
  z-index: 9;
  opacity: 0.0;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s1{
  position: relative;
  width: 100%;
    height: calc(100dvh - #{sizem(63)});
  background-color: #EFEA45;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  @media screen and (min-width: 768px) {
    //background-image: url("");
    //background-size: 100%;
    height: 100dvh;
    min-height: size(1080);
    max-height: size(1080);
    padding: 0;
    font-size: size(56);
    margin-bottom:size(125);
  }
  .logo {
    width: size(1213);
    margin:0 auto;
    display: block;
  }

  .t1 {
    width: sizem(293);
    margin: sizem(24) auto sizem(225) auto;
    display: block;
  @media screen and (min-width: 768px) {
     width: size(880);
    margin: size(28) auto size(225) auto;
  }
  }
  .t2 {
    width: size(204);
    position: absolute;
    bottom: size(-85);
    left: size(1010);
  transform: rotate(15deg);
  transform-origin: 20% 80%;
  animation: an 2s ease-in-out alternate infinite;
  }
  .bgbottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  @media screen and (min-width: 768px) {
    bottom: size(-125);}
  }
  .t3 {
    width: size(420);
    position: absolute;
    bottom: size(-90);
  //  top:calc(50% + #{size(705-1080*.5)});
    left: size(725);
  transform: rotate(5deg);
  transform-origin: 50% 70%;
  animation: an 2s ease-in-out alternate infinite;
  }


}


/*
.t2 {
  width: 10vw;
  margin: 0 auto;
  margin-top: 7vw;
  margin-left: 53vw;
  z-index: 10;
    
  transform: rotate(20deg);
  animation: an 2s ease-in-out alternate infinite;
  transform-origin: 50% 100%;
  }


.s1 {
  // mobile
  height: 62vw;
  background: url("./s1/bgm2.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: sizem(32);
  line-height: 1.3;

  //pc

  .logo {
    width: 70vw;
    margin: 2vw 0vw 0vw -3vw;
  }

  .slogo {
    position: absolute;
    width: 100vw;
    bottom: 0vw;
    left: 0vw;
    z-index: 10;
  }

  .t1 {
    width: 51vw;
    margin: 4vw 17vw 0vw 17vw;
  }

  @keyframes an {
    to {
      transform: rotate(0);
    }
  }

  .t2 {
    // mobile
    width: 9vw;
    margin: 0 auto;
    margin-top: 4.5vw;
    margin-left: 54vw;
    z-index: 10;
    // animation
    transform: rotate(20deg);
    animation: an 2s ease-in-out alternate infinite;
    transform-origin: 50% 100%;

  }

    .t2m {
        margin: 0vw auto 0vw;
        width: 15vw;
        margin-left: 52vw;
      }


  .t3 {
    // mobile
    width: 20vw;
    margin: 0vw auto 0vw; 
    z-index: 11;
    margin-top: -18VW;

  }


  @media screen and (min-width: 768px) {
    .logo {
      width: 71vw;
      //mobile
      margin: 4vw 3vw 57.6px 0vw 0vw;

    }

    .t2m {
      width: 10vw;  
    }

    .slogo {
      position: absolute;
      width: 100vw;
      bottom: 0vw;
      left: 0vw;
    }

    .t1 {
      width: 51vw;
      margin: 0vw 17vw 0vw 17vw;
    }

    .t2 {
      width: 10vw;
      margin: 0 auto;
      margin-top: 8vw;
      margin-left: 53vw;
      z-index: 10;
      transform: rotate(20deg);
      animation: an 2s ease-in-out alternate infinite;
      transform-origin: 50% 100%;

    }

    .t3 {
      width: 20vw;
      margin: 0 auto;
      margin-top: -17vw;
      z-index: 99;
    }

  }

}*/
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