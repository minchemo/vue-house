<template>
  <article class="s1 relative" id="s1">
    <!--  畫面圖片跟他的CSS 檔名自己改 -->
    <img src="./s1/pc-s0.png" class="t0" v-if="!isMobile" />
    <img src="./s1/mo-s0.jpg" class="t0" v-else />

    <!--  
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t1.png" class="t1" data-aos="zoom-in" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t1m.png" class="t1" data-aos="zoom-in" data-aos-delay="400" v-else>
    -->

    <!--   
    <img src="" class="t2">
    <img src="./s1/t2m.png" class="t2" v-if="isMobile">
    <img src="./s1/t2.png" class="t2" v-else>

    <img src="./s1/slogo.svg" class="slogo" data-aos="flip-up" data-aos-delay="0">
    <img src="./s1/t3m.png" class="t3" data-aos="flip-left" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t3.png" class="t3" data-aos="flip-left" data-aos-delay="400" v-else> 
    -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10;
  opacity: 1;


}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  /*
  height: 62vw;
  background: url("./s1/bg.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: sizem(32);
  height: 100vh;
  min-height: sizem(667);
  max-height: sizem(812);
  line-height: 1.3;
 */
  width: 100%;
  padding: 0;
  font-size: size(18);
  margin-bottom: -7px;

  .t1 {
    width: 100%;
  }

  //pc
  @media screen and (min-width: 768px) {
    background-image: url("./s1/bg.jpg");
    //background-size: 100%;
    // height: 58vw;
    min-height: size(900);
    max-height: size(1080);
    padding: 0;
    font-size: size(56);
  }

  .logo {
    // width: 45vw;
    /* pc*/
    // margin: 15vw 0vw -12vw 0vw;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: sizem(230);
    top:calc(50% + #{sizem(230 - 667 * .5)});
    width: sizem(200);

    @media screen and (min-width: 768px) {
      top: size(300);
      top:calc(50% + #{size(300 - 1080 * .5)});
      width: size(600);

    }

  }

  .t1 {
    position: absolute;
    top: sizem(205);
    top:calc(50% + #{sizem(205 - 667 * .5)});
    width: sizem(100);
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;

    @media screen and (min-width: 768px) {
      top: size(240);
      top:calc(50% + #{size(240 - 1080 * .5)});
      width: size(300);

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