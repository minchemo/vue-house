<template>
  <article class="s1" id="s1">
<img src="./s1/book.webp" alt="img" class="img" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="0">
<div class="txt">
<h3 class="t1 font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">歡迎回<span>嘉</span><br>開啟幸福篇章</h3>
<div class="t2 font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">START HAPPINESS</div>
</div>
<img src="./s1/style1.webp" alt="style1" class="style1" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="0">
<img src="./s1/style2.webp" alt="style2" class="style2" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="0">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}


.s1 {
  
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(900);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  //background: #E60012;
  //background: url("./s1/bg.webp");
  background-size: 100% auto;

    .img{position: absolute;width: size(740);left: size(187);
    top:calc(50% + #{size(320 - 540)});
    z-index: 99;
    }

    .style1{
    position: absolute;
    width: size(247);
    right: size(873);
    mix-blend-mode: soft-light;
  }
  .style2{
    position: absolute;
    width: size(226);
    right: size(119);
    top:size(350);
    mix-blend-mode: soft-light;
  }

    .txt{
    width: auto;
    position: absolute;
    right:size(364);
    text-align:center;
    color: #FFF;
    font-weight: 900;
    line-height: 1.2;
.t1{
  font-size:size(68);
  font-weight: 500;
  letter-spacing:size(16.32);
  line-height: size(90);
  text-shadow: 0px size(4) size(20) #000;

  span{color: #FFFCB0;}
  }

.t2{
  color: #5BBC96;
  font-size:size(25);
  margin-top: .5em;
  font-weight: 500;
  letter-spacing:size(16.32);
  }

}


  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(812);
    font-size:sizem(15);

.img{
  position: absolute;
  width: sizem(520);
  left:sizem(-50);
  top:auto;
  bottom:sizem(50);
}


  .style1{
    position: absolute;
    width: sizem(148);
    left: sizem(-20);
    right:auto;
    top:sizem(56);
    mix-blend-mode: soft-light;
  }
  .style2{
    position: absolute;
    width: sizem(143);
    left: auto;
    right:sizem(-20);
    top:auto;
    bottom:sizem(-20);
    mix-blend-mode: soft-light;
  }

.txt{
  position: absolute;
  top:sizem(94);
  right: sizem(60);


.t1{
  font-size:sizem(35);
  line-height:sizem(50);
  letter-spacing: sizem(8.4);
  }
.t2{
  font-size:sizem(12);
margin-bottom: 1.5em;}

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