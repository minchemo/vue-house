<template>
  <article class="s2" id="s2">
    <div class="t1" data-aos="fade-up" data-aos-delay="0">在台南<br />
      引進世界的光</div>
    <div class="line" data-aos="fade-up" data-aos-delay="200"></div>
    <div class="t2" data-aos="fade-up" data-aos-delay="400">限量早鳥預約 捷足先登<span>即將公開 COMING SOON</span></div>
    <div class="t3" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">一處與世界對話的慢活私境<br />
      與國際同步脈動的美學私藏
    </div>
    <div class="t3" data-aos="fade-up" data-aos-delay="600" v-else>一處與世界對話的慢活私境｜與國際同步脈動的美學私藏
    </div>
    <div class="c">本圖片為AI情境模擬，以實際完工現況為準。
    </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s2 {
  @apply relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:sizem(604);
  // background: #d62051;
  background: #089EFB url("./s2/bgm.jpg") no-repeat;
  background-size: 100% auto;
  background-position: 50% 100%;
  color: #FFF;
  font-size: sizem(14);
  text-align: center;
  line-height: 1.6;
  letter-spacing: .1em;

  @media screen and (min-width: 768px) {
    background-image: url("./s2/bg.jpg");
    background-size: cover;
    background-position: 50% 50%;
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
    font-size: size(34);
    justify-content: flex-end;
  }


  .t1 {
    font-size: sizem(29);
    line-height: 1.2;
    font-weight: 500;
      position: relative;
      z-index: 3;

    @media screen and (min-width: 768px) {
      font-size: size(73);
      text-align: left;
      position: absolute;
      top: size(66);
      left: size(170);
      letter-spacing: .08em;
    }
  }

  .line {
      position: relative;
    width: 1px;
    height: 3em;
    background: currentColor;
    margin: 1.6em 0;
      z-index: 3;

    @media screen and (min-width: 768px) {
      display: none;
    }

  }

  .t2 {
    font-size: sizem(17);
    font-weight: 500;
    margin-bottom: .6em;
      position: relative;
      z-index: 3;

    span {
      display: block;
      font-size: .88em;
      margin-top: 0;
      color: #0F0;
    }

    @media screen and (min-width: 768px) {
      font-size: size(55);
      margin-bottom: 1.2em;
      position: absolute;
      top: size(75);
      right: size(150);
    }
  }

  .t3 {
    margin-bottom: 19em;
      position: relative;
      z-index: 3;

    @media screen and (min-width: 768px) {
      margin-bottom: 1.6em;
      letter-spacing: 0.4em;
    }
  }

  .c {
    position: absolute;
    bottom: 0.5em;
    right: 0.5em;
    letter-spacing: 0em;
    font-size: sizem(10);
    @media screen and (min-width: 768px) {
    font-size: size(13);
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