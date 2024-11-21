<template>
  <article class="s3 relative" id="s3">
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">近擁國1+國10雙國道<br>
        最強交通攻略</h3>
        <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
      <p class="font-['Noto_Sans_TC',sans-serif]" data-aos="fade-up" data-aos-delay="600">有了雙國道加持，南來北往輕鬆飆馳，<br>
約15 分鐘、一杯咖啡時間，<br>
快意串聯「台積電」「橋科」「仁武航太園區」<br>
三大重量級經濟引擎，帶來無限增值紅利，<br>
還能飆速抵達義大世界、高鐵、漢神巨蛋，<br>
嶄新的大社、便捷的交通，看得見的不凡未來！</p>
<!--  --><img src="./s2/en.svg" class="en" alt="en" data-aos="fade-up" data-aos-delay="800">
    </div>
    <img src="./s2/img.png" class="img" alt="img" data-aos="fade-up" data-aos-delay="0">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  position: relative;
  background: url("./s2/bg.webp");
  font-size:sizem(12);
  line-height: 1.5;
  padding:1em 0;
      .txt{
        width: sizem(310);
        margin:0 auto 1em;
        .title{
          font-size:2.3em;
          line-height: 1.2;
        }
        .en{width: sizem(220);}

        
        
        /*
        position: relative; pointer-events: none;
        background: #FFF;
        color: #000;
        font-size:sizem(14);
        line-height: 1.8;
        width: sizem(327);
        margin: sizem(-33) auto sizem(20) auto;
        padding: sizem(6) sizem(38) sizem(38) sizem(38);
        text-align: justify;
        @media screen and (min-width: 768px) {
          position: absolute;
          top: size(80);left: size(159);
          font-size:size(22);
          margin: 0 auto 0 auto;
          padding: size(0) size(48) size(0) size(48);
          width: size(510);
          height:size(800);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:flex-start;
        }
        .title{
          font-size:sizem(26);
          color: #A30C24;
          line-height: 1.2;
          margin-top:sizem(28);
          letter-spacing: 0.03em;
          @media screen and (min-width: 768px) {font-size:size(40);
            margin-top:0;}
        }
        .subtitle{
          font-size:sizem(20);
          @media screen and (min-width: 768px) {font-size:size(30);}
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:sizem(6) 0 sizem(23);
          @media screen and (min-width: 768px) {margin:size(10) 0 size(40);}
        }

        */
      }
.img{width: sizem(320);margin: auto;display: block; background: url("./s2/img.jpg");background-size: cover;}

}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

</script>