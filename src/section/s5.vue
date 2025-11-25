<template>
  <article class="s5">
    <div class="bg absolute" data-aos="fade" data-aos-delay="0"></div>
    <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">台北綠核大安森林，書卷學器捷運悠遊</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">大安森林公園800米綠帶軸距綠色流域，台灣大學、師範大學、私立復興實中等，孩子同儕等同未來事業夥伴。步行6分鐘捷運科技大樓站，連通大安站東西縱橫；貴族醫療頂級照護，國泰、中山、宏恩與聯合醫院，全面守護家人健康。</p>
    </div>
<div class="pics relative">
<div class="list" data-aos="fade-up" data-aos-delay="0">
  <img src="./s5/1.jpg" alt="">
</div>
<div class="list" data-aos="fade-up" data-aos-delay="200">
  <img src="./s5/2.jpg" alt="">
</div>
<div class="list" data-aos="fade-up" data-aos-delay="400">
  <img src="./s5/3.jpg" alt="">
</div>
</div>

  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s5 {
  @apply w-full relative text-[#0c7494];
 // height: size(1336);
 /* background-image: url("@/section/s2/bg.jpg");
  background-size: cover; */
  padding: sizem(50) 0 5em 0;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 600;
@media screen and (min-width: 768px) {
  padding: size(223) 0 9em 0;
  font-size: size(17);
}

  .bg{font-size: sizem(5);
    border: sizem(2) solid currentColor;color: #fff;width: 94%;margin:auto;left: 0;right: 0;top: sizem(5);bottom:sizem(120);
  &::before{content: "";background: currentColor;position: absolute;left: 1em;right: 1em;top: 1em;bottom: 1em;display: block;}
@media screen and (min-width: 768px) {
  font-size: size(12);
  top: size(150);bottom:size(410);
  border: size(5) solid currentColor;width: 91.5%;
}
  }
.txt {margin:0 auto 3em;
  display: flex;
  flex-wrap: wrap;text-align: center;
  justify-content: center;gap:0 4em;width: 100%;
  @media screen and (min-width: 768px) {
    margin:0 auto 5em;
  }

  .title{width: 100%;font-size: 1.5em;
    @media screen and (min-width: 768px) {
      font-size: 3.1em;
    }
  }
  .en{width: 100%;font-size: .6em;text-transform:uppercase;margin: .3em auto 3em;letter-spacing: 0.16em;
    @media screen and (min-width: 768px) {
      font-size: 1.2em;margin: .3em auto 4em;
    }
  }
  .subtitle{display: flex;justify-content: center;align-items: center;padding:.5em 0;margin:0 0 1.7em 0;
    width:sizem(280);font-size: 1.1em;border:0 solid currentColor;border-width: 1px 0 1px 0;
    @media screen and (min-width: 768px) {
      width: size(560);font-size: 1.6em;padding: 0;margin: 0;
    }
  }
  .desc{width: sizem(280);text-align: justify;color: #000;margin: -.2em 0;
    @media screen and (min-width: 768px) {
      width: size(560);
    }
  }
}
.pics{height:sizem(110);display: flex;justify-content: center;gap:.3em;width: 100%;z-index: 3;
  .list{height: 100%;}
img{height: 100%;}
    @media screen and (min-width: 768px) {
      height:size(560);gap:1em;
    }
}
.box{width:sizem(150);height: sizem(150);bottom:sizem(-30);right:sizem(108);z-index:2;overflow: hidden;
  @media screen and (min-width: 768px) {
    bottom:size(-60);width:size(600);height: size(500);right:size(640);
  }
img{height: 150%;opacity: .6;transform: translateX(-50%);margin-top: -40%;
  animation: box1 15s linear alternate infinite;}
}
@keyframes box1 {
  to {
  transform: translateX(0%);
}
}
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

</script>
