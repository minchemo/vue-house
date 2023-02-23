<template>
  <article class="s1">
    <!--  --><img class="i0" src="./s1/pc.jpg" alt="">
    <div class="sakura">
    <div class="sakura3">
    <img src="./s1/sakura3.png" alt="">
</div>
    <img class="sakura2" src="./s1/sakura2.png" alt="">
    <img class="sakura1" src="./s1/sakura1.png" alt="">
</div>
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
  @apply relative w-full h-screen bg-[#CFD9D0];
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image:url("./s1/bg.png");
  background-size: cover;
  background-position: 50% 50%;
  .i0{position: absolute;top: 0;left: 0;width: 100%;
  opacity: .5;z-index: 3;
  }
  @keyframes sakura {
      to {
        transform:translateY(0);

      }
    }
  .sakura {
    @apply absolute;
    top: 0;
    right: 0;
    width: size(605);
    .sakura1{
    @apply relative;
    width:100%;
    right: 37%;
    top: 0%;
    transform:skewX(-6deg);
    transform-origin: 50% 0;
    animation: sakura 2s ease-in-out infinite alternate; 
  }
    .sakura2{
    @apply absolute;
    width: 48%;
    right: 0%;
    top: 30%;
    transform:rotate(3deg)skewY(3deg);
    transform-origin: 100% 100%;
    animation: sakura 2s ease-in-out infinite alternate-reverse; 
  }
    .sakura3{
    @apply absolute;
    width: 0%;
    height: auto;
    right: 9.5%;
    top: 120%;
    border-radius: 0 0 0 100%;
    animation: sakura3 8s  infinite; 
        opacity: 1;
    overflow: hidden;
    img{float: right;
    width: size(417);}
  }
  @keyframes sakura3 {
      75% {
    width: 100%;
    border-radius: 0 0 0 0%;
        opacity: 1;

      }
      80% {
    width: 100%;
        opacity: 0;
    border-radius: 0 100% 0 0%;}
      100% {
    width: 100%;
        opacity: 0;
    border-radius: 0 100% 0 0%;
      }
    }
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
