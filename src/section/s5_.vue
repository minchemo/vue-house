<template>
  <article class="s5">
    <div class="item">
      <img class="logo" src="@/section/s5_/logo.svg" alt="">
      <div class="t1" data-aos="fade-up" data-aos-delay="200">南台灣先驅 開創國際眼界</div>
      <img class="ring1" src="@/section/ring.svg" alt="" srcset="">
      <div class="t2" data-aos="fade-up" data-aos-delay="400">
        泰嘉洞見世界之大的寬遠<br>
        於是墊高成本腳步、仰起品味肩頭<br>
        向國際頂尖取經，挖掘大師奇想<br>
        收進泰嘉腦袋，揉進靈魂DNA<br>
        國際舞台上的風格技術<br>
        搖身一變成了藝術本領<br>
        泰嘉挾帶新觀點，更上不止一層樓
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  width: 100%;
  height: size(900);
  background-image: url('@/section/s5_/bg.jpg');
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: size(50);

  .item {
    font-family: 'Noto Sans TC';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: size(30);
      color: #fff;

    .logo {
      width: size(297);
      margin: unset;
      margin-bottom: size(72.9);
    }

    .t1 {
      font-weight: 700;
      font-size: size(40);
      letter-spacing: 0.07em;
    }

    .ring1 {
      width: size(48);
    }

    .t2 {
      font-weight: 400;
      font-size: size(20);
      line-height: size(38);
      letter-spacing: 0.07em;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s5 {
    height: size-m(425);
    background-image: url('@/section/s5_/bgm.jpg');
    background-size:cover;
    padding-bottom: size-m(70);

    .item {
      gap: size-m(10);

.logo {
  width: size-m(131.46);
  margin: unset;
  margin-bottom: size-m(15);
}

      .t1 {
        font-size: size-m(20);
      }

      .ring1 {
        width: size-m(18);
        margin-bottom: size-m(10);
      }

      .t2 {
        font-size: size-m(12);
        line-height: size-m(24);
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
