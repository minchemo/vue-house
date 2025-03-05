<template>
  <article class="s5" ref="s5">
    <div class="img absolute">
      <div class="oo1 absolute"></div>
    <div class="bubble1 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="./s1/bubble5.png" alt="bubble">
      <img src="./s1/bubble3.png" alt="bubble">
    </div>
   <!-- <div class="g absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="./s5/img.webp" alt="img">
    </div> --> 
    </div>
    <div class="bubble2 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble5.png" alt="bubble">
    </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-[caveat]" data-aos="fade-up" data-aos-delay="0">Gathering of Bliss</h4>
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">站前特區簽到<br>
          美好生活雲集</h3>
          <img src="./s5/hr.png" class="hr" data-aos="fade-up" data-aos-delay="400" />
    <p class="desc" data-aos="fade-up" data-aos-delay="600">銀行郵局、生活百貨、美食飲料，斗六火車站前應有盡有，加上近鄰家樂福、全聯、寶雅等旗鑑店，還有斗六西市場等早市和黃昏市場，365天都是衣食無缺的精彩生活。</p>
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



.s5 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:11em 0 10em 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  flex-direction:row-reverse;
  .img{
    right: 0;
    bottom:size(-200);
  .oo1{right: size(-700);
    bottom:0;
    width:size(1239);
    background: radial-gradient(ellipse at center,#F8D8A9 0%, #aad1b8dd 15%,#aad1b8aa 20%, #118fc700 60%);
    &::before{content:url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");width: 100%;display: block;}  
  }
.bubble1{right: size(-320);width:size(686);
  bottom: size(-160);
  img{width: 70%;
    position: absolute;top:-60%;left: 15%;
    &:last-child{position: relative;
      width: 100%;top:0;left: 0;
    animation: bubble 4s -2s ease-in-out alternate infinite;
    transform:rotate(-3deg);}
  }
}
.g{right: size(65);width:size(260);
  bottom: size(-50);
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:rotate(3deg);
    transform-origin:70% 100%;
  }
}
@keyframes bubble {
  to {
	transform:translate(0);
  }
}
  }
.bubble2{left: size(-300);width:size(560);
  top: size(540);
  img{width: 100%;}
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
 padding: 0 6vw 0 0;
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
      left: calc(100% + 3em);
      justify-content: flex-start;
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
margin-bottom:0em;
gap:0em;
.img{
  bottom: auto;
  top:sizem(370);
  .oo1{right: sizem(-260);
    width:sizem(480);}

    .bubble1{right: sizem(-110);width:sizem(250);
  bottom: sizem(-35);}
.g{right: sizem(30);width:sizem(100);
  bottom: sizem(40);}
}
.bubble2{left: sizem(130);width:sizem(218);
  top: sizem(-170);
}

.main {
  padding: 0 sizem(32.5);
  width: 100%;
}

.txt {margin: 3em auto 2em;padding: 0 30vw 0 0;
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
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "斗六車站"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "星巴克中正門市"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "全聯莊敬店"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "斗六西市場"
  },
  {
    img:new URL("./s5/5.jpg", import.meta.url).href ,
    caption: "家樂福斗六店"
  },
  {
    img:new URL("./s5/6.jpg", import.meta.url).href ,
    caption: "站前商圈"
  },
]
</script>

