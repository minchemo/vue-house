<template>
  <article class="s1">
    <div class="title absolute">
      <div class="logo"  data-aos="fade-up"><img src="@/section/s1/logo.svg" alt="" srcset=""></div>
      <!--div class="t1"  data-aos="fade-up" data-aos-delay="200">回「嘉」 即刻預約 <br/>高大特區 泰嘉建築經典再現</div-->
      <img class="title1" src="@/section/s1/title1.svg" data-aos="fade-up"/><br>
      <img v-if="!isMobile" class="title2" src="@/section/s1/title2.svg" data-aos="fade-up"/>
    </div>
    <div class="tip absolute text-white">TIMELESS TIME</div>
    <div class="home-openning absolute font-['Noto_Sans_TC']">
      <!--div class="t1"  data-aos="fade-up" data-aos-delay="400">河海之間，吹著學風的基地<br>泰嘉，迎著掌聲回楠梓了！</div-->
      <img v-if="isMobile" class="title2" src="@/section/s1/title2.svg" data-aos="fade-up"/>
      <div class="t2"  data-aos="fade-up" data-aos-delay="600">HOME OPENNING</div>
      <div class="line">
        <span></span>
      </div>
    </div>
    <!--wave-->
    <div class="w">
      <div class="w4"><img src="https://i.imgur.com/qStzKed.png" /><img src="https://i.imgur.com/qStzKed.png" /></div>
      <div class="w3"><img src="https://i.imgur.com/4CQrKVN.png" /><img src="https://i.imgur.com/4CQrKVN.png" /></div>
      <div class="w2"><img src="https://i.imgur.com/u9i71yr.png" /><img src="https://i.imgur.com/u9i71yr.png" /></div>
      <div class="w1"><img src="https://i.imgur.com/u9i71yr.png" /><img src="https://i.imgur.com/u9i71yr.png" /></div>
    </div>
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
    left: size(1037);
    top: size(300);

    .logo {
      width: size(369);

      img {
        width: 100%;
      }
    }

    .title1{
      width: size(369);
      margin-top: size(30);
    }

    .title2{
      width: size(280);
      margin-top: size(40);
    }

    .t1 {
      font-size: size(40);
      letter-spacing: 0.07em;
      font-weight: 700;
      margin-top: size(40);
    }
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
    max-height: size-m(750);
    background: url('@/section/s1/bg_m.jpg');
    background-size: cover;
    position: relative;

    .title {
      left: size-m(99);
      top: size-m(79);
      

      .logo {
        width: size-m(175);
        margin: 0px auto;
      }

      .title1{
      width: size-m(175);
      margin-top: size-m(30);
    }

    

      .t1 {
        font-size: size-m(20);
        margin-top: size-m(15);
        text-align: center;
      }
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

      .title2{
      width: size-m(175);
      position: absolute;
      bottom: size-m(200);
      top: auto;
    }

      .t1 {
        font-size: size-m(12);
        line-height: size-m(18);
        margin-bottom: size-m(54);
      }

      .t2 {
        font-size: size-m(10);
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
