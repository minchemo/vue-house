

<template>
  <article class="s4-3">
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">佈局商場住宅地產，深耕台灣</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="300">在台灣以林口及台中港OUTLET為集團事業起點，以豐富多元的購物體驗受到台灣消費者青睞，更致力呈現居住、工作、享受<br v-if="!$isMobile()"><span v-else>，</span>
創造全新生活空間，投入住宅開發案，引領未來建築生活新風貌。</p>
  </div>

  <div class="lists">
    <div class="list">
      <h4 data-aos="fade-up" data-aos-delay="0">商業設施</h4>
      <ul>
        <li data-aos="fade-up" data-aos-delay="0"><span>2016</span>  MITSUI OUTLET PARK 林口</li>
        <li data-aos="fade-up" data-aos-delay="100"><span>2018</span>  MITSUI OUTLET PARK 台中港</li>
        <li data-aos="fade-up" data-aos-delay="200"><span>2021</span>  MITSUI OUTLET PARK 台中港 二期</li>
        <li data-aos="fade-up" data-aos-delay="300"><span>2022</span>  MITSUI OUTLET PARK 台南</li>
        <li data-aos="fade-up" data-aos-delay="400"><span>2023</span>  Mitsui Shopping Park Lalaport台中</li>
        <li data-aos="fade-up" data-aos-delay="500"><span>2024</span>  Mitsui Shopping Park Lalaport南港(暫稱／預定)</li>
        <li data-aos="fade-up" data-aos-delay="600"><span>2024</span>  「林口媒體園區」複合式商業設施</li>
        <li data-aos="fade-up" data-aos-delay="700"><span>2025</span>  MITSUI OUTLET PARK 台南 二期(預定)</li>
        <li data-aos="fade-up" data-aos-delay="800"><span>2026</span>  Mitsui Shopping Park LaLaport高雄(暫稱／預定)</li>
      </ul>
    </div>
    <div class="listr">
    <div class="list">
      <h4 data-aos="fade-up" data-aos-delay="0">飯店觀光</h4>
      <ul>
        <li data-aos="fade-up" data-aos-delay="0"><span>2020</span>  和苑三井花園飯店 台北忠孝</li>
        <li data-aos="fade-up" data-aos-delay="100"><span>2026</span>  和苑三井花園飯店 敦化北路(預定)</li>
      </ul>
    </div>
    <div class="list">
      <h4 data-aos="fade-up" data-aos-delay="0">住宅建築</h4>
      <ul>
        <li data-aos="fade-up" data-aos-delay="0"><span>2021</span>  三松M PARK</li>
        <li data-aos="fade-up" data-aos-delay="100"><span>2025</span>  UNi PARK(預定)</li>
        <li data-aos="fade-up" data-aos-delay="200"><span>2026</span>  三松Jade PARK(預定)</li>
      </ul>
    </div>
    </div>
  </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4-3 {
  @apply relative overflow-hidden flex items-center;
  width: 100%;
  height:auto;
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction:column;
.txt {
  text-align: center;font-weight: 400;
  .title{font-size: 2.65em;
    font-weight: 300;margin: 0; color: #9A6A28;}
}

.lists{
  font-size:size(20);
  font-weight: 400;
  display: flex;gap: size(315);
  margin-bottom:size(120);
  .list{ display: flex;}
  .listr{ display: flex;gap: size(50);flex-direction:column;
    .list:last-child{flex: 1;}
  }
  h4{font-size: 1.3em;font-weight: 500;margin-right:size(5);width: 1em;line-height: 1.1;color: #9A6A28;}
  ul{border-left: 1px solid #000;
  padding: 0 0 0 1.5em;gap: size(13);
  display: flex;flex-direction:column;line-height: 1.4;letter-spacing: 0.06em;
  span{font-weight: 700;letter-spacing: 0;}
  }
}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4-3 {
  @apply flex-col;
    padding:0 0 4em 0;
  font-size:sizem(12);
  gap:0;
.txt {
  width:sizem(310);
  font-size:sizem(13);line-height: 1.9;
  margin:0 auto sizem(18);
  .title{font-size: 1.55em;margin-bottom:sizem(4);}
}
.lists{
  font-size:sizem(10);
 // width:sizem(310);
 margin-bottom:sizem(0);
  gap:0;flex-direction:column;
  .list{margin-bottom:sizem(38);
  &:last-child{margin-bottom:0;}}
  h4{font-size: 1.75em;margin-right:sizem(5);}
  ul{gap:0; padding: 0 0 0 1em;letter-spacing: 0.04em;
  span{margin-right: .3em;}
  }
  li{margin-bottom:sizem(16);
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

