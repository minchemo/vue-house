<template>
  <article class="s2">
      <div class="txt">
        <h2 class="title" data-aos="fade-up" data-aos-delay="0" >一座為愛而生的建築</h2>
        <ul>
          <li data-aos="fade-up" data-aos-delay="100">萬企有愛，成家無礙</li>
          <li data-aos="fade-up" data-aos-delay="200">與家人</li>
          <li data-aos="fade-up" data-aos-delay="300">散步到河邊賞河景觀夕照</li>
          <li data-aos="fade-up" data-aos-delay="400">給孩子</li>
          <li data-aos="fade-up" data-aos-delay="500">多睡5分鐘的雙優質學區</li>
          <li data-aos="fade-up" data-aos-delay="600">和朋友</li>
          <li data-aos="fade-up" data-aos-delay="700">相約逛老街吃阿給探人文</li>
          <li data-aos="fade-up" data-aos-delay="800">陪媽媽</li>
          <li data-aos="fade-up" data-aos-delay="900">迺菜市逛超市</li>
          <li data-aos="fade-up" data-aos-delay="1000">豐饒的商業機能，人文豐厚的街廓</li>
          <li data-aos="fade-up" data-aos-delay="1100">濃厚雋雅的書香，蒼翠樹幔的公園</li>
          <li data-aos="fade-up" data-aos-delay="1200">萬企懂您深心所愛</li>
          <li data-aos="fade-up" data-aos-delay="1300">萃釀豐情</li>
          <li data-aos="fade-up" data-aos-delay="1400">轉角遇見愛，全都是天菜</li>
        </ul>
      </div>
      <div class="st" data-aos="fade-up" data-aos-delay="200"><img src="./s2/t.svg" alt=""></div>
      <div class="caption">外觀模擬示意圖</div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: column;
  background: url("./s2/bg.webp") 50% 40%;
  background-size: cover;
  .txt {
    @apply flex;
  z-index: 5;
    margin:auto auto auto size(350);
  flex-direction: column;
  text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    text-shadow: 0 2px 5px #005b88;
  .title{
    font-size: 2em;
    margin: 0 0 .6em;
    line-height: 1.4;
    font-weight: 700;color: #fff;
  text-align: center;
  }
  }
  .st{position: absolute;
    display: flex;align-items: center;justify-content: center;
    width: size(60);height:size(740);bottom:calc(50% - 16vw);right:size(120);
    background-image: linear-gradient(180deg, #fff0 0%, #FFF 50%, #fff0 100%);
  img{ width: 50%;margin: 0 0 2vw;}
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
  height: sizem(667);
  font-size:sizem(13);
  background:#1691CF url("./s2/bgm.webp") 50% 100% no-repeat;
  background-size: 100% auto;
  .txt {
    margin:4em auto auto auto;
  .title{
    font-size: 1.9em;
  }
  }
  .st{width: sizem(20);height:sizem(220);bottom:sizem(50);right:sizem(30);}

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
