<template>
  <article class="s1" id="s1">
<div class="txt">
  
  <h2 class="title1" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000">建築原生種  </h2>
    <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000"/>
  
  <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
<div class="button" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000"><img src="./s1/button.svg" @click="scrollTo('.order')" >
</div>
    <h2 class="title" data-aos="zoom-in" data-aos-delay="900" data-aos-duration="1000">新化正核心｜限量純三房<br>
一層<span>2</span>戶｜戶戶平車</h2>
    <img src="./s7/changji_logo.svg" class="changji_logo" data-aos="zoom-in" data-aos-delay="900" data-aos-duration="1000" alt="長磯建設">
 </div>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  min-height: size(800);
  max-height: size(1080);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(18);
  color: #fff;
  line-height: 1.3;
  font-weight: 700;
  // background: url("./s1/01.png") center;
  // background-size: cover;
  .txt {
    @apply relative flex text-[#fff];
  z-index: 5;
    margin:3em 0 0 0;
  flex-direction: column;
  text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
  .title1{
    font-size: 7.2em;
    font-weight: 900;
  letter-spacing: 0.04em;
    line-height: 1.35;
}
.t1{
  margin: 1em auto 3.7em;
  height: 1.7em;
}
  .logo{
    height: 8.1em;
    margin: 0em 0 3em;
  }
  .button{
  margin: 0 auto 2.2em;
  height: 4.5em;
  cursor: pointer;
  img{width: 100%;
    transition:transform 2s;
&:hover{
  transform: scale(1.2);
  transform-origin: center;}}
}
  .title{
    font-size: 3em;
    line-height: 1.2;
    font-weight: 700;color: #F3DEB9;
  text-align: center;
  span{font-size: 1.25em;display: inline-block;margin: 0 .1em 0 .1em;position: relative;top: .06em;}
  }
  .changji_logo{
    height: 1.8em;
    margin: 1.8em 0 0em;
  }
  }

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    font-size:sizem(13);
    
   // background: url("./s1/01m.png") center;
   background-size: cover;

.txt {
  .title1{
    font-size: 4.3em;}
.t1{
  margin: .7em auto 3.5em;
  height: 1em;
}
.logo{
  height: 5em;
    margin: 0em 0 2.7em;
}
  .button{
  height: 4em;
  margin: 0 auto 2.4em;
  }
.title{
  font-size: 1.9em;
}
.changji_logo{
  height: 1.2em;
  margin: 1.2em 0 3.5em;
}
.en{
  height: 2.3em;
}
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
    const targetElement = document.querySelector(el);
    if (targetElement) {
  smoothScroll({
    scrollTo: targetElement.offsetTop + (isMobile ? 0 : -60)
  })
    }
}
</script>