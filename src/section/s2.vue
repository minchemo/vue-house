<template>
  <article class="s2 relative" id="s2">
    <img src="./s2/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="0" v-if="!isMobile">
    <img src="./s2/t1m.svg" class="t1" data-aos="zoom-in" data-aos-delay="0" v-else>
    <img src="./s2/t2.svg" class="t2" data-aos="zoom-in" data-aos-delay="200">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;top:0px;left: 0; pointer-events: none;z-index: 9;opacity: .2;}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
  .s2 {
    height: sizem(450);
    background: url("./s2/bgm.jpg") center;
    background-size: cover;
  
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  color: #fff;
  font-size: sizem(32);
  line-height: 1.3;
  
@media screen and (min-width: 768px) {
  background-image: url("./s2/bg.jpg");
    height: size(1080);
    padding: 0;
    font-size: size(56);
}
.t1{
  width:sizem(250);
  margin: sizem(50) auto sizem(180);
}
.t2{
  width:sizem(250);
  margin: 0 auto 0;
}
@media screen and (min-width: 768px) {
.t1{
  width:size(1400);
  margin: size(170) auto size(405);
}
.t2{
  width:size(840);
  margin: 0 auto 0;
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