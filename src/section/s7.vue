<template>
  <article class="s7">
    <div class="arrows" data-aos="fade-up" data-aos-duration="800">
      <img @click="prev()" class="clickable" src="@/section/s5/back.png" alt="">
      <div class="line"></div>
      <img @click="next()" class="clickable" src="@/section/s5/next.png" alt="">
    </div>

    <ul class="pagination" v-if="$isMobile()">
      <li v-for="t, i in imgs[activeTitle].imgs" :class="{ active: activeIndex == i }" @click="splideRef.splide.go(i)">
      </li>
    </ul>
    <div class="main">
      <div class="text" data-aos="fade-up" data-aos-duration="800" :key="activeTitle">
        <img class="t1" :src="imgs[activeTitle].t1" alt="" srcset="">
        <p class="t2" v-html="imgs[activeTitle].t2"></p>
        <div class="t3" v-if="imgs[activeTitle].work != ''">
          <span>代表作品</span>
          <p v-html="imgs[activeTitle].work"></p>
        </div>
        <div class="thumbnails" v-if="!$isMobile()">
          <div v-for="t, i in imgs[activeTitle].imgs" class="thumbnails-item" :class="{ active: activeIndex == i }">
            <p v-html="t.caption"></p>
            <img :src="t.url" alt="" srcset="" @click="splideRef.splide.go(i)">
          </div>
          <ul class="pagination">
            <li v-for="t, i in imgs[activeTitle].imgs" :class="{ active: activeIndex == i }"
              @click="splideRef.splide.go(i)"></li>
          </ul>
        </div>
      </div>
      <div class="tab-section" v-if="!$isMobile()">
        <div class="tab-item" v-for="img, i in imgs" @click="activeTitle = i; activeIndex = 0; splideRef.splide.go(0)"
          :class="{ active: i == activeTitle }">
          <img class="title" :src="img.title" :alt="img.title" srcset="">
          <img class="slash" v-if="i < imgs.length - 1" src="@/section/s7/slash.png" alt="" srcset="">
        </div>
      </div>
      <Splide ref="splideRef" data-aos="fade-in" data-aos-duration="800" @splide:move="onMove"
        :key="isInView"
        :options="{ type: 'loop', arrows: false, rewind: true, pagination: false, autoplay: true, interval: 3000, pauseOnHover: true, perPage: 1 }"
        class="slide-section">
        <SplideSlide v-for="img, i in imgs[activeTitle].imgs" class="slide-item">
          <img class="cover" :src="img.url" :alt=img.caption srcset="">
        </SplideSlide>
      </Splide>
      <div class="tab-section" v-if="$isMobile()">
        <div class="tab-item" v-for="img, i in imgs" @click="activeTitle = i; activeIndex = 0; splideRef.splide.go(0)"
          :class="{ active: i == activeTitle }">
          <img class="title" :src="img.title" :alt="img.title" srcset="">
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  @apply relative flex flex-col-reverse md:flex-col justify-center;
  width: 100%;
  height: 100vh;
  gap: size(46.54);
  background-color: #F1F1F1;

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

  .main {
    @apply flex justify-center;
    font-family: 'Noto Sans TC';
    height: size(678);

    .text {
      @apply relative;
      width: size(497);
      margin-right: size(101);
      .t1 {
        height: size(90);
        margin-bottom: size(58.5);
      }
      .t2 {
        font-weight: 400;
        font-size: size(17);
        line-height: size(32);
        text-align: justify;
        letter-spacing: 0.06em;
        color: #000000;
        margin-bottom: size(28);
      }
      .t3 {
        letter-spacing: 0.06em;
        font-weight: 400;
        line-height: size(32);
        margin-bottom: size(127);
        text-align: justify;

        span {
          @apply inline;
          font-size: size(14);
          color: #C6A93E;
          margin-right: size(14)
        }

        p {
          @apply inline;
          font-size: size(17);
          color: #000000;
        }
      }
      .thumbnails {
        @apply flex absolute items-end w-full;
        bottom: 0;
        left: 0;
        gap: size(12);
        padding-bottom: size(25.54);

        .thumbnails-item {
          &:hover {
            img {
              filter: brightness(1)
            }
          }

          p {
            font-weight: 400;
            font-size: size(13);
            letter-spacing: 0.06em;
            color: #000000;
            margin-bottom: size(12);
            white-space: nowrap
          }
          img {
            @apply duration-200 cursor-pointer;
            width: size(155);
            filter: brightness(.35);
          }
          &.active {
            img {
              filter: brightness(1)
            }
          }
        }

        .pagination {
          @apply flex absolute;
          left: 0;
          bottom: 0;
          gap: size(12.08);
          
          li {
            @apply cursor-pointer;
            width: size(28.95);
            height: size(2);
            border-radius: 100px;
            background-color: #D7D7D7;

          
            &.active {
              background-color: #C6A93E;
            }
          }
        }
      }
    }

    .tab-section {
      @apply flex flex-col items-center justify-center;
      width: size(55.19);
      height: size(678);
      background-color: #C6AA32;
      gap: size(12.48);
      .tab-item {
        @apply flex flex-col;
        gap: size(12.48);
        .title {
          width: size(17.75);
          transform: translateZ(0);
          image-rendering: pixelated;
          &:hover{
            filter: invert(100%);
            cursor: pointer;
          }
          &.active{
            filter: invert(100%);
          }
        }
        .slash {
          width: size(8.89);
          transform: translateZ(0);
          image-rendering: pixelated;
        }
        &.active {
          .title {
            filter: invert(100%);
          }
        }
      }
    }

    .slide-section {
    width: size(930);

    .slide-item {
      .cover{
        width: size(930);
      }
    }
  }
  }

}

