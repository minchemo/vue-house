<template>
  <article class="s1 relative">
   <!-- <img class="t0 absolute top-0 left-0 w-full z-10" src="./s1/mo.jpg" alt="" /> -->
    <div class="t1" data-aos="fade-up" data-aos-delay="0">壹念敦南林蔭．壹遇四維街巷</div>
    <img class="logo" src="./s1/logo.svg" alt="敦南詠楽" data-aos="fade-up" data-aos-delay="200" />
    <div class="txt relative" data-aos="fade-up" data-aos-delay="400">
      <img  src="./s1/txt.svg" alt="txt" v-if="!isMobile" />
      <img  src="./s1/txtm.svg" alt="txt" v-else />
      <div class="button"  @click="scrollTo('.form')">即刻<br v-if="!isMobile">預約</div>
      <img  src="./s1/slogo.svg" class="slogo" alt="slogo" v-if="isMobile" />
    </div>
  </article>
</template>

<style lang="scss" scoped> 
@import "@/assets/style/function.scss";

.s1 {
  height: sizem(850);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;font-size: sizem(15);
  // background: #0006;
  
@media screen and (min-width: 768px) {
  height: size(1080);font-size: size(40);

}

  .t0{
    opacity: .0;pointer-events: none;
  }
  .t1{color: #fff;font-weight: 600;letter-spacing: 0.23em;
    margin: 0 auto;
    text-shadow: 0 0.05em .4em #004d64;
  }
  .logo{width: sizem(245);
    margin: 3.1em auto 3em auto;
    filter:drop-shadow(0 0.1em .2em #034C);
    @media screen and (min-width: 768px) {
      margin: 3.5em auto 3.6em auto;
      width: size(632);
    }
  }
  .txt{width: sizem(255);
    margin: 0 auto 1.4em auto;text-align: center;
    filter:drop-shadow(0 0.1em .2em #034);
  img{width: 100%;
  &.slogo{width: 90%;}
  }
  .button{position: relative;letter-spacing: .25em;color: #0c7494;
  background: #fff;font-size:1.25em;font-weight: 900;
  padding: .1em 0 .1em 0.2em;width: 70%;margin:5em auto;
  transition: transform 2s,border-radius 2s;
  @media screen and (max-width: 767px) {
  &::before{content: "";position: absolute;top:0;left:0;right: 0;bottom: 0;border: 1px solid #fff;margin:-4px;}
  }
  @media screen and (min-width: 768px) {
  &:hover{transform: scale(1.2);border-radius: .6em;}
      position: absolute;width: 3.2em;margin:0;
      bottom: 0.1em;font-size:1em;right: 0;
    }
  }
    @media screen and (min-width: 768px) {
      width: size(1227);
      filter:drop-shadow(0 0.1em .2em #034C);
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
