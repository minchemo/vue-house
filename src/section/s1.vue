<template>
  <article class="s1 relative" id="s1">
    <!-- 背景圖 (可依需求套用水平平移或背景動畫) -->
    <img src="./s1/bg.webp" class="bg" alt="背景">

    <!-- 主視覺內容群組 -->
    <div class="main-content">
      <!-- 標題與標語 -->
      <img src="./s1/t1.svg" class="t1" data-aos="fade-up" data-aos-delay="100" alt="標題1">
      <img src="./s1/t2.svg" class="t2" data-aos="fade-up" data-aos-delay="200" alt="標題2">

      <!-- 核心 Logo -->
      <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0" alt="國泰蒔萃 Logo">

      <!-- 英文裝飾字 -->
      <img src="./s1/en.svg" class="en" data-aos="fade-up" data-aos-delay="300" alt="英文標語">
    </div>

    <!-- 兩側建築/視覺意象 (RWD 自動切換 Mobile / PC 圖片) -->
    <picture class="left-img" data-aos="fade-right" data-aos-delay="400">
      <source srcset="./s1/left.webp" media="(min-width: 768px)">
      <img src="./s1/left-m.webp" alt="左側主視覺">
    </picture>

    <picture class="right-img" data-aos="fade-left" data-aos-delay="400">
      <source srcset="./s1/right.webp" media="(min-width: 768px)">
      <img src="./s1/right-m.webp" alt="右側主視覺">
    </picture>
  </article>
</template>

<script setup>
import { computed, getCurrentInstance, inject } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll');
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  });
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  position: relative;
  height: sizem(604);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
    justify-content: space-between;
    padding: 0;
  }

  /* 背景圖 */
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(calc(-100% + 100vw));
    animation: an 20s linear alternate infinite;

    @media screen and (min-width: 768px) {
      height: auto;
      width: size(2300);
      top: calc(50% + #{size(0 - 1080 * 0.5)});
    }
  }

  /* 中間標題與 Logo 包裹區 */
  .main-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .t1 {
    width: sizem(200);
    margin-bottom: sizem(15);
    @media screen and (min-width: 768px) {
      width: size(380);
      margin-bottom: size(20);
    }
  }

  .t2 {
    width: sizem(240);
    margin-bottom: sizem(20);
    @media screen and (min-width: 768px) {
      width: size(450);
      margin-bottom: size(30);
    }
  }

  .logo {
    width: sizem(290);
    margin: sizem(20) auto;
    @media screen and (min-width: 768px) {
      width: size(608);
      margin: size(30) auto;
    }
  }

  .en {
    width: sizem(180);
    margin-top: sizem(10);
    @media screen and (min-width: 768px) {
      width: size(320);
      margin-top: size(20);
    }
  }

  /* 左右兩側裝飾圖（左右分立） */
  .left-img {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: sizem(180);

    @media screen and (min-width: 768px) {
      width: size(450);
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .right-img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    width: sizem(180);

    @media screen and (min-width: 768px) {
      width: size(450);
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>