<template>
  <article class="s4" ref="s4">
    <img src="./s4/en.svg" class="en" alt="en">
    <div class="slider" data-aos="fade">
       <img src="./s4/1.webp" alt="3D外觀模擬示意圖">
      <span class="caption">3D外觀模擬示意圖</span>
    </div>
    <div class="main">
      <div class="txt">
    <div class="title"><img src="./s3/titleicon.png">大境</div>
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">千坪大境<br v-if="!isMobile"> 成就奢域價值</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">因為寬闊，氣度更顯雍容自在；高鐵特區珍稀難尋千坪朗闊基地，貼心謙讓約700坪空間，四季涵養綠化達300坪；臨路10米退縮，延伸寬廣棟距視野，僅獻給品味極致生活家。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s4 {
  @apply relative flex items-center justify-center text-[#000] bg-[#FFF];
  width: 100%;
  height:auto;
  padding:0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
    flex-direction:row-reverse;
    .en{position: absolute;top: size(45);left:size(435);z-index: 3;
      width: size(610);}

      .main {
    @apply flex;
    flex: 1;
    margin: 0;
  flex-direction: column;
  text-align: justify;z-index:2;
}
.txt{width: size(625);padding: 0 0 0 7.5em;margin: 5em  0 0 0;

  .title{position: absolute;top: 0;left:-0em;
  }
  .subtitle{margin: 3.4em 0 0 0;text-align: left;
    &::after{bottom: -.7em;left:0;}
    &::before{left: -4.8em;}
  }
}



  .slider {
    margin: 0 0 0 0;
    flex-basis: size(1139);
    height:auto;z-index: 1;
    img{width: 100%;}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  @apply flex-col;
    height: auto;
    padding: 13em 0 3em;
  font-size:sizem(13);
  flex-wrap:nowrap;
  gap:0em;
    .en{top: sizem(7);left:sizem(153);
      width: sizem(203);}

  .main {
    padding: 0 sizem(20);
    width: 100%;
}

.txt {margin: 0em auto 1.3em;padding: 0;width:100%;text-align: center;
  .title{position: absolute;top: -28em;left:-7.3em;
    font-size: 1.05em;
  }
  .subtitle{margin: 1.8em auto 0 auto;
        display: inline-block;
    &::after{height: 2.8em;bottom: -.7em;}
    &::before{width: 16em;left: -4.8em;}
  }
  .desc{letter-spacing: -0.02em;margin: 1.5em 0 1em;}
}


  .slider {
    min-height: sizem(320);
    width: 90%;overflow: hidden;
    img{width: 100%;height: 110%;position: absolute;bottom: 0;left: 0;object-fit: cover;}
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>

