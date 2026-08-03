<template>
  <article class="s2">
   <!--    --> 
      <div class="txt">
        <h2 class="title" data-aos="fade-up" data-aos-delay="0"><span>新北門戶</span> 城市起飛 價值先行</h2>
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">三鐵新門戶 鶯歌新地標</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">三鶯線即將通車，城市價值正式起飛！未來捷運、台鐵、國道同步到位，「鳴日之城」坐擁2500坪完整街廓，以難得的大基地尺度，打造鶯歌珍稀少見的新地標聚落。
</p>
      </div>
    <Fullview />
    <div class="caption">基地空拍電腦修飾圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2{
  @apply relative overflow-hidden bg-[#005890] text-[#fff];
  width: 100%;
  font-size:size(18);
  z-index: 3;
  .txt {text-align: center;position: absolute;
    top: 2em;left: 0;right: 0;margin: auto;
    text-shadow: 0 0 15px #06C,0 0 3px #06CC;


  padding-top:3em;z-index: 10;
    span{
      border: 1px solid currentColor;
      display: block;
      width: fit-content;
      padding: 0em 0.5em;
    font-size: .7em;vertical-align: middle;
    color: #fff;
    margin: 0 auto 0 auto;

    }
  
  }
  .viewbox{z-index: 2;
    margin: 0 0 0 0;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
   // height: sizem(550);
  font-size:sizem(15);
  background: #0060a4;
/*   */
  .txt {//text-align: justify;
  padding-top:3.5em;width:sizem(310);margin:auto auto -4.3em auto;
      }
   
  .viewbox{height: sizem(770);
    margin:sizem(100) 0 0 0;
    top:0;}


  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>