<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/pc2.jpg" class="t0">
    <div class="bg"><img src="./s1/bg.webp" alt="bg" class="bg-img"></div>

    <div class="building"><img src="./s1/building.webp" alt="bg" class="bg-img"></div>
    <div class="txt" data-aos="zoom-in">
      <img src="./s1/logo.webp" alt="logo" class="logo">
      <img src="./s1/t1.svg" alt="t1" class="t1">
    </div
    ><div class="txt2">
    <div
  ref="target"
  :class="{ show: isVisible }"
  class="txt2-content" ><h3>大台中車站計畫</h3>
      <p>
連接世界的台灣中樞，以立體路網匯聚台鐵、捷運及轉運站人潮，千億建築紅利在此交會<br>
城市榮耀，即將再現！
</p>
    </div></div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 502px;
  left: 0;
  pointer-events: none;
  z-index: 9;
  opacity: .0;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: sizem(11);

  @media screen and (min-width: 768px) {
    font-size: size(27);
    justify-content: space-between;
    padding: 0;
    height: size(1580);

  }

  .bg {
    position: sticky;
    top: 0;
    left: 0;
    height: size(1080);
    width: 100%;

    img {
      width: 100%;
    }
  }

  .building {
    position: absolute;
    top: size(460);
    left: 0;
    height: size(1115);
    width: 100%;

    img {
      position: sticky;
      width: size(720);
      top: size(0);
      left: size(110);
    }
  }

  .txt {
    position: absolute;
    top: size(130);
    left: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: size(40);
  .logo {
    flex: 0;margin: 0;
    width: size(715);
  }

  .t1 {
    flex: 0;margin: 0 0 size(10) 0;
    width: size(610);
  }
  }

  .txt2{
    position: absolute;
    top: 0;
    right: size(326);
    font-size: size(20);
    height: size(1115);
    h3{font-size: 1.7em;font-weight:500;
    letter-spacing: .08em;margin-bottom: 0.5em;}
  }
.txt2-content {
      position: sticky;
    
    top: 0;
    width: 25em;
  color: #fff;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    letter-spacing: .249em;
    text-align: justify;
    line-height: 1.8;
  opacity: 0;
  transform: translateY(50px);
  transition: all .8s ease;
}

.txt2-content.show {
  opacity: 1;
  transform: translateY(0);
}


}
</style>
<script setup>
import info from "@/info"
import {
  computed,
  getCurrentInstance,
  ref,
  inject,
  onMounted
} from 'vue'
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
const target = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    {
      rootMargin: '-20% 0px'
    }
  )

  observer.observe(target.value)
})
</script>