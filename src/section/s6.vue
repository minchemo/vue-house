<template>
  <article class="s6" ref="s6">
    <div class="img absolute">
      <div class="oo1 absolute"></div>
    <!-- <div class="g absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="./s6/img.webp" alt="img">
    </div> -->
    <div class="bubble1 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="./s1/bubble5.png" alt="bubble">
      <img src="./s1/bubble3.png" alt="bubble">
    </div>
    </div>
    <div class="bubble2 absolute" v-if="isMobile" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble5.png" alt="bubble">
    </div>

    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-[caveat]" data-aos="fade-up" data-aos-delay="0">Riverside Living</h4>
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">公園校園水岸<br>
          質感森活在線</h3>
          <img src="./s5/hr.png" class="hr" data-aos="fade-up" data-aos-delay="400" />
    <p class="desc" data-aos="fade-up" data-aos-delay="600">早晨到隔壁的國民運動中心游泳醒腦、傍晚在家門後的水岸園區隨意散步。雲科大和多座明星校園、大樹公園圍繞，高雅愜意的名宅居住氛圍隨侍左右。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
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
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;

  .img{
    left: 0;
    bottom:size(-230);
  .oo1{left: size(-660);
    bottom:size(-400);
    width:size(1239);
    background: radial-gradient(ellipse at center,#F8D8A9 0%, #aad1b8dd 15%,#aad1b8aa 20%, #118fc700 60%);
    &::before{content:url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");width: 100%;display: block;}  
  }
.bubble1{left: size(-320);width:size(686);
  bottom: size(-90);
  img{width: 50%;
    position: absolute;top:-25%;left: 30%;
    &:last-child{position: relative;
      width: 100%;top:0;left: 0;
    animation: bubble 4s -2s ease-in-out alternate infinite;
    transform:rotate(-3deg);}
  }
}
.g{left: size(50);width:size(315);
  bottom: size(-50);
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:rotate(3deg);
    transform-origin:30% 100%;
  }
}
@keyframes bubble {
  to {
	transform:translate(0);
  }
}
  }

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}
.txt{
 // margin: auto auto 3vw auto;
 padding: 0 0 0 6vw;
  .subtitle{font-weight: 400;}
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
.img{
  bottom: auto;
  top:sizem(370);
  .oo1{left: sizem(-260);
    bottom:sizem(-180);
    width:sizem(480);}

    .bubble1{left: sizem(-110);width:sizem(250);
  bottom: sizem(-45);}
.g{left: sizem(30);width:sizem(110);
  bottom: sizem(40);}
}
.bubble2{right: sizem(-165);width:sizem(200);
  top: sizem(20);
  img{width: 100%;}
}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {margin: 3em auto 2em;padding: 0 0 0 32vw;
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
    img:new URL("./s6/1.jpg", import.meta.url).href ,
    caption: "國民運動中心"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "藝術水岸園區"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
    caption: "繪本圖書館"
  },
  {
    img:new URL("./s6/4.jpg", import.meta.url).href ,
    caption: "雲科大"
  },
  {
    img:new URL("./s6/5.jpg", import.meta.url).href ,
    caption: "中山紀念公園"
  },
  {
    img:new URL("./s6/6.jpg", import.meta.url).href ,
    caption: "雲林國小"
  },
]
</script>

