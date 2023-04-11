<template>
  <article class="s5">
    <div class="slider">
      <div class="arrows">
        <img loading="lazy"  class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
        <img loading="lazy"  class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :style="{ 'background-image': 'url(' + img.img + ')' }">
        </SplideSlide>
      </Splide>
    </div>
    <div class="main">
      <div :key="currentSlideIndex">
        <div class="intro">
          <div>
            <div class="t1" data-aos="fade-up">{{ imgs[currentSlideIndex].t1 }}</div>
            <div class="t2" data-aos="fade-up">{{ imgs[currentSlideIndex].t2 }}</div>
            <div class="t3" data-aos="fade-up">{{ imgs[currentSlideIndex].t3 }}</div>
          </div>
          <img loading="lazy"  :src="imgs[currentSlideIndex].avatar" alt="" srcset="">
        </div>
        <div class="works" v-html="imgs[currentSlideIndex].t4"></div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative overflow-hidden flex items-end justify-center text-white;
  width: 100%;
  height: size(1080);
  padding: size(32) 0 size(36) size(30);
  background-size: cover;
  background-image: url('@/section/bg.jpg');

  .main {
    @apply grow flex items-center justify-center text-[#1E1B1B];
    padding-bottom: size(10);

    .intro {
      @apply flex items-end;
      gap: size(102);
      border-bottom: size(1) solid #000;
      padding-bottom: size(28);

      > div {
        @apply flex flex-col;
        gap: size(10);
        .t1 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(45);
        letter-spacing: 0.05em;
        color: #A37C52;
      }
      .t2 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(61);
        letter-spacing: 0.05em;
        color: #1E1B1B;
      }
      .t3 {
        font-family: 'Noto Sans TC';
        font-weight: 500;
        font-size: size(30);
        letter-spacing: 0.05em;
        color: #1E1B1B;
      }
      }

      img {
        width: size(254.15);
      }
    }
    .works{
      margin-top: size(22);
      font-family: 'Noto Serif TC';
      font-weight: 600;
      font-size: size(20);
      line-height: size(34);
      letter-spacing: 0.05em;
    }
  }

  .slider {
    flex-basis: size(851);
    height: 100%;
    .slide-item {
      @apply bg-cover;
      width: size(851);
      height: size(1012);
      
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
    @apply flex-col;
  width: 100%;
  height: sizem(667);
  padding: sizem(38.92) sizem(32.64) 0 sizem(32.64);
  background-image: url('@/section/bgm.jpg');

  .main {
    padding-bottom: size(10);

    .intro {
      @apply flex items-end;
      gap: size(102);
      border-bottom: size(1) solid #000;
      padding-bottom: sizem(9.25);

      > div {
        @apply flex flex-col;
        gap: sizem(5);
        .t1 {
        font-size: sizem(18);
        }
        .t2 {
          font-size: sizem(25);
          white-space: nowrap;
        }
        .t3 {
          font-size: sizem(15);
        }
      }

      img {
        width: sizem(100);
      }
    }
    .works{
      margin-top: sizem(12.5);
      font-size: sizem(14);
      line-height: sizem(24);
    }
  }

  .slider {
    flex-basis: sizem(337);
    height: auto;
    width: sizem(310.36);
    .slide-item {
      @apply bg-cover;
    width: sizem(310.36);
      height: sizem(337);
      
    }
  }
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

const imgs = [
  {
    img: globals.$isMobile() ? new URL("./s5/1_m.webp", import.meta.url).href : new URL("./s5/1.webp", import.meta.url).href,
    avatar: globals.$isMobile() ? new URL("./s5/a_m.webp", import.meta.url).href : new URL("./s5/a.webp", import.meta.url).href,
    t1: '國家建築金質首獎主',
    t2: '建築規劃 簡俊卿',
    t3: '簡俊卿建築師事務所',
    t4: '信義｜松德長虹<br/>天母｜華固天鑄<br/>松山｜國美新美館<br/>大安｜敦南之森<br/>忠孝｜Dimond Tower'
  },
  {
    img: globals.$isMobile() ? new URL("./s5/2_m.webp", import.meta.url).href : new URL("./s5/2.webp", import.meta.url).href,
    avatar: globals.$isMobile() ? new URL("./s5/b_m.webp", import.meta.url).href : new URL("./s5/b.webp", import.meta.url).href,
    t1: '國際設計大獎常勝軍',
    t2: '公設設計 李志成',
    t3: 'YUANYOU DESIGN',
    t4: '信義｜聯合大於大哲<br/>士林｜東騰天母<br/>南港｜映東騰<br/>內湖｜東騰自在<br/>中山｜富富話合'
  },
  {
    img: globals.$isMobile() ? new URL("./s5/3_m.webp", import.meta.url).href : new URL("./s5/3.webp", import.meta.url).href,
    avatar: globals.$isMobile() ? new URL("./s5/c_m.webp", import.meta.url).href : new URL("./s5/c.webp", import.meta.url).href,
    t1: '國家級結構安全巨擘',
    t2: '結構設計 陳村林',
    t3: '凱巨工程顧問',
    t4: '大直｜躍大直<br/>天母｜聯上天母<br/>松山｜華固敦品<br/>內湖｜長虹天璽<br/>新莊｜遠雄九五'
  },
  {
    img: globals.$isMobile() ? new URL("./s5/4_m.webp", import.meta.url).href : new URL("./s5/4.webp", import.meta.url).href,
    avatar: globals.$isMobile() ? new URL("./s5/d_m.webp", import.meta.url).href : new URL("./s5/d.webp", import.meta.url).href,
    t1: '國家建築金質獎肯定',
    t2: '營造工程 鄒開鑄',
    t3: '森城營造',
    t4: '大直｜虹光Live<br/>中正｜森城大院<br/>士林｜士林一品<br/>新店｜吉美君悦<br/>林口｜長耀PARK'
  },
]
/*
const imgs = [
  {
    img: getImg('s5/1'),
    avatar: getImg('s5/a'),
    t1: '國家建築金質首獎主',
    t2: '建築規劃 簡俊卿',
    t3: '簡俊卿建築師事務所',
    t4: '信義｜松德長虹<br/>天母｜華固天鑄<br/>松山｜國美新美館<br/>大安｜敦南之森<br/>忠孝｜Dimond Tower'
  },
  {
    img: getImg('s5/2'),
    avatar: getImg('s5/b'),
    t1: '國際設計大獎常勝軍',
    t2: '公設設計 李志成',
    t3: 'YUANYOU DESIGN',
    t4: '信義｜聯合大於大哲<br/>士林｜東騰天母<br/>南港｜映東騰<br/>內湖｜東騰自在<br/>中山｜富富話合'
  },
  {
    img: getImg('s5/3'),
    avatar: getImg('s5/c'),
    t1: '國家級結構安全巨擘',
    t2: '結構設計 陳村林',
    t3: '凱巨工程顧問',
    t4: '大直｜躍大直<br/>天母｜聯上天母<br/>松山｜華固敦品<br/>內湖｜長虹天璽<br/>新莊｜遠雄九五'
  },
  {
    img: getImg('s5/4'),
    avatar: getImg('s5/d'),
    t1: '國家建築金質獎肯定',
    t2: '營造工程 鄒開鑄',
    t3: '森城營造',
    t4: '大直｜虹光Live<br/>中正｜森城大院<br/>士林｜士林一品<br/>新店｜吉美君悦<br/>林口｜長耀PARK'
  },
]
*/
</script>
