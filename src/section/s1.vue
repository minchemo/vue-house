<template>
  <article class="s1" id="s1">
    <img src="./s1/mo.jpg" class="t0" alt="" v-if="isMobile">
    <img src="./s1/pc.jpg" class="t0" alt="" v-else>
    <div class="txt">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        <img src="./s1/quotes1.svg" class="quotesl" alt="quotesl" />
        <img src="./s1/quotes1.svg" class="quotesr" alt="quotesr" />
        迎向世界<br>
        目不轉睛
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">當世界走進，您就成為耀眼的光<br>遠見國際經濟頻率<br>
        擁抱台灣布魯克林<br>住近台北港的雙臂</div>
      <div class="t2" data-aos="fade-up" data-aos-delay="400" v-else>當世界走進，您就成為耀眼的光，遠見國際經濟頻率<br>
        擁抱台灣布魯克林，住近台北港的雙臂</div>
      <div class="t3" data-aos="fade-up" data-aos-delay="400">未來在等您<svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 51">
          <path d="M1,50L23,1" fill="none" stroke="#fff" />
        </svg>您目不轉睛</div>
    </div>

    <img src="./s1/en.svg" alt="brooklyn" class="en" data-aos="fade-up" data-aos-delay="600" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  @apply relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height:calc(100dvh - #{sizem(63)});
  min-height: sizem(635);
  max-height: sizem(750);
  // background: #d62051;
  background: url("./s1/bgm.jpg");
  background-size: cover;
  background-position: 50% 50%;
  color: #FFF;
  font-size: sizem(14);
  font-weight: 300;
  text-align: center;

  @media screen and (min-width: 768px) {
    background-image: url("./s1/bg.jpg");
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
    font-size: size(30);
  }

  .t0 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .0;
    pointer-events: none;
    user-select: none;
    z-index: 99;
  }

  .txt {
    position: absolute;
    top: sizem(90);
    left: auto;
    right: auto;

    @media screen and (min-width: 768px) {
      top: size(110);
      top:calc(40% + #{size(110 - 1080 * .4)}) ;
    }
  }

  .t1 {
    font-size: sizem(25);
    letter-spacing: 0.06em;
    line-height: 1.55;
    font-weight: 500;
    margin-bottom: .7em;
    position: relative;
    display: inline-block;

    img {
      height: .53em;
    }

    .quotesl {
      position: absolute;
      top: .4em;
      left: -1.35em;
    }

    .quotesr {
      position: absolute;
      transform: rotate(180deg);
      top: .4em;
      right: -1.2em;
    }

    @media screen and (min-width: 768px) {
      font-size: size(55);
    }
  }


  .t3 {
    margin-top: 1.8em;

    svg {
      display: inline-block;
      height: 1.9em;
    }
  }

  .en {
    width: sizem(267);
    position: absolute;
    bottom: sizem(15);
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;

    @media screen and (min-width: 768px) {
      width: size(640);
      bottom: size(20);
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