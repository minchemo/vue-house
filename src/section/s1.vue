<template>
  <article class="s1" id="s1" :style="isMobile?{ fontSize: adjustedFontSize + 'px' }:{}">
   <!--  <img class="t0" src="./s1/pc.jpg" alt="" srcset="">
    <div class="bg"></div>
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/>
    <img src="./s1/t1.svg" class="t1" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <div class="t2" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="1000"><span v-if="$isMobile()">絕版 電梯 店墅</span><span v-else>絕版 電梯 店墅 / </span><span>市政×星鑽
</span></div>  -->
<img src="./s1/img.webp" alt="img" class="img" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="0">
<img src="./s1/rtxt.svg" alt="rtxt" class="rtxt"  >
<img src="./s1/rb.svg" alt="rtxt" class="rb">
<div class="txt">
<h3 class="t1" ref="t1Element" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">敢</h3>
<h4 class="t2" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">與眾不同</h4>
<div class="t3" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">別墅新寵 即將亮相</div>
<div class="t4" data-aos="fade--up" data-aos-duration="500" data-aos-delay="600">Are U Ready
<img src="./s1/question.svg" alt="question" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200"></div>
<div class="t5"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200">
<img src="./s1/t5.svg" alt="t5"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200">07-585-6655</div>
</div>


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}


.s1 {
  
  @apply relative w-full h-screen;
  min-height: size(1000);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  background: #E60012;
  // background: #742229 url("./s1/rame.png");
  background-size: 100% auto;

    .img{position: absolute;width: size(553);left: size(294);
    top:calc(50% + #{size(82 - 540)});
    }
    .rtxt{position: absolute;width: size(88);right: size(60);
    top:calc(20% + #{size(40 - (1080*.2))});}
    .rb{position: absolute;width: size(227);right: size(60);
    bottom:size(20);}
    .txt{margin: auto;text-align: center;color: #FFF;
    font-weight: 900;
  line-height: 1.2;
.t1{
  font-size:size(310);}
.t2{
  font-size:size(160);
margin-top: -.18em;
margin-bottom: .8em;}
.t3{letter-spacing: 0.8em;}
.t4{
  @apply font-['Arial'];
    font-weight: 700;
  font-size:size(95);letter-spacing: -.04em;
  text-indent: .6em;
margin-bottom: .2em;
img{height: 1.43em;}}
.t5{
  @apply font-['Arial'];
    font-weight: 700;
  font-size:size(65);
img{height:0.49em;display: block;
margin-bottom: .1em;}}

    }

  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(550);
    max-height: sizem(812);
    font-size:sizem(15);
    .rb{position: absolute;width: sizem(227);right: auto;left: auto;margin: auto;
    bottom:sizem(30);}

.img{position: absolute;width: sizem(185);left:0;
top:sizem(110);
top:calc(50% + #{sizem(110 - (604*.5))});
}
.rtxt{position: absolute;width: sizem(39);right: sizem(20);
top:sizem(25);
top:calc(20% + #{sizem(25 - (604*.2))});
}
    .txt{width: 100%;
      display: flex;flex-direction:column;justify-content:center;align-items:center;
.t1{
  font-size:sizem(118);
  font-size:7.86em;
margin-bottom: 0.1em;
  white-space: nowrap;}
.t2{
  font-size:sizem(58);
  font-size:3.86em;
margin-bottom: 1.5em;
  white-space: nowrap;}
.t3a{position: absolute;top: 0;left: 0;}
.t4{
  font-size:sizem(40);
  font-size:2.66em;
  white-space: nowrap;}
.t5{
  font-size:sizem(27);
  font-size:1.8em;
margin-bottom: 1.5em;}

}

}

  
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject, onMounted} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

const t1Element = ref(null);
const width = ref('');
const t1Width = ref(0);

onMounted(() => {
  if (isMobile.value) {
  t1Width.value = t1Element.value.offsetWidth;
 // width.value = `t1的宽度: ${t1Width.value}px`;
  }
});

const viewportWidth = computed(() => {
  // 获取视口宽度
  return window.innerWidth;
});

const vwToPixel = (vw) => {
  // 将vw转换为像素值
  return (vw * viewportWidth.value) / 100;
};

const t1WidthInVW = computed(() => {
  // 将t1的宽度转换为vw单位
  return (t1Width.value * 100) / viewportWidth.value;
});

const isT1WidthGreaterThan118 = computed(() => {
  // 检查t1的宽度是否大于118vw
  return t1WidthInVW.value > 31.467; // 将vw值转换为对应的像素值
});

const adjustedFontSize = computed(() => {
  // 将超过118vw的宽度映射回到118vw，并计算相应的字体大小
  const maxWidth = 31.467; // 118vw对应的vw值
  const widthInVW = t1WidthInVW.value;
  const scaleFactor = maxWidth / widthInVW; // 缩放比例
  const originalFontSize = 15; // 初始字体大小
  return originalFontSize * scaleFactor;
});

</script>