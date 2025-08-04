<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/phone.png" class="t0">
    <!--<img src="./s1/pc.png" class="t0">-->

    <img class="circle" src="./s1/circle.png">
    <h1>
      <img src="./s1/淇發建設.png" alt="淇發建設">
    </h1>
    <h4>
      <img data-aos="fade-down-right" data-aos-delay="200" src="./s1/光.png" alt="光">
      <img data-aos="fade-down-left" data-aos-delay="400" class="dot" src="./s1/光點.png" alt="光">
    </h4>
    <h5>
      <img data-aos="fade-down-left" data-aos-delay="600" src="./s1/影.png" alt="影">
      <img data-aos="zoom-in" data-aos-delay="800" class="dot" src="./s1/影點.png" alt="影">
    </h5>
    <h6>
      <img data-aos="fade-right" data-aos-delay="1000" src="./s1/之間.png" alt="之間">
      <img data-aos="zoom-in" data-aos-delay="1200" class="dot" src="./s1/之點.png" alt="之">
      <img data-aos="zoom-in" data-aos-delay="1200" class="dot2" src="./s1/間點.png" alt="間">
    </h6>
    <h2 data-aos="fade-up" data-aos-delay="400">488
      <img src="./s1/萬起.png" alt="萬起">
      <img class="dot" data-aos="fade-up" data-aos-delay="600" src="./s1/大高屏生活圈.png" alt="大高屏生活圈">
    </h2>
    <h3 data-aos="fade-up" data-aos-delay="800">
      <img src="./s1/白派3-4房comingsoon.png" alt="白派3-4房comingsoon">
    </h3>
    <p>
      <img data-aos="fade-right" data-aos-delay="1400" src="./s1/悄然留住.png" alt="悄然留住">
      <img data-aos="fade-right" data-aos-delay="2000" class="dot" src="./s1/一寸.png" alt="一寸">
      <img data-aos="fade-right" data-aos-delay="2600" class="dot2" src="./s1/生活的靜好.png" alt="生活的靜好">
    </p>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  min-height: size(900);
  max-height: size(1080);
  height: 120vh;
  color: #423E3D;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("./s1/bg.png");
  background-position: 50% 50%;
  background-size: cover;

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

  .circle {
    width: size(836);
    position: relative;
    z-index: 2;
  }

  //淇發建設
  h1 {
    position: absolute;
    top:calc(1% + #{size(545 - 1080 * .5)});
    left: calc(1% + #{size(540 - 1080 * .5)});

    img {
      width: sizem(24);
    }
  }

  //光
  h4 {
    position: absolute;
    top: calc(20% + #{size(458 - 1080 * .5)});
    left: calc(60% + #{size(596 - 1080 * .5)});

    img {
      width: sizem(33);
    }

    .dot {
      position: relative;
      top: sizem(-9);
      left: sizem(-19);
      width: sizem(25);
    }
  }

  //影
  h5 {
    position: absolute;
    top: calc(30% + #{size(547 - 1080 * .5)});
    left: calc(60% + #{size(596 - 1080 * .5)});

    img {
      width: sizem(33);
    }

    .dot {
      position: relative;
      top: sizem(-2);
      left: sizem(-19);
      width: sizem(25);
    }
  }

  //之間
  h6 {
    position: absolute;
    top: calc(40% + #{size(597 - 1080 * .5)});
    left: calc(50% + #{size(621 - 1080 * .5)});

    img {
      width: sizem(33);
    }

    .dot {
      position: relative;
      top: sizem(-36);
      left: sizem(-25);
      width: sizem(20);
    }

    .dot2 {
      position: relative;
      top: sizem(22);
      left: sizem(-51);
      width: sizem(30);
    }
  }

  //488
  h2 {
    color: #00A43E;
    font-size: sizem(29);
    position: absolute;
    top: calc(20% + #{size(587 - 1080 * .5)});
    left: calc(30% + #{size(598 - 1080 * .5)});
    z-index: 3;

    img {
      position: relative;
      left: sizem(-9);
      width: sizem(13);
    }

    .dot {
      position: relative;
      top: sizem(17);
      left: sizem(-68);
      width: sizem(58);
    }
  }

  //白派
  h3 {
    position: absolute;
    top: calc(60% + #{size(613 - 1080 * .5)});
    left: calc(30% + #{size(670 - 1080 * .5)});
    z-index: 3;

    img {
      width: sizem(45);
    }
  }

  //悄然留住
  p {
    position: absolute;
    top: calc(60% + #{size(555 - 1080 * .5)});
    right: calc(10% + #{size(400 - 1080 * .5)});

    img {
      width: sizem(7);
    }

    .dot {
      position: relative;
      top: sizem(9);
      right: sizem(22);
    }

    .dot2 {
      position: relative;
      top: sizem(13);
      right: sizem(42);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s1 {
    height: sizem(750);
    min-height: sizem(750);
    max-height: sizem(750);
    background: url("./s1/bgm.png");
    background-position: 50% 50%;
    background-size: cover;

    .circle {
      width: size(1490);
      z-index: 2;
    }

    //淇發建設
    h1 {
      top:calc(1% + #{size(530 - 1080 * .5)});
      left: calc(1% + #{size(550 - 1080 * .5)});

      img {
        width: sizem(50);
      }
    }

    //光
    h4 {
      top: calc(30% + #{size(590 - 1080 * .5)});
      left: calc(70% + #{size(610 - 1080 * .5)});

      img {
        width: sizem(57);
      }

      .dot {
        top: sizem(-70);
        left: sizem(20);
        width: sizem(45);
      }
    }

    //影
    h5 {
      top: calc(40% + #{size(560 - 1080 * .5)});
      left: calc(70% + #{size(610 - 1080 * .5)});

      img {
        width: sizem(57);
      }

      .dot {
        top: sizem(-56);
        left: sizem(20);
        width: sizem(50);
      }
    }

    //之間
    h6 {
      top: calc(50% + #{size(465 - 1080 * .5)});
      left: calc(50% + #{size(700 - 1080 * .5)});

      img {
        width: sizem(57);
      }

      .dot {
        position: relative;
        top: sizem(-62);
        left: sizem(-46);
        width: sizem(35);
      }

      .dot2 {
        position: relative;
        top: sizem(40);
        left: sizem(-89);
        width: sizem(50);
      }
    }

    //488
    h2 {
      font-size: sizem(70);
      top: calc(10% + #{size(400 - 1080 * .5)});
      left: calc(10% + #{size(540 - 1080 * .5)});

      img {
        left: sizem(-22);
        width: sizem(30);
      }

      .dot {
        top: sizem(43);
        left: sizem(-165);
        width: sizem(140);
      }
    }

    //白派
    h3 {
      top: calc(60% + #{size(440 - 1080 * .5)});
      left: calc(20% + #{size(670 - 1080 * .5)});

      img {
        width: sizem(80);
      }
    }

    //悄然留住
    p {
      top: calc(40% + #{size(535 - 1080 * .5)});
      left: calc(50% + #{size(370 - 1080 * .5)});
      z-index: 3;

      img {
        width: sizem(12);
      }

      .dot {
        position: relative;
        top: sizem(15);
        right: sizem(32);
      }

      .dot2 {
        position: relative;
        top: sizem(21);
        right: sizem(65);
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