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
  <!--loading end-->
  <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#000] text-[#fff]">
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <S10 />
    <S11 />
    <S12 />
    <S13 />
    <!-- 
    <S9 />
    <S2v /> -->
    <!--
    <div class="bg">
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
    </div>
    <S1new />
    <S1new2 /> -->
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an1 {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

.home {
  width: 100%;
  font-size: sizem(13);
  line-height: 1.7;

  @media screen and (min-width: 768px) {
    font-size: size(22);
  }
}

.caption {
  @apply absolute;
  right: 1em;
  bottom: .5em;
  font-weight: 300;
  font-size: sizem(9);
  color: #FFF;
  z-index: 3;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 768px) {
    font-size: size(15);
  }
}

.txt {
  position: relative;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
  width: 100%;
  letter-spacing: 0em;
  text-align: center;
  z-index: 3;

  @media screen and (min-width: 768px) {
    // text-align: justify;
  }

  .title {
    font-size: 1.9em;
    margin: 0em auto 0.5em;
    line-height: 1.38;
    font-weight: 700;
    letter-spacing: 0em;

    // Font-family: 'Noto Serif TC',serif;
    b {
      font-size: 1.2em;
      line-height: 1;
    }

    @media screen and (min-width: 768px) {
      font-size: 2.25em;
      margin: 0em auto 0.3em;

    }
  }

  .subtitle {
    font-size: 1.2em;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0em;
    margin-bottom: 0.4em;

    @media screen and (min-width: 768px) {
      font-size: 1.1em;

    }
  }

  .icon {
    width: 1.7em;
    margin: 1.2em auto;
  }

  .en {
    height: 6em;
    margin: 0 auto 1em;

    @media screen and (min-width: 768px) {
      // height: 6em;
      //  font-size: 5em;
    }
  }

  .t1 {
    height: 5.4em;
    margin: 0 auto 1em;

    @media screen and (min-width: 768px) {
      height: 4.5em;
      // height: 6em;
      //  font-size: 5em;
    }
  }

  .hr {
    width: 9em;
    margin: auto;
    margin: 1em auto;

    @media screen and (min-width: 768px) {
      width: 10em;

    }
  }

}

.slider {
  @apply relative;
  z-index: 2;

  .slide-item {
    img {
      width: 100%;
      height: 100%;
      border-radius: 0;
      object-fit: cover
    }

  }

  .arrows {
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0;
    height: 100%;
    pointer-events: none;
    filter: drop-shadow(0em 0.2em 0.2em rgba(0, 0, 0, .5));overflow: hidden;

    .prev,
    .next {position: relative;
      width: 5%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;

      justify-content: center;
      align-items: center;
      background: url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
      background-size: 50% auto;
      transition: background-color .5s;
      &::before{content: "";position: absolute;top: 0;left: 0;width: 100%;height: 100%;background-color: #0003;transform: translateX(100%);transition:transform .2s ;    filter:none;overflow: hidden;}

    @media screen and (min-width: 768px) {
      &:hover:before {transform: translateX(0%);
      //  
      }
      }
    }

    .prev {
      transform: scaleX(-1);
    }

    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }

  .splide__pagination {
    @apply absolute flex justify-center w-full;
    font-size: size(15);
    bottom: 0;
    gap: .5em;
    color: #CCC;

    @media screen and (max-width: 767px) {
      display: none;
    }

    li {
      button {
        @apply rounded-full relative;
        width: 1em;
        height: 1em;
        display: block;
        background: transparent;
        transition: transform .5s;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          display: block;
          //   background-color: currentColor;
          border-radius: 50%;
          //    opacity: .5;
          left: 0;
          top: 0;
          transform: scale(1);
          transition: transform .5s, opacity .5s;
          border: 3px solid currentColor;
        }

        &:hover {
          transform: scale(1);
          opacity: 1;
        }

        &.is-active {
          color: #FFF;

          &::before {
            transform: scale(1);
            opacity: 1;
          }
        }
      }
    }
  }
}

@keyframes bg {
  to {
    transform: translateX(0%);
  }
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}


  .shine-row {
    position: absolute;
  display: flex;
   flex-direction:column;
  gap: 0;
  align-items: center;
  font-size: sizem(55);
    @media screen and (min-width: 768px) {
  font-size: size(130);
    }
.shine-dot {
  width:1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  padding: .03em; /* 留白邊寬度，要更寬把這裡改大 */
  background-size: cover;
  background-position: center;
  box-sizing: border-box;/* 換成你自己的三個圓形圖 */
&.dot-y   { background-image: url("@/section/s3/y.svg"); }
&.dot-b   { background-image: url("@/section/s3/b.svg"); }
&.dot-iri { background-image: url("@/section/s3/iri.png"); background-size: 180% 180%; }
&.dot-l   { background-image: url("@/section/s3/l.svg"); }

}

$pot:140%;
.shine-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
&::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 35%,
    rgba(255, 255, 255, 0.5) 47%,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0.5) 53%,
    transparent 65%
  );
  background-size: 300% 300%;
  background-position: -$pot 50%;
  mix-blend-mode: screen;
  opacity: 0;
  animation: shine-sweep 4s ease-in-out infinite;
}
}


/* 三顆依序做出前後差，不會同時掃 */
.shine-dot:nth-child(2) .shine-inner::after { animation-delay: 0.5s; }
.shine-dot:nth-child(3) .shine-inner::after { animation-delay: 1s; }

@keyframes shine-sweep {
  0%   { background-position: -$pot 50%; opacity: 0; }
  12%  { opacity: 1; }
  50%  { background-position: $pot 50%; opacity: 1; }
  62%  { opacity: 0; }
  100% { background-position: $pot 50%; opacity: 0; }
}

}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
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
import S12 from "@/section/s12.vue"
import S13 from "@/section/s13.vue"
/* import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"  */
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref, provide } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 2000
    });
  };

})
const modalOpen = ref(false)
const modalType = ref('')

provide('contactModal', {
  modalOpen,
  modalType
})
</script>
