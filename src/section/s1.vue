<template>
  <article class="s1 relative" id="s1">
    <!-- 
     <img src="./s1/mo.jpg" class="t0">  -->
     <img src="./s1/pc.jpg" class="t0">
     <img src="./s1/bg.jpg" class="bg">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;top:0px;left: 0; pointer-events: none;z-index: 9;opacity: .5;}
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
  overflow: hidden;
  
@media screen and (min-width: 768px) {
    height:100vh;
    // height: size(1070);
    min-height: size(1080);
    max-height: size(1080);
    justify-content:space-between;
    padding: 0 0 0 0;
    background-size: cover;
}
  .bg{width:auto;height: 100%;position: absolute;
    top: 0;left:50%;transform: translateX(-50%);
    @media screen and (min-width: 768px) {height: auto;
      top: size(0);left: size(0);width:100%;transform: translateX(0);
      top: calc(50% + #{size(0 - 1080 * .5)});
      
    }
  }
  .logo{width:sizem(300);top: sizem(180);right:sizem(40);
    top: calc(50% + #{sizem(180 - 604 * .5)});
    @media screen and (min-width: 768px) {
      top: size(328);right:size(174);width:size(755);
      top: calc(50% + #{size(328 - 1080 * .5)});
    }
  }
  .t{width:sizem(300);top: sizem(305);right:sizem(40);
    top: calc(50% + #{sizem(305 - 604 * .5)});
    @media screen and (min-width: 768px) {
      top: size(588);right:size(174);width:size(755);
      top: calc(50% + #{size(588 - 1080 * .5)});
    }
  }
  .en{width:sizem(150);top: sizem(430);left:0;right: 0;
    top: calc(50% + #{sizem(430 - 604 * .5)});
    @media screen and (min-width: 768px) {
      top: size(536);left:size(347);width:size(326);right: auto;
      top: calc(50% + #{size(536 - 1080 * .5)});
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