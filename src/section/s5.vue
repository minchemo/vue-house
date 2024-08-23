<template>
  <article class="s5">
    <img
      class="bg"
      src="@/section/s5/bg.webp" alt="bg" v-if="!$isMobile()"
    />
    <img
      class="bg"
      src="@/section/s5/bgm.png" alt="bg" v-else
    />
    <div class="t">
      <div class="t1" 
      data-aos="fade-up"
      data-aos-delay="0">五大商圈匯聚 <br v-if="isMobile" />繁華富庶生活風采</div>
      <div class="t2" 
      data-aos="fade-up"
      data-aos-delay="0">
        三蘆繁華核心，運轉著一天的繁華景象，<br v-if="!isMobile" />
        集賢商圈、徐匯商圈、家樂福商圈、仁愛街商圈、溪尾街商圈，<br
          v-if="!isMobile"
        />
        高人一等的富庶生活，生機蓬勃的全方位機能。
      </div>
    </div>
    <div class="swiper-box">
      <Splide :options="sConfig" ref="splide" class="slide">
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
      <div class="arrows">
        <img
          @click="splide.go('<')"
          class="prev"
          src="@/section/arrow.png"
          alt="r"
          srcset=""
        />
        <img
          @click="splide.go('>')"
          class="next"
          src="@/section/arrow.png"
          alt="r"
          srcset=""
        />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  @apply w-full relative bg-cover;
  height: size(820);
 //  background-image: url("@/section/s5/bg.jpg");
  padding-left: size(582);
  padding-top: size(114);
.bg{position: absolute;top: size(-295);left: 0;width: 100%;z-index:3;
  user-select: none;
  pointer-events: none;}
  .t {
    @apply text-black relative z-[5];
    margin:size(40) 0 0 0;

    .t1 {
      font-size: size(40);
      font-weight: 700;
      line-height: 1.5; /* 60px */
      letter-spacing: size(8);
    }
    .t2 {
      @apply relative;
      margin-top: size(28);
      font-size: size(20);
      font-weight: 400;
      line-height: 150%; /* 30px */
      letter-spacing: size(4);

      &::after {
        @apply absolute left-0;
        bottom: -#{size(25)};
        content: "";
        width: size(1100);
        height: 2px;
        background: #fcee21;
      }
    }
  }

  .swiper-box {
    @apply relative z-10;
    margin-top: size(56);
    .slide-item {
      @apply bg-cover;
      width: size(670);
      height: size(403);
      margin-right: size(23);
      .caption {
        @apply absolute bottom-0 w-full text-white text-right flex items-end justify-end;
        padding: size(10);
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        height: size(68);
        font-size: size(12);
        font-weight: 400;
        letter-spacing: size(2.4);
      }
    }
      .arrows {
        @apply absolute w-full flex items-center justify-between top-1/2 -translate-y-1/2;
        padding: 0 size(10);
        img {
          width: size(20);
        }
        .prev {
        }

        .next {
          @apply -scale-x-100;
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
    @apply w-full relative bg-cover;
    height: sizem(850);
   // background-image: url("@/section/s5/bgm.jpg");
    padding-left: 0;
    padding-top: sizem(60);
.bg{top: sizem(-80);}
    .t {
      @apply text-black;
      padding: 0 sizem(32.5);

      .t1 {
        font-size: sizem(25);
        letter-spacing: sizem(5);
      }
      .t2 {
        @apply relative;
        font-size: sizem(14);
        font-weight: 400;
        line-height: 150%;
        letter-spacing: sizem(1.4);
        margin-top: sizem(22);

        &::after {
          bottom: -#{sizem(31)};
          width: sizem(310);
        }
      }
    }

    .swiper-box {
      @apply relative;
      margin-top: sizem(66);
      @apply relative z-10;
      .slide-item {
        @apply bg-cover;
        width: sizem(300.3);
        height: sizem(184);
        margin-right: sizem(6);
        .caption {
          padding: sizem(10);
          height: sizem(68);
          font-size: sizem(12);
          letter-spacing: sizem(2.2);
        }
      }

      .arrows {
        @apply absolute w-full;
        @apply flex items-center justify-between;
        @apply top-1/2 -translate-y-1/2;
        @apply pointer-events-none;
        padding: 0 sizem(10);
        img {
          @apply pointer-events-auto;
          width: sizem(12.8);
        }
        .prev {
        }

        .next {
          @apply -scale-x-100;
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
const sConfig = globals.$isMobile()
  ? { // 手機板配置
      autoWidth: true,
      arrows: false,
      autoplay: true,
      pagination: false,
      gap: 0,
      type: "loop",
    }
  : { // 桌面配置
      autoWidth: true,
      arrows: false,
      autoplay: true,
      pagination: false,
      drag: true,
      interval: 5000, // 調整跑馬燈速度，speed/interval須一致
      speed: 5000, // 調整跑馬燈速度，speed/interval須一致
      snap: false,
      easing: "linear",
      gap: 0,
      type: "loop",
      perMove: 1,
    }

const imgs = [
  {
    img: new URL("../section/s5/3.jpg", import.meta.url).href,
    caption: "集賢路街廓",
  },
  {
    img: new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: "徐匯廣場",
  },
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "家樂福蘆洲店",
  },
  {
    img: new URL("../section/s5/5.jpg", import.meta.url).href,
    caption: "溪尾街商圈",
  },
  {
    img: new URL("../section/s5/4.jpg", import.meta.url).href,
    caption: "三蘆市場",
  },
]
</script>
