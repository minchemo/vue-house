<template>
  <div class="s7">
    <div class="bg"></div>
    <div class="header">大師聯手 進化鉅作</div>
    <div class="main">
      <div
        class="item"
        v-for="(item, i) in archi"
        :key="i"
        @click="selectedArchi = i"
      >
        <div
          class="t1"
          v-html="item.t1"
          data-aos="flip-up"
          :data-aos-delay="i * 100"
        ></div>
        <div
          class="t2"
          v-html="item.t2"
          data-aos="flip-up"
          :data-aos-delay="200 + i * 100"
        ></div>
        <div
          class="t3"
          v-html="item.t3"
          data-aos="flip-up"
          :data-aos-delay="400 + i * 100"
        ></div>
        <img loading="lazy"
          class="
            circle
            animate__animated animate__shakeY animate__slower animate__infinite
          "
          src="@/projects/cfyd/s7/circle.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div
      class="popup"
      v-if="selectedArchi >= 0 && selectedArchi != null"
      data-aos="flip-up"
      data-aos-duration="500"
    >
      <img loading="lazy" class="avatar" :src="archi[selectedArchi].avatar" alt="" srcset="" />
      <div class="info">
        <div
          class="t4"
          v-html="archi[selectedArchi].t4"
          data-aos="flip-up"
          data-aos-delay="300"
        ></div>
        <div class="t5-header">代表業績</div>
        <div class="t5-box">
          <div
            class="t5"
            v-html="archi[selectedArchi].t5"
            data-aos="flip-up"
            data-aos-duration="1000"
          ></div>
          <div
            class="swipe-box"
            v-if="archi[selectedArchi].imgs.length > 0"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <swiper :options="swiperOptions">
              <swiper-slide
                v-for="(img, i) in archi[selectedArchi].imgs"
                :key="i"
                v-bind:style="{
                  backgroundImage: `url('${img.url}')`,
                }"
              >
                <div class="caption">{{ img.caption }}</div>
              </swiper-slide>
              <div class="swiper-button-next" slot="button-next"></div>

              <div
                class="swiper-button-prev"
                slot="button-prev"
                v-if="isMobile"
              ></div>
            </swiper>
          </div>
        </div>
      </div>

      <div class="close" @click="selectedArchi = null"></div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s7 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: #000;
  .header {
    position: absolute;
    font-size: size(77);
    writing-mode: vertical-lr;
    height: 100%;
    color: #fff;
    top: 50%;
    transform: translateY(-50%);
    left: size(120);
    font-family: "Noto serif tc";
    font-weight: bolder;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@/projects/cfyd/s7/bg.jpg");
    background-position: center;
    background-size: cover;
    z-index: 0;
    pointer-events: none;
  }
  .main {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .item {
      text-align: left;
      position: absolute;
      .t1 {
        font-size: size(55);
        color: #946134;
        margin-bottom: size(10);
        font-weight: 1000;
      }
      .t2 {
        font-size: size(34);
        color: #fff;
        font-family: "Noto serif tc";
        margin-bottom: size(20);
        font-weight: bold;
      }
      .t3 {
        font-size: size(17);
        color: #fff;
        line-height: 2;
        text-align: justify;
      }
      .circle {
        width: size(152.73);
        display: block;
        margin: 0 auto;
        animation-duration: 9s;
      }
      &:nth-child(1) {
        max-width: size(444);
        left: size(320);
        bottom: size(120);
      }
      &:nth-child(2) {
        max-width: size(444);
        left: size(850);
        bottom: size(390);
      }
      &:nth-child(3) {
        max-width: size(363);
        left: size(1450);
        bottom: size(140);
      }
      &:hover {
        cursor: pointer;
        .t1 {
          opacity: 0.5;
        }
        .t2 {
          opacity: 0.5;
        }
        .t3 {
          opacity: 0.5;
        }
      }
    }
  }
  .popup {
    position: fixed;
    height: size(722);
    min-width: size(100);
    background-color: rgba(0, 0, 0, 0.88);
    border: 1px solid #946134;
    z-index: 100000;
    left: size(300);
    top: 50%;
    margin-top: -#{size(722/2)};
    display: flex;
    .info {
      padding-top: size(90);
      padding-bottom: size(90);
      padding-left: size(50);
      padding-right: size(100);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      .t4 {
        display: flex;
        flex-wrap: wrap;
        font-family: "Noto serif tc";
        font-weight: bold;
        color: #fff;
        align-items: flex-end;

        .cp {
          font-size: size(37.5);
          &.haswrap {
            margin-bottom: size(15);
          }
        }
        .wrap {
          flex: 100%;
        }
        .slash {
          display: block;
          width: size(30);
          height: size(35);
          background-image: url("~@/projects/cfyd/s7/slash.svg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          margin: 0 size(5);
        }
        .n1 {
          font-size: size(25);
          margin-right: size(10);
        }
        .n2 {
          font-size: size(35);
        }
      }
      .t5-header {
        font-size: size(22);
        font-weight: bold;
        letter-spacing: size(5);
        color: #846134;
        padding-bottom: size(5);
        margin-top: size(50);
        display: block;
        min-width: 60%;
        text-align: left;
      }
      .t5-box {
        display: flex;
        border-top: 1px solid #846134;
        .t5 {
          padding-left: size(5);
          margin-top: size(12);
          font-size: size(18);
          font-weight: 200;
          line-height: 2;
          color: #fff;
          text-align: left;
          margin-right: size(100);
        }
        .swipe-box {
          position: relative;
          padding-top: size(20);
          padding-right: size(20);

          .swiper-container {
            width: size(681);
            height: size(434);
          }

          &:after {
            content: "";
            position: absolute;
            width: 1px;
            height: size(454);
            right: 0;
            top: 0;
            background: #846134;
          }

          .swiper-slide {
            position: relative;
            width: size(681);
            height: size(434);
            background-size: cover;
            .caption {
              position: absolute;
              font-size: size(17);
              color: #fff;
              left: size(20);
              top: size(15);
            }
          }
          .swiper-button-next {
            width: size(71.39);
            height: size(71.39);
            background-image: url("~@/projects/cfyd/s5/arrow.svg");
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
        }
      }
    }
    .close {
      position: absolute;
      right: size(20);
      top: size(20);
      width: size(53);
      height: size(53);
      background-image: url("~@/projects/cfyd/s7/close.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s7 {
    position: relative;
    width: size-m(375);
    height: size-m(667);
    background-color: #000;
    .header {
      position: absolute;
      font-size: size-m(20);
      writing-mode: horizontal-tb;
      height: 100%;
      color: #fff;
      top: size-m(35);
      transform: unset;
      left: size-m(45);
      font-family: "Noto serif tc";
      font-weight: bolder;
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("~@/projects/cfyd/s7/bg_m.jpg");
      background-position: center;
      background-size: cover;
      z-index: 0;
      pointer-events: none;
    }
    .main {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      .item {
        text-align: left;
        position: absolute;
        display: flex;
        flex-direction: column;
        .t1 {
          font-size: size-m(16);
          color: #946134;
          margin-bottom: size-m(8);
          font-weight: 1000;
        }
        .t2 {
          font-size: size-m(16);
          color: #fff;
          font-family: "Noto serif tc";
          margin-bottom: size-m(10);
          font-weight: bold;
        }
        .t3 {
          font-size: size-m(12);
          color: #fff;
          line-height: 2;
          text-align: justify;
        }
        .circle {
          position: absolute;
          width: size-m(95);
          display: block;
        }
        &:nth-child(1) {
          max-width: 80%;
          width: 80%;
          left: size-m(50);
          bottom: unset;
          top: size-m(120);
          align-items: flex-end;
          .circle {
            left: 0;
            top: -#{size-m(50)};
          }
        }
        &:nth-child(2) {
          max-width: 80%;
          width: 80%;
          left: size-m(50);
          bottom: unset;
          top: size-m(320);
          align-items: flex-start;
          .circle {
            right: size-m(10);
            top: -#{size-m(50)};
          }
        }
        &:nth-child(3) {
          max-width: 80%;
          width: 80%;
          left: size-m(50);
          bottom: unset;
          top: size-m(520);
          align-items: flex-end;
          .circle {
            left: -#{size-m(20)};
            top: -#{size-m(50)};
          }
        }
      }
    }
    .popup {
      position: fixed;
      height: 100vh;
      max-height: 100vh;
      min-width: size-m(375);
      max-width: size-m(375);
      background-color: rgba(0, 0, 0, 0.88);
      border: 0px;
      border-left: 0;
      border-radius: 0;
      z-index: 100000;
      left: 0;
      top: 50%;
      transform: translateY(-50%) !important;
      margin-top: 0;
      display: flex;
      .avatar {
        position: absolute;
        width: size-m(138);
        height: size-m(171);
        right: size-m(30);
        top: size-m(180);
      }
      .info {
        padding-top: size-m(70);
        padding-bottom: 0;
        padding-left: size-m(30);
        padding-right: size-m(30);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        .t4 {
          display: flex;
          flex-wrap: wrap;
          font-family: "Noto serif tc";
          font-weight: bold;
          color: #fff;
          align-items: flex-end;

          .cp {
            font-size: size-m(20);
            margin-bottom: size-m(15);
            &.haswrap {
              margin-bottom: size-m(15);
            }
          }
          .wrap {
            flex: 100%;
          }
          .slash {
            flex: 100%;
            display: block;
            width: size(30);
            height: size(35);
            background-image: unset;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            margin: 0 size(5);
          }
          .n1 {
            font-size: size-m(16);
            margin-right: size-m(10);
          }
          .n2 {
            font-size: size-m(20);
          }
        }
        .t5-header {
          position: relative;
          font-size: size-m(16);
          font-weight: bold;
          letter-spacing: size(5);
          color: #846134;
          padding-bottom: 0;
          margin-top: size-m(25);
          margin-bottom: size-m(10);
          display: inline-block;
          min-width: unset;
          text-align: left;

          &:after {
            content: "";
            width: size-m(235);
            height: 0.75px;
            background: #946134;
            position: absolute;
            left: 120%;
            top: 50%;
          }
        }
        .t5-box {
          display: flex;
          border-top: 0px;
          flex-direction: column;
          .t5 {
            padding-left: size(5);
            margin-top: size(12);
            font-size: size-m(12);
            font-weight: 200;
            line-height: 1.5;
            color: #fff;
            text-align: left;
            margin-right: size(100);
          }
          .swipe-box {
            position: absolute;
            padding-top: 0;
            padding-right: 0;
            left: 0;
            bottom: 0;

            .swiper-container {
              width: size-m(375);
              height: size-m(239);
            }

            &:after {
              display: none;
            }

            .swiper-slide {
              position: relative;
              width: size-m(375);
              height: size-m(239);
              background-size: cover;
              .caption {
                position: absolute;
                font-size: size-m(12);
                color: #fff;
                right: size-m(20);
                left: unset;
                top: size-m(10);
                filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.8));
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
          }
        }
      }
      .close {
        position: absolute;
        right: size-m(20);
        top: size-m(20);
        width: size-m(30);
        height: size-m(30);
        background-image: url("~@/projects/cfyd/s7/close.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        &:hover {
          cursor: pointer;
          opacity: 0.5;
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
  name: "s7",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      visual: "",
      selectedArchi: null,
      swiperOptions: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        navigation: {
          prevEl: ".s7 .popup .swipe-box .swiper-button-prev",
          nextEl: ".s7 .popup .swipe-box .swiper-button-next",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      archi: [
        {
          avatar: isMobile ? require("@/projects/cfyd/s7/1_m.jpg") : require("@/projects/cfyd/s7/1.jpg"),
          t1: 'ARCHITECTURE',
          t2: '公共建築職人&nbsp;&nbsp;細膩住宅當家',
          t3: '打造多項公共建設與經典建築，作品多以大學校舍、美術館、運動中心、研究機構與集合住宅等，以細膩品質打造好口碑。',
          t4: `<div class="cp haswrap">大磊聯合建築師事務所</div>
                <div class="wrap"></div>
                <div class="n1">建築設計師</div>
                <div class="n2">謝志雄</div>`,
          t5: `國立成功大學新建工程<br/>
              國立台南護理專科學校新建工程<br/>
              國立虎尾科技大學學院大樓<br/>
              成功大學研究總中心`,
          imgs: [
          ]
        },
        {
          avatar: isMobile ? require("@/projects/cfyd/s7/2_m.jpg") : require("@/projects/cfyd/s7/2.jpg"),
          t1: 'DESIGN',
          t2: '全球百大頂尖&nbsp;&nbsp;國際美學舵手',
          t3: '以深度設計思考之手，結合自然與人的內涵，轉化、放大對家的美感體驗、輕鬆拾獲空間感動。',
          t4: `<div class="cp">天坊室內計劃創始人</div>
                <div class="slash"></div>
                <div class="n1">空間設計師</div>
                <div class="n2">張清平</div>`,
          t5: `精銳博<br/>
                精銳闊<br/>
                精銳臻未來<br/>
                寶輝秋紅谷<br/>
                紫都府<br/>
                國賓御府`,
          imgs: [
            {
              url: require("@/projects/cfyd/s7/2-1.jpg"),
              caption: '寶輝秋紅谷'
            },
            {
              url: require("@/projects/cfyd/s7/2-2.jpg"),
              caption: '寶輝秋紅谷'
            },
            {
              url: require("@/projects/cfyd/s7/2-3.jpg"),
              caption: '寶輝秋紅谷'
            },
            {
              url: require("@/projects/cfyd/s7/2-4.jpg"),
              caption: '寶輝秋紅谷'
            },
            {
              url: require("@/projects/cfyd/s7/2-5.jpg"),
              caption: '精銳博'
            },
            {
              url: require("@/projects/cfyd/s7/2-6.jpg"),
              caption: '精銳博'
            },]
        },
        {
          avatar: isMobile ? require("@/projects/cfyd/s7/3_m.jpg") : require("@/projects/cfyd/s7/3.jpg"),
          t1: 'STRUCTURE',
          t2: '安全首席&nbsp;&nbsp;守護家的根基',
          t3: '結構是房子最重要的骨幹，穩固、安全是我們最高守則！嚴格精算把關，讓精密結構，成就建築的永續思考。',
          t4: `<div class="cp">中泰結構 土木工程技師事務所</div>
                <div class="slash"></div>
                <div class="n1">結構技師</div>
                <div class="n2">蔡泰昌</div>`,
          t5: `鼎宇森之丘<br/>
                鼎宇美術臻邸<br/>
                鼎宇美術園<br/>
                國泰上品硯極上景<br/>
                國泰文林硯<br/>
                國泰文府硯<br/>
                美術高峰會<br/>
                太子城<br/>
                白玉岸`,
          imgs: [
            {
              url: require("@/projects/cfyd/s7/3-1.jpg"),
              caption: '鼎宇美術臻邸'
            },
            {
              url: require("@/projects/cfyd/s7/3-2.jpg"),
              caption: '國泰文府硯'
            },
            {
              url: require("@/projects/cfyd/s7/3-3.jpg"),
              caption: ''
            }
          ]
        },
      ]
    };
  },
  computed: {
  },

  methods: {
  },

  created() { },
  mounted() {
  },
};
</script>