<template>
  <article class="s10 relative" id="s10">
     <img src="./s1/bg.webp" class="bg" /> 
     <div class="txt">
      <logo class="logo absolute" data-aos="zoom-in" data-aos-delay="400"></logo>

      <div class="t1 absolute font-['Noto_Sans_TC',sans-serif]">約15Min 台積電/約15Min 高鐵/約15Min 巨蛋/繁華鄰距離</div>
      <div class="t2 absolute">當代新質感建築/精粹2-3房/25%低公設更安逸/即將公開</div>
  <!--  <img src="./s1/logo.svg" class="logo absolute" data-aos="zoom-in-down" data-aos-delay="0"> -->
      <img src="./s10/t3.svg" class="t3 absolute" data-aos="zoom-in" data-aos-delay="600">
     <img src="./s10/slogo.svg" class="slogo absolute" data-aos="zoom" data-aos-delay="800">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
  .s10 {
    height: sizem(500);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
 // background: #000;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    height: size(1080);
    justify-content:space-between;
    padding: 0 0 0 0;
    background-size: cover;
}
  .bg{width:220%;height:sizem(840);position: absolute;
    top: 0;left:50%;transform: translateX(-39%);
    @media screen and (min-width: 768px) {height: auto;
      left: size(0);width:100%;transform: translateX(0);
      
    }
  }
  .logo{width:sizem(235);top: sizem(80);left: 0;right: 0;margin: auto;
   @media screen and (min-width: 768px) {
    width:size(650);//left: size(255);
    top: size(150);
    }
  }
  .t1,.t2{
    text-align: center;left: 0;right: 0;margin: auto;width:sizem(360);
    font-size:sizem(14);
    @media screen and (min-width: 768px) {width:100%;
      font-size:size(34);
      letter-spacing: 0.06em;

    }
  }
  .t1{top: sizem(260);color: #fff;}
  .t2{top: sizem(285);color: #dca66b;}
  @media screen and (min-width: 768px) {
  .t1{top: size(560);}
  .t2{top: size(610);letter-spacing: 0.1em;}
  }
  
  
  .t3{width:sizem(235);top: sizem(330);left: 0;right: 0;
   @media screen and (min-width: 768px) {
    width:size(530);
    top: size(730);
    }
  }
  .slogo{width:sizem(235);top: sizem(410);left: 0;right: 0;
   @media screen and (min-width: 768px) {
    width:size(530);
    top: size(895);
    }
  }
}
</style>
<script setup>
import logo from './s1/logo.vue';
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