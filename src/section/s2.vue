<template>
  <article class="s3">
   <!--    <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">中央軸心盛大開場</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">重量級建設共演 台中未來從此綻放</h4>   
      </div> -->

    <Fullview />
    <picture>
  <source
    media="(max-width: 768px)"
    srcset="./s1/s2m.png"
  />
  <img
    src="./s1/s2.png"
    alt="000"
    class="mm"
  />
    <div class="caption">鳥瞰實景拍攝輔以電腦合成示意圖</div>
</picture>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative bg-[#818dc1] text-[#fff];
  width: 100%;
 // height: size(1059);
  font-size:size(15);
  .mm{width: 100%;pointer-events: none;position: absolute;
    top: 0;left: 0;z-index: 99;};
&::before{
content: "";
width: 100%;
height: 3em;
display: block;
position: absolute;
pointer-events: none;z-index: 3;
left: 0;background: linear-gradient(to bottom,#818dc100,#818dc1,#818dc100 );
top: 0;transform: translateY(-50%);}
@media screen and (max-width: 767px) {
  padding:sizem(100) 0 sizem(60) 0;
  height: sizem(750);
  font-size:sizem(12);
}

.caption{position: absolute;
  padding:.5em;
  bottom: 0;
  left: 0;
@media screen and (max-width: 767px) {
  bottom: sizem(60);

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