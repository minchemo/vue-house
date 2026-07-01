<template>
  <article class="s4">
   <!--  -->   <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">美麗島站
天生麗址 萬中選一</h3>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="0">1核、2軸、3線 聯開動能爆發
精彩生活一鍵啟動
</div>
      <p class="desc" data-aos="fade-up" data-aos-delay="0">「[華雄·明日之星]約250米散步美麗島站、
前瞻新站特區，<br v-if="isMobile" />明星級地段×世界級未來眾星拱月，引領全城目光!
</p>
      <div class="en font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">CENTRAL CITY<span>One Click to a Brilliant Life.</span></div>
      </div>
    <Fullview />
    <div class="caption">空拍實景經電腦後製</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  @apply relative overflow-hidden text-[#fff];
  width: 100%;
  font-size:sizem(12);
  height:sizem(604);
  background: url("./s4/bg.jpg") center center;
  background-size: cover;

  
  @media screen and (min-width: 768px) {
  font-size:size(22);
  height:size(1070);

    
  }
  .txt {text-align: center;position: absolute;
    top: 0;left: 0;right: 0;margin: auto;
    pointer-events: none;

  padding-top:5.4em;z-index: 10;//margin-bottom:-6.3em ;
  
  .subtitle{}

  .en{position: absolute;
    top: sizem(530);
    line-height: 1.45;
    left: .5em;
text-align: left ;
    span{display: block;font-size: .4em;}
  @media screen and (min-width: 768px) {
    top: size(890);
    left: size(320);
    line-height: 1.1;
    span{font-size: .3em;}

  }
  }
  }
  .viewbox{height: sizem(604);
    margin:0;
    top:0;
  @media screen and (min-width: 768px) {
    height:100%;
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