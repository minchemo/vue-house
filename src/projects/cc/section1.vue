<template>
  <div class="section1">
    <img
      class="logo"
      v-lazy
      :temp="require('./s1/logo.svg')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.8;blur:0,10;y: 0,-10;x:0,-10"
    />
    <div class="img" data-aos="fade">
      <img
        class="img11"
        v-lazy
        :temp="require('./s1/11.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img10"
        v-lazy
        :temp="require('./s1/10.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img9"
        v-lazy
        :temp="require('./s1/9.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img8"
        v-lazy
        :temp="require('./s1/8.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img7"
        v-lazy
        :temp="require('./s1/7.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img6"
        v-lazy
        :temp="require('./s1/6.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img5"
        v-lazy
        :temp="require('./s1/5.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img4"
        v-lazy
        :temp="require('./s1/4.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img3"
        v-lazy
        :temp="require('./s1/3.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img2" v-if="!isMobile"
        v-lazy
        :temp="require('./s1/2.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
      <img
        class="img1" v-if="!isMobile"
        v-lazy
        :temp="require('./s1/1.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.5;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section1 {
  position: relative;
  height:calc(100vh + 2.6vw);
  min-height: size(950);
  max-height: size(1130);
  background: #fff362;
  z-index: 1;
 // background: url("./s1/pc.jpg") center;
  background-size: cover;
  .logo {
    position: absolute;
    z-index: 1;
    left: size(320);
    top: calc(50% + (225 - 540) * 100vw / 1920);
    width: size(559);
  }
  .img{
    position: absolute;
    top: 50%;
    left: 50%;
    width:  size(300);
    height: size(300);
    img{position: absolute;
    transition:transform 1s 1s;}
    .img1{
    top: 70%;
    left: -347%;
      width: calc(242 / 300 * 100%);
      transform: translate(10%,-10%);
    }
    .img2{
    top: -78%;
    left: -320%;
      width: calc(187 / 300 * 100%);
      transform: translate(-10%,-10%)scale(0.8)
    }
    .img3{
    top: -127%;
    left: 22%;
      width: calc(633 / 300 * 100%);
      transform: translate(10%,10%)scale(0.8);
      }
    .img4{
    top: 33%;
    left: 12%;
      width: calc(552 / 300 * 100%);
      transform: translate(10%,-10%)scale(0.8);
      }
    .img5{
    top: -112%;
    left: 132%;
      width: calc(390 / 300 * 100%);
      transform: translate(-10%,10%)scale(0.8);
      }
    .img6{
    top: -12%;
    left: 146%;
      width: calc(340 / 300 * 100%);
      transform: translate(-10%,-10%)scale(0.8);
      }
    .img7{
    top: -34%;
    left: 144%;
      width: calc(369 / 300 * 100%);
      transform: scale(0.8);
      }
    .img8{
    top: -24%;
    left: 149%;
      width: calc(212 / 300 * 100%);
      transform: translate(-10%,-10%);
      transform: scale(0.8);
      }
    .img9{
    top: 14%;
    left: 162%;
      width: calc(280 / 300 * 100%);
      transform: scale(0.8);
      }
    .img10{
    top: -36%;
    left: 150%;
      width: calc(303 / 300 * 100%);
      transform: scale(0.8);
      }
    .img11{
    top: -6%;
    left: 216%;
      width: calc(184 / 300 * 100%);
      transform: scale(0.8);
      }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    position: relative;
    height:100vh;
  min-height:size-m(667);
  max-height: size-m(812);
    z-index: 1;
    overflow: hidden;


    .logo {
      right: size-m(30);
      top: calc(30% + (60 - 667 * .3) * 100vw / 375);
      width: size-m(255);
    }

  .img{
    position: absolute;
    top: 80%;
    left: 0%;
    width: size-m(130);
    height: size-m(130);
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
  name: "section1",

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  mounted() {
   /* TweenLite.set("#falling-leaves", { perspective: 600 });

    var total = this.isMobile ? 8 : 15; //落葉數量
    var container = document.getElementById("falling-leaves"),
      w = window.innerWidth,
      h = window.innerHeight;

    for (var i = 0; i < total; i++) {
      var Div = document.createElement("div");
      TweenLite.set(Div, {
        attr: { class: "falling" },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
      });
      container.appendChild(Div);
      animm(Div);
    }

    function animm(elm) {
      TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      });
      TweenMax.to(elm, R(4, 8), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    }

    function R(min, max) {
      return min + Math.random() * (max - min);
    }*/
  },

  created() {},
};
</script>
