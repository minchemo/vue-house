<template>
  <article class="s1" id="s1">
    <!-- 
    <img class="t0" src="./s1/01.jpg" alt="" srcset="">
    <img src="./s1/t.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/tm.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="$isMobile()"/> -->
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
       <!--div class="txt font-['noto_serif_tc']" data-aos="zoom-out" data-aos-duration="1000"><span class="t1">高鐵<br  v-if="$isMobile()"/>台積宅</span><span class="t2">2</span><span class="t3">字頭</span><span class="t4">THE GREEN ROAD</span></div-->
    <!-- <div class="love"><img src="./s1/love.png" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/></div>
    <div class="love1" v-if="!$isMobile()"><img src="./s1/love.png" alt=""></div>
    <div class="love2" v-if="!$isMobile()"><img src="./s1/love.png" alt=""></div> -->
    <!-- <img src="./s1/bg1.png" v-if="!$isMobile()" class="bg1" alt=""/>
    <img src="./s1/bg2.png" v-if="!$isMobile()" class="bg2" alt=""/>
    <img src="./s1/bg_m.png" v-if="$isMobile()" class="bg1" alt=""/> -->
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    <img src="./s1/img.webp" class="img" alt="" data-aos="zoom-out" data-aos-delay="600" data-aos-duration="1000"/>
<img src="./s1/t.svg" class="txt" alt="" data-aos="zoom-out" data-aos-delay="600" data-aos-duration="1000"/>
    
    <div class="caption">五率國際廣告</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  overflow: hidden;
  font-size:size(25);
  // background: #1C96D4 url("./s1/bg.png") center;
  // background-size: cover;

    img{width:100%;}
   /* .love{
    z-index: 1;
    position: absolute;  
    width: size(695);
    left: size(320);
    top: calc(50% + #{size(235 - 540)});
    }
    .love1{
    z-index: 1;
    position: absolute;  
    width: size(230);
    right: size(660);
    bottom: size(110); 
    animation: an 3s ease-in-out infinite alternate-reverse;
     transform:translate(10%, 20%);
     img{transform: scaleX(-1)rotate(-7deg);}
    }
    .love2{
    z-index: 1;
    position: absolute;  
    width: size(110);
    right: size(385);
    top: size(195); 
    animation: an 3s ease-in-out infinite alternate-reverse;
     transform:translate(20%, -20%);
     img{transform: rotate(-7deg);}
    }
	*/

    .bg1{
     z-index: 0;
    position: absolute;
    bottom:size(0);
    }

    .bg2{
    z-index: 2;
    position: absolute;
    bottom:size(0);
    }
   .txt{
    z-index: 2;
    width: size(500);
    position: absolute;
    right: size(330);
    top: calc(70% + #{size(340 - 1080 * .7)});
  }
   .img{
    z-index: 2;
    width: size(480);
    position: absolute;
    right: size(340);
    bottom: 0;
    bottom: calc(20% + #{size(0 - 1080 * .2)});
  }
  .logo{
    position: absolute;
    width: size(585);
    z-index: 2;
    left: size(380);
    top: calc(50% + #{size(310 - 540)});
    }

  

    .caption{z-index: 3;}
    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(750);
    font-size:sizem(12);
	// background-image: url("./s1/bgm.png");

  .logo{
    width: sizem(242);
    left: sizem(65);
    top: sizem(50);
    top: calc(45% + #{sizem(80 - 750 * .45)});
    }
   .txt{
    width: sizem(244);
    position: absolute;
    right: sizem(65);
    top: sizem(310);
    top: calc(60% + #{sizem(330 - 750 * .6)});
  }
  .img{
    width: sizem(262);
    left: sizem(56.2);
	bottom: calc(13% + #{sizem(0 - 750 * .13)});
    }

  .love{ 
    width: sizem(350);
    left: sizem(12);
    top: sizem(59);
    }

  .bg1{
      width: sizem(375);
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