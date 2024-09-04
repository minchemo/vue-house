<template>
  <article class="s3" id="s3">
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
      <!-- 
      <div class="arrows" v-if="$isMobile()">
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
      </div> -->
    </div>
    <img src="./s1/t3m.svg" alt="t3" class="t3" v-if="$isMobile()" data-aos="fade-down" data-aos-delay="0">
    <img src="./s1/t3.svg" alt="t3" class="t3" v-else data-aos="fade-down" data-aos-delay="0">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@keyframes ann {
  to {
    transform: translateX(0%);
  }
}
.s3 {
  @apply relative;
  //height: size(400);
  background: #8fc31f;
  /*
  min-height: size(940);
  max-height: size(940);*/
  font-size:size(36);
  text-align: center;

  .swiper-box {
    @apply relative z-10;
    width: size(1540);
    margin: auto;
  //  margin-top: size(56);
    .slide-item {
      @apply bg-cover;
      width: size(300);
      height: size(200);
      margin-right: size(10);
      .caption {
        @apply absolute bottom-0 w-full text-white text-right flex items-end justify-end;
        padding: .5em;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        height: size(68);
        font-size: size(12);
        font-weight: 400;
        letter-spacing: 0.1em;
      }
    }
  }
  .t3{position: relative;
    width: size(1120);margin:size(40) auto size(70) auto;}

}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s3 {
 //   height: sizem(375);
    font-size:sizem(15);
    .swiper-box {
      
    width: 100%;

    .slide-item {
      width: sizem(300);
      height: sizem(200);
      margin-right: sizem(10);
      .caption {
        @apply absolute bottom-0 w-full text-white text-right flex items-end justify-end;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        height: sizem(68);
        font-size: sizem(12);
        font-weight: 400;
      //  letter-spacing: size(2.4);
      }
    }


    }
  .t3{
    width: sizem(310);margin:sizem(30) auto sizem(30) auto;}
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
      drag: true,
      interval: 6000, // 調整跑馬燈速度，speed/interval須一致
      speed: 6000, // 調整跑馬燈速度，speed/interval須一致
      snap: false,
      easing: "linear",
      gap: 0,
      type: "loop",
      perMove: 1,
    }
  : { // 桌面配置
      autoWidth: true,
      arrows: false,
      autoplay: false,
      pagination: false,
      drag: false,
      interval: 4000,
      gap: 0,
      type:"",
    }

const imgs = [
  {
    img: new URL("../section/s1/1.webp", import.meta.url).href,
    caption: "康橋國際學校",
  },
  {
    img: new URL("../section/s1/2.webp", import.meta.url).href,
    caption: "馬禮遜美國學校",
  },
  {
    img: new URL("../section/s1/3.webp", import.meta.url).href,
    caption: "AAIA美國學校",
  },
  {
    img: new URL("../section/s1/4.webp", import.meta.url).href,
    caption: "三井OUTLET",
  },
  {
    img: new URL("../section/s1/5.webp", import.meta.url).href,
    caption: "ASML",
  },
]
</script>