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
      <div v-if="!$isMobile()" class="item clickable cursor-pointer" @click="goHome()" v-bind:class="{ hide: !menuOpen }">
        <svg class="clickable" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48.5591 13.72L24.8391 1.75L1.11914 13.72V44.31H19.5191V34.8C19.5191 31.86 21.8991 29.48 24.8391 29.48C27.7791 29.48 30.1591 31.86 30.1591 34.8V44.31H48.5591V13.72V13.72Z"
            stroke="currentColor" stroke-width="1.49" stroke-miterlimit="10" />
        </svg>
        <p class="clickable">home</p>
      </div>
      <div v-if="!$isMobile()" class="item clickable cursor-pointer" @click="facebook()"
        v-bind:class="{ hide: !menuOpen }">
        <svg class="clickable" viewBox="0 0 50 50.39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" stroke-width="1.49" stroke-miterlimit="10"
            d="M24.94,.5C11.41,.54,.47,10.86,.5,23.56c.02,7.55,3.91,14.24,9.91,18.42l-.65,7.56,8-4.06c2.31,.67,4.76,1.03,7.3,1.02,13.53-.03,24.47-10.36,24.44-23.06S38.47,.47,24.94,.5Zm13.59,18.63c-3.67,3.91-7.34,7.82-11,11.74-.22,.24-.32,.16-.5-.02-1.66-1.73-3.34-3.45-5-5.18-.22-.23-.37-.25-.65-.1-3.19,1.79-6.39,3.57-9.58,5.34-.14,.08-.26,.2-.5,.19,.29-.31,.55-.59,.8-.86,3.46-3.69,6.92-7.38,10.38-11.08,.21-.23,.33-.26,.56-.02,1.64,1.72,3.3,3.41,4.94,5.13,.25,.27,.42,.3,.75,.12,3.2-1.8,6.41-3.58,9.62-5.37,.1-.06,.21-.11,.36-.12-.06,.08-.11,.16-.17,.23Z" />

        </svg>
        <p class="clickable">messenger</p>
      </div>
      <div v-if="!$isMobile()" class="item clickable cursor-pointer" @click="contactus()"
        v-bind:class="{ hide: !menuOpen }">
        <svg class="clickable phone" viewBox="0 0 42.66 41.88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" stroke-width="1.49" stroke-miterlimit="10"
            d="M38.82,27.32c-2.55,0-5.05-.39-7.43-1.17-1.16-.39-2.59-.03-3.3,.69l-4.68,3.48c-5.43-2.84-8.78-6.12-11.64-11.41l3.44-4.47c.89-.87,1.22-2.15,.83-3.35-.79-2.33-1.19-4.8-1.19-7.3,0-1.8-1.49-3.28-3.34-3.28H3.84C2.01,.5,.5,1.97,.5,3.78,.5,24.51,17.68,41.38,38.82,41.38c1.84,0,3.34-1.47,3.34-3.28v-7.48c0-1.8-1.49-3.28-3.34-3.28h0Z" />

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
    <div class="section6 effect-section" style="display: none;">
      <S7 />
    </div>
    <div class="section7 effect-section" style="display: none;">
      <S8 />
    </div>
    <div class="section8 effect-section pointer-events-none" style="display: none;">
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
            .phone{
                height: size(38);
                margin-bottom: size(4);
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
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
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
  window.open('https://m.me/zongda.yama/')
}

const contactus = () => {
  document.querySelector('.contact-phone-btn').click();
}

const location = () => {
  document.querySelector('.contact-map-btn').click();
}

const book = () => {
  scrollTo(`.section9`)
  scrolling = false;
  clearTimeout(scrollingTimeout);
  currentSection.value = 9
  document.querySelector('.order').style.zIndex = lastZIndex + 4
}


/**
 * 單頁捲動 start
 * 
 */

const maxSection = 11; // section 總數
const effectSection = 8; // 有特效的畫面
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

      if (e.deltaY > 0) {
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
          if (currentSection.value > effectSection) {
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
            console.log(currentSection.value);
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
