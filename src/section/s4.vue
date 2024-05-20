<template>
  <article class="s4" ref="s4">
    <img src="./s4/hr.webp" class="hr" alt="亮光">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">黃線捷運  軌道鍍金</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">距南京路/輜汽路口附近捷運Y19(新甲站)約800公尺，屬於鳳山都市計畫中的精華站點、增值可期！黃線未來可連結捷運紅橘線、輕軌、台鐵，在市區形成格狀網路，預計2028年底完工通車。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <img src="./s4/1.webp" alt="捷運">
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s4 {
  @apply relative flex items-center text-[#fff] bg-[#292A2B];
  width: 100%;
  height:auto;
  padding:0;
  font-size:size(19);
  gap:0em;
  flex-wrap: wrap;
    flex-direction:row-reverse;
    justify-content:flex-start;
  .hr{position: absolute;
  width:100%;bottom: size(-20);left:size(0);pointer-events: none;z-index:2;
  }


  .main {
    @apply flex;
    flex: 1;
    margin: 0;
  flex-direction: column;
  text-align: justify;z-index:2;
}
  .txt{width:size(570);}



  .slider {
    margin: 0 size(-10) 0 0;
    flex-basis: size(1132);
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
  padding: 0;
font-size:sizem(15);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
  .hr{
  width:sizem(500);bottom: sizem(-8);left:sizem(-50);
  }
.main {
  padding: 0 sizem(32.5);
  width: 100%;
}

.txt {margin: 4.4em auto 1.3em;width: 100%;
}


.slider {
  position: relative;
  height: auto;
  width: 115%;
  left: 0;
}
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}
</script>

