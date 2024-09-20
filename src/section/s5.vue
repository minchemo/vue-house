<template>
  <article class="s5">
    <div class="grids" v-if="!isMobile">
      <div class="item">
        <img src="@/section/s5/1.jpg" alt="" srcset="" />
        <div class="caption">夏恩國際幼兒園</div>
      </div>
      <div class="item">
        <img src="@/section/s5/2.jpg" alt="" srcset="" />
        <div class="caption">師範大學</div>
      </div>
      <div class="item">
        <img src="@/section/s5/3.jpg" alt="" srcset="" />
        <div class="caption">康橋國際學校林口校區</div>
      </div>
      <div class="item">
        <img src="@/section/s5/4.jpg" alt="" srcset="" />
        <div class="caption">新北市馬禮遜美國學校</div>
      </div>
    </div>
    <div class="info">
      <div class="t">
        <div class="t1"  data-aos="fade-up" data-aos-delay="0">
          國際之旭<br />
          常春藤蔓茁壯生根
        </div>
        <div class="t2"  data-aos="fade-up" data-aos-delay="200">
          康橋國際學校、馬禮遜美國學校、AAIA新北<br v-if="!isMobile" />
          美國學校離家近，盼望孩子在雙語菁英交流的<br v-if="!isMobile" />
          殿堂，培育出海納百川的胸襟，未來走進世界<br v-if="!isMobile" />
          舞台時，舉手投足也會洋溢優雅自信。
        </div>
      </div>
      <div class="swiper-box">
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
            class="slide-item"
            :key="i"
            v-for="(img, i) in imgs"
            :style="{ 'background-image': `url(${img.imgs})` }"
          >
            <div class="caption">
              {{ img.caption }}
            </div>
          </SplideSlide>
        </Splide>
        <div class="mo-arrow" v-if="isMobile">
          <img
            class="prev"
            @click="splide.go('<')"
            src="@/section/arrow2.png"
            alt=""
            srcset=""
          />
          <img
            class="next"
            @click="splide.go('>')"
            src="@/section/arrow2.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
    <img class="i i1" src="@/section/s5/i1.png" alt="" srcset="" />
    <img class="i i2" src="@/section/s5/i2.png" alt="" srcset="" />
    <img class="i i3" v-if="!isMobile" src="@/section/s5/i3.png" alt="" srcset="" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.s5 {
  @apply w-full relative bg-[#fff] font-['Noto_Serif_TC'];
  @apply flex justify-center items-end;
  height: size(1080);
  gap: size(12);
  padding-bottom: size(134);
  .grids {
    width: size(973);
    @apply grid grid-cols-2;
    gap: size(12);
    .item {
      @apply relative;
      width: size(480);
      height: size(365);
      img {
        @apply w-full h-full object-cover;
      }
      .caption {
        @apply absolute z-10;
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: size(15);
        font-weight: 400;
        left: size(20);
        bottom: size(10);
      }
    }
  }
  .info {
    width: size(479);
    .t {
      padding-left: size(58);
      padding-bottom: size(45);
      .t1 {
        color: #8fc31f;
        font-size: size(36);
        font-weight: 600;
        margin-bottom: size(35);
      }
      .t2 {
        font-size: size(16);
        font-weight: 400;
      }
    }
    .swiper-box {
      width: size(479);
      height: size(365);
      @apply relative;
      .slide-item {
        @apply relative bg-cover h-full;
        width: size(479);
        height: size(365);
        margin-right: size(5);
        .caption {
          @apply absolute z-10;
          color: #fff;
          font-family: "Noto Sans TC";
          font-size: size(15);
          font-weight: 400;
          left: size(20);
          bottom: size(10);
        }
      }
    }
  }
  .i {
    @apply absolute;
    @apply pointer-events-none;
    &.i1 {
      width: size(149);
      top: size(134);
      left: size(1259);
    }
    &.i2 {
      width: size(402.6);
      top: size(62);
      left: size(1436.4);
    }
    &.i3 {
      width: size(186);
      top: size(395);
      left: size(1629);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {
    @apply w-full relative bg-[#fff] font-['Noto_Serif_TC'];
    @apply flex justify-center items-start;
    height: sizem(567);
    gap: 0;
    padding-bottom: 0;
    padding-top: sizem(86);
    .info {
      width: 100%;
      .t {
        padding: 0 sizem(30);
        padding-bottom: size(45);
        .t1 {
          color: #8fc31f;
          font-size: sizem(25);
          font-weight: 600;
          margin-bottom: sizem(24);
        }
        .t2 {
          font-size: sizem(13);
          font-weight: 400;
        }
      }
      .swiper-box {
        width: sizem(315);
        height: sizem(239.53);
        left: sizem(30);
        margin-top: sizem(24);
        @apply relative;
        .slide-item {
          @apply relative bg-cover h-full;
          width: sizem(315);
          height: sizem(239.53);
          margin-right: sizem(5);
          .caption {
            @apply absolute z-10;
            color: #fff;
            font-family: "Noto Sans TC";
            font-size: sizem(12);
            font-weight: 400;
            left: sizem(10);
            bottom: sizem(10);
          }
        }
      }
    }
    .i {
      @apply absolute;
      @apply pointer-events-none;
      &.i1 {
        width: sizem(63);
        top: sizem(112);
        left: sizem(236);
      }
      &.i2 {
        width: sizem(162);
        top: sizem(20.9);
        left: sizem(206);
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const activeIdx = ref(0)
const onMove = (val, val2) => {
  activeIdx.value = val2
}

const selectImgs = (imgs) => {
  activeImgs.value = imgs
  splide.value.go(1)
}

const imgs = [
  {
    imgs: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "夏恩國際幼兒園",
  },
  {
    imgs: new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: "師範大學",
  },
  {
    imgs: new URL("../section/s5/3.jpg", import.meta.url).href,
    caption: "康橋國際學校林口校區",
  },
  {
    imgs: new URL("../section/s5/4.jpg", import.meta.url).href,
    caption: "新北市馬禮遜美國學校",
  },
  {
    imgs: new URL("../section/s5/5.jpg", import.meta.url).href,
    caption: "AAIA 新北美國學校",
  },
]
</script>
