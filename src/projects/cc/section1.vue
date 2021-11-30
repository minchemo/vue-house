<template>
  <div class="section1" id="falling-leaves">
    <img
      v-if="!isMobile"
      class="bg"
      v-lazy
      :temp="require('@/projects/cc/s1/bg.svg')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.8;blur:0,10;y: 0,-10;x:0,-10"
    />
    <img
      v-if="isMobile"
      class="mo-bg"
      v-lazy
      :temp="require('@/projects/cc/s1/mo-bg.png')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.8;blur:0,10;y: 0,-10;x:0,-10;scale:1,2;opacity:1,0"
    />
    <img
      v-if="!isMobile"
      class="leaf"
      v-lazy
      :temp="require('@/projects/cc/s1/leaf.png')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.8;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
    />
    <img
      class="leaf3"
      v-lazy
      :temp="require('@/projects/cc/s1/leaf3.png')"
      alt=""
      srcset=""
      :uk-parallax="
        isMobile
          ? 'viewport:0.8;y: 30,0;x:40;rotate:-20'
          : 'viewport:0.8;blur:10,0;y: -30,0;x:-30,0;rotate:5,0'
      "
    />
    <img
      class="deer"
      v-lazy
      :temp="require('@/projects/cc/s1/deer.gif')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.8;blur:0,10;scale: 1,1.5;x: 0,-50;opacity:1,0"
    />
    <img
      class="logo"
      v-lazy
      :temp="require('@/projects/cc/s1/logo.svg')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.8;blur:0,10;scale: 1,1.5;x: 0,-10;opacity:1,0"
    />
    <div class="falling">
      <!-- <img
        v-if="!isMobile"
        class="leaf2"
        v-lazy
        :temp="require('@/projects/cc/s1/leaf2.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.3;blur:0,10;y: 0,-30;x:0,-30;rotate:0,5"
      /> -->
    </div>
    <div class="divider" uk-parallax="viewport:0.8;blur:10,0;scale: 2,1"></div>
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
  background: #fff;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0;
    background: #FFF;
  }

  .bg {
    position: absolute;
    z-index: 0;
    right:-5vw;
    top: calc(50% + (-80 - 540) * 100vw / 1920);
   width: size(1687);
  }

  .falling {
    width: size(20);
    height: size(20);
    position: absolute;
    background: url("~@/projects/cc/s1/leaf2.png");
    background-size: 100% 100%;
    z-index: 0;
    left: -#{size(20)};
  }
  .leaf {
    position: absolute;
    z-index: 0;
    left: 0;
    top: calc(50% + (100 - 540) * 100vw / 1920);
   width: size(844);
  }
  .leaf2 {
    position: absolute;
    z-index: 0;
    right: size(200);
    top: calc(50% + (300 - 540) * 100vw / 1920);
    height: size(20);
  }
  .leaf3 {
    position: absolute;
    z-index: 0;
    right: size(0);
    bottom: size(0);
    height: size(97.4);
  }

  .deer {
    position: absolute;
    z-index: 1;
    left: size(250);
    top: calc(50% + (190 - 540) * 100vw / 1920);
    height: size(641.2);
  }

  .logo {
    position: absolute;
    z-index: 1;
    right: size(500);
    top: calc(50% + (300 - 540) * 100vw / 1920);
    width: size(342);
  }

  .divider {
    position: absolute;
    bottom: 0;
    left: calc(50% - 634 * 50vw / 1920);
    z-index: 1;
    width: size(634);
    height: 1px;
    background-color: #bbb29b;
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

    .falling {
      width: size-m(14);
      height: size-m(14);
      left: -#{size-m(14)};
    }

    .mo-bg {
      position: absolute;
      z-index: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .deer {
      position: absolute;
      z-index: 1;
      left: -#{size-m(70)};
      top: unset;
      bottom: size-m(100);
      height: size-m(250);
    }

    .leaf3 {
      position: absolute;
      z-index: 0;
      right: 0;
      bottom: -#{size-m(50)};
      height: size-m(51.3);
    }

    .logo {
      right: size-m(50);
      top: size-m(180);
      width: size-m(200);
    }

    .divider {
      left: 5%;
      width: 90%;
      height: 1px;
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
    TweenLite.set("#falling-leaves", { perspective: 600 });

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
    }
  },

  created() {},
};
</script>
