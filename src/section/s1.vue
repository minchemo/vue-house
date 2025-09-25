<template>
  <article class="s1 font-[Amiri,serif,'Noto_Serif_TC']" id="s1">
   <!-- <img src="./s1/mo.jpg" class="t0">  -->
    <div class="txt">
      <div class="t1" data-aos="fade-right" data-aos-delay="0">市心<b>2</b>字頭<img src="./s1/logo.svg" class="logo" data-aos="fade-right" data-aos-delay="200" /></div>
      <div class="t2" data-aos="fade-right" data-aos-delay="400">全聯當鄰居<b>2-4</b>房&ensp;北外環<b>5</b><span>分鐘</span></div>
      <div class="t3" data-aos="fade-right" data-aos-delay="600">THE LANDMARK<span>262-8888</span></div>
  </div>
     <!--  <div class="caption" data-aos="fade-up" data-aos-delay="800" data-aos-offset="-200">佳展建設✕燿鴻廣告</div>  -->
  <img src="./s1/img.webp" class="img" data-aos="fade-up" data-aos-delay="700" data-aos-offset="-200">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  @apply relative; 
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  height:sizem(605);
  //background: #d62051;
  background: url("./s1/bgm.jpg") center;
  background-size:cover ;
  color: #FFF;
  font-size: sizem(13);
 
  @media screen and (min-width: 768px) {
    background-image: url("./s1/bg.jpg");
    height:100vh;
    max-height:size(1080);
    min-height:size(900);
  font-size: size(47);
  }
  //background: #E60012;
// padding-bottom: size(140);V
 // &::after{content: "";position: absolute;bottom: 0;height: 1px;width: size(1552);left: 0;right: 0;margin: auto;background: #0006;}

 .t0{position: absolute; top: 0;left: 0;width: 100%;opacity: .3;}

 .txt{font-weight: 500; line-height: 1.3;width: auto;position: relative;user-select: none;
  b{font-weight: 400;letter-spacing: 0;}
}
 .t1{font-size: 5.3em;font-weight: 600;letter-spacing: -.06em;
  filter:drop-shadow(0.042em 0.035em 0.015em #000);
  b{font-size: 1.4em;margin: auto .01em auto .04em;vertical-align: -.03em;}
  @media screen and (min-width: 768px) {
font-size: 4.4em;
  }
 }
 .logo{display: block;width: 2.52em;margin: -.1em -.1em auto .0em;
  @media screen and (min-width: 768px) {
    display: inline-block;width: 2.52em;margin: -.3em -.1em auto .36em;}
}
 .t2{font-size: 2em;letter-spacing: -.04em;margin:.7em auto auto auto;
  b{font-size: 1.2em;margin: auto .0em auto .08em;vertical-align: -.03em;}
  span{display: inline-block;width: 1em;line-height: 1.05;font-size: .44em;}
  @media screen and (min-width: 768px) {
    margin:-.35em auto auto auto;
  }
}
 .t3{color: #c3ad7b;margin:.6em auto 8.6em .5em;letter-spacing:0.03em;
  span{display: block;font-size: 3.4em;margin:-.17em auto auto -.05em;letter-spacing: -.03em;}
  @media screen and (min-width: 768px) {
    margin:.6em auto 1em .5em;
  }
}
 .caption{position: absolute; bottom:.6em;left:1.3em;font-size: .7em;user-select: none;
  @media screen and (min-width: 768px) {
    font-size: .65em;
  }
}
 .img{position: absolute; bottom: sizem(-115);right: sizem(-60);width: sizem(330);
  @media screen and (min-width: 768px) {
    bottom: size(-280);right: size(60);width: size(830);
  }
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