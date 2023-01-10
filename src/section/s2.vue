<template>
  <article class="s2">
    <div class="txt">
      <div class="t1" data-aos="fade-down">綠海擁恆 國家唯1</div>
      <div class="t2" data-aos="fade-down" data-aos-delay="200">第<span class="t-one">1</span>排 <span class="t-three">3</span>萬坪森林公園首排<br />
        第<span class="t-one">1</span>等 國際級建材豪規配置<br />
        不<span class="t-one">1</span>樣 品牌結盟新生活型態</div>
    </div>
    <img data-aos="fade-down" data-aos-delay="200" src="@/section/s2/logo.png" class="logo" alt="" srcset="">
    <img v-if="!$isMobile()" src="@/section/s2/1.png" class="one" alt="" srcset="">
    <img v-else src="@/section/s2/1_m.png" class="one" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden w-full bg-[#2B4D39];
  height: size(1080);
  background-image: url('@/section/s2/bg.jpg');
  background-size: contain;
  background-position: left bottom ;
  .txt {
    @apply absolute;
    z-index: 1;
    color: #fff;
    left: size(865.46);
    bottom: size(238.36);
    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(42);
      line-height: size(60);
      letter-spacing: 0.1em;
    }
    .t2 {
      font-weight: 500;
      font-size: size(24);
      line-height: 150%;
      letter-spacing: 0.1em;
      .t-one{
        font-size: size(36);
        line-height: size(54);
      }
      .t-three{
        font-size: size(28);
        line-height: size(42);
      }
    }
  }
  .logo {
    @apply absolute;
    width: size(150);
    top: size(50);
    left: size(53);
  }
  .one {
    @apply absolute;
    width: size(871.57);
    top: 0;
    left: size(331.05);
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  height: sizem(604);
  background-image: url('@/section/s2/bg_m.jpg');
  .txt {
    left: sizem(170.66);
    bottom: sizem(160.3);
    .t1 {
      font-size: sizem(20);
      line-height: sizem(29);
    }
    .t2 {
      font-size: sizem(12);
      .t-one{
        font-size: sizem(18);
        line-height: sizem(27);
      }
      .t-three{
        font-size: sizem(14);
        line-height: sizem(21);
      }
    }
  }
  .logo {
    width: sizem(107.89);
    top: sizem(50);
    left: sizem(24);
  }
  .one {
    width: sizem(335);
    top: sizem(14.38);
    left: 0;
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
