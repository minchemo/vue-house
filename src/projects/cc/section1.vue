<template>
  <div class="section1">
    <img
      v-if="!isMobile"
      class="bg"
      v-lazy
      :temp="require('@/projects/cc/s1/bg.svg')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:0,10;y: 0,-10;x:0,-10"
    />
    <img
      v-if="isMobile"
      class="mo-bg"
      v-lazy
      :temp="require('@/projects/cc/s1/mo-bg.png')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:0,10;y: 0,-10;x:0,-10"
    />
    <img
      v-if="!isMobile"
      class="leaf"
      v-lazy
      :temp="require('@/projects/cc/s1/leaf.png')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:0,10;y: 0,-100;x:0,-100;rotate:0,5"
    />
    <img
      v-if="!isMobile"
      class="leaf2"
      v-lazy
      :temp="require('@/projects/cc/s1/leaf2.png')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:0,10;y: 0,-30;x:0,-30;rotate:0,5"
    />
    <img
      class="leaf3"
      v-lazy
      :temp="require('@/projects/cc/s1/leaf3.png')"
      alt=""
      srcset=""
      :uk-parallax="
        isMobile
          ? 'viewport:0.3;y: 30,0;x:40;rotate:-20'
          : 'viewport:0.3;blur:10,0;y: -30,0;x:-30,0;rotate:5,0'
      "
    />
    <img
      class="deer"
      v-lazy
      :temp="require('@/projects/cc/s1/deer.gif')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:0,10;scale: 1,0.8;x: 0,-50;opacity:1,0"
    />
    <img
      class="logo"
      v-lazy
      :temp="require('@/projects/cc/s1/logo.svg')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:0,10;scale: 1,0.8;x: 0,100"
    />
    <div class="divider"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section1 {
  position: relative;
  height: size(1130);
  background: #fff;

  .bg {
    position: absolute;
    z-index: 0;
    right: 0;
    top: -#{size(80)};
    height: 100%;
  }

  .leaf {
    position: absolute;
    z-index: 0;
    left: 0;
    top: size(100);
    height: size(1082);
  }

  .leaf2 {
    position: absolute;
    z-index: 0;
    right: size(200);
    top: size(300);
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
    top: size(190);
    height: size(641.2);
  }

  .logo {
    position: absolute;
    z-index: 1;
    right: size(500);
    top: size(400);
    width: size(342);
  }

  .divider {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 1;
    width: size(634);
    height: 1px;
    background-color: #bbb29b;
    transform: translateX(-50%);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    position: relative;
    height: size-m(667);
    z-index: 1;

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
      position: absolute;
      bottom: 0;
      left: 50%;
      z-index: 1;
      width: 90%;
      height: 1px;
      background-color: #bbb29b;
      transform: translateX(-50%);
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

  created() { },
};
</script>
