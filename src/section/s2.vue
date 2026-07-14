<template>
  <article class="s2">
    <div class="cloud">
      <img src="./s1/cloud.png" alt="cloud" />
    </div>
    <img src="./s1/slogo.svg" class="slogo" alt="">
    <!--    -->
    <div class="txt">
      <picture>
        <source media="(max-width: 768px)" srcset="./s1/s3t1m.svg" />
        <img src="./s1/s3t1.svg" alt="頂溪帝標．再寫新章2920-5858" class="t1" />
      </picture>
      <p class="d">偉大的領航者，都用時間證明視野——<br v-if="isMobile">超過30個重劃區、上萬戶家庭落址<br>
        茂德建設，成就的不只是數字，更是信任——<br v-if="isMobile">25年，是我們開始定義「世界級」的起點<br><br>
        三橋二快雙捷運，速度格局同步升級<br v-if="isMobile"><span v-else>；</span>成熟捷運商圈核心、千億建設挹注領漲<br>
        準備看見，大台北從來沒有的眼界</p>
    </div>
    <Fullview />
    <div class="caption">鳥瞰實景拍攝輔以電腦合成示意圖</div>
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
  @apply relative bg-[#818dc1] text-[#fff];
  width: 100%;
  // height: size(1059);
  font-size: size(16);

  @media screen and (max-width: 767px) {
    padding: sizem(0) 0 sizem(60) 0;
    height: sizem(800);
    font-size: sizem(12);
  }

  .cloud {
    position: absolute;
    top: sizem(98);
    top: calc(50% + #{sizem(58 - 750 * .5)});
    right: sizem(-20);
    width: sizem(130);
    z-index: 12;

    img {
      width: 100%;
      transform: translateX(-30%);
      animation: an 6s linear alternate infinite;
    }

    @media screen and (min-width: 767px) {
      top: size(450);
      top: calc(70% + #{size(217 - 1080 * .7)});
      right: size(270);
      width: size(300);
    }
  }

  .slogo {
    position: absolute;
    width: sizem(50);
    top: sizem(15);
    left: sizem(70);
    z-index: 12;

    @media screen and (min-width: 767px) {
      width: size(125);
      top: size(95);
      left: size(173);

    }

  }

  .txt {
    position: absolute;
    width: sizem(310);
    top: sizem(30);
    left: 0;
    right: 0;
    margin: auto;
    z-index: 12;
    text-align: center;

    @media screen and (min-width: 767px) {
      width: size(650);
      top: size(10);
    }

    .t1 {
      width: sizem(207);
      margin-bottom: sizem(18);

      @media screen and (min-width: 767px) {
        width: size(615);
        margin-bottom: size(-88);
      }
    }


  }

  .mm {
    width: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }

  &::before {
    content: "";
    width: 100%;
    height: 3em;
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 3;
    left: 0;
    background: linear-gradient(to bottom, #818dc100, #818dc1, #818dc100);
    top: 0;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    width: 100%;
    height: sizem(370);
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 3;
    left: 0;
    background: linear-gradient(to bottom, #818dc1, #818dc1 60%, #818dc100);
    top: 0;
    transform: translateY(0%);

    @media screen and (min-width: 768px) {
      height: sizem(70);

    }
  }

  .caption {
    position: absolute;
    padding: .5em;
    bottom: 0;
    left: 0;

    @media screen and (max-width: 767px) {
      bottom: sizem(60);

    }


  }

  .viewbox {
    padding: 50vw 0 0 0;

    @media screen and (min-width: 768px) {
      padding: 9vw 0 0 0
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>