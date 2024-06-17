<template>
  <article class="s1" id="s1">
    <video v-if="isMobile" src="https://h35.banner.tw/yjp/mo.mov" playsinline autoplay muted loop></video>
    <video v-else src="https://h35.banner.tw/yjp/pc.mov" playsinline autoplay muted loop></video>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';



.s1 {  
  @apply relative w-full h-screen text-[#fff];
  min-height: size(900);
  max-height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(66);

  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  




}
/* PC
@media screen and (min-width: 767px) {
  .s1 {



  }
}
   */
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    font-size:sizem(27);
  .bg{height:100%;//opacity: .4;
   img{height: 100%;}
  }
  
  .logo{
    width:sizem(220);top: sizem(78);right: sizem(30);
  }
  .t1{
    bottom:sizem(50);
    width:sizem(330);
    span{
      &:nth-child(1){
        display: flex;justify-content:center;align-items:center;
        &::before,
        &::after{
          content: "";
          background: currentColor;
          margin:0 .5em;
          height: 1px;width: 2em;position: relative;flex: 1;
        }
      }
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