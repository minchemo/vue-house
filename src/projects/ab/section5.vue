<template>
  <div class="section5">
    <div class="main">
      <div class="title">
        <h5>CONSTRUCTION TEAM</h5>
        <h3>強強聯手策劃<br v-if="isMobile" />建築史上新經典</h3>
      </div>
      <div class="peoples">
        <div
          class="people"
          v-for="(people, i) in peoples"
          :key="i"
          data-aos="fade-left"
          :data-aos-delay="i * 100"
          @click="showDeatil(i)"
        >
          <div
            class="cover"
            v-bind:style="{ backgroundImage: `url(${people.img})` }"
          ></div>
          <div class="caption" v-html="people.title"></div>
          <div class="plus">＋</div>
        </div>
      </div>
    </div>

    <div class="fix-bar fix-bar-1"></div>
    <div class="fix-bar fix-bar-2"></div>
    <div class="fix-bar fix-bar-3"></div>
    <div class="fix-bar fix-bar-4"></div>

    <div class="people-detail" v-bind:class="{ active: detailShow }">
      <div
        class="bg"
        v-bind:style="{ backgroundImage: `url(${detailData.detailBg})` }"
      ></div>

      <div class="swiper-box">
        <h2 v-html="detailData.detailIntro"></h2>
        <swiper ref="swiper" :options="swiperOptions">
          <swiper-slide
            v-for="(imgList, i) in detailData.detailImg"
            v-bind:key="i"
            v-bind:style="{ backgroundImage: `url(${imgList})` }"
          >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="p-name" v-html="detailData.detailTitle"></div>
      <div class="close" @click="closeDeatil">×</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableColor.scss";
