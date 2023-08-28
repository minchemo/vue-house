<template>
  <article class="s2">
    <div class="txt">
<ul class="desc">
  <li data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">從世界回台灣，從台北回高雄</li>
  <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">高大Σ計畫－打造科技極地理想國</li>
  <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">邀請你一起看見高雄的世界級<br />　</li>
  <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">台積電拍板先進製程園區設廠</li>
  <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">高雄大學城串聯Σ科技城市最進化</li>
  <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">雙捷運海景第一排全能建築</li>
  <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">人脈X金脈讓高雄再次偉大<br />　</li>
  <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">台灣十大建商超遠見</li>
  <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">大台北重劃推手之王</li>
  <li data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">高大特區最華麗的一極</li>
  <li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">即將與您相見</li>
</ul>
    </div>
    <div class="img">
      <div class="t1"><img data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" src="./s2/logo.svg" alt="" srcset=""></div>
      <div class="t2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" v-if="!$isMobile()">台灣十大建商 前進高雄代表作</div>
      <div class="t3" v-if="!$isMobile()"><img data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" src="./s2/t3.svg" alt="" srcset=""></div>
      <div class="t4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">即｜將｜公｜開</div>
      <div class="t5" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"><span>Σ</span>超遠見專線</div>  
      <div class="t6"><img data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" src="./s2/t6.svg" alt="" srcset=""></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden w-full;
  display: flex;
  align-items: center;
  justify-content: center;
font-size:size(30);
padding: size(230) 0;
gap: .8em;
color: #fff;
  .img{@apply relative  overflow-hidden;
    width: 23em;
   // width:calc(100% - (20% - 11.4em) - 37em + 10em);
    //height:47.75em;
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction:column;  
  img{width: 100%}
  .t1{width: size(550)}
  .t2{font-size: 1.05em;letter-spacing: 0.3em;font-weight:600;text-indent: 0.15em;
    margin: 1.6em auto .5em;
  }
  .t3{width: size(555)}
  .t4{font-size: 1.55em;letter-spacing: 0.28em;font-weight:400;text-indent: 0.14em;
    margin: .8em auto;transform: scaleX(0.95);}
  .t5{font-size: 1.5em;font-weight:900;
    background:#C89F63;width: size(555);
    border-radius: .5em;padding: .1em 0;
  span{font-weight:400;letter-spacing:.2em;}
  }
  .t6{width: size(555);
    margin: .9em auto 0;}
  }
  .txt{
    @apply relative;
    width: 17em;
    padding:0;
    text-align: justify;
letter-spacing: 0.1em;
margin: auto 0 auto 2em;transform: scaleX(0.9);transform-origin: 100% 0;}
  .desc{
line-height: 1.9;
}
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  flex-direction: column;
font-size:sizem(15);
padding:0.5em 0 5em 0;
gap: 2.2em;
  .img{
    
  .t1{width: sizem(147)}
  .t4{font-size: 1.2em;}
  .t5{font-size: 1.2em;width: sizem(210);}
  .t6{width: sizem(210);}
  }

  .txt{
    padding:0;
margin: auto;
    text-align: center;width: auto;
    transform-origin: 50% 0;
  }




  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
