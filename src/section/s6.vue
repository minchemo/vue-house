<template>
  <article class="s6">
    <div class="slide-box">
      <div class="thum" v-if="isMobile">
        <div
          class="thum-item"
          :class="{ active: i == currentIndex }"
          v-for="(thum, i) in imgs"
          :key="i"
          @click="splide.go(i)"
          v-html="thum.title"
        ></div>
      </div>
      <div class="splide-box">
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
        <div class="arrows">
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
      </div>
      <div class="t">
        <div class="t1">標題假字</div>
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
            @click="splide.go(i)"
            v-html="thum.title"
          ></div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.splide-box {
  .arrows {
    @apply absolute top-1/2 w-[105%] -left-[2.5%] -translate-y-1/2 flex justify-between;
    .arrow {
      @apply cursor-pointer;
      width: size(53);
      height: size(53);
      &.prev {
        transform: scaleX(-1);
      }
    }
  }
}

.s6 {
  @apply relative w-full z-0 text-white flex flex-col items-center justify-center;
  height: size(919);

  .slide-box {
    @apply flex items-center;
    gap: size(85);

    .splide-box {
      @apply relative;
      .slide {
        @apply relative;
        width: size(1074);
        height: size(667);
        .slide-item {
          width: size(1074);
          height: size(667);
          background: #eee;
          background-size: cover !important;
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
    }
    .t {
      @apply relative h-full flex flex-col justify-center;
      width: size(424);
      .t1 {
        color: #c9a063;
        font-size: size(45);
        font-weight: 700;
        margin-bottom: size(8);
        text-align: center;
      }
      .t2 {
        color: #c9a063;
        font-size: size(16);
        font-weight: 400;
        text-align: justify;
      }
      .thum {
        @apply flex flex-wrap w-full justify-between absolute;
        bottom: 0;
        row-gap: size(30);
        margin-top: size(70);
        .thum-item {
          @apply cursor-pointer text-black;
          span {
            font-size: size(29);
          }
          font-size: size(20);
          border-bottom: size(2) solid #000;
          &.active {
            @apply text-[#C9A063];
            border-bottom: size(2) solid #c9a063;
          }
          &:hover {
            @apply text-[#C9A063];
            border-bottom: size(2) solid #c9a063;
          }
        }
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
  .splide-box {
    .arrows {
      @apply w-[108%] -left-[4%];
      .arrow {
        @apply cursor-pointer;
        width: sizem(30);
        height: sizem(30);
      }
    }
  }

  .s6 {
    @apply relative w-full z-0 text-white flex flex-col items-center justify-center;
    height: sizem(675);

    .slide-box {
      @apply flex flex-col items-center;
      gap: sizem(15);

      .splide-box {
        @apply relative;
        .slide {
          @apply relative;
          width: sizem(340);
          height: sizem(211.5);
          .slide-item {
            width: sizem(340);
            height: sizem(211.5);
            background: #eee;
            .caption {
              left: sizem(12);
              bottom: sizem(10);
              font-size: sizem(12);
            }
          }
        }
      }

      .t {
        @apply relative h-full flex flex-col justify-center;
        width: sizem(320);
        .t1 {
          color: #c9a063;
          font-size: sizem(25);
          margin-bottom: -#{sizem(10)};
        }
        .t2 {
          font-size: sizem(14);
          line-height: 170%;
        }
      }
    }

    .thum {
      @apply flex flex-wrap w-full justify-between;
      bottom: 0;
      row-gap: 0;
      margin-top: 0;
      .thum-item {
        @apply cursor-pointer text-black;
        span {
          font-size: sizem(25);
        }
        font-size: sizem(17);
        border-bottom: sizem(3.5) solid #000;
        &.active {
          @apply text-[#C9A063];
          border-bottom: sizem(3.5) solid #c9a063;
        }
        &:hover {
          @apply text-[#C9A063];
          border-bottom: sizem(3.5) solid #c9a063;
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

const currentIndex = ref(0)

const onMoved = (newIdx, prevIdx, destIdx) => {
  currentIndex.value = prevIdx
}
const splide = ref()

const imgs = [
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "XXXXXXXXXX",
    title: "<span>23</span>坪/二房",
  },
  {
    img: new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: "XXXXXXXXXX",
    title: "<span>33</span>坪/三房",
  },
  {
    img: new URL("../section/s5/3.jpg", import.meta.url).href,
    caption: "XXXXXXXXXX",
    title: "<span>33</span>坪/三房",
  },
]
</script>
