<template>
  <article class="s3">
    <img v-if="!$isMobile()" data-aos="fade-up" data-aos-duration="800" class="title" src="@/section/s3/title.png"
      alt="" srcset="">
    <img v-else class="title" src="@/section/s3/title_m.png" alt="" srcset="">
    <div class="items" data-aos="fade-up" data-aos-duration="800">
      <div class="item" v-for="img, i in imgs" v-bind:class="{ active: i == activeIndex }">
        <img class="clickable" :src="img.btnImg" @click="activeIndex = i">
      </div>
    </div>
    <Splide :hasTrack="false" :key="activeIndex" ref="splideRef" :options="{
      type: 'loop', perPage: 1, arrows: false, autoplay: true, pauseOnHover: false, interval: 3000,
      classes: {
        page: 'splide__pagination__page clickable',
      },
    }" class="slide-section" data-aos="fade-up" data-aos-duration="800">

      <div class="slide-wrapper">
        <SplideTrack>
          <SplideSlide v-for="img, i in imgs[activeIndex].imgs" class="slide-item"
            v-bind:style="{ backgroundImage: `url('${img.url}')` }">
            <div class="caption">{{ img.caption }}</div>
          </SplideSlide>
        </SplideTrack>

        <ul class="splide__pagination"></ul>
      </div>
      <div class="text">
        <img :src="imgs[activeIndex].titleImg" alt="" srcset="">
        <p>{{ imgs[activeIndex].content }}</p>
      </div>
    </Splide>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s3 {
  @apply relative;
  width: 100%;
  height: 100vh;
  background-color: #304730;
  padding-top: size(287);

  .title {
    @apply absolute;
    width: size(703.35);
    top: size(86);
    right: size(177.65);
  }

  .items {
    @apply flex w-full relative items-center justify-center;
    .item {
      @apply text-center;
      height: size(59);
      width: size(419);
      border-right: size(1) solid #C6A93E;

      img {
        @apply md:h-full md:w-auto m-0 cursor-pointer;
      }

      &:last-child {
        border-right: 0;
      }

      &.active {
        img {
          filter: invert(58%) sepia(91%) saturate(293%) hue-rotate(10deg) brightness(95%) contrast(94%);
        }
      }
      
    }
  }

    .slide-section{
    @apply flex items-center justify-center;
    gap: size(123);
    margin-top: size(95.5);

    .slide-wrapper {
        flex-basis: size(865);
        height: size(501);
        .slide-item{
          @apply relative bg-cover bg-center;
          width: size(865);
          height: size(501);

          .caption{
            @apply absolute font-['noto_sans_tc'] text-white;
            font-weight: 400;
            font-size: size(15);
            right: size(20);
            bottom: size(10);
            letter-spacing: 0.06em;
            
          }
        }
    }
      .splide__pagination {
        @apply absolute bottom-0;
        right: size(190);
        gap: size(12);
        button {
          @apply rounded-full;
          width: size(28.95);
          height: size(2);
          background-color: #fff;
          &.is-active {
            background-color: #C6A93E;
          }
        }
      }
    }
    .text {
      width: size(575);

      img {
        height: size(114);
      }

      p {
        @apply font-['noto_sans_tc'];
        margin-top: size(62.8);
        font-weight: 400;
        font-size: size(17);
        line-height: size(50);
        letter-spacing: 0.06em;
        color: #FFFFFF;
        text-align: justify;
      }
    }
}

