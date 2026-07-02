<template>
  <article class="s1 relative" id="s1">
    <div class="cloud">
      <img src="./s1/cloud.png" alt="cloud" />
    </div>
    <picture>
      <source media="(max-width: 768px)" srcset="./s1/t1m.svg" />
      <img src="./s1/t1.svg" alt="台北世界級 以我為中心" class="t1" />
    </picture>
    <div class="pic">
      <img src="./s1/img.webp" alt="img" />
    </div>
    <picture>
      <source media="(max-width: 768px)" srcset="./s1/t2m.svg" />
      <img src="./s1/t2.svg" alt="頂溪帝標．再寫新章2920-5858" class="t2" />
    </picture>
    <div class="wave" />


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
  opacity: .3;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  height: min(sizem(750), 100vh - sizem(63)); //最大1200px
  min-height: sizem(604);
  background: linear-gradient(180deg, #8080B6 14.96%, #7E7DB4 40.33%, #7876AF 51.42%, #6E6AA6 59.35%, #53488F 70.44%, #7175B0 75.99%, #7E88BF 83.91%, #808BC1 94.22%);

  @media screen and (min-width: 767px) {

  height: min(size(1080), 100vh); //最大1200px
  min-height: size(900);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .3;
  }

  .cloud {
    position: absolute;
    top: sizem(98);
    top: calc(50% + #{sizem(98 - 750 * .5)});
    right: sizem(10);
    width: sizem(125);

    img {
      width: 100%;
      transform: translateX(-30%);
      animation: an 6s linear alternate infinite;
    }

    @media screen and (min-width: 767px) {
      top: size(450);
    top: calc(70% + #{size(450 - 1080 * .7)});
      right: size(350);
      width: size(310);
    }
  }

  .pic {
    position: absolute;
    top: sizem(400);
    top: calc(70% + #{sizem(400 - 750 * .7)});
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;

    img {
      width: 100%;
    }

    @media screen and (min-width: 767px) {
      top: size(355);
    top: calc(70% + #{size(355 - 1080 * .7)});
      width: size(1150);
    }
  }

  .t1 {
    position: absolute;
    top: sizem(153);
    top: calc(55% + #{sizem(153 - 750 * .55)});
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(17);

    @media screen and (min-width: 767px) {
      top: size(290);
    top: calc(70% + #{size(290 - 1080 * .7)});
      right: size(20);
      width: size(1250);
    }
  }

  .t2 {
    position: absolute;
    top: sizem(580);
    top: calc(70% + #{sizem(580 - 750 * .7)});
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(185);

    @media screen and (min-width: 767px) {
      top: size(813);
    top: calc(70% + #{size(813 - 1080 * .7)});
      right: size(0);
      width: size(680);
    }
  }

  .wave {
    position: absolute;
    left: 0;
    bottom: 15%;
    width: 100%;
    opacity: 0.2;
    background: url(./s1/wave2.gif) lightgray 0px 0px / 100% 100% no-repeat;
    mix-blend-mode: overlay;
    height: 15%;

    @media screen and (min-width: 767px) {
      height: 32%;
    bottom: 0;
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