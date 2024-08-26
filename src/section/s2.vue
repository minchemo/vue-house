<template>
  <article class="s2 relative" id="s2">
    <img src="./s2/bg.webp" alt="bg" class="bg" data-aos="fade-up" data-aos-delay="0" data-aos-offset="600">
    <h3 class="t1" data-aos="zoom-in" data-aos-delay="0">16458坪  國際菁英生活誌</h3>
    <img src="./s2/line.svg" alt="line" class="line">
    <div class="txt absolute">
      <h4 data-aos="fade-up" data-aos-delay="0">創新複合 綠動園區</h4>
      <p data-aos="fade-up" data-aos-delay="0">住進南港，走進世界。以國際城中城規格，超越地表極致想像、超前世界住居前瞻<br>
      體驗您的一天，萬坪綠逸起跳，席捲家的多元。於松山—南港車站間，悸動・等待</p>
      <img src="./s2/bottom.webp" class="bottom absolute">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s2 {
 height: size(1070);
 overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(36);
  .bg{position: absolute;width:100%;top:size(-332);left:0%;}

  .t1{position: absolute;
    left: 0;right: 0;margin: auto;text-align: center;
    font-size:size(62);
    line-height: 1.13;
    letter-spacing: 0.07em;
    font-weight: 900;z-index: 3;top:size(172);
    }
  .line{ width: 102%;left: -1%;
      position: absolute;z-index: 3;top:size(345);}
  .txt{left: 0;bottom: 0; width:100%;background: #fff;
  display: flex;
  justify-content:center;
  align-items:center;height: size(130);padding-bottom: size(17);
  letter-spacing: 0.04em;
    h4{font-size:size(36); border-right:1px solid currentColor;font-weight: 600;
      padding: .15em .8em .15em 0;margin-right: .8em;}
    p{font-size:size(24);}
  }
  .bottom{left: 0;bottom: 0; width:100%;z-index: 3;height:size(16);}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s2 {
   /* height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);*/
    height: sizem(740);
    font-size:sizem(16);
    background-size: 340% auto;
    .bg{position: absolute;width:330%;top:sizem(-335);left:-115%;}
  .t1{font-size:sizem(25);top:sizem(86);
    }
  .line{ width: sizem(400);left:sizem(-22);top:sizem(164);}
  .txt{height:auto;padding: sizem(35) 0 sizem(62) 0;
    flex-direction: column;
  letter-spacing: 0.04em;
    h4{font-size:sizem(20); border-right:0px solid currentColor; border-bottom:1px solid currentColor;font-weight: 600;
      padding: 0 0 .6em 0;margin: auto auto .6em auto;width: sizem(310);text-align: center;}
    p{font-size:sizem(15);line-height: 1.7;
      margin: auto;width: sizem(310);text-align: justify;}
  }
  .bottom{height:sizem(16);}
  
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>