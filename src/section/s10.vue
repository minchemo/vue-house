<template>
  <article class="s10">
    <div class="main">
      <img v-if="!$isMobile()" class="en" data-aos="fade-down" data-aos-delay="200" src="@/section/s10/en.svg" alt="" srcset="">
      <div class="caption">示意圖</div>
    </div>
    <div class="txt">
      <div class="text">
        <div class="t1" data-aos="fade-down" data-aos-delay="200">誠意保固 嚮往的「家」</div>
        <div class="t2" data-aos="fade-down" data-aos-delay="400">無論購屋、換屋族群，都是品質、價值，高CP值<br>
          買房首選「清景麟建築團隊」，就要成就您嚮往的家</div>
        <img v-if="$isMobile()" class="en" data-aos="fade-down" data-aos-delay="600"  src="@/section/s10/enm.png" alt="" srcset="">
      </div>
      <img data-aos="fade" data-aos-delay="400" src="@/section/s10/tip.png" class="tip" alt="" srcset="">
      <img data-aos="fade" data-aos-delay="600" v-if="!$isMobile()" src="@/section/s10/set.png" class="set" alt="" srcset="">
      <img data-aos="fade" data-aos-delay="600" v-else src="@/section/s10/setm.png" class="set" alt="" srcset="">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s10 {
  @apply relative overflow-hidden w-full bg-[#F1E6D6];
  height: size(900);
  .main {
    @apply relative w-full;
    height: size(660);
    background-image: url('@/section/s10/main.jpg');
    background-size: cover;
    .en {
      @apply absolute;
      top: size(252.4);
      left: size(982);
      width: size(641.2);
    }
    .caption {
      @apply absolute;
      bottom: size(8);
      left: size(16);
      font-weight: 400;
      font-size: size(12);
      text-align: center;
      color: #595758;

    }
  }
  .txt {
    @apply absolute w-full;
    bottom: size(19);
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    color: #595758;
    img {
      margin: unset;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: size(40);
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
    }
    .tip {
      width: size(323.75);
      height: size(258.95);
      padding-bottom: size(15);
    }
    .set {
      width: size(841.59);
      height: size(207.22);
    }
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s10 {
  height: sizem(766);
  background-color: transparent;
  // margin-bottom: -#{sizem(70)};
  z-index: 10;
  .main {
    height: sizem(281);
    background-image: url('@/section/s10/mainm.jpg');
    .caption {
      @apply absolute;
      bottom: unset;
      top: 100%;
      left: sizem(32.5);
      font-size: sizem(12);
    }
  }
  .txt {
    @apply absolute w-full;
    bottom: sizem(15);
    gap: sizem(14);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #595758;
    img {
      margin: unset;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 0;
      gap: sizem(14);
        .t1 {
          font-size: sizem(19);
        }
        .en {
          width: sizem(211);
        }
        .t2 {
          font-size: sizem(12);
        }
    }
    .tip {
      @apply absolute;
      width: sizem(212.94);
      height: sizem(174.32);
      padding-bottom: 0;
      bottom: 102%;
      right: 0;
    }
    .set {
      width: sizem(310);
      height: sizem(263);
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
