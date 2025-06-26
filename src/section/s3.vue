<template>
  <article class="s3 relative" id="s3">
    <h4 data-aos="fade-in" data-aos-delay="200">
      雙北好宅經典品牌<br>
      <span>城市創藝推手</span>
    </h4>
    <h2 data-aos="fade-up" data-aos-delay="200">
      <img src="./s3/logo.png" alt="弘華機構">
    </h2>
    <h3 data-aos="fade-up" data-aos-delay="400">
      戀戀在地情 創造新風景<br>
      <span>從雙北深耕 跨步關西 專為新世代圓夢而來</span><br>
      打造一道又一道 清新 典雅 美麗的家風景...
    </h3>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';
.s3 {
  min-height: size(900);
  max-height: size(1080);
  height: 104vh;
  color: #FFF;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background: url("./s3/bg.png");
  background-position: 50% 50%;
  background-size:100% auto;
  background-repeat: no-repeat;
  //弘華機構
  h2{
    position: absolute;
    top:calc(40% + #{size(495 - 1080 * .5)});
    left: calc(40% + #{size(395- 1080 * .5)});
    img{
      width: 100%;
    }
  }
  //戀戀
  h3{
    font-family: Arial, Helvetica, sans-serif,"微軟正黑體";
    font-size: size(29);
    position: absolute;
    bottom:calc(45% + #{size(417 - 1080 * .5)});
    left: calc(40% + #{size(425 - 1080 * .5)});
    letter-spacing: size(0.6);
    text-align: center;
    line-height: size(50);
    span{
      font-weight: 800;
      font-size: size(32);
    }
  }
  //雙北好宅
  h4{
    font-size: size(24);
    position: absolute;
    top:calc(20% + #{size(448 - 1080 * .5)});
    left: calc(10% + #{size(450 - 1080 * .5)});
    letter-spacing: size(5.3);
    line-height: size(55);
    span{
      font-weight: 800;
      font-size: size(42);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s3 {
    //弘華機構
  h2{
    position: absolute;
    top:calc(40% + #{size(495 - 1080 * .5)});
    left: calc(40% + #{size(395- 1080 * .5)});
    img{
      width: 51.5%;
    }
  }
}}
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