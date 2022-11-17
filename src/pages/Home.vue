<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !globalStore.loading,
    'pointer-events-none': !globalStore.loading
  }"
    class="transition-all duration-500 flex-col flex items-center justify-center fixed w-screen  h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="@/assets/loading_yama.svg" alt="宗大敘山" srcset="">
  </div>
  <!--loading end-->
  <!-- <Nav v-if="config.showNav" /> -->

  <div class="new-nav">
    <div class="items">
      <div class="item clickable cursor-pointer home-b" @click="goHome()">
        <img class="clickable" src="@/section/navlogo.svg" alt="" srcset="">
      </div>
      <div v-if="!$isMobile()" class="item clickable cursor-pointer menu-open" @click="menuOpen = !menuOpen">
        <svg v-if="menuOpen" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.7796 0.690002L1.09961 43.38" stroke="url(#paint0_linear_133_6278)" stroke-width="1.5"
            stroke-miterlimit="10" />
          <path d="M1.09961 0.690002L43.7796 43.38" stroke="url(#paint1_linear_133_6278)" stroke-width="1.5"
            stroke-miterlimit="10" />
          <defs>
            <linearGradient id="paint0_linear_133_6278" x1="0.569609" y1="22.04" x2="44.3096" y2="22.04"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.35" stop-color="#304637" />
              <stop offset="0.6" stop-color="#2E4E38" />
            </linearGradient>
            <linearGradient id="paint1_linear_133_6278" x1="44.3096" y1="22.04" x2="0.569611" y2="22.04"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.35" stop-color="#304637" />
              <stop offset="0.6" stop-color="#2E4E38" />
            </linearGradient>
          </defs>
        </svg>
        <svg v-else viewBox="0 0 53 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.9793 31.74H0.779297V33.32H52.9793V31.74Z" fill="url(#paint0_linear_133_6279)" />
          <path d="M52.9793 16.71H0.779297V18.29H52.9793V16.71Z" fill="url(#paint1_linear_133_6279)" />
          <path d="M52.9793 0.909973H0.779297V2.48997H52.9793V0.909973Z" fill="url(#paint2_linear_133_6279)" />
          <defs>
            <linearGradient id="paint0_linear_133_6279" x1="0.779297" y1="32.53" x2="52.9793" y2="32.53"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.35" stop-color="#304637" />
              <stop offset="0.6" stop-color="#2E4E38" />
            </linearGradient>
            <linearGradient id="paint1_linear_133_6279" x1="0.779297" y1="17.5" x2="52.9793" y2="17.5"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.35" stop-color="#304637" />
              <stop offset="0.6" stop-color="#2E4E38" />
            </linearGradient>
            <linearGradient id="paint2_linear_133_6279" x1="0.779297" y1="1.70997" x2="52.9793" y2="1.70997"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.35" stop-color="#304637" />
              <stop offset="0.6" stop-color="#2E4E38" />
            </linearGradient>
          </defs>
        </svg>

        <p class="clickable">{{ menuOpen ? 'close' : 'menu' }}</p>
      </div>
      <div v-if="!$isMobile()" class="item clickable cursor-pointer" @click="goHome()"
        v-bind:class="{ hide: !menuOpen }">
        <svg class="clickable" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48.5591 13.72L24.8391 1.75L1.11914 13.72V44.31H19.5191V34.8C19.5191 31.86 21.8991 29.48 24.8391 29.48C27.7791 29.48 30.1591 31.86 30.1591 34.8V44.31H48.5591V13.72V13.72Z"
            stroke="currentColor" stroke-width="1.49" stroke-miterlimit="10" />
        </svg>
        <p class="clickable">home</p>
      </div>
      <div v-if="!$isMobile()" class="item clickable cursor-pointer" @click="facebook()"
        v-bind:class="{ hide: !menuOpen }">
        <svg class="clickable" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31.2013 43.49C30.7913 43.49 30.7913 43.49 30.7913 43.09C30.7913 37.96 30.7913 32.83 30.7913 27.69C30.7913 27.29 30.7913 27.29 31.2013 27.29C32.7613 27.29 34.3213 27.29 35.8713 27.29C36.1413 27.29 36.2613 27.24 36.3013 26.93C36.5313 25.01 36.7813 23.09 37.0513 21.18C37.0913 20.9 37.0113 20.82 36.7413 20.82C34.8913 20.82 33.0313 20.82 31.1813 20.82C30.8913 20.82 30.7913 20.74 30.7913 20.44C30.8113 19.03 30.8113 17.61 30.8213 16.2C30.8213 15.84 30.9113 15.49 31.0413 15.16C31.4513 14.18 32.2913 13.89 33.2413 13.81C34.4513 13.71 35.6613 13.78 36.8713 13.77C37.3113 13.77 37.3113 13.77 37.3113 13.33C37.3113 11.7 37.3113 10.07 37.3113 8.43999C37.3113 7.98999 37.3113 7.98999 36.8813 7.94999C35.1913 7.79999 33.4913 7.68999 31.7913 7.75999C29.6813 7.84999 27.7913 8.49999 26.2913 10.05C25.1413 11.24 24.5513 12.7 24.2813 14.32C24.1713 15 24.1413 15.68 24.1413 16.37C24.1413 17.73 24.1413 19.1 24.1413 20.46C24.1413 20.75 24.0513 20.82 23.7713 20.82C22.1913 20.81 20.6113 20.82 19.0413 20.81C18.7313 20.81 18.6313 20.9 18.6413 21.21C18.6513 23.11 18.6513 25 18.6413 26.9C18.6413 27.19 18.7313 27.29 19.0213 27.29C20.5913 27.28 22.1613 27.29 23.7213 27.29C23.9946 27.29 24.1313 27.4233 24.1313 27.69C24.1313 32.83 24.1313 37.97 24.1313 43.12C24.1313 43.41 24.0613 43.5 23.7513 43.5"
            stroke="currentColor" stroke-width="1.49" stroke-miterlimit="10" />
          <path d="M23.9009 43.5H1.71094V0.75H44.0609V43.5H31.201" stroke="currentColor" stroke-width="1.49"
            stroke-miterlimit="10" />
        </svg>
        <p class="clickable">facebook</p>
      </div>
      <div v-if="!$isMobile()" class="item clickable cursor-pointer" @click="contactus()"
        v-bind:class="{ hide: !menuOpen }">
        <svg class="clickable" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.5096 22.06C28.5796 22.06 26.6896 21.76 24.8896 21.16C24.0096 20.86 22.9296 21.14 22.3896 21.69L18.8495 24.37C14.7395 22.18 12.2096 19.65 10.0396 15.57L12.6396 12.12C13.3096 11.45 13.5595 10.46 13.2695 9.54C12.6695 7.74 12.3695 5.84 12.3695 3.91C12.3695 2.52 11.2395 1.38 9.83954 1.38H4.04953C2.65953 1.38 1.51953 2.51 1.51953 3.91C1.51953 19.89 14.5196 32.9 30.5096 32.9C31.8996 32.9 33.0395 31.77 33.0395 30.37V24.6C33.0395 23.21 31.9096 22.07 30.5096 22.07V22.06Z"
            stroke="currentColor" stroke-width="1.49" stroke-miterlimit="10" />
        </svg>
        <p class="clickable">contact us</p>
      </div>
      <div v-if="!$isMobile()" class="item clickable cursor-pointer" @click="location()"
        v-bind:class="{ hide: !menuOpen }">
        <svg class="clickable" viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.4398 0.75C8.10982 0.75 1.33984 7.52 1.33984 15.85C1.33984 26.32 16.4498 44.19 16.4498 44.19C16.4498 44.19 31.5398 25.8 31.5398 15.85C31.5398 7.52 24.7698 0.75 16.4398 0.75V0.75ZM20.9998 20.27C19.7398 21.53 18.0898 22.15 16.4398 22.15C14.7898 22.15 13.1398 21.52 11.8798 20.27C9.36982 17.76 9.36982 13.67 11.8798 11.16C13.0998 9.94 14.7098 9.27 16.4398 9.27C18.1698 9.27 19.7798 9.94 20.9998 11.16C23.5098 13.67 23.5098 17.76 20.9998 20.27V20.27Z"
            stroke="currentColor" stroke-width="1.49" stroke-miterlimit="10" />
        </svg>
        <p class="clickable">location</p>
      </div>
      <div class="item book clickable cursor-pointer" @click="book()">
        <h3 class="clickable">立即預約</h3>
        <p class="clickable">book now</p>
      </div>
    </div>
  </div>
  <div class="home relative bg-white overflow-hidden font-['Noto_Serif_TC',serif]">
    <h1 style="display:none;">宗大敘山</h1>
    <div class="section1 effect-section pointer-events-none">
      <S1 />
    </div>
    <div class="section2 effect-section" style="display: none;">
      <S2 />
    </div>
    <div class="section3 effect-section" style="display: none;">
      <S3 />
    </div>
    <div class="section4 effect-section" style="display: none;">
      <S4 />
    </div>
    <div class="section5 effect-section" style="display: none;">
      <S5 />
    </div>
    <div class="section6 effect-section pointer-events-none" style="display: none;">
      <S6 />
    </div>
    <Order />
  </div>
  <Mouse v-if="!$isMobile()" />
</template>


<style lang="scss">
@import '@/assets/style/function.scss';
.w-32{
  width: 320px !important;

  @media screen and (max-width:768px) {
    width: 200px !important;
  }
}

.new-nav {
    @apply fixed left-0 top-0;
    z-index: 9999;
    .items {
        @apply flex;
        filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
        .item {
            @apply flex flex-col items-center justify-center;
            width: size(160);
            height: size(147);
            gap: size(10);
            transition: all .2s;
            background-color: #304637;
            img {
                height: size(42);
            }
            svg {
                height: size(42);
                color: #C6A93E;
            }
            p {
                color: #fff;
                font-size: size(11);
                letter-spacing: size(3);
            }
            &:hover {
                background: #C6A93E;
                svg {
                    color: #1E4E45;
                }
            }
            &.home-b {
                img {
                    width: size(60);
                    height: auto;
                }
                &:hover {
                background-color: #304637;
                    svg {
                        color: #1E4E45;
                    }
                }                
            }
            &.menu-open {
                background: #C6A93E;
            }
            &.book {
                border: 3px solid #C6A93E;
                box-sizing: border-box;
                background: rgba(198, 169, 62, 0.6);
                h3 {
                    font-size: size(16.5);
                    letter-spacing: size(3);
                        color: #fff;
                }
                p {
                        color: #ffe69b;
                    font-style: italic;
                }
                &:hover {
                    background: rgba(230, 200, 100,0.8);
                    h3 {
                    color: #fff;
                    }
                    p {
                    color: #fff;
                    }
                }
            }
            &.hide {
                overflow: hidden;
                width: 0;
            }
        }
    }
}
.home {
  background-color: #304730;
  padding-top: 100vh;
}
img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
} 

