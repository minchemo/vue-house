<template>
  <article class="s8" id="s8">
	<div class="txt">
		<img src="./s8/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1600"/>
    <img src="./s8/t2.svg" class="t2" alt="" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1600"/>
   <!--    <div class="title0" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1600"><span class="title1">鳳山真地王．傳家最上品</span>
      <span class="title2">3-4房</span><span class="title3">即將公開</span>
  <img src="./s1/slogom.svg" class="slogo" v-if="isMobile" alt=""/>
    <img src="./s1/slogo.svg" class="slogo" v-else alt=""/></div>
    <img src="./s8/slogo1.svg" class="slogo1" alt=""/>
    <img src="./s8/slogo2.svg" class="slogo2" alt=""/> -->
	</div>
    <div class="txt2">CROWN THE CITY</div>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s8 {
  @apply relative w-full h-screen ;
  background-image:url("../section/s1/bg.webp");
    background-position: center;
  background-size: cover;
  height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(54);
  color: #000;
  line-height: 1.7;
  font-weight: 700;
  .txt{position: absolute;
  left:0;right: 0;width:size(650);
  top: size(190);
  margin: auto;
	display: flex;
	flex-direction: column;
  font-weight: 700;
  text-shadow:none;
  }
  .logo,
  .t2{
	width:100%;
  z-index: 3;
  margin: 0 auto 1.5em;
  }
  .txt2{
  @apply font-[Cardo] ;

    background: linear-gradient(180deg, #261216 5.09%, #381711 15.68%, #1E0F12 93.35%);
    width: 100%;position: absolute;
    bottom: 0;left: 0;
text-align: center;
padding:3em 0;color: #9B7C52;
  font-size:size(26);
    letter-spacing: 3em;text-indent: 3em;
    font-weight: 400;
    &::before{
      content: "";
    position: absolute;top:  size(-3);left: 0;
    width: 200%;height: size(3);display: block;
    background: linear-gradient(90deg, #F0DF96 0%, #B58030 5%, #F0DF96 10%, #805A2F 20%, #F0DF96 25%, #B58030 30%, #F0DF96 35%, #805A2F 40%, #F0DF96 50%, #B58030 55%, #F0DF96 60%, #805A2F 70%, #F0DF96 75%, #B58030 80%, #F0DF96 85%, #805A2F 90%, #F0DF96 100%);
    animation: an2 10s linear infinite reverse ;
    }
  }
  @keyframes an2 {
    to {
      transform: translateX(-50%);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s8 {
    background-image:url("../section/s1/bgm.webp");
    background-size: cover;
    height: sizem(470);
    font-size:sizem(25);
	.txt{
	gap:0;
  left: sizem(0);
  top: sizem(100);width: sizem(260);
  }
.txt2{
padding:1.5em 0;
font-size:sizem(15);
  letter-spacing:.6em;text-indent: .6em;
    &::before{height: sizem(2);top:sizem(-2);
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
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>