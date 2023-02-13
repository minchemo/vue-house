<template>
  <article class="s3">
      <h2 class="title0">強強聯手 巨匠建築</h2>

      <div class="list">
    <div class="img" >
      <img v-if="!$isMobile()" data-aos="fade" src="./s3/1.jpg" alt="" srcset="">
      <img v-else src="./s3/1m.jpg" alt="" srcset="">
    </div>
    <div class="txt">
      <h3 class="title">建築達人</h3>
      <h3 class="subtitle">陳世堂 三門建築師事務所</h3>
      <p class="desc">台灣豪宅御用建築團隊，建築作品涵蓋台灣頂尖豪宅、百貨商場、大型開發案。<br />
經典作品: 信義之星、元大一品苑、寶徠花園廣場、國泰金融中心等。</p>
    </div>
  </div>
<div class="list list2">
    <div class="img" >
      <img v-if="!$isMobile()" data-aos="fade" src="./s3/2.jpg" alt="" srcset="">
      <img v-else src="./s3/2m.jpg" alt="" srcset="">
    </div>
    <div class="txt">
      <h3 class="title">結構權威</h3>
      <h3 class="subtitle">林義閔 織本構造株式會社</h3>
      <p class="desc">享譽全球、日本抗震建築第一翹楚，以專業與新進技術，嚴格把關建築結構安全，打造安心家園。<br />
經典作品: 宏盛帝寶、信義之星、忠泰風格、東騰千里等頂尖豪宅。</p>
    </div>
  </div>
<div class="list">
    <div class="img" >
      <img v-if="!$isMobile()" data-aos="fade" src="./s3/3.jpg" alt="" srcset="">
      <img v-else src="./s3/3m.jpg" alt="" srcset="">
    </div>
    <div class="txt">
      <h3 class="title">公設舵手</h3>
      <h3 class="subtitle">唐忠漢 近境制作設計</h3>
      <p class="desc">橫跨兩岸亞洲最佳設計師，講究細節忠於品味，擅長融合東西方美學於一體，為豪宅御用設計大師。<br /><br />

得獎經歷:<br />
Andrew Martin設計大獎、義大利A'DESIGN AWARD鉑金獎、德國iF大獎、亞太APIDA Living Space Best 10。</p>
    </div>
  </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative overflow-hidden w-full bg-[#410014];
font-size: 16px;
 //  background: url("./s3/0.jpg");
 //  background-size: cover;
  .title0{
font-size: 40px;
font-weight: 500;
letter-spacing: 0.1em;
text-align: center;
margin: 2.5em auto 2.2em;
color: #FFF;}
  .list{@apply relative;
    width: 100%;
    display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
margin-bottom:size(165);
  &.list2{
    flex-direction:row-reverse;}
  }
  .img{width: size(856);
  img{width: 100% ;}
  }
  .txt{
    @apply relative bg-[#BEBEBE];
    width: 37em;
    padding: 6em 3.5em;
    text-align: justify;
letter-spacing: 0.08em;
margin: auto -1.2em;
  }
  .title{
font-size: 2em;
font-weight: 600;
letter-spacing: 0.1em;
color: #9B1E44;}
  .subtitle{
font-size: 1.5em;
font-weight: 500;
letter-spacing: 0.1em;}
  .desc{
line-height: 200%;}
}
@media screen and (max-width: 1300px) {
.s3 {
font-size:14px;
  .txt{
    width: 30em;
    padding: 6em size(80);
  }

}
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

// @media screen and (max-width: 767px) { 平常我們手機的設定
  @media screen and (max-width:1024px) {

  .s3 {
font-size:16px;
padding: sizem(35) 0;
  .title0{
    font-size:sizem(25);
margin: 0em auto 0.8em;
  }
  .list{
  flex-direction: column;
  &.list2{
  flex-direction: column;}
  }
  .img{width:sizem(315);
  }
  .txt{
    width:sizem(315);
    padding:sizem(39) sizem(29);
margin: auto;
  }
  .title{
    margin-bottom: .4em;
font-size: 1.54em;
  }
  .subtitle{
    margin-bottom: .4em;
font-size: 1.23em;
  }

  }
}
@media screen and (max-width: 767px) {
  .s3 {
font-size:13px;

}
 }
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
