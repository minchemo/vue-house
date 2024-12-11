<template>
  <article class="s2 anchor7">
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
        七期的優雅日常<br />
生活就是一場歌劇和米其林饗宴
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="200">
        這個城市，瀰漫著藝術生活的旋律<br />
讓人自然而然優雅起來的文化基因與時尚品味⋯<br />
「片片山閑」的日常，拉近你與台中歌劇院的距離<br />
只要換掉球鞋、牛仔褲<br />
立刻盛裝聆聽音樂與建築的美聲饗宴
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply relative w-full flex flex-row-reverse;
  height: size(900);

  .swiper-box {
    width: size(1229);
    height: 100%;
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
    background: linear-gradient(-90deg, #FFF 4%, #CDDBD9 58%, #CBDAD8 60%, #79B3BA 100%);
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
  .s2 {
    @apply flex-col-reverse justify-end;
    height: auto;
    

    .swiper-box {
      width: 100vw;
      height: auto;
      .slide {
        .slide-item {
          @apply bg-cover;
          width: sizem(375);
          height: sizem(280);
          .caption {
            left: unset;
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
      padding: sizem(50) sizem(0) sizem(50) sizem(34);
      .t1 {
        font-size: sizem(19);
      }
      .t2 {
        width: sizem(310);
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
    img: new URL("./s2/1.webp", import.meta.url).href,
    caption: "情境示意圖",
  },
  {
    img: new URL("./s2/2.webp", import.meta.url).href,
    caption: "情境示意圖",
  },
  {
    img: new URL("./s2/3.webp", import.meta.url).href,
    caption: "情境示意圖",
  },
  {
    img: new URL("./s2/4.webp", import.meta.url).href,
    caption: "情境示意圖",
  },
  {
    img: new URL("./s2/5.webp", import.meta.url).href,
    caption: "情境示意圖",
  },
]
</script>
