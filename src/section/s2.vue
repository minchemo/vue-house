<template>
  <article class="s2">
   <!--   -->  <div class="txt">
    <h4 class="entitle" data-aos="fade-up" data-aos-delay="200">NEW WORLD CITY</h4>
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">前進湖子內 宜居新都心</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">掌握城市進化力量，繁華與綠帶鄰距離</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">工作在園區、生活在市區，應許夢想宜居的家</p>
   
      </div>
    <Fullview />
    <div class="caption">空拍實景電腦修飾圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden bg-[#00398A] text-[#fff];
  width: 100%;
 // height: size(1059);
  font-size:size(19);
  .txt {text-align: center;position: absolute;top: 0;left: 0;
  padding-top:0.2em;z-index: 10;margin-bottom:-10.8em ;
  }
  .viewbox{z-index: 2;}
  .caption{top: 0.5em;}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
    height: sizem(670);
  font-size:sizem(15);

  .txt {text-align: justify;
  padding-top:4.2em;width:sizem(310);margin:auto auto -4.3em auto;
  }
  .viewbox{height: sizem(550);}


  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
