<template>
  <article class="s9" ref="s9">

    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">深耕一座城市<br>洞見一個時代的價值
        </h3>
        <hr class="hr" data-aos="fade-up" data-aos-delay="400" />
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          頂埔在地深耕多年，以長期主義與精準眼光並行的深刻選地哲學，為目標住戶量身打造理想的品味建築。從天好運1、天好運2火熱完銷，見證品牌與產品口碑真實力。</p>
      </div>
      <img src="./s9/en1.svg" alt="city legacy" class="en" />
      <img src="./s9/1.png" alt="1" class="img" />
      <div class="pic">
        <img src="./s9/11.jpg" alt="1" />
        <img src="./s9/12.jpg" alt="1" />
      </div>
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">前瞻科技思維<br>建構智慧住宅新標準
        </h3>
        <hr class="hr" data-aos="fade-up" data-aos-delay="400" />
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          承襲《雲豹能源》綠能背景與科技人獨到思維，為建築注入未來視角。以智慧建築、永續設計為核心，將科技融入日常生活，打造貼近時代、具前瞻價值的居住提案。</p>
      </div>
      <img src="./s9/en2.svg" alt="city legacy" class="en" />
      <img src="./s9/2.png" alt="1" class="img" />
      <div class="pic">
        <img src="./s9/21.jpg" alt="1" />
        <img src="./s9/22.jpg" alt="1" />
      </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s9 {
  @apply relative;
  width: 100%;
  padding: 0;
  font-size: sizem(15);

  @media screen and (min-width: 768px) {
    font-size: size(24);
  }

  .main {
    position: relative;
    display: flex;
    margin: 0;
    z-index: 3;
    justify-content: flex-end;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      height: size(1080);
    }
  }

  .txt {
    width: sizem(310);
    margin: 4em auto 2em;

    @media screen and (min-width: 768px) {
      position: absolute;
      padding: 0;
      top: size(100);
      width: size(700);
      left: size(210);

    }

    .title {
      color: #7C519F;
    }

    .hr {
      color: #7C519F;
      width: sizem(310);

      @media screen and (min-width: 768px) {
        width: size(480);
      }
    }

    .subtitle {
      font-weight: 400;
    }
  }

  .en {
    width: size(246);
    position: absolute;
    top: sizem(290);
    right: 0;
      width: sizem(110);

    @media screen and (min-width: 768px) {
      width: size(246);
    top: 0;
    }
  }

  .img {
    position: relative;
    width: 91%;
    margin: sizem(110) 0 0 auto;
    @media screen and (min-width: 768px) {
    width: size(860);
    margin: 0 size(150) 0 auto;

    }
  }

  .pic {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: sizem(175);
    left: sizem(32);
    gap: sizem(10);


    img {
      width: sizem(117);
    }
    @media screen and (min-width: 768px) {
    flex-direction: row;
    bottom: size(126);
    left: size(210);
    gap: size(10);
    img {
      width: size(260);
    }
  }
  }


  // size(110)

  .slider {
    margin: 0 0 0 0;
    flex-basis: size(840);
    width: size(840);
    height: size(560);

    .slide-item {
      @apply bg-cover;
      flex-basis: size(840);
      width: size(840);
      height: size(560);

    }

    .splide__pagination {
      right: calc(100% + 3em);
      justify-content: flex-end;
      color: #7C519F;
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>