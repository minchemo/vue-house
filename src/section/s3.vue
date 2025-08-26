<template>
  <article class="s3 relative" id="s3">
    <div class="txt">
      <img src="./s3/en.svg" class="en" alt="" data-aos="zoom-in" data-aos-delay="0" >
    <div class="t1 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="200">約3分鐘后科生活圈<br />
生活從容切換</div>
<div class="line" data-aos="flip-left" data-aos-delay="400"></div>
    <div class="t2"  data-aos="zoom-in" data-aos-delay="600">左轉后科，瞬抵菁英事業舞台<br />
右轉市心，享受繁華便利機能<br />
剛好的距離，承接城市與自然<br />
繁華轉境，品味悠然自在的美好
</div>
</div>
      <img src="./s3/en_l.svg" class="en_l" alt="" data-aos="fade-up" data-aos-delay="0" >
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

  .s3 {
  background:#BAF0FC url("./s3/bgm.jpg") center;
  background-size:cover;
  color: #857550;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 700;
  height: sizem(667);
  padding:sizem(60) 0 0 0;
  
@media screen and (min-width: 768px) {
  background-image: url("./s3/bg.jpg");
    font-size: size(19);
  height: size(1186);
}
.txt{
@media screen and (min-width: 768px) {
  position: absolute;top:size(270);right:size(230);
}}
.en{display: block;height: .94em;margin:0 auto 1.7em;
@media screen and (min-width: 768px) {
  height: 1.19em;margin:0 auto 2em;
 // width: size(118);
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
.en_l{position: absolute;top: 1.5em;right: 0;width: sizem(22);
  @media screen and (min-width: 768px) {width: size(41);top:size(75);right:size(60);
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