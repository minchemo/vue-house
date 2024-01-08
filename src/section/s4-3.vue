

<template>
  <article class="s4-3">
  <img src="./s4/group2.webp" alt="group2" class="group2" v-if="!$isMobile()">
  <img src="./s4/group2m.webp" alt="group2" class="group2" v-else>
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">佈局商場住宅地產，深耕台灣</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="300">「在台灣美好土地上深耕」超過半世紀的國泰建設，一如大樹的永續與向下扎根的踏實精神，不僅是國內最受信賴的建設品牌，更是持續帶領台灣建築邁向每一個更美好的未來。</p>
  </div>

  <div class="lists">
    <div class="list">
      <h4 data-aos="fade-up" data-aos-delay="0">商業設施</h4>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">2016  MITSUI OUTLET PARK 林口</li>
        <li data-aos="fade-up" data-aos-delay="200">2018  MITSUI OUTLET PARK 台中港</li>
        <li data-aos="fade-up" data-aos-delay="200">2021  MITSUI OUTLET PARK 台中港 二期</li>
        <li data-aos="fade-up" data-aos-delay="200">2022  MITSUI OUTLET PARK 台南</li>
        <li data-aos="fade-up" data-aos-delay="200">2023  Mitsui Shopping Park Lalaport台中</li>
        <li data-aos="fade-up" data-aos-delay="200">2024  Mitsui Shopping Park Lalaport南港(暫稱／預定)</li>
        <li data-aos="fade-up" data-aos-delay="200">2024  「林口媒體園區」複合式商業設施</li>
        <li data-aos="fade-up" data-aos-delay="200">2025  MITSUI OUTLET PARK 台南 二期(預定)</li>
        <li data-aos="fade-up" data-aos-delay="200">2026  Mitsui Shopping Park LaLaport高雄(暫稱／預定)</li>
        <li data-aos="fade-up" data-aos-delay="200"></li>
      </ul>
    </div>
    <div class="list">
      <h4 data-aos="fade-up" data-aos-delay="0">飯店觀光</h4>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">2020  和苑三井花園飯店 台北忠孝</li>
        <li data-aos="fade-up" data-aos-delay="200">2026  和苑三井花園飯店 敦化北路(預定)</li>
      </ul>
    </div>
    <div class="list">
      <h4 data-aos="fade-up" data-aos-delay="0">住宅建築</h4>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">2021  三松M PARK</li>
        <li data-aos="fade-up" data-aos-delay="200">2025  UNi PARK(預定)</li>
        <li data-aos="fade-up" data-aos-delay="200">2026  三松Jade PARK(預定)</li>
      </ul>
    </div>
  </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4-3 {
  @apply relative overflow-hidden flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:0 0 0 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  .group2{
  width:size(1341);
  margin: 0em auto 5em;position: absolute;top:size(0);opacity: .5;}
  .group20{
  width:size(1341);
  margin: 0em auto 5em;}
.txt {
  text-align: center;
  .subtitle{
    font-weight: 300;
    margin:  0.2em 0 0em;}
  .title{font-size: 2.65em;
    font-weight: 300;margin: 0 0 0em; color: #9A6A28;}
}

.lists{
  width: 100%;
  font-size:size(17);
  font-weight: 300;
  display: flex;gap: size(255);
  h4{font-size: 1.85em;font-weight: 700;margin-bottom:size(17);}
  ul{border-left: 1px solid #EED69A;
  padding: 0 0 0 1.5em;gap: size(6);
  display: flex;flex-direction:column;line-height: 1.4;letter-spacing: 0.06em;
  }
}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4-3 {
  @apply flex-col;
    height: auto;
    padding:0 0 5em 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .group2{
  width:sizem(310);
  margin: 0em auto 5em;}
  .group20{
  width:sizem(310);
  margin: 0em auto 5em;}
.list3{
  font-size:sizem(12);
  width:sizem(310);margin-bottom:sizem(30);
  gap:0;flex-direction:column;
  .list{margin-bottom:sizem(65);
  &:last-child{margin-bottom:0;}}
  h4{font-size: 1.75em;margin-bottom:sizem(7);}
  ul{gap:0;
  }
  li{margin-bottom:sizem(12);
  &:last-child{margin-bottom:0;}
  }
}

  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

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
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 10,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    caption: "RAYARD MIYASHITA PARK"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: "MITSUI OUTLET PARK 林口"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

