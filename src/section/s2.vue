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
    <div class="caption">圖說</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2{
  @apply relative overflow-hidden bg-[#005890] text-[#fff];
  width: 100%;
 // height: size(1059);
  font-size:size(18);
  .txt {text-align: center;position: absolute;
    top: 0;left: 0;right: 0;margin: auto;


  padding-top:3em;z-index: 10;//margin-bottom:-6.3em ;
    text-shadow: 0 0 10px #003838,0 0 3px #003838;
    span{
      border: 1px solid currentColor;
      display: block;
      width: fit-content;
      padding: 0em 0.5em;
    font-size: .7em;vertical-align: middle;
    color: #fff;
    margin: 0 auto 0 auto;

    }
  
  //.subtitle{font-size: 1.4em;margin-top: .2em;letter-spacing: 0.4em;font-weight: 300;}
  }
  .viewbox{z-index: 2;
    margin: 0 0 0 0;
   // top: -5vw;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
   // height: sizem(550);
  font-size:sizem(15);
  background: #007CBB;
/*   */
  .txt {//text-align: justify;
  padding-top:3.5em;width:sizem(310);margin:auto auto -4.3em auto;
      }
   
  .viewbox{height: sizem(770);
    margin:sizem(0) 0 0 0;
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