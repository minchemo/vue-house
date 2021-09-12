<template>
  <div class="section1">
    <img
      v-if="!isMobile"
      class="bg"
      src="~@/projects/ymv/s1/bg.png"
      :alt="info.caseName"
      srcset=""
    />
    <img v-else class="bg" src="~@/projects/ymv/s1/bg_m.png" :alt="info.caseName" srcset="" />
    <img
      v-if="!isMobile"
      class="f f_1"
      src="~@/projects/ymv/s1/f_1.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-if="!isMobile"
      class="f ff_1"
      src="~@/projects/ymv/s1/ff_1.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-if="isMobile"
      class="f f_1"
      src="~@/projects/ymv/s1/f_1_m.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-if="isMobile"
      class="f ff_1"
      src="~@/projects/ymv/s1/ff_1_m.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-if="!isMobile"
      class="f f_2"
      src="~@/projects/ymv/s1/f_2.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-if="!isMobile"
      class="f ff_2"
      src="~@/projects/ymv/s1/ff_2.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-if="isMobile"
      class="f f_2"
      src="~@/projects/ymv/s1/f_2_m.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-if="isMobile"
      class="f ff_2"
      src="~@/projects/ymv/s1/ff_2_m.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      class="title a_title_1"
      data-aos="fade-down"
      data-aos-duration="1200"
      src="~@/projects/ymv/s1/a_title_1.svg"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-if="!isMobile"
      class="title aa_title_1"
      src="~@/projects/ymv/s1/aa_title_1.svg"
      :alt="info.caseName"
      srcset=""
    />
    <img
      v-else
      class="title aa_title_1"
      src="~@/projects/ymv/s1/aa_title_1_m.svg"
      :alt="info.caseName"
      srcset=""
    />
    <img
      class="title a_title_2"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="500"
      src="~@/projects/ymv/s1/a_title_2.svg"
      :alt="info.caseName"
      srcset=""
    />
    <img
      class="title aa_title_2"
      src="~@/projects/ymv/s1/aa_title_2.svg"
      :alt="info.caseName"
      srcset=""
    />
    <img
      class="title aa_title_3"
      src="~@/projects/ymv/s1/aa_title_3.svg"
      :alt="info.caseName"
      srcset=""
    />
    <img
      class="title aa_title_4"
      src="~@/projects/ymv/s1/aa_title_4.svg"
      :alt="info.caseName"
      srcset=""
    />
    <div class="circles">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section1 {
  position: relative;
  z-index: 100;
  height: 100vh;
  background: rgb(66, 109, 28);
  background: linear-gradient(
    0deg,
    rgba(66, 109, 28, 1) 0%,
    rgba(104, 140, 44, 1) 100%
  );
  pointer-events: none;
  .bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .f {
    position: absolute;
    z-index: 2;
    animation: leaf 5s alternate-reverse infinite;
    transform-origin: center;
    transition: all 0.5s;
    pointer-events: none;
    &.f_1 {
      width: 25vw;
      left: -6vw;
      top: -4vw;
      &.fadeOut {
        left: -30vw;
      }
    }
    &.ff_1 {
      width: 25vw;
      left: -36vw;
      bottom: -4vw;
      &.fadeIn {
        left: -6vw;
      }
    }
    &.f_2 {
      width: 25vw;
      right: -5vw;
      bottom: -10vw;
      &.fadeOut {
        right: -30vw;
      }
    }
    &.ff_2 {
      width: 25vw;
      right: -35vw;
      top: -5vw;
      &.fadeIn {
        right: -5vw;
      }
    }
    @keyframes leaf {
      from {
        transform: skew(3deg, 2deg) translate(15px, -15px) rotate(-3deg);
      }
      to {
        transform: skew(-3deg, 2deg) translate(-15px, 15px) rotate(3deg);
      }
    }
  }
  .circles {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    div {
      border-radius: 100%;
      background-color: #fff;
      position: absolute;
      &:nth-child(1) {
        width: 16vw;
        height: 16vw;
        opacity: 0.3;
        left: 4vw;
        top: 4vw;
        animation: bubble 1s alternate-reverse infinite;
      }
      &:nth-child(2) {
        width: 20vw;
        height: 20vw;
        opacity: 0.16;
        left: 10vw;
        top: 16vw;
        animation: bubble 1.5s alternate-reverse infinite;
      }
      &:nth-child(3) {
        width: 12vw;
        height: 12vw;
        opacity: 0.16;
        left: 23vw;
        top: 30vw;
        animation: bubble 2s alternate-reverse infinite;
      }
      &:nth-child(4) {
        width: 15vw;
        height: 15vw;
        opacity: 0.24;
        right: 18vw;
        top: 3vw;
        animation: bubble 2.5s alternate-reverse infinite;
      }
      &:nth-child(5) {
        width: 7vw;
        height: 7vw;
        opacity: 0.24;
        right: 28vw;
        top: 13vw;
        animation: bubble 3s alternate-reverse infinite;
      }

      @keyframes bubble {
        from {
          transform: translate(0, 0);
        }
        to {
          transform: translate(-10px, 10px);
          opacity: 0;
        }
      }
    }
  }
  .title {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    pointer-events: none;
    &.a_title_1 {
      position: absolute;
      width: 5vw;
      left: 50vw;
      top: -9vw;
      &.fadeOut {
        transform: translateY(-10vw);
        opacity: 0;
      }
    }
    &.a_title_2 {
      position: absolute;
      width: 5vw;
      left: 45vw;
      top: 5vw;
      &.fadeOut {
        transform: translateY(10vw);
        opacity: 0;
      }
    }
    &.aa_title_1 {
      position: absolute;
      width: 40vw;
      left: 32vw;
      top: -9vw;
      transition: all 5s;
      mask: url("~@/projects/ymv/s1/mask.png");
      mask-size: 0%;
      mask-position: center center;
      mask-repeat: no-repeat;

      &.fadeIn {
        mask-size: 150%;
      }
    }
    &.aa_title_2 {
      position: absolute;
      width: 1.7vw;
      left: 30.5vw;
      top: -9.5vw;
      opacity: 0;
      transition: all 1s;
      &.fadeIn {
        opacity: 1;
      }
    }
    &.aa_title_3 {
      position: absolute;
      width: 12vw;
      left: 44vw;
      top: 7vw;
      opacity: 0;
      transition: all 1s;
      &.fadeIn {
        opacity: 1;
      }
    }
    &.aa_title_4 {
      position: absolute;
      width: 24vw;
      left: 38vw;
      top: 20vw;
      opacity: 0;
      transition: all 1s;
      &.fadeIn {
        opacity: 1;
        top: 14vw;
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
    position: relative;
    z-index: 100;
    height: 100vh;
    background: rgb(66, 109, 28);
    background: linear-gradient(
      0deg,
      rgba(66, 109, 28, 1) 0%,
      rgba(104, 140, 44, 1) 100%
    );
    .bg {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .f {
      position: absolute;
      z-index: 2;
      animation: leaf 5s alternate-reverse infinite;
      transform-origin: center;
      &.f_1 {
        width: 76vw;
        left: -16vw;
        top: -8vw;
        &.fadeOut {
          left: -100vw;
        }
      }
      &.ff_1 {
        width: 76vw;
        left: -100vw;
        bottom: -22vw;
        &.fadeIn {
          left: -50vw;
        }
      }
      &.f_2 {
        width: 70vw;
        right: -18vw;
        bottom: -10vw;
        &.fadeOut {
          right: -100vw;
        }
      }
      &.ff_2 {
        width: 70vw;
        right: -100vw;
        top: -34vw;
        &.fadeIn {
          right: -26vw;
        }
      }
      @keyframes leaf {
        from {
          transform: skew(3deg, 2deg) translate(5px, -5px) rotate(-1deg);
        }
        to {
          transform: skew(-3deg, 2deg) translate(-5px, 5px) rotate(1deg);
        }
      }
    }
    .circles {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      div {
        border-radius: 100%;
        background-color: #fff;
        position: absolute;
        &:nth-child(1) {
          width: 50vw;
          height: 50vw;
          opacity: 0.3;
          left: 2vw;
          top: 2vw;
          animation: bubble 2s alternate-reverse infinite;
        }
        &:nth-child(2) {
          width: 25vw;
          height: 25vw;
          opacity: 0.16;
          left: 25vw;
          top: 35vw;
          animation: bubble 2s alternate-reverse infinite;
        }
        &:nth-child(3) {
          width: 50vw;
          height: 50vw;
          left: -10vw;
          top: 65vw;
        }
        &:nth-child(4) {
          width: 40vw;
          height: 40vw;
          opacity: 0.24;
          right: 5vw;
          top: unset;
          bottom: 40vw;
        }
        &:nth-child(5) {
          width: 20vw;
          height: 20vw;
          right: 36vw;
          top: unset;
          bottom: 36vw;
        }

        @keyframes bubble {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-10px, 10px);
            opacity: 0;
          }
        }
      }
    }
    .title {
      position: absolute;
      z-index: 5;
      width: 100%;
      height: 100%;
      &.a_title_1 {
        position: absolute;
        width: 14vw;
        left: 50vw;
        top: -30vw;
        &.fadeOut {
          transform: translateY(-100vw);
          opacity: 0;
        }
      }
      &.a_title_2 {
        position: absolute;
        width: 13vw;
        left: 36vw;
        top: 12vw;
        &.fadeOut {
          transform: translateY(100vw);
          opacity: 0;
        }
      }
      &.aa_title_1 {
        width: 50vw;
        left: 25vw;
        top: -20vw;
        transition: all 3s;

        &.fadeIn {
          mask-size: 200%;
        }
      }
      &.aa_title_2 {
        width: 5vw;
        left: 19.5vw;
        top: -36.5vw;
      }
      &.aa_title_3 {
        width: 40vw;
        left: 30vw;
        top: 26vw;
      }
      &.aa_title_4 {
        width: 70vw;
        left: 15vw;
        top: 70vw;
        opacity: 0;
        transition: all 1s;
        &.fadeIn {
          opacity: 1;
          top: 50vw;
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
import info from "@/info";

export default {
  name: "section1",

  data() {
    return {
      isMobile,
      info,
    };
  },

  methods: {},

  created() {},
  mounted() {
    setTimeout(() => {
      //淡出主視覺文字
      $(".title.a_title_1").addClass("fadeOut");
      $(".title.a_title_2").addClass("fadeOut");
    }, 3000);
    setTimeout(() => {
      //淡出花
      $(".f.f_1").addClass("fadeOut");
      $(".f.f_2").addClass("fadeOut");
    }, 3400);
    setTimeout(() => {
      //淡入主視覺
      $(".f.ff_1").addClass("fadeIn");
      $(".f.ff_2").addClass("fadeIn");
      $(".title.aa_title_1").addClass("fadeIn");
      $(".title.aa_title_2").addClass("fadeIn");
      $(".title.aa_title_3").addClass("fadeIn");
      $(".title.aa_title_4").addClass("fadeIn");
    }, 4000);
  },
};
</script>
