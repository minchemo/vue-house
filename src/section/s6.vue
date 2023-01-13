<template>
  <article class="s6">
    <div class="main">
      <img class="t1" data-aos="fade" data-aos-delay="0" src="@/section/s6/sumitomo.svg" alt="" srcset="">
      <img v-if="!$isMobile()" data-aos="fade" data-aos-delay="200" class="t2" src="@/section/s6/case.png" alt="" srcset="">
      <img v-else class="t2" data-aos="fade" data-aos-delay="200" src="@/section/s6/case_m.png" alt="" srcset="">
      <img class="t3" data-aos="fade-down" data-aos-delay="400" src="@/section/s6/safetyhouse.svg" alt="" srcset="">
      <div class="t4" data-aos="fade-down" data-aos-delay="600">小港首座 世界級の制震宅</div>
      <div class="t5" data-aos="fade-down" data-aos-delay="800">日本國寶唯一指定級「住友橡膠GRAST制震」<br />
        台日豪宅大樓級頂尖規劃，減震、抗風力第一等<br />
        森林公園唯一制震地標景觀，清景麟捨得給您最好</div>
    </div>
    <img v-if="!$isMobile()" class="cloud" src="@/section/s6/cloud.png" alt="" srcset="">
    <img v-else class="cloud" src="@/section/s6/cloud_m.png" alt="" srcset="">
    <img v-if="!$isMobile()" data-aos="fade" data-aos-delay="200" class="building" src="@/section/s6/building.png" alt="" srcset="">
    <img v-else data-aos="fade" data-aos-delay="200" class="building" src="@/section/s6/building_m.png" alt="" srcset="">
      <div class="caption">建築外觀3D示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  @apply relative overflow-hidden w-full;
  height: size(900);
  background:  #91c4e4 ;
  .main {
    @apply relative h-full z-10;
    top: 0;
    left: 0;
    width: size(1168);
    background: linear-gradient(90deg, #99B9DA 0%, #9EC3E1 56.77%, rgba(158, 195, 225, 0.94984) 70.55%, rgba(159, 196, 226, 0.87042) 75.68%, rgba(160, 197, 226, 0.626506) 82.71%, rgba(163, 201, 229, 0) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-right: size(150);
    color: #fff;
    
    .t1 {
      width: size(331.97);
      margin-bottom: size(19.62);
    }
    .t2 {
      width: size(599.02);
      margin-bottom: size(43.91);
    }
    .t3 {
      width: size(623.73);
      margin-bottom: size(41.18);
    }
    .t4 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(42);
      text-align: center;
      margin-bottom: size(21);
    }
    .t5 {
      font-weight: 400;
      font-size: size(18);
      line-height: 170%;
      text-align: center;
    }
  
  }
    .caption {
      @apply absolute;
      right: 1.5em;
      bottom: 1em;
      font-weight: 400;
      font-size: size(12);
      color: #FFF;
    }
  .cloud {
    @apply absolute;
    height: 100%;
    left: size(240);
    top: 0;
    animation: move 20s ease-in-out alternate-reverse infinite;
    @keyframes move {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(10%);
        }
    }
  }
  .building {
    @apply absolute;
    height: 100%;
    right: 0;
    top: 0;
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
  height: sizem(584);
  .main {
    @apply relative h-full z-10;
    width: 100%;
    background: none;
    justify-content: flex-start;
    padding-right: 0;
    padding-top: sizem(48);
    
    .t1 {
      width: sizem(171.8);
      margin-bottom: sizem(10.15);
    }
    .t2 {
      width: sizem(310);
      margin-bottom: sizem(9.63);
    }
    .t3 {
      width: sizem(227.8);
      margin-bottom: sizem(19.5);
    }
    .t4 { 
      font-size: sizem(19);
      margin-bottom: sizem(5);
    }
    .t5 {
      font-size: sizem(12);
    }
  
  }
    .caption {
      font-size: sizem(12);
    }
  .cloud {
    @apply absolute;
    height: sizem(277.68);
    left:unset;
    right: 0;
    bottom: 0;
    top: unset;
    animation: move 12s ease-in-out alternate-reverse infinite;
    @keyframes move {
        from {
          transform: translateX(5%);
        }
        to {
          transform: translateX(15%);
        }
    }
  }
  .building {
    top: unset;
    bottom: 0;
    height: sizem(342.55);
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
