<template>
  <article class="s1 relative" id="s1">
    <!--  <img src="./s1/ph.png" class="t0">
    <img src="./s1/pc.png" class="t0"> -->
    <h2>
      <img data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" src="./s1/1.png" class="pc"
        alt="都廳大院">
      <img data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" src="./s1/1m.png" class="ph"
        alt="都廳大院">
      <span style="display: none;">都廳大院</span>
    </h2>
    <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500">
      <img src="./s1/logo.png" class="pc" alt="都廳大院">
      <img src="./s1/logom.png" class="ph" alt="都廳大院">
      <span style="display: none;">都廳大院</span>
    </h1>
    <h3>
      <img src="./s1/2.png" class="pc" alt="都廳大院">
      <img src="./s1/2m.png" class="ph" alt="都廳大院">
      <span style="display: none;">都廳大院</span>
    </h3>
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
  background: url("./s1/bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;

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

  //回家
  h2 {
    position: absolute;
    top:calc(40% + #{size(490 - 1080 * .5)});
    left: calc(20% + #{size(375 - 1080 * .5)});

    img {
      width: sizem(120);
    }
  }

  //都廳大院
  h1 {
    position: absolute;
    top:calc(40% + #{size(452- 1080 * .5)});
    left: calc(50% + #{size(540 - 1080 * .5)});

    img {
      width: sizem(28);
    }
  }

  //東京
  h3 {
    position: absolute;
    bottom: calc(5% + #{size(490 - 1080 * .5)});
    left: calc(10% + #{size(390 - 1080 * .5)});

    img {
      width: sizem(362);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s1 {
    height: sizem(635);
    min-height: sizem(635);
    max-height: sizem(635);
    background: url("./s1/bgm.jpg");
    background-size: 100%;
    background-repeat: no-repeat;

    .pc {
      display: none;
    }

    .ph {
      display: block;
    }

    //回家
    h2 {
      position: absolute;
      top:calc(20% + #{size(260 - 1080 * .5)});
      left: calc(30% + #{size(250 - 1080 * .5)});

      img {
        width: sizem(260);
      }
    }

    //都廳大院
    h1 {
      position: absolute;
      top:calc(40% + #{size(220- 1080 * .5)});
      left: calc(40% + #{size(450 - 1080 * .5)});

      img {
        width: sizem(110);
      }
    }

    //東京
    h3 {
      position: absolute;
      bottom: calc(5% + #{size(380 - 1080 * .5)});
      left: calc(10% + #{size(370 - 1080 * .5)});

      img {
        width: sizem(366);
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