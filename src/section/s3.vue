<template>
  <article class="s3">
    <img class="t1" data-aos="fade-up" src="@/section/s3/t1.webp" alt="" srcset="">
    <div class="t2 decor" data-aos="fade-up">長耀愛林口 攜手向前走</div>
    <div class="t3">
      換屋，是追求空間換新，更是環境的升級，為此，長耀前瞻開發、精選良地，建築之外更替城市留下一片樸實綠景。今日工一園區、影視園區、國際媒體園區、三井Outlet二期等千億投資，再再預告了昔日的衛星新市鎮，向未來城市進化中，因此長耀為「愛」而愛，告別內湖前行林口，一同踏上林口的進步軌跡，看見未來顛覆你我想像的城市淘金史！
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative overflow-hidden flex flex-col items-center justify-center text-white;
  width: 100%;
  height: size(1080);
  background-color: #293217;
  font-family: 'Noto Serif TC';
  .t1{
    width: size(1035.78);
  }
  .t2 {
    @apply relative;
    margin-top: size(168.3);
    margin-bottom: size(41);
    font-weight: 700;
    font-size: size(61);
    letter-spacing: 0.05em;
    &::before {
      width: size(57.44);
      height: size(23.92);
      right: 2%;
      bottom: 0;
    }
    &::after {
      width: size(19.02);
      height: size(21.62);
      right: -2%;
      bottom: 15%;
    }
  }
  .t3 {
    width: size(940);
    font-weight: 600;
    font-size: size(20);
    line-height: 170%;
    text-align: center;
    letter-spacing: 0.05em;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
    height: sizem(667);
  .t1{
    width: sizem(310);
  }
  .t2 {
    @apply relative;
    margin-top: sizem(62.13);
    margin-bottom: sizem(24);
    font-size: sizem(25);
    &::before {
      width: sizem(43.72);
      height: sizem(18.21);
      right: -7%;
      bottom: -20%;
    }
    &::after {
      width: sizem(14.48);
      height: sizem(16.45);
      right: -5%;
      bottom: 0%;
    }
  }
  .t3 {
    width: sizem(310);
    font-size: sizem(14);
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
