<template>
  <div class="s1 relative bg-[#FFEA00]" v-bind:class="{ 'r16-9': higherScreen }">
    <img class="absolute girl z-20" src="@/section/s1/girl.png" alt="" srcset="" />
    <img class="absolute music z-30" src="@/section/s1/music.png" alt="" srcset="" />
    <img class="absolute flower z-20" src="@/section/s1/f.png" alt="" srcset="" />
    <img class="absolute hsclogo z-10" src="@/section/s1/hsclogo.png" alt="" srcset="" />
    <div class="absolute bubble z-10"></div>
    <img class="absolute newstart z-0" src="@/section/s1/newstart.png" alt="" srcset="" />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: size(900);
  padding-top: size(80);

  .girl {
    width: size(468.07);
    height: size(746.09);
    left: size(218);
    top: size(147.91);
  }

  .music {
    width: size(107.88);
    height: size(153.17);
    left: size(534.79);
    top: size(455.77);
    animation: float 4s alternate-reverse infinite ease-in-out;

    @keyframes float {
      0% {
        transform: translate(10px, 0px) rotate(-5deg) skew(2deg, 2deg);
      }

      100% {
        transform: translate(20px, -20px) rotate(10deg) skew(-6deg, -6deg);
      }
    }
  }

  .flower {
    width: size(66);
    height: size(108);
    left: size(530);
    top: size(746);
    animation: wave 2s alternate-reverse infinite ease-in-out;
    transform-origin: bottom;

    @keyframes wave {
      from {
        transform: skewX(-6deg) rotate(2deg);
      }

      to {
        transform: skewX(9deg) rotate(-2deg);
      }
    }
  }

  .hsclogo {
    width: size(166);
    height: size(60.5);
    left: size(30);
    top: size(104);
  }

  .bubble {
    width: size(1074.04);
    height: size(506.02);
    left: size(667);
    top: size(146);
    background-image: url("@/section/s1/bubble_md.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .newstart {
    left: 0;
    bottom: 0;
    width: size(1920);
  }

  //高螢幕
  &.r16-9 {
    height: size(1080);
    padding-top: 0;

    .girl {
      width: size(401.26);
      height: size(639.6);
      left: size(498.23);
      top: size(303);
    }

    .music {
      width: size(92.48);
      height: size(131.31);
      left: size(769.8);
      top: size(566.92);
    }

    .flower {
      width: size(47.27);
      height: size(77.44);
      left: size(747.63);
      top: size(831.98);
      transform-origin: bottom;
    }

    .hsclogo {
      display: none;
    }

    .bubble {
      width: size(580.6);
      height: size(571.46);
      left: size(808.85);
      top: size(184.24);
      background-image: url("@/section/s1/bubble_lg.png");
    }

    .newstart {
      left: size(343);
      bottom: unset;
      top: size(722);
      width: size(1234);
    }
  }
}

@media screen and (max-width:768px) {
  .s1 {
    width: size-m(375);
    height: size-m(750);

    .girl {
      width: size-m(199.5);
      height: size-m(318);
      left: size-m(11);
      top: size-m(261);
    }

    .music {
      width: size-m(45.98);
      height: size-m(65.28);
      left: size-m(146.02);
      top: size-m(392.22);
      animation: float 4s alternate-reverse infinite ease-in-out;

      @keyframes float {
        0% {
          transform: translate(10px, 0px) rotate(-5deg) skew(2deg, 2deg);
        }

        100% {
          transform: translate(20px, -20px) rotate(10deg) skew(-6deg, -6deg);
        }
      }
    }

    .flower {
      width: size-m(23.5);
      height: size-m(38.5);
      left: size-m(135);
      top: size-m(524);
      animation: wave 2s alternate-reverse infinite ease-in-out;
      transform-origin: bottom;

      @keyframes wave {
        from {
          transform: rotate(5deg);
        }

        to {
          transform: rotate(-5deg);
        }
      }
    }

    .hsclogo {
      display: none;
    }

    .bubble {
      width: size-m(241.3);
      height: size-m(237.5);
      left: size-m(114);
      top: size-m(143);
      background-image: url("@/section/s1/bubble_mo.png");
    }

    .newstart {
      left: 0;
      bottom: unset;
      top: size-m(55);
      width: 100%;
    }
  }
}
</style>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue"

const globals = getCurrentInstance().appContext.config.globalProperties
const higherScreen = ref(false)

onMounted(() => {
  const ratio = window.innerHeight / window.innerWidth

  if (!globals.$isMobile() && ratio > 0.46875) {
    higherScreen.value = true
  }
})
</script>
