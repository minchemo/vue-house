<template>
  <article class="s1 relative" id="s1">
    <!--<img src="./s1/phone.png" class="t0">-->
    <img src="./s1/pc.png" class="t0">

    <img class="circle" src="./s1/circle.png">
    <h2>
      <img src="./s1/淇發建設.png" alt="淇發寸白">
    </h2>
    <h1>
      <img src="./s1/淇發寸白.png" alt="淇發寸白">
    </h1>
    <h3 data-aos="fade-up" data-aos-delay="400">488
      <img src="./s1/萬起.png" alt="萬起">
    </h3>
    <h4 data-aos="fade-up" data-aos-delay="800">
      <img src="./s1/寸方皆巧白派3房.png" alt="寸方皆巧白派3房">
    </h4>
    <p>
      <img src="./s1/b.png">
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
  h2 {
    position: absolute;
    top:calc(2% + #{size(545 - 1080 * .5)});
    left: calc(2% + #{size(535 - 1080 * .5)});
  }

  //淇發寸白
  h1 {
    position: absolute;
    top:calc(20% + #{size(525 - 1080 * .5)});
    left: calc(20% + #{size(380 - 1080 * .5)});
  }

  //488
  h3 {
    color: #00A43E;
    font-size: sizem(61);
    position: absolute;
    top: calc(10% + #{size(478 - 1080 * .5)});
    left: calc(50% + #{size(638 - 1080 * .5)});

    img {
      position: relative;
      top: sizem(1);
      left: sizem(-18);
    }
  }

  //寸方
  h4 {
    position: absolute;
    top: calc(40% + #{size(613 - 1080 * .5)});
    left: calc(50% + #{size(660 - 1080 * .5)});
  }

  //建築
  p {
    position: absolute;
    top: calc(40% + #{size(563 - 1080 * .5)});
    left: calc(1% + #{size(600 - 1080 * .5)});
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