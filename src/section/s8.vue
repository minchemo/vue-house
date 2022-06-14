<template>
  <div class="s8 relative bg-[#FFEA00]">
    <img class="absolute girl z-20" src="@/section/s8/i.png" alt="" srcset="" />
    <img
      class="absolute girl2 z-20"
      src="@/section/s8/i2.png"
      alt=""
      srcset=""
    />
    <img
      class="absolute newstart"
      src="@/section/s8/newstart.png"
      alt=""
      srcset=""
    />
    <img class="absolute info" src="@/section/s8/info.png" alt="" srcset="" />
    <div class="bubble absolute z-10"></div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size(900);

  .bubble {
    width: size(1073.08);
    height: size(552.67);
    left: size(578);
    top: size(154);
    background-image: url("@/section/s8/bubble.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .girl {
    width: size(347);
    height: size(358);
    left: size(210);
    top: size(354);
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
    top: size(120);
  }

  .info {
    width: size(762);
    height: size(72);
    left: size(748);
    top: size(745);
  }

  .newstart {
    width: 100%;
    left: 0;
    top: 0;
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
