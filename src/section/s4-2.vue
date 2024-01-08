

<template>
  <article class="s4-2">
    <div class="main">
      <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="100">日本城市建設規劃推手</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="200">日本著名城市地標：東京中城、東京中城日比谷...等均出自其手。遍及全日本的各大商業街區、高級住宅區，以及包含自然教育園等地標，更入主東京巨蛋城。</p>
        <ul>
          <li data-aos="fade-up" data-aos-delay="300">日本橋再開發計劃</li>
          <li data-aos="fade-up" data-aos-delay="400">柏葉智慧城市</li>
          <li data-aos="fade-up" data-aos-delay="500">豐洲Bayside Cross Tower</li>
          <li data-aos="fade-up" data-aos-delay="600">東京中城</li>
          <li data-aos="fade-up" data-aos-delay="700">東京中城日比谷</li>
        </ul>
        <div class="sdesc" data-aos="fade-up" data-aos-delay="800">(除了大規模都心城市建設開發外，更有辦公大樓、商業設施等眾多實績，佈局全球化事業)</div>
      </div>
    </div>
    <div class="pic" data-aos="fade-up" data-aos-delay="0">
      <div class="slide-item">
        <img src="./s4/421.jpg" alt="東京中城日比谷">
          <span class="caption">東京中城日比谷</span>
        </div>
      <div class="slide-item">
        <img src="./s4/422.jpg" alt="三井花園飯店神宮外苑東京普米爾s">
          <span class="caption">三井花園飯店神宮外苑東京普米爾</span>
        </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4-2 {
  @apply relative overflow-hidden flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:size(110) 0;
  font-size:size(17);
  gap:6em;
  flex-wrap: wrap;

  .group1{
  width:size(1341);
  margin: 0em auto size(85);position: absolute;top:size(0);opacity: .5;
}
.main{
    @apply flex;
    margin: 0;
    flex-basis: size(500);
  flex-direction: column;
  text-align: justify;}
.txt {font-weight: 400;
  .title{color: #9A6A28;font-size:1.75em;margin-bottom: .2em;}
  .desc{margin-bottom: 4.5em;}
  ul{list-style: square;}
  li{margin:auto auto .4em 1.15em;font-size:size(20);}
  .sdesc{font-size:size(12);letter-spacing: 0}
}
  .pic {
    @apply flex;
    flex-basis: size(730);
    gap:size(10);
    .slide-item {
      @apply relative bg-cover;
      flex: 1;
      width:size(366);
      img{width: 100%;}
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s4-2 {
  @apply flex-col;
    height: auto;
    padding:0 0 5em 0;
    font-size:sizem(13);
    flex-wrap:nowrap;
    margin-bottom:0em;
    gap:0em;
    .group1{
      width:sizem(310);
      margin: 2em auto 5em;position: absolute;top:sizem(0);opacity: .5;
    }
  .main {
    padding: 0 0;margin: auto auto 1.5em auto;
    width:sizem(310);
}
.txt {
 .title{font-size:1.5em;margin-bottom: .4em;}
  .desc{margin-bottom: 1em;line-height: 1.9;}
  li{font-size:sizem(15);}
  .sdesc{font-size:sizem(12);}
}
  .pic {
    flex-basis: 100%;
    gap:0;
    .slide-item {
      @apply relative bg-cover;
      flex: 1;
      width:sizem(152);
      margin-left:sizem(5);
      img{width: 100%;}
      &:first-child{
      margin-left:0;}
.caption {
    font-size:sizem(8.6);
}
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

