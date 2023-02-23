<template>
  <article class="s3">
    <div class="img">
    <img  data-aos="fade" data-aos-delay="300" src="./s3/img.png" alt="" srcset="" class="img1">
    <img  data-aos="fade" data-aos-delay="300" src="./s3/logo_w.svg" alt="" srcset="" class="logo">
    </div>
    <div class="txt" data-aos="fade">
      <div class="t1" data-aos="fade-down" >｜即｜將｜公｜開｜</div>
      <div class="t2" data-aos="fade-down" >COMING SOON</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative w-full;
  height: size(580);
}
.img{
    @apply absolute;
    top:size(250);
    right: 0;
    width:size(875);
    .img1{width: 100%;}
    .logo{
    @apply absolute;
    width: 20.2%;
    right: 20.1%;
    top: -18.5%;}
  
  }
  .txt {
    @apply absolute;
    left:size(100);
    top: size(140);
font-size:size(48);
text-align: center;
color: #FFF;
font-weight: 400;
line-height: 1.6;
.t1{
font-size:1.35em;
font-weight: 500;
  letter-spacing: 0.05em;
}
.t2{
  color: #F8A933;
  letter-spacing: 1.22em;
text-indent: 1.22em;
}
  }
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  height: sizem(730);
  flex-direction: column;
  gap: sizem(40);

  .left {
    flex-basis: sizem(297);
    width: 100%;
    height: sizem(297);
    background-image: url('@/section/s3/main.jpg');
    background-size: cover;

    .t1 {
      font-size: sizem(12);
      line-height: 150%;
      left: sizem(18);
      top: sizem(170.5);
    }
    .en {
      @apply absolute;
      width: sizem(262);
      left: sizem(16);
      bottom: sizem(54);
    }
    .caption {
      right: sizem(11.8);
      bottom: unset;
      top: 100%;
      font-size: sizem(12);
      color: #595758
    }
  }
  .right{
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #595758;
    padding: 0 sizem(32.5);
    .t1 {
      font-size: sizem(19);
      margin-bottom: sizem(5)
    }
    .t2 {
      font-size: sizem(12);
    }

    .boxes {
      @apply flex; 
      gap: sizem(10);
      margin-top: sizem(35);
      .box {
        width: sizem(310);
        img {
          margin-bottom: sizem(5)
        }
        p {
          font-size: sizem(12);
        }
      }
    }
    
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
