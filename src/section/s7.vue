<template>
  <article class="s7 relative" id="s7">
    <div class="img relative" data-aos="fade-up" data-aos-delay="0">
    <img src="./s7/img.jpg" alt="img">
    <img src="./s7/en.svg" class="en absolute" alt="en">
    <span class="c absolute  font-['Noto_Sans_TC',sans-serif]">本案外觀3D示意圖</span>
  </div>
    <div class="txt relative">
      <h3 class="title" data-aos="fade-up" data-aos-delay="200">以簡御繁<br>
        當代新質感建築</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="400">《安藤忠雄》曾說:「我希望建築能夠同時達成『簡明』<br>
也希望達到擁有『深度』。建築應該是一個<br>
讓人在精神上能夠獲得充實飽滿力量的空間。」</h4>
      <p class="font-['Noto_Sans_TC',sans-serif]" data-aos="fade-up" data-aos-delay="600">【百春陽建設】也是，致力打造當代新質感建築，<br>
以幾何框架、大砌簡約，創造超越時代的建築美學，<br>
因為相信，建築愈簡潔，生活空間愈豐盛，<br>
簡約耐讀的建築，更經得起時光的百年錘鍊！
</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  position: relative;
  font-size:sizem(12);
  line-height: 1.6;
  padding:2em 0 0em;
  @media screen and (min-width: 768px) {
    font-size:size(33);
    padding:0;
  }
  .txt{
    width: sizem(310);
    margin:1.5em auto 0em;z-index: 2;padding-bottom: 1.2em;
  @media screen and (min-width: 768px) {
    width: size(1150);
  }
    .title{
      font-size:2.3em;
      line-height: 1.2;
      margin-bottom: .3em;
      span{color: #a38a77;}
  @media screen and (min-width: 768px) {
    font-size:3em;
  }
    }
    .subtitle{
      font-size:1.13em;letter-spacing: -0.03em;margin:auto -2em .6em auto;}
  }
  .img{width: sizem(320);margin: auto;display: block;
img{width: 100%;}
  @media screen and (min-width: 768px) {
    width: size(1440);
    height:size(810);overflow: hidden;
  }
    .en{
      width: 15.5em;left:1em;bottom: .5em;
      @media screen and (min-width: 768px) {
       
      }
    }
    .c{right: 1em;bottom: .5em;color: #fff;font-size:sizem(10);
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