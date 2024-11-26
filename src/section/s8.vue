<template>
  <article class="s8 relative" id="s8">
    <img src="./s8/img.webp" class="img" alt="img" data-aos="fade-up" data-aos-delay="0">
    <div class="txt relative">
      <h3 class="title" data-aos="fade-up" data-aos-delay="200"><img src="./s8/icon.svg" class="icon" alt="icon">百春陽建設</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="400">16年的精湛品質馬拉松 追求完美，極致苛求</h4>
      <p class="font-['Noto_Sans_TC',sans-serif]" data-aos="fade-up" data-aos-delay="600">注重人本思維、精研平面細節、<br>
紮實美學精工、專業優質售服，<br>
「百春陽」是追求卓越的豪宅推手。<br>
16年來不斷精進、超越自我，<br>
因為懂得新世代精英的需求，<br>
以與時俱進的設計思維，創造最佳空間坪效，<br>
因為不滿足於最好，無止境的追求更美更好，<br>
才能成就永續建築！</p>
<!--  --><img src="./s8/en.svg" class="en" alt="en" data-aos="fade-up" data-aos-delay="800">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
  position: relative;
  font-size:sizem(12);
  line-height: 1.6;
  padding:1em 0 0em;
  @media screen and (min-width: 768px) {
    font-size:size(33);
  }
  .txt{
    width: sizem(310);
    margin:0 auto 0em;z-index: 2;padding-bottom: 1.2em;
  @media screen and (min-width: 768px) {
    width: size(1150);
  }
    .title{
      font-size:2.3em;
      line-height: 1.2;
      margin-bottom: .3em;
      span{color: #a38a77;}
  @media screen and (min-width: 768px) {
    font-size:3em;
    margin-bottom: .15em;
  }
  .icon{height: 1em;margin: -0.2em .2em 0 0;}
    }
    .subtitle{
      font-size:1.3em;margin-bottom: .8em;
    
  @media screen and (min-width: 768px) { font-size:1.4em;}
    }
    .en{
      width: 18em;
      margin-top: .8em;
      @media screen and (min-width: 768px) {
        margin:.5em 0 0 0em;
      }
    }
  }
  .img{width: sizem(320);margin: auto auto 1.5em auto;display: block;

  @media screen and (min-width: 768px) {
    width: size(1190);
  }
}

}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>