<template>
  <article class="s2">
    <div class="bg" data-aos="fade-up" data-aos-delay="200">
    <div class="cloud"></div>
      <img src="./s2/bg.jpg" alt="" srcset="" />
    </div>
    <div class="txt">    
      <div class="t1" data-aos="fade-down">如果 可以選擇</div>
      <div class="l" data-aos="fade-down" data-aos-delay="200"></div>
      <div class="t2" data-aos="fade-down" data-aos-delay="400">The Best Choice ‧ New Second Life</div>
      <div class="t3" data-aos="fade-down" data-aos-delay="600">晴耕雨讀 田園詩夢</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden w-full;
 height: size(2000);
  background-size: cover;
  background-position: left top ;
  .bg{ @apply absolute;
    height: 100%;top: 0;left: 0;width: 100%;
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
    animation: cloud 20s linear infinite ; 
background-size: 50% auto;}
img{@apply absolute;bottom: 0;left: 0;}
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
margin:size(330) auto auto;
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
