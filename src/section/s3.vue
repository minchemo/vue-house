<template>
  <article class="s3">
    <div class="inkbg absolute">
      <div class="ink1 absolute" data-aos="zoom-in" data-aos-delay="0">
    <img
      src="./s1/ink2.png" alt="ink"
    />
  </div>
  <div class="ink2 absolute" data-aos="zoom-in" data-aos-delay="200">
    <img
      src="./s1/ink2.png" alt="ink"
    />
  </div>
    </div>

    <div class="t" data-aos="fade-up" data-aos-delay="0">
      <div class="t1">徐匯中學站 雙線捷運宅</div>
      <div class="t2">
        捷運徐匯中學站、Ｙ21站450公尺，<br />
        蘆洲線、環狀線(施工中)雙捷運樞紐金鑽，<br />
        環狀線三站讀秒直驅北市士林區，<br />
        蘆洲線三站瞬間抵達北市大同區。
      </div>
    </div>
    <div class="swiper-box" data-aos="fade-up" data-aos-delay="0">
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
      <div class="arrows" v-if="isMobile">
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
    <img
      class="ma"
      src="@/section/s3/ma.svg" alt="ma"  data-aos="fade-up" data-aos-delay="100"
    />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply w-full relative bg-cover;
  height: size(820);
 // background-image: url("@/section/s3/bg.jpg");
  padding: 0 size(40);
 // padding-top: size(105);
.bg{position: absolute;top: size(-245);left: 0;width: 100%;z-index:3;
  user-select: none;
  pointer-events: none;}
.ma{position: absolute;top: size(-96);right: size(131);width: size(827);z-index:3;
  user-select: none;
  pointer-events: none;}
  .mrt {
    @apply absolute right-0 top-0 w-full h-full;
  //  background-image: url("@/section/s3/mrt.png");
  //  background-size: cover;
    .caption {
      @apply absolute text-white;
      right: size(15);
      bottom: size(7);
      font-size: size(12);
      font-weight: 400;
      letter-spacing: size(2.4);
    }
  }
  .t {
    @apply relative z-[5] text-black;
    margin: 0 0 0 size(145);
    padding-top: size(100);
    .t1 {
      font-size: size(40);
      font-weight: 700;
      letter-spacing: size(8);
    }
    .t2 {
      @apply relative;
      font-size: size(20);
      font-weight: 400;
      line-height: 150%;
      letter-spacing: size(4);
      margin-top: size(20);

      &::after {
        @apply absolute left-0;
        bottom: -#{size(45)};
        content: "";
        width: size(377);
        height: 2px;
        background: #fcee21;
      }
    }
  }
  .swiper-box {
    @apply relative;
    margin-top: size(130);
    @apply relative z-10;
    .slide-item {
      width: size(600);
      height: size(400);
     // height: size(314);
      margin-right: size(12);
      background-size: cover;
    }
    .caption{color: #fcd05466;position: absolute;right: .5em;bottom: .5em;text-shadow: 0 0 10px #000;}
  }
.inkbg{top: 0;left: 0;width: 100%;z-index:3;
  user-select: none;
  pointer-events: none;

}
  .ink1{
    top: size(-265);left:size(-350);width:size(2120);
    img{
      width: 100%;filter: invert(86%) sepia(4%) saturate(1113%) hue-rotate(319deg) brightness(111%) contrast(98%);
      transform: rotate(165deg);
    }
  }
  .ink2{
    top: size(-350);left:size(325);width:size(2850);height:size(1275);
    img{
      width: 100%;height: 100%;filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);
      transform: rotate(165deg);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    height: sizem(687);
   // background-image: url("@/section/s3/bgm.jpg");
    padding: 0;
    padding-top: sizem(60);
.ma{position: absolute;top: sizem(470);right: 0;
  left: 0;margin: auto;
  width: sizem(330);}

    .t {
      padding: 0 sizem(32.5);
      margin: auto;
      .t1 {
        @apply whitespace-nowrap;
        font-size: sizem(25);
        letter-spacing: sizem(5);
      }
      .t2 {
        @apply relative;
        font-size: sizem(14);
        font-weight: 400;
        line-height: 150%;
        letter-spacing: sizem(1.4);
        margin-top: sizem(14);

        &::after {
          bottom: -#{sizem(29)};
          width: sizem(310);
        }
      }
    }
    .swiper-box {
      @apply relative;
      margin-top: sizem(63);
      @apply relative z-10;
      .slide-item {
        width: sizem(300);
        height: sizem(200);
        margin-right: sizem(10);
      }
      .caption{font-size: sizem(12);}

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
  .ink1{
    top: sizem(290);left:sizem(-390);width:sizem(890);
    img{
      transform: rotate(0deg);
    }
  }
  .ink2{
    top: sizem(-48);left:sizem(-330);width:sizem(908);height:sizem(405);
    img{
      width: 100%;height: 100%;
      //filter: invert(0);
      filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);
      transform: rotate(0deg);
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
const sConfig = {
  autoWidth: true,
  arrows: false,
  autoplay: globals.$isMobile() ? true : false,
  pagination: false,
  drag: globals.$isMobile() ? true : false,
  interval: 4000,
  gap: 0,
  type: globals.$isMobile() ? "loop" : "",
}

const imgs = [
  {
    img: new URL("../section/s3/1.webp", import.meta.url).href,
    caption: "徐匯中學站實景",
  },
  {
    img: new URL("../section/s3/2.webp", import.meta.url).href,
    caption: "徐匯中學站實景",
  },
  {
    img: new URL("../section/s3/3.webp", import.meta.url).href,
    caption: "徐匯中學站實景",
  },
]
</script>
