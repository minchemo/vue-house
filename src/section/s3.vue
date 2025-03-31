<template>
  <article class="s3" id="s3">
    <img src="./s3/bgm.jpg" class="bg" v-if="isMobile"> 
    <img src="./s3/bg.jpg" class="bg" v-else> 
    <div class="ball">
      <img src="./s1/ball1.webp" class="ball1">
      <img src="./s1/ball1.webp" class="ball2">
      <img src="./s1/ball1.webp" class="ball3">
      <img src="./s1/ball2.webp" class="ball4">
      <img src="./s1/ball2.webp" class="ball5">
    </div>
    
    <div class="txt"> 
      <span data-aos="zoom-in" data-aos-delay="0">信義區是過去，副都心是未來</span>
      <span data-aos="zoom-in" data-aos-delay="100">這一次，真的想定下來</span>
      <span data-aos="zoom-in" data-aos-delay="200">在副都心立下最專情的誓言：</span>
      <span data-aos="zoom-in" data-aos-delay="300">「成名要趁早，明天會更好」</span>
      <span data-aos="zoom-in" data-aos-delay="400">真愛要趁早告白</span>
      <span data-aos="zoom-in" data-aos-delay="500">國家級重劃區的幸福從不重來</span>
</div>
   
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative; 
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  font-size:sizem(14);
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size:size(32);
  }
  .bg{width: 100%;}
  .txt{
    position: absolute;
    top: sizem(115);left: 0;right: 0;text-align: center;
  line-height: 2.7;
  letter-spacing: 0.06em;
  span{display: block;}
  @media screen and (min-width: 768px) {
    top: size(150);
    line-height: 2;

  }
}
.ball{position: absolute;width: 100%;height: 100%;left: 0;top:0;z-index: 2;
img{position: absolute;}
.ball1{width:sizem(110);top: -5%;left: 60%;
  transform: translateY(40%);
animation: an 8s linear alternate infinite;}
.ball2{width:sizem(83);top: 90%;left: 15%;
  transform: translateY(30%);
animation: an 6s -7s linear alternate infinite;}
.ball3{width:sizem(186);top: 47%;left: 69%;
  transform: translateY(30%);opacity: .9;
animation: an 9s -2s linear alternate infinite;}
.ball4{width:sizem(28);top: 9%;left: 13%;
  transform: translateY(70%);
animation: an 10s -3s linear alternate infinite;}
.ball5{width:sizem(77);top: 133%;left: 88%;
  transform: translateY(60%);
animation: an 7s -4s linear alternate infinite;}
@media screen and (min-width: 768px) {
.ball1{width:size(330);top: -10%;left: 73%;}
.ball2{width:size(534);top: 20%;left: -10%;}
.ball3{width:size(542);top: 70%;left: 82%;}
.ball4{width:size(90);top: 17%;left: 22%;}
.ball5{width:size(158);top: 126%;left: 8%;}

}
}
}

</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>