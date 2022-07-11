<template>
  <div class="s1 relative">
    <!-- img  v-if="!$isMobile()" class="absolute decor1" src="@/section/s1/decor.png" alt="心仝聚" srcset="" -->
    <img data-aos="fade" class="absolute decor" src="@/section/s1/decor.svg" alt="心仝聚" srcset="">
    <img data-aos="zoom-in" data-aos-delay="200" class="absolute logo" src="@/section/s1/logo.svg"
      alt="心仝聚" srcset="">
    <div data-aos="fade"
      class="mo-text absolute font-['Noto_Serif_JP'] font-medium">
      北士科首排 百年大稻埕家族誠獻
    </div>
    <img v-if="$isMobile()" class="arrow-down" src="@/section/s1/arrow_down.png" alt="心仝聚" srcset=""  @click="scrollTo('#s3')">
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-image: url('@/section/s1/bg.jpg');
  background-size: size(600) auto;
  background-position: center;
  &::before{
    content: "";
    position: absolute;
    left: 0;
    width: size(1920);
    height:size(1920);
    transform: scale(105%,56.5%);
    transform-origin: 50%;
    top:calc(50% - 50vw);
    background: linear-gradient(135deg, #4444 0%,rgba(0,0,0,0) 25%);
  }

  .decor {
    width: size(1400);
    height:auto;
    right:size(-555);
    bottom:size(-700);
  /*    right:size(0);
    bottom:size(-200); */
    filter: drop-shadow(size(1) size(2) size(2) rgba(0, 0, 0, 0.3));
  }

  .logo {
    width: size(696.15);
    height: size(272.07);
    left: size(270);
    top: size(180);
  }

    .mo-text {
      left: 6.7em;
      color: #000;
      bottom:3.5em;
      font-size: size(40);
      text-align: left;
      z-index: 2;
    }
}

@media screen and (max-width:768px) {
  .s1 {
    width: 100%;
  height: calc(100vh - 63px);
  min-height: size-m(604);
  max-height: size-m(750);
  background-size: size-m(500) auto;
  &::before{display: none;
  }

  

    .decor {
      width: size-m(550);
      max-width: 999%;
    height:auto;
      right: size-m(-275);
      top:  size-m(-275);
      bottom: auto;
    filter: drop-shadow(size-m(1) size-m(2) size-m(2) rgba(0, 0, 0, 0.3));
    }

    .logo {
      width: size-m(296);
      height: auto;
      left: 50%;
      margin-left: -#{size-m(148)};
      top: size-m(277);
      top:calc(50% + (277 - 604 * .5) * 100vw / 375);
    }
    .mo-text {
      left: 0;
      width: 100%;
      top: size-m(445);
      bottom: auto;
      font-size: size-m(20);
      text-align: center;
      top:calc(50% + (440 - 604 * .5) * 100vw / 375);
    }

    .arrow-down {
      position: absolute;
      width: size-m(60);
      bottom: size-m(15);
      left: 50%;
      transform: translateX(-50%);
      animation : 1.3s arrow ease-in infinite alternate;

    }
    
@keyframes arrow{
  to {transform:translate(-50%,-30%);}
}
  }

}
</style>

<script setup>
</script>
