<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/ph.png" class="t0">
    <!-- <img src="./s1/pc.png" class="t0"> -->
    <img class="bg" src="./s1/bg.png" alt="覓靓101">
    <h2 data-aos="fade-down" data-aos-delay="400">
      <span style="display: none;">覓靓101</span>
      <img src="./s1/logo1.png" alt="覓靓101">
    </h2>
    <h1 data-aos="fade-down" data-aos-delay="400">
      <span style="display: none;">覓靓101</span>
      <img src="./s1/logo2.svg" alt="覓靓101">
    </h1>
    <h3 data-aos="fade-in" data-aos-delay="800">
      <span style="display: none;">覓靓101</span>
      <img src="./s1/subtitle1.png" alt="3米6">
    </h3>
    <h4 data-aos="fade-in" data-aos-delay="800">
      <span style="display: none;">覓靓101</span>
      <img src="./s1/subtitle2.png" alt="世界精品行旅">
    </h4>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  min-height: size(900);
  max-height: size(1070);
  height: 120vh;
  color: #423E3D;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #131D2A;

  //電腦手機排版用
  .t0 {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0.0;
    z-index: 10;
  }

  .pc {
    display: block;
  }

  .ph {
    display: none;
  }

  .bg {
    width: size(771);
    position: absolute;
    right: 0;

  }

  //logo
  h2 {
    position: absolute;
    top:calc(20% + #{size(555 - 1080 * .5)});
    left: calc(30% + #{size(520 - 1080 * .5)});

    img {
      width: sizem(15);
    }
  }

  //覓靓101
  h1 {
    position: absolute;
    top:calc(50% + #{size(482- 1080 * .5)});
    left: calc(15% + #{size(442 - 1080 * .5)});

    img {
      width: sizem(150);
      background-image: url(./s1/logo2.png);
    }
  }

  //3米6
  h3 {
    position: absolute;
    top: calc(80% + #{size(406 - 1080 * .5)});
    left: calc(15% + #{size(486 - 1080 * .5)});

    img {
      width: sizem(48);
    }
  }

  //世界
  h4 {
    position: absolute;
    top: calc(70% + #{size(535 - 1080 * .5)});
    left: calc(40% + #{size(310 - 1080 * .5)});

    img {
      width: sizem(80);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media screen and (max-width: 767px) {


  .s1 {
    height: sizem(800);
    min-height: sizem(800);
    max-height: sizem(800);

    .pc {
      display: none;
    }

    .ph {
      display: block;
    }

    .bg {
      width: sizem(271);
      transform: scaleX(-1) rotate(90deg);
      position: absolute;
      left: 0;
      bottom: size(-300);
    }

    //logo
    h2 {
      position: absolute;
      top:calc(20% + #{size(360 - 1080 * .5)});
      left: calc(50% + #{size(420 - 1080 * .5)});

      img {
        width: sizem(41);
      }
    }

    //覓靓101
    h1 {
      position: absolute;
      top:calc(35% + #{size(452- 1080 * .5)});
      left: calc(15% + #{size(442 - 1080 * .5)});

      img {
        width: sizem(300);
        background-image: url(./s1/logo2.png);
        background-size: 100%;
      }
    }

    //3米6
    h3 {
      position: absolute;
      top: calc(50% + #{size(336 - 1080 * .5)});
      left: calc(15% + #{size(406 - 1080 * .5)});

      img {
        width: sizem(105);
      }
    }

    //世界
    h4 {
      position: absolute;
      top: calc(50% + #{size(365 - 1080 * .5)});
      left: calc(50% + #{size(350 - 1080 * .5)});

      img {
        width: sizem(203);
      }
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>