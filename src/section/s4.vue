<template>
  <article class="s4">
    <div class="main" data-aos="fade">
      <div class="t1" data-aos="fade-down" data-aos-delay="200">世界級森林公園特區</div>
      <img class="t2" data-aos="fade-down" data-aos-delay="400" src="@/section/s4/internationalpark.svg" alt="" srcset="">
      <img class="t3" data-aos="fade-down" data-aos-delay="600" src="@/section/s4/centralpark.svg" alt="" srcset="">
    </div>
    <div class="bottom">
      <div>
        <div class="t1" data-aos="fade-down" data-aos-delay="200" >開窗 世界級公園視野</div>
        <div class="t2" data-aos="fade-down" data-aos-delay="400">一次同步紐約、倫敦、巴黎、東京、台北…<br v-if="$isMobile()"/>都會公園自成高端聚落，綠地不敗、<br />
          抬漲未來，小港首選正3萬坪森林公園第一排，入手趁現在
        </div>
      </div>
      <div class="imgs">
        <img  data-aos="fade" data-aos-delay="200" src="@/section/s4/1.jpg" alt="" srcset="">
        <img  data-aos="fade" data-aos-delay="400" src="@/section/s4/2.jpg" alt="" srcset="">
        <img  data-aos="fade" data-aos-delay="600" src="@/section/s4/3.jpg" alt="" srcset="">
        <img  data-aos="fade" data-aos-delay="800" src="@/section/s4/4.jpg" alt="" srcset="">
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  @apply relative overflow-hidden w-full bg-[#E7E7E7];
  height: size(900);
  padding-top: size(24);

  .main {
    @apply relative w-full;
    height: size(612);
    background-image: url('@/section/s4/main.jpg');
    background-size: cover;
    .t1 {
      @apply absolute;
      color: #fff;
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(30);
      left: size(42);
      bottom: size(94.5);
    }

    .t2 {
      @apply absolute;
      width: size(961.96);
      left: size(42.86);
      bottom: 0;
    }
    .t3 {
      @apply absolute;
      width: size(203.83);
      right: size(73.6);
      bottom: size(24.88);

    }
  }

  .bottom {
    @apply flex items-center justify-between w-full;
    padding-left: size(43);
    padding-right: size(64.74);
    margin-top: size(44);
    color: #595758;

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(42);
      line-height: 150%;
    }
    .t2 {
      font-weight: 400;
      font-size: size(18);
      line-height: 170%;
    }

    .imgs {
      @apply flex;
      gap: size(7);
      img {
        width: size(270.22);
      }
    }
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
    @apply bg-white;
  height: sizem(629);
  padding-top: 0;

  .main {
    height: sizem(215);
    background-image: url('@/section/s4/main_m.jpg');
    .t1 {
      @apply absolute;
      font-size: sizem(12);
      left: sizem(16);
      bottom: sizem(27.8);
    }

    .t2 {
      width: sizem(319.2);
      left: sizem(16.29);
      bottom: 0;
    }
    .t3 {
      width: sizem(61.3);
      right: sizem(17);
      bottom: sizem(72.25);

    }
  }

  .bottom {
    @apply flex-col text-center;
    padding-left: sizem(32.5);
    padding-right: sizem(32.5);
    margin-top: sizem(36.12);

    .t1 {
      font-size: sizem(19);
      margin-bottom: sizem(5);
    }
    .t2 {
      font-size: sizem(12);
      margin-bottom: sizem(23);
    }

    .imgs {
      @apply flex-wrap;
      gap: sizem(4);
      img {
        width: sizem(153);
      }
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
