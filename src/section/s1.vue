<template>
  <article class="s1" id="s1">
	<!--  

   <img src="./s1/pc.jpg" class="t0">
   <img src="./s1/mo.jpg" class="t0">

   -->

   <div class="con flex">
  <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
  <img src="./s1/t1.svg" alt="t1" class="t1" data-aos="zoom-in" data-aos-delay="500">
</div>
<div class="w"></div>
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
  min-height: size(1080);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  //background: #E60012;
  background: url("./s1/bg.webp");

  background-size: cover;
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}

.con{
  gap: size(120);
  margin: 0 0 size(120) 0;
  display: flex;
  flex-direction:column;
  

  .logo{
    width: size(142);  
  }

   .t1{
    width: size(190);
  }


}

@keyframes w {
  0% {
     transform:scale(0.5);opacity: 0;
  }
  60% {
     transform:scale(0.5);opacity: 0;
  }
  80%{
     transform:scale(1.3);opacity: .5;}
  100% {
     transform:scale(2);opacity: 0;
  }
}
  .w{
    @apply absolute;
  z-index: 3; height: 38.9%;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  //background: #0006;
  border-radius: 50%;
  mix-blend-mode: soft-light;
  overflow: hidden;
  img{height: 100%;position: relative;top: 10%;
  animation: w 5s linear infinite;
  }
}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:sizem(667);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(15);
    background: url("./s1/bgm.webp");
    background-size: cover;


    .con{gap:0;margin: 0 0  sizem(34) 0;
    flex-direction:column;
    gap: sizem(60);


    .logo{
    width: sizem(76);
    }


  .t1{
    width: sizem(106);
  }
  

  }

  .w{
 height: auto;width: sizem(240);
  bottom: sizem(110);left: auto;right: auto;
  img{height:auto;width: 100%;
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