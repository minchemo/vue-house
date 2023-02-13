<template>
  <article class="s2">
    <div class="img">
    </div>
    <div class="txt">
      <h3 class="title">石牌站前 全勝置產</h3>
      <p class="desc">跟著捷運置產，穩居不敗之地。「天匯」近距石牌捷運站350米，石牌路商圈一路繁華，生活所需一應俱全，還有石牌中小學優質學區，高知識殿堂培育孩子成長，四座綠蔭公園環繞，河濱公園健康有氧，是城市最難得的樂活環境。</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden w-full bg-[#55001A];
  display: flex;
  align-items: center;
  justify-content: flex-start;
font-size: 16px;
padding: size(98) 0;
  .img{@apply relative  overflow-hidden bg-[#000];
    width: 80.625em;
   // width:calc(100% - (20% - 11.4em) - 37em + 10em);
    height:47.75em;
    background: url("./s2/1.jpg") center;
    background-size: cover;
  }
  .txt{
    @apply relative bg-[#E5E5E5];
    width: 37em;
    padding: 6em 3.5em;
    text-align: justify;
letter-spacing: 0.08em;
margin: auto -1.2em auto -10em;
  }
  .title{
font-size: 2em;
font-weight: 600;
letter-spacing: 0.1em;
line-height: 1.5;

color: #9B1E44;}
  .desc{
line-height: 2;}
}
@media screen and (max-width: 1730px) {
.s2 {
  .img{
    width:size(1350);
  }
}
}
@media screen and (max-width: 1730px) {
.s2 {
font-size: 15px;
  .txt{
    width: 35em;
    padding: 6em size(60);
margin: auto -1.2em auto size(-180);
  }
}
}
@media screen and (max-width: 1360px) {
.s2 {
font-size:14px;
  .txt{
    width: 30em;
    padding: 6em size(60);
margin: auto -1.2em auto size(-180);
  }

}
}
@media screen and (max-width: 767px) {
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

// @media screen and (max-width: 767px) { 平常我們手機的設定
@media screen and (max-width:1024px) {

  .s2 {
  flex-direction: column;
font-size:16px;
padding: sizem(35) 0;

  .img{
    width:sizem(315);
    height:sizem(313);
    background-image: url("./s2/1m.jpg");
  }
  .txt{
    width:sizem(315);
    padding:sizem(39) sizem(29);
margin: auto;
  }
  .title{
    margin-bottom: .6em;
font-size: 1.54em;
  }




  }
}
@media screen and (max-width: 767px) {
  .s2 {
font-size:13px;

}
 }
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
