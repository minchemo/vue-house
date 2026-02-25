<template>
  <article class="s3" id="s3">
    <div class="t1" data-aos="fade-up" data-aos-delay="0">建義的光系列 住近世界門面</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="200">台北港特定區 未來自城 2-3房</div>
    <div class="line" data-aos="fade-up" data-aos-delay="200"></div>
    <img src="./s3/slogo1.svg" alt="麗寶集團 建義建設" />
    <img src="./s3/slogo2.svg" alt="鈞義廣告" />
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
  height:sizem(615);
  color: #FFF;
  font-size: sizem(14);
  // text-align: center;
  line-height: 1.6;
  letter-spacing: .1em;

  @media screen and (min-width: 768px) {
    height: size(1345);
    font-size: size(34);
    justify-content: flex-start;
    margin-bottom: size(-250);
   // padding: 0 0 0 size(850);
  }


  .t1 {
    font-size: sizem(13);
    line-height: 1.3;
    font-weight: 500;
    position: relative;
    z-index: 3;
    margin: 2.7em auto .2em;
    letter-spacing: .10em;
    color: #397493;

    @media screen and (min-width: 768px) {
      font-size: size(50);
    margin: 1.2em auto .25em;
    letter-spacing: .14em;
    }
  }

  .t2 {
   font-size: sizem(17);
    font-weight: 400;
    margin-bottom: .6em;
    position: relative;
    letter-spacing: 0.06em;
    z-index: 3;
    color: #000;
    text-align: center;
    line-height: 1.35;
  
    @media screen and (min-width: 768px) {
      font-size: size(66);
    }
  }
  .line{background: #000;height: 1px;width: 5em;}


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