<template>
  <article class="s2">
    <div class="bg">
      <img data-aos="fade-down" data-aos-delay="200" src="./s2/bg.jpg" alt="" srcset="" />
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
  @apply relative overflow-hidden w-full bg-[#2B4D39];
 height: size(2000);
  background-size: cover;
  background-position: left top ;
  .bg{ @apply absolute;
    height: 100%;
    img{@apply absolute;bottom: 0;left: 0;}
  }
  .txt {
  @apply relative;z-index: 2;
    text-align: center;
    color: #fff;
      line-height: 1.5;
      font-size: size(32);
      font-weight: 400;
letter-spacing: 0.1em;
text-indent: 0.1em;
    .t1 {
      font-size:2em;
      line-height: size(60);
    }
    .l{width: 1px; height: 2em;background: currentColor;margin: auto;}
    .t2 {
      font-weight: 400;
letter-spacing: 0.71em;
      color: #DFDDC8;
text-indent: 0.71em;
    }
    .t3 {
      font-size:1.56em;
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
