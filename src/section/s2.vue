<template>
  <article class="s2">
    <div class="bg" uk-parallax="viewport:.7;y:0,-30%,-30%; easing: 1" >
    <div class="cloud"></div>
      <img src="./s2/bg.jpg" alt="" srcset="" />
    </div>
    <div class="txt" uk-parallax="viewport:.6;y:80%,60%,50%,30%">
      <div class="t1" data-aos="zoom-in" data-aos-duration="0" >如果 可以選擇</div>
      <div class="l" data-aos="zoom-in" data-aos-duration="200" ></div>
      <div class="t2" data-aos="zoom-in" data-aos-duration="400" >The Best Choice ‧ New Second Life</div>
      <div class="t3" data-aos="zoom-in" data-aos-duration="800" >晴耕雨讀 田園詩夢</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden w-full;
  height: size(1400);
  background-size: cover;
  background-position: left top ;

&::after{
  @apply absolute;
  bottom: 0;left: 0;content: "";
  display: block;
  width: 100%;
 height: size(300);
 background: linear-gradient(to bottom, rgba(75,103,48,0) 0%,rgba(75,103,48,1) 100%);
}
  .bg{ @apply absolute;top: 0;left: 0;width: 100%; height: size(2000);
background: linear-gradient(to bottom,  rgba(18,112,205,1) 0%,rgba(18,167,229,1) 22%,rgba(19,203,235,1) 35%,rgba(161,221,235,1) 43%,rgba(188,219,230,1) 50%);
   
  @keyframes cloud {
      to {
        transform:translateY(0);

      }
    }
.cloud{@apply relative;
  z-index: 1;
  width: 200%;
 height: size(700);
 margin-top: size(495);
  background-image: url("./s2/cloud.png");
    transform:translateX(-50%);
    transform-origin: 50% 0;
    animation: cloud 130s linear infinite ; 
background-size: 50% auto;}
img{@apply absolute;bottom: 0;left: 0;width: 100%;}
  }
  .txt {
  @apply relative;
  z-index: 2;
    text-align: center;
    color: #fff;
      line-height: 1.5;
      font-size: size(32);
      font-weight: 400;
letter-spacing: 0.1em;
text-indent: 0.1em;
margin:size(0) auto auto;
    .t1 {
      font-size:2.1em;
      line-height: size(60);
    }
    .l{width: 1px; height: 2.2em;background: currentColor;margin:.8em auto .2em auto;}
    .t2 {
      font-weight: 400;
letter-spacing: 0.71em;
      color: #DFDDC8;
text-indent: 0.71em;
    }
    .t3 {
      font-size:1.56em;margin:.05em auto auto auto;
    }
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  height: sizem(550);
&::after{
 height: sizem(60);
}
  .bg{
  height: sizem(790);
    background: linear-gradient(to bottom,  rgb(13, 107, 202) 0%,rgba(18,167,229,1) 43%,rgba(19,203,235,1) 55%,rgba(161,221,235,1) 61%,rgba(188,219,230,1) 66%);
.cloud{
  width: 200%;
 height: sizem(140);
 margin-top: sizem(420);}
img{
  left: -25%;width: 140%;
}
}
  .txt {
      font-size: sizem(12);
margin:sizem(5) auto auto;
    .t1 {
    }
    .l{height: 4.2em;margin:2.8em auto 1.7em auto;}
    .t2 {
letter-spacing: 0.3em;
text-indent: 0.3em;
    }
    .t3 {
      font-size:1.7em;margin:.4em auto auto auto;
    }
  }
  }
}
</style>
<script setup>
//import UIkit from 'uikit';
//import Icons from 'uikit/dist/js/uikit-icons';
import {  computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
