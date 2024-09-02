<template>
  <article class="s3 relative" id="s3">
    <div class="txt">
      <h3 class="title" data-aos="fade" data-aos-delay="0">職人匠心恆持初心<br>
        留白哲思細琢鑑築</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">Art of architecture</h4>
        <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
    </div>
        <div class="img1"><span data-aos="zoom-in-right" data-aos-delay="0"></span><span data-aos="zoom-in-right" data-aos-delay="200"></span><span data-aos="zoom-in-right" data-aos-delay="400"></span><img src="./s3/img.svg" data-aos="zoom-in" data-aos-delay="600"></div>
        <img src="./s3/w.webp" class="w" data-aos="zoom-in" data-aos-delay="0">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  background: #F0F0F0;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
      .txt{
        position: relative;
        color: #000;
        font-size:sizem(14);
        line-height: 1.8; 
        width: sizem(251);
        margin: sizem(0) auto sizem(20) auto;
        padding: sizem(16) 0 sizem(20) 0;
        text-align: justify;
        @media screen and (min-width: 768px) {
        width: size(962);
        margin: 0  size(733) 0 auto;
        padding: 0;
        }
      }
        .title{
          font-size:sizem(26);
          color: #A30C24;
          line-height: 1.2;
          margin-top:sizem(28);
          letter-spacing: 0.03em;
          transform: translateY(sizem(100));
        @media screen and (min-width: 768px) {
          font-size:size(40);
          margin-top:size(135);
          transform: translateX(size(-100));
          
        }
        }
        .subtitle{
          font-size:sizem(20);
          transform: translateY(sizem(100));
        @media screen and (min-width: 768px) {
          font-size:size(30);
          margin-top:size(40);
          transform: translateX(size(-100));
        }
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:sizem(6) 0 sizem(23);
          transform: translateY(sizem(100));
        @media screen and (min-width: 768px) {
          margin:size(-70) 0 0;
          transform: translateX(size(-100)) scaleX(.2);
          transform-origin: 0 50%;
        }
      }
        .w{
          width: sizem(346);
          margin:sizem(60) auto auto auto;transform-origin: 50% 100%;
          @media screen and (min-width: 768px) {
          width: size(820);
          margin:size(240) auto auto auto;
        }
        }
        .img1{
          position: relative;
          width: sizem(280);margin:auto;
          height:sizem(169);//opacity: .7;
          display: flex;justify-content:center;align-items:center;
          @media screen and (min-width: 768px) {
            position: absolute;
          right: size(130);
          top: size(90);margin:0;
          width: size(533);height:size(323);
          }
          span{
            position: absolute;
            top: 0;left: 0;
            background: url("./s3/imgbg.png") center;
            background-size: cover;
            display: block;
            height: 100%;width:64%;
            border-radius: 50%;
            &:nth-child(2){left: 40%;height: 100%;width:45%;}
            &:nth-child(3){left: 72%;top:13%;height: 74%;width:28%;}
          }
          img{position: relative;z-index: 2;width:80%;}
      }


}

</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

</script>