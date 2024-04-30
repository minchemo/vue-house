<template>
  <article class="s8">
    <h2 class="title" data-aos="fade-down" data-aos-delay="0" >正38坪888萬起<span>(車位另購)</span><br>規劃當區最優</h2>
    
    <img src="./s8/1.webp" alt="" v-if="!$isMobile()">
    <img src="./s8/1m.webp" alt="" v-else>
    

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative flex items-center justify-center;
  width: 100%;
  padding:0 0 5em;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  // margin-bottom:8em;
  .title{
    color: #FFF;
    font-size: 2em;
    margin: 0 auto .5em auto;
    line-height: 1.4;
    font-weight: 900;
    background: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
    width:100%;
    padding: .6em 0;
    text-align: center;
    span{font-size: .5em;margin: 0 -4.8em 0 0;
    font-weight: 700;}

  }
  img{width: size(1043);}
  .main {
    @apply flex text-[#fff];
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
      left:auto;
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
  @apply flex-col;
    height:auto;
    padding: 0 0 4.5em;
    margin: 0;
  font-size:sizem(13);
  .title{
    font-size: 2.2em;

  }

  img{width: sizem(320);}
.main {
    padding: 0 sizem(32.5);
    text-align: justify;
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
</script>
