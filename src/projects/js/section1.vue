<template>
  <div class="section1">
    <div class="draw">
      <!--右下人物-->
      <img class="draw1" src="@/projects/js/s1/draw1.png" alt="" srcset="" />
      <img
        class="draw1-cattail"
        src="@/projects/js/s1/draw1-cattail.png"
        alt=""
        srcset=""
      />

      <!--左上樹葉-->
      <img class="draw2" src="@/projects/js/s1/draw2.png" alt="" srcset="" />
      <img
        class="draw2-bird"
        src="@/projects/js/s1/draw2-bird.png"
        alt=""
        srcset=""
      />
      <img
        class="draw2-leaf1"
        src="@/projects/js/s1/draw2-leaf1.png"
        alt=""
        srcset=""
      />
      <img
        class="draw2-leaf2"
        src="@/projects/js/s1/draw2-leaf2.png"
        alt=""
        srcset=""
      />

      <div class="fall-container">
        <img src="@/projects/js/s1/fall-leaf/1.png" />
        <img class="leaf1" src="@/projects/js/s1/fall-leaf/1.png" />
        <img class="leaf2" src="@/projects/js/s1/fall-leaf/2.png" />
        <img class="leaf3" src="@/projects/js/s1/fall-leaf/3.png" />
        <img class="leaf4" src="@/projects/js/s1/fall-leaf/4.png" />
        <img class="leaf5" src="@/projects/js/s1/fall-leaf/5.png" />
        <img class="leaf6" src="@/projects/js/s1/fall-leaf/6.png" />
        <img class="leaf7" src="@/projects/js/s1/fall-leaf/7.png" />
        <img class="leaf8" src="@/projects/js/s1/fall-leaf/8.png" />
        <img class="leaf9" src="@/projects/js/s1/fall-leaf/9.png" />
        <img class="leaf10" src="@/projects/js/s1/fall-leaf/10.png" />
      </div>
    </div>
    <div class="title-box">
      <img
        class="title-logo"
        src="@/projects/js/s1/logo.png"
        alt=""
        srcset=""
      />
      <img
        class="logo-cattail"
        src="@/projects/js/s1/logo-cattail.png"
        alt=""
        srcset=""
      />
      <div class="order">
        <img
          class="order-leaf"
          src="@/projects/js/s1/order-leaf.png"
          alt=""
          srcset=""
        />
        <p>搶先<br />預約</p>
      </div>
      <div class="subtitle">首席校園宅2-3房，40米大棟距</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section1 {
  margin-top: 60px;
  height: calc(100vh - 60px);
  background-color: #fdd93f;
  overflow: hidden;
  position: relative;
  .title-box {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    .title-logo {
      width: 400px;
    }
    .logo-cattail {
      position: absolute;
      width: 3.5%;
      right: 55.5%;
      bottom: 38%;
      animation: tail-rotate 5s ease-in-out;
      animation-iteration-count: infinite;
      transform-origin: right top;
      transform: rotate(0deg);

      @keyframes tail-rotate {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-20deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
    .subtitle {
      border: 3px solid #fff;
      border-radius: 50px;
      font-size: 48px;
      font-weight: bolder;
      padding: 36px;
      color: #000;
      margin-top: 48px;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .order {
      position: absolute;
      left: -150px;
      bottom: -100px;
      cursor: pointer;
      transition: all 0.5s;
      &:hover img {
        transform: rotate(-10deg);
      }
      &:hover p {
        color: #000;
      }
      img {
        width: 200px;
        transition: all 0.5s;
      }
      p {
        transition: all 0.5s;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-35%, -30%);
        font-size: 40px;
        color: #fff;
        font-weight: bolder;
        letter-spacing: 4px;
        line-height: 1.2;
      }
    }
  }

  .draw {
    > img {
      position: absolute;
    }
    .draw1 {
      width: 80%;
      right: 0;
      bottom: -5px;
    }
    .draw1-cattail {
      width: 3.5%;
      right: 27vw;
      bottom: 2.7vw;
      animation: tail-rotate 5s ease-in-out;
      animation-iteration-count: infinite;
      transform-origin: right top;
      transform: rotate(0deg);

      @keyframes tail-rotate {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-20deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
    .draw2 {
      width: 40%;
      left: -1%;
      top: 0;
      animation: tree-skew 10s ease-in-out;
      animation-iteration-count: infinite;
      transform-origin: left;
      transform: skew(0, 0);
    }
    .draw2-bird {
      width: 3.5%;
      left: 13vw;
      top: 6.7vw;
      animation: bird-skew 4s ease-in-out;
      animation-iteration-count: infinite;
      transform-origin: center;
      transform: skew(0, 0);
    }
    .draw2-leaf1 {
      width: 30%;
      left: 0vw;
      top: 6.7vw;
    }
    .draw2-leaf2 {
      width: 30%;
      left: 10vw;
      top: 6.7vw;
    }

    @keyframes tail-rotate {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    @keyframes tree-skew {
      0% {
        transform: skew(0, 0);
      }
      50% {
        transform: skew(3deg, 0deg);
      }
      100% {
        transform: skew(0, 0);
      }
    }

    @keyframes bird-skew {
      0% {
        transform: skew(0, 0);
      }
      50% {
        transform: skew(8deg, 8deg);
      }
      100% {
        transform: skew(0, 0);
      }
    }

    .fall-container {
      height: 100vh;
      overflow: hidden;
      position: relative;

      img {
        max-width: 50px;
        position: absolute;
        transform-origin: 0px -800px 0px;
        animation-name: fall, sway;
        animation-duration: 14s, 14s;
        animation-fill-mode: both;
        animation-timing-function: linear, ease-in-out;
        animation-iteration-count: infinite;
        opacity: 0;
      }

      .leaf {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
      }
      .leaf1 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf2 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf3 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf4 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf5 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf6 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf7 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf8 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf9 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
      .leaf10 {
        top: -#{random(200)}px;
        left: #{random(100)}vw;
        animation-delay: #{random(10)}s;
      }
    }

    @keyframes sway {
      0% {
        transform: rotateZ(-15deg) rotateX(55deg);
      }
      30% {
        transform: rotateZ(20deg) rotateX(80deg);
        animation-timing-function: ease-in-out;
      }
      60% {
        transform: rotateZ(-20deg) rotateX(55deg);
        animation-timing-function: ease-in-out;
      }
      100% {
        transform: rotateZ(0deg) rotateX(10deg);
        animation-timing-function: ease-in-out;
      }
    }

    @keyframes fall {
      20% {
        opacity: 1;
      }
      100% {
        margin-top: 150vh;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
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
  name: "section1",

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
