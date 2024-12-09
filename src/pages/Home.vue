<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div
    v-bind:class="{
      'opacity-0': !isLoading,
      'pointer-events-none': !isLoading,
    }"
    class="transition-all duration-500 flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]"
  >
    <img class="w-32" src="@/assets/loading_w.gif" alt="loading" srcset="" />
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
    <!-- 主字體 3選1
     font-['Noto_Serif_TC',serif]
     font-['Noto_Sans_TC',sans-serif]
     font-['LXGW_WenKai_Mono_TC',monospace]
    -->
  <div
    class="home relative bg-[#fff] overflow-hidden font-['Noto_Serif_TC',serif] pb-[64px] md:pb-0"
  >
  <div class="allbg">
    <!-- bg內容想做成滾動視差 去符合 allbg 的高度-->
  <div class="bg">
    <img class="cloud" src="@/section/s1/cloud.gif" alt="" srcset="" />
    <img class="wave" src="@/section/s1/wave.gif" alt="" srcset="" />
    <img class="cloud" src="@/section/s1/cloud.gif" alt="" srcset="" />
    <img class="wave" src="@/section/s1/wave.gif" alt="" srcset="" />
    <img class="cloud" src="@/section/s1/cloud.gif" alt="" srcset="" />
    <img class="wave" src="@/section/s1/wave.gif" alt="" srcset="" />
    <img class="cloud" src="@/section/s1/cloud.gif" alt="" srcset="" />
    <img class="wave" src="@/section/s1/wave.gif" alt="" srcset="" />
    <img class="cloud" src="@/section/s1/cloud.gif" alt="" srcset="" />
    <img class="wave" src="@/section/s1/wave.gif" alt="" srcset="" />
    <img class="cloud" src="@/section/s1/cloud.gif" alt="" srcset="" />
  </div>
  </div>
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
   <!--  <S8 />
    <S9 />  -->
    <S10 />
    <Order />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/custom-aos.css";
img {
  display: inline;
  max-width: unset;
  height: unset;
  /* margin: 0 auto; */
}

// .home {}
.allbg{
  position: absolute;
  top: 0;left: 0;right: 0;bottom: 0;height: 100%;
  background: url("@/section/s1/bg3.jpg") center top;
  background-size: 270% auto;
    @media screen and (min-width: 768px) {
      background-size: 100% auto;
    }

img {
  width: 100%;
  height: auto;
}
  .bg{width: 100%;//height: 100%;
  background: url("@/section/s1/bg.jpg") center top;
  background-size: 270% auto;
    transform: translateY(0); // 初始位置
    transition: transform 0.2s ease-out; // 平滑過渡效果（可選）
    @media screen and (min-width: 768px) {
      background-size: 100% auto;
    }
  }
    .cloud{position:relative;width: 378%;
            mix-blend-mode: overlay;
    @media screen and (min-width: 768px) {
      width: 140%;
    }
    }
    .wave {
      position:relative;width: 1350%;height:216vw;
      opacity: 0.6;object-fit:fill;
      mix-blend-mode: overlay;
    @media screen and (min-width: 768px) {
      width: 500%;height:80vw;
    }
    }

}
.splide__pagination{
  position: absolute;
  width: 100%;
  bottom: 0;
  gap: 0.5em;
  li{
      button {
        width: 5em;
        height: 1em;
        border-radius: 0;
        background:#CCC;
        transition: transform .5s, background .5s;
        &:hover{background:#999;}
        &.is-active{background:#00a6ae;}
      }
  }
}

@media screen and (max-width: 768px) {
}
</style>

<script setup>
import info from "@/info"
import AOS from 'aos';
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
/* import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue" */
import S10 from "@/section/s10.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { ref, onMounted, onUnmounted } from "vue"


const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: false
})


onMounted(() => {
  let ticking = false; // 確保在一幀內只處理一次滾動事件
  const allbg = document.querySelector(".allbg .bg");

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        if (allbg) {
          allbg.style.transform = `translateY(${scrollPosition * 0.25}px)`; // 0.3 為速度係數
        }
        ticking = false; // 完成處理後重置
      });
      ticking = true; // 標記正在處理中
    }
  };

  // 綁定滾動事件
  window.addEventListener("scroll", handleScroll);

  window.onload = function () {
    isLoading.value = false;
    AOS.init({
      offset: 0,
      duration: 1500,
    });
  };

  // 在組件卸載時清理事件
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>