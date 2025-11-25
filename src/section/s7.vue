<template>
  <article class="s7">
    <div class="bg absolute" data-aos="fade" data-aos-delay="0"></div>
    <div class="txt relative">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">精誠國際，堅持初衷｜哲學品牌</h3>
      <h3 class="en" data-aos="fade-up" data-aos-delay="0">Deep In The Soul</h3>
      <div class="txt1">
        <div class="pic relative" data-aos="fade-up" data-aos-delay="400">
          <img src="./s7/1.jpg" alt="">
        </div>
        <div class="txt2">
          <div>
            <div class="t1" data-aos="fade-up" data-aos-delay="0">從土地出發、<br>與環境分享、與生活共好</div>
            <p class="desc" data-aos="fade-up" data-aos-delay="200">
              精誠國際著眼於自身對土地的熱愛與專業，與對美好建築的執著與想望，組織專業團隊充分發揮土地價值，在友善自然的環境中，為客戶構築一輩子珍愛的高品質住宅。</p>
          </div>
          <div>
            <div class="t2" data-aos="fade-up" data-aos-delay="400">與城市友善共生，<br>容積服務第一品牌</div>
            <p class="desc" data-aos="fade-up" data-aos-delay="600">
              成功必須從小地方開始累積，這是精誠國際堅守的信念與價值，20多年來持續協助解決都會區中巷弄狹隘與房屋老舊的問題，推動城市邁向友善環境的嶄新理想風貌。</p>
          </div>
        </div>
      </div>
      <div class="pic2 relative" data-aos="fade-up" data-aos-delay="400">
        <img src="./s7/bom.svg" alt="" v-if="isMobile">
        <img src="./s7/bo.svg" alt="" v-else>
      </div>
    </div>

  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s7 {
  @apply w-full relative text-[#0c7494];
  // height: size(1336);
  /* background-image: url("@/section/s2/bg.jpg");
  background-size: cover; */
  padding: sizem(70) 0 2em 0;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    padding: size(250) 0 8em 0;
    font-size: size(17);
  }

  .bg {
    font-size: sizem(5);
    z-index: 3;
    border: sizem(2) solid currentColor;
    color: #fff;
    width: 94%;
    margin: auto;
    left: 0;
    right: 0;
    top: sizem(30);
    bottom: sizem(0);

    &::before {
      content: "";
      background: currentColor;
      position: absolute;
      left: 1em;
      right: 1em;
      top: 1em;
      bottom: 1em;
      display: block;
    }

    @media screen and (min-width: 768px) {
      font-size: size(12);
      top: size(150);
      bottom: size(120);
      border: size(5) solid currentColor;
      width: 91.5%;
    }
  }

  .pic {
    width: sizem(310);

    img {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      float: left;
      width: size(920);
      margin: 0 size(130) 0 0;

    }

  }

  .pic2 {
    width: sizem(280);
    margin: 3em auto 0 auto;

    img {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      margin: size(150) auto 0 auto;

      img {
        width: 100%;
      }

    }
  }

  .txt {
    margin: 0 auto 3em;
    z-index: 4;
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    justify-content: center;
    gap: 0 4em;
    width: 100%;

    @media screen and (min-width: 768px) {
      display: block;
      margin: 0 auto 5em;
    }

    .title {
      width: 100%;
      font-size: 1.5em;
      text-align: center;

      @media screen and (min-width: 768px) {
        font-size: 3.1em;
      }
    }

    .en {
      width: 100%;
      font-size: .6em;
      text-transform: uppercase;
      margin: .3em auto 3em;
      letter-spacing: 0.16em;
      text-align: center;

      @media screen and (min-width: 768px) {
        font-size: 1.2em;
        margin: .3em auto 4em;
      }
    }

    .subtitle {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .5em 0;
      margin: 0 0 1.7em 0;
      width: sizem(280);
      font-size: 1.1em;
      border: 0 solid currentColor;
      border-width: 1px 0 1px 0;

      @media screen and (min-width: 768px) {
        width: size(560);
        font-size: 1.6em;
        padding: 0;
        margin: 0;
      }
    }

    @media screen and (min-width: 768px) {
      .txt1 {
        height: size(637);
      }

      .txt2 {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;

      }
    }

    .t1 {
      display: block;
      margin: 1em 0 .8em 0;
      width: sizem(280);
      font-size: 1.6em;
      line-height: 1.3;

      @media screen and (min-width: 768px) {
        font-size: 2.5em;
        padding: 0;
        margin: 0em 0 1em 0;
        width: auto;
      }
    }

    .t2 {
      display: block;
      margin: 2em 0 .9em 0;
      width: sizem(280);
      font-size: 1.4em;
      line-height: 1.3;

      @media screen and (min-width: 768px) {
        width: auto;
        font-size: 2.5em;
        padding: 0;
        margin: 2em 0 1em 0;
      }
    }

    .desc {
      width: sizem(280);
      text-align: justify;
      color: #000;
      margin: -.2em 0 .8em;

      @media screen and (min-width: 768px) {
        width: auto;
        margin: 0 size(270) 0 0;
      }
    }
  }

  .box1 {
    width: sizem(100);
    height: sizem(130);
    top: sizem(-50);
    left: sizem(50);
    overflow: hidden;

    @media screen and (min-width: 768px) {
      top: size(-170);
      width: size(400);
      height: size(400);
      left: size(130);
      z-index: 4;
    }

    img {
      height: 160%;
      opacity: .6;
      transform: translateX(-50%);
      margin-top: -40%;
      animation: box1 15s linear alternate infinite;
    }
  }

  @keyframes box1 {
    to {
      transform: translateX(0%);
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

</script>
