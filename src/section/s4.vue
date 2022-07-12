<template>
  <div class="s4 relative bg-white">
    <div class="flex flex-col-reverse md:flex-row items-center justify-between h-full">
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
      <!-- <div v-if="$isMobile()" class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
        <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
          <img src="@/assets/prev.svg" alt="公園漾" srcset="">
        </button>
        <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
          <img src="@/assets/next.svg" alt="公園漾" srcset="">
        </button>
      </div> -->
      <lazy-component class="info">
        <img class="title z-20 relative" src="@/section/s4/title.svg" alt="" srcset="">
        <div class="info-box z-0" data-aos="zoom-in" data-aos-delay="0">
          <div class="t1">大台北與國際間 輕盈穿梭</div>
          <div class="t2">「公園漾」約550米三和國中站、約650米徐匯中學站<br v-if="!$isMobile()">
            環狀線Y21站預計2029年完工<br v-if="!$isMobile()">
            四站就到台北與機場捷運A3站<br v-if="!$isMobile()">
            完美串聯大台北與國際生活版圖！</div>
        </div>
        <img class="route" data-aos="zoom-in" data-aos-delay="400" src="@/section/s4/route.png" alt="" srcset="">
      </lazy-component>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  height: size(1080);

  .slide-box {
    flex-basis: size(1158);
    height: size(921);

    .splide__track {
      z-index: 10;
    }

    .slide {
      width: size(1158);
      height: size(921);
      background-size: cover;

      .caption {
        position: absolute;
        font-size: size(20);
        color: #231815;
        bottom: size(25);
        left: size(50);
      }
    }

  }

  .info {
    flex-basis: size(762);

    .title {
      width: size(463.01);
      margin-bottom: -#{size(100)};
      margin-left: size(80);
    }

    .info-box {
      width: 100%;
      height: size(352.27);
      background-color: #E1E5E2;
      padding: size(100) size(70);
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

  .s4 {
    width: 100%;
    height: size-m(667);

    .slide-box {
      flex-basis: 100%;
      height: size-m(300);


      .slide {
        width: size-m(375);
        height: size-m(300);

        .caption {
          font-size: size-m(12);
          bottom: size-m(10);
          right: size-m(15);
          left: unset;
        }
      }

    }

    .info {
      flex-basis: 100%;
      margin-right: 0;
      margin-left: auto;

      .title {
        width: size-m(207);
        margin-bottom: -#{size-m(45)};
        margin-left: 0;
      }

      .info-box {
        width: size-m(357);
        height: size-m(184);
        background-color: #E1E5E2;
        padding: auto;
        padding-top: size-m(38);
        padding-left: size-m(25);
        padding-right: size-m(31);
        color: #231815;
        margin-right: 0;
        margin-left: auto;

        .t1 {
          font-size: size-m(20);
          margin-bottom: size-m(15);
        }

        .t2 {
          font-size: size-m(14);
        }
      }

      .route {
        margin-top: size-m(20);
        margin-bottom: 0;
        margin-left: size-m(33);
        width: size-m(310);
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
    img: globals.$isMobile() ? new URL("../section/s4/1_m.jpg", import.meta.url).href : new URL("../section/s4/1.jpg", import.meta.url).href,
    caption: '三和國中站實景圖'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s4/2_m.jpg", import.meta.url).href : new URL("../section/s4/2.jpg", import.meta.url).href,
    caption: '三和國中站'
  },
])
</script>
