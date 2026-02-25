<template>
  <article class="s1" id="s1">
    <img src="./s1/mo.jpg" class="t0" alt="" v-if="isMobile">
    <img src="./s1/pc.jpg" class="t0" alt="" v-else>
  <div class="t1" data-aos="fade-up" data-aos-delay="0"><img src="./s1/quotes.svg" alt="quotes" /><br>迎向世界<br>
目不轉睛</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="400">當世界走進，您就成為耀眼的光，遠見國際經濟頻率<br>
擁抱台灣布魯克林，住近台北港的雙臂</div>
    <div class="t3" data-aos="fade-up" data-aos-delay="400">未來在等您<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 51">
  <path d="M1,50L23,1" fill="none" stroke="#fff" /></svg>您目不轉睛</div>
    <img src="./s1/en.svg" alt="brooklyn" />
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
  justify-content: center;
  align-items: center;
  height:calc(100dvh - #{sizem(63)});
  min-height: sizem(604);
  max-height: sizem(750);
  // background: #d62051;
  background: url("./s1/bgm.jpg");
  background-size:cover;
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
    opacity: .3;
    pointer-events: none;user-select:none;
    z-index: 99;
  }
  .t1{font-size: size(55);
  letter-spacing: 0.06em;line-height: 1;
img{margin-bottom: -1.5em;}
}
  .t2{
  
}
  .t3{margin-top: 1.1em;
    svg{display: inline-block;height: 1em;}
}
  /*
  .slogo {
    width: sizem(130);
    position: absolute;
    top: sizem(225);
    top:calc(50% + #{sizem(225 - 604 * .5)});
    left: 0;right: 0;margin: auto; z-index: 2;

    @media screen and (min-width: 768px) {
      width: size(340);
      top: size(350);
      top:calc(50% + #{size(350 - 1080 * .5)});
    }
  }

  .logo {
    width: sizem(200);
    position: absolute;
    top: sizem(260);
    top:calc(50% + #{sizem(260 - 604 * .5)});
    left: 0;right: 0;margin: auto; z-index: 2;

    @media screen and (min-width: 768px) {
      width: size(490);
      top: size(440);
      top:calc(50% + #{size(440 - 1080 * .5)});
    }
  }

  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;left: 0;transform: translateY(-50%);
    z-index: 1;
    img{
      width: 100%;
    height: 100%;
      object-fit: cover;
    transform-origin: 50% 29%;
  @media screen and (min-width: 768px) {
    height: auto;
    }
    }

  @media screen and (min-width: 768px) {
    height: auto;
    }
  }
  .cover {
    position: absolute;
    top: 50%;left: 0;right: 0;margin: auto;
    width: 100%;height: 100%;
    background: linear-gradient(0deg,#089EFB00,#089EFB 50%,#089EFBcc 70%,#089EFB00);
   z-index: 1;
    pointer-events: none;user-select:none;
    @media screen and (min-width: 768px) {
    top: 20%;height: 160%;
    }
  }
    */

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