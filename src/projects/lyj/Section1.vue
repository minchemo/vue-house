<template>
  <div class="section1">
    <div class="title">
      <div class="title-1">360度環景森海泳池俱樂部</div>
      <div class="title-2">全台首座聯名日本蔦屋</div>
    </div>
    <div class="title title-7">
      <div class="title-6">
      <div class="title-3"><span>2021</span>新灣區霸氣新作</div>
      <div class="title-4"><span>F</span>ORMOSA</div>
      </div>
      <div class="title-5">聯悦臻</div>
    </div>
      <div class="name">此圖為示意圖</div>
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
    top: calc(50% - 14.8vw);
    left: calc(50% - 36vw);
    z-index: 10;
    text-align: left;
    line-height: 1.6;
    color: #fff;
    font-size: size(18);

    div {
      position: relative;
      transition: all 0.5s;
      animation: text-out 5s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
    }

    .title-1,
    .title-2 {
      line-height: 1.6;
      letter-spacing: 0.6em;
      padding-left: 1.3em;
      margin-top: 0.4em;
      animation-delay: 500ms;
      font-weight: 300;
      transform: scaleX(0.95);
      transform-origin: 0 0;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 110%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 4s cubic-bezier(0, 0, 0.2, 1) 0s 1 forwards;
        animation-delay: 800ms;
      }
    }

    .title-3 {
      position: absolute;
      font-size:1.44444em;
      letter-spacing:0.4em;
      vertical-align: middle;
      font-weight: 300;
      top:0.4em;
      left: 3.9em;
      transform: scaleX(0.95);
      transform-origin: 0 0;
      span {
        font-family: "Arial", serif;
        font-size: 1.6em;
        letter-spacing: 0.05em;
        font-weight: bold;
        display: inline-block;margin: -0.16em 0.2em 0 0;
        vertical-align:inherit;
      }
   /*   &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 110%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
      }*/
    }
    .title-4 {
      font-family: "Arial", serif;
      font-size: 4.72em;
      font-weight: bold;
      margin:0.55em 0 0 0.16em;
      width: 10.5em;

      span {
        font-size: 1.5em; display: inline-block;margin: -0.15em -0.05em 0 0;}

      &::before {
        content: "";
        width:0;
        height: 1px;
        position: absolute;
        background: #fff;
        top:1.7em;
        left:-0.02em;
        animation: line-out 4s cubic-bezier(0, 0, 0.2, 1) 0.35s 1 forwards;
        animation-delay: 1.2s;
      }

      &::after {
        content: "";
        position: absolute;
        left: -1.2%;
        top: -10%;
        width: 100%;
        height: 90%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0.4s 1 forwards;
      }
    }
    .title-5 {
        position: absolute;
        left: 3.85em;
        top: 0em;
      font-size:6.5em;
      letter-spacing:0.1282em;
      padding-left:0.3846em;
      margin-top:0.2em;
      animation-delay: 400ms;
      white-space: nowrap;
/*
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
      }*/
    }
    &.title-7{
    top: calc(50% - 6.5vw);
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
        width: 0;
      }
      20%,
      35% {
        width: 0;
      }
      35%,
      100% {
        width:10.2em;
      }
    }
  }
.name{position: absolute;right: 2em;bottom: 1em;font-size: size(15);color: #fff;z-index: 5;opacity: 0.5;letter-spacing:0.2em;
      transform: scaleX(0.95);}
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
      //background: url("~@/projects/lyj/s1/資產 1-80.jpg") no-repeat center;
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
      top: size-m(60);
      left: size-m(24);
      font-size: size-m(16);
    .title-1,
    .title-2 {
      font-size: size-m(16);
       }
      .title-4 {
        margin: .8em 0 -0.5em 0.16em;
        &::before {
          top:0.45em;
          left:0.11em;
          transform: rotate(90deg);
          transform-origin: 0 0;
       }
      }
      .title-5 {
        position: relative;
        left: 0em;
        top: 0em;
      padding-left:0.4em;
      font-size:3.5em;
      margin-top:0em;
      }
      .title-6 {
        font-size: size-m(12);
      }
    &.title-7{
    top:size-m(130);
    }

    @keyframes line-out {
      0%,
      20% {
        width: 0;
      }
      20%,
      35% {
        width: 0;
      }
      35%,
      100% {
        width:2.5em;
      }
    }

  /*    .title-3 {
        font-size: size-m(30);
        letter-spacing: size-m(5);

        span {
          font-size: size-m(60);
          letter-spacing: size-m(2);
        }
      }
      .title-4 {
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
      .title-5 {
        font-size: size-m(25);
        letter-spacing: size-m(5);
        padding-left: size-m(20);
        margin-top: size-m(10);
        animation-delay: 0ms;
        &::after {
          animation-delay: 200ms;
        }
      }*/
    }
.name{font-size: size-m(12);}

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
