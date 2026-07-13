<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img//loading_w.gif" alt="loading" srcset="">
  </div>
  <!-- loading end -->
   <Nav />
    <!-- 主字體 3選1
     font-['Noto_Serif_TC',serif]
     font-['Noto_Sans_TC',sans-serif]
     font-['LXGW_WenKai_Mono_TC',monospace]
    -->
  <div class="home relative overflow-hidden font-['Noto_Sans_TC',sans-serif]">
    <S1 />
    <S20 />
   <!-- <S2 /> --> 
    <S3 />
    <S9 />
    <S4 />
    <S10 />
   <!--  <S5 /> --> 
     <!-- <S6 /> --> 
    <S7 />
    <S11 />
    <S8 />
    <Order />
  <div class="allbg">
    <!-- bg內容想做成滾動視差 去符合 allbg 的高度-->
  <div class="bg">
  </div>
</div>
  <!--
    <S9 />
    <S1new />
    <S1new2 /> -->
    
  </div>
</template>



<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an {
  to {
	transform: translate(0)
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

.allbg{
  position: absolute;
  top: 0;left: 0;right: 0;bottom: 0;height: 100%;z-index:0;
  // background: url("@/section/s1/bg.jpg") center top;
  // background-size: 270% auto;
    @media screen and (min-width: 768px) {
      background-size: 100% auto;
    }

img {
  width: 100%;
  height: auto;
}
  .bg{width: 100%;height: calc(100% + 100vw);
  background: url("@/section/s1/bg.webp") center top;
  background-size: 270% auto;
    transform: translateY(0); // 初始位置
    transition: transform 0.5s ease-out; // 平滑過渡效果（可選）
    @media screen and (min-width: 768px) {
      background-size: 100% auto;
    }
  }

}

  .caption{
      @apply absolute;
      right:1em;
      bottom: .5em;
      font-weight: 300;
      font-size: size(15);
      color: #FFF;z-index: 3;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);}


      .txt {
    position: relative;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.7;
    width: 100%;letter-spacing: 0.03em;
    text-align:justify;
    z-index: 3;
  .title{
    @apply font-['Noto_Sans_TC',sans-serif];
    font-size: 1.5em;
    margin:-1em auto 0.15em;
    line-height: 1.5;
    font-weight: 700;
    color: #FD3;
    text-shadow: 0 0 10px #003838,0 0 3px #003838;
    span{
      border: 1px solid currentColor;
      display: block;
      width: fit-content;
      padding: 0em 0.5em;
    font-size: .7em;vertical-align: middle;
    color: #fff;

    }
  }
  .subtitle{
    @apply font-['Noto_Serif_TC',serif];
    font-size: 2.2em;
    font-weight: 900;
    margin:0.2em auto 0.25em;
    line-height: 1.5;letter-spacing: 0.06em;
  }
  .desc{
    margin: 0 0 0;
    text-shadow: 0 0 10px #003838,0 0 3px #003838;
    b{}
  }
  }
.slider {
  @apply relative;
  z-index: 2;
  .slide-item{
  img{width: 100%;height: 100%;//border-radius: 1em;
    object-fit: cover;
  }
  
  }
  .arrows{
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0; 
    height: 100%;
    pointer-events: none;
    .prev,
    .next{
      width:5%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;
      
  justify-content: center;
  align-items:center;
    background:url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s ;
    &:hover{background-color: #0003;}
    }
    .prev{transform: scaleX(-1);
    }
    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: 0;
    gap: .8em;
    color: #fff;
    li {
      button {
       // @apply rounded-full;
        width: 3.5em;
        height: 2em;
        position: relative;
      &::after{
        content: "";display: block;
        width: 100%;height: .3em;
        background:currentColor;
        transition: transform .5s;
        transform-origin: 50% 90%;
        position: absolute;left: 0;bottom: 0;
      }
      &:hover{
        //  transform: scaleY(.8);
        }

        &.is-active{ 
          &::after{
          transform: scaleY(3);
          background:#FD3;}
      }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  

  .caption{
      font-size: sizem(12);}

      .txt {line-height: 1.6;letter-spacing: 0.01em;
        padding: sizem(32.5) 0 ;
  .title{
    font-size: 1.9em;
  }
  .subtitle{
    font-size: 1.1em;
  }
  }
.slider {
  @apply relative;
  .slide-item{
  img{border-radius:0em;}
  
  }
  .arrows{
    .prev,
    .next{
      width: 8%;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    display: none;
    bottom: sizem(6.7);
    gap: sizem(2.5);
    li {
      button {
        @apply rounded-full  hover:opacity-50;
        width: sizem(10.3);
        height: sizem(3.34);
        border: sizem(1) solid #fff;

        &.is-active{
          @apply bg-white;
      }
      }
    }
  }
}
}
</style>
<script setup>
import info from "@/info"
import AOS from 'aos';
import Nav from "@/layout/navbar.vue"
import S1 from "@/section/s1.vue"
import S20 from "@/section/s20.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import S10 from "@/section/s10.vue"
import S11 from "@/section/s11.vue"
import Order from "@/section/order.vue"
import { computed, getCurrentInstance, ref, onMounted, onUnmounted } from "vue";

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const isLoading = ref(true)
const gtmNoScript = ref('')

const config = ref({
  showNav: false
})

onMounted(() => {
  window.onload = function () {
    isLoading.value = false;
    AOS.init({
      offset: 0,
      duration: 1500,
    });
  };

});

</script>
