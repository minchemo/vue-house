<template>
  <article class="s4 relative" id="s4">
    <img src="./s4/bg.png" class="tree" alt="tree" data-aos="fade-up" data-aos-delay="0">
    <div class="txt relative">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">繁華軸心<span>上等靜巷質地</span></h3>
      <p class="font-['Noto_Sans_TC',sans-serif]" data-aos="fade-up" data-aos-delay="600">雙面臨路，靜巷美地，<br>
讀秒進入中山路繁華軸心，<br>
出門就是流動的生活饗宴，<br>
土銀、合庫、全聯、寶雅、四大超商匯集地，<br>
大社商圈、黃昏市場、果菜市場、夜市，<br>
美食小吃一條街，富庶生活精彩絕倫，<br>
食衣住行逸樂，都在你身邊！</p>
    </div>
    <img src="./s4/img.webp" class="img" alt="img" data-aos="fade-up" data-aos-delay="0">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  position: relative;
  font-size:sizem(12);
  line-height: 1.6;
  padding:2em 0;
  @media screen and (min-width: 768px) {
    font-size:size(33);
  }
  @keyframes tree1 {
  to {
    transform:skewY(4deg);
  }
}
  .tree{
    position: absolute;
    top: 3em;
    right:0;
    width:sizem(190);transform:skewY(0deg);
    transform-origin: 100% 50%;
    animation: tree1 5s linear alternate infinite;
  @media screen and (min-width: 768px) {
    width:size(950);
    top: -2em;
  }
  }
  .txt{
    width: sizem(310);
    margin:0 auto 1em;z-index: 2;
  @media screen and (min-width: 768px) {
    width: size(990);
  }
    .title{
      font-size:2.3em;text-align: justify;
      line-height: 1.2;
      margin-bottom: .3em;width: 6em;
      span{white-space: nowrap;}
  @media screen and (min-width: 768px) {
    font-size:3em;
  }
    }
  }
  .img{width: sizem(320);margin: auto;display: block;

  @media screen and (min-width: 768px) {
    width: size(990);
  }
}

}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>