<template>
  <article class="s2 relative" id="s2">
    <div class="txt">
      <img src="./s2/en.svg" class="en" alt="" data-aos="zoom-in" data-aos-delay="0" >
    <div class="t1 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="200">建築職人工藝美學<br>
高感生活專屬訂制</div>
<div class="line" data-aos="flip-left" data-aos-delay="400"></div>
    <div class="t2"  data-aos="zoom-in" data-aos-delay="600">台北口碑建商立瑾機構<br>
將北部高規高標首度引進后里<br>
從開發、規劃、施工，到永續…<br>
皆秉持初心，一條龍服務到位<br>
后里首獻，打造高感生活標竿</div>
</div>
      <img src="./s2/en_l.svg" class="en_l" alt="" data-aos="fade-up" data-aos-delay="0" >
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .s2 {
  background:#BAF0FC url("./s2/bgm.jpg") center;
  background-size:cover;
  color: #857550;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 700;
  height: sizem(667);
  padding:sizem(60) 0 0 0;
  
@media screen and (min-width: 768px) {
  background-image: url("./s2/bg.jpg");
    font-size: size(19);
  height: size(1186);
}
.txt{
@media screen and (min-width: 768px) {
  position: absolute;top:size(270);left:size(465);
}}
.en{display: block;height: .94em;margin:0 auto 1.7em;
@media screen and (min-width: 768px) {
  height: 1.19em;margin:0 auto 2em;
}
}
.t1{
 width: 100%;
  font-size: 2.3em;
  letter-spacing: 0.06em;
  margin-bottom: 0em;
  text-align: center;
  line-height: 1.3;
@media screen and (min-width: 768px) {
  font-size: 2.94em;
}
}
.line{width:5em;height: 1px;background: currentColor;margin:1.9em auto;
@media screen and (min-width: 768px) {
  margin:2.7em auto 2em auto;width:6.2em;
}
}
.t2{//font-weight:500;
  letter-spacing: 0.01em;
  font-size: 1em;margin:0em auto 0em auto;
  color: #3D3939;
  text-align: center;
  @media screen and (min-width: 768px) {
    line-height:2;
  }
}
.en_l{position: absolute;top: 1.5em;left: 0;width: sizem(28);
  @media screen and (min-width: 768px) {width: size(53);top:size(65);left:size(90);
  }
}
}

 
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>