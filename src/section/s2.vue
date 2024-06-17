<template>
  <article class="s2">
    <div class="t">
      <img class="t1" src="@/section/resource/s2title.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0" />
      <div class="t2" data-aos="fade-up" data-aos-delay="200">各大園區全能同步</div>
      <div class="t3" data-aos="fade-up" data-aos-delay="400">
        近距北士科、內湖科技園區、圓山新創產業聚落、新北知識產業園區，<br />
        前迎家樂福、後擁銀河灣開發計畫，百年難得一見的三重地王【鼎藏豐碩】，佔盡地利優勢！
      </div>
    </div>
    <div class="fillcolor"></div>
    <div class="viewbox">
      <fullview />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply w-full relative;
  height: size(1357);
  background: rgb(2, 103, 196);

  .t {
    @apply absolute z-20 flex flex-col items-center justify-center w-full;
    top: size(98);
    gap: size(43);
    .t1 {
      width: size(365.29);
    }
    .t2 {
      @apply flex items-center justify-center;
      width: size(622.26);
      height: size(54.44);
      color: #000;
      font-size: size(32);
      font-weight: 500;
      letter-spacing: size(1.92);
      background: linear-gradient(
        90deg,
        rgba(255, 230, 121, 0) 0%,
        #ffe679 21%,
        #e4bc53 30%,
        #d6a640 44%,
        #c28724 67%,
        #bb7c1a 80%,
        rgba(187, 124, 26, 0) 100%
      );
    }
    .t3 {
      color: #fff;
      text-align: center;
      font-size: size(24);
      font-weight: 500;
      line-height: size(39);
      letter-spacing: size(1.44);
    }
  }

  .fillcolor {
    @apply w-full relative z-10;
    height: size(506);
    background: rgb(2, 103, 196);
    background: linear-gradient(
      0deg,
      rgba(2, 103, 196, 0) 0%,
      rgba(2, 103, 196, 1) 44.5%,
      rgba(2, 103, 196, 1) 100%
    );
  }

  .viewbox {
    @apply absolute w-full;
    height: size(1083);
    left: 0;
    bottom: 0;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    height: sizem(810);
    
    .t {
      @apply absolute z-[101] flex flex-col items-center justify-center w-full;
      top: sizem(51.86);
      gap: sizem(10);
      .t1 {
        width: sizem(139.1);
      }
      .t2 {
        @apply flex items-center justify-center;
        width: sizem(325);
        height: sizem(27);
        font-size: sizem(16);
        letter-spacing: 170%;
      }
      .t3 {
        width: sizem(340);
        font-size: sizem(14);
        line-height: 170%;
        letter-spacing: sizem(0.84);
      }
    }

    .fillcolor {
      @apply w-full relative z-10 pointer-events-none;
      height: sizem(150);
      background: rgb(2, 103, 196);
      background: linear-gradient(
        0deg,
        rgba(2, 103, 196, 0) 0%,
        rgba(2, 103, 196, 1) 44.5%,
        rgba(2, 103, 196, 1) 100%
      );
    }

    .viewbox {
      @apply absolute w-full;
      height: sizem(720);
      left: 0;
      bottom: 0;
    }
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
