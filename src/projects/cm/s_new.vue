<template>
  <article class="news">
    <div class="swiper-box" data-aos="zoom-in">
      <swiper :options="swiperOptions" ref="swiper" class="swiper-wrapper">
        <swiper-slide class="slide" v-for="(slide, i) in imgs" v-bind:key="i">
          <img class="cover" :src="slide.img" alt="" srcset="">
          <div class="text">
            <div class="t1">{{slide.title}}</div>
            <div class="t2"><a :href="slide.link" target="_blank">MORE</a> <span>#{{slide.tag}}</span></div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div data-aos="zoom-in" class="large-title"><span>NEWS</span></div>
    </div>
  </article>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";

/* 螢幕尺寸標準 */
.news {
  position: relative;
  width: 100%;
  height: size(1080);
  padding-top: size(100);

  .swiper-box {
    position: relative;
    width: size(1635);
    margin-right: 0;
    margin-left: auto;

    .swiper-wrapper {
      .slide {
        height: auto;

        .cover {
          width: auto;
          height: size(469.94);
        }

        .text {
          font-family: 'Noto Serif TC';
          border-left: size(5) solid #182C80;
          padding-left: size(24);
          margin-top: size(58);
          text-align: left;

          .t1 {
            font-size: size(35);
            line-height: size(50);
            color: #182C80;
            font-weight: bold;
          }

          .t2 {
            font-size: size(25);
            margin-top: size(30);

            a {
              text-decoration: none;
              color: #182C80;
              letter-spacing: size(10);
              margin-right: size(10);

              &:hover {
                opacity: 0.5;
              }
            }

            span {
              color: #4D4D4D;
            }
          }
        }
      }
    }

    .swiper-pagination {
      position: absolute;
      bottom: 24%;
      left: -#{size(50)};
      display: flex;
      flex-direction: column;

      .swiper-pagination-bullet {
        width: size(20.5);
        height: size(20.5);
        background-color: #fff;
        opacity: 1;
        border: 1.5px solid #182c80;
        margin-bottom: size(20);

        &.swiper-pagination-bullet-active {
          background-color: #182c80;
        }
      }
    }

    .large-title {
      position: absolute;
      left: size(-50);
      top: size(-80);
      z-index: 1;
      color: #182c80;
      font-size: size(104);
      letter-spacing: .17em;
      font-weight: 500;
      text-transform: uppercase;

      span {
        display: block;
        position: relative;
        transform-origin: 100% 0;
      }
    }

    .content {
      width: 100%;
      margin-top: size(100);
    }
  }

  .txt {
    margin-top: size(100);
    font-size: size(23);
    transform: scaleY(1);
    text-align: justify;
    line-height: 1.7;
    width: size(1350);
    letter-spacing: 0.1em;
    color: #444;
    font-family: "Noto Serif TC", sans-serif;
    font-weight: 600;

    .title {
      font-size: 1.5em;
      color: #182C80;
      float: left;
      font-weight: 500;
      display: block;
      padding: 0 0.5em 0 0;
      margin: 0 3em 0 0;
      border-right: 0.18em solid currentColor;
      font-family: "Noto Serif TC", sans-serif;
      font-weight: 800;
      text-align: right;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .news {
    height: size-m(450);
    padding-top: 0;

    .swiper-box {
      position: relative;
      width: size-m(302);
      margin-right: auto;

      .swiper-wrapper {
        .slide {
          .cover {
            height: size-m(214.58);
          }

          .text {
            border-left: size-m(3) solid #182C80;
            padding-left: size-m(14);
            margin-top: size-m(27);

            .t1 {
              font-size: size-m(18);
              line-height: size-m(27);

            }

            .t2 {
              font-size: size-m(16);
              margin-top: size-m(20);

              a {
                letter-spacing: size-m(5);
                margin-right: size-m(10);
              }

            }
          }
        }
      }

      .swiper-pagination {
        position: relative;
        top: 0;
        left: 0;
        bottom: unset;
        display: flex;
        flex-direction: row;
        margin-top: size-m(15);

        .swiper-pagination-bullet {
          width: size-m(9);
          height: size-m(9);
          background-color: #fff;
          opacity: 1;
          border: 1.5px solid #182c80;
          margin-bottom: 0;
          margin-top: size-m(10);
          margin-right: size-m(8);

          &.swiper-pagination-bullet-active {
            background-color: #182c80;
          }
        }
      }

      .large-title {
        right: size-m(0);
        margin-left: -#{size-m(100)};
        top: size-m(-35);
        font-size: size-m(50);

      }

      .content {
        width: 100%;
        margin-top: size-m(50);
      }
    }

    .txt {
      font-size: size-m(14);
      width: 100%;
      left: 10%;
      margin: auto;

      .title {
        font-size: 1.4em;
        padding: 0 0 0 0.5em;
        border-left: 0.18em solid currentColor;
        border-right: 0;
        float: none;
        text-align: left;
        margin: size-m(30) 0 .9em 0;
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "news",

  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      isMobile,
      swiperOptions: {
        loop: true,
        speed: 1000,
        spaceBetween: 50,
        slidesPerView: 1,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-nav .next",
          prevEl: ".swiper-nav .prev",
        },
        pagination: {
          el: ".news .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          500: {
            slidesPerView: 2.5,
          },
        }
      },
      imgs: [
        {
          title: '【影音】南山台南廣場、北外環加持隱富新核心成形',
          tag: '蘋果新聞網',
          link: 'https://www.appledaily.com.tw/property/20220708/D095D57182BB59E87E0B0C066F',
          img: require("@/projects/cm/news/1.jpg")
        },
        {
          title: '台南指標時尚！台南晶英酒店聯手藏美建設推出高端住宅「藏美表參道」',
          tag: '經濟日報',
          link: 'https://money.udn.com/money/story/5638/6480501',
          img: require("@/projects/cm/news/2.jpg")
        },
        {
          title: '南科上班族最喜歡買哪裡？網首推「這2地」：跟這建設買準沒錯！',
          tag: '好房網HouseFun News',
          link: 'https://news.housefun.com.tw/news/article/212723346671.html',
          img: require("@/projects/cm/news/3.jpg")
        },
        {
          title: '《台南房市新風向》北外環掀北區置產潮？南科新貴鎖定新商圈：市心資產才保值',
          tag: '商周.com',
          link: 'https://www.businessweekly.com.tw/business/indep/1002421',
          img: require("@/projects/cm/news/4.jpg")
        },
        {
          title: '「不失敗百貨」明年進駐 台南北區房價直衝5字頭',
          tag: 'ETtoday房產雲',
          link: 'https://house.ettoday.net/news/2274938',
          img: require("@/projects/cm/news/5.jpg")
        },
        {
          title: '【台南】鄭子寮富豪區當紅 都會新貴爭搶高質感輕豪宅',
          tag: '自由時報地產天下',
          link: 'https://estate.ltn.com.tw/article/14547',
          img: require("@/projects/cm/news/6.jpg")
        },

      ],
    };
  },

  methods: {},

  created() { },
};
</script>
