<template>
  <div class="s6 relative bg-white">
    <div class="flex flex-col md:flex-row-reverse items-center md:items-end justify-center md:justify-between h-full">
      <lazy-component class="info">
        <img v-if="!$isMobile()" class="relative z-10 title" src="@/section/s6/title.svg" alt="" srcset="">
        <img v-else class="title relative z-10" src="@/section/s6/title_m.svg" alt="" srcset="">
        <div class="info-box" data-aos="fade-up" data-aos-delay="0">
          <div class="t1">全能生活無可挑剔 便利滿分</div>
          <div class="t2">幸福商圈、徐匯中學商圈、蘆洲中山路商圈就近擁抱<font v-if="!$isMobile()"><br></font> <font v-else>，</font>
            永福派出所24H安心守護<font v-if="!$isMobile()"><br></font> <font v-else>，</font>
            「公園漾」坐擁三蘆最好的中心點，食衣住行與居安全滿足！</div>
        </div>
      </lazy-component>
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

.s6 {
  width: 100%;
  height: size(1080);
  padding-bottom: size(70);

  .slide-box {
    flex-basis: size(1028);
    height: size(920);

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
        left: size(50);
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
    left: size(20);
    top: size(514);
    width: size(985);
  }


  .info {
    flex-basis: size(822);

    .title {
      width: size(448.28);
      margin-bottom: -#{size(190)};
      margin-left: size(65);
    }

    .info-box {
      width: 100%;
      height: size(456);
      background-color: #E1E5E2;
      padding-left: size(65);
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
  }
}


@media screen and (max-width:768px) {

  .s6 {
    width: 100%;
    height: size-m(667);
    padding-bottom: 0;

    .slide-box {
      flex-basis: size-m(375);
      height: size-m(336);
      margin-right: 0;

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
        margin-bottom: -#{size-m(35)};
        margin-left: size-m(20);
      }

      .info-box {
        width: size-m(357);
        height: size-m(183);
        background-color: #E1E5E2;
        padding-left: size-m(30);
        padding-right: size-m(30);
        padding-top: size-m(38);
        margin-bottom: size-m(15);
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
    img: globals.$isMobile() ? new URL("../section/s6/1_m.jpg", import.meta.url).href : new URL("../section/s6/1.jpg", import.meta.url).href,
    caption: '徐匯廣場實景圖'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s6/2_m.jpg", import.meta.url).href : new URL("../section/s6/2.jpg", import.meta.url).href,
    caption: '幸福商圈實景圖'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s6/3_m.jpg", import.meta.url).href : new URL("../section/s6/3.jpg", import.meta.url).href,
    caption: '幸福商圈實景圖'
  },
])
</script>
