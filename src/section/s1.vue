<template>
  <article class="s1 relative" id="s1">
    <!-- 
     <img src="./s1/pc.jpg" class="t0" /> -->
     <img src="./s1/mo.jpg" class="t0">
     <img src="./s1/bg.webp" class="bg" /> 
     <img src="./s1/t1.svg" class="t1 absolute" data-aos="zoom-in" data-aos-delay="0">
     <img src="./s1/bird.svg" class="bird absolute" data-aos="zoom-in" data-aos-delay="200">
     <div class="txt">
      <logo class="logo absolute" data-aos="zoom-in" data-aos-delay="400"></logo>
  <!--  <img src="./s1/logo.svg" class="logo absolute" data-aos="zoom-in-down" data-aos-delay="0"> -->
     <img src="./s1/t2.svg" class="t2 absolute" data-aos="zoom-in" data-aos-delay="600">
     <img src="./s1/slogo.svg" class="slogo absolute" data-aos="zoom" data-aos-delay="800">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;top:490px;left: 0; 
    pointer-events: none;z-index: 9;opacity: .0;}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
  .s1 {
    height:calc(100vh - 63px);
  //  height:sizem(667);
    min-height: sizem(604);
    max-height: sizem(750);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
 // background: #000;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    height:100vh;
    // height: size(1070);
    min-height: size(1080);
    max-height: size(1080);
    justify-content:space-between;
    padding: 0 0 0 0;
    background-size: cover;
}
  .bg{width:220%;height:sizem(840);position: absolute;
    top: -3%;left:50%;transform: translateX(-39%);
    @media screen and (min-width: 768px) {height: auto;
      left: size(0);width:100%;transform: translateX(0);
      top: calc(50% + #{size(-55 - 1080 * .5)});
      
    }
  }
  .t1{width:sizem(62);top: sizem(110);left: 0;right: 0;
    top: calc(50% + #{sizem(110 - 750 * .50)});
   @media screen and (min-width: 768px) {
    width:size(126);right: size(650);
    top: calc(50% + #{size(267 - 1080 * .5)});
    }
  }
  .bird{width:sizem(90);top: sizem(295);left: 0;right: sizem(195);
    top: calc(55% + #{sizem(295 - 750 * .55)});
   @media screen and (min-width: 768px) {
    width:size(182);right: size(655);
    top: calc(50% + #{size(804 - 1080 * .5)});
    }
  }
  .logo{width:sizem(235);top: sizem(377);left: 0;right: 0;
    top: calc(55% + #{sizem(377 - 750 * .55)});margin: auto;
   @media screen and (min-width: 768px) {
    width:size(650);left: size(255);
    top: calc(50% + #{size(254 - 1080 * .5)});
    }
  }
  .t2{width:sizem(235);top: sizem(522);left: 0;right: 0;
    top: calc(55% + #{sizem(522 - 750 * .55)});
   @media screen and (min-width: 768px) {
    width:size(650);left: size(255);
    top: calc(50% + #{size(648 - 1080 * .5)});
    }
  }
  .slogo{width:sizem(96);bottom: sizem(30);left: 0;right: 0;
    bottom: calc(15% + #{sizem(30 - 750 * .15)});
   @media screen and (min-width: 768px) {
    width:size(190);right: size(35);left: auto;
    bottom: calc(15% + #{size(45 - 1080 * .15)});
    }
  }
}
</style>
<script setup>
import logo from './s1/logo.vue';
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