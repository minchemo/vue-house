<template>
  <article class="s10" ref="s10">
      <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">全案李文勝原創手藝<br v-if="$isMobile()"><span v-else>　</span>量身訂製建築、公設、景觀</h3>
      </div>
    <div class="main">
      <div class="txt">
    <p class="desc" data-aos="fade-up" data-aos-delay="100">李文勝建築師全案整體規劃，建築、公設、景觀一氣呵成的自然思維，對位四季芳華不同的時令之美，從踏入RiVER PARK開始，水岸、公園、天光、生活，都在信步之間全然享受。!</p>
      
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">獲獎 / 展覽</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="300">台灣 TRAA 第六屆台灣住宅建築獎 首獎<br>
德國 德國設計獎 German Design Special Mention Award<br>
日本 Good Design Award<br>
香港 亞洲最具影響力設計優異獎 Design for Asia Merit Award<br>
義大利 Dedalo Minosse International Prize<br>
義大利 Dedalo Minosse International Exhibition 展覽<br>
德國 iF Design Award<br>
台灣 第一屆 ADA 新銳建築獎</p>
      </div>
    </div>
    <img src="./s10/1.webp" alt="img" class="img1" data-aos="fade-up" data-aos-delay="400">
    <img src="./s10/2.webp" alt="img" class="img2" data-aos="fade-up" data-aos-delay="400">

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s10 {
  @apply relative flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:9em 0 6em 0;
  font-size:size(17);
  gap:2em;
  flex-wrap: wrap; justify-content:center;align-items:center;

  .main {
    @apply flex;
    margin: 0;order:2;
    flex-basis: size(500);
  flex-direction: column;
  text-align: justify;
}


.txt {
  .slogo{height:size(45);}
  .title{
    margin: 0 0 1.3em;text-align: center;
    line-height: 1.3;color: #B5761D;
    font-size: 2.75em;
    font-weight: 300;
  }
  .subtitle{color: #B5761D;
    font-size: 1.1em;
    margin: 2.5em 0 .2em 0;}
  .desc{
    margin: 0 0 0;
  }

}

.img1 {order:1;
    flex-basis: size(446);margin: 0 1em 0 0;width:size(446);
  }
  .img2 { order:3;
    flex-basis: size(210);margin: 0;width:size(210);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s10 {
 // @apply flex-col;
    height: auto;
    padding:sizem(60) 0 sizem(60) 0;
  font-size:sizem(11.5);
  flex-wrap:wrap;
  margin-bottom:0em;
  gap:0em;
  background-size: sizem(360) auto;
  background-position: 0 sizem(340);

  .main {
    padding: 0 sizem(32.5);
    flex: 100%;
    order:2;
    margin-bottom: 2.5em;
  }

  .txt { width: 100%;
    margin-bottom: 1.2em;order:1;
  .title{font-size: 1.7em;margin: 0 0em;}
  .desc{letter-spacing: 0;
  }
  }


.img1 {order:3;
    flex-basis: sizem(210);margin: 0 1em 0 0;width: sizem(210);
  }
  .img2 { order:4;
    flex-basis: sizem(100);margin: 0;width: sizem(100);
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
    img:new URL("./s5/521.jpg", import.meta.url).href ,
    caption: "台北車站"
  },
  {
    img:new URL("./s5/522.jpg", import.meta.url).href ,
    caption: "雙捷交會三重站"
  },
  {
    img:new URL("./s5/523.jpg", import.meta.url).href ,
    caption: "雙捷交會三重站"
  },
  {
    img:new URL("./s5/524.jpg", import.meta.url).href ,
    caption: "雙捷交會三重站"
  },
]
</script>

