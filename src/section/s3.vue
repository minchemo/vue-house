<template>
  <article class="s3 relative" id="s3">
    <h2>
      <span style="display: none;">都廳大院</span>
    </h2>
    <h1 data-aos="fade-up" data-aos-delay="400">
      <span style="display: none;">都廳大院</span>
    </h1>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  min-height: size(900);
  max-height: size(1070);
  height: 120vh;
  color: #423E3D;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("./s3/3.jpg");
  background-size: 100%;
  background-repeat: no-repeat;

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

  //都廳大院
  h1 {
    position: absolute;
    top:calc(30% + #{size(452- 1080 * .5)});
    left: calc(10% + #{size(480 - 1080 * .5)});

    img {
      width: sizem(225);
    }
  }

  //根本
  h3 {
    position: absolute;
    top: calc(80% + #{size(458 - 1080 * .5)});
    left: calc(15% + #{size(498 - 1080 * .5)});

    img {
      width: sizem(135);
    }
  }

  //南北
  h4 {
    position: absolute;
    top: calc(70% + #{size(569 - 1080 * .5)});
    left: calc(50% + #{size(560 - 1080 * .5)});

    img {
      width: sizem(135);
    }
  }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media screen and (max-width: 767px) {


  .s3 {
    height: sizem(640);
    min-height: sizem(640);
    max-height: sizem(640);
    background: url("./s3/3m.jpg");
    background-size: 100%;
    background-repeat: no-repeat;

    .pc {
      display: none;
    }

    .ph {
      display: block;
    }

    //淇發建設
    h2 {
      top:calc(2% + #{size(515 - 1080 * .5)});
      left: calc(5% + #{size(525 - 1080 * .5)});

      img {
        width: sizem(92);
      }
    }

    //都廳大院
    h1 {
      top:calc(20% + #{size(405 - 1080 * .5)});
      left: calc(30% + #{size(370 - 1080 * .5)});

      img {
        width: sizem(220);
      }
    }

    //4根本
    h3 {
      top: calc(80% + #{size(238 - 1080 * .5)});
      left: calc(10% + #{size(658 - 1080 * .5)});

      img {
        width: sizem(250);
      }
    }

    //南北
    h4 {
      top: calc(80% + #{size(533 - 1080 * .5)});
      left: calc(20% + #{size(475 - 1080 * .5)});

      img {
        width: sizem(250);
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