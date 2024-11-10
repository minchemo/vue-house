<template>
  <article class="s3">
    <div class="map">
      <img
        class="map1"
        src="@/section/s3/1.png"
        alt=""
        srcset=""
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="1000"
      />
      <img
        class="map2"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="1200"
        src="@/section/s3/2.png"
        alt=""
        srcset=""
      />
      <img
        class="map3"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="1400"
        src="@/section/s3/3.png"
        alt=""
        srcset=""
      />
      <img
        class="map4"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="1600"
        src="@/section/s3/4.png"
        alt=""
        srcset=""
      />
    </div>
    <div class="a anchor3">
      <div class="t">
        <div
          class="t1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          佔地高雄主場 連結橋科台積
        </div>
        <div
          class="t2"
          v-if="!isMobile"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          向北連起橋頭科學園區，往南聯動楠梓科學園區、台積電，<br />
          共構北高雄最強科技流域，承接三大科技園區超過2千億產值、2萬名就業機會，帶動人流、商圈、價值無限紅利！
        </div>
        <img class="t3" src="@/section/s3/2000.svg" alt="" srcset="" />
        <div
          class="t2"
          v-if="isMobile"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          向北連起橋頭科學園區，往南聯動楠梓科學園區、台積電，共構北高雄最強科技流域，承接三大科技園區超過2千億產值、2萬名就業機會，帶動人流、商圈、價值無限紅利！
        </div>
        <div
          class="t1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          昨日台南LM特區  <br v-if="isMobile" />今日楠梓科技流域
        </div>
        <div
          class="t2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          高雄緊隨南科LM區成功經驗，楠梓、橋頭一帶已見園區生活圈樣貌成型，約15分鐘內可以上班、擁有生活機能、<br
            v-if="!isMobile"
          />規劃新穎的道路系統，楠梓已邁向煥然一新的城市風貌！
        </div>
      </div>
      <div class="slide-box">
        <Splide
          ref="splide"
          class="slide"
          :options="{
            drag: isMobile ? true : false,
            autoWidth: isMobile ? true : false,
            arrows: false,
            autoplay: true,
            pagination: false,
            interval: 4000,
            gap: isMobile ? 5 : 10,
            type: 'loop',
            focus: isMobile ? 'center' : null,
            perPage: isMobile ? 2.5 : 3,
          }"
        >
          <SplideSlide
            class="slide-item"
            :key="i"
            v-for="i in imgs"
            :style="{ 'background-image': `url(${i.img})` }"
          >
            <div class="caption">
              {{ i.caption }}
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <div class="b anchor4">
      <div class="t">
        <div
          class="t1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          R22捷運青埔站 <br v-if="isMobile" />速度共構國1
        </div>
        <div
          class="t2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          捷運軌道貫暢大高雄，坐擁紅線青埔站、橋頭糖廠站；近取台鐵楠梓火車站，連結未來輕軌燕巢線，驅車轉身就是台1線，速接國10、國1，南來北往無往不利！
        </div>
      </div>
      <div class="slide-box">
        <Splide
          ref="splide2"
          class="slide"
          :options="{
            autoWidth: false,
            arrows: false,
            autoplay: true,
            pagination: false,
            interval: 4000,
            gap: 10,
            type: 'loop',
            perPage: 1,
          }"
        >
          <SplideSlide
            class="slide-item"
            :key="i"
            v-for="i in imgs"
            :style="{ 'background-image': `url(${i.img})` }"
          >
            <div class="caption">
              {{ i.caption }}
            </div>
          </SplideSlide>
        </Splide>
        <div class="arrows">
          <img
            src="@/section/arrow.png"
            class="arrow prev"
            @click="splide2.go('<')"
            alt=""
            srcset=""
          />
          <img
            src="@/section/arrow.png"
            class="arrow next"
            @click="splide2.go('>')"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s3 {
  @apply relative w-full;
  @apply bg-cover bg-bottom;
  background-image: url("@/section/s3/bg.jpg");

  .t {
    @apply text-white;
    .t1 {
      font-size: size(54);
      font-weight: 600;
      margin-bottom: size(29);
    }
    .t2 {
      @apply font-['Noto_Sans_TC'];
      font-size: size(16);
      font-weight: 400;
      line-height: 151.41%;
    }
    .t3 {
      width: size(959);
      margin-top: size(48);
      margin-bottom: size(60);
    }
  }

  .caption {
    @apply text-white;
    @apply absolute;
    right: size(20);
    bottom: size(12);
    font-family: "Noto Sans TC";
    font-size: size(15);
    font-weight: 700;
  }

  .a {
    @apply w-full relative;
    @apply flex flex-col;
    height: size(1641);
    padding-left: size(224);
    padding-top: size(238);

    .slide-box {
      width: size(1586);
      margin-top: size(41);
      margin-left: -#{size(76)};
      .slide {
        .slide-item {
          @apply bg-cover;
          height: size(348);
        }
      }
    }
  }
  .b {
    @apply w-full relative;
    height: size(900);
    padding-left: size(222);
    padding-top: size(129);

    .t {
      @apply flex items-center;
      gap: size(89);
      .t1 {
        @apply m-0;
      }
      .t2 {
        @apply m-0 relative;
        width: size(660);
        &::before {
          @apply w-[1px] bg-white;
          @apply absolute;
          @apply top-1/2 -translate-y-1/2;
          content: "";
          height: size(51);
          left: -#{size(30)};
        }
        &::after {
          @apply w-[1px] bg-white;
          @apply absolute;
          @apply top-1/2 -translate-y-1/2;
          content: "";
          height: size(51);
          right: -#{size(30)};
        }
      }
    }
    .slide-box {
      @apply absolute;
      right: size(199);
      bottom: size(129);
      width: size(855);
      margin-top: size(65);
      .slide {
        .slide-item {
          @apply bg-cover relative;
          width: size(855);
          height: size(506);
        }
      }
      .arrows {
        @apply absolute w-[107%];
        @apply left-1/2 -translate-x-1/2;
        @apply top-1/2 -translate-y-1/2;
        @apply flex items-center justify-between;
        img {
          @apply cursor-pointer;
          width: size(18);
        }
        .next {
          @apply -scale-x-100;
        }
      }
    }
  }

  .map {
    @apply absolute right-0 top-0;
    @apply pointer-events-none select-none;
    img {
      @apply absolute;
    }
    .map1 {
      top: 0;
      right: size(126.86);
      width: size(952);
    }
    .map2 {
      top: 0;
      right: 0;
      width: size(647);
    }
    .map3 {
      top: size(435.78);
      right: size(498.31);
      width: size(41.15);
    }
    .map4 {
      top: size(0);
      right: size(338.91);
      width: size(266.64);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    @apply relative w-full;
    @apply bg-cover bg-bottom;
    background-image: url("@/section/s3/bg.jpg");
    height: auto;

    .t {
      @apply text-white;
      .t1 {
        font-size: sizem(25);
        font-weight: 600;
        margin-bottom: 0;
      }
      .t2 {
        font-size: sizem(14);
        width: sizem(310);
      }
      .t3 {
        width: sizem(286);
        margin-top: size(48);
        margin-bottom: size(60);
      }
    }

    .caption {
      @apply text-white;
      @apply absolute;
      right: sizem(10);
      bottom: sizem(6);
      font-size: sizem(12);
      font-weight: 700;
    }

    .a {
      @apply w-full relative;
      @apply flex flex-col;
      height: auto;
      padding-left: sizem(36);
      padding-top: sizem(60);

      .slide-box {
        width: 100vw;
        margin-top: 0;
        margin-left: -#{sizem(36)};
        .slide {
          .slide-item {
            @apply bg-cover;
            width: sizem(234.96);
            height: sizem(156);
          }
        }
      }
      .t1 {
        margin-bottom: sizem(10);
        &:nth-child(4) {
          margin-top: sizem(240);
        }
      }
      .t2 {
        margin-bottom: sizem(35.36);
      }
      .t3 {
        margin-bottom: sizem(20);
      }
    }
    .b {
      @apply w-full relative;
      @apply bg-cover bg-bottom;
      height: sizem(734);
      padding-left: sizem(32);
      padding-top: sizem(68);
      background-image: url("@/section/s3/bgbm.jpg");

      .t {
        @apply flex flex-col items-start;
        gap: sizem(10);
        .t1 {
          @apply m-0;
        }
        .t2 {
          @apply m-0 relative;
          width: sizem(310);
          &::before {
            @apply hidden;
          }
          &::after {
            @apply hidden;
          }
        }
      }
      .slide-box {
        @apply relative;
        right: unset;
        bottom: unset;
        width: sizem(311.3);
        margin-top: sizem(23);
        .slide {
          .slide-item {
            @apply bg-cover relative;
            width: sizem(311.3);
            height: sizem(184.23);
          }
        }
        .arrows {
          @apply absolute w-[115%];
          @apply left-1/2 -translate-x-1/2;
          @apply top-1/2 -translate-y-1/2;
          @apply flex items-center justify-between;
          img {
            @apply cursor-pointer;
            width: sizem(20);
          }
          .next {
            @apply -scale-x-100;
          }
        }
      }
    }

    .map {
      top: sizem(100);
      @apply relative;
      .map1 {
        top: sizem(180);
        right: sizem(42.63);
        width: sizem(320.37);
      }
      .map2 {
        top: sizem(180);
        right: 0;
        width: sizem(217.7);
      }
      .map3 {
        top: sizem(330);
        right: sizem(167.61);
        width: sizem(13.85);
      }
      .map4 {
        top: sizem(180);
        right: sizem(113.98);
        width: sizem(89.72);
      }
      img {
        mask-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0) 100%
        );
      }
    }
  }
}
</style>

<script setup>
import { ref, computed, getCurrentInstance } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const splide2 = ref()

const imgs = [
  {
    img: new URL("../section/s3/i1.jpg", import.meta.url).href,
    caption: "橋頭科學園區",
  },
  {
    img: new URL("../section/s3/i2.jpg", import.meta.url).href,
    caption: "台積電",
  },
  {
    img: new URL("../section/s3/i3.jpg", import.meta.url).href,
    caption: "楠梓科技園區",
  },
]
const imgs2 = [
  {
    img: new URL("../section/s3/ii1.jpg", import.meta.url).href,
    caption: "捷運橋頭糖廠站",
  },
  {
    img: new URL("../section/s3/ii2.jpg", import.meta.url).href,
    caption: "捷運青埔站",
  },
  {
    img: new URL("../section/s3/ii3.jpg", import.meta.url).href,
    caption: "楠梓火車站",
  },
  {
    img: new URL("../section/s3/ii4.jpg", import.meta.url).href,
    caption: "橋頭火車站",
  },
]
</script>
