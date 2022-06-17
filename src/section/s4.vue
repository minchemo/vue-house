<template>
  <div class="s4 relative bg-[#FFEC2E]">
    <div class="info absolute bg-white">
      <div data-aos="fade" class="flex items-end">
        <lazy-component>
          <img class="girl" src="@/section/s4/i.png" alt="" srcset="" />
        </lazy-component>
        <p class="title">
          十分鐘 靜速之間<br />
          悠遊 心的自由式
        </p>
      </div>
      <div data-aos="fade" data-aos-delay="200" class="content">
        想一飽口福，有人文夜市、莊敬夜市日日饗宴，想奔放一下，便能在膨鼠森林公園、中山紀念公園找回赤子心；更有市政中心、成大醫院、星巴克…機能滿席！
      </div>
      <div class="absolute bar"></div>
    </div>

    <Splide ref="splide"  data-aos="zoom-in" :options="{
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
    <div v-if="$isMobile()" class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
      <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
        <img src="@/assets/prev.svg" alt="" srcset="">
      </button>
      <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
        <img src="@/assets/next.svg" alt="" srcset="">
      </button>
    </div>

    <lazy-component>
      <img class="absolute newstart" src="./s1/newstart.svg" alt="" srcset="" />
    </lazy-component>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  height: size(854);
  border-radius: size(180);

  .info {
    width: size(910);
    height: size(674);
    border-radius: size(190);
    left: size(136);
    top: size(99);
    padding: size(127) size(170) size(166) size(90);
    color: #555555;

    .girl {
      height: size(160);
    }

    .title {
      font-weight: 500;
      font-size: size(55);
      line-height: size(65.45);
    }

    .content {
      margin-top: size(54);
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
    left: size(999);

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
      width: size(863);
      height: size(503);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFC70044' viewBox='0 0 863 503'%3E%3Cpath d='M863,169.2v164.5c0,93.1-75.3,169.3-167.3,169.3H224.1c-92,0-151.8-60.6-151.8-153.6V200.9 c0-27.2-46.7-11.3-56.3-1.3c-15.7,16.4-19.2,7-13.3-11C22.1,142.5,69.6,3.3,222.5,0l473.2,0C787.7,0,863,76.1,863,169.2z'/%3E%3C/svg%3E%0A");
      background-size: cover;
      background-position: center;
      position: absolute;
      bottom: -#{size(30)};
      left: -#{size(100)};
      z-index: 0;
    }

    .splide__pagination {
      position: absolute;
      right: -#{size(35)};
      bottom: size(120);
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
            border-color: #ff9900;
          }
        }
      }
    }
  }

  .newstart {
    width: size(709);
    left: size(1064);
    top: size(668);
    opacity: 0.75;
  }
}


@media screen and (max-width:768px) {
  .s4 {
    width: size-m(375);
    height: size-m(576);
    border-radius: size-m(68);

    .info {
      width: size-m(326);
      height: size-m(531);
      border-radius: size-m(64);
      left: size-m(24);
      top: size-m(20);
      padding: size-m(290) size-m(18) size-m(55) size-m(18);
      color: #555555;

      .girl {
        height: size-m(65);
        margin-right: size-m(10);
      }

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
      top: size-m(51);
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
        background-image: url("data:image/svg+xml,%3Csvg fill='%23FFEC2E' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 680 550'%3E%3Cpath d='M511.5,0h-343C75.8,0,0,75.8,0,168.4v163C0,424,60.3,484.3,153,484.3c0,0,326.6,0,327,0 c27.1,0,11.3,39.9,1.2,49.6c-18,17.5-8,24.7,41.1,0.1C570,510.1,680,447.1,680,315.9V168.4C680,75.8,604.2,0,511.5,0z'/%3E%3C/svg%3E");
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
const splide = ref();

const imgs = ref([
  {
    img: new URL("../section/s4/1.jpg", import.meta.url).href,
    caption: "太平老街",
  },
  {
    img: new URL("../section/s4/2.jpg", import.meta.url).href,
    caption: "人文夜市",
  },
  {
    img: new URL("../section/s4/3.jpg", import.meta.url).href,
    caption: "環保運動公園",
  },
])
</script>
