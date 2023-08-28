<template>
  <article class="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">  -->
    <div class="txtall">
      <div class="logot"><span data-aos="fade-right" data-aos-delay="3100">尋找</span></div>
      <img class="logo" data-aos="fade" data-aos-delay="300" src="./s1/logo0417.svg" alt="" loading="lazy">
      <div class="txt" data-aos="fade" v-if="$isMobile()">
      <div class="t1"><img data-aos="fade-up" data-aos-delay="0" src="./s2/logo.svg" alt="" srcset=""></div>
      <div class="t2" data-aos="fade-up" data-aos-delay="0">台灣十大建商 前進高雄代表作</div>
      <div class="t3"><img data-aos="fade-up" data-aos-delay="0" src="./s2/t3.svg" alt="" srcset=""></div>
      <div class="t4">SLIDE</div>
    </div>
    </div>
      
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 
{
  @apply relative w-full h-screen;
  // @apply relative overflow-hidden w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // background: url("./s1/1.jpg");
  // background-size: cover;
background: #000E29;
  /*
  background: url("./s1/bg.jpg") center 100%;
  background-size: cover;*/
  .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;z-index: 2;}

@keyframes an {
 to{
     transform:translateY(-40%)rotate(45deg);
  }
}
  .txtall{
    position: relative;
    width:auto;
    font-size:size(42);
    color: #fff;;
    text-align: center;
    display: flex;
    gap:.5em;
    line-height: 1.6;
    font-weight: 500;
    align-items:center;
    margin:auto;
    padding: 0 0 2.5em;z-index: 2;
    span{position: relative;display: block;}
  }
  .logot {
    width:1em;
    font-size:size(320);line-height: 1;
    margin: -0.15em 0 0 0;overflow: hidden;
  }
  .logo {
    width: size(428);
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height: sizem(750);
    min-height: sizem(0);
    max-height: sizem(812);
  .bg1{right:0;width: 100%;opacity:1;}
  .light{right:sizem(-350);bottom:sizem(0);
  .light1{width:sizem(300);
    &::before{height:sizem(75);}
    &::after{height:sizem(75);}
  }
}
  .txtall{
    font-size:sizem(13);
    flex-direction:column;
    padding: 0 0 0em;

    .logot {
    width:auto;
    font-size:sizem(32);line-height: 1;
    margin: auto;
    position: absolute;left:calc(50% - 4em);top: 4.8em;
  }
  .logo {
    width: sizem(260);
    margin: auto auto 2.3em auto;}
  .txt{
    width: sizem(260);margin:auto;
  text-align: center;
    img{width: 100%;margin:auto;}
  .t1{width: sizem(230);margin:auto;}
    .t2{margin: 1.4em auto 0.2em;letter-spacing: 0.3em;font-weight:600;text-indent: 0.2em;}
  .t3{width: sizem(230);margin:auto;}
    .t4{font-weight: 300;letter-spacing: 0.15em;font-size: 1.1em;
    &::before{
      content: "";display: block;width: 2em;height: 2em;
      border: 0 solid currentColor;border-width: 0 1px 1px 0;
      transform:translateY(0%)rotate(45deg);
      margin:1em auto .5em;animation:an 1.5s ease-out alternate infinite;
    }
    }

  }

  }



  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>
