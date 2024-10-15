<template>
  <article class="s4" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <div class="t">
      <img loading="lazy"  v-if="!isMobile" src="@/section/s4/logo.webp"  data-aos="fade-left" data-aos-delay="0" alt="" srcset="">
      <div class="t2"  data-aos="fade" data-aos-delay="200">
        全球科技大廠共好高雄 共創亞灣AI矽島
      </div>
      <div class="t3"  data-aos="fade" data-aos-delay="400">
        超微AMD開發 AI軟硬體前瞻技術的研發中心、屬意地點正是亞灣！加上輝達NVIDIA攜手鴻海建置AI研發中心，全球科技雙強相繼選定亞灣！微軟、思科CISCO、IBM、亞馬遜網路服務AWS、思愛普SAP…投資台灣首選亞灣；AI產業鍊龐大能量帶來國際化全球視野，產官學研合作，培育人才落地生根，亞灣在世界扮演關鍵角色，高雄智慧科技城市最重要的核心。
      </div>
    </div>
    <div class="img1">
      <div class="mask" data-aos="zoom-out"></div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  @apply relative w-full bg-black;
  @apply flex flex-row-reverse items-center justify-end;
  gap: size(57);
  height: size(900);
  .t {
    @apply flex flex-col justify-center;
    img {
      width: size(263.91);
    }
    .t1 {
      @apply font-['Noto_serif_tc'] text-[#dd5510];
      font-size: size(41);
      font-weight: 700;
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
      width: size(502);
    }
  }

  .img1 {
    @apply flex-shrink-0 bg-black bg-cover;
    @apply relative;
    width: size(1226);
    height: size(900);
    background-image: url("@/section/s4/1.webp");
    .mask {
      @apply absolute h-full;
      width: size(300);
      right: 0;
      top: 0;
      background: linear-gradient(
        -90deg,
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
  .s4 {
    @apply relative w-full bg-black;
    @apply flex flex-col items-center justify-end;
    gap: sizem(0);
    height: sizem(623);
    .t {
      @apply flex flex-col items-center text-center;
      .t1 {
        @apply font-['Noto_serif_tc'] text-[#dd5510];
        font-size: sizem(26);
        font-weight: 700;
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
      height: sizem(408);
      background-image: url("@/section/s4/1m.webp");
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
