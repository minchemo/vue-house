<template>
  <article class="s2">
    <div class="bg absolute"></div>
    <div class="box absolute"><img src="./s1/box.jpg" alt=""></div>
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">壹念敦南，壹遇四維｜傳世絕押</h3>
      <h3 class="en" data-aos="fade-up" data-aos-delay="0">The Aesthetics of Silence </h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">林蔭敦南使節之道，豪宅中軸百年家邸</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">70米寬、4600米長敦化南北路，以大器尺度提點尊貴，用枝繁葉茂訴說派頭，也流轉出國際台北的人文豐壤；敦化南北路新舊豪宅經久芬芳，華固敦品、富邦藝樹、元大柏悅、潤泰敦仁…等，無數經典名邸長久相伴。</p>
    </div>
<div class="pics relative">
<div class="list">
  <img src="./s2/1.jpg" alt="">
</div>
<div class="list">
  <img src="./s2/2.jpg" alt="">
</div>
<div class="list">
  <img src="./s2/3.jpg" alt="">
</div>
</div>

  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply w-full relative text-[#0c7494];
 // height: size(1336);
 /* background-image: url("@/section/s2/bg.jpg");
  background-size: cover; */
  padding: sizem(50) 0 2em 0;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 600;
@media screen and (min-width: 768px) {
  padding: size(223) 0 0 0;
  font-size: size(17);
}

  .bg{font-size: sizem(5);
    border: sizem(2) solid currentColor;color: #fff;width: 94%;margin:auto;left: 0;right: 0;top: sizem(5);bottom:sizem(60);
  &::before{content: "";background: currentColor;position: absolute;left: 1em;right: 1em;top: 1em;bottom: 1em;display: block;}
@media screen and (min-width: 768px) {
  font-size: size(12);
  top: size(150);bottom:size(110);
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
.box{width:sizem(50);height: sizem(150);bottom:sizem(-20);right:sizem(30);z-index:2;overflow: hidden;
  @media screen and (min-width: 768px) {    
    width:size(130);height: size(320);bottom:size(-230);right:size(170);
  }
img{height: 120%;opacity: .6;transform: translateX(-60%);
  animation: box1 20s linear alternate infinite;
  @media screen and (min-width: 768px) {
    height: 150%;margin-top:-50%;
    animation: box1 30s linear alternate infinite;
  }
}
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
