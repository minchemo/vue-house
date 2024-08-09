<template>
  <article class="s4">
    <div class="up">
      <div class="mo-t" v-if="isMobile">
        <div class="t1" data-aos="fade-up" data-aos-delay="0">匯七期豐華 禮名人胸襟</div>
        <img class="en" data-aos="fade-up" data-aos-delay="200" src="@/section/s4/en1.png" alt="" srcset="" />
      </div>
      <div class="map">
        <Fullview v-if="isMobile" />
        <div class="caption" v-if="!isMobile">環境空拍參考示意圖</div>
      </div>
      <div class="r" v-if="!isMobile">
        <div class="t">
          <div class="t1" data-aos="fade-up" data-aos-delay="0">匯七期豐華</div>
          <img class="en" data-aos="fade-up" data-aos-delay="200" src="@/section/s4/en1.png" alt="" srcset="" />
          <div class="t1" data-aos="fade-up" data-aos-delay="0">禮名人胸襟</div>
        </div>
        <div class="i" data-aos="fade-up" data-aos-delay="0">
          <div class="caption">南屯捷運站</div>
        </div>
      </div>
    </div>
    <div class="down">
      <div class="t">
        <div class="t1" data-aos="fade-up" data-aos-delay="0">匯快捷樞紐，禮城心之點</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">
          捷運綠線南屯站x捷運綠線文心森林公園站<br />
          雙捷站點環伺在旁，日常通勤、出遊，一卡瞬連<br />
          聰明掌握捷運經濟，如同您對於生活的講究
        </div>
        <img class="t3" data-aos="fade-up" data-aos-delay="400" src="@/section/s4/en2.png" alt="" srcset="" />
      </div>

      <div class="swiper-box relative" data-aos="fade-up" data-aos-delay="0">
        <Splide
          ref="splide"
          class="slide"
          :options="{
            drag: isMobile,
            arrows: false,
            autoplay: isMobile,
            pagination: false,
            interval: 4000,
            gap: 0,
            type: 'loop',
            autoWidth: true,
          }"
        >
          <SplideSlide
            class="slide-item i"
            :key="i"
            v-for="i in imgs"
            :style="{ 'background-image': `url(${i.img}) !important` }"
          >
            <div class="caption">
              {{ i.caption }}
            </div>
          </SplideSlide>
        </Splide>
        <div class="mo-arrow" v-if="isMobile">
          <img
            class="prev"
            @click="splide.go('<')"
            src="@/section/arrow.png"
            alt=""
            srcset=""
          />
          <img
            class="next"
            @click="splide.go('>')"
            src="@/section/arrow.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
    <div class="train" data-aos="TRAININ" data-aos-duration="1000"></div>
    <div
      class="leaf"
      data-aos="leafIn"
      data-aos-duration="3000"
      v-if="!isMobile"
    >
      <img class="leaf1" src="@/section/s4/leaf1.webp" alt="" srcset="" />
      <img class="leaf2" src="@/section/s4/leaf2.webp" alt="" srcset="" />
      <img class="leaf3" src="@/section/s4/leaf3.webp" alt="" srcset="" />
      <img class="leaf4" src="@/section/s4/leaf4.webp" alt="" srcset="" />
    </div>
    <div class="mo-leaf" data-aos="leafIn" data-aos-duration="2000" v-else>
      <img class="leaf1" src="@/section/s4/mleaf1.webp" alt="" srcset="" />
      <img class="leaf2" src="@/section/s4/mleaf2.webp" alt="" srcset="" />
      <img class="leaf3" src="@/section/s4/mleaf3.webp" alt="" srcset="" />
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  @apply w-full relative text-[#034150] z-10;
  height: size(1706);
  padding-right: size(60);
  padding-top: size(48);
  .i {
    @apply relative bg-cover;
    width: size(472);
    height: size(376);
    &:nth-child(2) {
      background-image: url("@/section/s4/1.webp");
    }
  }

  .caption {
    @apply absolute text-white;
    font-size: size(14);
    font-weight: 400;
    letter-spacing: size(0.84);
    right: size(20);
    bottom: size(20);
  }

  .up {
    @apply flex items-end justify-end;
    gap: size(22);
    margin-bottom: size(15);
    .map {
      @apply relative;
      width: size(1309);
      height: size(1170);
      background-image: url("@/section/s4/map.webp");
      background-size: cover;
    }
    .r {
      .t {
        margin-bottom: size(314);
        padding-left: size(10);
        .t1 {
          font-size: size(48);
          font-weight: 700;
          letter-spacing: size(2.88);
        }
        .en {
          width: size(450.86);
          margin: size(8) 0;
        }
      }
    }
  }

  .down {
    @apply flex items-end justify-end;
    gap: size(72);
    .t {
      .t1 {
        font-size: size(48);
        font-weight: 700;
        letter-spacing: size(2.88);
      }
      .t2 {
        font-size: size(15);
        font-weight: 400;
        letter-spacing: size(0.9);
        margin-top: size(23);
      }
      .t3 {
        width: size(605.2);
        margin-top: size(23);
      }
    }

    .swiper-box {
      width: size(966);
      .slide-item {
        @apply relative;
        width: size(472);
        height: size(376);
        margin-right: size(22);
      }
    }
  }

  .train {
    @apply bg-cover;
    @apply absolute;
    width: size(898);
    height: size(598);
    background-image: url("@/section/s4/train.webp");
    bottom: size(280);
    left: -#{size(163)};
    ////// 動畫位置調整 assets/style/custom-aos.css > TRAININ
  }

  .leaf {
    @apply absolute w-full h-full top-0 left-0 pointer-events-none;
    .leaf1 {
      left: 0;
      bottom: 0;
      width: size(245);
    }
    .leaf2 {
      left: size(232);
      bottom: -#{size(100)};
      width: size(286);
    }
    .leaf3 {
      left: size(1381);
      bottom: -#{size(70)};
      width: size(185);
    }
    .leaf4 {
      left: size(1625);
      bottom: -#{size(250)};
      width: size(182);
    }
    img {
      @apply absolute;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s4 {
    @apply w-full relative text-[#034150];
    height: sizem(1376);
    padding-right: 0;
    padding-top: sizem(57);
    .i {
      @apply relative bg-cover;
      width: size(472);
      height: size(376);
      &:nth-child(2) {
        background-image: url("@/section/s4/1.webp");
      }
    }

    .caption {
      @apply absolute text-white;
      font-size: sizem(12);
      font-weight: 400;
      letter-spacing: 1.5px;
      right: sizem(10);
      bottom: sizem(10);
    }

    .up {
      @apply flex flex-col items-center justify-center;
      gap: sizem(25.82);
      margin-bottom: sizem(37);
      .mo-t {
        @apply flex flex-col items-center justify-center;
        gap: sizem(10);
        .t1 {
          color: #034150;
          font-size: sizem(25);
          font-weight: 700;
          letter-spacing: 1.5px;
        }
        .en {
          width: sizem(271);
        }
      }
      .map {
        @apply relative;
        width: sizem(375);
        height: sizem(667);
      //  background-image: url("@/section/s4/map.webp");
      }
    }

    .down {
      @apply flex flex-col items-center justify-center;
      @apply text-center;
      gap: sizem(9.6);
      .t {
        .t1 {
          font-size: sizem(25);
          font-weight: 700;
          letter-spacing: 1.5px;
        }
        .t2 {
          font-size: sizem(13);
          font-weight: 400;
          letter-spacing: 0.78px;
          margin-top: sizem(14);
        }
        .t3 {
          width: sizem(312);
          margin-top: sizem(23);
        }
      }

      .swiper-box {
        width: sizem(315);
        .slide-item {
          @apply relative;
          width: sizem(315);
          height: sizem(250.93);
          margin-right: sizem(22);
        }
      }
    }

    .train {
      @apply bg-cover pointer-events-none;
      @apply absolute;
      width: sizem(371);
      height: sizem(247);
      background-image: url("@/section/s4/train.webp");
      bottom: sizem(15);
      left: -#{sizem(138)};
      ////// 動畫位置調整 assets/style/custom-aos.css > TRAININ
    }
    .mo-leaf {
      @apply absolute w-full h-full top-0 left-0 pointer-events-none;
      .leaf1 {
        left: sizem(155);
        bottom: sizem(100);
        width: sizem(69.5);
      }
      .leaf2 {
        left: sizem(225);
        bottom: sizem(50);
        width: sizem(51);
      }
      .leaf3 {
        left: sizem(12);
        bottom: -#{sizem(20)};
        width: sizem(50.5);
      }
      img {
        @apply absolute;
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
import Fullview from "../components/fullview.vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const imgs = globals.$isMobile()
  ? [
      {
        img: new URL("../section/s4/1.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
      {
        img: new URL("../section/s4/2.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
      {
        img: new URL("../section/s4/3.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
    ]
  : [
      {
        img: new URL("../section/s4/2.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
      {
        img: new URL("../section/s4/3.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
    ]
</script>
