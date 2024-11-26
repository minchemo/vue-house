<template>
  <article class="s10 relative" id="s10">
     <img src="./s1/bg.webp" class="bg" /> 
     <div class="txt">
      <logo class="logo relative" data-aos="zoom-in" data-aos-delay="400"></logo>

      <div class="ts relative" v-if="!isMobile">
        <div class="t1 font-['Noto_Sans_TC',sans-serif]">約15Min 台積電/約15Min 高鐵/約15Min 巨蛋/繁華鄰距離</div>
        <div class="t2">當代新質感建築/精粹2-3房/25%低公設更安逸/即將公開</div>
      </div>
      <div class="ts relative" v-else>
        <div class="t1 font-['Noto_Sans_TC',sans-serif]">約15Min 台積電/約15Min 高鐵<br>約15Min 巨蛋/繁華鄰距離</div>
        <div class="t2">當代新質感建築/精粹2-3房<br>25%低公設更安逸/即將公開</div>
      </div>

      <img src="./s10/t3.svg" class="t3 relative" data-aos="zoom-in" data-aos-delay="600">
     <img src="./s10/slogo.svg" class="slogo relative" data-aos="zoom" data-aos-delay="800">
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
  .logo{width:sizem(235);margin: sizem(30) auto 0;
   @media screen and (min-width: 768px) {
    width:size(650);//left: size(255);
    margin:size(150) auto 0;
    }
  }
  .ts{
    text-align: center;left: 0;right: 0;width:sizem(360);
    font-size:sizem(16);margin:1.5em auto;
      line-height: 1.4;
    @media screen and (min-width: 768px) {width:100%;
      font-size:size(34);
      letter-spacing: 0.06em;
    }
  }
  .t1{color: #fff;}
  .t2{color: #dca66b;margin-top: .4em;}
  @media screen and (min-width: 768px) {
  .t2{letter-spacing: 0.1em;margin-top: .1em}
  }
  
  
  .t3{width:sizem(235);
    margin: auto;display: block;
   @media screen and (min-width: 768px) {
    width:size(530);
   // top: size(730);
    }
  }
  .slogo{width:sizem(235);
    margin: auto;display: block;margin:sizem(25) auto 0;
   @media screen and (min-width: 768px) {
    width:size(530);margin:size(47) auto 0;
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