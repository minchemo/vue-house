<template>
  <article class="s1 relative" id="s1">
    <!--
  -->
    <picture>
      <source media="(max-width: 768px)" srcset="./s1/bgm.jpg" />
      <img src="./s1/bg.jpg" alt="" class="bg" />
    </picture>
      <img src="./s1/t1.svg" alt="" class="t1" />
      <div class="t2">
      <div class="thread"></div>
      <img src="./s1/t2.svg" alt="" /></div>
      <img src="./s1/slogo.svg" alt="" class="slogo" />
      <div class="s1-btn">
        <button @click="scrollTo('#s2')" class="btn btn-primary">下一頁</button></div>

    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: 9;
  opacity: .5;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: sizem(11);
  height: sizem(635);

  @media screen and (min-width: 768px) {
    font-size: size(27);
    justify-content: space-between;
    padding: 0;
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);

  }
  .bg {
      position: absolute;
    width: 100%;
    height: 100%;
  // position: absolute;
    top: sizem(0);
    left: sizem(0);

    img {
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

    }

    @media screen and (min-width: 768px) {
      width: 100%;
      top: 0;
     // bottom: calc(30% + #{size(-70 - 1080 * .3)});
      right: 0;
      left: auto;
    }

  }


  .t1 {
    position: absolute;
    top: sizem(50);
    right: 0;
    left: 0;
    margin: auto;
    width: sizem(275);

    @media screen and (min-width: 768px) {
      top: size(238);
      top: calc(50% + #{size(238 - 1080 * .50)});
      margin: 0;
      right: size(160);
      left: auto;
      width: size(854);

    }
  }
  .t2{
    position: absolute;
    top: sizem(500);
    right: 0;
    left: 0;
    margin: auto;
    width: sizem(195);

    @media screen and (min-width: 768px) {
      top: size(569);
      top: calc(50% + #{size(569 - 1080 * .50)});
      margin: 0;
      right: size(350);
      left: auto;
      width: size(480);

      img{
        width: 100%;
      }
    }
  .thread{
    position: absolute;
    background: #fff;

    @media screen and (min-width: 768px) {
      top: size(-160);
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 1px;

      height: size(184);
    }
  }
  }
  .slogo{
    position: absolute;
    top: sizem(580);
    right: 0;
    left: 0;
    margin: auto;
    width: sizem(100);

    @media screen and (min-width: 768px) {
      top: size(810);
      top: calc(50% + #{size(810 - 1080 * .50)});
      margin: 0;
      right: size(468);
      left: auto;
      width: size(244);

    }
  }


}
</style>
<script setup>
import info from "@/info"
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
const canPlayWebP = document.createElement('canvas')
  .toDataURL('image/webp')
  .startsWith('data:image/webp')

</script>