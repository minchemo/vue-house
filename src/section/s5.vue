<template>
  <article class="s5">
    <div class="main" data-aos="fade">
      <div class="t1" data-aos="fade-down" data-aos-delay="200">生活機能</div>
      <img data-aos="fade-down" data-aos-delay="400" src="@/section/s5/elitelocation.svg" class="t2" alt="" srcset="">
      <img data-aos="fade-down" data-aos-delay="600" src="@/section/s5/forestpark.svg" class="t3" alt="" srcset="">
      <div class="t4">實景拍攝</div>
      <div class="t5">小港森林公園</div>
      <div class="t6">情境圖</div>
      <div class="t7">SKM PARK OUTLETS</div>
    </div>
    <div class="txt">
      <div class="t1" data-aos="fade-down" data-aos-delay="200">建設更新 小港最核心</div>
      <div class="t2 whitespace-nowrap" data-aos="fade-down" data-aos-delay="400">咫尺新光SKM PARK OUTLET、高餐大學城<br/>
        桂林、漢民、小港路商圈，採買、美食最便利<br/>
        捷運小港林園延伸線核定、國道7號通過環評<br/>
        預見未來交通利多，串聯生活圈、再造精華圈</div>
      <img data-aos="fade" data-aos-delay="600" src="@/section/s5/route.png" class="route" alt="" srcset="">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  @apply relative overflow-hidden w-full bg-[#E7E7E7];
  height: size(900);
  display: flex;

  .main {
    @apply relative h-full;
    flex-basis: size(1140);
    background-image: url('@/section/s5/main.jpg');
    background-size: cover;
    color: #FFFFFF;
    .t1{
      @apply absolute;
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(30);
      line-height: 150%;
      left: size(45.6);
      top: size(559.48);
    }
    .t2 {
      @apply absolute;
      top: size(630);
      left: size(45.75);
      width: size(767.52);
    }
    .t3 {
      @apply absolute;
      top: size(503.24);
      left: size(635.99);
      width: size(424.95);
    }
    .t4{
      @apply absolute;
      font-weight: 400;
      font-size: size(12);
      right: size(15);
      top: size(671.71);
    }
    .t5{
      @apply absolute;
      font-weight: 400;
      font-size: size(12);
      left: size(8);
      bottom: size(6);
    }
    .t6{
      @apply absolute;
      font-weight: 400;
      font-size: size(12);
      left: size(466.79);
      bottom: size(6);
    }
    .t7{
      @apply absolute;
      font-weight: 400;
      font-size: size(12);
      left: size(706.79);
      bottom: size(6);
    }
  }

  .txt {
    @apply grow relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #595758;
    text-align: center;
    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(42);
      line-height: 150%;
    }
    .t2 {
      @apply relative;
      width: size(365);
      margin-top: size(18.5);
      margin-bottom: size(82.5);
      font-weight: 400;
      font-size: size(18);
      line-height: 170%;
      &:after {
        @apply absolute pointer-events-none;
        content: '';
        width: size(102.73);
        height: size(83.8);
        background-image: url('@/section/s5/bird.png');
        background-size: cover;
        background-repeat: no-repeat;
        bottom: 5.5%;
        left: 98%;
      }
    }
    .route {
      @apply pointer-events-none;
      width: size(629.98);
    }
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
    @apply flex-col;
    height: sizem(645);

  .main {
    @apply h-auto;
    flex-basis: sizem(379);
    background-image: url('@/section/s5/main_m.jpg');
    background-size: cover;
    color: #FFFFFF;
    .t1{
      font-size: sizem(12);
      left: sizem(15);
      top: sizem(249.5);
    }
    .t2 {
      top: sizem(271.5);
      left: sizem(14.5);
      width: sizem(252.47);
    }
    .t3 {
      top: sizem(231);
      left: sizem(209.2);
      width: sizem(139.79);
    }
    .t4{
      font-size: sizem(12);
      right: sizem(7.3);
      top: sizem(272.71);
    }
    .t5{
      font-size: sizem(12);
      left: sizem(5);
      bottom: sizem(3);
    }
    .t6{
      font-size: sizem(12);
      left: sizem(154);
      bottom: sizem(3);
    }
    .t7{
      font-size: sizem(12);
      left: sizem(234);
      bottom: sizem(3);
    }
  }

  .txt {
    .t1 {
      font-size: sizem(19);
    }
    .t2 {
      width: auto;
      margin-top: sizem(5);
      margin-bottom: sizem(25);
      font-size: sizem(12);
      &:after {
        width: sizem(65.54);
        height: sizem(53.39);
      }
    }
    .route {
      width: sizem(358.46);
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
