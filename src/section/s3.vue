<template>
  <article class="s3 relative" id="s3">
    <div class="title">
      <img src="./s3/title.svg">
      <div></div>
      <img src="./s3/sub.svg">
    </div>    
    <div class="txt font-['Noto_Serif_TC',serif]"><span>生活的下一站，人生的下一步</span>
      <span>在於生活品質的不斷超越</span></div>
    <img src="./s3/img.png" class="img">

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
  padding: size(100) 0 0 0;

  .title{width: 95%;
    display: flex;
  justify-content:center;
  align-items:flex-end;
  gap:size(40);
  img{
  &:first-child{flex: 0;width:size(895);}
  &:last-child{flex: 0;margin-bottom:size(20);width:size(400);}
  }
  div{flex: 1;background: #fff;height:size(4);margin: auto auto size(35);}
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
  padding: sizem(40) 0 0 0;
  .title{width: 95%;
  gap:sizem(10);
  img{
  &:first-child{width:sizem(175);}
  &:last-child{margin-bottom:sizem(5);width:sizem(120);}
  }
  div{height:sizem(2);margin: auto auto sizem(10);}
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