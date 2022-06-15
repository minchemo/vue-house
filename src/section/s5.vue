<template>
  <div class="s5 relative bg-[#BBE35B]">
    <div class="info absolute z-10 flex flex-col justify-center items-center">
      <div class="flex items-end justify-center">

        <lazy-component>
          <img class="girl" src="@/section/s5/i.png" alt="" srcset="" />
        </lazy-component>
        <p class="title">
          輕隱市心<br />
          風景首馥
        </p>
      </div>
      <div class="content text-center">
        選對環境，每一席都是舒適首選，<br />
        戶戶邊間，節氣流轉，<br />
        每一刻呼吸都享高純度氧；<br />
        環境採低密度開發、四方無垠，<br />
        層層有景，稻浪浮雲，盡收吾境。
      </div>
    </div>

    <Splide :options="{
      rewind: true,
      autoWidth: true,
      arrows: false,
      type: 'fade',
      autoplay: true,
      interval: 4000,
    }" class="slide-box absolute z-10">
      <SplideSlide class="slide" v-for="img in imgs" v-bind:style="{ backgroundImage: `url('${img.img}')` }">
        <div class="caption absolute">{{ img.caption }}</div>
      </SplideSlide>
    </Splide>

    <lazy-component>
      <img class="absolute newstart z-10" src="@/section/s5/newstart.png" alt="" srcset="" />

    </lazy-component>

  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size(1006);
  border-radius: size(180);

  &::after {
    content: "";
    width: size(1696);
    height: size(860);
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    border-radius: size(190);
    transform: translate(-50%, -50%);
  }

  .info {
    width: size(910);
    height: size(674);
    border-radius: size(190);
    left: size(900);
    top: size(180);
    padding: 0 size(110);

    .girl {
      height: size(151);
      margin-right: size(20);
    }

    .title {
      font-weight: 500;
      font-size: size(55);
      line-height: size(65.45);
    }

    .content {
      margin-top: size(20);
      font-weight: 400;
      font-size: size(26);
      line-height: size(46.8);
    }

    .bar {
      bottom: 0;
      left: 50%;
      margin-left: -#{size(60)};
      width: size(120);
      height: size(10);
      border-radius: size(10) size(10) 0 0;
      background-color: #7c716d;
    }
  }

  .slide-box {
    width: size(790);
    height: size(548.69);
    top: size(228);
    left: size(160);

    .splide__track {
      z-index: 10;
    }

    .slide {
      width: size(790);
      height: size(548.69);
      background-size: cover;
      border-radius: size(150);

      .caption {
        background: rgba($color: #000000, $alpha: 0.5);
        font-size: size(15);
        line-height: size(24);
        color: #fff;
        border-radius: size(6) size(6) 0 0;
        padding: 0 size(8) 0 size(8);
        bottom: 0;
        left: size(150);
      }
    }

    &::after {
      content: "";
      width: size(813);
      height: size(463);
      background-image: url("@/section/s5/bubble.png");
      background-size: cover;
      background-position: center;
      position: absolute;
      bottom: -#{size(40)};
      right: -#{size(100)};
      z-index: 0;
    }

    .splide__pagination {
      position: absolute;
      left: -#{size(90)};
      bottom: size(200);
      flex-direction: column;

      li {
        height: size(20);
        margin-bottom: size(10);

        .splide__pagination__page {
          width: size(20);
          height: size(20);
          border: size(4) solid #fff;
          border-radius: 100%;

          &.is-active {
            border-color: #7fa523;
          }
        }
      }
    }
  }

  .newstart {
    width: size(709);
    left: size(1068);
    top: size(830);
  }
}
</style>

<script setup>
import { ref } from "vue"

const imgs = ref([
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "雲林科技大學",
  },
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "雲林科技大學",
  },
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "雲林科技大學",
  },
])
</script>
