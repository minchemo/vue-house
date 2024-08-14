<template>
  <article class="s2">
    <fullview class="viewbox" />
    <div class="t" data-aos="fade-up" data-aos-delay="0">
      <div class="t1">集賢大道靜巷宅 交會軸心</div>
      <div class="t2">
        三重、蘆洲雙市交界處，<br />
        傳統商圈與新興重劃區的交會地。<br />
        人聚成市，三蘆最成熟生活圈。<br />
        貨聚成集，三蘆最大傳統市場。
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply w-full relative;
  height: size(1455);
  padding-top: size(100);
  .viewbox {
    @apply absolute left-0;top: size(-25);
  }
  .t {
    @apply text-[#000] relative z-[1] text-center;
    .t1 {
      font-size: size(40);
      font-weight: 700;
      line-height: 170%;
      letter-spacing: size(8);
    }
    .t2 {
      margin-top: size(28);
      font-size: size(20);
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: size(4);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    height: sizem(605);
    padding-top: sizem(60);
  .viewbox {
    @apply absolute left-0;top:sizem(65);height: sizem(540);
  }
    .t {
      .t1 {
        font-size: sizem(25);
        letter-spacing: sizem(1.25);
      }
      .t2 {
        margin-top: sizem(23);
        font-size: sizem(14);
        letter-spacing: sizem(2.8);
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
import fullview from "@/components/fullview.vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
