<template>
  <div class="section5">
    <div class="sub-section">
      <div
        class="swiper-box"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <swiper :options="swiperOptions" :instanceName="1">
          <swiper-slide
            v-for="item of swiperList"
            :key="item.id"
            :style="{ backgroundImage: `url(${item.imgUrl})` }"
          >
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="title">中庭花園3D參考圖</div>
      </div>
      <div
        class="title2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <h2>稀有700坪立體花園劇場</h2>
        <p>
          區域內少有之700坪大中庭規劃，彎曲、流動、高低、富有層次的花園設計，四季流動的自然風光，每一處轉角都有驚喜。
        </p>
        <img
          class="draw1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
          src="~@/projects/rose/s5/draw1.png"
          alt=""
        />
        <img
          class="draw2"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="0"
          src="~@/projects/rose/s5/draw2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section5 {
  width: 100%;
  height: auto;
  margin-top: 50px;

  .sub-section {
    height: auto;
    position: relative;
  }

  .swiper-box {
    position: relative;

    .title {
      position: absolute;
      left: 20px;
      bottom: 15px;
      color: #fff;
      font-size: 20px;
      letter-spacing: 2px;
      z-index: 15;
    }
  }

  .swiper-container {
    .swiper-slide {
      height: 500px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      height: 100% !important;
      top: 0;
      margin: 0;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 0 !important;
      width: 7vw !important;
    }

    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      right: 0px;
    }

    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      left: 0px;
    }
  }

  .title2 {
    width: 100%;
    position: relative;
    margin: 0 auto;
    line-height: 1.2;
    padding: 50px 0;

    h2 {
      color: #b61937;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    p {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .draw1 {
      width: 12vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .draw2 {
      width: 15vw;
      position: absolute;
      right: 5vw;
      bottom: 0;
      z-index: 20;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section5 {
    width: 100%;
    height: auto;

    .sub-section {
      height: auto;
      position: relative;
    }

    .swiper-container {
      .swiper-slide {
        height: 300px;
      }
    }

    .title2 {
      width: 100%;
      position: relative;
      margin: 0 auto;
      line-height: 1.2;
      padding: 50px 20px;

      h2 {
        color: #b61937;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: justify;
        text-align-last: center;
      }

      .draw1 {
        width: 20vw;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      .draw2 {
        width: 30vw;
        position: absolute;
        right: 5vw;
        bottom: 37vw;
        z-index: 20;
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
  name: "section5",

  data() {
    return {
      isMobile,
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: false,
        speed: 1000,
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperOptions2: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: true,
        speed: 1000,
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("./s5/1.jpg"),
          title: "中庭花園3D參考圖"
        },
        {
          id: "0002",
          imgUrl: require("./s5/1.jpg"),
          title: "中庭花園3D參考圖"
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

  created() {}
};
</script>
