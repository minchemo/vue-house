<template>
  <div class="section6">
    <div class="sub-section">
      <div class="swiper-box">
        <swiper :options="swiperOptions" :instanceName="1">
          <swiper-slide
            v-for="item of swiperList"
            :key="item.id"
            :style="{ backgroundImage: `url(${item.imgUrl})` }"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div
          class="title"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <h2>單層排氣</h2>
          <p>各層規劃專屬排氣設備及管路<br />不會混雜樓上樓下別人的廢氣</p>
        </div>
      </div>

      <img
        class="draw1"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1000"
        src="~@/projects/rose/s6/draw.png"
        alt=""
      />
    </div>
    <div
      class="sub-section"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
      <div class="title2">
        <h2>VR格局圖</h2>
        <a target="_blank" href="#">Read more</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section6 {
  width: 100%;
  height: auto;

  .sub-section {
    height: auto;
    position: relative;

    &:nth-child(2) {
      height: 100vh;
      background: url(~@/projects/rose/s6/vr.jpg);
      background-size: cover;
      background-position: bottom;
      background-repeat: no-repeat;
    }
  }

  .swiper-box {
    position: relative;

    .title {
      position: absolute;
    }
  }

  .swiper-container {
    .swiper-slide {
      height: 100vh;
    }
    .swiper-pagination {
      padding-right: 2vw;
      text-align: right;
    }
  }

  .title {
    width: 30%;
    position: absolute;
    line-height: 1.2;
    top: 5vw;
    left: 5vw;
    z-index: 15;

    h2 {
      color: #b61937;
      font-size: 60px;
      font-weight: bold;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    p {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 1px;
      line-height: 2;
    }
  }

  .title2 {
    width: 30%;
    height: 100%;
    position: absolute;
    line-height: 1.2;
    top: 0;
    right: 5vw;
    z-index: 15;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 80px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #fff;
      margin-bottom: 40px;
    }

    a {
      font-size: 40px;
      color: #fff;
      text-decoration: none;
      border: 1px solid #fff;
      width: 250px;
      padding: 4px;
      transition: all 0.5s;

      &:hover {
        color: #1f7fb2;
        background: #fff;
      }
    }
  }

  .draw1 {
    width: 30vw;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 15;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section6 {
    width: 100%;
    height: auto;

    .sub-section {
      height: auto;
      position: relative;

      &:nth-child(2) {
        height: 250px;
        background: url(~@/projects/rose/s6/vr.jpg);
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;
      }
    }

    .swiper-box {
      position: relative;

      .title {
        position: absolute;
      }
    }

    .swiper-container {
      .swiper-slide {
        height: 250px;
      }
      .swiper-pagination {
        padding-right: 10vw;
        bottom: 20px !important;
        text-align: right;
      }
    }

    .title {
      width: 30%;
      position: absolute;
      line-height: 1.2;
      top: 5vw;
      left: 5vw;
      z-index: 15;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      flex-direction: row-reverse;
      pointer-events: none;

      h2 {
        color: #b61937;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-left: 10px;
        writing-mode: vertical-rl;
      }

      p {
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.5;
        writing-mode: vertical-rl;
      }
    }

    .title2 {
      width: 30%;
      height: 100%;
      position: absolute;
      line-height: 1.2;
      top: 0;
      right: 10vw;
      z-index: 15;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #fff;
        margin-bottom: 10px;
      }

      a {
        font-size: 16px;
        color: #fff;
        text-decoration: none;
        border: 1px solid #fff;
        width: auto;
        padding: 4px;
        transition: all 0.5s;

        &:hover {
          color: #1f7fb2;
          background: #fff;
        }
      }
    }

    .draw1 {
      display: none;
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
  name: "section6",

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
        autoplay: false,
        speed: 1000,
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("./s6/1.jpg"),
          title: "中庭花園3D參考圖"
        },
        {
          id: "0002",
          imgUrl: require("./s6/1.jpg"),
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
