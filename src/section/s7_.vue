<template>
  <article class="s7">
    <div class="a" v-if="!$isMobile()">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">拓境精品 頂級設備</div>
      <img src="@/section/ring.svg" alt="" srcset="">
      <div class="t2" data-aos="fade-up" data-aos-delay="200">集結世界優質品牌 細膩匠作</div>
      <p>此篇皆為情境示意圖</p>
    </div>
    
    <div class="a" v-else>
      <div class="t1" data-aos="fade-up" data-aos-delay="0">拓境精品 頂級設備</div>
      <div class="t2" data-aos="fade-up" data-aos-delay="200">集結世界優質品牌 細膩匠作</div>
      <img src="@/section/ring.svg" alt="" srcset="">
    </div>

    <div class="b"></div>
    <div class="c">
      <img v-if="!$isMobile()" src="@/section/s7_/map.png" alt="" srcset="">
      <img v-else src="@/section/s7_/mapm.png" alt="" srcset="">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  @apply flex flex-col items-center justify-start font-['noto_sans_tc'] text-white relative;
  width: 100%;
  height: size(1553);
  background-image: url('@/section/s7_/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .a {
    @apply relative flex flex-col items-center justify-center w-full;
    text-align: center;
    height: size(249);
    color: #5D5D5D;
    .t1 {
      font-weight: 700;
      font-size: size(40);
      letter-spacing: 0.07em;
    }
    img {
      margin: size(17) 0;
      
      width: size(48);
    }
    .t2 {
      font-weight: 700;
      font-size: size(20);
      letter-spacing: 0.07em;
    }
    p {
      @apply absolute;
      right: size(20);
      bottom: size(10);
      font-weight: 400;
font-size: size(15);
letter-spacing: 0.07em;
    }
  }
  .b {
    width: 100%;
    height: size(830.91);
    background-image: url('@/section/s7_/1.jpg');
    background-size: cover;
    background-position: center;
  }
  .c {
    @apply flex flex-1 flex-col items-center justify-center;
    img {
      width: size(1593.19);
      height: size(376.4);
    }
  }
  
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
  @apply flex flex-col items-center justify-end font-['noto_sans_tc'] text-white relative;
  width: 100%;
  height: size-m(927);
  background-image: url('@/section/s7_/bgm.jpg');
  gap: size-m(22);
  padding-bottom: size-m(28);

  .a {
    @apply block;
    height: auto;
    .t1 {
      font-weight: 700;
      font-size: size-m(20);
      letter-spacing: 0.07em;
    }
    img {
      margin-top: size-m(13);
      margin-bottom: 0;
      width: size-m(18);
    }
    .t2 {
      font-weight: 700;
      font-size: size(20);
      letter-spacing: 0.07em;
    }
    p {
      @apply absolute;
      right: size(20);
      bottom: size(10);
      font-weight: 400;
      font-size: size(15);
      letter-spacing: 0.07em;
    }
  }
  .b {
    width: size-m(328);
    height: size-m(570);
    background-image: url('@/section/s7_/1m.jpg');
    background-size: cover;
    background-position: center;
    @apply relative;
    &::after{
      content: '此篇皆為情境示意圖';
      font-family: 'Noto Sans TC';
font-weight: 400;
font-size: size-m(10);
line-height: size-m(14);
text-align: right;
letter-spacing: 0.07em;
position: absolute;
right: 0;
top: 101%;

    }
  }
  .c {
    @apply flex-grow-0;
    margin-top: size-m(78);
    img {
      width: size-m(328);
      height: size-m(79);
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
</script>
