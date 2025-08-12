<template>
  <article class="s3 relative" id="s3">
    <div class="top">
      <div class="line1"></div>
    <div class="t1 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="0">大南港時代<span>NEXT新未來</span></div>
    <div class="t2" data-aos="zoom-in" data-aos-delay="200">440公頃東區門戶計畫，劃時代的宏偉序章<br />
南港，正以驚人的速度與規模<br />
蛻變為台灣鏈結世界的嶄新門戶</div>
      <div class="line2"></div>
    <div class="t3" data-aos="zoom-in" data-aos-delay="400">南港展覽館1、2館、南港軟體園區1-3期、<br v-if="isMobile" />中信金融園區、<br v-if="!isMobile" />台北漢來大飯店、三井Lalaport等AI科技、<br v-if="isMobile" />百貨商場、國際飯店匯聚的繁華萬象；<br />
南港四鐵共構車站、3高3捷3快<br v-if="isMobile" />鏈結城市每一寸肌理，<br />
定義著前所未有的大南港生活。</div>
      <img src="./s3/logo.png" class="logo" alt="梓園"  data-aos="zoom-in" data-aos-delay="600">

</div>
<div class="bottom">
    <div class="t4" data-aos="zoom-in" data-aos-delay="0">時間從不等待，它將篩選出，懂得收藏的人<br v-if="isMobile" />美好實現值得你來見證 你，準備好了嗎？</div>
    <div class="t5" data-aos="zoom-in" data-aos-delay="200">邀請你，預見它 2-3房 即將公開</div>
</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;top:0px;left: 0; pointer-events: none;z-index: 9;opacity: .2;}
@keyframes an {
  20% {
    transform: scale(2,.3);opacity: .3;
  }
  30% {
    transform: scale(6,.5);opacity: 0;
  }
  40% {
    transform: scale(.03,.01);opacity: 0;
  }
  100% {
    opacity: 1;
  }

}
  .s3 {
  font-size: sizem(13);
@media screen and (min-width: 768px) {
    font-size: size(26);

}
  .top {
  color: #fff;
  line-height: 1.7;
  background: url("./s3/bgm.jpg"); 
  background-size:cover;
  padding:0 0 sizem(35) 0;
  
@media screen and (min-width: 768px) {
    padding:size(0) 0 size(55) 0;
    background-image:url("./s3/bg.jpg"); 
}
.line1{height:sizem(70);width: 1px;background: #fff;margin:0 auto sizem(25) auto;position: relative;z-index: 3;
  
@media screen and (min-width: 768px) {
  height:size(160);
  margin:0 auto size(25) auto;
}
}
.line2{height:sizem(25);width: 1px;background: #fff;margin:0 auto sizem(15) auto;position: relative;z-index: 3;
@media screen and (min-width: 768px) {
  height:size(80);margin:0 auto 0 auto;
}
}
.t1{
 width: 100%;
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: 0.06em;
  margin-bottom: .8em;
  text-align: center;
  line-height: 1.3;
@media screen and (min-width: 768px) {
  font-weight: 700;font-size: 2.51em;
  margin-bottom: .2em;
  line-height: 1.7;

}
span{display: block;
  
@media screen and (min-width: 768px) {margin-left: .8em;display: inline-block;}
}
}
.t2{font-weight:500; letter-spacing: 0.01em;
  font-size: 1em;margin:1em auto 1.5em auto;
  width:sizem(310);
  text-align: center;
  @media screen and (min-width: 768px) {
    margin: 0em auto 2em auto;width:size(1100);
  }
}
.t3{font-weight:500; letter-spacing: 0.01em;
  font-size: 1em;margin: 1em 0 0em 0em;
  text-align: center;
  @media screen and (min-width: 768px) {   
font-size: 1.06em;margin: 1.8em auto 0em auto;width:size(1100);
  }
}
.logo{
  width:sizem(85);margin:sizem(200) auto auto auto;display: block;mix-blend-mode: overlay;
  @media screen and (min-width: 768px) {   
    width:size(165);margin:size(105) auto auto auto;
  }
}
}

  .bottom {
  color: #036eb5;
  line-height: 1.7;
  background: url("./s3/bg2m.jpg"); 
  background-size:cover;
  padding: sizem(20) 0 sizem(50) 0;
  text-align: center;


 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    padding:size(105) 0 size(55) 0;
    background-image:url("./s3/bg2.jpg"); 
    font-size: size(34);
}
.t5{background: #036eb5;color: #fff;width: sizem(220);margin:.7em auto 0;
@media screen and (min-width: 768px) {width: size(600);
}
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