/* 螢幕尺寸標準 */
.section5 {
  height: auto;
  padding: 20vh 0 10vh 0;
  background-color: #d20028;
  overflow: hidden;

  .main {
    width: 80vw;
    margin: 0 auto;

    .title {
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translate(-50%, 0);
      color: #fff;
      font-family: $family1;
      h3 {
        margin-top: 10px;
        font-size: 32px;
      }
    }
    .peoples {
      display: flex;
      width: 100%;
      .people {
        width: calc(100% / 5);
        position: relative;
        .cover {
          width: 100%;
          padding-bottom: 206%;
          background-size: cover;
          background-repeat: no-repeat;
          filter: grayscale(1);
          transition: all 0.5s;
        }
        .caption {
          font-family: $family1;
          writing-mode: vertical-rl;
          z-index: 10;
          position: absolute;
          right: 12px;
          top: 24px;
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          .divider {
            color: #ffff00;
          }
          .large {
            font-size: 28px;
          }
        }

        .plus {
          position: absolute;
          right: 8px;
          bottom: 8px;
          z-index: 1;
          color: #fff;
          font-weight: bold;
          font-size: 32px;

          &:after {
            content: "";
            width: 50px;
            height: 160px;
            background: rgb(0, 0, 0);
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(210, 0, 40, 1) 100%
            );
            position: absolute;
            opacity: 0.45;
            right: -8px;
            bottom: -8px;
            z-index: -1;
            transform: translate(0, 160px);
            transition: all 0.5s;
          }
        }

        &:hover {
          cursor: pointer;
          .cover {
            filter: grayscale(0);
          }
          .plus {
            color: #ffef00;

            &:after {
              transform: translate(0, 0);
            }
          }
        }
      }
    }
  }

  .people-detail {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #fff;
    top: 0;
    left: 0;
    z-index: 1001;
    transition: all 0.2s;
    font-family: $family1;
    transform: translate(0, -100vh);
    opacity: 0.5;

    .bg {
      width: 100%;
      height: 100%;
      background-size: auto 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
    }

    .p-name {
      position: absolute;
      z-index: 1;
      left: 30px;
      bottom: 30px;
      text-align: right;
      color: #fff;
      line-height: 1.2;

      .name {
        font-size: 28px;
        font-weight: bold;
        margin-left: 10px;
      }
      .badge {
        font-size: 42px;
        font-weight: bold;
        opacity: 0.7;
      }
    }

    .swiper-box {
      position: absolute;
      right: 10%;
      top: 50%;
      transform: translate(0, -50%);
      width: 40vw;
      h2 {
        text-align: left;
        color: #d20028;
        font-size: 46px;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 15px;
      }
      .swiper-pagination-bullets {
        width: 100%;
        height: auto;
        display: block;
        right: unset;
        left: unset;
        bottom: 30px;

        .swiper-pagination-bullet {
          background: #fff;
          opacity: 1;
          width: 16px;
          height: 16px;
          margin: 6px;
          &.swiper-pagination-bullet-active {
            background: #d20028;
          }
        }
      }
      .swiper-slide {
        padding-bottom: 71.38%;
        background-size: cover;
      }
    }

    .close {
      position: absolute;
      right: 30px;
      top: 30px;
      z-index: 1;
      color: #d20028;
      font-size: 48px;
      cursor: pointer;
    }

    &.active {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  .fix-bar {
    background: rgba(231, 149, 14);
    background: linear-gradient(
      90deg,
      rgba(253, 227, 82, 1) 0%,
      rgba(231, 149, 14, 0.7) 20%,
      rgba(195, 13, 35, 0.3) 70%,
      rgba(195, 13, 35, 0) 100%
    );
    position: absolute;
    transition: all 0.5s;
    transform-origin: center;
    transform: scaleX(1);
    animation: animate 10s infinite;
    z-index: 1;

    &.fix-bar-1 {
      width: 20%;
      height: 6%;
      left: 18vw;
      top: 3vw;
      animation-delay: random(5) + s;
    }

    &.fix-bar-2 {
      width: 13%;
      height: 2%;
      left: 26vw;
      top: 2.5vw;
      animation-delay: random(5) + s;
    }
    &.fix-bar-3 {
      width: 13%;
      height: 2%;
      right: 10vw;
      top: 2.5vw;
      animation-delay: random(5) + s;
    }
    &.fix-bar-4 {
      width: 20%;
      height: 1%;
      right: 10vw;
      top: 6vw;
      animation-delay: random(5) + s;
    }

    @keyframes animate {
      0% {
        transform: scaleX(1);
      }
      50% {
        transform: scaleX(1.5);
      }
      100% {
        transform: scaleX(1);
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section5 {
    height: auto;
    padding: 180px 0 0 0;
    background-color: #d20028;

    .main {
      width: 100%;
      margin: 0 auto;

      .title {
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translate(-50%, 0);
        color: #fff;
        font-family: $family1;
        width: 100%;
        z-index: 10;
        h3 {
          margin-top: 16px;
          font-size: 32px;
        }
      }
      .peoples {
        display: flex;
        flex-direction: column;
        width: 100%;
        .people {
          width: 100%;
          position: relative;
          background-color: #757575;
          .cover {
            width: 100%;
            padding-bottom: 43.4%;
            background-size: 100%;
            background-position: left;
            filter: grayscale(1);
            transition: all 0.5s;
          }

          .plus {
            position: absolute;
            right: 16px;
            bottom: unset;
            top: 8px;
            z-index: 1;
            color: #fff;
            font-weight: bold;
            font-size: 32px;
            &:after {
              content: "";
              width: 100px;
              height: 45px;
              background: rgb(0, 0, 0);
              background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(210, 0, 40, 1) 100%
              );
              transform: translate(0, 0);
              position: absolute;
              opacity: 0.45;
              right: -16px;
              top: -8px;
              bottom: unset;
              z-index: -1;
            }
          }

          .caption {
            font-family: $family1;
            writing-mode: horizontal-tb;
            text-align: right;
            z-index: 1;
            position: absolute;
            right: 16px;
            bottom: 0;
            top: unset;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            line-height: 1.2;
            .divider {
              color: #ffff00;
            }
            .large {
              font-size: 22px;
            }
          }

          &:hover {
            cursor: pointer;
            .cover {
              filter: grayscale(0);
            }
          }
        }
      }
    }

    .fix-bar {
      background: rgba(231, 149, 14);
      background: linear-gradient(
        90deg,
        rgba(253, 227, 82, 1) 0%,
        rgba(231, 149, 14, 0.7) 20%,
        rgba(195, 13, 35, 0.3) 70%,
        rgba(195, 13, 35, 0) 100%
      );
      position: absolute;
      transition: all 0.5s;
      transform-origin: center;
      transform: scaleX(1);
      animation: animate 10s infinite;
      z-index: 1;

      &.fix-bar-1 {
        width: 30%;
        height: 3%;
        left: 0;
        top: 10vw;
        animation-delay: random(5) + s;
      }

      &.fix-bar-2 {
        width: 30%;
        height: 7%;
        left: -10vw;
        top: 20vw;
        animation-delay: random(5) + s;
      }
      &.fix-bar-3 {
        width: 30%;
        height: 2%;
        right: -15vw;
        top: 8vw;
        animation-delay: random(5) + s;
      }
      &.fix-bar-4 {
        width: 30%;
        height: 1%;
        right: -5vw;
        top: 30vw;
        animation-delay: random(5) + s;
      }

      @keyframes animate {
        0% {
          transform: scaleX(1);
        }
        50% {
          transform: scaleX(1.5);
        }
        100% {
          transform: scaleX(1);
        }
      }
    }

    .people-detail {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #fff;
      top: 0;
      left: 0;
      z-index: 1001;
      font-family: $family1;
      transform: translate(100%, 0);
      transition: all 0.5s;

      .bg {
        width: 100%;
        height: 50%;
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        left: 0;
        top: unset;
      }

      .p-name {
        position: absolute;
        z-index: 1;
        left: unset;
        right: 30px;
        bottom: 30px;
        text-align: right;
        color: #fff;
        line-height: 1.2;

        .name {
          font-size: 28px;
          font-weight: bold;
          margin-left: 10px;
        }
        .badge {
          font-size: 7.5vw;
          font-weight: bold;
          opacity: 0.7;
        }
      }

      .swiper-box {
        position: absolute;
        right: 0;
        top: 0;
        transform: unset;
        width: 100vw;
        h2 {
          text-align: left;
          color: #d20028;
          font-size: 7vw;
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: 0;
          padding: 8vw;
          padding-top: 10vw;
          background: #fff;
          white-space: nowrap;
        }
        .swiper-pagination-bullets {
          width: 100%;
          height: auto;
          display: block;
          right: unset;
          left: unset;
          bottom: 30px;

          .swiper-pagination-bullet {
            background: #fff;
            opacity: 1;
            width: 12px;
            height: 12px;
            margin: 4px;
            &.swiper-pagination-bullet-active {
              background: #d20028;
            }
          }
        }
        .swiper-slide {
          padding-bottom: 71.38%;
          background-size: cover;
        }
      }

      .close {
        position: absolute;
        right: 5vw;
        top: 5vw;
        z-index: 1;
        color: #d20028;
        font-size: 48px;
        cursor: pointer;
      }

      &.active {
        transform: translate(0, 0);
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import style (>= Swiper 6.x)
import "swiper/css/swiper.css";
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "section5",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },

  data() {
    return {
      detailShow: false,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      detailData: {
        title: !isMobile
          ? '名門血統／虹耀建設 <span class="divider">｜</span>執行長／ <span class="large">陳柏亘</span>'
          : '名門血統／虹耀建設<br> <span class="divider">｜</span>執行長／ <span class="large"><br>陳柏亘</span>',
        img: require("@/projects/ab/s5/p1.jpg"),
        detailBg: isMobile
          ? require("@/projects/ab/s5/detail/a-mo.jpg")
          : require("@/projects/ab/s5/detail/a.jpg"),
        detailTitle:
          '執行長<span class="name">陳柏亘</span><br><span class="badge">名門血統/虹耀建設</span>',
        detailIntro: "精挑最優質地段<br>蓋人人住得起的「好宅」",
        detailImg: [require("@/projects/ab/s5/detail/1.jpg")],
      },
      peoples: [
        {
          title: !isMobile
            ? '名門血統／虹耀建設 <span class="divider">｜</span>執行長／ <span class="large">陳柏亘</span>'
            : '名門血統／虹耀建設<br> <span class="divider">｜</span>執行長／ <span class="large"><br>陳柏亘</span>',
          img: isMobile
            ? require("@/projects/ab/s5/mo-p1.jpg")
            : require("@/projects/ab/s5/p1.jpg"),
          detailBg: isMobile
            ? require("@/projects/ab/s5/detail/a-mo.jpg")
            : require("@/projects/ab/s5/detail/a.jpg"),
          detailTitle:
            '執行長<span class="name">陳柏亘</span><br><span class="badge">名門血統/虹耀建設</span>',
          detailIntro: "精挑最優質地段<br>蓋人人住得起的「好宅」",
          detailImg: [require("@/projects/ab/s5/detail/1.jpg")],
        },
        {
          title: !isMobile
            ? '名宅工藝／森城營造 <span class="divider">｜</span>董事長／ <span class="large">鄒開鑄</span>'
            : '名宅工藝／森城營造<br> <span class="divider">｜</span>董事長／ <span class="large"><br>鄒開鑄</span>',
          img: isMobile
            ? require("@/projects/ab/s5/mo-p2.jpg")
            : require("@/projects/ab/s5/p2.jpg"),
          detailBg: isMobile
            ? require("@/projects/ab/s5/detail/b-mo.jpg")
            : require("@/projects/ab/s5/detail/b.jpg"),
          detailTitle:
            '董事長<span class="name">鄒開鑄</span><br><span class="badge">名宅工藝/森城營造</span>',
          detailIntro: "半世紀建築經驗<br>職人紮實精鑄成就完美",
          detailImg: [
            require("@/projects/ab/s5/detail/2.jpg"),
            require("@/projects/ab/s5/detail/3.jpg"),
          ],
        },
        {
          title: !isMobile
            ? '名家美學／林峰池建築師 <span class="divider">｜</span>建築師／ <span class="large">林峰池</span>'
            : '名家美學／林峰池建築師<br> <span class="divider">｜</span>建築師／ <span class="large"><br>林峰池</span>',
          img: isMobile
            ? require("@/projects/ab/s5/mo-p3.jpg")
            : require("@/projects/ab/s5/p3.jpg"),
          detailBg: isMobile
            ? require("@/projects/ab/s5/detail/c-mo.jpg")
            : require("@/projects/ab/s5/detail/c.jpg"),
          detailTitle:
            '建築師<span class="name">林峰池</span><br><span class="badge">名家美學/林峰池建築師</span>',
          detailIntro: "揉和城市五感地貌<br>以建築捏塑幸福載體",
          detailImg: [
            require("@/projects/ab/s5/detail/4.jpg"),
            require("@/projects/ab/s5/detail/5.jpg"),
          ],
        },
        {
          title: !isMobile
            ? '名園造景／六國景觀 <span class="divider">｜</span>設計師／<span class="large">蘇瑞泉</span>'
            : '名園造景／六國景觀<br> <span class="divider">｜</span>設計師／<span class="large"><br>蘇瑞泉</span>',
          img: isMobile
            ? require("@/projects/ab/s5/mo-p4.jpg")
            : require("@/projects/ab/s5/p4.jpg"),
          detailBg: isMobile
            ? require("@/projects/ab/s5/detail/d-mo.jpg")
            : require("@/projects/ab/s5/detail/d.jpg"),
          detailTitle:
            '設計師<span class="name">蘇瑞泉</span><br><span class="badge">名園造景/六國景觀</span>',
          detailIntro: "倫敦設計金獎團隊<br>描繪城市共好綠皮書",
          detailImg: [
            require("@/projects/ab/s5/detail/6.jpg"),
            require("@/projects/ab/s5/detail/7.jpg"),
            require("@/projects/ab/s5/detail/8.jpg"),
          ],
        },
        {
          title: !isMobile
            ? '名邸公設／元佑設計 <span class="divider">｜</span>總   監／<span class="large">李志成</span>'
            : '名邸公設／元佑設計<br> <span class="divider">｜</span>總   監／<span class="large"><br>李志成</span>',
          img: isMobile
            ? require("@/projects/ab/s5/mo-p5.jpg")
            : require("@/projects/ab/s5/p5.jpg"),
          detailBg: isMobile
            ? require("@/projects/ab/s5/detail/e-mo.jpg")
            : require("@/projects/ab/s5/detail/e.jpg"),
          detailTitle:
            '總   監<span class="name">李志成</span><br><span class="badge">名邸公設／元佑設計</span>',
          detailIntro: "美學推手精準架構<br>家門外的璀燦社交場域",
          detailImg: [
            require("@/projects/ab/s5/detail/9.jpg"),
            require("@/projects/ab/s5/detail/10.jpg"),
            require("@/projects/ab/s5/detail/11.jpg"),
          ],
        },
      ],
      isMobile,
    };
  },

  methods: {
    showDeatil(index) {
      this.detailShow = true;
      const peopleData = this.peoples[index];
      this.detailData = peopleData;
    },
    closeDeatil() {
      this.detailShow = false;
    },
    optimizeDetailBg() {
      const totalHeight = $(".section5 .people-detail").height();
      const existHeight = $(".section5 .people-detail .swiper-box").height();
      const targetHeight = totalHeight - existHeight;

      $(".section5 .people-detail .bg").height(targetHeight);
    },
  },

  mounted() {
    if (isMobile) {
      this.optimizeDetailBg();
    }
  },
  created() {},
};
</script>
