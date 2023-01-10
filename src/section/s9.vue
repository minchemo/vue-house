<template>
  <article class="s9">
    <div class="txt">
      <img class="t1" data-aos="fade" data-aos-delay="200" src="@/section/s9/selectedby.svg" alt="" srcset="">
      <div class="t2" data-aos="fade-down" data-aos-delay="400">社區公設選書合作</div>
      <div class="t3" data-aos="fade-down" data-aos-delay="600">小港第一次！日系書店<br />
        「TSUTAYA BOOKSTORE」延伸公設品味<br />
        以專業選書、定期更換生活主題成列，<br />
        讓閱讀的美好，更倍感豐富
      </div>
    </div>
    <img class="girl" data-aos="fade" data-aos-delay="200" src="@/section/s9/girl.png" alt="" srcset="">
    <img class="en" data-aos="fade-down" data-aos-delay="400" src="@/section/s9/en.svg" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9{
  @apply relative overflow-hidden w-full;
  height: size(900);
  background-image: url('@/section/s9/bg.jpg');
  background-size: cover;
  .txt {
    @apply absolute text-center;
    top: size(155);
    left: size(753);
    color: #231815;
    .t1 {
      width: size(285.98);
    }
    .t2 {
      font-weight: 400;
      font-size: size(36);
      line-height: 170%;
      text-align: center;
      margin: size(8) 0;
    }
    .t3 {
      font-weight: 400;
      font-size: size(18);
      line-height: 170%;
      text-align: center;
    }
  }
  .girl {
    @apply absolute pointer-events-none;
    width: size(882.83);
    left: 0;
    bottom: 0;
    animation: float 2s ease-in-out alternate-reverse infinite;
    @keyframes float {
      from { 
        transform: translateY(0);
      }
      to {
        transform: translateY(3%);

      }
    }
  }
  .en {
    @apply absolute;
    width: size(923.46);
    right: size(100);
    bottom: size(15);
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s9 {
  height: sizem(572);
  background-image: url('@/section/s9/bgm.jpg');
  .txt {
    top: sizem(88);
    left: sizem(76);
    .t1 {
      width: sizem(152);
    }
    .t2 {
      font-size: sizem(19);
      margin: 0;
    }
    .t3 {
      margin-top: sizem(6);
      font-size: sizem(12);
    }
  }
  .girl {
    @apply absolute pointer-events-none;
    width: sizem(325);
    left: sizem(10);
    bottom: sizem(114);
    animation: float 2s ease-in-out alternate-reverse infinite;
    @keyframes float {
      from { 
        transform: translateY(0);
      }
      to {
        transform: translateY(3%);

      }
    }
  }
  .en {
    @apply absolute;
    width: sizem(290);
    right: sizem(68);
    bottom: sizem(25);
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
