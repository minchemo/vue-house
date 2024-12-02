<template>
  <article class="s1 relative">
    <img class="t0 absolute top-0 left-0 w-full z-10" src="./s1/mo.jpg" alt="" />
    <div class="t1">壹念敦南林蔭．壹遇四維街巷</div>
    <img class="logo" src="./s1/logo.svg" alt="敦南詠楽" />
    <div class="txt relative">
      <img  src="./s1/txt.svg" alt="txt" v-if="!isMobile" />
      <img  src="./s1/txtm.svg" alt="txt" v-else />
      <div class="button absolute">即刻<br>預約</div>
    </div>

    <!-- bg
    <div class="bgs">
      <div class="bg bg-w">
        <div class="wave"></div>
        <div class="w"></div>
        <img class="cloud" src="@/section/s1/cloud.gif" alt="" srcset="" />
      </div>
      <img
        class="bg bg-t"
        v-if="!isMobile"
        src="@/section/s1/bg_t.webp"
        alt=""
        srcset=""
      />
      <img
        class="bg bg-t"
        v-else
        src="@/section/s1/bg_tm.webp"
        alt=""
        srcset=""
      />
      <img
        class="bg bg-b"
        v-if="!isMobile"
        src="@/section/s1/bg_b.webp"
        alt=""
        srcset=""
      />
      <img
        class="bg bg-b"
        v-else
        src="@/section/s1/bg_bm.webp"
        alt=""
        srcset=""
      />
      <img class="t6" src="@/section/s1/t6.png" alt="" srcset="" />
    </div> -->
  </article>
</template>

<style lang="scss" scoped> 
@import "@/assets/style/function.scss";

.s1 {
  height: sizem(550);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;font-size: sizem(15);
  // background: #0006;
  
@media screen and (min-width: 768px) {
  height: size(1080);font-size: size(40);

}

  .t0{
    opacity: .0;pointer-events: none;
  }
  .t1{color: #fff;font-weight: 600;letter-spacing: 0.23em;
    margin: 0 auto;
    text-shadow: 0 0.05em .4em #004d64;
  }
  .logo{width: sizem(225);
    margin: 3.1em auto 4em auto;
    filter:drop-shadow(0 0.1em .2em #034C);
    @media screen and (min-width: 768px) {
      margin: 3.5em auto 3.6em auto;
      width: size(632);
    }
  }
  .txt{width: sizem(225);
    margin: 0 auto 1.4em auto;
    filter:drop-shadow(0 0.1em .2em #034C);
  img{width: 100%;}
  .button{right: 0;bottom: 2.3em;letter-spacing: .25em;color: #0c7494;
  background: #fff;font-size:1em;font-weight: 900;text-align: center;
  width: 3.2em;padding: .1em 0 .1em 0.2em;
  transition: transform 2s,border-radius 2s;
  &:hover{transform: scale(1.2);border-radius: .6em;}
    @media screen and (min-width: 768px) {
      bottom: 0.1em;
    }
  }
    @media screen and (min-width: 768px) {
      width: size(1227);
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
