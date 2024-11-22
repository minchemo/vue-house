<template>
  <article class="s5 relative" id="s5">
    <img src="./s2/bg.svg" class="bg" alt="bg" data-aos="fade-up" data-aos-delay="0">
    <div class="txt relative">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">九大學府，<br>
串起知性與智慧</h3>
        <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
      <p class="font-['Noto_Sans_TC',sans-serif]" data-aos="fade-up" data-aos-delay="600">難得人文領地，一次匯集九所校園，<br>
囊括了：大社國小國中、楠梓高中、<br>
義守大學＆醫學院、樹德科大、<br>
高科大燕巢校區＆第一校區、高師大燕巢校區，<br>
知識滿分、智慧能量無限提升！</p>
<!--  --><img src="./s5/en.svg" class="en" alt="en" data-aos="fade-up" data-aos-delay="800">
    </div>
    <img src="./s2/img.png" class="img" alt="img" data-aos="fade-up" data-aos-delay="0">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  position: relative;
  background: url("./s2/bg.webp");
  font-size:sizem(12);
  line-height: 1.6;
  padding:2em 0 0;
  @media screen and (min-width: 768px) {
    font-size:size(33);
  }
  .bg{
    position: absolute;
    top: 1em;
    left: calc(58% + 1em);
    width:sizem(130);
  @media screen and (min-width: 768px) {
    width:size(390);
  }
  }
  .txt{
    width: sizem(310);
    margin:0 auto 1em;z-index: 2;
  @media screen and (min-width: 768px) {
    width: size(1150);
  }
    .title{
      font-size:2.3em;
      line-height: 1.2;
      margin-bottom: .3em;
      span{color: #a38a77;}
  @media screen and (min-width: 768px) {
    font-size:3em;
  }
    }
    .en{
      width: 18.5em;
      margin-top: .3em;}

        
        
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
  .img{width: sizem(320);margin: auto;display: block; background: url("./s2/img.jpg");background-size: cover;

  @media screen and (min-width: 768px) {
    width: size(1190);
  }
}

}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>