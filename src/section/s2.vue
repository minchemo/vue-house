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
  font-size:size(28);
  .txt {text-align: center;position: absolute;top: 0;left: 0;
  padding-top:2.3em;z-index: 10;margin-bottom:0;
  .entitle{
    @apply font-['Noto_serif_TC',serif];
    font-size: 2.7em;letter-spacing: 0.05em;
    line-height: 1.5;opacity: .5;
  }
  .title{
    margin:0 auto 0em auto;
    font-size: 3em;letter-spacing: 0.2em;color: #FCFF94;
    &::after,
    &::before{display: none;}
  }
  .subtitle{
    @apply font-['Noto_Sans_TC',sans-serif];
    font-size: 1.3em;
    font-weight: 400;
    margin:0.4em auto 0em;
    line-height: 1.2;letter-spacing: 0.04em;
  }
  .desc{
    font-size: 1.4em;letter-spacing: 0.04em;
      color: #fff;
  }

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
  padding-top:4.2em;width:100%;margin:auto auto -4.3em auto;
text-align: center;position: absolute;top: 0;left: 0;right: 0;
z-index: 10;
  .entitle{
    font-size: 1.5em;
    margin-bottom: .1em;
  }
  .title{
    font-size: 1.8em;letter-spacing: 0.12em;
    margin-bottom: .7em;
  }
  .subtitle{
    font-size: 1em;
    font-weight: 400;
    margin:0.4em auto 0em;
    line-height: 1.2;letter-spacing: 0.04em;
  }
  .desc{
    font-size: 1em;letter-spacing: 0.04em;
  }

  }
  .viewbox{height: sizem(670);}


  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
