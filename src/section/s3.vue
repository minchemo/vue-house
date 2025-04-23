<template>
  <article class="s3 relative" id="s3">
    <div class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">
      <img src="./s3/title.svg">
      <div class="hr"></div>
      <div class="sub">難得一遇</div>
      <div class="sub-s">
        <div class="text-column">
          <p>單純63戶</p>
          <p>一層 5 戶</p>
        </div>
        <div class="text-column">
          <p>難得一遇</p>
          <p>值得擁有</p>
        </div>
      </div>
    </div>    
    <div class="txt font-['Noto_Serif_TC',serif]"><span data-aos="fade-up" data-aos-delay="200">生活的下一站，人生的下一步</span>
      <span data-aos="fade-up" data-aos-delay="400">在於生活品質的不斷超越</span></div>
    <img src="./s3/img.png" class="img" data-aos="fade-up" data-aos-delay="600">

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s3 {
 // height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(60);
  overflow: hidden;
  padding: size(100) 0  size(150) 0;

  .title{width: 95%;
    display: flex;
  justify-content:center;
  align-items:flex-end;
  gap:size(35);
  position: relative;
  font-size:size(30);
  color: #446A75;
  img{
  &:first-child{flex: 0;width:size(895);}
  }
  .hr{flex: 1;background: #fff;height:size(4);margin: auto auto 1.16em -.5em;}
  .sub{font-weight: 700;font-size:3.3em;letter-spacing: 0.03em;
  text-shadow:0.03em 0.03em 0.1em #5F6F7Acc;
  }
  .sub-s{position: absolute;right: 0;bottom: 6em;font-weight: 700;
    line-height: 2;
    text-align: right;letter-spacing: 0.06em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;

.text-column {
  text-align: center;
  line-height: 1.8;
}
  }
  }
  .txt{
    margin:2.6em auto;
    font-weight: 700;
    color: #fff;
    text-align: center;letter-spacing: .15em;line-height: 2;
    text-shadow: .1em .1em .1em #0009;
    span{display: block;}
  }
  .img{width:size(1492);}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s3 {
  font-size:sizem(16);
  padding: sizem(40) 0 sizem(50) 0;
  .title{width: 95%;
  gap:sizem(10);
  font-size:sizem(13);
  img{
  &:first-child{width:sizem(175);}
  }
  .hr{height:sizem(2);margin: auto auto sizem(10);}
  .sub{font-size:2.3em;}
  .sub-s{bottom: 3.6em;}
  }
  .img{width:sizem(310);}
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