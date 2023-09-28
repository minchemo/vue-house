<template>
  <article class="s7">
        <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >建材規格一步升級<br>七期名宅標準</h2>
    <div class="main">

    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  @apply relative flex items-start justify-center;
  width: 100%;
  height: size(960);
  padding:0;
  font-size:size(20);
  background: url("./s7/bg.jpg") no-repeat 100% 50%;
  background-size: 100% auto;
  flex-wrap: wrap;
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

  }
  .main {
    @apply flex text-[#fff];
    margin: 0;
    flex-basis: 100%;
  flex-direction: column;
  text-align: center;
  .txt {
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    margin: 4em 0 0;
  .title{
    font-size: 2em;
    margin: 0 auto .5em auto;
    line-height: 1.4;
    font-weight: 900;
	  border: 4px solid transparent;
    border-image: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
	  border-image-slice: 1;
    width:10em;
    padding: .1em 0;
    text-align: center;

  }
  .desc{
  //  width: 23em;
    margin:auto;
    padding-left:1.5em;
    list-style:disc;
    margin-bottom: 3em;
    li{color: #000;margin-bottom:.5em ;
    &::marker{color: #42167B;}
    }
  }
  }
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

  .s7 {
  @apply flex-col;
    height:auto;
    padding:0em 0 25em;
    margin: 0;
  font-size:sizem(13);
  background: #03448e  url("./s7/bgm.jpg") no-repeat 50% 100%;
  background-size: 100% auto;

.main {
    padding: 0 sizem(32.5);
    text-align: center;
  .txt {
  .title{
    font-size: 2.2em;
    padding: .3em 0;
  }
  .en{
    height: 10.8em;
  }
  .subtitle{
    font-size: 1.3em;
    margin: 2em 0 .3em;
  }
  }
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



</script>
