<template>
  <article class="s2 relative" id="s2">
    <h2 data-aos="fade-in" data-aos-delay="400">
      <span style="display: none;">覓靓101</span>
      <img src="./s2/logo.png" alt="覓靓101">
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
  background-image: url(./s2/bg.jpg);
  background-repeat: no-repeat;
  background-size: 100%;

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

  //覓靓101
  h2 {
    position: absolute;
    top:calc(10% + #{size(495- 1080 * .5)});
    left: calc(60% + #{size(448 - 1080 * .5)});

    img {
      width: sizem(15);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media screen and (max-width: 767px) {


  .s2 {
    height: sizem(750);
    min-height: sizem(750);
    max-height: sizem(750);
    background: url("./s2/bgm1.jpg");
    background-size: 100%;

    .pc {
      display: none;
    }

    .ph {
      display: block;
    }

    //覓靓101
    h2 {
      top:calc(20% + #{size(405 - 1080 * .5)});
      left: calc(30% + #{size(370 - 1080 * .5)});

      img {
        width: sizem(220);
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