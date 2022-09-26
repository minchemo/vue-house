<template>
  <article class="s2">
    <div class="logo" data-aos="fade-up" data-aos-delay="0">
      <img src="@/section/s2/logo.svg" alt="">
    </div>
    <div class="item">
      <div class="t1" data-aos="fade-up" data-aos-delay="200">好住 是最高難度的精工</div>
      <img src="@/section/ring.svg" alt="" srcset="">
      <div class="t2" data-aos="fade-up" data-aos-delay="400">董事長常說，住的好，最要緊<br />
        高難度的精工，就藏在魔鬼細節裡<br />
        30年的累積，手腳並到做建築<br />
        親手畫分寸、配管線、藏梁柱<br />
        不說大話，但做的，還比畫的好<br />
        落地實踐，好住又實住<br />
        不只有高顏值，更有好體質</div>
    </div>
    <div class="item">
      <div class="t1" data-aos="fade-up" data-aos-delay="200">泰嘉引進國際 回到在地</div>
      <img src="@/section/ring.svg" alt="" srcset="">
      <div class="t2" data-aos="fade-up" data-aos-delay="400">泰嘉洞見世界之大的寬遠<br />
        於是墊高成本腳步、仰起品味肩頭<br />
        向國際頂尖取經，挖掘大師奇想<br />
        收進泰嘉腦袋，揉進靈魂DNA<br />
        國際舞台上的風格技術<br />
        搖身一變成了藝術本領<br />
        泰嘉挾帶新觀點，更上不止一層樓
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  width: 100%;
  height: size(1080);
  background-image: url('@/section/s2/bg.svg');
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: size(480);
  position: relative;

  .logo {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: size(152.6);

    img {
      display: block;
      width: size(393);
      margin: 0 auto;
    }
  }

  .item {
    font-family: 'Noto Sans TC';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: size(30);

    .t1 {
      font-weight: 700;
      font-size: size(40);
      letter-spacing: 0.07em;
      color: #699DC4;
    }

    img {
      width: size(48);
    }

    .t2 {
      font-weight: 400;
      font-size: size(20);
      line-height: 1.8;
      letter-spacing: 0.07em;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s2 {
    height: size-m(740);
    background-image: url('@/section/s2/bg_m.svg');
    background-size: 97% auto;
    background-position-y: 80%;
    gap: size-m(100);
    flex-direction: column;

    .logo {
      top: size-m(58);

      img {
        width: size-m(131);
      }
    }

    .item {
      gap: size-m(10);

      .t1 {
        font-size: size-m(20);
      }

      img {
        width: size-m(18);
        margin-bottom: size-m(10);
      }

      .t2 {
        font-size: size-m(12);
      }
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
