<template>
  <article class="s9 relative" id="s9">
    <div class="img relative" data-aos="fade-up" data-aos-delay="0">
      <img src="./s9/img.jpg" class="img1" alt="img">
      <img src="./s9/img2.jpg" class="img2 absolute" alt="img">
    <img src="./s9/en.svg" class="en absolute" alt="en">
    <span class="c absolute  font-['Noto_Sans_TC',sans-serif]">情境示意圖</span>
  </div>

    <div class="bird" data-aos="fade-left" data-aos-delay="600">
    <img src="./s9/bird.png" alt="bird"></div>
    <div class="txt relative">
      <h3 class="title" data-aos="fade-up" data-aos-delay="200">25%低公設高坪效</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="400">3房價買到4房空間尺度</h4>
      <p class="font-['Noto_Sans_TC',sans-serif]" data-aos="fade-up" data-aos-delay="600">以25% 超低公設比， Less is more 的當代思維，<br>
創造高坪效、高CP的空間機能，<br>
更打造2房2衛「雙套房」、<br>市場罕見的完美空間，<br>
展現建築職人最大心的體貼學！
</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
  position: relative;
  font-size:sizem(12);
  line-height: 1.6;
  padding:1em 0 3em;
  @media screen and (min-width: 768px) {
    font-size:size(33);
  }
  @keyframes bird {
  to {
    transform:skewY(4deg);
  }
}
  .bird{
    position: absolute;
    top: 24em;
    right:0;
    width:sizem(160);
    // transform: scaleX(-1);
    img{width: 100%;transform:skewY(0deg);
    transform-origin: 100% 50%;
    animation: bird 5s linear alternate infinite;}
  @media screen and (min-width: 768px) {
    width:size(400);
    top: 26em;
    right:14%;
  }
  }
  .txt{
    width: sizem(310);
    margin:1em auto 0em;z-index: 2;padding-bottom: 1.2em;
  @media screen and (min-width: 768px) {
    width: size(1150);
  }
    .title{
      font-size:2.5em;
      line-height: 1.2;
      margin-bottom: 0em;
      span{color: #a38a77;}
  @media screen and (min-width: 768px) {
    font-size:3em;
  }
    }
    .subtitle{
      font-size:2em;}
    .en{
      width: 15.5em;
      margin-top: .3em;
      @media screen and (min-width: 768px) {
        margin:-.95em 0 0 0em;
      }
    }

  }
  .img{width: sizem(320);margin: auto;display: block;
.img1{width: 100%;object-fit: cover;height: 100%;}
  @media screen and (min-width: 768px) {
    width: size(1440);height:size(700);
  }
    .en{
      width: 10em;left:3em;bottom: 3.5em;
      @media screen and (min-width: 768px) {
        height: auto;bottom:6.3em;left:6.5em;width: 11.5em;
      }
    }
    .img2{left: 0;top: 2em;width:sizem(155);height: auto;
      @media screen and (min-width: 768px) {
        width:size(600);
      }}
    .c{left: 1em;bottom: .5em;color: #fff;font-size:sizem(10);
      @media screen and (min-width: 768px) {
        font-size:size(15);
      }
    
    
    }
}

}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>