<template>
  <article class="s2">
    <!--   -->
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">自成一隅繁華，也近一城核心。</h3>
      <p class="desc" data-aos="fade-up" data-aos-delay="400">
        「春陽沄集」整排臨路店面,自帶繁華氣息,也貼近內埔核心,擁天后宮、廣濟路、文化路3大商圈,同享國道三號、未來義大健康園區,百億建設座落、人潮車流並進,一墅搶進財位,傳家致富正當時! </p>

    </div>
    <Fullview />
    <div class="caption">基地空拍實景經後製修飾</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden bg-[#00398A] text-[#fff];
  width: 100%;
  // height: size(1059);
  font-size: size(19);

  .txt {
    text-align: center;
    position: relative;
    padding-top: 3.2em;
    z-index: 10;
    margin-bottom: -9.3em;
  }

  .viewbox {
    z-index: 2;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
    // height: sizem(550);
    font-size: sizem(15);

    .txt {
      text-align: justify;
      padding-top: 4.2em;
      width: sizem(310);
      margin: auto auto -4.3em auto;
    }

    .viewbox {
      height: sizem(550);
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
