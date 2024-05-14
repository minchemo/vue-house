<template>
  <article class="s8">
    <div class="slide-box-i">
      <Splide
        ref="splide2"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: true,
          interval: 4000,
          gap: 20,
          type: 'loop',
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs2"
          :style="{ 'background-image': `url(${i.img})` }"
        >
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
      <div class="arrows" v-if="isMobile">
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
    </div>

    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        茂德建設品牌 職人工藝再現經典
      </div>
      <div class="t2" v-if="!isMobile" data-aos="fade-up" data-aos-delay="200">
        家，是永恆幸福的承諾。<br />
        因為有承諾，所以更堅持以職人工藝，一磚一瓦細心雕琢，<br />
        手感打造家的溫暖美學。為每個愛家的人，獻上一生的信念！
      </div>
      <div class="t2" v-else data-aos="fade-up" data-aos-delay="200">
        家，是永恆幸福的承諾。<br />
        因為有承諾，所以更堅持以職人工藝，一磚一瓦細心雕琢，手感打造家的溫暖美學。為每個愛家的人，獻上一生的信念！
      </div>
    </div>
    <div class="en2">
      <div class="en2-t" data-aos="fade-up" data-aos-delay="0">
        工藝品味之選 輕奢訂製享受生活
      </div>
      <img
        class="en2-i"
        data-aos="fade-up"
        data-aos-delay="200"
        src="@/section/s8/en2.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="slide-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: true,
          interval: 4000,
          gap: 20,
          type: 'loop',
          drag: 'free',
          snap: true,
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
      class="en"
      src="@/section/s8/en.svg"
      alt=""
      srcset=""
      v-if="!isMobile"
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <img
      class="en"
      src="@/section/s8/enm.svg"
      alt=""
      srcset=""
      v-else
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <div class="c" data-aos="fade" data-aos-delay="600"></div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  @apply w-full relative bg-[#0D5052] flex flex-col items-center text-white;
  height: size(2162);
  padding-top: size(224);

  .slide-box-i {
    @apply relative w-full;
    height: size(538);
    margin-bottom: size(20);
    .slide-item {
      @apply w-full;
      height: size(538);
      background-size: cover;
      .caption {
        @apply absolute font-['Noto_Sanc_TC'];
        right: size(49);
        bottom: size(20);
        color: #fff;
        font-size: size(20);
        font-weight: 400;
        letter-spacing: size(2.6);
      }
    }
    .splide__pagination {
      @apply absolute right-0 w-full flex justify-center;
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
    @apply w-full;
    .t1 {
      @apply text-center;
      color: #e89213;
      font-size: size(51);
      font-weight: 700;
      line-height: 126.7%;
      letter-spacing: size(4.08);
      margin: size(43) 0;
    }
    .t2 {
      @apply text-center;
      font-size: size(24);
      font-weight: 700;
      line-height: 157.9%;
      letter-spacing: size(4.8);
    }
  }

  .en2 {
    @apply relative w-full flex items-center justify-center z-10;
    gap: size(182);
    margin-top: size(151);
    margin-bottom: size(62);
    .en2-t {
      color: #e89213;
      font-size: size(51);
      font-weight: 700;
      line-height: 126.7%;
      letter-spacing: size(4.08);
    }
    .en2-i {
      width: size(795);
    }
  }

  .slide {
    width: size(1009);
    height: size(682.74);
    .slide-item {
      width: size(1009);
      height: size(682.74);
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
      @apply absolute right-0 w-full flex justify-center;
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

  .en {
    @apply absolute;
    height: size(146.5);
    top: size(23);
    left: size(4);
  }

  .c {
    @apply rounded-full absolute z-0 select-none;
    width: size(91);
    height: size(91);
    top: size(1168);
    left: size(809);
    border: 1px solid #fff;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s8 {
    height: sizem(1334);
    padding-top: sizem(97);

    .c {
      display: none;
    }

    .slide-box-i {
      height: sizem(331);
      margin-bottom: 0;
      .slide-item {
        height: sizem(331);
        .caption {
          right: sizem(11);
          bottom: sizem(7);
          font-size: sizem(12);
          font-weight: 400;
          letter-spacing: sizem(1.56);
        }
      }
      .splide__pagination {
        @apply hidden;
      }
      .arrows {
        @apply top-1/2 -translate-y-1/2;
      }
    }

    .t {
      padding: 0 sizem(30);
      .t1 {
        font-size: sizem(20);
        letter-spacing: sizem(1.6);
        margin-top: sizem(27);
        margin-bottom: sizem(14);
        padding-bottom: sizem(14);
        border-bottom: 1px solid #fff;
      }
      .t2 {
        font-size: sizem(13);
        letter-spacing: sizem(2.6);
      }
    }

    .en2 {
      @apply flex-col-reverse;
      gap: sizem(9);
      margin-top: sizem(100);
      margin-bottom: sizem(40);
      .en2-t {
        font-size: sizem(20);
        font-weight: 700;
        line-height: 126.7%;
        letter-spacing: sizem(1.6);
      }
      .en2-i {
        width: sizem(301);
      }
    }

    .slide {
      width: sizem(270);
      height: sizem(417.59);
      .slide-item {
        width: sizem(270);
        height: sizem(417.59);
      }
      .splide__pagination {
        @apply hidden;
      }
    }

    .arrows {
      @apply absolute z-20 w-full flex justify-between;
      bottom: sizem(300);
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
    .en {
      @apply absolute;
      height: sizem(58.95);
      top: sizem(16);
      left: 0;
    }

    .c {
      @apply rounded-full absolute z-10 select-none;
      width: size(91);
      height: size(91);
      top: size(1168);
      left: size(809);
      border: 1px solid #fff;
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
const splide2 = ref()

const imgs = [
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/1m.webp", import.meta.url).href
      : new URL("../section/s8/1.webp", import.meta.url).href,
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/2m.webp", import.meta.url).href
      : new URL("../section/s8/2.webp", import.meta.url).href,
  },
]

const imgs2 = [
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/slider/01m.webp", import.meta.url).href
      : new URL("../section/s8/slider/01.webp", import.meta.url).href,
    caption: "",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/slider/02m.webp", import.meta.url).href
      : new URL("../section/s8/slider/02.webp", import.meta.url).href,
    caption: "",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/slider/03m.webp", import.meta.url).href
      : new URL("../section/s8/slider/01.webp", import.meta.url).href,
    caption: "",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/slider/04m.webp", import.meta.url).href
      : new URL("../section/s8/slider/02.webp", import.meta.url).href,
    caption: "",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/slider/05m.webp", import.meta.url).href
      : new URL("../section/s8/slider/01.webp", import.meta.url).href,
    caption: "",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/slider/06m.webp", import.meta.url).href
      : new URL("../section/s8/slider/02.webp", import.meta.url).href,
    caption: "",
  },
]
</script>
