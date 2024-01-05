<template>
  <article class="s2" ref="s2">
  <div class="txttop">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">台日兩大頂尖集團</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="100">跨足三重演繹森活</h4>
  </div>
    <div class="main">
      <div class="txt">
    <img src="./s1/slogo1.svg" class="slogo" alt="" data-aos="fade-up" data-aos-delay="0" />
    <h3 class="title" data-aos="fade-up" data-aos-delay="100">台灣首家上市建設品牌<span>(股票代號2501)</span></h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">近一甲子建築里程 深根台灣大樹精神</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="300">「在台灣美好土地上深耕」超過半世紀的國泰建設，一如大樹的永續與向下扎根的踏實精神，不僅是國內最受信賴的建設品牌，更是持續帶領台灣建築邁向每一個更美好的未來。</p>
        <div class="subdesc" data-aos="fade-up" data-aos-delay="400">CATHAY REAL ESTATE</div>
      </div>
    </div>
    <div class="imgs" data-aos="fade-up" data-aos-delay="500">
      <div><img src="./s2/01.jpg" alt="圖說"><span class="caption">圖說</span></div>
      <div><img src="./s2/02.jpg" alt="圖說"><span class="caption">圖說</span></div>
   <!--   <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide> -->
    </div>
  <div class="list1">
    <h3 class="title" data-aos="fade-up" data-aos-delay="600"><span>5</span>大事業體 跨足生活全方位</h3>
    <img src="./s2/img1.svg" data-aos="fade-up" data-aos-delay="700" alt="5大事業體" v-if="!$isMobile()">
    <img src="./s2/img1m.svg" data-aos="fade-up" data-aos-delay="700" alt="5大事業體" v-else>
  </div>
  <div class="list2">
    <h3 class="title" data-aos="fade-up" data-aos-delay="800"><span>4</span>大保證</h3>
    <img src="./s2/img2.svg" data-aos="fade-up" data-aos-delay="900" alt="4大保證" v-if="!$isMobile()">
    <img src="./s2/img2m.svg" data-aos="fade-up" data-aos-delay="900" alt="4大保證" v-else>
  </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s2 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:0 0 13em 0;
  gap:6em;
  flex-wrap: wrap;
  background: url("./s2/bg.jpg");
  font-size:size(16);
  line-height: 1.6;

  .txttop{
  width: 100%;
  text-align: center;
  font-size:size(45);
  letter-spacing: 0.07em;
  margin: 4em auto 0 auto;
  .title{font-weight: 700;}
  .subtitle{font-weight: 400;}
  }

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(520);
  flex-direction: column;
  text-align: justify;
}


.txt {
  .slogo{height:size(45);}
  .title{
    span{
    font-size: 0.73em;
    font-weight: 300;}
  }
  .subtitle{
      color: #EFD79B;
  }
  .subdesc{
      color: #EFD79B;
  }
}
.imgs{
  @apply flex;
    margin: 0;
      height: size(440);
  gap:size(10);
  div{flex: 1;
    flex-basis: size(360);
    height: 100%;
    position: relative;
  img{height: 100%;}
  }

}
.list1,
.list2{
  width: 100%;
  text-align: center;
  .title{
  @apply font-['Noto_Serif_TC',serif] text-[#EFD79B];
  font-size:size(36);
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1;
  margin-bottom: .8em;
    span{
      font-family: 'Scheherazade New', serif;
  font-size:3.2em;
  font-weight: 400;}
  }
}
.list1{
  img{width:size(995);}
}
.list2{
  img{width:size(988);}
}
/*
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
    color: #C5C5C5; 
    li button.is-active{
      color: #C9A063;
    }
    }
  }
  */
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
    height: auto;
    padding: 0 0 5em;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;


  .txttop{
  margin: 2em auto 1em auto;
  font-size:sizem(30);
  }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {
  .slogo{height:sizem(29);}
}

.imgs{
      height: sizem(187);
  gap:sizem(4);
  div{
    flex-basis: sizem(153);}

}
.list1,
.list2{
  margin: 3em auto;
  .title{
  font-size:sizem(21);
  margin-bottom: 1.1em;
  }
}
.list1{
  img{width:sizem(310);}
}
.list2{
  img{width:sizem(200);}
}


/*
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
  */
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
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    caption: "台南市政府"
  },
  {
    img:new URL("./s3/2.jpg", import.meta.url).href ,
    caption: "新光三越"
  },
  {
    img:new URL("./s3/3.jpg", import.meta.url).href ,
    caption: "夏慕尼"
  },
  {
    img:new URL("./s3/4.jpg", import.meta.url).href ,
    caption: "燦坤"
  },
  {
    img:new URL("./s3/5.jpg", import.meta.url).href ,
    caption: "家樂福-安平店"
  },
  {
    img:new URL("./s3/6.jpg", import.meta.url).href ,
    caption: "碳佐麻里"
  },
]
</script>

