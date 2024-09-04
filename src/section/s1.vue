<template>
  <article class="s1" id="s1">
    <img src="./s1/img1.webp" class="img1 absolute">
    <img src="./s1/appearance.png" class="appearance absolute" data-aos="fade-up" data-aos-delay="200" >
    <img src="./s1/img2m.webp" class="img2 absolute" v-if="$isMobile()">
    <img src="./s1/img2.webp" class="img2 absolute" v-else>
    <div class="txt absolute">
      <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
      <!-- <img src="./s1/t1m.svg" class="t1" data-aos="zoom-in" data-aos-delay="200" v-if="$isMobile()">
      <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="200" v-else>  -->
      <div class="t2 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="200"><span><span>人生換幕</span>何須趕路</span><span><span>心本富足</span>何必媚俗</span></div>
    </div>
    
	<!--  
    <img src="./s1/pc.jpg" class="t0">
    <img src="./s1/02.jpg" class="t0">
       <div class="bg"><img src="./s1/bg.svg" alt="bg"></div>
       <img src="./s1/img.webp" class="img absolute" alt="img" data-aos="zoom-in" data-aos-delay="0">
       <img src="./s1/txt.svg" class="txt absolute" alt="txt" data-aos="zoom-in" data-aos-delay="200">
   -->


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@keyframes ann {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  @apply relative w-full h-screen;
  //height: size(1080);
  min-height: size(940);
  max-height: size(1080);
  font-size:size(36);

.t0{position: absolute;width: 140%;top:0px;left: -20%; pointer-events: none;z-index: 10;opacity:.3;//mix-blend-mode: multiply;
}

.txt{top:size(295);
  top:calc(70% + #{size(295 - 1080 * .7)});
  left:0;right: 0;margin: auto;width:100%;display: flex; justify-content:center;align-items:center;

  .t1{width:size(530);margin: size(60) 0 0 size(50);}
.logo{width:size(330);margin: 0;}
.t2{ color: #717071;margin: size(60) 0 0 size(50);
  font-size:size(45);
  letter-spacing: 0.06em;
  display: flex;
  flex-direction:column;
  > span{
    span{margin:auto .5em auto auto;}
    &:nth-child(1){color: #8fc31f;}
  }
}
}
.img1{width:size(791);top: 0;right: 0;transform:skewY(3deg);transform-origin:100% 0;animation: ann 8s ease-in-out alternate-reverse infinite;}
.img2{bottom: 0;right: 0;width: 105%;transform:skewX(-3deg);transform-origin:50% 100%;animation: ann 5s ease-in-out alternate-reverse infinite;}
.appearance{bottom: size(170);right: 0;left: 0;margin: auto;width:size(500);}
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(650);
    max-height: sizem(812);
    font-size:sizem(15);
    .txt{top:sizem(120);
      top:calc(55% + #{sizem(120 - 670 * .55)});
      flex-direction:column;
  .t1{width:sizem(40);margin: sizem(20) auto;}
.logo{width:sizem(140);margin: 0;}
.t2{ margin: sizem(20) auto;
  flex-direction:row;
  font-size:sizem(18);
  line-height: 1.4;
  > span{width: 1em;
    span{margin:auto auto .5em auto;display: inline-block;}
    &:nth-child(1){margin-right: .5em;}
  }
}
    }
    .img1{width:sizem(270);}
    .img2{width: 112%;right: -6%;transform:skewX(-5deg);}
    .appearance{bottom: sizem(55);right: 0;left: 0;margin: auto;width:sizem(200);}
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