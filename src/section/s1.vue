<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/ph.png" class="t0">
    <!--<img src="./s1/pc.png" class="t0">-->
    <h2>
      <span style="display: none;">淇發寸白</span>
      <img src="./s1/slogo.png" alt="淇發建設">
    </h2>
    <h1 data-aos="fade-up" data-aos-delay="400">
      <span style="display: none;">淇發寸白</span>
      <img src="./s1/logo.png" alt="淇發寸白">
    </h1>
    <h3 data-aos="fade-up" data-aos-delay="400">
      <span style="display: none;">淇發寸白</span>
      513
      <img src="./s1/t1.png" alt="萬起">
    </h3>
    <h4 data-aos="fade-up" data-aos-delay="800">
      <span style="display: none;">淇發寸白</span>
      <img src="./s1/t2.png" alt="寸方皆巧白派3房">
    </h4>
    <p>
      <span style="display: none;">淇發寸白</span>
      <img src="./s1/b.webp" alt="外觀">
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

    img {
      width: sizem(35);
    }
  }

  //淇發寸白
  h1 {
    position: absolute;
    top:calc(20% + #{size(525 - 1080 * .5)});
    left: calc(20% + #{size(380 - 1080 * .5)});

    img {
      width: sizem(113);
    }
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
      width: sizem(30);
      top: sizem(1);
      left: sizem(-18);
    }
  }

  //寸方
  h4 {
    position: absolute;
    top: calc(40% + #{size(613 - 1080 * .5)});
    left: calc(50% + #{size(660 - 1080 * .5)});

    img {
      width: sizem(125);
    }
  }

  //建築
  p {
    position: absolute;
    top: calc(40% + #{size(570 - 1080 * .5)});
    left: calc(1% + #{size(600 - 1080 * .5)});

    img {
      width: sizem(185);
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

    //淇發建設
    h2 {
      top:calc(2% + #{size(515 - 1080 * .5)});
      left: calc(5% + #{size(525 - 1080 * .5)});

      img {
        width: sizem(92);
      }
    }

    //淇發寸白
    h1 {
      top:calc(20% + #{size(225 - 1080 * .5)});
      left: calc(25% + #{size(380 - 1080 * .5)});

      img {
        width: sizem(250);
      }
    }

    //488
    h3 {
      font-size: sizem(120);
      top: calc(30% + #{size(208 - 1080 * .5)});
      left: calc(10% + #{size(638 - 1080 * .5)});

      img {
        position: relative;
        width: sizem(55);
        top: sizem(0);
        left: sizem(-34);
      }
    }

    //寸方
    h4 {
      top: calc(50% + #{size(313 - 1080 * .5)});
      left: calc(20% + #{size(470 - 1080 * .5)});

      img {
        width: sizem(250);
      }
    }

    //建築
    p {
      position: absolute;
      top: calc(60% + #{size(690 - 1080 * .5)});
      left: calc(1% + #{size(450 - 1080 * .5)});

      img {
        width: sizem(420);
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