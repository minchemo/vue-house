<template>
  <article class="s1">
      <img class="sylogo" src="./s1/sylogo.svg" alt="" srcset="">
    <div class="txt">
      <img class="logo" data-aos="zoom-in" data-aos-duration="800" src="./s1/logo.svg" alt="" srcset="">
      <div class="t1 font-['Noto_sans_TC',sans-serif]" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">雙會館 森態莊園電梯別墅</div>

    <!--  <div class="img" data-aos="zoom-in" data-aos-duration="800">
      </div>
      <div class="img" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800" >
      </div> --> 
    </div>
      <img class="horse" src="./s1/flower-horse.png" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative overflow-hidden w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // background: url("./s1/1.jpg");
  // background-size: cover;
  background: url("./s1/bg.jpg") center;
  background-size: cover;
  .sylogo{position:absolute;top:size(20);left:size(25);width: size(250);}
  .txt{
    margin: auto;
    width: size(760);
    font-size:size(47);
    color: #fff;;
    text-align: center;
  }
  .logo {
    width: 100%;
    margin: 1.2em auto 2.9em auto;
  }
  .t1 {
    letter-spacing: 0.2em;
    font-weight: 500;
    line-height: 1.8;
  }
  .horse {
    @apply absolute;

    width: size(636);
    right: size(-176);
    bottom: size(0);
     animation: an 5s  infinite alternate;  
     transform: skewX(2deg)translateX(-3%);
     transform-origin: 100% 100%;

  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(500);
    max-height: sizem(760);
  // background-size: sizem(450) auto;
  
  .sylogo{top:sizem(5);left:sizem(5);width: sizem(100);}
  .txt{
    width: sizem(250);
    font-size:sizem(14);
  }
  .logo {
    margin: 0em auto 2.4em auto
  }
  .t1 {
    letter-spacing: 0.28em;
    margin: 0em auto 10.3em auto
  }
  .horse {
    width: auto;
    height:calc(39% + 20vw);
    right:-10%;
    bottom: sizem(-57);
  }



  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
