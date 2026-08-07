<template>
  <article class="s1 relative" id="s1">
  <!-- <img src="./s1/mo.png" class="t0"> --> 
    <div class="bg"><img src="./s1/bg.webp" alt="bg" class="bg-img"></div>

  <div class="visual">
  <div class="building">
    <img src="./s1/building.webp">
  </div>

  <div class="light1">
    <img src="./s1/light1.webp">
  </div>

  <div class="light2">
    <img src="./s1/light2.webp">
  </div>
</div>
    <div class="bott">
      <div></div>
    </div>
    <div class="txt" data-aos="zoom-in">
      <img src="./s1/logo.webp" alt="logo" class="logo">
      <img src="./s1/t1.svg" alt="t1" class="t1">
      <img src="./s1/slogo.svg" alt="logo" class="slogo">
    </div>
    <div ref="target" class="txt2">
      <div :class="{ show: isVisible }" class="txt2-content">
        <h3>大台中車站計畫</h3>
        <p>
          連接世界的台灣中樞，以立體路網匯聚台鐵、捷運及轉運站人潮，千億建築紅利在此交會<br>
          城市榮耀，即將再現！
        </p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
  z-index: 9;
  opacity: .3;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  position: relative;
  font-size: sizem(11);
  height: sizem(1000);
    padding: 0;

  @media screen and (min-width: 768px) {
    font-size: size(27);
    height: size(1580);

  }

  .bg {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100dvh - sizem(63));
    pointer-events: none;
    user-select: none;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  @media screen and (min-width: 768px) {
    height: size(1080);
    
    img {
      width: 100%;
    }
  }

  }

  .light2,
  .light1 {
    position: absolute;
    top: sizem(380);
    left: 0;
    height: sizem(610);
    width: 100%;
    mix-blend-mode: screen;
    pointer-events: none;
    user-select: none;
  @media screen and (min-width: 768px) {
    top: size(560);
    left: 0;
    height: size(1015);

  }

  }

  .light2 img {
    position: sticky;
    width: sizem(56);
  top: calc(100dvh - sizem(380));
    left: sizem(265);
  @media screen and (min-width: 768px) {
    width: size(155);
    top: size(215);
    left: size(686);

  }
  }

  .light1 img {
    position: sticky;
    width: sizem(237);
  top: calc(100dvh - sizem(380));
    left: sizem(70);
  @media screen and (min-width: 768px) {
    width: size(648);
      top: size(215);
    left: size(152);

  }
  }

  .building {
    position: absolute;
    top: sizem(340);
    left: 0;right: 0;
    height: sizem(660);
    width: 100%;
    pointer-events: none;
    user-select: none;
    img {
      position: sticky;
      width: sizem(265);
   //   top: sizem(230);
  top: calc(100dvh - sizem(415));
      left: sizem(55);
    }
  @media screen and (min-width: 768px) {
    top: size(460);
    left: 0;right: auto;
    height: size(1115);
    img {
      width: size(720);
      top: size(115);
      left: size(110);
    }

  }

  }

  .bott {
    position: absolute;
    top: sizem(340);
    left: 0;
    height: sizem(660);
    width: 100%;
    pointer-events: none;
    user-select: none;
  @media screen and (min-width: 768px) {
    top: 0;
    height: size(1580);
  }

    div {
      position: sticky;
  top: calc(100dvh - sizem(375));
      width: 100%;
      height: sizem(300);
  @media screen and (min-width: 768px) {
  top:0;
      height: 100dvh;
      min-height: size(900);
      max-height: size(1080);}

      &::after {
        content: "";
        position: absolute;
        top: size(0);
        width: 100%;
        display: block;
        height: 100%;
        background: linear-gradient(0deg, #000 1%, #0000 15%);
      }
      &::before {
        content: "";
        position: absolute;
        top: 100%;
        width: 100%;
        display: block;
        height: 100%;
        background:#000;
      }
    }

  }

  .txt {
    position: absolute;
    top: sizem(35);
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    pointer-events: none;
    user-select: none;    flex-direction:column;
    
@media screen and (min-width:768px) {
flex-direction:row;
    align-items: flex-end;
    gap: size(40);
    top: size(130);

}

    .logo {
      flex: 0;
      margin: 0 0  sizem(40) 0;
      width: sizem(300);
@media screen and (min-width:768px) {
      width: size(715);
      margin: 0;
    }
    }

    .t1 {
      flex: 0;
      margin: 0 0 sizem(10) 0;
      width: sizem(250);
@media screen and (min-width:768px) {
  
      margin: 0 0 size(10) 0;
      width: size(610);
}
    }
    .slogo {
      flex: 0;
      margin: 0 0 sizem(10) 0;
      width: sizem(100);
@media screen and (min-width:768px) {
  position: absolute;
  top: size(380);right: size(475);
      margin: 0 0 size(10) 0;
      width: size(200);
}
    }
  }

  .txt2 {
    position: absolute;
    top: sizem(476);
    left: 0;
    right:0;
    font-size: sizem(12);
    height: sizem(0);
@media screen and (min-width:768px) {
    top: size(800);
    left: auto;
    right: size(326);
    font-size: size(20);
    height: size(370);

}

    h3 {
      font-size: 1.7em;
      font-weight: 500;
      letter-spacing: .08em;
      margin-bottom: 0.5em;
    }
  }

  .txt2-content {
    position: sticky;
    top: sizem(0);
    left: 0;right: 0;margin: auto;
    width: 25em;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    letter-spacing: .249em;
    text-align: justify;
    line-height: 1.8;
    opacity: 0;
    transform: translateY(50px);
    transition: all .8s ease;
@media screen and (min-width:768px) {
  
    top: size(400);
}
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
  const mobileOffset = window.innerWidth * 476 / 375

  const desktopOffset = window.innerWidth * 800 / 1920
  // 800 可依實際桌機 txt2 的出現位置再微調

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      } else {
        // 只有往上滑離開時才隱藏
        if (entry.boundingClientRect.top > 0) {
          isVisible.value = false
        }
      }
    },
    {
      rootMargin: isMobile.value
        ? `0px 0px -${mobileOffset}px 0px`
        : `0px 0px -${desktopOffset}px 0px`
    }
  )

  if (target.value) {
    observer.observe(target.value)
  }
})
</script>