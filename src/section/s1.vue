<template>
  <article class="s1 relative" id="s1">
    <!-- <img src="./s1/mo.jpg" class="t0" > -->
    <img src="./s1/bg.svg" class="bg" data-aos="zoom-out" data-aos-delay="0" >
    <Logo data-aos="zoom-in" data-aos-delay="500" />
    <div class="t1" data-aos="zoom-in" data-aos-delay="1000"><span>百貨群聚</span><span>機能齊聚</span><span>雙軌相聚</span></div>
    <img src="./s1/en.svg" class="en" data-aos="zoom-in" data-aos-delay="1000" >
    <div class="t2" data-aos="zoom-in" data-aos-delay="1000">2-3房</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1 {
  min-height: size(900);
  max-height: size(1070);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(30);
  overflow: hidden;
  $ma:size(30);
  &::before{content: "";position: absolute;left:$ma;right: $ma;top:$ma;bottom:$ma;border: 3px solid #fff;margin: auto;}

  .t0{position: absolute;width: 100%;top:0;left: 0; pointer-events: none;z-index: 9;opacity: 0.3;}
   .bg{position: absolute;width:size(1170);left:0;right: 0;
    top: size(-30);
    top:calc(50% + #{size(-30 - 1070 * .5)});
  }
  .logo{position: relative;z-index: 3;margin-bottom: size(25);margin-top: size(22);
    width:size(1180);}
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



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
   // height: sizem(650);
    font-size:sizem(16);
    justify-content:center;
  .bg{width:sizem(584);top:sizem(0);left:sizem(-104.5);height:sizem(805);
  top:calc(50% + #{sizem(-105 - 604 * .5)})
  }
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