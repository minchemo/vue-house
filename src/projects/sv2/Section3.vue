<template>
  <div class="section3">
    <svg
      class="t1"
      v-if="!isMobile"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 892.6 500.38"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
      >
      <text class="cls-1">
        <tspan class="bold" x="280.86" y="106.82">美好旅程，始於家裡</tspan>
        <tspan class="cls-3">
          <tspan x="354.17" y="192.44">近雙</tspan>
          <tspan class="cls-4" x="402.57" y="192.44">捷、</tspan>
          <tspan x="439.97" y="192.44">騎UBi</tspan>
          <tspan class="cls-5" x="509.91" y="192.44">k</tspan>
          <tspan x="525.31" y="192.44">e</tspan>
        </tspan>
        <tspan class="cls-6">
          <tspan x="160.3" y="233.44">將旅行的樂趣帶到家門</tspan>
          <tspan class="cls-7" x="380.3" y="233.44">前，</tspan>
          <tspan x="414.3" y="233.44">為下一趟精彩旅</tspan>
          <tspan class="cls-7" x="568.3" y="233.44">程，</tspan>
          <tspan x="602.3" y="233.44">啟發無限靈感</tspan>
        </tspan>
        <tspan class="cls-3">
          <tspan x="357.36" y="315.44">體驗/城市與旅行</tspan>
        </tspan>
        <tspan class="cls-6">
          <tspan x="274.53" y="356.44">A7捷運站1.3KM | A8捷運站2.1KM</tspan>
          <tspan x="274.57" y="397.44">
            UBIKE下樓就到 | 林口交流道7分鐘
          </tspan>
          <tspan x="259.3" y="438.44">壽山</tspan>
          <tspan class="cls-7" x="303.3" y="438.44">路、</tspan>
          <tspan x="337.3" y="438.44">青山</tspan>
          <tspan class="cls-7" x="381.3" y="438.44">路、</tspan>
          <tspan x="415.3" y="438.44">振興路聯外交通金三角</tspan>
        </tspan>
      </text>
      <rect class="cls-8" x="351.64" y="200" width="185" height="0.5" />
      <rect class="cls-8" x="351.64" y="166" width="185" height="0.5" />
      <rect class="cls-8" x="351.64" y="328" width="185" height="0.5" />
      <rect class="cls-8" x="351.64" y="289" width="185" height="0.5" />
    </svg>

    <svg
      v-if="isMobile"
      class="t1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 326.4 360"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="2000"
    >
      <g id="圖層_2" data-name="圖層 2">
        <g id="圖層_1-2" data-name="圖層 1">
          <text class="cls-1" transform="translate(29 26.4)">
            <tspan class="bold">
              美好旅
              <tspan class="cls-2" x="90" y="0">程，</tspan>
              <tspan x="147" y="0">始於家裡</tspan>
            </tspan>
            <tspan class="cls-3"><tspan x="133.5" y="25"></tspan></tspan>
            <tspan class="cls-4">
              <tspan x="41.38" y="66">近雙</tspan>
              <tspan class="cls-5" x="89.78" y="66">捷、</tspan>
              <tspan x="127.18" y="66">騎UBi</tspan>
              <tspan class="cls-6" x="197.11" y="66">k</tspan>
              <tspan x="212.51" y="66">e</tspan>
            </tspan>
            <tspan class="cls-7">
              <tspan x="-29" y="107">將旅行的樂趣帶到家門</tspan>
              <tspan class="cls-8" x="147" y="107">前，</tspan>
              <tspan class="cls-9" x="174.2" y="107">為下一趟精彩旅</tspan>
            </tspan>
            <tspan class="cls-10">
              <tspan x="67.9" y="137">程，</tspan>
              <tspan class="cls-9" x="95.1" y="137">啟發無限靈感</tspan>
            </tspan>
            <tspan class="cls-11"><tspan x="133.5" y="162"></tspan></tspan>
            <tspan class="cls-4">
              <tspan x="44.56" y="203">體驗/城市與旅行</tspan>
            </tspan>
            <tspan class="cls-7">
              <tspan x="-3.91" y="244">A7捷運站1.3KM | A8捷運站2.1KM</tspan>
              <tspan x="-3.88" y="274">UBIKE下樓就到 | 林口交流道7分鐘</tspan>
              <tspan x="-16.1" y="304">壽山</tspan>
              <tspan class="cls-8" x="19.1" y="304">路、</tspan>
              <tspan x="46.3" y="304">青山</tspan>
              <tspan class="cls-12" x="81.5" y="304">路、</tspan>
              <tspan x="108.7" y="304">振興路聯外交通金三角</tspan>
            </tspan>
          </text>
          <rect class="cls-13" x="69.37" y="101.92" width="185" height="0.5" />
          <rect class="cls-13" x="69.37" y="67.92" width="185" height="0.5" />
          <rect class="cls-13" x="69.37" y="237.92" width="185" height="0.5" />
          <rect class="cls-13" x="69.37" y="203.92" width="185" height="0.5" />
        </g>
      </g>
    </svg>
    <img class="cloud" src="~@/projects/sv2/s3/cloud.png" alt="" />

    <swiper :options="swiperOptions" :instanceName="1">
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id"
        :style="{ backgroundImage: `url(${item.imgUrl})` }"
        data-aos="fade-up"
      >
        <p>{{ item.title }}</p>
      </swiper-slide>
      <div v-if="isMobile" class="swiper-button-prev" slot="button-prev"></div>
      <div v-if="isMobile" class="swiper-button-next" slot="button-next"></div>
      <div v-if="isMobile" class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section3 {
  width: 100%;
  height: 70vw;
  background-color: rgba(96, 96, 96, 0.2);

  .cloud {
    width: 40vw;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.4;
  }

  .t1 {
    position: absolute;
    width: 50vw;
    left: calc(50% - 25vw);
    top: 10vw;

    .cls-1 {
      font-size: 37.18px;
      fill: #b59668;
      font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
      .bold {
        font-weight: bold;
      }
    }
    .cls-2 {
      letter-spacing: -0.05em;
    }
    .cls-3 {
      font-size: 22px;
      letter-spacing: 0.1em;
    }
    .cls-3,
    .cls-6 {
      fill: #606060;
    }
    .cls-4 {
      letter-spacing: -0.15em;
    }
    .cls-5 {
      letter-spacing: 0.07em;
    }
    .cls-6 {
      font-size: 20px;
      font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
      letter-spacing: 0.1em;
    }
    .cls-7 {
      letter-spacing: -0.15em;
    }
  }

  .swiper-container {
    top: 100%;
    transform: translateY(-100%);

    .swiper-slide {
      height: 25vw;
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
  .section3 {
    width: 100vw;
    height: 200vw;

    .cloud {
      width: 40vw;
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0.4;
    }

    .t1 {
      position: absolute;
      width: 80vw;
      top: 10vw;
      left: calc(50% - 80vw * 0.5);

      .cls-1 {
        font-size: 30px;
        fill: #b59668;
        font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
        .bold {
          font-weight: bold;
        }
      }
      .cls-2 {
        letter-spacing: -0.05em;
      }
      .cls-3 {
        font-size: 37.18px;
        font-family: NotoSansCJKtc-Regular, NotoSansCJKtc Regular-B5pc-H;
      }
      .cls-10,
      .cls-11,
      .cls-3,
      .cls-4,
      .cls-7 {
        fill: #606060;
      }
      .cls-4 {
        font-size: 22px;
        letter-spacing: 0.1em;
      }
      .cls-5 {
        letter-spacing: -0.15em;
      }
      .cls-6 {
        letter-spacing: 0.07em;
      }
      .cls-10,
      .cls-7 {
        font-size: 16px;
      }
      .cls-10,
      .cls-11,
      .cls-7 {
        font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
      }
      .cls-7 {
        letter-spacing: 0.1em;
      }
      .cls-8 {
        letter-spacing: -0.15em;
      }
      .cls-9 {
        letter-spacing: 0.1em;
      }
      .cls-10,
      .cls-12 {
        letter-spacing: -0.15em;
      }
      .cls-11 {
        font-size: 20px;
        letter-spacing: 0.1em;
      }
      .cls-13 {
        fill: none;
        stroke: #606060;
        stroke-miterlimit: 10;
      }
    }

    .swiper-container {
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
  name: "section3",
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
        speed: 1000,
        slidesPerView: isMobile ? 1 : 4,
        spaceBetween: isMobile ? 0 : 5,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("./s3/1.jpg"),
          title: "中山高速道路"
        },
        {
          id: "0002",
          imgUrl: require("./s3/2.jpg"),
          title: "A7體育大學站"
        },
        {
          id: "0003",
          imgUrl: require("./s3/3.jpg"),
          title: "Youbike站"
        },
        {
          id: "0004",
          imgUrl: require("./s3/4.jpg"),
          title: "A7捷運站"
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