@media screen and (max-width: 767px) {
.s7 {
  @apply justify-end;
  width: 100%;
  height: size-m(908);
  gap: size-m(0);


  .arrows {
    @apply absolute z-10;
    bottom: size-m(57.72);
    left: 0;
    gap: size-m(25);
    height: size-m(33);
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
    width: 100%;
    .line {
      width: size-m(1);
    }
    img {
      @apply cursor-pointer m-0 h-full;
    }
  }

  .pagination {
          @apply flex absolute z-10;
          top: size-m(332);
          right: size-m(15);
          gap: size-m(4.5);
          
          li {
            @apply cursor-pointer;
            width: size-m(12.26);
            height: size-m(2);
            border-radius: 100px;
            background-color: #D7D7D7;

          
            &.active {
              background-color: #C6A93E;
            }
          }
        }

  .main {
    @apply flex flex-col-reverse justify-start;
    font-family: 'Noto Sans TC';
    height: auto;

    .text {
      @apply relative flex flex-col justify-center;
      width: 100%;
      margin-right: 0;
      padding: size-m(42) size-m(30);
      .t1 {
        height: size-m(123);
        margin-bottom: size-m(25);
      }
      .t2 {
        font-size: size-m(14);
        line-height: size-m(31);
        margin-bottom: size-m(10);
      }
      .t3 {
        line-height: size-m(32);
        margin-bottom: 0;

        span {
          font-size: size-m(12);
          margin-right: size-m(12)
        }

        p {
          font-size: size-m(14);
        }
      }
    }

    .tab-section {
      @apply grid grid-cols-3;
      width: 100%;
      height: auto;
      background-color: #375637;
      gap: 0;
      .tab-item {
        @apply items-center justify-center;
        border-left: #fff 0.3px solid;
        border-bottom: #fff 0.3px solid;

        &:nth-child(4),&:nth-child(5),&:nth-child(06)
        {border-bottom:none;}

        &:nth-child(1),&:nth-child(4)
        {border-left:none;}
        
        gap: 0;
        height: size-m(47);
        .title {
          width: size-m(98.89);
          &:hover{
            filter: brightness(0) invert(1);
            cursor: pointer;
          }
          &.active{
            filter: brightness(0) invert(1);
          }
        }
        &.active {
          background-color: #C6A93E;
          .title {
            filter: brightness(0) invert(1);
          }
        }
      }
    }

    .slide-section {
    width: 100%;

    .slide-item {
      .cover{
        width: 100%;
      }
    }
  }
  }


}
}
</style>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
import inView from 'in-view';


