<template>
  <article class="s3" id="s3">
    <div class="t1" data-aos="fade-up" data-aos-delay="0">我們將東京最美的轉角,<br />
      帶回台南。</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="200">在這裡，你會發現世界很近，生活很慢…</div>
    <div class="c">本圖片為AI情境模擬，以實際完工現況為準。
    </div>

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
  height:sizem(604);
  // background: #d62051;
  background: #089EFB url("./s3/bgm.jpg") no-repeat;
  background-size: 100% auto;
  background-position: 50% 100%;
  color: #FFF;
  font-size: sizem(14);
  // text-align: center;
  line-height: 1.6;
  letter-spacing: .1em;

  @media screen and (min-width: 768px) {
    background-image: url("./s3/bg.jpg");
    background-size: cover;
    background-position: 50% 50%;
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
    font-size: size(34);
    justify-content: center;
    padding: 0 0 0 size(850);
  }


  .t1 {
    font-size: sizem(22);
    line-height: 1.3;
    font-weight: 500;
    position: relative;
    z-index: 3;
    margin: 3em auto 1em;

    @media screen and (min-width: 768px) {
      font-size: size(53);
      width: size(800);
    margin: -.5em auto .5em;
   /* text-align: left;
      position: absolute;
      top: size(66);
      left: size(170);
      letter-spacing: .08em;*/
    }
  }

  .t2 {
   font-size: sizem(13);
    font-weight: 500;
    margin-bottom: .6em;
    position: relative;
    letter-spacing: 0.05em;
    z-index: 3;
    color: #000;


    @media screen and (min-width: 768px) {
      font-size: size(25);
      width: size(800);
    letter-spacing: 0.1em;
    text-indent: 0.1em;
      /* 
      margin-bottom: 1.2em;
      position: absolute;
      top: size(75);
      right: size(150);*/
    }
  }

  .c {
    position: absolute;
    bottom: 0.5em;
    right: 0.5em;
    letter-spacing: 0em;
    font-size: sizem(10);

    @media screen and (min-width: 768px) {
      font-size: size(13);
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