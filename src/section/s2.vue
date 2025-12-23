<template>
  <article class="s2">
    <!--   -->
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">桃園核心精華 小檜溪重劃區</h3>
      <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">雙溪匯聚，五大主題公園，站前、中正藝文、大有三大商圈環抱</h4>
    </div>
    <Fullview />
    <div class="caption">空拍實景美化圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden bg-[#005890] text-[#fff];
  width: 100%;
  // height: size(1059);
  font-size: size(20);

  .txt {
    text-align: center;
    position: relative;
    padding-top: 1.8em;
    z-index: 10;
    margin-bottom: -6.3em;
    padding-bottom: 2.5em;

    .title {
      font-size: 2em;
      font-weight: 700;
    }

    .subtitle {
      font-size: 1.25em;
      margin-top: .4em;
      font-weight: 500;
    }
  }

  .viewbox {
    z-index: 2;
    margin: 0 0 -5vw 0;
    top: -5vw;
  }

  .caption {
    position: absolute;
    bottom: size(20);
    left: size(20);
    z-index: 3;
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
      //text-align: justify;
      padding-top: 1.3em;
      width: sizem(310);
      margin: auto auto -9.5em auto;

      .title {
        font-size: 1.5em;
      }

      .subtitle {
        font-size: 1em;
        font-weight: 400;
      }
    }

    .viewbox {
      height: sizem(550);
      margin: 0;
      top: 0;
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
