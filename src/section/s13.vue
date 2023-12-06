<template>
  <article class="s13" id="s13">
   <!--  <img class="t0" src="./s1/pc.jpg" alt="" srcset="">  -->
    <div class="bg"></div>
    <img src="./s13/t2.svg" v-if="!$isMobile()" class="t1" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <img src="./s13/t2m.svg" v-else class="t1" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <div class="main">
      <img src="./s1/c4.webp"  alt="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000"/>
      <img src="./s1/c3.webp"  alt="" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"/>
      <img src="./s1/c2.webp"  alt="" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"/>
      <img src="./s1/c1.webp"  alt="" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000"/>
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


.s13 {
  
  @apply relative w-full h-screen;
  min-height: size(1020);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(25);
  background: #fff;
  .t0{position: absolute;top: -92px;left: 0;width: 100%;opacity: .5;z-index: 10;}

  .logo{
    width:size(568);
    position: absolute;
    left: size(139);
    top: size(151);
    }

  .t1{
    width:size(742);
    position: absolute;
    left: size(139);
    top: size(151);
    }

  .main{
      position: absolute;
      width: size(998);
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: size(8);
      right: size(108);
      bottom: size(100);

      img{
        width: size(242);
      }
    }  

  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s13 {
    height:calc(100vh - 63px);
    min-height: sizem(570);
    max-height: sizem(570);
    font-size:sizem(12);
  .logo{
    width:sizem(240);
    top: sizem(89);
    left: sizem(67);
    }
  .t1{
    width:sizem(248);
    top: sizem(29);
    left: sizem(63);
    }

    .main{
     width: sizem(310); 
     left: sizem(33);
     bottom: 0;

     img{
      width: sizem(75); 
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