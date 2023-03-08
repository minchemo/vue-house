<template>
  <article class="s1">
    <div class="title absolute">
      <div class="logo"  data-aos="fade-up"><img src="@/section/s1/logo.svg" alt="" srcset=""></div>
    </div>
    <img  class="t1 absolute" v-if="!$isMobile()" src="@/section/s1/title.svg" alt="">
    <img  class="t1 absolute" v-if="$isMobile()" src="@/section/s1/title_m.svg" alt="">
    <img class="bird absolute" src="@/section/s1/bird.svg" alt="">
    <img class="line absolute" src="@/section/s1/line.svg" alt="">
    <img class="stitle absolute" src="@/section/s1/stitle.svg" alt="">

    <!--div class="t1"  data-aos="fade-up" data-aos-delay="200">回「嘉」 即刻預約 <br/>高大特區 泰嘉建築經典再現</div-->

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background: url('@/section/s1/bg.jpg');
  background-size: cover;

  .title {
    right: size(210);
    top: size(130);

    .logo {
      width: size(430);

      img {
        width: 100%;
      }
    }

    
  }
  .t1 {
      width: size(1200);
      bottom: size(105);
      left: size(225);
    }

  .bird {
      width: size(200);
      bottom: size(300);
      left: size(205);
    }
   .line {
      width: size(428);
      bottom: size(248);
      left: size(697);
    } 
    .stitle {
      width: size(100);
      bottom: size(10);
      right: size(20);
    } 

  .tip {
    left: size(26);
    bottom: size(33);
    font-weight: 600;
    font-size: size(30);
    writing-mode: vertical-lr;
    letter-spacing: 0.21em;
  }

  .home-openning {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    left: 50%;
    transform: translateX(-49.3%);
    gap: size(20);

    .t1 {
      font-size: size(25);
      font-weight: 400;
      letter-spacing: 0.07em;
      line-height: size(36);
    }

    .t2 {
      font-size: size(20);
      font-weight: 400;
      letter-spacing: 0.07em;
      line-height: size(29);
    }

    .line {
      background-color: #fff;
      width: size(2);
      height: size(144.6);
      position: relative;

      span {
        position: absolute;
        display: block;
        background-color: #fff;
        height: size(10);
        width: size(10);
        border-radius: 100%;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        animation: move 3s infinite;

        @keyframes move {
          from {
            top: 0;
          }

          to {
            top: 100%;
            opacity: 0;
          }
        }
      }
    }
  }

  .w {
    width: 100%;
    overflow: hidden;
    height: 40vh;
    position: absolute;
    left: 0;
    bottom: 0;
    pointer-events: none;

    .w1 {
      position: absolute;
      top: 5vw;
      left: 0;
      transform: rotate(3deg);
      white-space: nowrap;

      img {
        width: 100%;
        transform: translateX(-100%);
        animation: light1 6s linear infinite;
      }
    }

    .w2 {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.7;
      transform: rotate(-3deg) scaleX(-1);
      white-space: nowrap;

      img {
        width: 100%;
        transform: translateX(-100%);
        animation: light1 8s linear infinite reverse;
      }
    }

    .w3 {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(-10deg);
      white-space: nowrap;

      img {
        width: 100%;
        transform: translateX(-100%);
        animation: light1 7s linear infinite;
      }
    }

    .w4 {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(-10deg);
      white-space: nowrap;

      img {
        width: 100%;
        transform: translateX(-100%);
        animation: light1 9s linear infinite;
      }
    }

    @keyframes light1 {
      to {
        transform: translateX(0);
      }
    }
  }


}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: size-m(667);
    max-height: size-m(820);
    //max-height: size-m(750);
    background: url('@/section/s1/bg_m.jpg');
    background-size: cover;
    position: relative;

    .title {
      left: size-m(40);
      top: size-m(59);
      

      .logo {
        width: size-m(190);
        margin: 0px auto;
      }

      
    }
    .t1 {
        width: size-m(190);
        left: size-m(92);
        bottom: size-m(79);
      }
    .bird {
      width: size-m(90);
      bottom: size-m(262);
      left: size-m(240);
    }
     .line {
      width: size-m(160);
      left: size-m(110);
      bottom: size-m(255);
    } 
    .stitle {
      width: size-m(100);
      bottom: size-m(10);
      right:size-m(10);
    }   

    .tip {
      left: size-m(4);
      bottom: size-m(93);
      font-size: size-m(18);
    }

    .home-openning {
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      gap: 0;

      .t1 {
        font-size: size-m(12);
        line-height: size-m(18);
        margin-bottom: size-m(54);
      }

      .t2 {
        font-size: size-m(7);
        margin-bottom: size-m(10);
      }

      .line {
        width: size-m(1);
        height: size-m(102);
        position: relative;

        span {
          height: size-m(5);
          width: size-m(5);
          transform: translateX(-50%);
        }
      }
    }

    .w {
      height: 20vh;
      position: absolute;
    }

  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
