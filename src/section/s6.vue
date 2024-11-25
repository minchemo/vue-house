<template>
  <article class="s6 relative" id="s6">

    <div class="bird">
    <img src="./s6/bird.webp" alt="bird" data-aos="fade-up" data-aos-delay="0"></div>
    <div class="txt relative">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">漫遊，奢綠後花園<br>居城市，坐擁一方山水逸境</h3>
      <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">「霧，像愛情一樣，在山峰的心上遊戲，<br>生出種種美麗的變幻。」—摘錄自詩人《泰戈爾》</h4>
    </div>
    <img src="./s6/img.webp" class="img" alt="img" data-aos="fade-up" data-aos-delay="0">
    <div class="txt relative">
      <p class="font-['Noto_Sans_TC',sans-serif]" data-aos="fade-up" data-aos-delay="600">將近42公頃的觀音山，是您家後花園，<br>
層層疊翠、綠意盎然，親山親湖親自然，<br>
加上7000多坪的文中二公園＆大社公園，<br>
雙綠海芬多精，共譜森情協奏曲，<br>
城市最珍稀的優詩美地，邀您詩意棲居！</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  position: relative;
  font-size:sizem(12);
  line-height: 1.6;
  padding:2em 0 1em;
  @media screen and (min-width: 768px) {
    font-size:size(33);
    padding:0em 0 1em;
  }
  @keyframes bird {
  to {
    transform:skewY(4deg);
  }
}
  .bird{
    position: absolute;
    bottom: 0;
    right:-2em;
    width:sizem(140);
    //transform: scaleX(-1);
    img{width: 100%;transform:skewY(0deg);
    transform-origin: 100% 50%;
    animation: bird 5s linear alternate infinite;}
  @media screen and (min-width: 768px) {
    width:size(500);
    bottom: -1EM;
  }
  }
  .txt{
    width: sizem(310);
    margin:0 auto 2em;z-index: 2;
  @media screen and (min-width: 768px) {
    width: size(1150);
  }
    .title{
      font-size:2em;
      line-height: 1.2;
      margin-bottom: .3em;
      span{color: #a38a77;}
  @media screen and (min-width: 768px) {
    font-size:2.2em;
  }
    }
    .subtitle{
      font-size:1.2em;}
    .en{
      width: 15.5em;
      margin-top: .3em;
      @media screen and (min-width: 768px) {
        margin:-.95em 0 0 0em;
      }
    }
  }
  .img{width: sizem(320);margin: auto auto 2em auto;display: block;

  @media screen and (min-width: 768px) {
    width: size(1190);
  }
}

}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>