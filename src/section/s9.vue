<template>
  <div class="s9 relative bg-black">
    <lazy-component class="bubbles">
      <img :class="{ 'active': activeImg == 1, 'prev': activeImg == 2, 'next': activeImg == 3 }"
        src="@/section/s9/1.png" alt="">
      <img :class="{ 'active': activeImg == 2, 'prev': activeImg == 3, 'next': activeImg == 1 }"
        src="@/section/s9/2.png" alt="">
      <img :class="{ 'active': activeImg == 3, 'prev': activeImg == 1, 'next': activeImg == 2 }"
        src="@/section/s9/3.png" alt="">
    </lazy-component>

    <img class="line" src="@/section/s9/line.png" alt="" srcset="">

    <div class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
      <button class="splide__arrow splide__arrow--prev" @click="prev()">
        <img src="@/assets/prev.svg" alt="" srcset="">
      </button>
      <button class="splide__arrow splide__arrow--next" @click="next()">
        <img src="@/assets/next.svg" alt="" srcset="">
      </button>
    </div>
    <div class="info z-20">
      <div class="t1 font-['Noto_serif_tc']">心靈 感官的雙重盛宴</div>
      <div class="t2 font-['Noto_serif_tc']">住進藝術薰陶的美感家園</div>
      <div class="t3">住進藝文繁盛的日常，悠遊當代時尚潮流與歷史古韻之美，讓藝術打開心靈的視野、啟發五感，享受真正豐盈的美好生活。</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  overflow: hidden;
  width: 100%;
  height: size(1080);
  background-color: #EC9700;

  .splide__arrows {
    left: 50%;
    top: size(658);
    transform: translateX(-50%);
    width: size(1900);
  }

  .info {
    position: absolute;
    width: size(468);
    left: size(225);
    top: size(370);
    text-align: left;
    pointer-events: none;

    .t1 {
      font-weight: 800;
      font-size: size(40);
      line-height: 70%;
      color: #fff;
      margin-bottom: size(25);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }

    .t2 {
      font-weight: 700;
      font-size: size(30);
      line-height: 70%;
      color: #fff;
      margin-bottom: size(50);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }

    .t3 {
      font-weight: 400;
      font-size: size(20);
      line-height: 150%;
      letter-spacing: 0.2em;
      color: #000;
    }
  }


  .line {
    position: absolute;
    width: size(1663);
    left: 0;
    bottom: 0;
  }

  .bubbles {
    position: relative;
    z-index: 1;

    img {
      position: absolute;
      transition: all .8s;

      &.active {
        width: size(1330);
        left: size(840);
        top: 0;
      }

      &.next {
        width: size(700);
        filter: grayscale(100%);
        left: 0;
        top: size(728);
      }

      &.prev {
        width: size(330);
        filter: grayscale(100%);
        left: 0;
        top: 0;
      }
    }
  }
}


@media screen and (max-width:768px) {
  .s9 {
    width: size-m(375);
    height: size-m(600);
  }
}
</style>

<script setup>
import { ref } from "vue"

const activeImg = ref(1);

const next = () => {
  if (activeImg.value - 1 == 0) {
    activeImg.value = 3
  } else {
    activeImg.value--
  }
}
const prev = () => {
  if (activeImg.value + 1 == 4) {
    activeImg.value = 1
  } else {
    activeImg.value++
  }
}

setInterval(() => {
  next()
}, 4000);
</script>
