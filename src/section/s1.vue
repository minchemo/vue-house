<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/bg.webp" class="bg" data-aos="fade" data-aos-delay="0">
    <h3 class="t1" data-aos="zoom-in" data-aos-delay="0">超越南港<br>摩登時代</h3>
    <img src="./s1/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/logor.svg" class="logor absolute">
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
  min-height: size(900);
  max-height: size(1070);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(36);

  .t0{position: absolute;width: 100%;top:0;left: 0; pointer-events: none;z-index: 9;opacity: .3;}
  .box{position: fixed;width: 100%;height: 100vh;background: #666;mix-blend-mode: hue;
    top:0;left: 0; pointer-events: none;z-index: 10;opacity: .7;}
  .bg{position: absolute;width:size(2517);top:size(-347);left:size(-291);
  top:calc(50% + #{size(-347 - 1070 * .5)});
  transform: rotate(7deg)scale(.8);
  transform-origin: 50% 80%;
  }
  .t1{position: relative;
    font-size:size(143);
    line-height: 1.13;
    letter-spacing: 0.07em;
    font-weight: 900;z-index: 3;
    }
    .slogo{ width: size(470);position: relative;z-index: 3;margin-top:size(50);}
    .logor{right: size(55);bottom: size(40); width: size(130);z-index: 3;}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    height: sizem(604);
    font-size:sizem(16);
  .bg{width:sizem(764);top:sizem(30);left:sizem(-195);
  top:calc(50% + #{sizem(30 - 604 * .5)})
  }
  .t1{
    font-size:sizem(63);
    }
    .slogo{ width: sizem(230);margin-top:sizem(30);
    margin-bottom:sizem(65);}
    .logor{right: sizem(20);bottom: sizem(20); width: sizem(130);}
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