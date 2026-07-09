<template>
  <article class="s1 font-['Noto_Serif_TC',serif]" id="s1">
<!-- 
<a href="https://lin.ee/jX9Xyhz" target="_blank" v-if="!isMobile">
<img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" /> 
</a>  -->
	<!-- 
		<img src="./s1/pc.jpg" class="t0"> 
		<img src="./s1/mo.jpg" class="t0"> -->
    
    <h2 class="h2">{{ info.caseName }}</h2>
  <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <h3 class="txt">
搶進三鶯首站 市心公園宅
<span class="st1">2500坪壯闊美域｜邊間 2-3房</span>
    </h3>
    <!-- 
<span class="st2">市心地標 珍稀2-3房</span>
  <img src="./s1/logo.svg" alt="鳴日之城logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
  <div class="t1" v-if="isMobile" data-aos="zoom-in" data-aos-delay="200">2500坪鶯歌地王<br>25~34坪市心地標</div>
  <div class="t1" v-else  data-aos="zoom-in" data-aos-delay="200">2500坪鶯歌地王｜25~34坪市心地標</div>
 --> </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';


.s1 {
  @apply relative w-full h-screen;
 height: sizem(667);
  min-height: sizem(604);
  max-height: sizem(700);
  height: calc(100vh - 63px);
  font-size:sizem(25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: #FFF;
  line-height: 1.7; z-index: 2;

  @media screen and (min-width: 768px) {
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  font-size:size(63);
  }

.h2{position: absolute;top: 0;left: 0;transform: translate(-200%);
        pointer-events: none;color: #fff0;}

  .t0{position: absolute;width: 100%;top: 0;left: 0; 
	pointer-events: none;opacity: .3;z-index: 50;}
  .logo{width:sizem(246);
    margin: auto auto 1em auto;
  @media screen and (min-width: 768px) {
    width:size(424);
    margin: auto auto 1em auto;
  }
}
  .txt{text-align: center;line-height: 1.5;
    margin: 0 auto auto auto;
    padding: 0 0 2.5em;
    @media screen and (min-width: 768px) {
    padding: 0;
    }
  }
  .st1{display:block;font-size:.72em;
    border: 1px solid currentColor;
    margin:.5em auto .3em auto;
    padding: 0em 1em;
    width: fit-content;
    color: #ff0;
  }
  .st2{font-size:.78em;display:block;}
}
</style>
<script setup>
import info from "@/info"
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