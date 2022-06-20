<template>
  <div class="s8 relative bg-[#FFEA00]">

    <lazy-component>
      <img class="absolute girl z-20" src="@/section/s8/i.png" alt="" srcset="" />
      <img class="absolute girl2 z-20" src="@/section/s8/i2.png" alt="" srcset="" />
      <img class="absolute newstart" src="./s1/newstart.svg" alt="" srcset="" />
      <img class="absolute info" data-aos="fade" src="@/section/s8/info.png" alt="" srcset=""  @click="scrollTo('.contact-info')" />
      <img class="absolute info_m" data-aos="fade" src="@/section/s8/info_m.png" alt="" srcset=""  @click="scrollTo('.contact-info')" />
    </lazy-component>

    <div  data-aos="zoom-in" class="bubble absolute z-10"></div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: calc(100vh - 80 * 100vw / 1920);
  min-height: size(820);
  max-height: size(1000);
  overflow: hidden;

  .bubble {
    width: size(1073.08);
    height: size(552.67);
    left: size(578);
    top: calc(60% + (154 - 900 * .6) * 100vw / 1920);
    background-image: url("@/section/s8/bubble.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .girl {
    width: size(347);
    height: size(358);
    left: size(210);
    top: calc(70% + (354 - 900 * .7) * 100vw / 1920);
    animation: wave 0.8s alternate-reverse infinite ease-in-out;
    transform-origin: bottom;

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(10deg);
      }
    }
  }

  .girl2 {
    width: size(203.58);
    height: size(201);
    left: size(1510);
    top: calc(50% + (120 - 900 * .5) * 100vw / 1920);
  }

  .info {
    width: size(762);
    left: size(748);
    top: calc(80% + (745 - 900 * .8) * 100vw / 1920);
  }
  .info_m{
    display: none;
  }

  .newstart {
    width: 100%;
    left: 0;
    top: -.3vw;
  }
}


@media screen and (max-width:768px) {
  .s8 {
    height:calc(100vh - 63px);
    min-height: size-m(604);
    max-height: size-m(700);
    margin-top: size-m(10);

    .bubble {
      width: size-m(270);
      height: size-m(274);
      left: size-m(87);
      top: calc(50% + (188 - 604 * .5) * 100vw / 375);
      background-image: url("@/section/s8/bubble_m.svg");
    }

    .girl {
      width: size-m(139);
      height: size-m(145);
      left: size-m(18);
      top: calc(70% + (366 - 604 * .7) * 100vw / 375);
    }

    .girl2 {
      width: size-m(79);
      height: size-m(78);
      left: size-m(280);
      top: calc(40% + (158 - 604 * .4) * 100vw / 375);
    }

    .info {
      display: none;
    }
  .info_m{
    display: block;
    width: size-m(169);
    left: size-m(168);
    bottom: calc(10% + (80 - 604 * .1) * 100vw / 375);
  }

    .newstart {
      top: calc(10% + (60 - 604 * .1) * 100vw / 375);
    }
  }
}
</style>

<script setup>
import { ref } from "vue"

const currentIdx = ref(0)

const imgs = ref([
  {
    img: new URL("../section/s8/1.jpg", import.meta.url).href,
    caption: "張國章 建築師",
  },
  {
    img: new URL("../section/s8/2.jpg", import.meta.url).href,
    caption: "陳福松 結構技師",
  },
])

const data = ref([
  {
    name: "張國章 建築師",
    text: "「人需與環境共生，建築需與環境共舞」",
  },
  {
    name: "超偉工程顧問",
    text: "北流音樂中心 南軟園區 國家級工程結構顧問",
  },
])

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}
</script>
