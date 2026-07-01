<template>
  <article class="s9" ref="s9">
    <img src="./s9/img.svg" class="t" v-if="!isMobile">
    <img src="./s9/imgm.svg" class="t" v-else>
    <div class="img" data-aos="fade-right" data-aos-delay="200">
      <img src="./s1/img.webp" alt="img">
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s9 {
  @apply relative;
  width: 100%;
  padding: 0;
  font-size: sizem(15);


  @media screen and (min-width: 768px) {
    font-size: size(24);
  }

  .img {
    position: absolute;
    left: sizem(-8);
    mix-blend-mode: luminosity;
    top: sizem(15);
    //background: #0006;
    //top: calc(50% + #{size(81 - 1080 * .50)});
    width: auto;
    height:sizem(320);

    img {
    opacity: 0.5;
      height: 100%;
    }

    @media screen and (min-width: 768px) {
      left: 50%;
      top: size(81);
      height: size(910);

      img {
        transform: translateX(-118%);
      }

    }

  }


}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>