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
          @click="showDeatil()"
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
      <div class="close" @click="closeDeatil()">×</div>
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
          z-index: 1;
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
        }

        &:hover {
          cursor: pointer;
          .cover {
            filter: grayscale(0);
          }
          .plus {
            color: #ffef00;
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
    z-index: 1000;
    display: none;
    transition: all 3s;

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
      display: block;
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
    padding: 20vh 0 10vh 0;
    background-color: #d20028;

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
            background-size: 40%;
            background-position: 0px -30px;
            filter: grayscale(1);
            transition: all 0.5s;
            mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0) 41%
            );
          }
          .caption {
            font-family: $family1;
            writing-mode: horizontal-tb;
            text-align: right;
            z-index: 1;
            position: absolute;
            right: 20px;
            bottom: 0;
            top: unset;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            line-height: 1.2;
            .divider {
              color: #ffff00;
            }
            .large {
              font-size: 24px;
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
      detailShow: false,
      detailData: {
          
      },
      peoples: [
        {
          title: !isMobile
            ? '名門血統／虹耀建設 <span class="divider">｜</span>執行長／ <span class="large">陳柏亘</span>'
            : '名門血統／虹耀建設<br> <span class="divider">｜</span>執行長／ <span class="large"><br>陳柏亘</span>',
          img: require("@/projects/ab/s5/p1.jpg"),
        },
        {
          title: !isMobile
            ? '名宅工藝／森城營造 <span class="divider">｜</span>董事長／ <span class="large">鄒開鑄</span>'
            : '名宅工藝／森城營造<br> <span class="divider">｜</span>董事長／ <span class="large"><br>鄒開鑄</span>',
          img: require("@/projects/ab/s5/p2.jpg"),
        },
        {
          title: !isMobile
            ? '名家美學／林峰池建築 <span class="divider">｜</span>建築師／ <span class="large">林峰池</span>'
            : '名家美學／林峰池建築<br> <span class="divider">｜</span>建築師／ <span class="large"><br>林峰池</span>',
          img: require("@/projects/ab/s5/p3.jpg"),
        },
        {
          title: !isMobile
            ? '名園造景／六國景觀 <span class="divider">｜</span>設計師／<span class="large">蘇瑞泉</span>'
            : '名園造景／六國景觀<br> <span class="divider">｜</span>設計師／<span class="large"><br>蘇瑞泉</span>',
          img: require("@/projects/ab/s5/p4.jpg"),
        },
        {
          title: !isMobile
            ? '名邸公設／元佑設計 <span class="divider">｜</span>總   監／<span class="large">李志成</span>'
            : '名邸公設／元佑設計<br> <span class="divider">｜</span>總   監／<span class="large"><br>李志成</span>',
          img: require("@/projects/ab/s5/p5.jpg"),
        },
      ],
      isMobile,
    };
  },

  methods: {
    showDeatil() {
      this.detailShow = true;
    },
    closeDeatil() {
      this.detailShow = false;
    },
  },

  created() {},
};
</script>
