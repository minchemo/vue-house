<template>
  <div class="s3 relative">
    <div class="info absolute z-10 flex flex-col justify-end">
      <div class="flex items-end justify-center">
        <p class="title">
          雲科大文教特區<br />
          媲美東京文京區
        </p>
      </div>
      <div class="content">
        輕車十分近，擁抱國際賽事常勝軍「雲林科大」、重視藝術教育的「斗六國小」、以及升學前段班「斗六高中」等七座學府，名校齊聚，像極了東京文教之都「文京區」。
      </div>
      <div class="absolute bar"></div>
    </div>

    <Splide :options="{
      rewind: true,
      autoWidth: true,
      arrows: false,
      type: 'fade',
      autoplay: true,
      interval: 4000,
    }" class="slide-box absolute z-10">
      <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
        <div class="caption absolute">{{ img.caption }}</div>
      </SplideSlide>
    </Splide>

    <lazy-component>
      <img class="absolute newstart z-10" src="@/section/s3/newstart.png" alt="" srcset="" />
    </lazy-component>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height: size(854);
  border-radius: size(180);

  &::after {
    content: "";
    width: size(1650);
    height: size(687);
    background-color: #bbe35b;
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
    top: size(97);
    padding: size(150) size(110);

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
    top: size(57);
    left: size(129);

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
      width: size(873);
      height: size(503);
      background-image: url("@/section/s3/bubble.png");
      background-size: cover;
      background-position: center;
      position: absolute;
      bottom: -#{size(30)};
      left: size(10);
      z-index: 0;
    }

    .splide__pagination {
      position: absolute;
      left: -#{size(35)};
      bottom: size(120);
      flex-direction: column;

      li {
        height: size(20);
        margin-bottom: size(10);

        .splide__pagination__page {
          width: size(20);
          height: size(20);
          border: size(4) solid #bbe35b;
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
    left: size(241);
    top: size(668);
  }
}


@media screen and (max-width:768px) {
  .s3 {
    width: size-m(375);
    height: size-m(551);

    &::after {
      content: "";
      width: size-m(326);
      height: size-m(511);
      border-radius: size-m(64);
    }

    .info {
      width: size-m(326);
      height: size-m(511);
      border-radius: size-m(64);
      left: size-m(24);
      top: size-m(20);
      padding: 0 size-m(18) size-m(58) size-m(18);
      color: #555555;

      .title {
        font-size: size-m(23);
        line-height: size-m(27.37);
      }

      .content {
        margin-top: size-m(20);
        font-weight: 400;
        font-size: size-m(15);
        line-height: size-m(24);
      }

      .bar {
        bottom: unset;
        top: 100%;
        left: 50%;
        margin-left: -#{size-m(30)};
        width: size-m(66);
        height: size-m(5);
        border-radius: 0px 0px 5px 5px;
        background-color: #7C716D;
      }
    }

    .slide-box {
      width: size-m(300);
      height: size-m(208);
      top: size-m(30);
      left: size-m(43);

      .slide {
        width: size-m(300);
        height: size-m(208);
        border-radius: size-m(50);

        .caption {
          font-size: size-m(12);
          line-height: size-m(20);
          color: #fff;
          border-radius: size-m(6) size-m(6) 0 0;
          padding: 0 size-m(8) 0 size-m(8);
          bottom: 0;
          left: size-m(50);
        }
      }

      &::after {
        width: size-m(284);
        height: size-m(230);
        background-image: url('@/section/s2/bubble_m.png');
        bottom: -#{size-m(40)};
        left: -#{size-m(10)};
      }

      .splide__pagination {
        display: none;
      }
    }

    .newstart {
      display: none;
    }
  }
}
</style>

<script setup>
import { ref } from "vue"

const imgs = ref([
  {
    img: new URL("../section/s3/1.jpg", import.meta.url).href,
    caption: "雲林科技大學",
  },
  {
    img: new URL("../section/s3/2.jpg", import.meta.url).href,
    caption: "環球科技大學",
  },
  {
    img: new URL("../section/s3/3.jpg", import.meta.url).href,
    caption: "來來幼稚園",
  },
  {
    img: new URL("../section/s3/4.jpg", import.meta.url).href,
    caption: "維多利亞實中",
  },
])
</script>