::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.effect-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
}


@media screen and (max-width:768px) {
  .home{
    padding-top: 0;
  }
  .effect-section {
    position: relative;
    display: block !important;
  }
.new-nav {
    .items {
        .item {
            width: size-m(79.46);
            height: size-m(73);
            gap: size(6.3);
            p {
                font-size: size-m(10);
                letter-spacing: size-m(1);
            }
            &.home-b {
                img {
                    width: size-m(30);
                }           
            }
            &.book {
                border: 2px solid #C6A93E;
                h3 {
                    font-size: size-m(10);
                    letter-spacing: size-m(1);
                }
            }
        }
    }
}
}
</style>

<script setup>
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref, inject, getCurrentInstance } from "vue"

import AOS from 'aos';
import { useGlobalStore } from "../store/global"
import Mouse from "../layout/mouse.vue"

import { gsap } from "gsap";
import { Splide } from "@splidejs/vue-splide"

const globalStore = useGlobalStore();

const gtmNoScript = ref('')
const config = ref({
  showNav: false
})

const menuOpen = ref(false);

const goHome = () => {
  if (currentSection.value == 1) {
    return
  }
  scrollTo('.home');
  currentSection.value = 1;
  lastZIndex += 3;
  show(currentSection.value, lastZIndex)
  document.querySelector('.order').style.zIndex = lastZIndex + 4
}

