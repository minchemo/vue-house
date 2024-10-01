<template>
  <article class="s5" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <div class="t">
      <img src="@/section/s5/logo.png" alt="" srcset=""  data-aos="fade-right" data-aos-delay="0"/>
      <div class="t1"  data-aos="fade-right" data-aos-delay="0">絮寫國際地標偉大建築</div>
      <div class="t2"  data-aos="fade" data-aos-delay="200">國際建築 寫全台紀錄 為高雄留下經典</div>
      <div class="t3"  data-aos="fade" data-aos-delay="400">
        新加坡SCDA與台灣兩大建設集團三強聯手，打造可代言高雄的國際級非凡建築、讓世界看見台灣；清景麟集團創辦人林聰麟堅定承諾：「我要蓋高雄國際級、與全球同步的建築」、「我要蓋給年輕人居住的輕豪宅」，讓高雄的榮耀人人有感！
      </div>
    </div>
    <div class="img1">
      <div class="mask" data-aos="zoom-out"></div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  @apply relative w-full bg-black;
  @apply flex items-center justify-end;
  gap: size(57);
  height: size(900);
  .t {
    @apply flex flex-col;
    img {
      width: size(642.5);
    }
    .t1 {
      @apply font-['Noto_serif_tc'] text-[#dd5510];
      font-size: size(41);
      font-weight: 700;
      margin-top: size(50);
    }
    .t2 {
      @apply text-white;
      font-size: size(24);
      font-weight: 500;
      line-height: size(39);
      letter-spacing: size(0.72);
      margin-top: size(67);
    }
    .t3 {
      @apply text-white text-justify;
      font-size: size(17);
      font-weight: 500;
      line-height: size(31);
      margin-top: size(42);
      width: size(556);
    }
  }

  .img1 {
    @apply flex-shrink-0 bg-black bg-cover;
    @apply relative;
    width: size(1103);
    height: size(900);
    background-image: url("@/section/s5/1.jpg");
    .mask {
      @apply absolute h-full;
      width: size(300);
      left: 0;
      top: 0;
      background: linear-gradient(
        90deg,
        #040000 0%,
        #040000 14%,
        rgba(4, 0, 0, 0) 100%
      );
      transform-origin: 0 0;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {
    @apply relative w-full bg-black;
    @apply flex flex-col items-center justify-end;
    gap: sizem(0);
    height: sizem(613); 
    .t {
      @apply absolute z-10;
      @apply flex flex-col items-center text-center;
      top: sizem(51);
      img {
        width: sizem(256);
      }
      .t1 {
        @apply font-['Noto_serif_tc'] text-[#dd5510];
        font-size: sizem(26);
        font-weight: 700;
        margin-top: sizem(10);
      }
      .t2 {
        @apply text-white;
        font-size: sizem(15);
        font-weight: 500;
        line-height: normal;
        letter-spacing: normal;
        margin-top: sizem(13);
      }
      .t3 {
        @apply text-white text-center;
        padding: 0 sizem(39);
        font-size: sizem(12);
        font-weight: 500;
        line-height: sizem(20);
        margin-top: sizem(19);
        width: 100%;
      }
    }

    .img1 {
      @apply flex-shrink-0 bg-black bg-cover;
      @apply relative;
      width: sizem(375);
      height: sizem(472);
      background-image: url("@/section/s5/1m.jpg");
      .mask {
        @apply absolute h-full;
        width: sizem(375);
        height: sizem(108);
        left: 0;
        top: 0;
        background: linear-gradient(
          180deg,
          #040000 0%,
          #040000 14%,
          rgba(4, 0, 0, 0) 100%
        );
        transform-origin: 0 0;
      }
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
