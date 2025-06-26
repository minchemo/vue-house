<template>
  <article class="s1 relative" id="s1">
		<img src="./s1/phone.jpg" class="t0">
    <!--<img src="./s1/pc.jpg" class="t0">-->
    <h2 data-aos="fade-up" data-aos-delay="0">
      <img src="./s1/logo.png" alt="和彩開發">
    </h2>
		<h1 data-aos="fade-up" data-aos-delay="200">
      <img src="./s1/大竹科新熱區.png" alt="大竹科新熱區">
    </h1>
    <h3 data-aos="fade-up" data-aos-delay="400">
      <img class="pc" src="./s1/甜蜜房價_pc.png" alt="甜蜜房價新指標 新貴移居新軸線">
      <img class="ph" src="./s1/甜蜜房價_ph.png" alt="甜蜜房價新指標 新貴移居新軸線">
    </h3>
    <h4 data-aos="fade-up" data-aos-delay="800">
      <img class="pc" src="./s1/en_pc.png">
      <img class="ph" src="./s1/en_ph.png">
    </h4>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';
.s1 {
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  color: #FFF;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background: url("./s1/bg.png");
  background-position: 50% 50%;
  background-size:cover;
  //電腦手機排版用
  .t0{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0; 
	  pointer-events: none;
    opacity: 0.0;
    z-index: 10;
  }
  .pc{
    display: block;
  }
  .ph{
    display: none;
  }
  //和彩
  h2{
    position: absolute;
    top:calc(50% + #{size(342 - 1080 * .5)});
    left: calc(30% + #{size(370 - 1080 * .5)});
    img{
      width: sizem(65);
    }
  }
  //大竹科
  h1{
    position: absolute;
    top: calc(50% + #{size(460 - 1080 * .5)});
    left: calc(20% + #{size(372 - 1080 * .5)});
    img{
      width: sizem(140);
    }
  }
  //甜蜜房價
  h3{
    position: absolute;
    top: calc(60% + #{size(510 - 1080 * .5)});
    left: calc(20% + #{size(402 - 1080 * .5)}); 
    img{
      width: sizem(128);
    }
  }
  //英文
  h4{
    position: absolute;
    bottom: calc(10% + #{size(460 - 1080 * .5)});
    left: calc(13% + #{size(372 - 1080 * .5)}); 
    img{
      width: sizem(90);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s1 {
    height: sizem(660);
    min-height: sizem(660);
    max-height: sizem(660);
    background-image: url("./s1/bgm.png");
    background-position: 50% 50%;
    background-size:100% 100%;
    //電腦排版用
    .pc{
    display: none;
  }
  .ph{
    display: block;
  }
    //和彩
    h2{
    position: absolute;
    top:calc(20% + #{size(350 - 1080 * .5)});
    left: calc(40% + #{size(385 - 1080 * .5)});
    img{
      width: sizem(135);
    }
  }
  //大竹科
  h1{
    position: absolute;
    top: calc(25% + #{size(430 - 1080 * .5)});
    left: calc(20% + #{size(450 - 1080 * .5)});
    img{
      width: sizem(260);
    }
  }
  //甜蜜房價
  h3{
    position: absolute;
    top: calc(35% + #{size(410 - 1080 * .5)});
    left: calc(30% + #{size(430 - 1080 * .5)}); 
    img{
      width: sizem(193);
    }
  }
  //英文
  h4{
    position: absolute;
    bottom: calc(5% + #{size(430 - 1080 * .5)});
    left: calc(30% + #{size(365 - 1080 * .5)}); 
    img{
      width: sizem(220);
    }
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