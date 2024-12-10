<template>
  <article class="s4 anchor7">
    <div class="swiper-box relative">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          autoWidth: false,
          arrows: false,
          autoplay: true,
          pagination: false,
          interval: 4000,
          gap: 1,
          type: 'loop',
          perPage: 1,
          drag: imgs.length>1?true :false 
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
      <div class="arrows" v-if="imgs.length > 1">
        <img
          src="@/section/arrow.png"
          class="arrow prev"
          @click="splide.go('<')"
          alt=""
          srcset=""
        />
        <img
          src="@/section/arrow.png"
          class="arrow next"
          @click="splide.go('>')"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        秋紅谷的一抹綠 聆聽生態的對話
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="200">
在城市和自然之間，幸福的一天，從散步秋紅谷開始<br />
猶如台北大安森林公園、紐約中央公園的城市綠肺<br />
佇足景觀U型橋，巔覆你對公園的想像<br />
蜿蜒的河湖、細長的丘陵、寧靜富有詩意的地景⋯<br />
下過雨的藍天更加清澄時，特別有感覺</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s4 {
  @apply relative w-full flex flex-row-reverse;
  height: size(900);

  .swiper-box {
    @apply h-full;
    width: size(1032);
    .slide {
      .slide-item {
        @apply bg-cover;
        width: size(1229);
        height: size(900);
        .caption {
          @apply text-white;
          @apply absolute;
          right: size(20);
          bottom: size(12);
          font-size: size(15);
          //font-weight: 700;
        }
      }
    }
    .arrows {
      @apply absolute w-full;
      @apply left-1/2 -translate-x-1/2;
      @apply top-1/2 -translate-y-1/2;
      @apply flex items-center justify-between;
      padding: 0 size(15);
      img {
        @apply cursor-pointer;
        width: size(28);
      }
      .next {
        @apply -scale-x-100;
      }
    }
  }
  .t {
    @apply flex flex-1 flex-col items-start justify-center;
   //padding-top: size(251);
    background: linear-gradient(90deg, #FFF 5.44%, #CDDBD9 78.9%, #CBDAD8 81.6%, #79B3BA 136%);
    padding: 0 0 0 size(137);
    .t1 {
      font-size: size(30);
      font-weight: 600;
      margin-bottom: 1.1em;//.4
      line-height:1.5;
      letter-spacing: .05em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s4 {
    @apply flex-col-reverse justify-end;
    height: auto;
    
    .swiper-box {
      @apply h-auto;
      width: 100vw;
      .slide {
        .slide-item {
          width: sizem(375);
          height: sizem(274.61);
          .caption {
            right: sizem(10);
            bottom: sizem(6);
            font-size: sizem(12);
          }
        }
      }
      .arrows {
        padding: 0 sizem(8);
        img {
          width: sizem(15);
        }
      }
    }
    .t {
      padding: sizem(50) sizem(0) sizem(50) sizem(27);
      .t1 {
        font-size: sizem(19);
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
const splide = ref()
const imgs = [
  {
    img: new URL("./s4/1.jpg", import.meta.url).href,
    caption: "此為3D示意圖 實際以房屋買賣合約書及未來成屋為準",
  },
]
</script>
