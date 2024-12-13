<template>
  <article class="s2 relative" id="s2">
    <div class="main">
    <img src="./s2/house.svg" class="house" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s2/txt_pc.svg" class="txt" data-aos="zoom-in" data-aos-delay="200" v-if="!isMobile">
    <img src="./s2/txt_mo.svg" class="txt" data-aos="zoom-in" data-aos-delay="200" v-else>
    </div>


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an1 {
  0% {
    transform:rotate(-70deg);opacity: .8;
  }
  20% {
    transform:rotate(110deg);opacity: 0;
  }
  80% {
    transform:rotate(110deg);opacity: 0;
  }
  100% {
    transform:rotate(290deg);opacity: .8;
  }
}
.s2 {
 height: size(1070);
 overflow: hidden;
  font-size:size(36);
  background:url("@/section/s2/bg.webp");
  background-size: cover;
  padding: 0 size(250);
  



  .main{
  gap: size(0);
  display: flex;
  flex-direction: column;
  justify-content:center;
  flex-direction: row;
  align-items:center;
  margin-top: size(100);

  .house{
    width: size(445);
  }
  .txt{
    width: size(749);
  }  

  }
  
  
  

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s2 {
    height: sizem(745);
    font-size:sizem(16);
    background-size: 340% auto;
    background:url("@/section/s2/bgm.webp");
    background-size: cover;


  .main{
  margin-top: sizem(80);
  flex-direction: column;
  gap: sizem(20);

  .house{
    width: sizem(245);
  }
  .txt{
    width: sizem(270);
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