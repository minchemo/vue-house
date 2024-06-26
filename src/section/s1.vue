<template>
  <article class="s1" id="s1">
    <img src="./s1/mo.jpg" class="t0 user-n events-n">
    <div class="bg absolute">
    <!-- <img src="./s1/bg1m.jpg" alt="bg" srcset="" v-if="isMobile">
    <img src="./s1/bg1.jpg" alt="bg" srcset="" v-else> --> </div>

    <img src="./s1/logo.svg" class="logo absolute" alt="logo" srcset="" data-aos="zoom-out-down" data-aos-delay="0">
  <!--  <div class="t1 absolute" data-aos="zoom-out-down" data-aos-delay="200" data-aos-duration="1500">
      <span>新竹高鐵650M</span>
      <span>30-46坪</span>
      <span>03-5905588</span>
    </div> --> 
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
     transform: translateY(0);
  }
}

.s1 {  
  @apply relative w-full h-screen text-[#fff];
  min-height: size(900);
  max-height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(66);
  // overflow: hidden;
  // z-index: 2;
  img.t0{position: absolute;top:0px;top:-670px;
    width: 100%;opacity: .0;z-index: 5;height: auto;
  }
  .bg{position: absolute;width: 100%;bottom: 0;left: 0%;height: 100%;
   // img{width: 100%;height: 100%;object-fit: cover;}
   &::after{content: "";display: block;position: absolute;top: 0;right: 0;width: 200%;height: 100%;
   background:linear-gradient(to left, #000 50%,#0000 100%);
  animation: bga 2s 2s forwards;
     transform: translateX(0%);
  }
  }
@keyframes bga {
  to {
     transform: translateX(100%);
  }
}
  .logo{
    top:calc(35% + #{size(200 - 1070 * .35)});
    right: size(170);
    width: size(450);
}
.t1{bottom: size(45);
  bottom:calc(20% + #{size(45 - 1070 * .2)});
  left: 0;right: 0;margin: auto;
  text-align: center;
  line-height: 1.7;
  span{display: inline-block;
    position: relative;
    padding: 0 .55em;
    &::after{content: "";display: block;width: 1px;height: 1em;background: currentColor;position: absolute;right: 0;top: calc(50% - .45em);}
  &:last-child{
    &::after{display: none;}
  }
  }
}

}
/* PC
@media screen and (min-width: 767px) {
  .s1 {



  }
}
   */
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    font-size:sizem(27);
  .bg{height:100%;//opacity: .4;
   img{height: 100%;}
  }
  
  .logo{
    width:sizem(220);top: sizem(167);right: sizem(76);
    top: calc(50% + #{sizem(167 - 667 * .5)});
  }
  .t1{
    bottom:sizem(50);
    width:sizem(330);
    span{
      &:nth-child(1){
        display: flex;justify-content:center;align-items:center;
        &::before,
        &::after{
          content: "";
          background: currentColor;
          margin:0 .5em;
          height: 1px;width: 2em;position: relative;flex: 1;
        }
      }
    }
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