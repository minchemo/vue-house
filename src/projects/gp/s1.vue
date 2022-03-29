<template>
  <div class="section1" ref="parallax">
    <div class="logo" data-aos="fade-up">
      <img src="@/projects/gp/s1/logo.svg" alt="" srcset="" />
    </div>
    <img
      class="title"
      data-aos="fade-up"
      data-aos-delay="400"
      src="@/projects/gp/s1/title.svg"
      srcset=""
      v-if="!isMobile"
    />
    <img
      class="title"
      data-aos="fade-up"
      data-aos-delay="400"
      src="@/projects/gp/s1/title_m.svg"
      srcset=""
      v-else
    />

    <img
      class="leaf l1 parallax-item"
      data-depth="0.2"
      src="@/projects/gp/s1/leaf1.png"
      srcset=""
      v-if="!isMobile"
    />
    <img
      class="leaf l1 parallax-item"
      data-depth="0.2"
      src="@/projects/gp/s1/leaf1_m.png"
      srcset=""
      v-else
    />

    <img
      class="leaf l2 parallax-item"
      data-depth="0.25"
      src="@/projects/gp/s1/leaf2.png"
      srcset=""
      v-if="!isMobile"
    />

    <img
      class="leaf l2 parallax-item"
      data-depth="0.25"
      src="@/projects/gp/s1/leaf2_m.png"
      srcset=""
      v-else
    />

    <img
      class="music parallax-item"
      data-depth="0.1"
      src="@/projects/gp/s1/music.svg"
      srcset=""
      v-if="!isMobile"
    />

    <img
      class="music parallax-item"
      data-depth="0.1"
      src="@/projects/gp/s1/music_m.png"
      srcset=""
      v-else
    />
    <img class="wave" src="@/projects/gp/s1/wave.svg" alt="" srcset="" />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section1 {
  width: size(1920);
  height: size(1080);
  background: url("~@/projects/gp/s1/bg.jpg");
  background-size: cover;

  .leaf {
    position: absolute;
    animation: fadeIn 1s;
    &.l1 {
      width: size(106.6);
      top: size(244);
      left: size(631);
    }
    &.l2 {
      width: size(130.18);
      top: size(345);
      left: size(1119);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .logo {
    position: absolute;
    width: size(309);
    left: 50%;
    top: size(289);
    margin-left: -#{size(154.5)};
    img {
      width: 100%;
    }
  }

  .title {
    width: size(1140);
    position: absolute;
    left: 50%;
    top: size(525);
    margin-left: -#{size(570)};
  }

  .music {
    position: absolute;
    width: size(1522);
    bottom: size(153);
    left: size(167);
    height: size(121);
  }

  .wave {
    position: absolute;
    left: 0;
    bottom: size(146);
    height: size(121);
    z-index: 1;
    animation: wave 13s infinite alternate-reverse ease-in-out, fadeIn 1.5s;
    opacity: 0.5;
  }

  @keyframes wave {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-75%, 0, 0);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    height: size-m(676);
    background: url("~@/projects/gp/s1/bg_m.jpg");
    background-size: cover;

    .leaf {
      position: absolute;
      animation: fadeIn 1s;
      mix-blend-mode: multiply;
      &.l1 {
        width: size-m(80.05);
        top: -#{size-m(10)};
        left: size-m(9);
      }
      &.l2 {
        width: size-m(130.18);
        top: size-m(209);
        left: unset;
        right: -#{size-m(50)};
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    .logo {
      width: size-m(231.37);
      top: size-m(170);
      margin-left: -#{size-m(115.685)};
    }

    .title {
      width: size-m(274);
      top: size-m(329);
      margin-left: -#{size-m(137)};
    }

    .music {
      position: absolute;
      width: auto;
      bottom: size-m(114);
      left: 0;
      height: size-m(79);
    }

    .wave {
      top: unset;
      bottom: size-m(114);
      height: size-m(75);
    }

    @keyframes float {
      0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
      100% {
        transform: translate3d(10px, -20px, 0) rotate(1deg);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes wave {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-75%, 0, 0);
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
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile
    }
  },

  methods: {},

  created() { },

  mounted() {
    const elem = this.$refs.parallax;

    var parallaxInstance = new Parallax(elem, {
      relativeInput: true,
      selector: '.parallax-item'
    });
  }
}
</script>
