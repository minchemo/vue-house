<template>
  <article class="s1 relative">
    <img class="t0 absolute z-10" src="./s1/pc.jpg" alt="" />
    <!--  -->
    <img class="en" src="./s1/en.svg" alt="敦南詠楽" data-aos="fade-up" data-aos-delay="200" />
    <img class="logo" src="./s1/logo.svg" alt="敦南詠楽" data-aos="fade-up" data-aos-delay="200" />
    <img class="t1" src="./s1/t1.svg" alt="t1" />
    <img class="t2" src="./s1/t2.svg" alt="slogo" />
    <div class="bottom"></div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  height: sizem(600);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: sizem(15);
  background: url("@/section/s1/top.png") no-repeat center top;
  background-size: 200% auto;
  margin: 0 auto sizem(30) auto;

  // background: #0006;

  @media screen and (min-width: 768px) {
    height: size(1520);
    font-size: size(40);
    background-size: 100% auto;

  }

  .t0 {
    opacity: .0;
    pointer-events: none;
    width: 100%;
    left: 0%;
    top:380px;
  }

  /*
  .t1{color: #fff;font-weight: 600;letter-spacing: 0.23em;
    margin: 0 auto;
    text-shadow: 0 0.05em .4em #004d64;
  }*/

  .en {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: sizem(40);
    width: sizem(255);
    // margin: 3.1em auto 3em auto;

    @media screen and (min-width: 768px) {
      top: size(104);
      width: size(647);
    }
  }

  .logo {
    position: absolute;
    left: 0;
    right: 0;
    top: sizem(213);
    margin: auto;
    width: sizem(290);
    filter: drop-shadow(0 0.1em .2em #034C);

    @media screen and (min-width: 768px) {
      top: size(439);
      width: size(825);
    }
  }

  .t1 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(290);
    top: sizem(390);
    filter: drop-shadow(0 0.1em .2em #034C);

    @media screen and (min-width: 768px) {
      top: size(877);
      width: size(1250);
    }
  }

  .t2 {
    position: absolute;
    left: 0;
    right: 0;
    top: sizem(510);
    margin: auto;
    width: sizem(245);
    filter: drop-shadow(0 0.1em .2em #034C);

    @media screen and (min-width: 768px) {
      top: size(1300);
      width: size(700);
    }
  }

  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scaleY(-1);
    margin: auto;
    width: 200%;
    height: sizem(39);
    background: url("@/section/s1/top.png") no-repeat center bottom;
    background-size: 100% auto;

    @media screen and (min-width: 768px) {
      width: 100%;
      height: size(99);
      background-size: 100% auto;

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
