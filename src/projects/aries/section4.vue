<template>
  <div class="section4">
    <div class="bg bg1"></div>
    <div v-if="isMobile" class="bg bg1 wave"></div>
    <div class="bg bg2"></div>
    <div
      class="building"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
    ></div>
    <div
      class="building-title"
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <img
        class="title"
        src="~@/projects/aries/s4/title0.png"
        alt=""
        srcset=""
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
      />
      <p
        class="content"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        漫步行旅，邂逅美好旅居生活，<br />
        同時擁有太平洋斷層海岸、三面山巒疊翠，<br />
        享受山海、水陸的雙棲渡假生活。
      </p>
      <img
        class="para"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="1000"
        src="~@/projects/aries/s4/style.png"
        alt=""
      />
    </div>
    <div
      class="tra-title"
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <img
        class="title"
        src="~@/projects/aries/s4/title.png"
        alt=""
        srcset=""
      />
      <p v-if="!isMobile" class="content">
        百年來宜蘭重大交通建設之最 – 結合「宜蘭鐵路高架化」、<br />
        「高鐵延伸宜蘭」、「東部快鐵」的三鐵共構計畫，造就未來南港<br />
        到宜蘭市最快只要13分鐘，就能輕鬆將最美北緯24度盡收眼底，<br />
        細心品嚐宣蘭的生態旅遊、養生冷泉、油綠田園。
      </p>
      <p v-else class="content">
        百年來宜蘭重大交通建設之最<br />結合「宜蘭鐵路高架化」、「高鐵延伸宜<br />蘭」、「東部快鐵」的三鐵共構計畫，造就<br />未來南港到宜蘭市最快只要13分鐘，就能輕<br />鬆將最美北緯24度盡收眼底，細心品嚐宣蘭<br />的生態旅遊、養生冷泉、油綠田園。
      </p>
    </div>
    <div class="badge">
      <swiper ref="swiper1" :options="swiperOptions1">
        <swiper-slide
          v-for="(imgList, i) in imgList1"
          v-bind:key="i"
          v-bind:style="{ backgroundImage: `url(${imgList.img})` }"
          data-aos-duration="1000"
          data-aos="fade"
          :data-aos-delay="i * 350"
        >
          <div class="caption">
            <div class="title" v-html="imgList.title"></div>
            <img class="titleImg" :src="imgList.titleImg" />
            <div class="content" v-html="imgList.content"></div>
          </div>
        </swiper-slide>
      </swiper>
      <div v-if="isMobile" class="swiper-button-prev" slot="button-prev">
        <img src="~@/projects/aries/s4/slider_left.png" alt="" srcset="" />
      </div>
      <div v-if="isMobile" class="swiper-button-next" slot="button-next">
        <img src="~@/projects/aries/s4/slider_right.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section4 {
  position: relative;
  margin-top: -10vh;
  height: auto;

  .bg {
    position: relative;
    height: 0;
    padding-bottom: 65.9%;
    &.bg1 {
      background-image: url("~@/projects/aries/s4/bg.jpg");
      background-size: cover;
    }
    &.bg2 {
      margin-top: -25vh;
      padding-bottom: 35.41%;
      background-image: url("~@/projects/aries/s4/tra.png");
      background-size: 101%;
      background-position: center;
    }
  }

  .building {
    position: absolute;
    z-index: 5;
    top: 5vw;
    left: 8vw;
    width: 60vw;
    height: 40.37vw;
    background-image: url("~@/projects/aries/s4/img.jpg");
    border-radius: 50vw 40vw 50vw 40vw;
    background-size: 122%;
    background-position: center bottom;
    animation: border-radius 3s ease 2s infinite alternate;

    @keyframes border-radius {
      0% {
        border-radius: 50vw 40vw 50vw 40vw;
      }
      100% {
        border-radius: 40vw 50vw 40vw 50vw;
      }
    }

    &::before {
      content: "";
      background-image: url("~@/projects/aries/s4/img2.png");
      background-size: 122%;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      background-position: center bottom;
    }
  }

  .building-title {
    position: absolute;
    z-index: 6;
    top: 10vw;
    left: 66vw;
    width: 18vw;
    height: 18vw;
    border-radius: 10vw;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2) -24%,
      rgba(255, 255, 255, 0.24) -19%,
      rgba(255, 255, 255, 0.33) -7%,
      rgba(255, 255, 255, 0.38) 5%,
      rgba(255, 255, 255, 0.4) 15%,
      #fff 74%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      margin-top: -3vw;
      width: 10.8vw;
    }
    .content {
      margin-top: 0.6vw;
      font-size: 0.8vw;
      line-height: 1.3vw;
    }
    .para {
      position: absolute;
      right: -3.5vw;
      top: 0;
    }
  }

  .tra-title {
    position: absolute;
    z-index: 6;
    bottom: 27vw;
    left: 16vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      margin-top: -3vw;
      width: 10.8vw;
    }
    .content {
      margin-top: 0.6vw;
      font-size: 0.8vw;
      line-height: 1.3vw;
    }
  }

  .badge {
    position: absolute;
    width: 50vw;
    bottom: 5vw;
    left: 25vw;
    .swiper-slide {
      height: 15vw;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;

      .caption {
        width: 15vw;
        height: 15vw;
        border-radius: 15vw;
        background: rgba(255, 217, 0, 0.863);
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -7.5vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all 0.5s;
        transform: scale(0);
        cursor: pointer;
        &.active {
          transform: scale(1);
        }
        .title {
          color: #29a5dc;
          font-weight: bold;
          font-size: 1.2vw;
          margin-bottom: 2vw;
          &::after {
            content: "";
            background-image: url("~@/projects/aries/s4/img_line.png");
            width: 6vw;
            height: 5vw;
            background-size: contain;
            position: absolute;
            background-repeat: no-repeat;
            left: 47%;
            margin-left: -2.5vw;
            top: 1.9vw;
          }
        }
        .titleImg {
          position: absolute;
          right: -2vw;
          top: 0;
        }
        .content {
          font-size: 0.8vw;
          line-height: 1.4vw;
        }
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    margin-top: 0;
    height: calc(auto - 17vw);

    .bg {
      position: relative;
      height: 0;
      top: -17vw;
      &.bg1 {
        background-image: url("~@/projects/aries/s4/bg.jpg");
        background-size: 400%;
        padding-bottom: 284vw;
        background-position: center;
        background-repeat: no-repeat;
      }
      &.bg2 {
        margin-top: -42vw;
        margin-bottom: -17vw;
        padding-bottom: 123vw;
        background-image: url("~@/projects/aries/s4/tra.png");
        background-size: 350%;
        background-position-y: 0;
        background-repeat: no-repeat;
      }
      &.wave {
        mask: url("~@/projects/aries/s4/section_mask_mo.png");
        mask-size: 100%;
        mask-repeat: no-repeat;
        position: absolute;
        top: -17vw;
        left: 0;
        width: 100%;
        z-index: 1;
      }
    }

    .building {
      position: absolute;
      z-index: 5;
      top: 60vw;
      left: 50%;
      width: 110vw;
      height: 74.02vw;
      margin-left: -55vw;
      background-image: url("~@/projects/aries/s4/img.jpg");
      border-radius: 50vw 40vw 50vw 40vw;
      background-size: 122%;
      background-position: center bottom;
      animation: border-radius 3s ease 2s infinite alternate;

      @keyframes border-radius {
        0% {
          border-radius: 50vw 40vw 50vw 40vw;
        }
        100% {
          border-radius: 40vw 50vw 40vw 50vw;
        }
      }

      &::before {
        content: "";
        background-image: url("~@/projects/aries/s4/img2.png");
        background-size: 122%;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background-position: center bottom;
      }
    }

    .building-title {
      top: 5vw;
      left: 7vw;
      width: 86vw;
      height: 60vw;
      border-radius: 90vw;
      .title {
        width: 51.8vw;
      }
      .content {
        margin-top: 1.6vw;
        font-size: 4vw;
        line-height: 6.3vw;
      }
      .para {
        width: 23vw;
      }
    }

    .tra-title {
      width: 90vw;
      left: 5vw;
      bottom: unset;
      top: 144vw;
      padding: 20vw 8vw;
      border-radius: 90vw;
      white-space: nowrap;
      text-align: center;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.2) -24%,
        rgba(255, 255, 255, 0.24) -19%,
        rgba(255, 255, 255, 0.33) -7%,
        rgba(255, 255, 255, 0.38) 5%,
        rgba(255, 255, 255, 0.4) 15%,
        #fff 74%
      );
      .title {
        width: 60vw;
      }
      .content {
        margin-top: 1.6vw;
        font-size: 4vw;
        line-height: 6.3vw;
      }
    }

    .badge {
      position: absolute;
      width: 100vw;
      bottom: 45vw;
      left: 0;
      .swiper-container {
        overflow: visible;
      }

      .swiper-slide {
        height: 70vw;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        .caption {
          width: 90vw;
          height: auto;
          border-radius: 5vw;
          background: rgba(255, 217, 0, 0.863);
          position: absolute;
          top: unset;
          bottom: -25vw;
          left: 50%;
          margin-left: -45vw;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: all 0.5s;
          transform: unset;
          cursor: pointer;

          padding: 5vw;
          .title {
            color: #29a5dc;
            font-weight: bold;
            font-size: 8.2vw;
            margin-bottom: 2vw;
            &::after {
              content: "";
              background-image: url("~@/projects/aries/s4/img_line.png");
              width: 6vw;
              height: 5vw;
              background-size: contain;
              position: absolute;
              background-repeat: no-repeat;
              left: 47%;
              margin-left: -2.5vw;
              top: 1.9vw;
            }
          }
          .titleImg {
            position: absolute;
            right: unset;
            left: -5vw;
            top: -5vw;
            width: 25vw;
          }
          .content {
            font-size: 3.8vw;
            line-height: 6vw;
            text-align: center;
            width: 100%;
          }
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        img {
          width: 10vw;
        }
        &::after {
          display: none;
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "section4",
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
      swiperOptions1: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        },
      },

      imgList1: [
        {
          img: require("@/projects/aries/s4/img_1.png"),
          titleImg: require("@/projects/aries/s4/img_1_style.png"),
          title: "蘇澳冷泉",
          content: !isMobile
            ? "｜養生冷泉｜<br>天下第一奇泉，東南亞獨一無二<br>之低溫碳酸礦泉冷泉，<br>經年恆溫22度。"
            : "｜養生冷泉｜<br>天下第一奇泉，東南亞獨一無二之低溫碳酸礦泉冷泉，經年恆溫22度。",
        },
        {
          img: require("@/projects/aries/s4/img_2.png"),
          titleImg: require("@/projects/aries/s4/img_2_style.png"),
          title: "五十二甲濕地",
          content: !isMobile
            ? "｜生態旅遊｜<br>五結私房景點，<br>孕育出豐富魚蝦資源，同時<br>也吸引了許多鳥類棲息。"
            : "｜生態旅遊｜<br>五結私房景點，孕育出豐富魚蝦資源，同時也吸引了許多鳥類棲息。",
        },
        {
          img: require("@/projects/aries/s4/img_3.png"),
          titleImg: require("@/projects/aries/s4/img_3_style.png"),
          title: "武荖坑風景區",
          content: !isMobile
            ? "｜油綠田園｜<br>新蘭陽八景之一，林木蒼鬱，<br>溪間可見苦花、溪哥於<br>潺潺溪水中悠然自得。"
            : "｜油綠田園｜<br>新蘭陽八景之一，林木蒼鬱，溪間可見苦花、溪哥於潺潺溪水中悠然自得。",
        },
      ],
    };
  },

  methods: {
    onHover() {
      $(".badge .swiper-slide").hover(
        function () {
          $(this).find(".caption").addClass("active");
        },
        function () {
          $(this).find(".caption").removeClass("active");
        }
      );
    },
  },

  mounted() {
    if (!isMobile) {
      this.onHover();
    }
  },
  created() {},
};
</script>
