<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img/loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
   <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#FFF] text-[#000] ">
    <img src="@/section/s1/bg1.jpg" class="bg1" data-aos="fade" data-aos-delay="0">
    <div ref="hRef" class="home-section">
      <div ref="s0Ref" v-if="isMobile"><S0 /></div>
      <div ref="s1Ref"><S1 /></div>
      <S2 />
    </div>
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an1 {
  to {
     transform:scale(1);opacity: 1;
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
.bg1{
  position: fixed;top: 0;left: 0;width: 100%;object-fit: fill;
  height: 100vh;
  min-height: size(900);
 // max-height: size(1080);
}

@media screen and (max-width: 767px) {
.home-section {
  position: relative;
  width: 100%;
  overflow: visible; /* 使視差元素不會被隱藏 */
  transition: transform 0.2s linear;
  margin-bottom:  sizem(550);
}
}
</style>

<script setup>
import info from "@/info"

import S0 from "@/section/s0.vue"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted,computed,  getCurrentInstance, ref ,onUnmounted, nextTick} from "vue"

import AOS from 'aos';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const isLoading = ref(true)
const gtmNoScript = ref('')


// **變數**
const isParallaxActive = ref(false);
const s0Height = ref(0);
const s1Height = ref(0);
const ticking = ref(false); // 控制滾動觸發頻率
const hRef = ref(null);
const s0Ref = ref(null);
const s1Ref = ref(null);

// **初始化 AOS**
onMounted(() => {
  window.onload = () => {
    isLoading.value = false;
    AOS.init({
      offset: 0,
      duration: 2000,
    });
  };
});
if (globals.$isMobile()) {
// **滾動監聽**
const handleScroll = () => {
  if (!ticking.value) {
    ticking.value = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      // 更新 S0 和 S1 的高度
      if (s0Ref.value) s0Height.value = s0Ref.value.offsetHeight;
      if (s1Ref.value) s1Height.value = s1Ref.value.offsetHeight;

      // 設定視差是否啟動
      if (scrollY >= s0Height.value && scrollY <= s1Height.value + s0Height.value) {
        isParallaxActive.value = true;
      } else {
        isParallaxActive.value = false;
      }

      // 計算視差位移
      if (isParallaxActive.value && hRef.value) {
        const parallaxOffset = scrollY < s0Height.value ? 0 : (scrollY - s0Height.value) * 0.8;
        hRef.value.style.transform = `translateY(${parallaxOffset}px)`;
      } else if (scrollY < s0Height.value) {
        // 滾動回最上方時，將視差位移設為 0
        hRef.value.style.transform = `translateY(0px)`;
      }

      ticking.value = false; // 允許下一次觸發
    });
  }
};

// **監聽 Resize 更新高度**
const updateHeights = () => {
  if (s0Ref.value) s0Height.value = s0Ref.value.offsetHeight;
  if (s1Ref.value) s1Height.value = s1Ref.value.offsetHeight;
};

// **掛載事件**
onMounted(async () => {
  await nextTick();
  updateHeights();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", updateHeights);
});

// **移除事件**
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateHeights);
});

};

</script>
