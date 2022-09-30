<template>
  <div class="s9 relative bg-black" v-touch:swipe="swipeHandler">
    <lazy-component class="bubbles">
      <img :class="{ 'active': activeImg == 1, 'prev': activeImg == 2, 'next': activeImg == 3 }"
        src="@/section/s9/1.jpg" alt="心仝聚">
      <img :class="{ 'active': activeImg == 2, 'prev': activeImg == 3, 'next': activeImg == 1 }"
        src="@/section/s9/2.jpg" alt="心仝聚">
      <img :class="{ 'active': activeImg == 3, 'prev': activeImg == 1, 'next': activeImg == 2 }"
        src="@/section/s9/3.jpg" alt="心仝聚">
    </lazy-component>

    <img v-if="$isMobile()" class="line" src="@/section/s9/line_m.png" alt="心仝聚" srcset="">
    <img v-else class="line" src="@/section/s9/line.png" alt="心仝聚" srcset="">

    <div class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
      <button class="splide__arrow splide__arrow--prev" @click="$isMobile() ? next() : prev()">
        <img src="@/assets/prev.svg" alt="心仝聚" srcset="">
      </button>
      <button class="splide__arrow splide__arrow--next" @click="$isMobile() ? prev() : next()">
        <img src="@/assets/next.svg" alt="心仝聚" srcset="">
      </button>
    </div>
    <div class="info z-20">
      <div class="t1 font-['Noto_Serif_JP']" data-aos-delay="0">心靈 感官的雙重盛宴</div>
      <div class="t2 font-['Noto_Serif_JP']" data-aos-delay="200">住進藝術薰陶的美感家園</div>
      <div class="t3 font-['Noto_Serif_TC']" data-aos-delay="400">
        住進藝文繁盛的日常，悠遊當代時尚潮流與歷史古韻之美，讓藝術打開心靈的視野、啟發五感，享受真正豐盈的美好生活。</div>
    </div>
    <div class="caption">
      <div data-aos-duration="1500" v-if="activeImg == 1">台北市立美術館</div>
      <div data-aos-duration="1500" v-if="activeImg == 2">台灣戲曲中心</div>
      <div data-aos-duration="1500" v-if="activeImg == 3">台北表演藝術中心</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  overflow: hidden;
  width: 100%;
  height: size(1080);
  background-color: #B36649;

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
      font-weight: 500;
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
      border-radius: 50%;

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

  .caption {
    position: absolute;
    right: size(20);
    bottom: size(15);
    z-index: 5;
    font-size: size(12);
    color: #fff;
    letter-spacing: size(2);
    text-shadow: 0.1em 0.1em 0.2em black;
  }
}


@media screen and (max-width:768px) {

  .s9 {
    overflow: hidden;
    width: 100%;
    height: size-m(664);
    background-color: #B36649;


    .splide__arrows {
      left: 50%;
      top: 55%;
      transform: translateX(-50%) translateY(-50%);
      width: 100%;
    }

    .info {
      position: absolute;
      width: size-m(310);
      left: size-m(35);
      top: size-m(165);
      text-align: left;
      pointer-events: none;

      .t1 {
        font-size: size-m(25);
        line-height: 160%;
        margin-bottom: size-m(0);
      }

      .t2 {
        font-size: size-m(19);
        line-height: 160%;
        margin-bottom: size-m(15);
      }

      .t3 {
        font-size: size-m(15);
        line-height: 160%;
        letter-spacing: 0;

      }
    }


    .line {
      position: absolute;
      width: size-m(375);
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
          width: size-m(375);
          left: size-m(57);
          top: size-m(353);
        }

        &.next {
          width: size-m(122);
          left: size-m(224);
          top: size-m(17);
        }

        &.prev {
          width: size-m(102);
          left: -#{size-m(56)};
          top: size-m(547);
        }
      }
    }

    .caption {
      right: size-m(15);
      bottom: size-m(8);
      font-size: size-m(14);
      letter-spacing: size-m(1);
    }
  }
}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"

const activeImg = ref(1);
const globals = getCurrentInstance().appContext.config.globalProperties;

const swipeHandler = (e) => {
  if (e == 'right') {
    prev()
  } else {
    next()
  }
}

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

  if (globals.$isMobile()) prev()
  else next()

}, 4000);
</script>
