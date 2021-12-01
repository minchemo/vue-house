<template>
  <div class="section7">
    <div class="swiper-box swiper-box-1">
      <div class="left">
        <h2 uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-200,0;x:200,0">
          商圈繁錦
        </h2>
        <h3 uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-100,0;x:100,0">
          雙影城雙百貨 超機能商圈
        </h3>
        <div
          class="content"
          uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:200,0;x:200,0"
        >
          宏匯廣場、晶冠廣場、家樂福、IKEA‥影城百貨娛樂休閒不打烊。散步到福壽商圈輕取食衣住行機能。
        </div>
        <div class="items s7-item-1">
          <div
            class="item"
            :data-key="`s7-1-item-${i}`"
            v-for="(item, i) in slides.caption"
            :key="i"
            :uk-parallax="`viewport:0.2;blur:20,0;x:${i * 100},0`"
            @click="$refs.swiper.$swiper.slideTo(i, 1000, false)"
            v-bind:class="{ active: activeIndex1 == i }"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="right">
        <swiper
          :options="swiperOptions"
          ref="swiper"
          class="swiper-wrapper"
          uk-parallax="viewport: 0.3;blur:50,0;y:100,0"
          @transitionStart="swiperChange1"
        >
          <swiper-slide
            class="slide"
            v-for="(slide, i) in slides.img"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide})`,
            }"
          >
          </swiper-slide>
        </swiper>
        <div class="swiper-nav">
          <img class="prev" src="@/projects/cc/s7/prev.svg" alt="" srcset="" />
          <img class="next" src="@/projects/cc/s7/next.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="swiper-box swiper-box-2">
      <div class="left">
        <h2 uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-200,0;x:-200,0">
          公園綠映
        </h2>
        <h3 uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-100,0;x:-100,0">
          四座公園擁抱 五公頃綠地
        </h3>
        <div
          class="content"
          uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:200,0;x:-200,0"
        >
          塭仔底溼地公園，昌平公園、願景公園、中港綠堤水岸前後簇擁，每一次出門都是一場森態小旅行。
        </div>
        <div class="items s7-item-2">
          <div
            class="item"
            :data-key="`s7-2-item-${i}`"
            v-for="(item, i) in slides2.caption"
            :key="i"
            :uk-parallax="`viewport:0.2;blur:0,0;x:${i * -100},0`"
            @click="$refs.swiper2.$swiper.slideTo(i, 1000, false)"
            v-bind:class="{ active: activeIndex2 == i }"
          >
            <img :src="slides2.avatar[i]" alt="" srcset="" />
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <swiper
          :options="swiperOptions"
          ref="swiper2"
          class="swiper-wrapper"
          uk-parallax="viewport: 0.3;blur:50,0;y:100,0"
          @transitionStart="swiperChange2"
        >
          <swiper-slide
            class="slide"
            v-for="(slide, i) in slides2.img"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide})`,
            }"
          >
          </swiper-slide>
        </swiper>
        <div class="swiper-nav">
          <img class="prev" src="@/projects/cc/s7/prev.svg" alt="" srcset="" />
          <img class="next" src="@/projects/cc/s7/next.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
    <img
      v-if="!isMobile"
      class="bg"
      src="@/projects/cc/s7/bg.png"
      alt=""
      srcset=""
      uk-parallax="viewport: 0.3;blur:50,0"
    />
    <img
      v-else
      class="bg"
      src="@/projects/cc/s7/bg-mo.png"
      alt=""
      srcset=""
      uk-parallax="viewport: 0.3;blur:50,0"
    />
    <div class="bg2"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section7 {
  position: relative;
  width: size(1920);
  height: size(2170);
  padding-top: size(100);

  .bg2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../projects/cc/s6/bg2.png");
    background-position: top;
    background-size: cover;
    
  }

  .swiper-box {
    position: relative;
    display: flex;
    z-index: 2;
    .left {
      width: size(485);
      text-align: left;
      color: #fff;
      h2 {
        font-size: size(50);
        font-weight: 400;
        letter-spacing: size(15);
        margin-bottom: size(30);
        font-family: "Noto Serif TC", serif;
      }
      h3 {
        font-size: size(36);
        font-weight: 300;
        letter-spacing: size(15);
        margin-bottom: size(35);
        white-space: nowrap;
        font-family: "Noto Serif TC", serif;
      }
      .content {
        font-size: size(24);
        font-weight: 300;
        line-height: 2;
        letter-spacing: size(10);
      }
    }

    .right {
      .swiper-wrapper {
        width: size(736);
        height: size(465);
        .slide {
          background-size: cover;
        }
      }
    }
    &.swiper-box-1 {
      align-items: center;
      justify-content: flex-end;
      .left {
        margin-right: size(300);
        .items {
          margin-top: size(100);
          .item {
            width: size(352);
            height: size(56);
            font-size: size(22);
            text-align: center;
            line-height: size(56);
            background-size: 100%;
            background-image: url("../../projects/cc/s7/item-bg.png");
            transition: all 0.4s;
            margin-bottom: size(10);
            font-family: "Noto Serif TC", serif;
            &:hover {
              cursor: pointer;
              background-image: url("../../projects/cc/s7/item-bg-selected.png");
            }
            &.active {
              background-image: url("../../projects/cc/s7/item-bg-selected.png");
            }
          }
        }
      }
      .right {
        margin-top: size(250);
      }
      &::before {
        content: "";
        position: absolute;
        left: 10%;
        top: 0;
        height: 120%;
        width: 1px;
        background-color: #fff;
      }
      .swiper-nav {
        display: flex;
        margin-top: size(15);
        .next,
        .prev {
          width: size(25);
          margin-right: size(10);
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    &.swiper-box-2 {
      align-items: center;
      justify-content: flex-end;
      flex-direction: row-reverse;
      margin-top: size(200);
      .left {
        width: auto;
        text-align: right;
        margin-left: size(300);
        h3 {
          text-align: right;
        }
        .content {
          width: size(570);
          text-align: justify;
        }
        .items {
          margin-top: size(50);
          .item {
            width: size(550);
            height: size(98);
            font-size: size(36);
            text-align: center;
            line-height:1.6;
            letter-spacing: 0.2em;
            background-size: 100%;
            transition: all 0.4s;
            margin-bottom:0.8em;
            font-weight: 300;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #fff;
            border-radius:1.2em;
            padding-left:2.1em;
            transition: all 0s;
            cursor: pointer;
            img {
              object-fit: cover;
              border-radius:50%;
              height:2em;
              position: absolute;
              left: 0.3em;
            }
            &:hover,
            &.active {
              background: rgba(255, 255, 255, 0.4);
              border-width: 0;
            }
          }
        }
      }
      .right {
        margin-top: size(250);
      }
      &::before {
        content: "";
        position: absolute;
        right: 10%;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: #fff;
      }
      .swiper-nav {
        display: flex;
        justify-content: flex-end;
        margin-top: size(15);
        .next,
        .prev {
          width: size(25);
          margin-right: size(10);
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }

  .bg {
    position: absolute;
    right: 0;
    top: size(50);
    height: size(1500);
    z-index: 1;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section7 {
    position: relative;
    width: size-m(375);
    height: size-m(1192);
    padding-top: size-m(100);

    .bg2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("../../projects/cc/s6/bg2-mo.png");
      background-position: top;
      background-size: cover;
      z-index: 0;
    }

    .swiper-box {
      position: relative;
      display: flex;
      z-index: 2;
      flex-direction: column;
      .left {
        h2 {
          font-size: size-m(20);
          font-weight: 400;
          letter-spacing: size-m(5);
          margin-bottom: size-m(15);
        }
        h3 {
          font-size: size-m(16);
          font-weight: 300;
          letter-spacing: size-m(5);
          margin-bottom: size-m(20);
          white-space: nowrap;
        }
        .content {
          font-size: size-m(15);
          font-weight: 300;
          line-height: 1.5;
          letter-spacing: size-m(7);
        }
      }

      .right {
        .swiper-wrapper {
          width: size-m(340);
          height: size-m(207);
          .slide {
            background-size: cover;
          }
        }
      }
      &.swiper-box-1 {
        align-items: center;
        justify-content: flex-end;
        .left {
          width: 80%;
          margin-right: 0;
          text-align: left;
          z-index: 1;
          position: relative;
          .items {
            margin-top: size-m(20);
            display: flex;
            flex-wrap: nowrap;
            width: 100vw;
            overflow-x: auto;
            margin-left: -10vw;

            .item {
              min-width: size-m(139);
              height: size-m(36);
              font-size: size-m(14);
              text-align: center;
              line-height: size-m(36);
              background-size: 100%;
              background-image: url("../../projects/cc/s7/item-bg-mo.png");
              transition: all 0.4s;
              margin-bottom: 0;
              margin-right: size-m(10);
              &:hover {
                cursor: pointer;
                background-image: url("../../projects/cc/s7/item-bg-selected-mo.png");
              }
              &.active {
                background-image: url("../../projects/cc/s7/item-bg-selected-mo.png");
              }
            }
          }
        }
        .right {
          margin-top: size-m(20);
        }
        &::before {
          content: unset;
        }
        .swiper-nav {
          display: none;
        }
      }
      &.swiper-box-2 {
        flex-direction: column;
        margin-top: size-m(100);
        .left {
          width: 80%;
          margin-left: 0;
          h2 {
            text-align: left;
          }
          h3 {
            text-align: left;
          }
          .content {
            width: auto;
          }
          .items {
            margin-top: size-m(20);
            display: flex;
            flex-wrap: nowrap;
            width: 100vw;
            overflow-x: auto;
            margin-left: -10vw;
            .item {
              min-width: size-m(163.44);
              min-height: size-m(43.63);
              font-size: size-m(14);
              margin-bottom: 0;
              margin-right: size-m(10);
            }
          }
        }
        .right {
          margin-top: size-m(20);
        }
        &::before {
          content: unset;
        }
        .swiper-nav {
          display: none;
        }
      }
    }

    .bg {
      position: absolute;
      right: 0;
      top: size-m(0);
      height: size-m(700);
      z-index: 1;
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
import VueScrollTo from "vue-scrollto";

export default {
  name: "section7",
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
      slides:
      {
        img: [require("@/projects/cc/s7/1.jpg"), require("@/projects/cc/s7/2.jpg"), require("@/projects/cc/s7/3.jpg"), require("@/projects/cc/s7/4.jpg"), require("@/projects/cc/s7/5.jpg"), require("@/projects/cc/s7/6.jpg"), require("@/projects/cc/s7/7.jpg")],
        caption: ['宏匯廣場', '晶冠廣場', '幸福商圈', '宏泰市場', '全聯 中原店', 'IKEA新莊店', '家樂福 重新店'],
      },
      slides2:
      {
        img: [require("@/projects/cc/s7/a.jpg"), require("@/projects/cc/s7/c.jpg"), require("@/projects/cc/s7/b.jpg"), require("@/projects/cc/s7/d.jpg")],
        caption: ['昌平公園', '塭仔底溼地公園', '願景公園', '中港綠堤'],
        avatar: [require("@/projects/cc/s7/a-avatar.jpg"), require("@/projects/cc/s7/c-avatar.jpg"), require("@/projects/cc/s7/b-avatar.jpg"), require("@/projects/cc/s7/d-avatar.jpg")]
      },
      swiperOptions: {
        loop: false,
        speed: 500,
        spaceBetween: 0,
        autoplay: {
          delay: 4500,
        },
        navigation: {
          nextEl: ".swiper-nav .next",
          prevEl: ".swiper-nav .prev",
        },
      },
      swiperOptions2: {
        loop: false,
        speed: 500,
        spaceBetween: 0,
        autoplay: {
          delay: 4500,
        },
        navigation: {
          nextEl: ".swiper-nav .next",
          prevEl: ".swiper-nav .prev",
        },
      },
      activeIndex1: 1,
      activeIndex2: 1
    };
  },

  methods: {
    swiperChange1() {
      this.activeIndex1 = this.$refs.swiper.$swiper.realIndex;

      VueScrollTo.scrollTo(
        $(`[data-key="s7-1-item-${this.activeIndex1 - 1}"]`)[0],
        100,
        {
          container: '.s7-item-1',
          offset: 30,
          x: true,
          y: false,
        }
      );
    },
    swiperChange2() {
      this.activeIndex2 = this.$refs.swiper2.$swiper.realIndex;

      VueScrollTo.scrollTo(
        $(`[data-key="s7-2-item-${this.activeIndex2 - 1}"]`)[0],
        100,
        {
          container: '.s7-item-2',
          offset: 60,
          x: true,
          y: false,
        }
      );
    }
  },

  created() { },
};
</script>
