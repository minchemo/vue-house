<template>
  <article class="s1">
    <img class="i0" src="./s1/pc.jpg" alt="">
    <div class="txt">
    <img class="logo" data-aos="zoom-in" data-aos-duration="800" src="@/section/s1/logo.svg" alt="" srcset="">
    <div class="t1">十足天地  十足人生
</div>
    <div class="t2">｜5MINS梅花湖｜60-65坪｜太陽能電梯別墅｜</div>
    <div class="t3">搶先預約</div>
</div>


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative overflow-hidden w-full h-screen bg-[#CFD9D0];
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .i0{position: absolute;top: 0;left: 0;width: 100%;
  opacity: .5;
  }
  .txt {
    @apply absolute;
    right:size(110);
    top: size(480);
font-weight: 700;
font-size:size(26);
text-align: center;
  }

  .logo {
    width: size(229);
    margin-bottom: .7em;
  }
  .t1 {
color: #4B6730;
font-weight: 900;
font-size:2em;
letter-spacing: 0.165em;
  }
  .t3 {
color: #4B6730;
font-size:1.85em;
font-weight: 500;
letter-spacing: 0.66em;
    margin-top: 1.5em;
    &::after,&::before{
      content: "";
      width: 2em;
      height: 2px;
      margin: 0 0.33em 0 -0.33em;
      background: currentColor;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .bird {
    @apply absolute;
    width: size(505.45);
    left: size(813.36);
    bottom: size(191.55);
    animation: fly 5s linear infinite alternate-reverse;  
    transform: rotate(0);

    @keyframes fly {
      to {
        transform:translateY(-20%)scale(1.2)rotate(-10deg);

      }
    }
  }
  .tree {
    width: size(1013.92);
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: sizem(604);
    max-height: sizem(604);

  .logo {
    width: sizem(207.78);
    margin-bottom: sizem(37.08)
  }
  .t1 {
    width: sizem(155.56);
    margin-bottom: sizem(97.23)
  }
  .bird {
    @apply absolute;
    width: sizem(320.22);
    left: sizem(31.28);
    bottom: sizem(122.5);
  }
  .tree {
    width: 100%;
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