const facebook = () => {
  window.open('https://facebook.com')
}

const contactus = () => {
  document.querySelector('.contact-phone-btn').click();
}

const location = () => {
  document.querySelector('.contact-map-btn').click();
}

const book = () => {
  scrollTo(`.section7`)
  scrolling = false;
  clearTimeout(scrollingTimeout);
  currentSection.value = 7
  document.querySelector('.order').style.zIndex = lastZIndex + 4
}


/**
 * 單頁捲動 start
 * 
 */

const maxSection = 10; // section 總數
const effectSection = 6; // 有特效的畫面
const currentSection = ref(1); // 目前所在 section
const duration = 1
let lastZIndex = 20;
let scrolling = false;
let scrollingTimeout;


const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

const scrollEffect = () => {
  const isTouchPad = (e) => {
    let isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
    return isTouchPad;
  }

  window.addEventListener("wheel", e => {
    let modal = document.querySelector('.policy-modal');
    let getComputed = window.getComputedStyle(modal);
    let opacity = getComputed.getPropertyValue('opacity');
    
    if (opacity == 0) {

      e.preventDefault();

let deltaY = Math.abs(e.deltaY);

if (scrolling || deltaY < 80) {
  return
}

// 避免重複捲動
clearTimeout(scrollingTimeout);
scrolling = true;

scrollingTimeout = setTimeout(() => {
  scrolling = false;
}, isTouchPad(e) ? duration * 1000 * 1.2 : duration * 1000);

if (e.deltaY   > 0) {
  if (currentSection.value + 1 <= maxSection) {
    if (currentSection.value >= effectSection) {
      scrollTo(`.section${currentSection.value + 1}`)
      clearTimeout(scrollingTimeout);
      scrollingTimeout = setTimeout(() => {
        scrolling = false;
      }, isTouchPad(e) ? 800 : 300);
      currentSection.value++

      return
    }
    hide(currentSection.value);
    currentSection.value++
    lastZIndex += 3;
    show(currentSection.value, lastZIndex)
  } else if (currentSection.value == maxSection) {
    //go home
    // goHome()
  }
} else {
  if (currentSection.value - 1 >= 1) {
    if (currentSection.value >= effectSection) {
      scrollTo(`.section${currentSection.value - 1}`)
      clearTimeout(scrollingTimeout);
      scrollingTimeout = setTimeout(() => {
        scrolling = false;
      }, isTouchPad(e) ? 800 : 300);
      currentSection.value--
      return
    }
    scrollTo('.home')
    hide(currentSection.value);
    currentSection.value--;
    lastZIndex += 3;
    show(currentSection.value, lastZIndex)
  }
}
document.querySelector('.order').style.zIndex = lastZIndex + 4

    }
  }, { passive: false });


  // 禁用任何滾動鍵
  window.onmousedown = (event) => {
    if (event.button == 1 || event.buttons == 4) {
      event.preventDefault()
    }
  }
  window.onkeydown = (event) => {
    if (event.keyCode == 32 || event.keyCode == 33 || event.keyCode == 34) {
      event.preventDefault()
    }
  }

}

