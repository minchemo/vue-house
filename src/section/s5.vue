<template>
  <article class="s5">
    <div class="arrows" data-aos="fade-up"  data-aos-duration="800">
      <img @click="splideRef.splide.go('<')" class="clickable" src="@/section/s5/back.png" alt="">
      <div class="line"></div>
      <img @click="splideRef.splide.go('>')" class="clickable" src="@/section/s5/next.png" alt="">
    </div>
    <Splide ref="splideRef" :options="{ type: 'loop', arrows: false, autoplay: true, interval: 3000 }"
      class="slide-section">
      <SplideSlide v-for="img, i in imgs" class="slide-item" >
        <img v-if="$isMobile()" class="title" :src="img.title" alt="" srcset="">
        <img class="cover" data-aos="fade-up"  data-aos-duration="800" :src="img.img" alt="" srcset="">
        <div class="text" data-aos="fade-up" data-aos-duration="800">
          <img v-if="!$isMobile()" class="title" :src="img.title" alt="" srcset="">
          <div class="content">{{ img.content }}</div>
        </div>
      </SplideSlide>
    </Splide>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  @apply relative flex flex-col-reverse md:flex-col justify-center;
  width: 100%;
  height: 100vh;
  gap: size(46.54);
  background-color: #fff;

  .arrows {
    @apply relative flex ml-auto; 
    gap: size(40);
    height: size(50.5);
    margin-right: size(178.5);
    .line {
      width: size(1);
      background-color: #C6A93E;
    }
    img {
      @apply cursor-pointer m-0 h-full;
    }
  }

  .slide-section {
    @apply mx-auto;
    width: size(1563);

    .slide-item {
      .cover{
        width: size(1563);
      }
      .text {
        @apply flex items-center justify-start;
          margin-top: size(64);
          justify-content:space-between;
        .title {
          @apply m-0;
          height: size(45);
        }
        .content {
          font-family: 'Noto Sans TC';
          width: size(780);
          text-align: justify;
        }
      }
    }
  }

}

@media screen and (max-width: 767px) {
.s5 {
  width: 100%;
  height: size-m(668);
  gap: size-m(25);

  .arrows {
    gap: size-m(25);
    height: size-m(33);
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
    .line {
      width: size-m(1);
    }
    img {
      @apply cursor-pointer m-0 h-full;
    }
  }

  .slide-section {
    @apply mx-auto;
    width: 100%;

    .slide-item {
      .title {
        display: block;
        margin-bottom: size-m(33);
        width: size-m(284);
      }
      .cover{
        width: 100%;
        height: size-m(275);
      }
      .text {
        @apply flex items-center justify-start;
          gap: size(102);
          margin-top: size(64);
        .content {
          margin-top: size-m(10);
          margin: 0 auto;
          width: size-m(295);
          font-weight: 400;
          font-size: size-m(14);
          line-height: size-m(31);
          letter-spacing: 0.06em;
        }
      }
    }
  }

}
}
</style>
<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
import { SplideTrack } from '@splidejs/vue-splide';
import inView from 'in-view';


const globals = getCurrentInstance().appContext.config.globalProperties;
const splideRef = ref(null);
const activeIndex = ref(0);
const imgs = [
  {
    title: globals.$isMobile() ? new URL("../section/s5/t1.png", import.meta.url).href : new URL("../section/s5/t1.png", import.meta.url).href,
    img: globals.$isMobile() ? new URL("../section/s5/1.jpg", import.meta.url).href : new URL("../section/s5/1.jpg", import.meta.url).href,
    content: '借鏡美國與竹科模式，加上半導體產業鏈進軍助攻，南科成為世界科技指標研發重鎮。南科2021年產值破兆元，半導體、光電、5G定位發展明確，產業群落效應顯著，科技核心城市成形。'
  },
  {
    title: globals.$isMobile() ? new URL("../section/s5/t2.png", import.meta.url).href : new URL("../section/s5/t2.png", import.meta.url).href,
    img: globals.$isMobile() ? new URL("../section/s5/5_m.jpg", import.meta.url).href : new URL("../section/s5/5.jpg", import.meta.url).href,
    content: '新市的完整成熟機能，放眼大南科無可匹敵。金融、休閒、日常採買全到位，隨著南科特定計畫開發，串起完整校園、生態保護區、藝文展演等生活服務，成就新時代新貴生活圈。'
  },
  {
    title: globals.$isMobile() ? new URL("../section/s5/t3.png", import.meta.url).href : new URL("../section/s5/t3.png", import.meta.url).href,
    img: globals.$isMobile() ? new URL("../section/s5/3.jpg", import.meta.url).href : new URL("../section/s5/3.jpg", import.meta.url).href,
    content: '南科三區之中，新市是唯一「北外環快速道」涵蓋之行政區，聯外效率凌駕安定與善化，飆速串連台南市中心。匯聚國道一、八號、台1線、南135縣道，貴為南科交通門戶。'
  },
  {
    title: globals.$isMobile() ? new URL("../section/s5/t4.png", import.meta.url).href : new URL("../section/s5/t4.png", import.meta.url).href,
    img: globals.$isMobile() ? new URL("../section/s5/4.jpg", import.meta.url).href : new URL("../section/s5/4.jpg", import.meta.url).href,
    content: '南科台南科學園區佔地1,043公頃，隨南科特定計畫區開發，總就業人口估計將可達12.3萬人。產業帶來就業機會，人才帶來住居需求，科技新貴帶來的剛性需求，指日可待。'
  },
]
onMounted(() => {
  inView('.s5')
    .on('enter', () => {
      splideRef.value.splide.refresh();
    })
    .on('exit', () => {
    });
})
</script>
