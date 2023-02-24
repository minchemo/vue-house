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
  height: sizem(500);
  }
.img{
    top:sizem(220);
    width:sizem(370);
    .logo{
    width: 23%;
    right: 14%;
    top: -23.5%;}
  
  }
  .txt {
    left:0;right: 0;
    margin: auto;
    top: sizem(50);
font-size:sizem(14);
.t1{
font-size:1.8em;
}
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
