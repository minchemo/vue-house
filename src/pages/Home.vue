<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div
    v-bind:class="{
      'opacity-0': !isLoading,
      'pointer-events-none': !isLoading,
    }"
    class="transition-all duration-500flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]"
  >
    <img class="w-32" src="@/assets/loading_w.gif" alt="幸福享享" srcset="" />
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div
    class="home bg-[#de5b1b] overflow-hidden font-['Noto_Serif_TC'] pb-[64px] md:pb-0"
  >
    <S1 />
    <S10 />
    <S2 />
    <!-- <S9 /> -->
    <S3 />
    <S5 />
    <S4 />
    <S6 />
    <!-- <S7 />
     <S8 /> -->    
    <Order />
  </div>
</template>

<style lang="scss" >
@import "@/assets/style/function.scss";
img {
  display: inline;
  max-width: unset;
  height: unset;
  /* margin: 0 auto; */
}

.t1 {
  color: #f4e827;
  font-size: size(51);
  font-weight: 700;
  line-height: 1.27;
  letter-spacing:0.08em;
  margin-bottom: size(112);
  padding-bottom: size(35);
  border-bottom: 1px solid #fff;
  @media screen and (max-width: 768px) {
    font-size: sizem(20);
    margin-bottom: sizem(14);
    padding-bottom: sizem(14);
  }
}
.t2 {
  font-size: size(32);
  font-weight: 500;
  text-align: justify;
  line-height:1.6;
  letter-spacing: 0.1em;
  @media screen and (max-width: 768px) {
    font-size: sizem(13);    
  }
}

.slide {
      .splide__track{height: 100%;}
      .slide-item {
        background: #eee;
        background-size: cover;
      }
}
.caption {
  @apply absolute font-['Noto_Sanc_TC'];
  right: .5em;
  bottom: .5em;
  font-size: size(20);
  font-weight: 400;
  letter-spacing: .1em;
  text-shadow: 0 0.2em 0.3em #000;
  @media screen and (max-width: 768px) {
    font-size: sizem(12);
  }
}
//點點樣式
.splide__pagination {
  @apply w-full flex;
  font-size: size(20); //控制大小
  padding: .5em 0;
  li {
    line-height: 0;
    button {
      @apply rounded-full;
      width: .5em;
      height: .5em;
      background: #FF66;
      &.is-active {
        background: #FF6C;
      }
    }
  }
  gap: size(13);
}


//箭頭樣式
.splide__arrows {
        @apply absolute z-20 w-full flex justify-between;
        top: 0;bottom: 0;
        align-items: center;
        padding: 0 2%;
        pointer-events: none;
        

        .splide__arrow {
          width: 6%;
          display: flex;
          pointer-events: stroke;
          justify-content: center;
          align-items: center;
          cursor: pointer;
            filter:drop-shadow(0px 2px 3px #000);
          &.splide__arrow--prev {
            transform: scaleX(-1);
          }
          svg{width: 100%;
            filter: invert(1);}
        }
      }


</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
// import S9 from "@/section/s9.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S10 from "@/section/s10.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from "aos"

const isLoading = ref(true)
const gtmNoScript = ref("")
const config = ref({
  showNav: false,
})

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 1000
    });
  };
})
</script>