<template>
  <article class="s6" ref="s6">
    <img src="./s1/bg2.webp" class="eggbg1" alt="蛋黃" v-if="isMobile">
    <img src="./s1/bg3.webp" class="eggbg2" alt="蛋黃">
	<img src="./s1/oo.svg" alt="oo" class="oo1" v-if="!isMobile">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">兩代完美共融 <br v-if="isMobile"> 獨立空間不打擾</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">陪伴×孝親  盡孝成雙</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">除了自住同步收租，也可規劃一間自住一間孝親，兩代同堂不同室，獨立門戶享充足隱私，近鄰雙公園、家樂福，方便隨時出門散步、購物共聚天倫，家人之間的親情不再因居住距離而降溫。</p>
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



.s6 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:11em 0 10em 0;
  font-size:size(19);
  gap:3em;
  flex-wrap: wrap;
	.eggbg2{position: absolute;
    display: block;
    top: size(60);right:size(260);width:size(500);
		transform:translateY(-20%);
		animation: an 4s ease-in-out infinite alternate;}
    .oo1{position: absolute;bottom:size(-50);height:size(50);left:size(1000);
		transform: translateX(20%);z-index: 2;
		animation: an 3s ease-in-out infinite alternate;}

  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
  img{width: 100%;position: relative;}}
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}



  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
background:linear-gradient(135deg, #71A3A5 0%, #E0C663 30%,#E1A843 50%);
	.eggbg1{position: absolute;
    display: block;
    top: sizem(50);left:sizem(-100);width:sizem(500);
		transform:translateY(-10%);
		animation: an 2s ease-in-out infinite alternate-reverse;}
  .img{position: absolute;top:sizem(300);left: auto;
    right:sizem(-155);width:sizem(260);bottom: auto;}

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
    img:new URL("./s6/1.webp", import.meta.url).href ,
    caption: "五華國小實景"
  },
  {
    img:new URL("./s6/2.webp", import.meta.url).href ,
    caption: "淡水河畔公園實景"
  },
  {
    img:new URL("./s6/3.webp", import.meta.url).href ,
    caption: "家樂福商圈實景"
  },
  {
    img:new URL("./s6/4.webp", import.meta.url).href ,
    caption: "星巴克重陽集賢門市實景"
  },
  {
    img:new URL("./s6/5.webp", import.meta.url).href ,
    caption: "親水公園實景"
  },
]
</script>

