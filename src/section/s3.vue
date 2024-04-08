<template>
  <article class="s3">
    <div class="slide-box s31">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: true,
          interval: 4000,
          gap: 10,
          type: 'loop',
          arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgsA"
          :style="{ 'background-image': `url(${i.img})` }"
        >
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
      <div class="t">
        <div class="t1" v-if="isMobile">清溪川首排<br />綠金十字軸</div>
        <div class="t1" v-else>清溪川首排 綠金十字軸</div>
        <div class="t2">奢擁都心，奢享謐境</div>
        <div class="t3">
          與自然相棲，與藝文相伴，列席首爾清溪川美譽的中港綠堤第一排，開闊的不只是視野的永恆棟距，林濤濃蔭，滿窗翠綠，水域風光，綿延串起1.4公頃溫仔圳濕地公園、昌平公園、願景公園、國家電影文化園區、昌平國小、頭前國中明星學區，繁華裡藏奢綠，四季裡有斑斕，藝文書香裡自在漫居。
        </div>
      </div>
    </div>
    <div class="slide-box s32">
      <Splide
        ref="splide2"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          interval: 4000,
          gap: 10,
          type: 'loop',
          arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgsB"
          :style="{ 'background-image': `url(${i.img})` }"
        >
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
      <div class="t">
        <div class="t1">雙大道樞紐 雙商圈核心</div>
        <div class="t2">大道即是價值，稀缺更顯珍貴</div>
        <div class="t3">
          大道即是價值，稀缺更顯珍貴，中原X中華雙大道十字金軸的鑽石角地新舊商圈交融的市街文化，副都心的時尚，舊新莊的豐饒，織就「文華苑」美好的生活地圖。宏匯廣場i-Tower、晶鑽購物中心時尚、影視潮流脈動，連結著中原傳統市場的生猛活力，一步行履街頭小吃、市場採買、百貨商場國際美食，時尚咖、文青族、食藝家…都能在此邂逅所愛。
        </div>
      </div>
    </div>
    <img src="@/section/s3/lt1.png" class="lt lt1" alt="" srcset="" />
    <img
      v-if="!isMobile"
      src="@/section/s3/lt2.png"
      class="lt lt2"
      alt=""
      srcset=""
    />
    <img v-else src="@/section/s3/lt2m.png" class="lt lt2" alt="" srcset="" />
    <img src="@/section/s3/f1.webp" class="lt f f1" alt="" srcset="" />
    <img src="@/section/s3/f2.webp" class="lt f f2" alt="" srcset="" />

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

    <div class="arrows2" v-if="isMobile">
      <img
        src="@/section/arrow.png"
        class="arrow prev"
        alt=""
        srcset=""
        @click="splide2.go('<')"
      />
      <img
        src="@/section/arrow.png"
        class="arrow next"
        alt=""
        srcset=""
        @click="splide2.go('>')"
      />
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply relative w-full z-20 flex flex-col items-center justify-center;
  height: size(1480);
  background-color: #efefef;
  gap: size(25);
  padding-right: size(225);

  .slide-box {
    @apply flex items-end;
    gap: size(94);
    .slide {
      width: size(778);
      height: size(521);
      .slide-item {
        width: size(778);
        height: size(521);
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
      .splide__pagination {
        @apply absolute right-0 w-full flex justify-end;
        padding: size(16) 0;
        li {
          line-height: 0;
          button {
            width: size(42);
            height: size(5);
            background: #ebbf55;
            opacity: 0.4;
            &.is-active {
              opacity: 1;
            }
          }
        }
        gap: size(15);
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
        font-size: size(23);
        font-weight: 500;
        margin-bottom: size(5);
      }
      .t3 {
        color: #000;
        font-size: size(16);
        font-weight: 400;
        text-align: justify;
      }
    }
    &:nth-child(1) {
      .slide {
        .splide__pagination {
          @apply bottom-full;
        }
      }
    }
    &:nth-child(2) {
      .slide {
        .splide__pagination {
          @apply top-full;
        }
      }
    }
  }

  .lt {
    @apply absolute z-10 pointer-events-none;
    &.lt1 {
      width: size(372);
      top: size(232);
      right: size(116);
    }

    &.lt2 {
      width: size(578);
      bottom: size(83);
      left: size(457);
    }
    &.f1 {
      width: size(568);
      right: 0;
      top: size(169);
      transform-origin: right;
    }
    &.f2 {
      width: size(540);
      left: 0;
      bottom: -#{size(310)};
      transform-origin: left;
    }

    &.f {
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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    @apply relative w-full z-20 flex flex-col items-center justify-center;
    height: sizem(1439);
    gap: sizem(60);
    padding-right: sizem(27.5);
    padding-left: sizem(27.5);

    .slide-box {
      @apply flex items-end;
      gap: sizem(35);
      .slide {
        @apply w-full;
        height: sizem(227.69);
        .slide-item {
          @apply w-full;
          height: sizem(227.69);
          .caption {
            left: sizem(12);
            bottom: sizem(6);
            font-size: sizem(12);
          }
        }
        .splide__pagination {
          @apply hidden;
        }
      }
      .t {
        @apply w-full;
        .t1 {
          font-size: sizem(25);
          margin-bottom: sizem(10);
        }
        .t2 {
          font-size: sizem(16);
          margin-bottom: sizem(10);
        }
        .t3 {
          font-size: sizem(14);
        }
      }
      &:nth-child(1) {
        @apply flex-col-reverse;
      }
      &:nth-child(2) {
        @apply flex-col;
      }
    }

    .lt {
      @apply absolute z-10 pointer-events-none;
      &.lt1 {
        width: sizem(237);
        top: sizem(50);
        right: sizem(110.5);
      }

      &.lt2 {
        width: sizem(181.53);
        bottom: sizem(47.2);
        left: sizem(166);
      }
      &.f1 {
        width: sizem(190);
        top: -#{sizem(50)};
      }
      &.f2 {
        width: sizem(170);
        bottom: -#{sizem(60)};
      }

      &.f {
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

    .arrows {
      @apply absolute z-20 -translate-y-1/2 flex justify-between;
      top: sizem(580);
      width: sizem(350);

      .arrow {
        @apply cursor-pointer;
        width: sizem(30);
        height: sizem(30);
        &.prev {
          transform: scaleX(-1);
        }
      }
    }

    .arrows2 {
      @apply absolute z-20 -translate-y-1/2 flex justify-between;
      top: sizem(870);
      width: sizem(350);

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
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const splide2 = ref()

const imgsA = [
  {
    img: new URL("../section/s3/a1.webp", import.meta.url).href,
    caption: "塭仔圳溼地公園",
  },
  {
    img: new URL("../section/s3/a2.webp", import.meta.url).href,
    caption: "塭仔圳溼地公園",
  },
  {
    img: new URL("../section/s3/a3.webp", import.meta.url).href,
    caption: "中港綠堤",
  },
  {
    img: new URL("../section/s3/a4.webp", import.meta.url).href,
    caption: "昌平公園",
  },
  {
    img: new URL("../section/s3/a5.webp", import.meta.url).href,
    caption: "願景公園",
  },
]
const imgsB = [
  {
    img: new URL("../section/s3/b1.webp", import.meta.url).href,
    caption: "iTower新莊創新園區",
  },
  {
    img: new URL("../section/s3/b2.webp", import.meta.url).href,
    caption: "宏匯廣場",
  },
]
</script>
