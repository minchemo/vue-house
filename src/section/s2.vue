<template>
  <article class="s2 relative" id="s2">
    <h1 data-aos="fade-zoom-in">
      <img src="./s2/1.png" alt="東京都廳城市光景">
      <span style="display: none;">東京都廳城市光景</span>
    </h1>
    <h2 data-aos="fade-up" data-aos-delay="500">
      <img src="./s2/2.png" class="pc" alt="都廳大院">
      <img src="./s2/2m.png" class="ph" alt="都廳大院">
      <span style="display: none;">都廳大院</span>
    </h2>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  min-height: size(900);
  max-height: size(1070);
  height: 120vh;
  color: #423E3D;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("./s2/bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;


  .pc {
    display: block;
  }

  .ph {
    display: none;
  }

  //東京
  h1 {
    position: absolute;
    top:calc(30% + #{size(410- 1080 * .5)});
    left: calc(30% + #{size(340 - 1080 * .5)});

    img {
      width: sizem(96);
    }
  }

  //內文
  h2 {
    position: absolute;
    top:calc(30% + #{size(415 - 1080 * .5)});
    left: calc(60% + #{size(380- 1080 * .5)});

    img {
      width: sizem(110);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s2 {
    height: sizem(635);
    min-height: sizem(635);
    max-height: sizem(635);
    background: url("./s2/bgm.jpg");
    background-size: 100%;
    background-repeat: no-repeat;

    .pc {
      display: none;
    }

    .ph {
      display: block;
    }

    //東京
    h1 {
      position: absolute;
      top:calc(20% + #{size(275- 1080 * .5)});
      left: calc(40% + #{size(230 - 1080 * .5)});

      img {
        width: sizem(200);
      }
    }

    //內文
    h2 {
      position: absolute;
      top:calc(30% + #{size(400 - 1080 * .5)});
      left: calc(40% + #{size(350- 1080 * .5)});

      img {
        width: sizem(150);
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