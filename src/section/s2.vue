<template>
  <article class="s2">
      <div class="txt">
        <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >一座為愛而生的建築</h2>
        <p data-aos="zoom-in" data-aos-delay="400">萬企有愛，成家無礙<br>
與家人<br>
散步到河邊賞河景觀夕照<br>
給孩子<br>
多睡5分鐘的雙優質學區<br>
和朋友<br>
相約逛老街吃阿給探人文<br>
陪媽媽<br>
迺菜市逛超市<br>
豐饒的商業機能，人文豐厚的街廓<br>
濃厚雋雅的書香，蒼翠樹幔的公園<br>
萬企懂您深心所愛<br>
萃釀豐情<br>
轉角遇見愛，全都是天菜</p>
      </div>
      <div class="st"><img src="./s2/t.svg" alt=""></div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  min-height: size(800);
  max-height: size(1020);
  height: calc(100vh - 3.125vw);
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: column;
  background: url("./s2/bg.jpg") 50% 50%;
  background-size: cover;
  .txt {
    @apply flex text-[#fff];
  z-index: 5;
    margin:auto auto auto size(350);
  flex-direction: column;
  text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
  .title{
    font-size: 2em;
    margin: 0 0 .6em;
    line-height: 1.4;
    font-weight: 700;color: #fff;
  text-align: center;
  }
  }
  .st{position: absolute;
    width: size(60);bottom:3em;right: 0;
    background-image: linear-gradient(180deg, #fff0 0%, #FFF 50%, #fff0 100%);
;
  img{ width: size(30);}
}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
  min-height: sizem(0);
  max-height: sizem(1080);
  height: sizem(500);
  font-size:sizem(13);
  .txt {
    top: 4em;
  .title{
    font-size: 1.9em;
  }
  .en{
    height: 2.4em;
  }
  .subtitle{
    font-size: 1.3em;
  }
  }
  .bottom{
    width: sizem(160);}

  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}
</script>
