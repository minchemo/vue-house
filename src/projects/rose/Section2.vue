<template>
  <div class="section2">
    <div class="sub-section">
      <div class="flex">
        <div
          class="txt"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="0"
        >
          <h2 v-if="!isMobile">知名景點不遠求<br />散步距離能擁有</h2>
          <h2 v-if="isMobile">知名景點不遠求</h2>
          <p>
            十三行博物館、挖仔尾生態富教育意義，渡船頭老街觀山面海，米飛公園打個卡，不須忍受塞車擁擠，散步就到好愜意。
          </p>
        </div>

        <swiper :options="swiperOptions" :instanceName="1">
          <swiper-slide
            v-for="item of swiperList"
            :key="item.id"
            :style="{ backgroundImage: `url(${item.imgUrl})` }"
            data-aos="fade-up"
          >
            <p>{{ item.title }}</p>
          </swiper-slide>
          <div
            v-if="isMobile"
            class="swiper-button-prev"
            slot="button-prev"
          ></div>
          <div
            v-if="isMobile"
            class="swiper-button-next"
            slot="button-next"
          ></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <img class="draw" src="~@/projects/rose/s2/draw.png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section2 {
  width: 100%;
  height: auto;

  .sub-section {
    height: 100vh;
    position: relative;

    .flex {
      height: 100%;
      align-items: center;

      .txt {
        width: 30%;
        padding: 0 6vw 0 6vw;
        h2 {
          font-size: 34px;
          letter-spacing: 2px;
          line-height: 1.2;
          color: #b61937;
          font-weight: bold;
          white-space: nowrap;
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          line-height: 1.5;
          font-weight: bold;
        }
      }
    }

    .draw {
      position: absolute;
      left: 0;
      bottom: -25vw;
      width: 50vw;
    }
  }

  .swiper-container {
    width: 70%;
    padding: 0;

    .swiper-slide {
      height: 75vh;
      border-radius: 0;

      p {
        color: #fff;
        letter-spacing: 3px;
        line-height: 1.5;
        position: absolute;
        transition: all 0.3s;
        opacity: 1;
        font-size: 24px;
        right: 15px;
        bottom: 10px;
        text-align: justify;
        text-align-last: center;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0.8));
      }
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    width: 100%;
    height: auto;

    .sub-section {
      height: auto;
      position: relative;

      .flex {
        height: 100%;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;

        .txt {
          width: 100%;
          padding: 0 6vw;
          margin: 6vw 0;

          h2 {
            font-size: 24px;
            letter-spacing: 2px;
            line-height: 1.2;
            color: #b61937;
            font-weight: bold;
            white-space: nowrap;
            margin-bottom: 20px;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            font-weight: bold;
          }
        }
      }

      .draw {
        display: none;
      }
    }

    .swiper-container {
      width: 100%;
      padding: 0;

      .swiper-slide {
        height: 40vh;
        border-radius: 0;

        p {
          color: #fff;
          letter-spacing: 3px;
          line-height: 1.5;
          position: absolute;
          transition: all 0.3s;
          opacity: 1;
          font-size: 16px;
          right: 15px;
          bottom: 10px;
          text-align: justify;
          text-align-last: center;
          filter: drop-shadow(0 0 5px rgba(0, 0, 0.8));
        }
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
  name: "section2",

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
          imgUrl: require("./s2/1.jpg"),
          title: "十三行博物館"
        },
        {
          id: "0002",
          imgUrl: require("./s2/2.jpg"),
          title: "挖仔尾生態保留區"
        },
        {
          id: "0003",
          imgUrl: require("./s2/3.jpg"),
          title: "八里渡船碼頭"
        },
        {
          id: "0004",
          imgUrl: require("./s2/4.jpg"),
          title: "觀海大道商圈"
        }
      ],
      swiperList2: [
        {
          id: "0001",
          imgUrl: require("./s1/m-a.jpg"),
          title: "64快速道路"
        },
        {
          id: "0002",
          imgUrl: require("./s1/m-b.jpg"),
          title: "61快速道路"
        },
        {
          id: "0003",
          imgUrl: require("./s1/m-c.jpg"),
          title: "淡江大橋施工圖"
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
