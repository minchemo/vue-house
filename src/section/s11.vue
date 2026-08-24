<template>
  <article class="s11" ref="s11">
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption" class="bg">
          <div class="text">
            <span class="title">{{ img.title }}</span><img src="./s2/icon.svg" alt="icon" class="icon">

            <span class="desc">{{ img.desc }}</span>
          </div>
          <img :src="img.img" :alt="img.caption" class="img">
          <span class="caption"><span>{{ img.caption_l }}</span>{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s11 {
  @apply relative flex justify-center;
  width: 100%;
  height: auto;
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  font-size: sizem(11);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0;
    flex-wrap: wrap;
    gap: 4em;
    background-size: size(113) auto;
    font-size: size(22);
  }

  .text {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 5em 2em 3em 2em;
    z-index: 3;



    @media screen and (min-width: 768px) {
      position: absolute;
      flex-direction: row;
      padding: .5em 3em;
      background: linear-gradient(90deg, #000 32%, rgba(35, 24, 20, 0.00) 100%);

    }

    .title {
      font-size: 2.2em;
      letter-spacing: .02em;
    }

    .icon {
      width: 1.6em;
      margin: 0 0.9em;
    }
  }

  // size(110)

  .slider {
    margin: 0;
    width: 100%;
    height: auto;


    .slide-item {
      @apply bg-cover;
      width: 100%;
      height: sizem(447);

      @media screen and (min-width: 768px) {
        width: 100%;
        height: size(1080);

      }

      @media screen and (max-width: 767px) {
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          background: linear-gradient(90deg, #000 32%, rgba(35, 24, 20, 0.00) 100%);
          backdrop-filter: blur(2px);

        }
      }

      .bg {
        position: absolute;
      }

      .img {
        position: relative;
        height: sizem(211);
        z-index: 3;
      }

      @media screen and (min-width: 768px) {
        .bg {
          //   display: none;
        }

        .img {
          display: none;
          /*
        position: relative;
        height: sizem(211);
        */
        }

      }

    }
  .arrows {

    .prev,
    .next {
      width: 3%;
    }

  }

  }


  .caption {
    span {
      font-size: 2em;
      font-weight: 700;
      margin-right: .2em;
    }
    @media screen and (max-width: 767px) {
      bottom: 8em;
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

const splide = ref()

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  autoplay: false,
  interval: 4000,
  gap: 0,
  //  drag: false
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s11/1.webp", import.meta.url).href,
    title: "磅礡迎賓門廊，展現堅實根基",
    desc: "匯聚建築工藝精華，以大器門面彰顯企業立足世界的宏偉雄心。",
    caption_l: "國際級門廳",
    caption: "大廳3D示意圖",
  },
  {
    img: new URL("./s11/2.webp", import.meta.url).href,
    title: "雲端交誼場域，決勝縱橫商海",
    desc: "高空俯瞰黃金地段，於無界視野中映照領袖企業格局。",
    caption_l: "天際交誼廳",
    caption: "交誼廳示意圖",
  },
  {
    img: new URL("./s11/3.webp", import.meta.url).href,
    title: "智慧決策殿堂，加速戰略佈局",
    desc: "兼具私密專案研討與大型講座功能，全方位驅動營運綜效。",
    caption_l: "高效會議室",
    caption: "會議室示意圖",
  },
  {
    img: new URL("./s11/4.webp", import.meta.url).href,
    title: "星級佳餚盛席，款待當代層峰",
    desc: "專屬貴賓尊榮社交空間，以御用主廚和極致氛圍定格榮耀時刻。",
    caption_l: "頂級宴會廳",
    caption: "宴會廳示意圖",
  },
]
</script>