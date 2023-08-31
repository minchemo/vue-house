
<template>
  <article class="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">  -->
    <video class="video-bg" src="https://h35.banner.tw/sigma/01.mp4" playsinline autoplay muted loop></video>
    <div class="txtall">
      <div class="logo">
        <div class="logot"><span data-aos="fade-right" data-aos-delay="1100" data-aos-duration="1000">尋找</span></div>
        <img data-aos="fade" data-aos-delay="0" src="./s1/logo0417.svg" alt="" loading="lazy">
      </div>
      <div class="txt" v-if="$isMobile()">
        <div class="t1"><img data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" src="./s2/logo.svg" alt="" srcset=""></div>
        <div class="t2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">台灣十大建商 前進高雄代表作</div>
        <div class="t3"><img data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" src="./s2/t3.svg" alt="" srcset=""></div>
        <div class="t4" @click="scrollTo('.order')" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">SLIDE</div>
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
// .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;z-index: 2;}
.video-bg{position: fixed;top: 0;left: 0;width: 110%;filter:blur(.1vw)contrast(1.3); max-width: 1000%;}

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
    font-size:7.6em;line-height: 1;
    margin: -0.15em 0 0 0;overflow: hidden;
    padding: .05em 0;
  }
  .logo {
    position: relative;
    display: flex;
    gap:.5em;
    img{ width: 10.2em;}
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(812);
.video-bg{position: fixed;top: 0;left:50%;filter:blur(.2vw); width: auto;max-width: 1000%;
  //height:sizem(750);
  background-size: cover;
    height:calc(100% + 14vw);transform: translateX(-50%);
  bottom: 0;right: 0;}
  .txtall{
    font-size:sizem(13);
    flex-direction:column;
  justify-content:center;
  align-items:center;
    padding: 2em 0 0em;
    height: 100%;
    gap: 3em;

    .logot {
    width:auto;
    font-size:1.23em;line-height: 1;
    margin: auto;
    position: absolute;left:calc(50% - 4em);top: 4.8em;
  }
  .logo {font-size:sizem(23);
    margin: 0 auto 0 auto;
    flex-direction:column;
  
    img{ width: 10em;}
  }
  .txt{
    width: sizem(260);margin:0 auto;
  text-align: center;
    img{width: 100%;margin:auto;}
  .t1{width: sizem(210);margin:auto;}
    .t2{font-size:sizem(12);margin: 1.4em auto 0.5em;letter-spacing: 0.3em;font-weight:600;text-indent: 0.2em;}
  .t3{width: sizem(210);margin:auto;}
    .t4{font-weight: 300;letter-spacing: 0.15em;font-size: 1em;
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
import { computed, getCurrentInstance, inject, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}


</script>
