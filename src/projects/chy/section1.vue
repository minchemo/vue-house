<template>
  <div class="section1">
    <div class="title">
      <div class="animate-title title-1">
        <img src="@/projects/chy/s1/t1.svg" alt="" srcset="" />
      </div>
      <div class="animate-title title-2">
        <img v-if="!isMobile" src="@/projects/chy/s1/t2.svg" alt="" srcset="" />
        <img v-else src="@/projects/chy/s1/t2_mo.svg" alt="" srcset="" />
      </div>
      <div class="animate-title title-3">
        <img src="@/projects/chy/s1/t3.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="bush">
      <img src="~@/projects/chy/s1/bush.png" alt="" srcset="" />
    </div>
    <div data-aos="fade" data-aos-duration="1000" class="rt-logo">
      <img src="@/projects/chy/s1/rt-logo.svg" alt="" srcset="" />
    </div>
    <div
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="200"
      class="rb-logo"
    >
      <img src="@/projects/chy/s1/rb-logo.svg" alt="" srcset="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section1 {
  position: relative;
  background: #006868;
  height: 100vh;
  width: 100%;
  max-height:calc(108000vw / 1920);
  min-height:calc(90000vw / 1920);

  .title {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .animate-title {
      transform-origin: 0 0;
      position: relative;
      transition: all 0.5s;
      &.title-1 {
        width: 10vw;
        img {
          opacity: 0;
          animation: text-out 3s cubic-bezier(0, 0, 0.2, 1) 1s forwards;
        }
      }
      &.title-2 {
        width: 65vw;
        margin: 2vw 0;
        &::after {
          animation-delay: 500ms;
        }
        img {
          opacity: 0;
          animation-delay: 1s;
          animation: text-out 3s cubic-bezier(0, 0, 0.2, 1) 1500ms forwards;
        }
      }
      &.title-3 {
        width: 50vw;
        &::after {
          animation-delay: 1000ms;
        }
        img {
          opacity: 0;
          animation: text-out 3s cubic-bezier(0, 0, 0.2, 1) 2000ms forwards;
        }
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 110%;
        background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
        animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0s 1 forwards;
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
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .rt-logo {
    position: absolute;
    right: 80px;
    top: 30px;
    z-index: 999;
    img {
      width: 10vw;
    }
  }
  .rb-logo {
    position: fixed;
    right: 80px;
    bottom: 30px;
    z-index: 999;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
    img {
      width: 20vw;
    }
  }
  .bush {
    position: absolute;
    width: 102%;
    bottom: 0;
    left: -1%;
    height: auto;
    transform:skew(-3deg, 0);
    animation: bush 3s infinite alternate-reverse;
    transform-origin: bottom center;
    img {
      width: 100%;
    }

    @keyframes bush {
      to {
        transform: skew(3deg, 0);
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
    .title {
      width: 100%;
      transform: translate(-50%, -70%);

      .animate-title {
        transform-origin: 0 0;
        position: relative;
        transition: all 0.5s;
        &.title-1 {
          width: 50%;
          img {
            opacity: 0;
            animation: text-out 3s cubic-bezier(0, 0, 0.2, 1) 1s forwards;
          }
        }
        &.title-2 {
          width: 70%;
          margin: 20px 0;
          &::after {
            animation-delay: 500ms;
          }
          img {
            opacity: 0;
            animation-delay: 1s;
            animation: text-out 3s cubic-bezier(0, 0, 0.2, 1) 1500ms forwards;
          }
        }
        &.title-3 {
          width: 90%;
          &::after {
            animation-delay: 1000ms;
          }
          img {
            opacity: 0;
            animation: text-out 3s cubic-bezier(0, 0, 0.2, 1) 2000ms forwards;
          }
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 110%;
          background: linear-gradient(left, #fff, #fff) no-repeat 100vw 0;
          animation: text-mask-out 5s cubic-bezier(0, 0, 0.2, 1) 0s 1 forwards;
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
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }

    .rt-logo {
      right: 15px;
      top: 15px;
      z-index: 10;
      text-align: right;
      img {
        width: 40%;
      }
    }
    .rb-logo {
      position: fixed;
      right: 50%;
      bottom: 80px;
      z-index: 10;
      text-align: center;
      transform: translate(50%, 0) !important;
      width: 100%;
      img {
        width: 70%;
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
