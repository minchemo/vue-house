<template>
  <div class="s5 relative bg-white">
    <div class="flex flex-col md:flex-row items-start md:items-end justify-center md:justify-between h-full">
      <div class="info">
        <img v-if="!$isMobile()" class="title relative z-10" src="@/section/s5/title.svg" alt="" srcset="">
        <img v-else class="title relative z-10" src="@/section/s5/title_m.svg" alt="" srcset="">
        <div class="info-box" data-aos="zoom-in" data-aos-delay="0">
          <div class="t1">9年國教一次到位 親子雙贏</div>
          <div class="t2">永福托兒所為鄰，永福國小、三和中學、徐匯中學漫步上學<br v-if="!$isMobile()">
            學齡前教育&9年國教無縫接軌，陪伴孩子成長，幸福零距離！</div>
        </div>
      </div>
      <Splide ref="splide" :options="{
        rewind: true,
        autoWidth: true,
        arrows: false,
        type: 'fade',
        autoplay: true,
        interval: 4000,
      }" @splide:move="move" class="slide-box absolute z-10">
        <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
          <div class="caption">{{ img.caption }}</div>
        </SplideSlide>
      </Splide>
      <div class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
        <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
          <img src="@/assets/prev.svg" alt="公園漾" srcset="">
        </button>
        <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
          <img src="@/assets/next.svg" alt="公園漾" srcset="">
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size(1080);
  background-image: url('@/section/s5/bg.jpg');
  padding-bottom: size(70);

  .slide-box {
    position: relative;
    flex-basis: size(1028);
    height: size(920);
    margin-right: size(30);

    &::after {
      content: '';
      position: absolute;
      width: size(1028);
      height: size(920);
      top: 0;
      left: 0;
      z-index: 10;
      background-image: url('@/section/other.gif');
      background-size: cover;
      background-position: left;
      background-repeat: no-repeat;
      mix-blend-mode: screen;
      pointer-events: none;
    }

    .splide__track {
      z-index: 10;
    }

    .slide {
      width: size(1028);
      height: size(920);
      background-size: cover;

      .caption {
        position: absolute;
        font-size: size(20);
        color: #fff;
        bottom: size(25);
        right: size(50);
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, .65));
      }
    }

    .splide__pagination {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: size(20);
      z-index: 20;
      gap: size(7.5);

      li {
        height: size(20);
        margin-bottom: size(10);

        .splide__pagination__page {
          width: size(15);
          height: size(15);
          border-radius: 100%;
          background: rgba($color: #fff, $alpha: 1);
          border: 2px solid #818181;

          &.is-active {
            background: rgba($color: #818181, $alpha: 1);
          }
        }
      }
    }
  }

  .splide__arrows {
    right: size(50);
    top: size(514);
    left: unset;
    width: size(985);
  }


  .info {
    flex-basis: size(822);

    .title {
      width: size(448.28);
      margin-bottom: -#{size(190)};
      margin-left: size(168);
    }

    .info-box {
      width: 100%;
      height: size(404);
      background-color: #E1E5E2;
      padding-left: size(168);
      padding-top: size(210);
      margin-bottom: size(180);
      color: #231815;

      .t1 {
        font-weight: 700;
        font-size: size(40);
        margin-bottom: size(15);
        letter-spacing: 0.07em;
      }

      .t2 {
        font-weight: 400;
        font-size: size(20);
        line-height: 158%;
      }
    }

    .route {
      margin-top: size(45);
      margin-bottom: size(247);
      width: size(612);
    }
  }
}


@media screen and (max-width:768px) {

  .s5 {
    width: 100%;
    height: size-m(667);
    padding-bottom: 0;

    .slide-box {
      flex-basis: size-m(375);
      height: size-m(336);
      margin-right: 0;

      &::after {
        width: size-m(375);
        height: size-m(336);
      }

      .slide {
        width: size-m(375);
        height: size-m(336);

        .caption {
          font-size: size-m(12);
          bottom: size-m(10);
          right: size-m(20);
        }
      }

      .splide__pagination {
        display: none;
      }
    }

    .splide__arrows {
      right: size-m(16);
      top: size-m(466);
      left: unset;
      width: size-m(344);
    }

    .info {
      flex-basis: auto;

      .title {
        width: size-m(241);
        margin-bottom: -#{size-m(65)};
        margin-left: size-m(20);
      }

      .info-box {
        width: 100%;
        height: size-m(183);
        background-color: #E1E5E2;
        padding-left: size-m(30);
        padding-right: size-m(30);
        padding-top: size-m(38);
        margin-bottom: size-m(27);
        color: #231815;

        .t1 {
          font-size: size-m(20);
          margin-bottom: size-m(15);
        }

        .t2 {
          font-size: size-m(14);
          line-height: 158%;
        }
      }

    }
  }

}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
import AOS from 'aos';

const splide = ref();

const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
  AOS.refresh();
}


const globals = getCurrentInstance().appContext.config.globalProperties;

const imgs = ref([
  {
    img: globals.$isMobile() ? new URL("../section/s5/1_m.jpg", import.meta.url).href : new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: '永福國小實景圖'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s5/2_m.jpg", import.meta.url).href : new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: '徐匯中學實景圖'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s5/3_m.jpg", import.meta.url).href : new URL("../section/s5/3.jpg", import.meta.url).href,
    caption: '三和國中實景圖'
  },
])
</script>
