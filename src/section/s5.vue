<template>
  <article class="s3 relative" id="s3">
    <!-- <img src="./s1/mo.jpg" class="t0" >
    <img src="./s1/bg.svg" class="bg" data-aos="zoom-out" data-aos-delay="0" >
    <div class="box"><span></span></div>
    <Logo data-aos="zoom-in" data-aos-delay="500" />
    <div class="t1" data-aos="zoom-in" data-aos-delay="1000"><span>百貨群聚</span><span>機能齊聚</span><span>雙軌相聚</span></div>
    <img src="./s1/en.svg" class="en" data-aos="zoom-in" data-aos-delay="1000" >
    <div class="t2" data-aos="zoom-in" data-aos-delay="1000">2-3房</div> -->
    <img src="./s3/txt.svg" class="txt">
    <div class="txt"><span>生活的下一站，人生的下一步</span>
      <span>在於生活品質的不斷超越</span></div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s3 {
  height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(30);
  overflow: hidden;

  .main{margin: 0 auto 0 auto;}

  .logo{position: relative;z-index: 3;margin: auto;
    width:size(470);}
  .t1{position: relative;z-index:3;
    font-size: size(67);
    font-weight: 800;
    letter-spacing: 0.09em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .49em;margin-bottom: size(20);
     span{
    &::before{content: url("./s1/icon.svg");
  width: .5em;display: inline-block;vertical-align:baseline;margin: 0 0.1em 0 0;
  }
}
  }
  .en{width:size(710);position: relative;z-index: 3;margin-bottom: size(27);}
  .t2{position: relative;z-index: 3;font-size: size(65);font-weight: 800;line-height: 1.05;padding: 0 0 .1em 0 ;color: #154675;
    border-top: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;width: 4.1em;text-align: center;
  margin-bottom:0;
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s3 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(700);
   // height: sizem(650);
    font-size:sizem(16);
    justify-content:center;
  .bg{width:sizem(584);top:sizem(0);left:sizem(-104.5);height:sizem(805);
  top:calc(50% + #{sizem(-105 - 604 * .5)})
  }
  .box{
   width: sizem(1600);
   height: sizem(400);}
  .logo{margin-bottom: sizem(12);margin-top: sizem(8);
    width:sizem(300);}
  .t1{order:4;
    font-size: sizem(20);
    margin-bottom: sizem(12);
    gap: .9em;
     span{
    &::before{content: url("./s1/icon.svg");
  width: .5em;display: block;margin: 0 auto -.5em auto;
  }
}
  }
  .en{order:3;width:sizem(230);margin-bottom: sizem(15);}
  .t2{order:5;font-size: sizem(21);width: 4.5em;}
}
}
</style>
<script setup>
import Logo from "./s1/logo.vue"

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