<template>
  <div class="s1 relative bg-[#FFEA00]">
    <img class="absolute girl z-20" src="./s1/girl.png" alt="" srcset="" />
    <img class="absolute music z-30" src="./s1/music.png" alt="" srcset="" />
    <img class="absolute flower z-20" src="./s1/f.png" alt="" srcset="" />
    <img class="absolute hsclogo z-10" src="./s1/hsclogo.png" alt="" srcset="" />
    <div class="absolute bubble z-10"></div>
    <img class="absolute newstart z-0" src="./s1/newstart.svg" alt="" srcset="" />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  padding-top: size(80);

  .girl {
    width: size(468.0);
    height: size(746.0);
    left: size(218);
    top: calc(50% + (148 - 900 * .5) * 100vw / 1920);
  }

  .music {
    width: size(107.88);
    height: size(153.17);
    left: size(534.79);
    top:calc(50% + (456 - 900 * .5) * 100vw / 1920);
    animation: float 4s alternate infinite ease-in-out;
    transform: translate(5%, 0px) rotate(-5deg) skew(5deg,5deg);
    @keyframes float {
      to {
        transform: translate(10%, -10%) rotate(10deg) skew(-3deg,-3deg);
      }
    }
  }

  .flower {
    width: size(66);
    height: size(108);
    left: size(530);
    top:calc(50% + (746 - 900 * .5) * 100vw / 1920);
    animation: wave 2s alternate infinite ease-in-out;
    transform-origin: bottom;
    transform: skewX(-6deg) rotate(2deg);

    @keyframes wave {
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
    top:calc(50% + (146 - 900 * .5) * 100vw / 1920);
    background-image: url("@/section/s1/bubble_md.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: 0 70%;
    transform: scale(0.3);
    opacity: 0;
    animation: bubble 6s infinite ease-in-out;
    @keyframes bubble {
      15% {
        transform: scale(1);
        opacity: 1;
      }
      85% {
        transform: scale(1);
        opacity: 1;
      }
      90% {
        transform: scale(1.1);
        opacity: 0;
      }
    }
  }

  .newstart {
    left: 0;
    bottom: -.5vw;
    width: size(1920);
  }

/*
  //高螢幕
  &.r16-9 {
  //  height: size(1080);
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
  */
}

@media screen and (max-width:768px) {
  .s1 {
    height: calc(100vh - 63px);
    min-height: size-m(604);
    max-height: size-m(700);

    .girl {
      width: size-m(199.5);
      height: size-m(318);
      left: size-m(11);
      top: calc(60% + (261 - 604 * .6) * 100vw / 375);
    }

    .music {
      width: size-m(45.98);
      height: size-m(65.28);
      left: size-m(146.02);
      top: calc(60% + (392 - 604 * .6) * 100vw / 375);
    }

    .flower {
      width: size-m(23.5);
      height: size-m(38.5);
      left: size-m(135);
      top: calc(60% + (524 - 604 * .6) * 100vw / 375);
    }

    .hsclogo {
      display: none;
    }

    .bubble {
      width: size-m(241.3);
      height: size-m(237.5);
      left: size-m(114);
      top: calc(50% + (143 - 604 * .5) * 100vw / 375);
      background-image: url("@/section/s1/bubble_mo.png");
      transform-origin: 25% 95%;
    }

    .newstart {
      left: 0;
      bottom: unset;
      top: calc(10% + (55 - 604 * .1) * 100vw / 375);
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
