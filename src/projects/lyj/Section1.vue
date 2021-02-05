<template>
  <div class="section1">
    <div class="title">
      <div class="title-1"><span>2021</span>聯悅臻</div>
      <div class="title-2">FORMOSA</div>
      <div class="title-3">新灣區霸氣新作</div>
      <div class="title-4">360度環景森海泳池俱樂部 ╳</div>
      <div class="title-5">全台首座聯名日本蔦屋</div>
    </div>
    <div class="bg">
      <div class="bg-mask"></div>
      <div class="bg-img"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/function.scss";

/* 螢幕尺寸標準 */
.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(830);
  max-height: size(1080);
  position: relative;
  overflow: hidden;

  .title {
    font-family: "Noto Sans TC", serif;
    position: absolute;
    top: size(125);
    left: size(125);
    z-index: 10;
    text-align: left;
    color: #fff;

    div {
      position: relative;
      transition: all 0.5s;
      animation: text-out 5s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
    }

    .title-1 {
      font-size: size(55);
      letter-spacing: size(15);

      span {
        font-family: "Arial", serif;
        font-size: size(130);
        letter-spacing: size(10);
        font-weight: bold;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 110%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
      }
    }
    .title-2 {
      font-family: "Arial", serif;
      font-size: size(130);
      font-weight: bold;
      margin-top: size(10);

      &::before {
        content: "";
        width: 1px;
        height: 0;
        position: absolute;
        background: #fff;
        top: size(108);
        left: size(10);
        animation: line-out 4s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
        animation-delay: 1.2s;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 110%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
      }
    }
    .title-3 {
      font-size: size(50);
      letter-spacing: size(15);
      padding-left: size(45);
      margin-top: size(25);
      animation-delay: 400ms;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 110%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
        animation-delay: 400ms;
      }
    }
    .title-4 {
      font-size: size(35);
      letter-spacing: size(7);
      padding-left: size(45);
      margin-top: size(85);
      animation-delay: 500ms;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 110%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
        animation-delay: 800ms;
      }
    }
    .title-5 {
      font-size: size(35);
      letter-spacing: size(7);
      padding-left: size(45);
      margin-top: size(15);
      animation-delay: 500ms;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 110%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
        animation-delay: 800ms;
      }
    }

    @keyframes text-mask-out {
      0%,
      20% {
        background-position: -100vw 0;
      }
      20%,
      60% {
        background-position: 0 0;
      }
      60%,
      100% {
        background-position: 100vw 0;
      }
    }

    @keyframes text-out {
      0%,
      20% {
        color: rgba(0, 0, 0, 0);
      }
      20%,
      35% {
        color: rgba(0, 0, 0, 0);
      }
      35%,
      100% {
        color: rgba(255, 255, 255, 1);
      }
    }

    @keyframes line-out {
      0%,
      20% {
        height: 0;
      }
      20%,
      35% {
        height: 0;
      }
      35%,
      100% {
        height: size(285);
      }
    }
  }

  .bg {
    width: 100%;
    height: 100%;

    div {
      width: 100%;
      height: 100%;
      position: absolute;
      transition: all 0.3s;
    }
    .bg-mask {
      background: linear-gradient(left, #055276, #055276) no-repeat 100vw 0;
      background-size: cover;
      animation: bg-mask-out 1.2s;
      z-index: 2;
    }
    .bg-img {
      background: url(~@/projects/lyj/s1/bg.png) no-repeat center;
      background-size: cover;
      animation: bg-zoom-in 2.8s;
      z-index: 1;
    }

    @keyframes bg-zoom-in {
      from {
        transform: scale(1.4);
      }
      to {
        transform: scale(1);
      }
    }

    @keyframes bg-mask-out {
      0%,
      50% {
        background-position: 0 0;
      }
      100% {
        background-position: 100vw 0;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    height: calc(100vh - 63px);
  min-height: size-m(604);
  max-height: size-m(812);
    overflow: hidden;

    .title {
      top: size-m(50);
      left: size-m(30);

      .title-1 {
        font-size: size-m(30);
        letter-spacing: size-m(5);

        span {
          font-size: size-m(60);
          letter-spacing: size-m(2);
        }
      }
      .title-2 {
        font-size: size-m(60);
        margin-top: size-m(5);

        &::before {
          top: size-m(50);
          left: size-m(4);
        }

        @keyframes line-out {
          0%,
          20% {
            height: 0;
          }
          20%,
          35% {
            height: 0;
          }
          35%,
          100% {
            height: size-m(140);
          }
        }
      }
      .title-3 {
        font-size: size-m(25);
        letter-spacing: size-m(5);
        padding-left: size-m(20);
        margin-top: size-m(10);
        animation-delay: 0ms;
        &::after {
          animation-delay: 200ms;
        }
      }
      .title-4 {
        font-size: size-m(16);
        letter-spacing: size-m(5);
        padding-left: size-m(20);
        margin-top: size-m(40);
        animation-delay: 0ms;
        &::after {
          animation-delay: 200ms;
        }
      }
      .title-5 {
        font-size: size-m(16);
        letter-spacing: size-m(5);
        padding-left: size-m(20);
        margin-top: size-m(15);
        animation-delay: 0ms;
        &::after {
          animation-delay: 200ms;
        }
      }
    }

    .bg {
      div {
        background-size: cover;
      }

      .bg-img {
        background: url(~@/projects/lyj/mo/s1/bg.jpg) no-repeat top center;
        background-size: cover;
      }
    }

    @keyframes text-out {
      0%,
      20% {
        color: rgba(0, 0, 0, 0);
      }
      20%,
      35% {
        color: rgba(0, 0, 0, 0);
      }
      35%,
      100% {
        color: rgba(255, 255, 255, 1);
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
  name: "default",

  data() {
    return {
      isMobile
    };
  },

  methods: {},

  created() {}
};
</script>
