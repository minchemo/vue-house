<template>
  <article class="s1 font-['Noto_sans_tc','serif']">
    <div class="img">
      <img src="./s1/00.png" class="cat" alt="cat" data-aos="zoom-in">
      <img src="./s1/t4.svg" class="imgt" alt="t4" data-aos="zoom-in-right">
      <!--div class="txt2" v-if="isMobile">日進月步にっしんげっぽ</div-->
    </div>
      <div class="txt">
        <div class="t1" data-aos="zoom-in" data-aos-delay="0">
          <img src="./s1/t1.svg" class="" alt="logo">
          <img src="./s1/t2.svg" class="" alt="logo">
        </div>
        <div class="t2" data-aos="zoom-in" data-aos-delay="100">
          <img src="./s1/t3.svg" class="" alt="logo" v-if="!isMobile">
          <img src="./s1/t3m.svg" class="" alt="logo" v-else>
        </div>
        <div class="t3" data-aos="zoom-in" data-aos-delay="200">
          <img src="./s1/logo.svg" class="" alt="logo">
          <img src="./s1/t5.svg" class="" alt="logo">
        </div>
      </div>
    <img src="./s1/slogo.svg" alt="slogo" class="slogo absolute" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  background: url('./s1/bg.jpg') center bottom no-repeat;
  background-size: contain;
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  //z-index: 3;
  background-color: #FFEF00;
}

.slogo{
  left: 0;
  bottom: 0;
  width: size(150);
}
.img {
  position: absolute;
  top: 50%;
  left: 0;


  .cat {
    position: absolute;
    top: size(-360);
    left: size(113);
    width: size(430);
  }
  .imgt{    
    position: absolute;
    top: size(-340);
    left: size(465);
    width: size(215);
  }
}


  .txt {
    width: size(1240);
    height: 100%;

    line-height: 1.2;
    letter-spacing: 0em;
    text-align: center;
    z-index: 3;
    color: #E52C29;
    margin: 0 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    flex-wrap: wrap;
    font-size: size(80);
    padding: 0 0 2em;

  }

  .t1 {
    img{height: size(157); margin: 0 0.05em 0 0.15em;}
  }

  .t2 {
    img{height: size(114);  margin: 0.63em 0 0.65em;}
  }
  .t3 {
    img{height: size(120); margin: 0 0.3em 0 0.3em;}
  }


/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  // .a1 {width: 100%;position: absolute;left: 0;top:size-m(-63);opacity: 0.50;}
  .s1 {
    min-height: size-m(667);
    max-height: size-m(950);
    height: size-m(750);
    overflow: hidden;
    background-image: url('./s1/bgm.jpg');
    background-size: contain;
  }
.slogo{
  left: 0;
  bottom: 0;
  width: size-m(100);
}

  .img {
    width: 100%;
    top: auto;
    bottom: 0;
  .cat {
    position: absolute;
    top: size-m(-258);
    left: size-m(115);
    width: size-m(167);
  }
  .imgt{    
    position: absolute;
    top: size-m(-245);
    left: size-m(250);
    width: size-m(85);
  }


  }
    .txt {
      width: 100%;
      font-size: size-m(26.2);
      font-weight: 600;
      margin: .7em 0 0 0;
      line-height: 1.3;
    padding: 0 0 9.6em;
    }

    .t1 {
    img{height: size-m(62); margin: 0;
    &:first-child{
      height: size-m(80);margin: 0 0 1.2em 0;
    }
    
    }
    }

    .t2 {
    img{height: size-m(114); margin:.9em 0 0.65em; }
    }
  .t3 {
    img{height: size-m(40); margin: 0;
    &:first-child{
      height: size-m(50);margin: 0 0 0.7em 0;
    }}
  }



}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Rabbit from './rabbit.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
