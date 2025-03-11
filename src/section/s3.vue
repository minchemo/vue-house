<template>
  <article class="s3" id="s3">
    <div class="txt">
      <h2 class="t1" data-aos="zoom-in" data-aos-delay="0">八里海灣城 國際心跳</h2>
      <div class="t2" data-aos="zoom-in" data-aos-delay="200">菁英自城 <span>25-37</span>坪</div>
<div class="t3" data-aos="zoom-in" data-aos-delay="400">敬請期待</div> 
<img src="./s3/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="600"> 
</div>
   
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s3 {
  @apply relative; 
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  font-size:size(52);
  .bg{width: 100%;}
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
  .txt{
  //  position: absolute;
  //  top: size(107);left: 0;right: 0;
  padding: size(180) 0 size(120) 0 ;
  text-align: center;
  line-height: 1.5;font-weight: 500;
  .slogo{width: 16.7em;}
.t1{letter-spacing: .06em;color: #064765;
  font-size: 1.22em;margin:0 auto .0em auto;
}
.t2{margin-bottom: -.1em;font-size: 1.7em;letter-spacing: .0em;
  margin-top: -.23em;
  span{letter-spacing: 0em;font-size: 1.15em;display: inline-block;margin-left: 0.2em;}
 }
.t3{margin-bottom: 1.2em;  font-size: 1.25em;color: #064765;
  &::after{content: "";
width: 4em;height: 1px; background:#000;display: block;margin:.16em auto;
}}
.slogo{width:15.3em ;}

}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s3 {
    font-size:sizem(14);
    .txt{
  padding: sizem(50) 0 sizem(40) 0 ;}

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