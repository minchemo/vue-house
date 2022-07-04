<template>
  <div class="s1 relative">
    <img data-aos="fade" v-if="!$isMobile()" class="absolute decor" src="@/section/s1/decor.png" alt="心仝聚" srcset="">
    <img data-aos="fade" v-else class="absolute decor" src="@/section/s1/decor_m.png" alt="心仝聚" srcset="">
    <img data-aos="fade" data-aos-delay="200" v-if="!$isMobile()" class="absolute logo" src="@/section/s1/logo.png"
      alt="心仝聚" srcset="">
    <img data-aos="fade" data-aos-delay="200" v-else class="absolute logo" src="@/section/s1/logo_m.svg" alt="心仝聚"
      srcset="">
    <div data-aos="fade" data-aos-delay="500" v-if="$isMobile()"
      class="mo-text absolute font-['Noto_serif_tc'] font-medium">
      北士科首排•百年大稻埕家族誠獻
    </div>
    <img v-if="$isMobile()" class="arrow-down" src="@/section/s1/arrow_down.png" alt="心仝聚" srcset="">
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: size(1080);
  background-image: url('@/section/s1/bg.jpg');
  background-size: contain;
  background-position: center;

  .decor {
    width: size(859);
    height: size(690);
    right: 0;
    bottom: 0;
  }

  .logo {
    width: size(696.15);
    height: size(272.07);
    left: size(270);
    top: size(180);
  }
}

@media screen and (max-width:768px) {
  .s1 {
    width: 100%;
    height: size-m(667);
    background-image: unset;
    background-color: #EB9700;

    .decor {
      width: size-m(375);
      height: size-m(667);
      right: 0;
      top: 0;
      bottom: unset;
    }

    .logo {
      width: size-m(296);
      height: auto;
      left: 50%;
      margin-left: -#{size-m(148)};
      top: size-m(277);
    }

    .mo-text {
      left: 50%;

      top: size-m(436);
      margin-left: -50%;
      font-size: size-m(20);
      width: 100%;
      text-align: center;
    }

    .arrow-down {
      position: absolute;
      width: size-m(60);
      top: size-m(542);
      left: 50%;
      transform: translateX(-50%);
    }
  }

}
</style>

<script setup>
</script>
