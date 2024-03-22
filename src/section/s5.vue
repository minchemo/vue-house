<template>
  <article class="s5">
    <img src="./s1/bg2.webp" class="eggbg1" alt="蛋黃">
    <img src="./s1/oo.svg" alt="oo" class="oo1">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">新購屋經濟學 <br v-if="isMobile"> 房貸瘦身術</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">成家×收租  好室成雙</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">麗寶新購屋經濟學「好室成雙」新格局，讓您一次晉升「成家屋主」+「收租房東」兩種身份，一間自住一間收租，邊住邊賺立即回本，加上地上權低於市場行情總價，利上加利首購出手最佳時機。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:10em 0 10em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column-reverse;
	.eggbg1{position: absolute;
    display: block;
    top: size(600);left:size(-50);width:size(1000);
		transform:translateY(-10%);
		animation: an 2s ease-in-out infinite alternate-reverse;}
    .oo1{position: absolute;bottom:size(0);height:size(50);left:size(60);
		transform: translateX(20%);
		animation: an 3s ease-in-out infinite alternate;}
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1500);
}

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(844);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }

    .splide__pagination{
      justify-content: flex-end;
      bottom: -2em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;
background:linear-gradient(135deg, #3F94CA 0%, #71A3A5 20%, #E0C663 50%,#E1A843 70%);
	.eggbg1{
    top: sizem(50);left:sizem(100);width:sizem(400);}
  .oo1{top:sizem(20);height:sizem(20);left:sizem(10); right: auto;}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 4.4em auto 1.3em;
}

  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(250);
      
    }
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

const imgs = [
  {
    img:new URL("./s5/1.webp", import.meta.url).href ,
    caption: "現場實景經電腦修飾"
  },
  {
    img:new URL("./s5/2.webp", import.meta.url).href ,
    caption: "現場實景經電腦修飾"
  },
  {
    img:new URL("./s5/3.webp", import.meta.url).href ,
    caption: "現場實景經電腦修飾"
  },
  {
    img:new URL("./s5/4.webp", import.meta.url).href ,
    caption: "現場實景經電腦修飾"
  },
]
</script>

