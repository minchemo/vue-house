<template>
  <article class="s4 relative" id="s4">
    <div class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">
      <img src="./s4/title.svg" class="t1">
      <div class="hr"></div>
      <div class="sub">值得擁有</div>
      <div class="sub-s">大眾還在猶豫空間太小<br>你已跨步迎向生活美好
        <div>寬域2房 <img src="./s4/icon.svg"> 高坪效3房 / 自在切換</div></div>
    </div>    
    <img src="./s4/slo.png" class="img" data-aos="fade-up" data-aos-delay="200">
    <div class="txt font-['Noto_Serif_TC',serif]"><span data-aos="fade-up" data-aos-delay="400">頂誠建築團隊的美學，從生活的舒適感開始</span>
      <span data-aos="fade-up" data-aos-delay="600">
        寬域2房/高坪效3房 自在切换</span></div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s4 {
 // height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(53);
  overflow: hidden;
  padding: size(100) 0 0 0;

  .title{width: 95%;
    display: flex;
  justify-content:center;
  align-items:flex-end;
  gap:size(35);
  position: relative;
  font-size:size(30);
  color: #446A75;
  .t1{flex: 0;width:size(895);}
  .hr{flex: 1;background: #fff;height:size(4);margin: auto auto 1.16em -.5em;}
  .sub{font-weight: 700;font-size:3.3em;letter-spacing: 0.03em;
  text-shadow:0.03em 0.03em 0.1em #5F6F7Acc;}
  .sub-s{position: absolute;right: 0;bottom: 6em;font-weight: 700;
    line-height: 2;
    text-align: right;letter-spacing: 0.06em;
    div{margin: .53em 0 0;}
    img{height: .5em;vertical-align:.1em;}
  }
  }
  .img{width:size(747);margin: size(240) auto size(0) auto;}

  .txt{
    margin:1.2em auto 2.6em auto;
    font-weight: 700;
    color: #000;
    text-align: center;letter-spacing: .1em;line-height: 2.8;
    span{display: block;
    &:first-child{border-bottom: 3px solid #000;}
    }
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s4 {
  font-size:sizem(16);
  padding: sizem(40) 0 0 0;
  .title{width: 95%;
  gap:sizem(10);
  font-size:sizem(12);
  .t1{width:sizem(175);}
  .hr{height:sizem(2);margin: auto auto sizem(10);}
  .sub{font-size:2.5em;}
  .sub-s{bottom: 4em;
  
    div{letter-spacing: -.03em;}
  }
  }
  .img{width:sizem(220);margin: sizem(120) auto 0 auto;}
  .txt{
    margin:1.2em auto 4.5em auto;
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