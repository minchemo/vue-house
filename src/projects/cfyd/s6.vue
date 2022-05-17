<template>
  <div class="s6">
    <div class="bg"></div>

    <div class="header" data-aos="flip-up" data-aos-delay="200">
      <h1>BRAND</h1>
      <p>家的幸福 盡在春福</p>
    </div>

    <img loading="lazy"
      class="logo_m"
      v-if="isMobile"
      src="@/projects/cfyd/s6/logo.svg"
      alt=""
      srcset=""
    />

    <div class="main">
      <div
        class="swipe-box swipe-box-left"
        v-if="!isMobile"
        data-aos="flip-up"
        data-aos-delay="200"
      >
        <swiper ref="swiper1" :options="swiperOptions">
          <swiper-slide
            v-for="(img, i) in imgs"
            :key="i"
            v-bind:style="{
              backgroundImage: `url('${img.url}')`,
            }"
          >
            <div class="caption">{{ img.caption }}</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="arrow prev" @click="nextSlide1()">
          <img loading="lazy" src="@/projects/cfyd/s6/arrow.svg" alt="" srcset="" />
        </div>
      </div>

      <div class="text">
        <img loading="lazy"
          class="logo"
          v-if="!isMobile"
          src="@/projects/cfyd/s6/logo.svg"
          alt=""
          srcset=""
          data-aos="fade"
          data-aos-delay="0"
        />
        <img loading="lazy"
          class="title"
          src="@/projects/cfyd/s6/title.svg"
          alt=""
          srcset=""
          data-aos="flip-up"
          data-aos-delay="500"
        />
        <div class="content" data-aos="flip-up" data-aos-delay="800">
          春福機構深耕新竹近40年<br />
          大步邁向台中、台南、高雄及海外<br />
          以不變的建築善美初心，始終陪伴客戶左右、互相成長<br />
          除了讓自己好、讓夥伴好，更要讓客戶都好<br />
          進而蛻變成讓社會共好的永續家族<br />
          未來，也將以此初衷流傳<br />
          讓好房世代相傳，讓更多人因春福而驕傲
        </div>
      </div>

      <div
        class="swipe-box"
        v-if="isMobile"
        data-aos="flip-up"
        data-aos-delay="200"
      >
        <swiper :options="swiperOptionsmb">
          <swiper-slide
            v-for="(img, i) in imgs_m"
            :key="i"
            v-bind:style="{
              backgroundImage: `url('${img.url}')`,
            }"
          >
            <div class="caption">{{ img.caption }}</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>

      <div
        class="swipe-box swipe-box-right"
        v-if="!isMobile"
        data-aos="flip-up"
        data-aos-delay="500"
      >
        <swiper ref="swiper2" :options="swiperOptions2">
          <swiper-slide
            v-for="(img, i) in imgs2"
            :key="i"
            v-bind:style="{
              backgroundImage: `url('${img.url}')`,
            }"
          >
            <div class="caption">{{ img.caption }}</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="arrow next" @click="nextSlide2()">
          <img loading="lazy" src="@/projects/cfyd/s6/arrow.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s6 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: #000;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@/projects/cfyd/s6/bg.jpg");
    background-position: center;
    background-size: cover;
    z-index: 0;
    pointer-events: none;
  }
  .header {
    position: absolute;
    top: size(100);
    right: size(280);

    display: flex;
    align-items: flex-end;
    h1 {
      font-size: size(92);
      color: #fff;
      font-weight: 1000;
      margin-right: size(20);
    }
    p {
      font-size: size(38);
      font-family: "Noto serif tc";
      color: #946134;
      font-weight: bold;
      line-height: 1.3;
    }
  }
  .main {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    transform: translateY(#{size(270)});
    flex-direction: row-reverse;
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 size(70);
      .logo {
        width: size(99);
        margin-bottom: size(20);
      }
      .title {
        width: size(307);
      }
      .content {
        color: #fff;
        font-size: size(17);
        line-height: 2;
      }
    }
    .swipe-box {
      position: relative;
      width: size(581);
      height: size(436);
      .swiper-container {
        padding-bottom: size(30);
        .swiper-slide {
          position: relative;
          width: size(581);
          height: size(436);
          background-size: cover;
          .caption {
            position: absolute;
            font-size: size(17);
            color: #fff;
            left: size(20);
            top: size(15);
          }
        }

        .swiper-pagination {
          .swiper-pagination-bullet {
            border-radius: 0;
            width: size(51.5);
            height: size(2.5);
            background-color: rgba(255, 255, 255, 0.45);
            &.swiper-pagination-bullet-active {
              background-color: #946134;
            }
          }
        }
      }
      .arrow {
        position: absolute;
        width: size(44.7);
        top: 50%;
        margin-top: -#{size(22.35)};

        img {
          width: 100%;
        }

        &.next {
          transform: rotate(180deg);
          left: -#{size(70)};
        }
        &.prev {
          right: -#{size(70)};
        }
        &:hover {
          cursor: pointer;
          opacity: 0.7;
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
  .s6 {
    position: relative;
    width: size-m(375);
    height: size-m(643);
    background-color: transparent;
    padding-top: size-m(30);
    .logo_m {
      position: absolute;
      right: size-m(35);
      top: size-m(15);
      width: size-m(70);
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("~@/projects/cfyd/s6/bg_m.png");
      background-position: center;
      background-size: cover;
      z-index: 0;
      pointer-events: none;
    }
    .header {
      position: relative;
      top: unset;
      right: unset;
      display: block;
      text-align: left;
      padding-left: size-m(30);
      h1 {
        font-size: size-m(20);
        color: #fff;
        font-weight: 1000;
        margin-right: size(20);
      }
      p {
        margin-top: size-m(10);
        font-size: size-m(20);
        font-family: "Noto serif tc";
        color: #946134;
        font-weight: bold;
        line-height: 1.3;
      }
    }
    .main {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      transform: unset;
      flex-direction: column;
      padding-top: size-m(100);
      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        padding-left: size-m(30);
        .logo {
          width: size(99);
          margin-bottom: size-m(20);
          margin-top: size-m(20);
        }
        .title {
          width: size-m(177);
        }
        .content {
          color: #fff;
          font-size: size-m(12);
          line-height: 2;
          text-align: left;
        }
      }
      .swipe-box {
        position: absolute;
        width: size-m(375);
        height: size-m(281);
        bottom: 0;
        left: 0;
        .swiper-container {
          padding-bottom: size(30);
          .swiper-slide {
            position: relative;
            width: size-m(375);
            height: size-m(281);
            background-size: cover;
            .caption {
              position: absolute;
              font-size: size-m(12);
              color: #fff;
              left: size-m(20);
              top: size-m(10);
            }
          }

          .swiper-pagination {
            .swiper-pagination-bullet {
              border-radius: 0;
              width: size(51.5);
              height: size(2.5);
              background-color: rgba(255, 255, 255, 0.45);
              &.swiper-pagination-bullet-active {
                background-color: #946134;
              }
            }
          }
        }
        .swiper-button-prev {
          width: size-m(32.37);
          height: size-m(32.37);
          background-image: url("~@/projects/cfyd/s5/arrow.svg") !important;
          background-size: contain;
          background-repeat: no-repeat;
          transition: all 0.4s;
          transform: rotate(180deg);
          &:hover {
            opacity: 0.7;
          }
          &::after {
            content: "";
          }
        }
        .swiper-button-next {
          width: size-m(32.37);
          height: size-m(32.37);
          background-image: url("~@/projects/cfyd/s5/arrow.svg") !important;
          background-size: contain;
          background-repeat: no-repeat;
          transition: all 0.4s;
          &:hover {
            opacity: 0.7;
          }
          &::after {
            content: "";
          }
        }
        .arrow {
          position: absolute;
          width: size(44.7);
          top: 50%;
          margin-top: -#{size(22.35)};

          img {
            width: 100%;
          }

          &.next {
            transform: rotate(180deg);
            left: -#{size(70)};
          }
          &.prev {
            right: -#{size(70)};
          }
          &:hover {
            cursor: pointer;
            opacity: 0.7;
          }
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
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  name: "s6",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      visual: "",
      swiperOptions: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 50,
        navigation: {
          prevEl: ".s6 .swipe-box-left .swiper-button-prev",
          nextEl: ".s6 .swipe-box-left .swiper-button-next",
        },
        pagination: {
          el: '.s6 .swipe-box-left .swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      swiperOptionsmb: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 50,
        navigation: {
          prevEl: ".s6 .swipe-box .swiper-button-prev",
          nextEl: ".s6 .swipe-box .swiper-button-next",
        },
        pagination: {
          el: '.s6 .swipe-box .swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      swiperOptions2: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 50,
        navigation: {
          prevEl: ".s6 .swipe-box-right .swiper-button-prev",
          nextEl: ".s6 .swipe-box-right .swiper-button-next",
        },
        pagination: {
          el: '.s6 .swipe-box-right .swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      imgs: [
        {
          url: require("@/projects/cfyd/s6/r1.jpg"),
          caption: "漾煙波(台南)",
        },
        {
          url: require("@/projects/cfyd/s6/r2.jpg"),
          caption: "春福學學(台南)",
        },
        {
          url: require("@/projects/cfyd/s6/r3.jpg"),
          caption: "春上春福(台南)",
        },
      ],
      imgs2: [
        {
          url: require("@/projects/cfyd/s6/l1.jpg"),
          caption: "大觀自若(新竹)",
        },
        {
          url: require("@/projects/cfyd/s6/l2.jpg"),
          caption: "大觀無極(新竹)",
        },
      ],
      imgs_m: [
        {
          url: require("@/projects/cfyd/s6/r1.jpg"),
          caption: "漾煙波(台南)",
        },
        {
          url: require("@/projects/cfyd/s6/r2.jpg"),
          caption: "春福學學(台南)",
        },
        {
          url: require("@/projects/cfyd/s6/r3.jpg"),
          caption: "春上春福(台南)",
        },
        {
          url: require("@/projects/cfyd/s6/l1.jpg"),
          caption: "大觀自若(新竹)",
        },
        {
          url: require("@/projects/cfyd/s6/l2.jpg"),
          caption: "大觀無極(新竹)",
        },
      ],
    };
  },
  computed: {
    swiper1() {
      return this.$refs.swiper1.$swiper
    },
    swiper2() {
      return this.$refs.swiper2.$swiper
    },
  },

  methods: {
    nextSlide1() {
      this.swiper1.slideNext()
    },
    nextSlide2() {
      this.swiper2.slidePrev()

    }
    // scrollTo(el) {
    //   this.scrollInstance.scrollTo(el);
    // },
  },

  created() { },
  mounted() {
  },
};
</script>