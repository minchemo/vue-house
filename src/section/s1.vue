<template>
  <article class="s1 relative" id="s1">
    <div class="text">
      <div class="logo" data-aos="zoom-in">
        <img src="./s1/logo.svg" alt="logo" />
        <img src="./s1/light.png" alt="light" class="light" />
      </div>
      <div class="t1" data-aos="zoom-in" data-aos-delay="100">仕紳高端選址<br v-if="isMobile" /><span v-else>．</span>隱富長春首席</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="200"><span class="t2-1">捷運南京復興站<span><span>270</span>米 </span></span>
        <span class="t2-2">
          <span><span>18-52</span>坪 </span><span class="hr"></span><span>屏息以待</span>
        </span>
      </div>
      <div class="t3" data-aos="zoom-in" data-aos-delay="300">大將開發 股票代號<span>1453</span></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: 9;
  opacity: .3;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  font-size: sizem(20);
  height: 100svh; // 手機工具列跳動问题的正解，數值固定不受工具列影響
  min-height: sizem(604);
  max-height: sizem(750);
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-self: center;
  /* background: url("./s1/bg.jpg");
    background-size:cover;
    */

  @media screen and (min-width: 768px) {
    font-size: size(42);
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
  }

  .text {
    text-align: center;
    flex: 0 0 auto;
    height: auto;
    margin: auto;
  }

  .logo {
    width: sizem(142);
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      //  top: size(360);
      width: size(356);

    }

    img {
      width: 100%;
    }

    .light {
      position: absolute;
      width: 40.16%;
      top: 0%;
      left: 26%;
      mix-blend-mode: screen;
      animation: light 4s infinite;
    }
  }
  @keyframes light {
  0%   {transform: rotate(0) scale(1); }
  50%   {transform: rotate(180) scale(2); }
  100% {transform: rotate(360deg) scale(1);}
}

  .t1 {
    color: #F9D896;
    font-size: 2.2em;
    letter-spacing: 0.05em;
    line-height: 1.3;
    font-weight: 500;
    margin-top: .7em;
    margin-bottom: .4em;

    @media screen and (min-width: 768px) {
      font-size: 1.8em;
      margin-top: .5em;
      margin-bottom: 0.1em;
    }
  }

  .t2 {
    line-height: 1.2;

    .t2-1 {
      font-size: 1.3em;

      span {
        color: #F9D896;

        span {
          font-size: 1.6em;
          vertical-align: -.1em;
          letter-spacing: -0.03em;
          font-family: Arial;
        }
      }
    }

    .t2-2 {
      font-size: 1.3em;

      span {
        span {
          font-size: 1.2em;
          letter-spacing: -0.01em;
          font-family: Arial;
        }
      }
    }

    @media screen and (max-width: 767px) {
      .t2-1 {
        display: block;
      }

      .t2-2 {
        display: flex;
        font-size: 1.1em;
        align-items: center;
        justify-content: center;

        .hr {
          flex: 1;
          height: 1px;
          background: #fff;
          margin: auto .5em;
        }
      }
    }


  }

  .t3 {
    letter-spacing: 0.25em;

    margin-top: .6em;
    margin-bottom: 0em;

    span {
      font-size: 1.25em;
      font-family: Arial;
      letter-spacing: 0;
      font-weight: 500;
    }

    @media screen and (min-width: 768px) {
      margin-top: .3em;
    margin-bottom: 1em;

    }
  }
}
</style>
<script setup>
import info from "@/info"
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
const canPlayWebP = document.createElement('canvas')
  .toDataURL('image/webp')
  .startsWith('data:image/webp')

</script>