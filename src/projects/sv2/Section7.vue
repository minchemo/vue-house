<template>
  <div class="section7">
    <swiper :options="swiperOptions" :instanceName="8">
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id"
        :style="{ backgroundImage: `url(${item.imgUrl})` }"
      >
        <p>{{ item.title }}</p>
      </swiper-slide>
      <div v-if="isMobile" class="swiper-button-prev" slot="button-prev"></div>
      <div v-if="isMobile" class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="title">
      <svg
        v-if="!isMobile"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 386 563.53"
      >
        <g id="圖層_2" data-name="圖層 2">
          <g id="圖層_1-2" data-name="圖層 1">
            <text class="cls-1" transform="translate(21.45 32.72)">
              和孩子一起 盡情快樂
            </text>
            <text class="cls-1" transform="translate(44.29 233.22)">
              台灣蔦屋合作選冊
            </text>
            <text class="cls-2">
              <tspan x="0" y="274.27">日系品牌設計美</tspan>
              <tspan class="cls-3" x="154" y="274.27">學，</tspan>
              <tspan x="188" y="274.27">讓閱讀時刻更有質感</tspan>
              <tspan x="50" y="315.27">以書籍為中心的美好生活提案</tspan>
              <tspan x="26" y="356.27">打造連</tspan>
              <tspan class="cls-4" x="92" y="356.27">接</tspan>
              <tspan class="cls-5" x="104.38" y="356.27">「人</tspan>
              <tspan class="cls-6" x="147.62" y="356.27">」與</tspan>
              <tspan class="cls-5" x="172.38" y="356.27">「</tspan>
              <tspan x="194" y="356.27">夢</tspan>
              <tspan class="cls-7" x="216" y="356.27">想</tspan>
              <tspan class="cls-6" x="237.62" y="356.27">」</tspan>
              <tspan x="250" y="356.27">的幸福聚所</tspan>
            </text>
            <circle class="cls-8" cx="191" cy="110.19" r="55" />
            <circle class="cls-9" cx="195" cy="108.19" r="55" />
            <text class="cls-10" transform="translate(174.85 100.59)">
              蔦屋
              <tspan x="-11" y="30">悅覽室</tspan>
            </text>
            <circle class="cls-9" cx="128.5" cy="432.19" r="55" />
            <circle class="cls-11" cx="132.5" cy="430.19" r="55" />
            <text class="cls-12" transform="translate(112.35 422.59)">
              悅樂
              <tspan x="-11" y="30">遊戲室</tspan>
            </text>
            <circle class="cls-9" cx="269.5" cy="432.19" r="55" />
            <circle class="cls-11" cx="273.5" cy="430.19" r="55" />
            <text class="cls-12" transform="translate(253.35 422.59)">
              悅音
              <tspan x="-11" y="30">練琴房</tspan>
            </text>
          </g>
        </g>
      </svg>

      <svg
        v-if="isMobile"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 326.52 557.53"
      >
        <g id="圖層_2" data-name="圖層 2">
          <g id="圖層_1-2" data-name="圖層 1">
            <text class="cls-1" transform="translate(26.06 26.4)">
              和孩子一起 盡情快樂
            </text>
            <text class="cls-1" transform="translate(43.26 232.9)">
              台灣蔦屋合作選冊
            </text>
            <text class="cls-2" transform="translate(8.1 277.27)">
              日系品牌設計美
              <tspan class="cls-3" x="123.2" y="0">學，</tspan>
              <tspan x="150.4" y="0">讓閱讀時刻更有質感</tspan>
              <tspan x="40" y="30">以書籍為中心的美好生活提案</tspan>
              <tspan x="20.8" y="60">打造連</tspan>
              <tspan class="cls-4" x="73.6" y="60">接</tspan>
              <tspan class="cls-5" x="83.5" y="60">「人</tspan>
              <tspan class="cls-4" x="118.1" y="60">」與</tspan>
              <tspan class="cls-5" x="137.9" y="60">「</tspan>
              <tspan x="155.2" y="60">夢</tspan>
              <tspan class="cls-5" x="172.8" y="60">想</tspan>
              <tspan class="cls-4" x="190.1" y="60">」</tspan>
              <tspan class="cls-6" x="200" y="60">的幸福聚所</tspan>
            </text>
            <circle class="cls-7" cx="160.5" cy="117.19" r="55" />
            <circle class="cls-8" cx="164.5" cy="115.19" r="55" />
            <text class="cls-9" transform="translate(144.35 107.59)">
              蔦屋
              <tspan x="-11" y="30">悅覽室</tspan>
            </text>
            <circle class="cls-8" cx="90" cy="426.19" r="55" />
            <circle class="cls-10" cx="94" cy="424.19" r="55" />
            <text class="cls-11" transform="translate(73.85 416.59)">
              悅樂
              <tspan x="-11" y="30">遊戲室</tspan>
            </text>
            <circle class="cls-8" cx="231" cy="426.19" r="55" />
            <circle class="cls-10" cx="235" cy="424.19" r="55" />
            <text class="cls-11" transform="translate(214.85 416.59)">
              悅音
              <tspan x="-11" y="30">練琴房</tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section7 {
  width: 100%;
  height: 70vw;
  background-color: rgba(96, 96, 96, 0.2);

  .title {
    background: #b59668;
    width: 30vw;
    height: 28vw;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 10vw;
    transform: translateY(-50%);

    svg {
      position: relative;
      width: 60%;
      top: 50%;
      transform: translateY(-45%);

      .cls-1 {
        font-size: 37.18px;
        font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
      }
      .cls-1,
      .cls-12,
      .cls-9 {
        fill: #f4f1f2;
      }
      .cls-10,
      .cls-12,
      .cls-2 {
        font-size: 20px;
        font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
        letter-spacing: 0.1em;
      }
      .cls-2 {
        fill: #fff;
      }
      .cls-3 {
        letter-spacing: -0.15em;
      }
      .cls-4 {
        letter-spacing: -0.38em;
      }
      .cls-5 {
        letter-spacing: 0.08em;
      }
      .cls-6 {
        letter-spacing: -0.38em;
      }
      .cls-7 {
        letter-spacing: 0.08em;
      }
      .cls-8 {
        fill: none;
      }
      .cls-11,
      .cls-8 {
        stroke: #f4f1f2;
        stroke-miterlimit: 10;
      }
      .cls-10,
      .cls-11 {
        fill: #b59668;
      }
    }
  }

  .swiper-container {
    width: 70vw;
    top: 50%;
    right: 0;
    transform: translateY(-50%) translateX(8vw);

    .swiper-slide {
      height: 50vw;
      background-size: cover;
      background-position: center center;

      p {
        color: #fff;
        position: absolute;
        right: 15px;
        bottom: 15px;
        letter-spacing: 1px;
      }
    }

    .swiper-button-next {
      color: #fff;
      width: 50px;
      height: 50px;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 100%;
      &:after {
        font-size: 20px;
        font-weight: bolder;
      }
    }

    .swiper-button-prev {
      color: #fff;
      width: 50px;
      height: 50px;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 100%;
      &:after {
        font-size: 20px;
        font-weight: bolder;
      }
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section7 {
    width: 100vw;
    height: 250vw;
    margin-top: 0vw;

    .title {
      width: 100%;
      height: 150vw;
      position: absolute;
      z-index: 1;
      top: 0;
      left: unset;
      transform: unset;

      svg {
        position: relative;
        width: 90%;
        top: 50%;
        transform: translateY(-45%);

        .cls-1 {
          font-size: 30px;
          font-weight: bold;
          font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
        }
        .cls-1,
        .cls-11,
        .cls-8 {
          fill: #f4f1f2;
        }
        .cls-2 {
          font-size: 16px;
          fill: #fff;
          letter-spacing: 0.1em;
        }
        .cls-11,
        .cls-2,
        .cls-9 {
          font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
        }
        .cls-3 {
          letter-spacing: -0.15em;
        }
        .cls-4 {
          letter-spacing: -0.38em;
        }
        .cls-5 {
          letter-spacing: 0.08em;
        }
        .cls-6 {
          letter-spacing: 0.1em;
        }
        .cls-7 {
          fill: none;
        }
        .cls-10,
        .cls-7 {
          stroke: #f4f1f2;
          stroke-miterlimit: 10;
        }
        .cls-11,
        .cls-9 {
          font-size: 20px;
          letter-spacing: 0.1em;
        }
        .cls-10,
        .cls-9 {
          fill: #b59668;
        }
      }
    }

    .swiper-container {
      width: 100%;
      top: 100%;
      transform: translateY(-100%);
      .swiper-slide {
        height: 100vw;
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";

export default {
  name: "section7",
  data() {
    return {
      isMobile,
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: true,
        speed: 100,
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: !isMobile ? require("./s7/1.jpg") : require("./s7/mo/1.jpg"),
          title: ""
        },
        {
          id: "0002",
          imgUrl: !isMobile ? require("./s7/2.jpg") : require("./s7/mo/2.jpg"),
          title: ""
        },
        {
          id: "0003",
          imgUrl: !isMobile ? require("./s7/3.jpg") : require("./s7/mo/3.jpg"),
          title: ""
        }
      ]
    };
  },
  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    }
  },
  created() {},
  mounted() {}
};
</script>
