<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/pc.jpg" class="t0">
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t1m.svg" class="t1" data-aos="zoom-in" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="400" v-else>
    <!--  
    <img src="./s1/t2m.svg" class="t2" data-aos="zoom-in" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t2.svg" class="t2" data-aos="zoom-in" data-aos-delay="400" v-else>
    -->
    <img src="./s1/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="0">
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
  visibility: hidden;
  z-index: 9;
  opacity: 0;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  // height:calc(100vh - 63px);
  //height: sizem(604); 
  height: sizem(604);
  background: url("./s1/bgm2.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: sizem(32);
  line-height: 1.3;
  // overflow: hidden;

  @media screen and (min-width: 768px) {
    background: url("./s1/bg1.png");
    height: size(2165);
    padding: 0;
    font-size: size(56);
  }

  .logo {
    width: sizem(300);
    /*margin: sizem(100) auto sizem(16);*/
    margin: 10vw 55vw 4vw 3vw;
  }

  .slogo {
    width: sizem(76);
    position: absolute;
    bottom: sizem(-30);
    left: sizem(-78);
    /*bottom: -30vw;
      left: -78vw;*/
  }

  .t1 {
    width: sizem(300);
    /* margin: 0 auto sizem(50);*/
    margin: 1vw 49vw 4vw 3vw;
  }

  .t2 {
    width: sizem(149);
    margin: 0 auto sizem(20);
  }

  .t3 {
    width: sizem(226);
    margin: 0 auto sizem(0);
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: size(700);

      margin: 7vw 50vw 6vw 0vw;
      /* margin: size(120) auto size(50);*/

    }

    .slogo {
      width: size(133);

      /* bottom: size(20);
      right: size(50);*/
      bottom: 20vw;
      left: 5vw;
    }

    .t1 {
      width: 38vw;
      /* margin: 0 auto size(260);*/
      margin: 1vw 49vw 0vw -2vw;
    }

    /*
.t2{
  width:size(520);
  margin: 0 auto size(60);
}
 */
    .t3 {
      width: size(720);
      margin: 0 auto size(35);
    }

  }

  /*
.tree{
  position: absolute;bottom: 0;left:calc(50% - #{sizem(850 * .5)});width: sizem(850); 
  transform: skewX(-5deg);
  transform-origin: 50% 100%;
  animation: an 5s linear alternate infinite;
  filter:drop-shadow(0 0 .3vw #fff);
  @media screen and (min-width: 768px) {
    bottom: calc(20% + #{size(0 - 1080 * .2)});
    left:calc(50% - #{size(2280 * .5)});
    width: size(2280); 
  }
}

.t1{font-weight: 900;}
.hr{height: 1.5em;background: #fff;width: 1px;margin: .3em auto .4em auto;
}
.t2{width: 8.5em;margin: 0 auto 1em;position: relative;z-index: 5;

  @media screen and (min-width: 768px) {margin: 0 auto 2.3em;}
}

  .bg{position: absolute;
    top:0;left:0;
    height: 100%; transform: translateX(calc(-100% + 100vw));
    animation: an 20s linear alternate infinite;
    @media screen and (min-width: 768px) {
      height: auto;width:size(2300);top:calc(50% + #{size(0 - 1080 * .5)});
    }
  }
    */
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