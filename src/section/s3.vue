<template>
  <article class="s3" id="s3">
    <img src="./s1/appearance.png" class="appearance absolute" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/img2m.webp" class="img2 absolute" v-if="$isMobile()">
    <img src="./s1/img3.webp" class="img2 absolute" v-else>
    <img src="./s1/t4.svg" class="t1 absolute" data-aos="zoom-in" data-aos-delay="0">
	<!-- 
   -->


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@keyframes ann {
  to {
    transform: translateX(0%);
  }
}
.s3 {
  @apply relative w-full h-screen;
  height: size(630);
  /*
  min-height: size(940);
  max-height: size(940);*/
  font-size:size(36);
  
  background: #8fc31f;

  .img2{bottom: 0;right: 0;width: 105%;transform:skewX(-3deg);transform-origin:50% 100%;animation: ann 5s ease-in-out alternate-reverse infinite;}
.appearance{top:size(50);right:size(297);width:size(760);
  filter: brightness(0) invert(1);}
.t1{top:size(70);left:size(310);width:size(455);
  // filter: brightness(0) invert(1);
}

}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s3 {
    height: sizem(375);
    font-size:sizem(15);
    .appearance{top:sizem(215);right:0;left: 0;
      margin: auto;width:sizem(205);}
      .img2{width: 112%;right: -6%;transform:skewX(-5deg);}
.t1{top:sizem(15);right:0;left: 0;
  margin: auto;width:sizem(230);}
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