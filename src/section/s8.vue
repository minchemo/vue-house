<template>
  <article class="s8">
    <div class="t">
      <div
        class="t1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        長住而安 磯石永立
      </div>
      <div
        class="t2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        長磯機構深耕台南三十年，冀望居住者可以長遠並安心居住，如同磯石不朽般矗立在土地上。繼經典別墅-長磯藏筑、市心大深院-那藏、輕豪宅透天-一品苑系列後暖心力作，為您獻上最高質感尊榮作品-藏筑2，盡享北區核心地段從容生活。
      </div>
    </div>
    <div class="timeline">
      <div
        class="item"
        v-for="(item, i) in timeline"
        :key="item"
        :class="{ active: item.id == currentDot }"
        @click="onTimelineClick(item.id)"
      >
        <div class="subtitle">{{ item.subtitle }}</div>
        <div
          class="title"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="200 * i"
        >
          {{ item.title }}
        </div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="splide-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          autoWidth: false,
          arrows: false,
          autoplay: false,
          pagination: true,
          gap: 20,
          type: 'loop',
          perPage: 1,
        }"
        @splide:move="move"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="(img, i) in imgs"
          :style="{ 'background-image': `url(${img.img})` }"
        >
          <div class="caption">
            {{ img.caption }}
          </div>
        </SplideSlide>
      </Splide>
      <div class="arrows" v-if="isMobile">
        <img
          @click="splide.go('<')"
          src="@/section/arrowg.png"
          class="arrow prev"
          alt=""
          srcset=""
        />
        <img
          @click="splide.go('>')"
          src="@/section/arrowg.png"
          class="arrow next"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s8 {
  @apply relative w-full;
  @apply flex flex-col items-center justify-center;
  @apply bg-white;
  height: size(1530);

  .t {
    @apply text-center flex flex-col items-center justify-center;
    .t1 {
      color: #103438;
      font-size: size(50);
      font-weight: 700;
    }
    .t2 {
      color: #595757;
      font-family: "Noto Sans TC";
      font-size: size(20);
      font-weight: 500;
      line-height: 200%;
      letter-spacing: size(1.8);
      width: size(800);
      margin-top: size(46);
    }
  }

  .timeline {
    @apply flex relative;
    margin-top: size(80);
    gap: size(200);
    .item {
      @apply flex flex-col text-center items-center justify-center;
      @apply cursor-pointer;
      font-family: "Noto Sans TC";
      .subtitle {
        color: #000;
        font-size: size(18);
        font-weight: 500;
        line-height: 200%;
        letter-spacing: size(1.62);
      }
      .title {
        color: #20575a;
        font-size: size(26);
        font-weight: 700;
        line-height: 170%;
        letter-spacing: size(2.34);
        margin-top: -#{size(8)};
      }
      .dot {
        @apply aspect-square rounded-full;
        @apply bg-white relative z-10;
        width: size(21);
        border: 2px solid #20575a;
        margin-top: size(14);
      }
      &.active {
        .dot {
          @apply bg-[#20575a];
        }
      }
      &:hover {
        .dot {
          @apply bg-[#20575a];
        }
      }
    }

    &::after {
      @apply h-[1px] bg-[#20575a];
      @apply absolute;
      @apply left-1/2 -translate-x-1/2;
      bottom: size(10);
      width: size(590);
      content: "";
    }
  }

  .splide-box {
    margin-top: size(38.24);
    .splide {
      @apply overflow-hidden;
      width: size(1110);
      height: size(910);
      border-radius: size(35);
      .slide-item {
        @apply relative bg-cover;
        @apply aspect-[1110/910];
        width: size(1110);
        .caption {
          @apply absolute text-white;
          font-family: "Noto Sans TC";
          font-size: size(21);
          font-weight: 700;
          line-height: 170%;
          letter-spacing: size(1.89);
          left: size(50);
          bottom: size(38);
          filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
        }
      }
    }
    ::v-deep(.splide__pagination) {
      @apply absolute;
      gap: size(9.5);
      right: size(50);
      bottom: size(38);

      button {
        @apply rounded-full;
        width: size(14);
        height: size(14);
        border: 1px solid #fff;

        &.is-active {
          @apply bg-white;
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
  .s8 {
    @apply relative w-full;
    @apply flex flex-col items-center justify-start;
    @apply bg-white;
    height: sizem(670);
    padding-top: sizem(70);

    .t {
      @apply text-center flex flex-col items-center justify-center;
      .t1 {
        color: #103438;
        font-size: sizem(29);
        font-weight: 700;
      }
      .t2 {
        color: #595757;
        font-family: "Noto Sans TC";
        font-size: sizem(13);
        font-weight: 500;
        line-height: 170%;
        letter-spacing: sizem(1.17);
        width: sizem(310);
        margin-top: sizem(9);
      }
    }

    .timeline {
      @apply flex relative;
      margin-top: sizem(67);
      gap: sizem(46);
      .item {
        @apply flex flex-col text-center items-center justify-center;
        @apply cursor-pointer;
        font-family: "Noto Sans TC";
        .subtitle {
          color: #000;
          font-size: sizem(12);
          font-weight: 500;
          line-height: 200%;
          letter-spacing: sizem(1.08);
        }
        .title {
          color: #20575a;
          font-size: sizem(16);
          font-weight: 700;
          line-height: 170%;
          letter-spacing: sizem(1.44);
          margin-top: -#{sizem(8)};
        }
        .dot {
          @apply aspect-square rounded-full;
          @apply bg-white relative z-10;
          width: sizem(11);
          border: 2px solid #20575a;
          margin-top: sizem(6.55);
        }
        &.active {
          .dot {
            @apply bg-[#20575a];
          }
        }
        &:hover {
          .dot {
            @apply bg-[#20575a];
          }
        }
      }

      &::after {
        @apply h-[1px] bg-[#20575a];
        @apply absolute;
        @apply left-1/2 -translate-x-1/2;
        bottom: sizem(5);
        width: sizem(220);
        content: "";
      }
    }

    .splide-box {
      @apply relative;
      margin-top: sizem(35);
      .splide {
        @apply overflow-hidden;
        width: sizem(290);
        height: sizem(240);
        border-radius: sizem(25);
        .slide-item {
          @apply relative bg-cover;
          @apply aspect-[1110/910];
          width: sizem(290);
          border-radius: sizem(25);
          .caption {
            @apply absolute text-white;
            font-family: "Noto Sans TC";
            font-size: sizem(12);
            font-weight: 700;
            line-height: 170%;
            letter-spacing: sizem(1.09);
            left: sizem(17.5);
            bottom: sizem(9);
            filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
          }
        }
      }
      ::v-deep(.splide__pagination) {
        @apply hidden;
      }
      .arrows {
        @apply absolute top-1/2 -translate-y-1/2;
        @apply left-1/2 -translate-x-1/2;
        @apply w-screen pointer-events-none;
        @apply flex items-center justify-between;
        padding: 0 sizem(16);

        img {
          @apply pointer-events-auto;
          width: sizem(13);

          &.prev {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const move = (_, idx) => {
  const slideItem = imgs[idx]
  currentDot.value = slideItem.dot
}

const onTimelineClick = (dotId) => {
  currentDot.value = dotId

  switch (dotId) {
    case 1:
      splide.value.go(0)
      break
    case 2:
      splide.value.go(2)
      break
    case 3:
      splide.value.go(3)
      break
  }
}

const splide = ref()
const currentDot = ref(1)
const imgs = [
  {
    img: new URL("../section/s8/1.webp", import.meta.url).href,
    caption: "藏筑2",
    dot: 1,
  },
  {
    img: new URL("../section/s8/2.webp", import.meta.url).href,
    caption: "藏筑",
    dot: 1,
  },
  {
    img: new URL("../section/s8/3.webp", import.meta.url).href,
    caption: "那藏",
    dot: 2,
  },
  {
    img: new URL("../section/s8/4.webp", import.meta.url).href,
    caption: "一品苑3",
    dot: 3,
  },
  {
    img: new URL("../section/s8/5.webp", import.meta.url).href,
    caption: "一品苑2",
    dot: 3,
  },
  {
    img: new URL("../section/s8/6.webp", import.meta.url).href,
    caption: "一品苑1",
    dot: 3,
  },
]
const timeline = [
  {
    id: 1,
    title: "長磯藏筑",
    subtitle: "經典別墅",
  },
  {
    id: 2,
    title: "那藏",
    subtitle: "市心大深院",
  },
  {
    id: 3,
    title: "一品苑",
    subtitle: "輕豪宅透天",
  },
]
</script>
