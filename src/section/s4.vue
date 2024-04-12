<template>
  <article class="s4" ref="s4">
    <img src="./s4/l2.png" class="l" alt="線" v-if="!isMobile">
    <img src="./s4/l2m.png" class="l" alt="線" v-else>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile && imgs.length > 1">
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
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0"><span class="icon"></span><span class="title_c"><b>嘉</b>未來</span><span class="en">UPGRADE THE FUTURE</span></h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">對位繁華<br>嘉義的世界級</h4>
    <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
    <p class="desc" data-aos="fade-up" data-aos-delay="600">與全球都會比肩，市心最大「湖子內重劃」，移植國際經驗，對位台北信義計畫、新莊副都心；4大新創開發區X7大產業區，護國神山加持，增值潛力看漲。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s4 {
  @apply relative flex items-center justify-center overflow-hidden text-[#F1CC8B];
  width: 100%;
  height:auto;
  padding:4.4em 0;
  font-size:size(28);
  gap:3em;
    flex-direction:row-reverse;
  flex-wrap: wrap;
  &::before{content: "";width:100%;mix-blend-mode: multiply;
  height: 100%;background: #22491B;display: block;
  position: absolute;bottom:0%;left:0%;
}
.l{position: absolute;bottom: size(-80);left: size(-26);width: size(1300);
opacity: .5;
}

  .main {
    @apply flex;
    margin: 0 0 0 size(120);
    flex-basis: size(560);
  flex-direction: column;
  text-align: justify;
}
.txt{
  .title{
    .icon{background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 47 47' fill='%23EBF28F' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='23.5' cy='23.5' r='23.5'/%3E%3Cpath stroke='%2322491B' stroke-width='5' d='M7,23.5h33 M23.5,7v33'/%3E%3C/svg%3E");}
    .en{margin-left: .2em;}
    &::before{background:#78e05217;left: auto;right: 1.4em;
    }
  }
  
  .desc{
      color: #fff;
  }
}
  .slider {
    margin: 0;
    flex-basis: size(1050);
      height: size(1009);
    .slide-item {
      @apply bg-cover;
    flex-basis:100%;
      height: size(1009);
      
    }
  .splide__pagination {
    color: #D0D0D0;
    li {
      button {
      &:hover{
    color: #FFF;}

        &.is-active{
    color: #FFF;
      }
      }
    }
  }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
@media screen and (max-width: 767px) {


.s4 {
@apply flex-col;
  height: auto;
  padding:3em 0 2em;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;

.l{bottom: sizem(-23);left: sizem(60);width: sizem(375);

}


.main {
  padding: 0 0;
  width: 100%;
  margin: 0 auto;
}

.txt {margin: 2.3em auto 0em;
  width: 77%;
}


.slider {
  height: auto;
  width: sizem(327); 
  .slide-item {
    @apply bg-cover;
    width: 100%;
  flex-basis: auto;
    height: sizem(257);
    
  }
  .arrows{
    filter: invert(84%) sepia(26%) saturate(599%) hue-rotate(346deg) brightness(97%) contrast(95%);
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
const imgs = [
  {
    img:new URL("./s4/1.webp", import.meta.url).href ,
    caption: "情境示意圖"
  },
]

const options = {
  rewind: false,
  arrows: false,
  pagination: imgs.length > 1,
  autoplay: imgs.length > 1,
  interval: 4000,
  gap: 0,
  type: 'loop',
  drag: imgs.length > 1,
}

</script>

