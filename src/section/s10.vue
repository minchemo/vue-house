<template>
  <article class="s10" ref="s10">
    <!--<img src="./s10/40.jpg" class="t0"> 
    <div class="slider" data-aos="fade" data-aos-delay="400">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="img">
          <img :src="img.img" :alt="img.caption" :class="['v'+ (index + 1)]">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>  -->
    <img src="./s10/bg.jpg" class="bg"> 
    <span class="caption">外觀3D電腦合成示意</span>

    <!-- Conditionally applying 'v1' class if on the first slide -->
    <div :class="['txt', currentSlideIndex === 0 ? 'v1' : '']">
      <img src="./s10/en.svg" class="en">
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">青年之夢，所向未來</h3>
        <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">純白之境：定義岡山市心</h4>
      <p class="desc" data-aos="fade-up" data-aos-delay="200">以流暢美學符號，串聯站前價值，<br>
        以全球豪宅標準，起筆生而典雅的純白</p>
    </div>
  </article>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';



.s10 {
  @apply relative flex  flex-col text-[#fff];
  width: 100%;
  height:size(1070);
  padding:0;
  font-size:size(24);
 // gap:6em;
  flex-wrap: wrap;
  background:radial-gradient(82% 54% at 33.5% 8%, #FFF 0%, #B0D5E1 57%, #78B7CB 100%);
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
  .bg{position: absolute;width: 100%;bottom:0;left: 0; pointer-events: none;z-index: 1;}

.txt {
  position: relative;
  z-index: 3;
  text-align: center;
    font-weight: 400;pointer-events: none;
    color: #000;
    transform: translate(size(-335),size(200));
    filter: invert(1);

      .en{width: size(306);display: block;margin:1.5em auto 1.5em;}
    .title{display: inline-block;
      font-size:size(80);
      font-weight: 700;letter-spacing: 0.07em;
      border-bottom: 1px solid #000;
      line-height: 1.4;
      padding: 0 0 0.2em;
      br{display:none;}
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .2em auto .8em;
    }
    .sen{display:none;}
}

  .slider {
    position: absolute;
    top: 0;left: 0;
    margin: 0;
    width: 100%;
    .slide-item {
      @apply bg-cover;
    flex-basis:100%;
      display: flex;
      text-align: center;
      justify-content:center;
      align-items:flex-end;
      img{height: auto; width:100%;margin: auto;
  }
    }
    .splide__pagination{
      justify-content: flex-end;
    color: #C5C5C5; 
    li button.is-active{
      color: #C9A063;
    }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s10 {
    flex-direction: column-reverse;
    background: #4D78BD;
  height:sizem(472);
    padding:3em 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
  &::before{content: "";width: 100%;display: block;height: sizem(322);background: linear-gradient(180deg, #4D78BD 85.5%, rgba(77, 120, 189, 0.00) 100%);position: absolute;top: 0;left: 0;z-index: 2;}

  .txt {
    width:sizem(310);
    transform: translate(0);
    margin:1.5em auto auto auto;
    .en{width:sizem(160);opacity: 1;margin:0em auto 1.5em;}

    .title{
      font-size:sizem(31);
      border-bottom: 1px solid currentColor;
      padding: 0 0 0.3em 0;
      br{display:block;}
    }
    .subtitle{
      margin: .8em auto 1em;line-height: 1.4;
      font-size:sizem(14);}

  }
  .slider {
    position: relative;
   // height: sizem(300);
   height: auto;
    width:100%;
    left:0;
    top: auto;
    bottom:sizem(0);
    margin: 0 0 0;
    &::before{height: 70vw;}
    .slide-item {width:100%;padding: 0 0 sizem(25) 0;
      img{ width:100%;margin: 0 auto 0em auto;
       // &.v2{width:85%;}
      }
    }
    }

      .caption{left:.5em;font-size:sizem(12);bottom: 0.5em;}
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>

