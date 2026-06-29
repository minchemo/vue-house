<template>
  <article class="s2">
    <!--    <div class="txt">
    <img src="./s1/s2.jpg" class="t0" alt="">
    <img src="./s1/s2m.jpg" class="t0" alt="">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">中央軸心盛大開場</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">重量級建設共演 台中未來從此綻放</h4>   
      </div> -->

    <Fullview />
    <picture>
      <source media="(max-width: 768px)" srcset="./s1/s2m.png" />
      <img src="./s1/s2.png" alt="000" class="mm" />
      <div class="caption">鳥瞰實景拍攝輔以電腦合成示意圖</div>
    </picture>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  opacity: .5;
  width: 100%;
  pointer-events: none;
}

.s2 {
  @apply relative bg-[#818dc1] text-[#fff];
  width: 100%;
  // height: size(1059);
  font-size: size(15);

  @media screen and (max-width: 767px) {
    padding: sizem(0) 0 sizem(60) 0;
    height: sizem(740);
    font-size: sizem(12);
  }

  .mm {
    width: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }

  &::before {
    content: "";
    width: 100%;
    height: 3em;
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 3;
    left: 0;
    background: linear-gradient(to bottom, #818dc100, #818dc1, #818dc100);
    top: 0;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    width: 100%;
    height: sizem(300);
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 3;
    left: 0;
    background: linear-gradient(to bottom,  #818dc1, #818dc1 60%, #818dc100);
    top: 0;
    transform: translateY(0%);
  @media screen and (min-width: 768px) {
    height: sizem(70);

  }
  }

  .caption {
    position: absolute;
    padding: .5em;
    bottom: 0;
    left: 0;

    @media screen and (max-width: 767px) {
      bottom: sizem(60);

    }


  }

  .viewbox {
    padding: 43vw 0 0 0;
  @media screen and (min-width: 768px) {
    padding: 9vw 0 0 0

  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>