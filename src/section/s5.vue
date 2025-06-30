<template>
  <article class="s5 relative" id="s5">
    <h4 data-aos="fade-down" data-aos-delay="200">深耕關西．創新未來</h4>
    <h2 data-aos="fade-down" data-aos-delay="400">
      <img src="./s5/logo.png" alt="和彩開發">
    </h2>
    <div class="blue" data-aos="fade-in" data-aos-delay="800">
      <h5>一期一會</h5>
    </div>
    <h3 data-aos="fade-in" data-aos-delay="800">挺年輕圓夢｜輕美學<span>2-3</span>房</h3>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';
.s5 {
  min-height: size(900);
  max-height: size(1080);
  height: 104vh;
  color: #4F607A;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background: url("./s5/bg.png");
  background-position: 50% 50%;
  background-size:100% auto;
  background-repeat: no-repeat;
  //深耕
  h4{
    font-size: size(30);
    position: absolute;
    top:calc(30% + #{size(470 - 1080 * .5)});
    right: calc(30% + #{size(411 - 1080 * .5)});
    letter-spacing: size(5.8);
    color: #7793a6;
  }
  //和彩開發
  h2{
    position: absolute;
    width: sizem(130);
    top:calc(30% + #{size(563 - 1080 * .5)});
    right: calc(20% + #{size(444- 1080 * .5)});
    img{
      width: 100%;
    }
  }
  //一期
  .blue{
    position: absolute;
    bottom:calc(55% + #{size(410 - 1080 * .5)});
    right: calc(30% + #{size(311 - 1080 * .5)});
    background-image: url(./s5/blue.png);
    width: size(500);
    h5{
      font-size: size(30);
      letter-spacing: size(32);
      text-align: center;
      color: #7793a6;
    }
  }
  //挺年輕
  h3{
    font-size: size(40);
    position: absolute;
    bottom:calc(45% + #{size(440 - 1080 * .5)});
    right: calc(25% + #{size(425 - 1080 * .5)});
    letter-spacing: size(2);
    text-align: center;
    line-height: size(50);
    color: #204561;
    span{
      font-weight: 800;
      font-size: size(45);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s5 {
  //合彩開發
  h2{
    width: sizem(134);
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