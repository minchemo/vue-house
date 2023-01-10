<template>
  <article class="s7">
    <div class="main" data-aos="fade" data-aos-delay="200">
      <img data-aos="fade-down" data-aos-delay="400" src="@/section/s7/en.svg" class="en" alt="" srcset="">
      <div class="caption">景觀3D示意圖</div>
    </div>
    <div class="txt">
      <div class="t1" data-aos="fade-down" data-aos-delay="200">物超所值 花園泳池會館</div>
      <div class="t2" data-aos="fade-down" data-aos-delay="400">【清景麟‧國家公園】，由外而內，化身頂尖聚樂部<br />
        設有運動吧、花園泳池SPA，與法式鐵板燒等獨家設施<br />
        重金禮聘旅美國際大師蘇點忠，演繹出飯店級新奢空間品味
      </div>
    </div>
    <img class="man" data-aos="fade" data-aos-delay="600" src="@/section/s7/man.png" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  @apply relative overflow-hidden w-full bg-[#E6E6E6];
  height: size(900);
  display: flex;
  .main {
    @apply h-full relative;
    flex-basis: size(1140);
    background-image: url('@/section/s7/bg.jpg');
    background-size: cover;
    .en {
      @apply absolute;
      left: size(60.8);
      top: size(72.96);
      width: size(492.48);
    }
    .caption {
      @apply absolute;
      right: size(28.32);
      bottom: size(11.6);
      font-weight: 400;
      font-size: size(12);
      line-height: 170%;
      color: #FFFFFF;
      text-shadow: 0px size(2) size(2) rgba(0, 0, 0, 0.8);
    }
  }
  .txt {
    @apply grow h-full;
    color: #595758;
    padding-top: size(236);
    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(42);
      line-height: 150%;
      text-align: center;
    }
    .t2 {
      margin-top: size(25);
      font-weight: 400;
      font-size: size(18);
      line-height: 170%;
      text-align: center;
    }
  }
  .man {
    @apply absolute;
    bottom: 0;
    right: size(162);
    width: size(429);
    mix-blend-mode: multiply;
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s7 {
    @apply flex-col;
  height: sizem(580);
  
  .main {
    flex-basis: sizem(280);
    background-image: url('@/section/s7/bgm.jpg');
    .en {
      left: sizem(20);
        top: sizem(24);
      width: sizem(162);
    }
    .caption {
      right: sizem(33);
      bottom: sizem(3);
      font-size: sizem(12);
      text-shadow: 0px sizem(2) sizem(2) rgba(0, 0, 0, 0.8);
    }
  }
  .txt {
    @apply h-auto;
    padding-top: sizem(16);
    .t1 {
      font-size: sizem(19);
    }
    .t2 {
      margin-top: sizem(9);
      font-size: sizem(12);
    }
  }
  .man {
    @apply absolute;
    bottom: 0;
    right: sizem(93);
    width: sizem(190);
    mix-blend-mode: multiply;
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
