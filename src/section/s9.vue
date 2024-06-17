<template>
  <article class="s9">
    <div class="slide-box">
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
      <div class="t">
        <div class="t1">
          <img src="@/section/resource/s8title.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0" />
          <p data-aos="fade-up" data-aos-delay="200">廚具衛浴<br />質感全面進化</p>
        </div>
        <div class="desc" data-aos="fade-up" data-aos-delay="400">
          廚具嚴選德國IMPULS進口廚具，衛浴指定德國INNOCI馬桶及衛浴五金配件、美國KOHLER<br />
          暖風機，全室更採用德國KRONOTEX木地板，以精品工藝，開啟高質感的每一天。
        </div>
      </div>
    </div>
    <img class="style" src="@/section/resource/style4.svg" alt="" srcset="" />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  @apply w-full relative z-20;
  @apply flex justify-center items-start;
  height: size(1080);
  background: url("@/section/s9/bg.jpg");
  background-size: cover;
  padding-top: size(102);

  .slide-box {
    @apply flex flex-col-reverse items-center relative z-10;
    gap: size(65);
    .slide {
      @apply relative;
      width: size(1295.43);
      height: size(606);
      .slide-item {
        @apply relative;
        width: size(1295.43);
        height: size(606);
        background-size: cover;
        transform-style: preserve-3d;
        .caption {
          @apply absolute text-white;
          left: size(14);
          bottom: size(10);
          font-size: size(20);
          font-weight: 400;
          letter-spacing: size(2.6);
        }
      }
      .splide__pagination {
        @apply absolute right-0 w-full flex justify-center;
        padding: size(27) 0;
        li {
          line-height: 0;
          button {
            @apply rounded-full bg-transparent;
            width: size(17.3);
            height: size(17.3);
            border: 1px solid #727171;
            &.is-active {
              background: #727171;
            }
          }
        }
        gap: size(13);
      }
    }
    .t {
      @apply flex text-black;
      gap: size(68);
      .t1 {
        @apply flex items-center;
        gap: size(55);
        margin-bottom: size(15);
        img {
          width: size(365.3);
        }
        p {
          @apply relative;
          font-size: size(32);
          font-weight: 500;
          letter-spacing: size(1.92);
          border-right: 1px solid;
          padding-right: size(40);
          &::after {
            @apply absolute aspect-square;
            content: "";
            width: size(20);
            background: url("@/section/resource/s.svg");
            background-size: cover;
            left: 60%;
            top: 18%;
          }
        }
      }
      .desc {
        font-size: size(24);
        font-weight: 500;
        line-height: size(39);
        letter-spacing: size(0.72);
      }
    }
  }
  .style {
    @apply w-full absolute z-20 pointer-events-none;
    top: size(620);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s9 {
    @apply w-full relative z-20;
    @apply flex justify-center;
    height: sizem(693);
    background: url("@/section/s9/bgm.jpg");
    background-size: cover;
    padding-top: sizem(56);

    .slide-box {
      @apply flex-col-reverse items-center justify-end;
      gap: sizem(24);
      .slide {
        width: sizem(335);
        height: sizem(359.26);
        .slide-item {
          width: sizem(335);
          height: sizem(359.26);
          .caption {
            @apply absolute text-white;
            left: sizem(8);
            bottom: sizem(6);
            font-size: sizem(12);
            letter-spacing: sizem(0.72);
          }
        }
        .splide__pagination {
          @apply hidden;
        }
        &::after {
          @apply hidden;
        }
      }
      .t {
        @apply flex flex-col text-black;
        gap: sizem(24);
        width: sizem(310);
        .t1 {
          @apply flex items-end justify-between;
          margin-bottom: sizem(5);
          border-bottom: 1px solid;
          padding-bottom: sizem(29);
          img {
            width: sizem(134);
          }
          p {
            font-size: sizem(14);
            letter-spacing: sizem(0.42);
            border-right: 0;
            &::after {
              @apply absolute aspect-square;
              content: "";
              width: size(20);
              background: url("@/section/resource/s.svg");
              background-size: cover;
              left: 60%;
              top: 18%;
            }
          }
        }
        .desc {
          font-size: sizem(14);
          line-height: 170%;
          letter-spacing: sizem(0.42);
        }
      }
      .arrows {
        @apply absolute flex justify-between;
        width: 98vw;
        bottom: sizem(150);
        .prev {
          @apply -scale-x-100;
        }
      }
    }

    .style {
      @apply absolute;
      top: sizem(420);
      width: 150vw;
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

const imgs = [
  {
    img: globals.$isMobile()
      ? new URL("../section/s9/1m.jpg", import.meta.url).href
      : new URL("../section/s9/1.jpg", import.meta.url).href,
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s9/2m.jpg", import.meta.url).href
      : new URL("../section/s9/2.jpg", import.meta.url).href,
  },
]
</script>