const globals = getCurrentInstance().appContext.config.globalProperties;
const splideRef = ref(null);
const activeIndex = ref(0);
const activeTitle = ref(0);
const imgs = [
  {
    title: globals.$isMobile() ? new URL("../section/s7/1/t_m.svg", import.meta.url).href : new URL("../section/s7/1/t.svg", import.meta.url).href,
    t1: globals.$isMobile() ? new URL("../section/s7/1/t1_m.svg", import.meta.url).href : new URL("../section/s7/1/t1.svg", import.meta.url).href,
    t2: '國立成功大學建築研究所碩士，志在實踐建築理想性，視環境為生活本質，爬梳土地紋理，再極大化基地優勢，淬鍊透天層疊通透概念，帶入宗大敘山的四季與晝夜，體現永續建築的時空觀。榮獲高雄厝綠建築大獎、建築園冶獎常勝軍。',
    work: '超美大地松露、敦王臻品、萬吉森粼、合心若樸、頂記園丰景、可寧衛企業總部',
    imgs: [
      {
        url: globals.$isMobile() ? new URL("../section/s7/1/1_m.jpg", import.meta.url).href : new URL("../section/s7/1/1.jpg", import.meta.url).href,
        caption: '建築師｜朱文明'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/1/2_m.jpg", import.meta.url).href : new URL("../section/s7/1/2.jpg", import.meta.url).href,
        caption: '業績｜園丰景'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/1/3_m.jpg", import.meta.url).href : new URL("../section/s7/1/3.jpg", import.meta.url).href,
        caption: '業績｜若樸'
      },
    ]
  },
  {
    title: globals.$isMobile() ? new URL("../section/s7/2/t_m.svg", import.meta.url).href : new URL("../section/s7/2/t.svg", import.meta.url).href,
    t1: globals.$isMobile() ? new URL("../section/s7/2/t1_m.svg", import.meta.url).href : new URL("../section/s7/2/t1.svg", import.meta.url).href,
    t2: '倡議擘劃「素顏即是美」的自然節氣建築，精琢空間的規劃巧思，主張「師法自然、順其自然、自然而然」，汲取高雄厝的通透哲學，納入宗大敘山公共空間，讓仰望天空成為日常。作品屢次榮獲高雄建築園冶獎肯定。',
    work: '頂記園丰景、居富植見築、合心若樸、日大雍禾、可寧衛企業總部',
    imgs: [
      {
        url: globals.$isMobile() ? new URL("../section/s7/2/1_m.jpg", import.meta.url).href : new URL("../section/s7/2/1.jpg", import.meta.url).href,
        caption: '設計師｜林怡良'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/2/2_m.jpg", import.meta.url).href : new URL("../section/s7/2/2.jpg", import.meta.url).href,
        caption: '業績｜雍和'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/2/3_m.jpg", import.meta.url).href : new URL("../section/s7/2/3.jpg", import.meta.url).href,
        caption: '業績｜居富植見築'
      },
    ]
  },
  {
    title: globals.$isMobile() ? new URL("../section/s7/3/t_m.svg", import.meta.url).href : new URL("../section/s7/3/t.svg", import.meta.url).href,
    t1: globals.$isMobile() ? new URL("../section/s7/3/t1_m.svg", import.meta.url).href : new URL("../section/s7/3/t1.svg", import.meta.url).href,
    t2: '美國耶魯大學建築研究所環境設計碩士。秉持實用、平衡、協調的「減法設計」規劃原則，譜寫夜色中的建築詩句，曾獲德國iF Design Award全球住宅建築獎、英國IPA亞太最佳住宅建築獎、2020台灣光環境獎。',
    work: '台南河樂廣場、磐鈺雲華',
    imgs: [
      {
        url: globals.$isMobile() ? new URL("../section/s7/3/1_m.jpg", import.meta.url).href : new URL("../section/s7/3/1.jpg", import.meta.url).href,
        caption: '燈光設計師｜洪立涵'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/3/2_m.jpg", import.meta.url).href : new URL("../section/s7/3/2.jpg", import.meta.url).href,
        caption: '業績｜台南河樂廣場'
      }
    ]
  },
  {
    title: globals.$isMobile() ? new URL("../section/s7/4/t_m.svg", import.meta.url).href : new URL("../section/s7/4/t.svg", import.meta.url).href,
    t1: globals.$isMobile() ? new URL("../section/s7/4/t1_m.svg", import.meta.url).href : new URL("../section/s7/4/t1.svg", import.meta.url).href,
    t2: '於1995年創立南台灣最具規模土木及結構技師聯合事務所，集結台大、成大土木工程碩士菁英，結合專業學理與使用者體驗設計，從超高層豪宅、道路橋樑公共工程，到科技廠房，為建築找到最安心的結構設計方案。',
    work: '日月光半導體廠房、高雄大立精品百貨、華友聯集團總部',
    imgs: [
      {
        url: globals.$isMobile() ? new URL("../section/s7/4/1_m.jpg", import.meta.url).href : new URL("../section/s7/4/1.jpg", import.meta.url).href,
        caption: '結構技師｜朱鑫龍'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/4/2_m.jpg", import.meta.url).href : new URL("../section/s7/4/2.jpg", import.meta.url).href,
        caption: '業績｜華友聯總部大樓'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/4/3_m.jpg", import.meta.url).href : new URL("../section/s7/4/3.jpg", import.meta.url).href,
        caption: '業績｜高雄大立精品百貨'
      },
    ]
  },
  {
    title: globals.$isMobile() ? new URL("../section/s7/5/t_m.svg", import.meta.url).href : new URL("../section/s7/5/t.svg", import.meta.url).href,
    t1: globals.$isMobile() ? new URL("../section/s7/5/t1_m.svg", import.meta.url).href : new URL("../section/s7/5/t1.svg", import.meta.url).href,
    t2: '亞洲第一間雜誌圖書館，收藏超過6萬本建築、設計、時尚、音樂、藝術、生活風格的國內、外雜誌。專屬社區選書服務，客製選冊，定期更新，創造靈感的場所，將閱讀融入日常，讓知識成為生活繆思，是家，也是Boven微型分館。',
    work: '',
    imgs: [
      {
        url: globals.$isMobile() ? new URL("../section/s7/5/1_m.jpg", import.meta.url).href : new URL("../section/s7/5/1.jpg", import.meta.url).href,
        caption: '風格選書｜Boven 台南館'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/5/2_m.jpg", import.meta.url).href : new URL("../section/s7/5/2.jpg", import.meta.url).href,
        caption: '業績｜Boven 台南館'
      },
    ]
  },
  {
    title: globals.$isMobile() ? new URL("../section/s7/6/t_m.svg", import.meta.url).href : new URL("../section/s7/6/t.svg", import.meta.url).href,
    t1: globals.$isMobile() ? new URL("../section/s7/6/t1_m.svg", import.meta.url).href : new URL("../section/s7/6/t1.svg", import.meta.url).href,
    t2: '社區導入台南指標飯店「台南晶英酒店」獨創新興雲端管家，為社區量身訂製年度體驗課程、提供豐富的生活選物提案，將飯店頂級服務延伸到府，鐫刻有別以往的精緻生活，為日常生活創造心靈層次的品味價值。',
    work: '',
    imgs: [
      {
        url: globals.$isMobile() ? new URL("../section/s7/6/1_m.jpg", import.meta.url).href : new URL("../section/s7/6/1.jpg", import.meta.url).href,
        caption: '雲端管家｜台南晶英酒店'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/6/2_m.jpg", import.meta.url).href : new URL("../section/s7/6/2.jpg", import.meta.url).href,
        caption: '業績｜台南晶英酒店'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s7/6/3_m.jpg", import.meta.url).href : new URL("../section/s7/6/3.jpg", import.meta.url).href,
        caption: '業績｜台南晶英酒店'
      },
    ]
  },
]

const onMove = (e1, e2, e3) => {
  activeIndex.value = e2;
}

const next = () => {
  if (activeTitle.value + 1 < imgs.length) {
    activeTitle.value++
  } else {
    activeTitle.value = 0
  }
  activeIndex.value = 0
  splideRef.value.splide.go(0);
}

const prev = () => {
  if (activeTitle.value - 1 >= 0) {
    activeTitle.value--
  } else {
    activeTitle.value = imgs.length - 1
  }

  activeIndex.value = 0
  splideRef.value.splide.go(0);
}

let playInterval;
const isInView = ref(false);

onMounted(() => {
  inView('.s7')
    .on('enter', () => {
      setTimeout(() => {
        isInView.value = true;
      }, 200);
    })
    .on('exit', () => {
      isInView.value = false;
      activeIndex.value = 0
      activeTitle.value = 0
      clearInterval(playInterval)
    });
})
</script>
