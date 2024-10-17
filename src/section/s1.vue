<template>
  <article class="s1 relative" id="s1">
    <!-- 
     <img src="./s1/mo.jpg" class="t0">
     <img src="./s1/pc.jpg" class="t0" />  -->
     <img src="./s1/bg.jpg" class="bg" />
     <Line1 class="l" />

    <div class="t1 absolute" data-aos="zoom-in-up" data-aos-delay="0">上曜集團<br>輝映南科</div>
    <img src="./s1/t2.svg" class="t2 absolute" data-aos="zoom-in-down" data-aos-delay="0">
    <img src="./s1/t3.svg" class="t3 absolute" data-aos="zoom-in-down" data-aos-delay="0">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;top:600px;left: 0; pointer-events: none;z-index: 9;opacity: .5;}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
  .s1 {
    height:calc(100vh - 63px);
  //  height:sizem(667);
    min-height: sizem(604);
    max-height: sizem(700);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    height:100vh;
    // height: size(1070);
    min-height: size(900);
    max-height: size(1080);
    justify-content:space-between;
    padding: 0 0 0 0;
    background-size: cover;
}
  .bg{width:auto;height: 100%;position: absolute;
    top: 0;left:50%;transform: translateX(-50%);
    @media screen and (min-width: 768px) {height: auto;
      left: size(0);width:100%;transform: translateX(0);
      top: calc(50% + #{size(-55 - 1080 * .5)});
      
    }
  }
  .l{width:auto;height: 110%;position: absolute;stroke-width:2;
    top: 0;left:50%;transform: translateX(-50%)scaleY(.5);
    transform-origin: 50% 0%;
    @media screen and (min-width: 768px) {height: auto;stroke-width:1;
      width:179%;max-width:none;transform: translateX(-50.2%)scaleY(.49);
      top: calc(50% + #{size(-0 - 1080 * .5)});
      //top:0;
      
    }
  }
  .t1{font-size:sizem(70);letter-spacing: 0.04em;
    font-weight: 700;top: sizem(80);left: 0;right: 0;
    top: calc(50% + #{sizem(80 - 604 * .5)});
   line-height: 1.2; text-align: center;
   @media screen and (min-width: 768px) {
    font-size:size(153);
    top: calc(50% + #{size(84 - 1080 * .5)});
    }
  }
  .t2{top: sizem(410);left: 0;right: 0;width:sizem(245);
    top: calc(50% + #{sizem(410 - 604 * .5)});
   @media screen and (min-width: 768px) {
    width:size(533);
    top: calc(50% + #{size(742 - 1080 * .5)});
    }
  }
  .t3{top: sizem(460);left: 0;right: 0;width:sizem(245);
    top: calc(50% + #{sizem(460 - 604 * .5)});
   @media screen and (min-width: 768px) {
    width:size(533);
    top: calc(50% + #{size(854 - 1080 * .5)});
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
import Line1 from './s1/l.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>