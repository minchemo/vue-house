<template>
  <article class="s8">
    <div class="left">
      <img class="t1" data-aos="fade-down" data-aos-delay="200" src="@/section/s8/logo.svg" alt="" srcset="">
      <div class="t2" data-aos="fade-down" data-aos-delay="400">飯店尊榮加值服務</div>
      <div class="t3" data-aos="fade-down" data-aos-delay="600">史上最強品牌結盟！「台南晶英酒店」跨界尊榮加值服務：<br>
        運動、共學、私廚、花藝或活動…結合多功空間生活饗宴</div>
      <div class="imgs">
        <img data-aos="fade" data-aos-delay="800" v-if="!$isMobile()" src="@/section/s8/1.png" alt="" srcset="">
        <img data-aos="fade" data-aos-delay="800" v-else src="@/section/s8/1m.png" alt="" srcset="">
        <img data-aos="fade" data-aos-delay="1000" v-if="!$isMobile()" src="@/section/s8/2.png" alt="" srcset="">
        <img data-aos="fade" data-aos-delay="1000" v-else src="@/section/s8/2m.png" alt="" srcset="">
        <img data-aos="fade" data-aos-delay="1200" v-if="!$isMobile()" src="@/section/s8/3.png" alt="" srcset="">
        <img data-aos="fade" data-aos-delay="1200" v-else src="@/section/s8/3m.png" alt="" srcset="">
      </div>
    </div>
    <div class="right" data-aos="fade" data-aos-delay="200">
      <img class="en" data-aos="fade-down" data-aos-delay="400" src="@/section/s8/en.svg" alt="" srcset="">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8{
  @apply relative overflow-hidden w-full bg-[#727171];
  height: size(900);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: size(211);
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    .t1 {
      width: size(206);
      margin-bottom: size(35);
    }
    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(42);
      line-height: 150%;
      text-align: center;
      margin-bottom: size(16.5);
    }
    .t3 {
      font-weight: 400;
      font-size: size(18);
      line-height: 170%;
      text-align: center;
      margin-bottom: size(57.11);
    }
    .imgs {
      display: flex;
      gap: size(16.5);
      img {
        width: size(237.64);
      }
    }
  }
  .right {
    @apply relative;
    width: size(780);
    height: size(772);
    background-image: url('@/section/s8/main.jpg');
    background-size: cover;
    .en {
      @apply absolute;
      width: size(76);
      right: size(30.24);
      bottom: size(17.28);
    }
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s8 {
  @apply flex-col-reverse;
  height: sizem(580);
  gap: sizem(14);
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    .t1 {
      width: sizem(85.89);
      margin-bottom: sizem(6.32);
    }
    .t2 {
      font-size: sizem(19);
      margin-bottom: sizem(4);
    }
    .t3 {
      font-size: sizem(12);
      margin-bottom: sizem(18);
    }
    .imgs {
      display: flex;
      gap: sizem(6.87);
      img {
        width: sizem(99.08);
      }
    }
  }
  .right {
    width: 100%;
    height: sizem(277);
    background-image: url('@/section/s8/mainm.jpg');
    .en {
      width: sizem(25);
      right: sizem(331);
      bottom: sizem(15);
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
