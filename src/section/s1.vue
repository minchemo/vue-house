<template>
  <article class="s1 relative" id="s1">
    
    <img src="./s1/bg.jpg" class="bg" data-aos="fade" data-aos-delay="0">
    <div class="l1"></div>
    <h3 class="t1" data-aos="zoom-in-up" data-aos-delay="100">經濟奇蹟&ensp;在高雄</h3>
    <img src="./s1/en1.svg" class="en1" data-aos="zoom-in-up" data-aos-delay="200">
    <div class="img" data-aos="zoom-in-up" data-aos-delay="300">
      <img src="./s1/img.png">
      <img src="./s1/img.svg">
    </div>
    <h3 class="t2" data-aos="zoom-in" data-aos-delay="400">未來已來 先積到來</h3>
    <img src="./s1/en2.svg" class="en2" data-aos="zoom-in" data-aos-delay="500">
    <img src="./s1/en3.svg" class="en3" data-aos="zoom-in" data-aos-delay="600">

    <!-- 
    <img src="./s1/mo.jpg" class="t0" >
    <img src="./s1/bg.webp" class="bg" data-aos="fade" data-aos-delay="0">
    <h3 class="t1" data-aos="zoom-in" data-aos-delay="0">超越南港<br>摩登時代</h3>
    <img src="./s1/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/logor.svg" class="logor absolute"> -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  min-height: size(920);
  max-height: size(1070);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(36);
  overflow: hidden;
  

  .t0{position: absolute;width: 100%;top:0;left: 0; pointer-events: none;z-index: 9;opacity: 0.5;}
   .bg{position: absolute;width:100%;left:0;top:calc(50% + #{size(-60 - 1070 * .5)});
  }
  .l1{position: absolute;width:100%;left:0;top: 0;height: 145%;
    background: 
    linear-gradient(to bottom right, #FFFC 0%, #fff0 50%) bottom right / 50% 50% no-repeat, 
    linear-gradient(to bottom left, #FFFC 0%, #fff0 50%) bottom left / 50% 50% no-repeat,
    linear-gradient(to top left, #FFF 0%, #fff0 50%) top left / 50% 50% no-repeat,
    linear-gradient(to top right, #FFF 0%, #fff0 50%) top right / 50% 50% no-repeat;
    mix-blend-mode:soft-light;
    animation: l1 5s ease-in-out infinite;
    transform: scale(1,0.001);opacity: 1;
  }
@keyframes l1 {
  40% {
    transform: scale(0.1,3);opacity:1;
  }
  100% {
    transform: scale(0.05,3.5);opacity:0;
  }
}

  .t1{position: relative;
    font-size:size(85);
    line-height: 1.13;
    letter-spacing: 0.14em;
    font-weight: 900;z-index: 3;color: #FFF;margin-top:size(58);
    }
    .en1{ width: size(705);position: relative;z-index: 3;margin-top:size(73);}
    .img{ width: size(705);position: relative;z-index: 3;margin-top:size(34);mix-blend-mode: screen;
    img{width: 100%;
    &:last-child{position: absolute;top:0;left: 0;}
    }
    }
    
  .t2{position: relative;
    font-size:size(42);
    line-height: 1.13;
    letter-spacing: 0.46em;
    text-indent: 0.46em;
    font-weight: 300;z-index: 3;color: #FFF;margin-top:size(55);
    }
    .en2{ width: size(510);position: relative;z-index: 3;margin-top:size(22);mix-blend-mode: screen;}
    .en3{ width: size(510);position: relative;z-index: 3;margin-top:size(18);}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
   // height: sizem(650);
    font-size:sizem(16);
    justify-content:center;
  .bg{width:sizem(584);top:sizem(0);left:sizem(-104.5);height:sizem(805);
  top:calc(50% + #{sizem(-105 - 604 * .5)})
  }
  .l1{height: calc(100% + 78vw);}
  .t1{
    font-size:sizem(23);writing-mode: vertical-lr;margin-top:sizem(56);letter-spacing: 0.1em;
    white-space: nowrap;
    }
    .en1{ width: sizem(250);margin-top:sizem(45);}
    .img{ width: sizem(245);margin-top:sizem(16);}
  .t2{
    font-size:sizem(17);margin-top:sizem(42);
    }
    .en2{ width: sizem(205);margin-top:sizem(8);}
    .en3{ width: sizem(205);margin-top:sizem(8);margin-bottom:sizem(49);}
 
    /*
    .slogo{ width: sizem(230);margin-top:sizem(30);
    margin-bottom:sizem(65);}
    .logor{right: sizem(20);bottom: sizem(20); width: sizem(130);}

    */
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