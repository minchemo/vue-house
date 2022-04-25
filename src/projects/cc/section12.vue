<template>
  <div class="section12">
    <h1 uk-parallax="viewport: 0.5;blur:50,0">
      精銳團隊深度策劃<br />
      名邸建築新風貌
    </h1>
    <div class="swiper-box" uk-parallax="viewport: 0.3;blur:50,0;">
      <swiper :options="swiperOptions" ref="swiper">
        <swiper-slide class="slide" v-for="(slide, i) in slides" v-bind:key="i">
          <div class="left">
            <div
              class="avatar"
              v-bind:style="{ backgroundImage: `url('${slide.avatar}')` }"
            ></div>
            <div class="info">
              <div class="t1" v-html="slide.t1"></div>
              <div class="t2" v-html="slide.t2"></div>
              <div class="t3" v-html="slide.t3"></div>
              <div class="t4" v-html="slide.t4"></div>
            </div>
          </div>
          <div class="right">
            <div class="t5" v-html="slide.t5"></div>
            <div class="t6" v-html="slide.t6" v-if="!isMobile"></div>
            <div class="flex">
              <div class="exp">
                <div class="t">經歷</div>
                <p v-html="slide.exps"></p>
              </div>
              <div class="works">
                <div class="t">經典作品</div>
                <p v-html="slide.works"></p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagi"></div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section12 {
  position: relative;
  height: auto;
  background-image: url("~@/projects/cc/s12/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: size(1200);
  z-index: 1;
  h1 {
    color: #fff;
    text-align: left;
    position: absolute;
    top: size(220);
    left: size(163);
    font-size: size(50);
    letter-spacing: size(20);
    line-height: 1.25;
  }

  .swiper-box {
    position: absolute;
    top: size(289);
    left: 0;
    width: size(1920);
    .slide {
      display: flex;
      align-items: flex-end;
      .left {
        position: relative;
        margin-right: size(135);
        .avatar {
          width: size(774.18);
          height: size(529);
          background-size: cover;
        }
        .info {
          position: absolute;
          z-index: 5;
          left: size(162);
          top: size(209);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .t1 {
            font-size: size(16);
            align-self: center;
            letter-spacing: size(5);
          }
          .t2 {
            letter-spacing: size(8);
            font-size: size(30);
            padding: size(8) size(18);
            border: size(2) solid #fff;
            margin-top: size(13);
          }
          .t3 {
            margin-top: size(46);
            font-size: size(20.33);
            letter-spacing: size(5);
          }
          .t4 {
            margin-top: size(14);
            font-size: size(30);
            letter-spacing: size(5);
          }
        }
      }
      .right {
        color: #fff;
        text-align: left;
        .t5 {
          font-size: size(30);
          margin-bottom: size(46);
          letter-spacing: size(8);
        }
        .t6 {
          font-size: size(24);
          letter-spacing: size(6);
          line-height: 1.5;
          max-width: size(848);
          margin-bottom: size(130);
        }
        .flex {
          justify-content: space-between;
          .exp {
            .t {
              padding: size(11) size(22);
              font-size: size(24);
              border: size(2) solid #fff;
              display: inline-block;
              letter-spacing: size(5);
              margin-bottom: size(24);
            }
            p {
              font-size: size(17);
              letter-spacing: size(5);
              line-height: 2.5;
            }
          }
          .works {
            .t {
              padding: size(11) size(22);
              font-size: size(24);
              border: size(2) solid #fff;
              display: inline-block;
              letter-spacing: size(5);
              margin-bottom: size(24);
            }
            p {
              font-size: size(17);
              letter-spacing: size(5);
              line-height: 2.5;
            }
          }
        }
      }
    }
    .swiper-pagi {
      position: absolute;
      left: size(162);
      bottom: -#{size(30)};
      z-index: 10;
      .swiper-pagination-bullet {
        width: size(55.58);
        height: size(8.79);
        border-radius: 0;
        border: size(1) solid #fff;
        margin-right: size(8);
        opacity: 1;
        background: transparent;
        &.swiper-pagination-bullet-active {
          background: #fff;
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
  .section12 {
    position: relative;
    height: size-m(709);
    z-index: 1;
    background-image: url("~@/projects/cc/s12/bg_m.png");
    h1 {
      text-align: center;
      top: size-m(37);
      left: size-m(76);
      font-size: size-m(20);
      letter-spacing: size-m(8);
      line-height: 1.35;
    }

    .swiper-box {
      position: absolute;
      top: size-m(105);
      left: 0;
      width: 100%;
      .slide {
        align-items: center;
        flex-direction: column;
        .left {
          position: relative;
          margin-right: 0;
          width: 100%;
          .avatar {
            width: size-m(350);
            height: size-m(208);
            background-size: cover;
          }
          .info {
            position: absolute;
            z-index: 5;
            left: size-m(32);
            top: size-m(70);
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .t1 {
              font-size: size-m(8);
              align-self: center;
              letter-spacing: size-m(1);
            }
            .t2 {
              letter-spacing: size-m(8);
              font-size: size-m(16);
              padding: size-m(4) size-m(10);
              border: size-m(1) solid #fff;
              margin-top: size-m(4);
            }
            .t3 {
              margin-top: size-m(20);
              font-size: size-m(12);
              letter-spacing: size-m(5);
            }
            .t4 {
              margin-top: size-m(10);
              font-size: size-m(16);
              letter-spacing: size-m(5);
            }
          }
        }
        .right {
          color: #fff;
          text-align: left;
          .t5 {
            text-align: center;
            width: 100%;
            font-size: size-m(16);
            margin-top: size-m(25);
            margin-bottom: size-m(25);
            letter-spacing: size-m(4);
          }
          .flex {
            justify-content: space-between;
            flex-direction: column;
            .exp {
              .t {
                padding: size-m(8) size-m(10);
                font-size: size-m(12);
                border: size-m(1) solid #fff;
                display: inline-block;
                letter-spacing: size-m(5);
                margin-bottom: size-m(4);
              }
              p {
                font-size: size-m(12);
                letter-spacing: size-m(5);
                line-height: 1.7;
              }
            }
            .works {
              .t {
                padding: size-m(8) size-m(10);
                font-size: size-m(12);
                border: size-m(1) solid #fff;
                display: inline-block;
                letter-spacing: size-m(5);
                margin-top: size-m(8);
                margin-bottom: size-m(4);
              }
              p {
                font-size: size-m(12);
                letter-spacing: size-m(5);
                line-height: 1.7;
              }
            }
          }
        }
      }
      .swiper-pagi {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -#{size-m(20)};
        z-index: 10;
        .swiper-pagination-bullet {
          width: size-m(23.71);
          height: size-m(3.75);
          border: size-m(1) solid #fff;
          margin-right: size-m(4);
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
  name: "section12",
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
      slides: [
        {
          avatar: require('@/projects/cc/s12/1.png'),
          t1: 'ARCHITECTURE',
          t2: '建築設計',
          t3: 'A8建築師事務所',
          t4: '陳朝雄',
          t5: '低調卻耐人尋味 鑄刻雋永當代建築',
          t6: '入選2020台灣十大建築師排行榜，在大台北打造無數經典建築佳績。以流暢曲線色調平衡建築量體呈現精緻美學風貌，為副都心名邸特區構建風範經典。',
          exps: `2020 台灣十大建築師`,
          works: `北投︱令和<br>
新店︱波爾多．晴山滙<br>
三重︱繽麗．仁仁愛．仁仁河<br>
新莊︱新泰陽系列<br>
板橋︱江南STAR．高妍植<br>
土城︱金城舞系列`
        },
        {
          avatar: require('@/projects/cc/s12/2.png'),
          t1: 'LANDSCAP',
          t2: '庭園景觀',
          t3: '大漢景觀',
          t4: '徐世萃',
          t5: '私藏一座御花園 家門外的微型生態系',
          t6: '建築與土地之間，應有更和諧的對話。將四季風貌帶入設計考量，讓園藝景觀與基地自然共生，四時之中切換生動風景，柔軟每一位回家旅人的心。',
          exps: `陶朱隱園空中花園景觀設計競圖 首獎<br>
建築園冶獎 (建築中庭景觀類)<br>
建築園冶獎 (大樓建築景觀類)`,
          works: `信義區︱陶朱隱園．ATT百貨．維多麗亞酒店<br>
新店︱碧波白<br>
中和︱太陽帝國<br>
板橋︱高妍植2藝樹家<br>
高雄︱寶家大謙．寶家澄峰<br>
屏東︱墾丁凱撒大飯店`
        },
        {
          avatar: require('@/projects/cc/s12/3.png'),
          t1: 'INTERIOR SPACE',
          t2: '建築設計',
          t3: '呈境設計',
          t4: '袁世賢',
          t5: isMobile ? '空間帶領生活 體現新名邸居住品味' : '空間帶領生活 體現風格居住美學',
          t6: '將「人」視為空間主體，呈境設計賦予空間場域上美學與實用兼俱的價值，透過構件排序組合與光影變化提升空間層次，借景入室拓展了家的尺度。',
          exps: `IF DESIGN AWARD 最佳餐飲空間<br>
IF DESIGN AWARD 最佳住宅空間<br>
IF DESIGN AWARD 最佳旅宿空間<br>
A’DESIGN AWARD 室內空間設計`,
          works: `台北︱打狗霸 德立莊<br>
中和︱太陽帝國<br>
板橋︱高妍植2藝樹家<br>
台南︱煙波隱糧餐酒館．OINN巷弄潮旅<br>
高雄︱鈞怡大飯店<br>
花蓮︱煙波大飯店`
        }
      ],
      swiperOptions: {
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.section12 .swiper-pagi',
          clickable: true
        }
      },
    };
  },

  methods: {},

  created() { },
};
</script>
