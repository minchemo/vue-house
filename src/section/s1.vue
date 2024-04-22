<template>
  <article class="s1" id="s1">
  <!--  
    <img src="./s1/logo.svg" class="logo" alt="img" srcset="">
    <img class="t0 events-n" src="./s1/mo.jpg" alt="" srcset="">
    <img class="t0 events-n" src="./s1/pc.jpg" alt="" srcset="">
    -->
    <div class="bg absolute">
    <img src="./s1/bg1m.jpg" alt="bg" srcset="" v-if="isMobile">
    <img src="./s1/bg1.jpg" alt="bg" srcset="" v-else></div>
    <div class="logo absolute">
    <img src="./s1/logo.svg" alt="logo" srcset="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500"></div>
    <div class="slogo absolute">
    <img src="./s1/slogo.svg" alt="slogo" srcset="" data-aos="fade-left" data-aos-delay="0" data-aos-duration="1500"></div>
    <div class="t1 absolute">
    <img src="./s1/txt.svg" alt="txt" srcset="" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1500"></div>
    <div class="en absolute">
    <img src="./s1/en.svg" alt="en" srcset="" :data-aos="isMobile?'zoom-in':'fade-left'" data-aos-delay="400" data-aos-duration="1500"></div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
     transform: translateY(0);
  }
}


.s1 {
  
  @apply relative w-full h-screen text-[#fff];
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  overflow: hidden;
  z-index: 2;
 img.t0{position: absolute;top: 0vw;
    width: 100%;opacity: .3;z-index: 2;height: auto;
  }
  .bg{ position: absolute;width: 110%;top: 0;left: -5%;height: 100%;transform: skewX(-3deg);transform-origin: 50% 100%;animation: an 5s  alternate ease-in-out infinite;
   img{width: 100%;height: 100%;}
  }
  /*
  .en{ @apply absolute font-['Bellota_Text'];
  bottom: 0;right: 0;
  font-weight: 300;text-align: justify;
  letter-spacing: 1em;width: size(300);
  }
  */

}
/* PC */
@media screen and (min-width: 767px) {
  .s1 {
   img{height: 100%;}
  .logo{height:81%;top: 9%;left:size(310);transform: translateX(-40%);
  }
  .slogo{height:calc(3% + #{size(32)});top: 12%;right: size(110);
  }
  .t1{height:calc(6.6% + #{size(48)});top: 23%;right: size(110);
  }
  .en{height:calc(17.4% + #{size(125)});bottom: 10%;right: size(110);
  }


  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(812);
    font-size:sizem(15);
  .bg{width: 100%;top:-5%;left: 0%;height: 110%;transform: skewY(-3deg);transform-origin: 0% 50%;
  }
   img{width: 100%;}
  .logo{width: sizem(210);top:sizem(97);left:sizem(22);
  top:calc(40% + #{sizem(40 - 604 *.4)})
  }
  .en{width:sizem(196);top:sizem(401);left:sizem(29);
  top:calc(40% + #{sizem(345 - 604 * .4)})
  }
  .slogo{width:sizem(87);bottom:sizem(161);right:sizem(24);
    bottom:calc(45% + #{sizem(94 - 604 * .45)})
  }
  .t1{width:sizem(203);bottom:sizem(97);right:sizem(24);
    bottom:calc(45% + #{sizem(30 - 604 * .45)})
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