<template>
  <div class="s1 relative flex flex-col md:flex-row justify-center items-center z-10">
    <div class="text">
      <img v-if="!$isMobile()" data-aos="zoom-in" data-aos-delay="0" class="t1" src="@/section/s1/t1.svg" alt=""
        srcset="">
      <img v-else class="t1" data-aos="zoom-in" data-aos-delay="0" src="@/section/s1/t1_m.svg" alt="" srcset="">
      <img v-if="!$isMobile()" data-aos="zoom-in" data-aos-delay="200" class="t2" src="@/section/s1/t2.svg" alt=""
        srcset="">
      <img v-else class="t2" data-aos="zoom-in" data-aos-delay="200" src="@/section/s1/t2_m.svg" alt="" srcset="">
      <img v-if="!$isMobile()" data-aos="zoom-in" data-aos-delay="400" class="t3" src="@/section/s1/t3.svg" alt=""
        srcset="">
      <img v-else class="t3" data-aos="zoom-in" data-aos-delay="400" src="@/section/s1/t3_m.svg" alt="" srcset="">
    </div>
    <div class="leaf">
      <img v-if="!$isMobile()" class="r" src="@/section/s1/leaf_r.jpg" alt="" srcset="">
      <img v-else class="r" src="@/section/s1/leaf_r_m.jpg" alt="" srcset="">
      <img v-if="!$isMobile()" class="l" src="@/section/s1/leaf_l.jpg" alt="" srcset="">
      <img v-else class="l" src="@/section/s1/leaf_l_m.jpg" alt="" srcset="">
    </div>
    <div class="warn" data-aos="fade" data-aos-delay="600" data-aos-offset="-100">（冷氣僅贈室內室外機，不含安裝及管路操作）</div>
    <img v-if="$isMobile()" @click="scrollTo('.s2')" class="arrow" src="@/section/s1/arrow.svg" alt="">
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: size(1080);
  background-color: #004A33;

  .text {
    width: size(1025);
    height: size(347);

    .t2 {
      margin-top: size(10);
      margin-bottom: size(50);
    }

    img {
      width: 100%;
    }
  }

  .leaf {
    img {
      position: absolute;
    }

    .r {
      width: size(277.95);
      left: size(1618);
      top: size(55);
      animation: ani 4s infinite alternate-reverse ease-in-out;
      transform-origin: bottom right;
    }

    .l {
      width: size(340.33);
      left: size(16);
      top: size(620);
      animation: ani 5s infinite alternate-reverse ease-in-out;
      transform-origin: bottom left;
    }

    @keyframes ani {
      from {
        transform: rotate(-10deg) skewY(5deg);
      }

      to {
        transform: rotate(0deg) skewY(-5deg);
      }
    }
  }

  .warn {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: size(32);
    font-weight: 400;
    color: #fff;
    top: size(991);
    pointer-events: none;
    letter-spacing: 0.12em;
  }
}

@media screen and (max-width:768px) {

  .s1 {
    width: 100%;
    height: size-m(667);
    padding-top: size-m(40);

    .arrow {
      width: size-m(60);
      z-index: 10;
      position: absolute;
      bottom: 10%;
      animation: move 1s alternate-reverse infinite ease-in-out;

      @keyframes move {
        from {
          transform: translateY(0%);
        }

        to {
          transform: translateY(20%);
        }

      }
    }

    .text {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .t1 {
        width: size-m(241);
        z-index: 3;
      }

      .t2 {
        width: size-m(243);
        margin-top: size-m(5);
        margin-bottom: size-m(20);
      }

      .t3 {
        width: size-m(298);
      }
    }

    .leaf {
      img {
        position: absolute;
      }

      .r {
        width: size-m(143);
        left: size-m(243);
        top: -#{size-m(36)};
        animation: ani 4s infinite alternate-reverse ease-in-out;
        transform-origin: bottom right;
      }

      .l {
        width: size-m(160);
        left: -#{size-m(30)};
        top: size-m(10);
        animation: ani 5s infinite alternate-reverse ease-in-out;
        transform-origin: bottom left;
      }

      @keyframes ani {
        from {
          transform: rotate(-10deg) skewY(5deg);
        }

        to {
          transform: rotate(0deg) skewY(-5deg);
        }
      }
    }

    .warn {
      position: relative;
      font-size: size-m(14);
      top: unset;
      letter-spacing: 0.12em;
      margin-top: size-m(20);
    }
  }
}
</style>

<script setup>
import { inject } from 'vue';
const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>
