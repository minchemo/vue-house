<template>
  <article class="s3">
    <Splide
      ref="splideRef"
      class="slide"
      @splide:move="onMove"
      :options="{
        autoWidth: true,
        arrows: false,
        autoplay: true,
        pagination: false,
        interval: 4000,
        gap: 0,
        type: 'loop',
      }"
    >
      <SplideSlide class="slide-item" :key="i" v-for="i in imgs">
        <div class="img" :style="{ 'background-image': `url(${i.img})` }"></div>
      </SplideSlide>
    </Splide>
    <div class="t">
      <div  data-aos="fade-up" data-aos-delay="0">
        <div class="t1">今井昌彥 散步 隱富街巷</div>
        <div class="t2">營造顧問，監造十帖刻畫造極</div>
      </div>
      <div>
        <div class="line"></div>
        <template v-if="isMobile">
          <div :key="currentIdx" data-aos="fade">
            <span class="t3">
              {{ imgs[currentIdx].t1 }}<br />
              <span class="t4"> {{ imgs[currentIdx].t2 }} </span
              ><span class="t5"> {{ imgs[currentIdx].t3 }} </span>
            </span>
          </div>
        </template>
        <template v-else>
          <div class="t3" data-aos="fade" :key="currentIdx">
            {{ imgs[currentIdx].t1 }}
          </div>
          <div class="t4" data-aos="fade" :key="currentIdx">
            {{ imgs[currentIdx].t2 }}
          </div>
          <div class="t5" data-aos="fade" :key="currentIdx">
            {{ imgs[currentIdx].t3 }}
          </div>
        </template>
      </div>
      <img
        @click="splideRef.go('>')"
        src="@/section/s3/arrow.svg"
        class="arrow"
        alt=""
        srcset=""
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s3 {
  @apply w-full relative text-[#36677F];
  height: size(1080);
// background-image: url("@/section/s3/bg.jpg");
//  background-size: cover;

  .slide {
    .slide-item {
      .img {
        @apply bg-cover;
        width: size(1920);
        height: size(858);
      }
    }
  }

  .t {
    @apply text-[#36677f] relative;
    @apply flex items-end justify-between;
    padding: 0 size(180);
    margin-top: size(45);

    > div {
      @apply whitespace-nowrap relative;
      &:nth-child(2) {
        @apply flex items-end;
        width: size(1145);
        gap: size(11);
      }
    }

    .t1 {
      font-size: size(52);
      font-weight: 700;
    }
    .t2 {
      @apply relative;
      font-size: size(30);
      font-weight: 700;

      &:before {
        @apply absolute bg-white;
        width: size(140);
        height: 1px;
        content: "";
        right: 0;
        bottom: 5px;
      }
    }

    .line {
      @apply bg-white h-[1px] w-full relative transition-all;
      bottom: 5px;
    }
    .t3 {
      margin-left: size(10);
      font-size: size(30);
      font-weight: 700;
    }
    .t4 {
      font-size: size(23);
      font-weight: 600;
    }
    .t5 {
      font-size: size(16);
      font-weight: 600;
    }
    .arrow {
      @apply absolute cursor-pointer;
      right: size(180);
      top: size(20);
      width: size(48.5);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    @apply w-full relative text-[#36677F];
    height: sizem(654);
  //  background-image: url("@/section/s3/bg.jpg");
    background-size: cover;

    .slide {
      .slide-item {
        .img {
          width: sizem(375);
          height: sizem(404);
        }
      }
    }

    .t {
      @apply flex flex-col items-start justify-between;
      padding: 0 sizem(54);
      margin-top: sizem(22);
      gap: sizem(37);

      > div {
        @apply whitespace-nowrap relative;
        &:nth-child(2) {
          @apply flex flex-col items-end;
          width: sizem(266);
          gap: sizem(2);
        }
      }

      .t1 {
        font-size: sizem(20);
      }
      .t2 {
        font-size: sizem(12);
        font-weight: 700;

        &:before {
          @apply hidden;
        }
      }

      .line {
        @apply bg-white h-[1px] w-full transition-all absolute;
        bottom: -#{sizem(17.5)};
      }
      .t3 {
        margin-left: 0;
        font-size: sizem(15);
        font-weight: 700;
      }
      .t4 {
        @apply w-full uppercase;
        font-size: sizem(10);
        font-weight: 600;
        margin-right: sizem(5);
      }
      .t5 {
        font-size: sizem(12);
        font-weight: 600;
      }
      .arrow {
        @apply absolute cursor-pointer;
        right: sizem(54.5);
        top: sizem(5);
        width: sizem(34.5);
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

const splideRef = ref()
const currentIdx = ref(0)

const onMove = (newIndex, prevIndex, destIndex) => {
  currentIdx.value = prevIndex
}

const imgs = [
  {
    img: globals.$isMobile()
      ? new URL("../section/s3/1m.jpg", import.meta.url).href
      : new URL("../section/s3/1.jpg", import.meta.url).href,
    t1: "東京晴空樹",
    t2: "Tokyo Skytree",
    t3: "／ 東京スカイツリー",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s3/2m.jpg", import.meta.url).href
      : new URL("../section/s3/2.jpg", import.meta.url).href,
    t1: "東京都廳",
    t2: "The New Tokyo City Hall",
    t3: "／ 東京都庁",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s3/2m.jpg", import.meta.url).href
      : new URL("../section/s3/3.jpg", import.meta.url).href,
    t1: "東京虎之門之丘",
    t2: "Toranomon Hills",
    t3: "／ 虎ノ門ヒルズプロジェクト",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s3/2m.jpg", import.meta.url).href
      : new URL("../section/s3/4.jpg", import.meta.url).href,
    t1: "橫濱Landmark大樓",
    t2: "LANDMARK TOWER",
    t3: "／ 横浜ランドマークタワー",
  },
]
</script>
