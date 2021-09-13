<template>
  <div class="section1">
    <img
      v-if="!isMobile"
      class="bg"
      src="~@/projects/ymv/s1/bg.jpg"
      :alt="info.caseName"
      srcset=""
    />
    <img v-else class="bg" src="~@/projects/ymv/s1/bg_m.jpg" :alt="info.caseName" srcset="" />
    <img
      class="f f_1"
      src="~@/projects/ymv/s1/f_1.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      class="f ff_1"
      src="~@/projects/ymv/s1/ff_1.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      class="f f_2"
      src="~@/projects/ymv/s1/f_2.png"
      :alt="info.caseName"
      srcset=""
    />
    <img
      class="f ff_2"
      src="~@/projects/ymv/s1/ff_2.png"
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
  z-index: 1;
  //z-index: 100;
  height: 100vh;
  min-height: calc(900 * 100vw / 1920);
  max-height: calc(1080 * 100vw / 1920);
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
    animation: leaf 5s ease-in-out alternate infinite;
    transform-origin: center;
    transition: all 0.5s;
    pointer-events: none;
    &.f_1 {
      width: 25vw;
      left: -6vw;
      top: -4vw;
      animation-duration: 3s;
      transform: rotate(3deg);
      transform-origin:0 0;
      &.fadeOut {
        left: -30vw;
      }
    }
    &.ff_1 {
      width: 25vw;
      left: -36vw;
      bottom: -4vw;
      animation-duration: 4.5s;
      transform:skewY(-3deg);
      transform-origin:0% 60%;
      &.fadeIn {
        left: -6vw;
      }
    }
    &.f_2 {
      width: 25vw;
      right: -5vw;
      bottom: -10vw;
      animation-duration: 3.5s;
      transform: rotate(-3deg);
      transform-origin:100% 100%;
      &.fadeOut {
        right: -30vw;
      }
    }
    &.ff_2 {
      width: 25vw;
      right: -35vw;
      top: -5vw;
      animation-duration: 4.5s;
      transform:skewY(3deg);
      transform-origin:100% 60%;
      &.fadeIn {
        right: -5vw;
      }
    }
    @keyframes leaf {
      to {
        transform: skew(0) rotate(0deg);
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
    font-size:30vw;
    &.a_title_1 {
      position: absolute;
      width: 5vw;
      left: 50vw;
      top: -9vw;
      filter:drop-shadow(0.009em 0.009em 0.009em #0004);
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
      filter:drop-shadow(0.009em 0.009em 0.009em #0004);
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
      filter:drop-shadow(0.01em 0.01em 0.01em #0006);
  animation: shadow 2s 6.5s linear reverse both;

      &.fadeIn {
        mask-size: 150%;
      }
    }
    &.aa_title_2 {
      position: absolute;
    width: 1.95vw;
    left: 29.6vw;
    top: -9.25vw;
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
      filter:drop-shadow(0.005em 0.005em 0.005em #0006);
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
      filter:drop-shadow(0.005em 0.005em 0.005em #0006);
      &.fadeIn {
        opacity: 1;
        top: 14vw;
      }
    }
  }
}
@keyframes shadow {
    to {
      filter:drop-shadow(0vw 0vw 0vw #0000);}
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
  min-height: calc(667 * 100vw / 375);
  max-height: calc(812 * 100vw / 375);
    .f {
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
    }
    .circles {
      div {
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
      }
    }
    .title {
      font-size:100vw;
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
    width: 4.85vw;
    left: 19.5vw;
    top: -36.7vw;
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
    }, 4500);
    setTimeout(() => {
      //淡出花
      $(".f.f_1").addClass("fadeOut");
      $(".f.f_2").addClass("fadeOut");
    }, 4900);
    setTimeout(() => {
      //淡入主視覺
      $(".f.ff_1").addClass("fadeIn");
      $(".f.ff_2").addClass("fadeIn");
      $(".title.aa_title_1").addClass("fadeIn");
      $(".title.aa_title_2").addClass("fadeIn");
      $(".title.aa_title_3").addClass("fadeIn");
      $(".title.aa_title_4").addClass("fadeIn");
    }, 5500);
  },
};
</script>
