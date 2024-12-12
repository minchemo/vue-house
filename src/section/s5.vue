<template>
  <article class="s5">
    <div class="t">
      <div
        class="t1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <span>4</span>
        車位 ／
      </div>
      <div
        class="t2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div class="t3">車位市心獨享豈止難得</div>
        <div class="t4">
          奢擁4車位稀有配置，核心地段停車無憂、輕鬆出行，訪客隨時歡迎，迎接從容愜意居住體驗。
        </div>
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
          drag: false,
          gap: 20,
          type: 'loop',
          perPage: 1,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="(img, i) in imgs"
          @click="swipeModalRef.open(img.large)"
          :style="{ 'background-image': `url(${img.img})` }"
        >
          <div class="caption">
            {{ img.caption }}
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <img src="@/section/s5/6_6.png" class="l-number" alt="" srcset="" />
  </article>
  <swipeModal ref="swipeModalRef"/>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s5 {
  @apply relative w-full;
  @apply flex flex-col items-center justify-center;
  @apply bg-bottom bg-cover;
  height: size(1090);

  .t {
    @apply absolute z-10;
    @apply text-white;
    @apply flex flex-col items-start;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3));
    left: size(159);
    top: size(191);
    font-family: "Noto Sans TC";
    gap: size(40);
    .t1 {
      font-size: size(60);
      font-weight: 500;
      line-height: 1;
      margin-right: size(779);
      span {
        font-family: Inter;
        font-size: size(168);
        font-weight: 600;
      }
    }
    .t2 {
      .t3 {
        font-size: size(27);
        font-weight: 500;
        letter-spacing: size(2.7);
      }
      .t4 {
        font-size: size(17);
        font-weight: 500;
        line-height: 180%;
        letter-spacing: size(1.7);
        width: size(400);
        margin-top: size(20);
      }
    }
  }

  .splide-box {
    @apply absolute left-0 top-0;
    @apply w-full;
    .splide {
      @apply w-full;
      width: size(1920);
      height: size(1090);
      .slide-item {
        @apply relative w-full bg-cover;
        height: size(1090);
        .caption {
          @apply absolute text-white;
          font-family: "Noto Sans TC";
          font-size: size(14);
          font-weight: 700;
          line-height: 170%;
          right: size(30);
          bottom: size(20);
          filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
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
  .s5 {
    @apply relative w-full;
    @apply flex flex-col items-center justify-start;
    height: sizem(579);
    padding-top: sizem(45);
    background-image: url("@/section/new-mobg.jpg");
    background-size: contain;
    background-position: top;

    .t {
      @apply relative z-10;
      @apply text-white;
      @apply flex flex-col justify-center items-center;
      @apply text-center;
      filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.5));
      left: auto;
      top: auto;
      font-family: "Noto Sans TC";
      .t1 {
        font-size: sizem(22);
        font-weight: 500;
        line-height: 1;
        margin-right: 0;
        span {
          font-size: sizem(62);
        }
      }
      .t2 {
        margin-top: sizem(10);
        .t3 {
          font-size: sizem(17);
          letter-spacing: auto;
          letter-spacing: sizem(1);
        }
        .t4 {
          font-size: sizem(13);
          font-weight: 500;
          line-height: 180%;
          letter-spacing: auto;
          width: sizem(300);
          margin-top: sizem(13);
          border-top: 1px solid;
          border-color: #ffffff85;
          padding-top: sizem(10);
        }
      }
    }

    .splide-box {
      @apply absolute left-0 bottom-0 top-[unset];
      @apply w-full;
      .splide {
        @apply w-full;
        height: sizem(234);
        .slide-item {
          @apply relative w-full;
          height: sizem(234);
          .caption {
            @apply absolute text-white;
            font-family: "Noto Sans TC";
            font-size: sizem(12);
            font-weight: 700;
            line-height: 170%;
            right: sizem(10);
            bottom: sizem(10);
            filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
          }
        }
      }
    }

    .l-number {
      @apply absolute left-0 pointer-events-none;
      bottom: sizem(234);
      height: sizem(237);
      opacity: .5;
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
import swipeModal from "../components/swipeModal.vue";
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
const swipeModalRef = ref()

const splide = ref()
const imgs = [
  {
    img: globals.$isMobile()
      ? new URL("../section/s5/p1.jpg", import.meta.url).href
      : new URL("../section/s5/1.webp", import.meta.url).href,
    caption: globals.$isMobile()
      ? "點擊瀏覽 藏筑2  3d情境示意圖"
      : "藏筑2  3d情境示意圖",
    large: new URL("../section/s5/l1.jpg", import.meta.url).href,
  },
]
</script>