const getNext = (curr) => {
  if (curr + 1 > maxSection) {
    return 1
  } else {
    return curr + 1
  }
}

const getPrev = (curr) => {
  if (curr - 1 <= 0) {
    return maxSection
  } else {
    return curr - 1
  }
}

const hide = (section) => {
  gsap.to(`.effect-section.section${section}`, {
    css: {
      display: 'none',
      transform: 'translate(0px, 0px)',
    },
    duration: duration,
    ease: "power1.out"
  })
}

const show = (section, index) => {
  gsap.fromTo(`.effect-section.section${section}`, {
    css: {
      display: 'none',
      opacity: 0.5,
      transform: 'translate(0px, 100%)',
      zIndex: index
    },
  }, {
    css: {
      display: 'block',
      opacity: 1,
      transform: 'translate(0px, 0px)',
      zIndex: index
    },
    duration: duration,
    ease: "power2"
  })

  gsap.fromTo(document.querySelector(`.effect-section.section${section}`).firstChild.children, {
    css: {
      y: '10%',
      opacity: 0,
      scale: 1.25
    },
  }, {
    css: {
      y: 0,
      opacity: 1,
      scale: 1
    },
    duration: duration / 2,
    ease: "power1",
    onComplete: function () {
      menuOpen.value = false;
    }
  })

  AOS.refresh();
}

/**
 * 單頁捲動 end
 * 
 */

onMounted(() => {
  window.onload = function () {
    // globalStore.hideLoading();

    AOS.init({
      offset: 0,
      duration: 800
    });

  };

  if (!globals.$isMobile()) {
    setTimeout(() => {

      scrollTo('.s1')
      show(1, 10)

      scrollEffect()
    }, 100);
  }
})


</script>
