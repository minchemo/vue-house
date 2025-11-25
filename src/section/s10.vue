<template>
  <article class="s10 relative">
    <img class="logo" src="./s1/logo.svg" alt="敦南詠楽" data-aos="fade-up" data-aos-delay="200" />
    <img class="t1" src="./s1/t1.svg" alt="t1" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s10 {
  height: sizem(540);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: sizem(15);
  margin: 0 auto sizem(30) auto;

  // background: #0006;

  @media screen and (min-width: 768px) {
    height: size(930);
    font-size: size(40);
    background-size: 100% auto;

  }

  .logo {
    position: absolute;
    left: 0;
    right: 0;
    top: sizem(143);
    margin: auto;
    width: sizem(290);
    filter: drop-shadow(0 0.1em .2em #034C);

    @media screen and (min-width: 768px) {
      top: size(180);
      width: size(825);
    }
  }

  .t1 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(290);
    top: sizem(320);
    filter: drop-shadow(0 0.1em .2em #034C);

    @media screen and (min-width: 768px) {
      top: size(617);
      width: size(1250);
    }
  }

  
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el),
  })
}
</script>
