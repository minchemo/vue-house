<template>
  <article class="s5">
    <img
      v-if="!isMobile"
      class="title"
      src="@/section/s5/title.png"
      alt=""
      srcset=""
    />
    <img v-else class="title" src="@/section/s5/titlem.png" alt="" srcset="" />

    <div class="slide-box">
      <div class="t">
        <div class="t1">藝術融入生活<br />當代奢華饗宴</div>
        <div class="div"></div>
        <div class="t2">
          遊藝境，沐清華，以奢華城市中少有的深刻與靜謐，至簡溫潤中，流露雋永姿態，風格場域不治不嬈，美感雍容清逸，新東方文華風格打造的迎賓大廳及沙龍會所，宴會廳、KTV、健身房、瑜珈教室、才藝教室…讓五感走進空間，奢寵主人，臻饗賓客，讓家的空間無限延伸，讓20-28坪的居家也能盡顯豪門風範。
        </div>
        <div class="div"></div>
        <div class="thum" v-if="!isMobile">
          <div
            class="thum-item"
            :class="{ active: i == currentIndex }"
            v-for="(thum, i) in imgs"
            :key="i"
            :style="{ backgroundImage: `url(${thum.img})` }"
            @click="splide.go(i)"
          ></div>
        </div>
      </div>
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          interval: 4000,
          gap: 10,
          type: 'loop',
          pagination: false,
          arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`,
        }"
        @splide:move="onMoved"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="(item, i) in imgs"
          :style="{ 'background-image': `url(${item.img})` }"
        >
          <div class="caption">
            {{ item.caption }}
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <div class="footer s52">
      <div class="logo-box">
        <div class="div"></div>
        <img v-if="!isMobile" src="@/section/s5/logos.png" alt="" srcset="" />
        <img v-else src="@/section/s5/logosm.png" alt="" srcset="" />
        <div class="div"></div>
      </div>
      <div class="contries-box">
        <div class="t1" v-if="!isMobile">國際頂級精工 坐擁北市豪宅同級尊榮</div>
        <div class="t1" v-else>國際頂級精工<br />坐擁北市豪宅同級尊榮</div>
        <div class="t2">
          精選來自世界的品味，美國、英國、德國、日本等全球國際豪宅御用建材，以頂尖藏家的生活藝術演繹，規格之高等同直接移植信義豪宅豪門尺度。
        </div>

        <img
          v-if="!isMobile"
          src="@/section/s5/contries.webp"
          alt=""
          srcset=""
        />
        <img v-else src="@/section/s5/contriesm.webp" alt="" srcset="" />
      </div>
    </div>

    <div class="arrows" v-if="isMobile">
      <img
        src="@/section/arrow.png"
        class="arrow prev"
        alt=""
        srcset=""
        @click="splide.go('<')"
      />
      <img
        src="@/section/arrow.png"
        class="arrow next"
        alt=""
        srcset=""
        @click="splide.go('>')"
      />
    </div>

    <img
      src="@/section/s5/f1.webp"
      class="f1"
      v-if="!isMobile"
      alt=""
      srcset=""
    />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  @apply relative w-full z-30 text-white flex flex-col items-center justify-center;
  height: size(1472);
  background-image: url("@/section/s5/bg.webp");
  background-size: cover;

  .title {
    width: size(1652);
  }

  .slide-box {
    @apply flex items-start;
    gap: size(59);
    margin-top: size(86);
    .slide {
      width: size(1078);
      height: size(667);
      .slide-item {
        width: size(1078);
        height: size(667);
        background: #eee;
        background-size: cover;
        .caption {
          @apply absolute;
          left: size(29);
          bottom: size(14);
          color: #fff;
          font-size: size(14);
          font-weight: 400;
        }
      }
    }
    .t {
      width: size(470);
      .t1 {
        color: #c9a063;
        font-size: size(45);
        font-weight: 700;
        margin-bottom: size(15);
      }
      .t2 {
        color: #000;
        font-size: size(16);
        font-weight: 400;
        text-align: justify;
      }
      .thum {
        @apply flex flex-wrap w-full justify-between;
        row-gap: size(30);
        margin-top: size(70);
        .thum-item {
          @apply cursor-pointer;
          width: size(100);
          height: size(94);
          background-size: cover;
          filter: brightness(0.5);
          &.active {
            filter: brightness(1);
          }
          &:hover {
            filter: brightness(1);
          }
        }
      }
    }
  }

  .footer {
    @apply flex w-full items-center justify-center;
    gap: size(200);
    margin-top: size(120);
    .logo-box {
      width: size(693);
      img {
        @apply w-auto;
        height: size(183);
      }
    }
    .contries-box {
      width: size(736);
      .t1 {
        color: #c9a063;
        font-size: size(45);
        font-weight: 700;
      }
      .t2 {
        color: #000;
        text-align: justify;
        font-size: size(16);
        font-weight: 400;
        margin-top: size(26);
      }
      img {
        @apply w-full;
        margin-top: size(20);
      }
    }
  }

  .f1 {
    @apply absolute z-10 pointer-events-none;
    width: size(530);
    right: 0;
    bottom: -#{size(250)};
    transform-origin: right;
    animation: swin 3s infinite alternate-reverse ease-in-out;
    @keyframes swin {
      from {
        transform: skewY(-6deg);
      }
      to {
        transform: skewY(3deg);
      }
    }
  }
}

.div {
  @apply w-full;
  height: 1px;
  margin: size(20) 0;
  background: linear-gradient(
    90deg,
    rgba(235, 191, 85, 0) 0.5%,
    #ebbf55 28%,
    #ebbf55 71.5%,
    rgba(235, 191, 85, 0) 100%
  );
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {
    height: sizem(1570);
    background-image: url("@/section/s5/bgm.webp");

    .title {
      width: sizem(375);
    }
    .slide-box {
      @apply flex flex-col items-center;
      gap: sizem(0);
      margin-top: sizem(50);
      .slide {
        width: sizem(340);
        height: sizem(210.37);
        .slide-item {
          width: sizem(340);
          height: sizem(210.37);
          .caption {
            left: sizem(12);
            bottom: sizem(10);
            font-size: sizem(12);
          }
        }
      }
      .t {
        width: sizem(375);
        // margin-left: sizem(15);
        padding: 0 sizem(27.5);
        .t1 {
          font-size: sizem(25);
          margin-bottom: 0;
          width: sizem(160);
          margin: 0 auto;
        }
        .t2 {
          font-size: sizem(14);
        }
      }
    }

    .footer {
      @apply flex flex-col w-full items-center justify-center;
      gap: 0;
      margin-top: sizem(30);
      margin-bottom: sizem(20);
      .logo-box {
        width: sizem(333);
        img {
          @apply mx-auto;
          width: sizem(256);
          height: auto;
        }
      }
      .contries-box {
        width: sizem(313);
        line-height: 1.7;
        .t1 {
          font-size: sizem(25);
        }
        .t2 {
          font-size: sizem(14);
          margin-top: sizem(10);
        }
        img {
          @apply w-full;
          margin-top: sizem(40);
        }
      }
    }
    .arrows {
      @apply absolute z-20 -translate-y-1/2 flex justify-between;
      top: sizem(580);
      width: sizem(365);

      .arrow {
        @apply cursor-pointer;
        width: sizem(30);
        height: sizem(30);
        &.prev {
          transform: scaleX(-1);
        }
      }
    }
  }

  .div {
    @apply w-full;
    height: 1px;
    margin: sizem(30) 0 !important;
    background: linear-gradient(
      90deg,
      rgba(235, 191, 85, 0) 0.5%,
      #ebbf55 28%,
      #ebbf55 71.5%,
      rgba(235, 191, 85, 0) 100%
    );
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const currentIndex = ref(0)

const onMoved = (newIdx, prevIdx, destIdx) => {
  currentIndex.value = prevIdx
}
const splide = ref()

const imgs = [
  {
    img: new URL("../section/s5/1.webp", import.meta.url).href,
    caption: "大廳情境示意圖",
  },
  {
    img: new URL("../section/s5/2.webp", import.meta.url).href,
    caption: "大廳情境示意圖",
  },
  {
    img: new URL("../section/s5/3.webp", import.meta.url).href,
    caption: "健身房情境示意圖",
  },
  {
    img: new URL("../section/s5/4.webp", import.meta.url).href,
    caption: "瑜珈室情境示意圖",
  },
  {
    img: new URL("../section/s5/5.webp", import.meta.url).href,
    caption: "宴會廳境示意圖",
  },
  {
    img: new URL("../section/s5/6.webp", import.meta.url).href,
    caption: "公設情境示意圖",
  },
  {
    img: new URL("../section/s5/7.webp", import.meta.url).href,
    caption: "公設情境示意圖",
  },
  {
    img: new URL("../section/s5/8.webp", import.meta.url).href,
    caption: "公設情境示意圖",
  },
]
</script>
