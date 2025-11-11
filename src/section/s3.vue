<template>
  <article class="s3 relative" id="s3">
    <h1 data-aos="fade-zoom-in">
      <img src="./s3/1.png" class="pc" alt="捷運先嗇宮">
      <img src="./s3/1m.png" class="ph" alt="捷運先嗇宮">
      <span style="display: none;">捷運先嗇宮</span>
    </h1>
    <h2 data-aos="fade-zoom-in" data-aos-delay="1000">
      <img src="./s3/2.png" class="pc" alt="新北市府">
      <span style="display: none;">新北市府</span>
    </h2>
    <h3 data-aos="fade-zoom-in" data-aos-delay="2000">
      <img src="./s3/3.png" class="pc" alt="新北市府">
      <span style="display: none;">新北市府</span>
    </h3>
    <img class="light" src="./s3/light.png" alt="都廳大院">
    <img class="light2" src="./s3/light2.png" alt="都廳大院">
    <p>都廳大院3D情境示意圖</p>
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
  background: url("./s3/bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;

  .pc {
    display: block;
  }

  .ph {
    display: none;
  }

  //捷運先嗇宮
  h1 {
    position: absolute;
    top:calc(30% + #{size(350- 1080 * .5)});
    left: calc(20% + #{size(382 - 1080 * .5)});

    img {
      width: sizem(90);
    }
  }

  //新北市府
  h2 {
    position: absolute;
    top:calc(30% + #{size(350- 1080 * .5)});
    left: calc(50% + #{size(348 - 1080 * .5)});

    img {
      width: sizem(90);
    }
  }

  //東京都廳的城市新生
  h3 {
    position: absolute;
    top:calc(30% + #{size(357- 1080 * .5)});
    left: calc(80% + #{size(308 - 1080 * .5)});

    img {
      width: sizem(76);
    }
  }

  .light,
  .light2 {
    position: absolute;
    left: calc(40% + #{size(368 - 1080 * .5)});
    animation-name: slide-in;
    animation-iteration-count: infinite;
  }

  .light {
    top:calc(60% + #{size(387- 1080 * .5)});
    animation-duration: 5s;
  }

  .light2 {
    top:calc(70% + #{size(357- 1080 * .5)});
    animation-duration: 7s;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      translate: 0 0;
    }

    10% {
      opacity: 1;
    }

    50% {
      opacity: 0;
      translate: 0 -15vw;
    }

    100% {
      opacity: 0;
      translate: 0 -15vw;
    }
  }

  p {
    position: absolute;
    right: sizem(6);
    bottom: sizem(4);
    font-size: 14px;
    color: #FFF;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s3 {
    height: sizem(635);
    min-height: sizem(635);
    max-height: sizem(635);
    background: url("./s3/bgm.jpg");
    background-size: 100%;
    background-repeat: no-repeat;

    .pc {
      display: none;
    }

    .ph {
      display: block;
    }

    //捷運先嗇宮
    h1 {
      position: absolute;
      top:calc(20% + #{size(90- 1080 * .5)});
      left: calc(30% + #{size(300 - 1080 * .5)});

      img {
        width: sizem(240);
      }
    }

    .light,
    .light2 {
      position: absolute;
      left: calc(40% + #{size(258 - 1080 * .5)});
      animation-name: slide-in;
      animation-iteration-count: infinite;
      width: sizem(170);
    }

    .light {
      top:calc(80% + #{size(387- 1080 * .5)});
      animation-duration: 5s;
    }

    .light2 {
      top:calc(90% + #{size(357- 1080 * .5)});
      animation-duration: 7s;
    }

    p {
      position: absolute;
      right: sizem(6);
      bottom: sizem(4);
      font-size: 10px;
      color: #FFF;
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