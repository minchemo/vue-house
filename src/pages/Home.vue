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
  <div class="home overflow-hidden font-['Noto_Serif_TC',serif]  text-[#333]">
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
    <!-- <S2v /> -->
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
    background: url("@/section/s1/bg.jpg") fixed 0 0;
    background-size:sizem(450) auto;
    width: 100%;

    @media screen and (min-width: 768px) {
    background-size:size(900) auto;
    }
}

.caption {
  @apply absolute;
  right: 1em;
  bottom: .5em;
  font-weight: 300;
  font-size: size(15);
  color: #FFF;
  z-index: 3;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
}


.txt {
  position: relative;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.6;
  width: 100%;
  letter-spacing: 0.05em;
  text-align: justify;
  z-index: 3;

  .title {
    // @apply font-['Noto_serif_TC',serif];
    font-size: 2.2em;
    margin: -.1em auto 0em;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: 0em;

    // text-align: center;
    b {
      font-size: 1.2em;
      line-height: 1;
    }
  }

  .hr {
    width: 100%;
    height: 0;
    margin: 1.2em 0;
    border: 0;
    border-bottom: 1px solid currentColor;
  }

  .subtitle {
    font-size: 1.15em;
    font-weight: 500;
    margin: .6em auto 0.45em;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 0.06em;
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
    filter: drop-shadow(0em 0.2em 0.2em rgba(0, 0, 0, .5));

    .prev,
    .next {
      width: 5%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;

      justify-content: center;
      align-items: center;
      background: url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
      background-size: 50% auto;
      transition: background-color .5s;

      &:hover {
        background-color: #0003;
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
    color: #fff;

    li {
      button {
        @apply rounded-full relative;
        width: 1em;
        height: 1em;
        background: transparent;
        transition: transform .5s;
        border: 2px solid currentColor;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: currentColor;
          border-radius: 50%;
          opacity: .5;
          left: 0;
          top: 0;
          transform: scale(0);
          transition: transform .5s, opacity .5s;
        }

        &:hover {
          transform: scale(.8);
        }

        &.is-active {
          &::before {
            transform: scale(1.3);
            opacity: 1;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {


  // .bg{background: linear-gradient(90deg, #17A9AF 0%, #007CBB 100%); }
  .caption {
    font-size: sizem(12);
  }

  .txt {
    line-height: 1.5;
    letter-spacing: 0.01em;

    .title {
      font-size: 1.9em;
    }

    .subtitle {
      font-size: 1.1em;
    }
  }

  .slider {
    @apply relative;

    .slide-item {
      img {
        border-radius: 0em;
      }

    }

    .arrows {

      .prev,
      .next {
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
          @apply rounded-full hover:opacity-50;
          width: sizem(10.3);
          height: sizem(3.34);
          border: sizem(1) solid #fff;

          &.is-active {
            @apply bg-white;
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
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
// import S2v from "@/section/s2v.vue"
// import S11 from "@/section/s11.vue"
/*  */
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import S10 from "@/section/s10.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

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
</script>