@media screen and (max-width: 767px) {
.s3 {
  height: size-m(1200);
  padding-top: size-m(89);

  .title {
    position: relative !important;
    display: block;
    width: size-m(208.83);
    top: unset;
    right: unset;
  }

  .items {
    margin: size-m(80) auto size-m(0);
    width: size-m(360);
    @apply flex-row;
    .item {
      @apply flex items-center justify-center; 
      
      height: size-m(60);
      width: size-m(200);
      
      border-right: size-m(1) solid #C6A93E;

      img {
        height: size-m(55);
      }

      &:last-child {
        border-right: 0;
      }
      
    }
  }

    .slide-section{
      @apply flex-col;
    gap: 0;
    margin-top: size-m(40);

    .slide-wrapper {
        flex-basis: size-m(320);
        width: 100%;
        height: auto;
        .slide-item{
          width: 100%;         
           height: size-m(320);

          .caption{
            font-size: size-m(12);
            right: size-m(10);
            bottom: size-m(10);
          }
        }
    }
      .splide__pagination {
        @apply relative md:absolute md:bottom-0;
        right: 0;
        gap: size-m(12);
        margin-top: size-m(15);
        button {
          @apply rounded-full;
          width: size-m(28.95);
          height: size-m(2);
        }
      }
    }
    .text {
      margin-top: size-m(71);
      width: size-m(295);

      img {
        @apply block;
        height: size-m(84.5);
      }

      p {
font-size: size-m(14);
line-height: size-m(35);
letter-spacing: 0.06em;
margin-top: size-m(45);
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
    btnImg: globals.$isMobile() ? new URL("../section/s3/01/title_m.png", import.meta.url).href : new URL("../section/s3/01/title.png", import.meta.url).href,
    titleImg: globals.$isMobile() ? new URL(`../section/s3/01/list_title_m.png`, import.meta.url).href : new URL(`../section/s3/01/list_title.png`, import.meta.url).href,
    imgs: [
      {
        
        url: globals.$isMobile() ? new URL("../section/s3/01/1_m.jpg", import.meta.url).href : new URL("../section/s3/01/1.png", import.meta.url).href,
        caption: '建築業績｜霞飛3'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s3/01/2.png", import.meta.url).href : new URL("../section/s3/01/2.png", import.meta.url).href,
        caption: '建築業績｜凌波揚+霞飛'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s3/01/3.png", import.meta.url).href : new URL("../section/s3/01/3.png", import.meta.url).href,
        caption: '建築業績｜陶裡原'
      },
    ],
    content: '宗大以建設起家，從1991年創立至今已超越半甲子。以「連結你我，發現生活」為理念，擘建逾50件建築作品，超過3000戶客戶幸福成家。通過ISO 9002國際品質認證，從透天、大樓，到大型造鎮，台南的繁榮發展處處皆可見到宗大建設蹤跡。'
  },
  {
    btnImg: globals.$isMobile() ? new URL("../section/s3/02/title_m.png", import.meta.url).href : new URL("../section/s3/02/title.png", import.meta.url).href,
    titleImg: globals.$isMobile() ? new URL(`../section/s3/02/list_title_m.png`, import.meta.url).href : new URL(`../section/s3/02/list_title.png`, import.meta.url).href,
    imgs: [
      {
        url: globals.$isMobile() ? new URL("../section/s3/02/3.png", import.meta.url).href : new URL("../section/s3/02/3.png", import.meta.url).href,
        caption: '小東路公宅基地實景'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s3/02/4_m.jpg", import.meta.url).href : new URL("../section/s3/02/4.jpg", import.meta.url).href,
        caption: '小東路青年公宅'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s3/02/2_m.jpg", import.meta.url).href : new URL("../section/s3/02/2.png", import.meta.url).href,
        caption: '建築業績｜出雲居'
      },
      
    ],
    content: '宗大深知，建築品質的關鍵在「營造」。為了加速溝通，精準落實施工，以自有營造廠「合新營造」專責宗大旗下建案。南臺灣知名甲級營造廠之一，承攬公共工程、校園新建等，更投入維冠重建工程「出雲居」，以及「小東路青年公宅」，實踐精工品質好生活。'
  },
  {
    btnImg: globals.$isMobile() ? new URL("../section/s3/03/title_m.png", import.meta.url).href : new URL("../section/s3/03/title.png", import.meta.url).href,
    titleImg: globals.$isMobile() ? new URL(`../section/s3/03/list_title_m.png`, import.meta.url).href : new URL(`../section/s3/03/list_title.png`, import.meta.url).href,
    imgs: [
      {
        url: globals.$isMobile() ? new URL("../section/s3/03/1.png", import.meta.url).href : new URL("../section/s3/03/1.png", import.meta.url).href,
        caption: '圓頂西餐廳'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s3/03/2.png", import.meta.url).href : new URL("../section/s3/03/2.png", import.meta.url).href,
        caption: '天下南隅'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s3/03/3.png", import.meta.url).href : new URL("../section/s3/03/3.png", import.meta.url).href,
        caption: '天下南隅'
      },
    ],
    content: '「天下南隅」以首排之姿，靜鄰赤崁樓。前身為達官顯貴短居台南首選的「天下大飯店」，積累超過半甲子時光後全面翻新，將府城人文底蘊化作設計養分，以時髦比例與層次，轉譯台南生活中最熟悉的元素，邀請旅人，以新潮的五感體驗，感受台南古今歲月。'
  },
  {
    btnImg: globals.$isMobile() ? new URL("../section/s3/04/title_m.png", import.meta.url).href : new URL("../section/s3/04/title.png", import.meta.url).href,
    titleImg: globals.$isMobile() ? new URL(`../section/s3/04/list_title_m.png`, import.meta.url).href : new URL(`../section/s3/04/list_title.png`, import.meta.url).href,
    imgs: [
      {                                                                  
        url: globals.$isMobile() ? new URL("../section/s3/04/3.jpg", import.meta.url).href : new URL("../section/s3/04/3.jpg", import.meta.url).href,
        caption: '吉源控股廣東廠'
      },
      {
        url: globals.$isMobile() ? new URL("../section/s3/04/2.jpg", import.meta.url).href : new URL("../section/s3/04/2.jpg", import.meta.url).href,
        caption: '吉源控股廈門廠'
      },
    ],
    content: '為實踐多角化經營，宗大董事長林漢清開設鐵鋁罐品牌「吉源控股」，設廠福建、湖北、安徽、廣東，主力客戶為泰山、雀巢咖啡、加多寶、銀鷺、達利等知名食品飲料大廠，年產能共超越30億罐，2016年在台上市，股票代號：吉源-KY，8488。'
  },
]

onMounted(() => {
  inView('.s3')
    .on('enter', () => {
      splideRef.value.splide.go(0)
    })
    .on('exit', () => {
    });
})

</script>
