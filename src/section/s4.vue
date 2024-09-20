<template>
  <article class="s4">
    <div class="t">
      <div class="t1"  data-aos="fade-up" data-aos-delay="0">
        浮嵐暖翠<br />
        尋野奢之徑敞開身心
      </div>
      <div class="t2"  data-aos="fade-up" data-aos-delay="200">
        棲居林口最詩意的綠墅，新寮和老公崎步道剛好離家很近，森色的旋律一路吟唱，感知特別敏銳，每一抹色調都饒富層次，桐花、熱帶蕨、溪流與蟬響…一呼一吸之間，貼合大地脈輪，覓得忘卻時間之酣暢。
      </div>
      <div class="timeline">
        <div
          class="item"
          v-for="(item, i) in imgsLabel"
          :key="item"
          :class="{ active: activeImgs === i }"
          @click="selectImgs(i)"
        >
          {{ item }}
        </div>
        <img v-if="!isMobile" src="@/section/s4/i1.png" alt="" srcset="" />
      </div>
      <div class="timeline-mask"></div>
      <img class="tree" src="@/section/s4/i2.png" alt="" srcset="" />
      <img
        v-if="isMobile"
        class="timeline-img"
        src="@/section/s4/i1.png"
        alt=""
        srcset=""
      />
    </div>
    <div class="swiper-box">
      <Splide
        ref="splide"
        class="slide"
        :key="activeImgs"
        :options="{
          arrows: false,
          autoplay: true,
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
          v-for="(img, i) in imgs[activeImgs].imgs"
          :style="{ 'background-image': `url(${img})` }"
        >
          <div class="caption">
            {{ imgs[activeImgs].caption[i] }}
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
      <div class="arrow" v-else>
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
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.s4 {
  @apply w-full relative bg-[#fff] font-['Noto_Serif_TC'];
  @apply flex justify-end;
  height: size(1080);
  gap: size(57);

  .t {
    width: size(324);
    padding-top: size(217);
    .t1 {
      color: #8fc31f;
      font-size: size(36);
      font-weight: 600;
      margin-bottom: size(33);
    }
    .t2 {
      color: #000;
      font-size: size(16);
      font-weight: 400;
    }
    .timeline {
      @apply font-['noto_sans_tc'] relative;
      margin-top: size(90);
      .item {
        @apply transition-all relative text-right cursor-pointer;
        @apply hover:font-bold;
        color: #8fc31f;
        font-size: size(18);
        font-weight: 400;
        padding-right: size(39);
        margin-bottom: size(31);
        &.active {
          font-size: size(20);
          font-weight: 700;
          &:after {
            opacity: 100%;
          }
        }
        &:after {
          @apply absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[#8FC31F] transition-all;
          content: "";
          width: size(25);
          height: size(25);
          opacity: 0;
        }
      }
      img {
        @apply absolute z-10;
        right: -#{size(10)};
        width: size(171);
      }
      &:after {
        @apply absolute bg-[#8FC31F];
        content: "";
        height: size(410);
        width: 1px;
        right: size(12.5);
        top: -#{size(50)};
      }
    }
    .tree {
      @apply absolute;
      width: size(296);
      left: size(33);
      bottom: size(135);
      animation: a2 3s ease-in-out infinite alternate-reverse;
      transform-origin: bottom center;

      @keyframes a2 {
        from {
          transform: skewX(-1deg);
        }
        to {
          transform: skewX(6deg);
        }
      }
    }
  }

  .swiper-box {
    width: size(1320);
    height: size(1080);
    @apply relative;
    .slide-item {
      @apply relative bg-cover h-full;
      width: size(1320);
      height: size(1080);
      margin-right: size(5);
      .caption {
        @apply absolute;
        right: size(20);
        bottom: size(20);
        color: #fff;
        font-family: "Noto Sans TC";
        font-size: size(15);
        font-weight: 400;
      }
    }
    .arrow {
      @apply absolute z-20 w-full top-1/2 -translate-y-1/2;
      @apply flex justify-between;
      @apply pointer-events-none;
      padding: 0 size(43);

      img {
        @apply pointer-events-auto;
        @apply cursor-pointer;
        width: size(45);
        &:last-child {
          transform: scaleX(-1);
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
  .s4 {
    @apply w-full relative bg-[#fff] font-['Noto_Serif_TC'];
    @apply flex flex-col items-center justify-start;
    height: sizem(667);
    gap: sizem(10);
    padding-top: sizem(46);

    .t {
      @apply relative;
      width: 100%;
      padding-top: 0;
      .t1 {
        font-size: sizem(25);
        margin-bottom: sizem(24);
        padding: 0 sizem(30);
      }
      .t2 {
        color: #000;
        font-size: sizem(13);
        font-weight: 400;
        padding: 0 sizem(30);
      }
      .timeline {
        @apply flex relative;
        @apply overflow-x-scroll;
        margin-top: sizem(85);
        padding-left: sizem(145);
        .item {
          @apply transition-all relative text-right cursor-pointer;
          @apply hover:font-bold whitespace-nowrap;
          color: #8fc31f;
          font-size: sizem(15);
          font-weight: 400;
          padding-right: 0;
          margin-bottom: sizem(31);
          margin-right: sizem(106);
          &.active {
            font-size: sizem(15);
            font-weight: 700;
            &:after {
              opacity: 100%;
            }
          }
          &:after {
            @apply absolute left-0 right-[unset] top-[unset] -translate-y-0 rounded-full bg-[#8FC31F] transition-all;
            content: "";
            width: sizem(13);
            height: sizem(13);
            opacity: 100%;
            bottom: -#{sizem(18)};
          }
        }
        &:after {
          @apply absolute bg-[#8FC31F];
          content: "";
          height: 1px;
          width: 300%;
          left: 0;
          top: unset;
          bottom: sizem(20);
        }
      }

      .timeline-img {
        @apply absolute z-10 pointer-events-none;
        left: sizem(11);
        width: sizem(112);
        bottom: sizem(12);
      }
      .timeline-mask {
        @apply w-[40%] pointer-events-none;
        @apply absolute right-0 bottom-0;
        height: sizem(80);
        background: linear-gradient(
          270deg,
          #fff 0%,
          rgba(255, 255, 255, 0) 50%
        );
      }
      .tree {
        @apply absolute;
        width: sizem(95);
        left: sizem(268);
        bottom: unset;
        top: -#{sizem(35)};
        animation: a2 3s ease-in-out infinite alternate-reverse;
        transform-origin: bottom center;

        @keyframes a2 {
          from {
            transform: skewX(-1deg);
          }
          to {
            transform: skewX(6deg);
          }
        }
      }
    }

    .swiper-box {
      width: sizem(375);
      height: sizem(306.82);
      @apply relative;
      .slide-item {
        @apply relative bg-cover h-full;
        width: sizem(375);
        height: sizem(306.82);
        margin-right: sizem(5);
        .caption {
          @apply absolute;
          right: sizem(15);
          bottom: sizem(20);
          font-size: sizem(12);
          font-weight: 400;
        }
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

const activeImgs = ref(0)
const imgsLabel = [
  "足夢運動公園",
  "林口仁愛公園",
  "林口社區運動公園",
  "老公崎步道",
  "新林步道",
]
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
    imgs: [
      new URL("../section/s4/a1.jpg", import.meta.url).href,
      new URL("../section/s4/a2.jpg", import.meta.url).href,
      new URL("../section/s4/a3.jpg", import.meta.url).href,
    ],
    caption: ["足夢運動公園", "足夢運動公園", "足夢運動公園"],
  },
  {
    imgs: [
      new URL("../section/s4/b1.jpg", import.meta.url).href,
      new URL("../section/s4/b2.jpg", import.meta.url).href,
    ],
    caption: ["林口仁愛公園", "林口仁愛公園"],
  },
  {
    imgs: [
      new URL("../section/s4/c1.jpg", import.meta.url).href,
      new URL("../section/s4/c2.jpg", import.meta.url).href,
    ],
    caption: ["林口社區運動公園", "林口社區運動公園"],
  },
  {
    imgs: [
      new URL("../section/s4/d1.jpg", import.meta.url).href,
      new URL("../section/s4/d2.jpg", import.meta.url).href,
    ],
    caption: ["老公崎步道", "老公崎步道"],
  },
  {
    imgs: [new URL("../section/s4/e1.jpg", import.meta.url).href],
    caption: ["新林步道"],
  },
]
</script>
