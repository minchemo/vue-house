<template>
  <article class="s2">
    <div class="caption">基地空拍實景經後製修飾</div>
    <!--   -->
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">自成一隅繁華， <br v-if="isMobile" />也近一城核心。</h3>
      <p class="desc" data-aos="fade-up" data-aos-delay="400">
        「春陽沄集」整排臨路店面,自帶繁華氣息,也貼近內埔核心,擁天后宮、廣濟路、文化路3大商圈,同享國道三號、未來義大健康園區,百億建設座落、人潮車流並進,一墅搶進財位,傳家致富正當時! </p>

    </div>
    <Fullview />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  //@apply relative overflow-hidden bg-[#00398A] text-[#fff];
  width: 100%;
  // height: size(1059);
  font-size: size(19);
  margin-left: -1px;
  background: #1367af;

  .caption {
    background: #1367af;

    text-align: right;
    padding: 0 1em 1em 1em;
  }

  .txt {
    text-align: center;
    position: relative;
    z-index: 10;
    margin-bottom: -9.3em;

    .title {
      color: #fff;
      padding-top: 3.2em;
    }

    p.desc {
      color: #fff;
      font-size: 1.5em;
      width: 43em;
      margin: 0 auto;
    }
  }

  .viewbox {
    z-index: 2;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
    // height: sizem(550);
    font-size: sizem(15);
    background: rgb(19 103 173);

    bottom: 10vw;
    margin-left: -1px;

    .caption {
      background: transparent;
      text-align: right;
    }

    .viewbox {
      margin-top: 5em;

      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: -110px;
        background: linear-gradient(to bottom, rgba(30, 87, 153, 1) 0%, rgba(125, 185, 232, 0) 100%);
      }
    }


    .txt {
      text-align: justify;
      padding-top: 0em;
      width: sizem(310);
      margin: auto auto -5em auto;

      .title {
        color: #fff;
        padding-top: 1em;
      }

      p.desc {
        color: #fff;
        font-size: 1em;
      }
    }


    p.desc {
      color: #fff;
    }

    .viewbox {
      height: sizem(550);

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
