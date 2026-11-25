<template>
  <article class="s2 relative" id="s2">
    <img src="./s2/bg.jpg" class="bg">
    <div class="t1" data-aos="fade-up" data-aos-delay="400">台北雙星</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="500">西門商圈</div>
    <div class="txt">
      <div class="en" data-aos="fade-up" data-aos-delay="0">LOCATION & GLOBAL GATEWAY</div>
      <h2 class="title" data-aos="fade-up" data-aos-delay="100">一橋西門町 對接台北雙星</h2>
      <p data-aos="fade-up" data-aos-delay="200">
        直達千億西區門戶，卡位資產增值第一排
        <span class="subtitle">捷運三重站×機捷A21雙軌交匯</span>
        用台北市過半的起漲價，入主成功二街靜巷豪邸
      </p>

    </div>
    <div class="caption">中興橋實景情境示意</div>
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
  opacity: .0;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s2 {
  position: relative;
  height: sizem(667);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-size: sizem(12);
  background: #00459d;

  @media screen and (min-width: 768px) {
    height: auto;
    /* height: size(1070);
    min-height: size(900);
    max-height: size(1080);
    */
    justify-content: space-between;
    padding: 0;
    font-size: size(18);

  }

  .bg {
    position: relative;
    width: 100%;
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    width:auto;
    left: -87%;
    height: 70%;

  }
  }

  .txt {
    position: absolute;
    top:  sizem(75);
    left: 0;
    width: 100%;
  @media screen and (min-width: 768px) {
    top: size(115);
    left: size(230);
    width: size(700);
  }

    .en {
      color: #EB5B1A;
      font-size: 1.3em;
  @media screen and (min-width: 768px) {
      font-size: 1.7em;
  }
    }

    p {
      letter-spacing: 0.1em;
    }

    span {
      display: block;
      font-family: 'Noto Serif TC', serif;
      font-size: 1.7em;
      letter-spacing: 0.1em;
      margin: 0.2em auto 0.3em;
    }
  }

  .t1,
  .t2 {
    color: #FCEE21;
    width: 1em;
    text-align: center;
    line-height: 1.2;
    font-size: 1em;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    top: sizem(275);
  @media screen and (min-width: 768px) {
    font-size: 0.8em;
    top: size(240);
  }
  }

  .t1 {
    left: sizem(-150);
  @media screen and (min-width: 768px) {
    left: size(100);}
  }

  .t2 {
    left: sizem(250);
  @media screen and (min-width: 768px) {
    left: size(1035);
}
    &::after {
      content: "";
      display: block;
      width: 1px;
      background: currentColor;
      height: 7em;
      margin: .5em auto;
      opacity: .7;
  @media screen and (min-width: 768px) {
      height: 13.6em;
}
    }

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      display: block;
      width: size(413);
      background: radial-gradient(50% 50% at 50% 50%, #FCEE21 1%,  #ffc66b 1.5%,#ffc66b66 20%, rgba(255, 213, 145, 0) 100%);
      height: size(239);
      margin: .5em auto;
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