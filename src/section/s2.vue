<template>
  <article class="s2" id="s2">
    <div class="t1" data-aos="fade-up" data-aos-delay="0">
      
        <img src="./s1/quotes1.svg" class="quotesl" alt="quotesl" />
        <img src="./s1/quotes1.svg" class="quotesr" alt="quotesr" />
        全球與大台北之間<br>
都在您的遊沐之間</div>
  <div class="line" data-aos="fade-up" data-aos-delay="200"></div>
    <div class="t2" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">轉身即達台64，串聯雙北的快速路網<br>
一路接軌淡江大橋，馳騁另一邊台北<br>
光速前進，悠遊為常<br>
全球與大台北之間，都由您游沐日常</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="400" v-else>轉身即達台64，串聯雙北的快速路網，一路接軌淡江大橋，馳騁另一邊台北<br>
光速前進，悠遊為常，全球與大台北之間，都由您游沐日常</div>
 
 <div class="line" data-aos="fade-up" data-aos-delay="600"></div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s2 {
  @apply relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height:sizem(640);
  //background: linear-gradient(180deg, #0085E5 0%, #19B2FF 50%, #67D2FF 100%);
  // background: #d62051;
  background:url("./s2/bgm.jpg");
  background-size: cover;
 /* 
  background-size: 100% auto;
  background-position: 50% 100%;*/
  color: #FFF;
  font-size: sizem(14);
  font-weight: 300;
  text-align: center;

  @media screen and (min-width: 768px) {
    background-image: url("./s2/bg.jpg");
    background-size: cover;
    background-position: 50% 50%;
    
    height: size(1060);
  /*  min-height: size(900);
    max-height: size(1080);*/
    font-size: size(30);
   // justify-content: flex-end;
  }

.t1 {
  
    margin-top: sizem(75);
    font-size: sizem(25);
    letter-spacing: 0.06em;
    line-height: 1.55;
    font-weight: 500;
    margin-bottom: .6em;
    position: relative;
    display: inline-block;

    img {
      height: .53em;
    }

    .quotesl {
      position: absolute;
      top: .4em;
      left: -1.35em;
    }

    .quotesr {
      position: absolute;
      transform: rotate(180deg);
      top: .4em;
      right: -1.2em;
    }

    @media screen and (min-width: 768px) {
    margin-top: size(110);
      font-size: size(55);
    }
  }


  .line {
      position: relative;
    width:3em;
    height: 1px;
    background: currentColor;
    margin: .8em 0em .8em 0em;
      z-index: 3;

    @media screen and (min-width: 768px) {
  //  margin: .8em 0em 1.4em 0em;
    }

  }

  .t3 {
    margin-bottom:2.3em;
      position: relative;
      z-index: 3;
      line-height: 1.2;

    @media screen and (min-width: 768px) {
      margin-bottom: 0em;
      letter-spacing: 0.1em;
    }
  }

  .t4 {
      position: relative;
    margin-bottom:1.7em;
      z-index: 3;
      font-weight: 300;
      svg{width: 1.6em;margin:.3em auto auto;}

    @media screen and (min-width: 768px) {
      margin-bottom: 1.7em;
      letter-spacing: 0.1em;
    font-size: size(57);
      svg{width: 1.2em;margin:.4em auto auto;}
    }
  }

  .en {
    width: sizem(368);
    position: absolute;
    bottom: sizem(7);
    left: 0;right: 0;margin: auto; z-index: 2;

    @media screen and (min-width: 768px) {
      width: size(1880);
      bottom: size(10);
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