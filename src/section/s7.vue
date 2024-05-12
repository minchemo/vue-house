<template>
  <article class="s7">
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
          autoplay: false,
          pagination: false,
          drag: false,
          interval: 4000,
          gap: 10,
          type: 'loop',
          arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
          :style="{ 'background-image': `url(${i.img})` }"
        >
        </SplideSlide>
      </Splide>
      <div class="t">
        <div class="t1" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0">
          藝術格律美學<br />綻放當代人文品味
        </div>
        <div class="t1" v-else data-aos="fade-up" data-aos-delay="0">藝術格律美學 綻放當代人文品味</div>
        <div class="t2" v-if="!isMobile" data-aos="fade-up" data-aos-delay="200">
          內斂亦富有質感，簡約的幾何線條，<br />
          大方表現建築的俐落<br />
          每一個細節，都是最高品味！<br />
          單純戶數輕奢感受<br />
          <span>２-３房</span>
          創造寬適且彈性有餘的生活時尚！
        </div>
        <div class="t2" v-else data-aos="fade-up" data-aos-delay="200">
          內斂亦富有質感，簡約的幾何線條，大方表現建築的俐落每一個細節，都是最高品味！<br>單純戶數輕奢感受
          <span>２-３房</span>
          創造寬適且彈性有餘的生活時尚！
        </div>
      </div>
    </div>
    <img
      class="en"
      src="@/section/s7/en.png"
      alt=""
      srcset=""
      v-if="!isMobile"
      data-aos="fade-up" data-aos-delay="0"
    />
    <img class="en" src="@/section/s7/enm.png" alt="" srcset="" v-else data-aos="fade-up" data-aos-delay="0" />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  @apply w-full relative bg-[#0D5052] flex text-white;
  height: size(1205);
  padding-top: size(229);
  padding-left: size(168);

  .slide-box {
    @apply flex flex-row-reverse items-start;
    gap: size(151);
    .slide {
      width: size(903);
      height: size(906);
      .slide-item {
        width: size(903);
        height: size(906);
        background: #eee;
        background-size: cover;
        .caption {
          @apply absolute font-['Noto_Sanc_TC'];
          right: size(14);
          bottom: size(15);
          font-size: size(20);
          font-weight: 400;
          letter-spacing: size(2.6);
        }
      }
      .splide__pagination {
        @apply absolute right-0 w-full flex justify-end;
        padding: size(25) 0;
        li {
          line-height: 0;
          button {
            @apply rounded-full;
            width: size(10);
            height: size(10);
            background: #0d6b68;
            &.is-active {
              background: #138784;
            }
          }
        }
        gap: size(13);
      }
    }
    .t {
      width: size(623);
      padding-top: size(95);
      .t1 {
        @apply text-center;
        color: #e89213;
        font-size: size(51);
        font-weight: 700;
        line-height: 126.7%;
        letter-spacing: size(4.08);
        margin-bottom: size(100);
        padding-bottom: size(35);
        border-bottom: size(1) solid #fff;
      }
      .t2 {
        @apply text-center;
        font-size: size(32);
        font-weight: 700;
        line-height: 157.9%;
        letter-spacing: size(6.4);
        span {
          @apply block;
          margin-top: size(40);
          margin-bottom: size(5);
          font-size: size(52);
          font-weight: 700;
          letter-spacing: size(10.4);
        }
      }
    }
  }

  .en {
    @apply absolute;
    height: size(151.67);
    top: size(23);
    left: size(4);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s7 {
    height: sizem(667);
    padding-top: sizem(97);
    padding-left: 0;

    .slide-box {
      @apply flex flex-col items-start;
      gap: sizem(27);
      .arrows {
        @apply absolute z-20 w-full flex justify-between;
        top: sizem(260);
        padding: 0 sizem(5);

        .arrow {
          @apply cursor-pointer;
          width: sizem(12.8);
          height: sizem(22.86);
          &.prev {
            transform: scaleX(-1);
          }
        }
      }
      .slide {
        width: sizem(375);
        height: sizem(331);
        .slide-item {
          width: sizem(375);
          height: sizem(331);
          .caption {
            right: sizem(11);
            bottom: sizem(7);
            font-size: sizem(12);
            font-weight: 400;
            letter-spacing: sizem(1.5);
          }
        }
        .splide__pagination {
          @apply absolute right-0 w-full flex justify-end;
          padding: size(25) 0;
          li {
            line-height: 0;
            button {
              @apply rounded-full;
              width: size(10);
              height: size(10);
              background: #0d6b68;
              &.is-active {
                background: #138784;
              }
            }
          }
          gap: size(13);
        }
      }
      .t {
        width: 100%;
        padding: 0 sizem(30);
        .t1 {
          font-size: sizem(20);
          font-weight: 700;
          line-height: 126.7%;
          letter-spacing: sizem(1.6);
          margin-bottom: sizem(14);
          padding-bottom: sizem(14);
          border-bottom: 1px solid #fff;
        }
        .t2 {
          @apply text-left;
          font-size: sizem(13);
          font-weight: 700;
          line-height: 157.9%;
          letter-spacing: sizem(2.6);
          span {
            @apply block;
            margin-top: sizem(9);
            margin-bottom: sizem(9);
            font-size: sizem(20);
            font-weight: 700;
            letter-spacing: sizem(2.6);
          }
        }
      }
    }

    .en {
      @apply absolute;
      height: sizem(48.95);
      top: sizem(26);
      left: 0;
    }
  }
}
</style>

<script setup>
import View from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const splide = ref()

const imgs = [
  {
    img:  new URL("../section/s7/1.jpg", import.meta.url).href,
    caption: "成州市場",
  },
]
</script>
