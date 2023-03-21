<template>
  <article class="s2">
    <div class="t1" data-aos="fade-up" data-aos-delay="0">建築能量 拓開眼界</div>
    <img class="r" src="@/section/ring.svg" alt="" srcset="">
    <div class="t1" data-aos="fade-up" data-aos-delay="200">簡練色系 鋪敘大器</div>
    <p class="t2" data-aos="fade-up" data-aos-delay="400">以白色框架，敘說沉穩的建築個性，<br>
      利用黑白框架與高低配置，<br>
      豐富了建築天際線。</p>
    <div class="sep"></div>
    <img class="building" src="@/section/s2_/building.png" alt="" srcset="">
    <div class="cap">泰嘉拓真素模示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply flex flex-col items-center justify-end font-['noto_sans_tc'] text-white relative;
  width: 100%;
  height: size(1232);
  background-image: url('@/section/s2_/bg.jpg');
  background-size: auto 100%;
  background-position: center right;
  background-repeat: no-repeat;
  
  .t1 {
    font-weight: 700;
    font-size: size(40);
    line-height: size(58);
    letter-spacing: 0.07em;
  }
  .t2 {
    font-weight: 400;
    font-size: size(20);
    line-height: size(29);
    letter-spacing: 0.07em;
    text-align: center;
    margin-top: size(22);
  }

  .r {
    width: size(48);
    margin: size(25) 0;
  }

  .sep {
    width: size(1);
    height: size(110);
    background-color: #fff;
    margin-top: size(29);
  }

  .building {
    @apply relative;
    width: size(1037);
  }
  
  .cap {
      position: absolute;
      left: size(500);
      bottom: size(107);
      font-size: size(15);
      letter-spacing: 0.07em;
      color: #6C6C6C;
      font-weight: 400;
    }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s2 {
    height: size-m(509);
    background-image: url('@/section/s2_/bgm.jpg');
    background-size: cover;
    padding-bottom: size-m(20);
  .t1 {
    font-size: size-m(20);
    line-height: size-m(29);
  }
  .t2 {
    font-size: size-m(12);
    line-height: size-m(25);
    margin-top: size-m(0);
  }

  .r {
    width: size-m(20.39);
    margin: size-m(12) 0;
  }

  .sep {
    width: sizem(1);
    height: size-m(38);
    margin-top: size-m(13);
  }

  .building {
    @apply relative;
    width: size-m(359);
    margin-right: 0;
  }
  
  .cap {
      left: size-m(10);
      bottom: size-m(15);
      font-size: size-m(10);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
