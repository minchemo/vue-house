<template>
  <article class="s3" id="s3">
    <img src="./s1/logo.png" class="logo" alt="紐約沐光" data-aos="fade-up" data-aos-delay="0" />
    <div class="t1" data-aos="fade-up" data-aos-delay="200">建義的光系列 住近世界門面</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="400">台北港特定區 未來自城 2-3房</div>
    <div class="line" data-aos="fade-up" data-aos-delay="600"></div>
    <img src="./s3/slogo1.svg" class="slogo1" alt="麗寶集團 建義建設" data-aos="fade-up" data-aos-delay="800" />
    <img src="./s3/slogo2.svg" class="slogo2" alt="鈞義廣告" data-aos="fade-up" data-aos-delay="1000" />
    <div class="c"></div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s3 {
  @apply relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: sizem(250);
  color: #FFF;
  font-size: sizem(15);
  // text-align: center;
  line-height: 1.6;
  letter-spacing: .1em;
  padding: sizem(75) 0 0 0;

  @media screen and (min-width: 768px) {
    height: size(850);
    font-size: size(55);
    justify-content: flex-start;
    padding: size(230) 0 0 0;
    // margin-bottom: size(-250);
    // padding: 0 0 0 size(850);
  }

  .logo {
    position: absolute;
    top: sizem(-35);
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(147);

    @media screen and (min-width: 768px) {
      top: size(-70);
      width: size(304);

    }
  }


  .t1 {
    //  font-size: sizem(13);
    line-height: 1.3;
    font-weight: 500;
    position: relative;
    z-index: 3;
    margin: 2.7em auto .2em;
    letter-spacing: .06em;
    color: #397493;

    @media screen and (min-width: 768px) {
      //  font-size: size(55);
      margin: 1em auto .1em;
    }
  }

  .t2 {
    //  font-size: sizem(17);
    font-size: 1.3em;
    font-weight: 400;
    position: relative;
    letter-spacing: 0.06em;
    z-index: 3;
    color: #000;
    text-align: center;
    line-height: 1.35;

    @media screen and (min-width: 768px) {
      //   font-size: size(72);
    }
  }

  .line {
    background: #000;
    height: 1px;
    width: 2em;
    margin: .8em auto;
    @media screen and (min-width: 768px) {
      margin: 1.1em auto;
    }
  }

  .slogo1 {
    width: sizem(160);
    @media screen and (min-width: 768px) {
    width: size(590);}
  }

  .slogo2 {
    width: sizem(125);
    margin-top: .4em;
    @media screen and (min-width: 768px) {
    width: size(480);}
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