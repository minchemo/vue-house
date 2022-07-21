<template>
  <article class="s1 font-['noto_serif_tc','serif']">
    <div class="img">
      <img src="./s1/img.jpg" class="imgv" alt="img" v-if="!isMobile">
      <img src="./s1/img_m.jpg" class="imgv" alt="img" v-else>

      <Rabbit class="rabbit" />
      <div class="txt" data-aos="zoom-in-right">上學只要<span><b>1</b>分鐘</span></div>
      <!--div class="txt2" v-if="isMobile">日進月步にっしんげっぽ</div-->
    </div>
    <img src="./s1/leaf6.png" v-if="!isMobile" class="leaf6" alt="leaf">

    <div class="txtall">
      <img src="./s1/leaf1.png" v-if="!isMobile" data-aos="fade" data-aos-delay="300" class="leaf1" alt="leaf">
      <img src="./s1/leaf2.png" v-if="!isMobile" data-aos="fade" data-aos-delay="100" class="leaf2" alt="leaf">
      <img src="./s1/leaf3.png" v-if="!isMobile" data-aos="fade" class="leaf3" alt="leaf">
      <img src="./s1/leaf4.png" v-if="!isMobile" data-aos="fade" data-aos-delay="200" class="leaf4" alt="leaf">
      <img src="./s1/leaf5.png" v-if="!isMobile" data-aos="fade" data-aos-delay="400" class="leaf5" alt="leaf">
      <img src="./s1/book1.png" v-if="!isMobile" data-aos="fade-down" class="book1" alt="book">
      <img src="./s1/book2.png" v-if="!isMobile" data-aos="fade-down" data-aos-delay="300" class="book2" alt="book">

      <img src="./s1/logo.svg" class="logo" alt="logo" v-if="!isMobile" data-aos="zoom-in">
      <img src="./s1/logom.svg" class="logo" alt="logo" v-else data-aos="zoom-in">
      <h3 class="txt" v-if="!isMobile">
        <div class="t1" data-aos="zoom-in" data-aos-delay="200"><span class="">成州國小正對面</span><span>戶戶邊間正3房</span></div>
        <div class="t2" data-aos="zoom-in" data-aos-delay="400">23-29坪<span>｜</span>02-8295-3311</div>
      </h3>
      <h3 class="txt" v-else>
        <div class="t1" data-aos="zoom-in" data-aos-delay="200"><span class="">成州國小正對面</span><span>戶戶邊間正3房</span></div>
        <div class="t2" data-aos="zoom-in" data-aos-delay="400">23-29坪<span>｜</span>02-8295-3311</div>
      </h3>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  // background: url('./s1/pc.jpg') center center no-repeat;
  background-size: contain;
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  //z-index: 3;
  background-color: #FFEF00;
}

.img {
  position: absolute;
  top: 50%;
  left: 0;

  .imgv {
    width: size(770);
    position: absolute;
    top: size(40);
    left: 0;
  }

  .rabbit {
    position: absolute;
    top: size(-420);
    left: size(210);
    width: size(455);
  }

  .txt {
    position: absolute;
    width: 6.57em;
    height: 6.57em;
    color: #fff;
    border-radius: 50%;
    background: #00B451;
    left: 20.17em;
    top: -5.16em;
    font-size: size(30);
    padding: 1.6em 0 0 0;
    line-height: 1.3;
    transform-origin: 0 100%;
    text-align: center;

    &::before {
      content: "";
      width: 1.9em;
      height: 1.9em;
      ;
      display: block;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 53 53'%3E%3Cpath fill='%2300B451' d='M32.2,0.3l20.8,27L6.2,52c-2.3,1.2-4.7-1.4-3.4-3.6L32.2,0.3z'/%3E%3C/svg%3E") center no-repeat;
      background-size: contain;
      position: absolute;
      bottom: 0;
      left: -0.5em;
    }

    span {
      display: block;
      font-size: 1.5em;

      b {
        font-weight: 600;
        font-size: 1.15em;
        display: inline-block;
        vertical-align: -0.07em;
      }
    }
  }
}

.leaf1 {
  position: absolute;
  top: size(130);
  right: size(200);
  width: size(70);
  transform: translate(-150%, -150%);
}

.leaf2 {
  position: absolute;
  top: size(10);
  right: size(230);
  width: size(58);
  transform: translate(150%, -150%);
}

.leaf3 {
  position: absolute;
  top: size(230);
  right: size(330);
  width: size(100);
  transform: translate(150%, -150%);
}

.leaf4 {
  position: absolute;
  top: size(330);
  right: size(265);
  width: size(85);
  transform: translate(150%, -150%);
}

.leaf5 {
  position: absolute;
  top: size(490);
  left: size(120);
  width: size(85);
  transform: translate(-150%, -150%);
}

.book1 {
  position: absolute;
  top: size(280);
  left: size(170);
  width: size(190);
}

.book2 {
  position: absolute;
  top: size(80);
  left: size(235);
  width: size(180);
}

.leaf6 {
  position: absolute;
  top: 0;
  right: 0;
  width: size(439);
}

@keyframes ro {
  to {
    transform: rotate(360deg);
  }
}

.txtall {
  position: absolute;
  top: calc(50% + (175 - 540) * 100vw / 1920);
  right: 0;
  width: size(1200);
  text-align: center;

  .logo {
    width: size(271);
  }

  .txt {
    //@include img_c_pc(1200, 140);
    //@extendtop:size(58); //calc(50% + (150 - 540) * 100vw / 1920);

    line-height: 1.2;
    letter-spacing: 0em;
    text-align: center;
    z-index: 3;
    color: #000;
    margin: 1.4em 0 0 0;

  }

  .t1 {
    display: flex;
    font-weight: 700;
    font-size: size(50);
    align-items: center;
    justify-content: center;
    gap: size(12);

    span:nth-child(1) {
      color: #46B258;
    }
  }

  .t2 {
    display: inline-block;
    font-weight: 600;
    font-size: size(48);

    span {
      color: #46B258;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  // .a1 {width: 100%;position: absolute;left: 0;top:size-m(-63);opacity: 0.50;}
  .s1 {
    min-height: size-m(667);
    max-height: size-m(750);
    overflow: hidden;
    background: url('./s1/mobg.jpg') center;
    background-size: contain;
  }

  .img {
    width: 100%;
    top: auto;
    bottom: 0;

    .imgv {
      width: 100%;
      top: auto;
      bottom: 0;
      // opacity: 0;
    }

    .rabbit {
      top: size-m(-399);
      left: size-m(69);
      width: size-m(249);
    }

    .txt {
      left: size-m(270);
      top: size-m(-250);
      font-size: size-m(13);
    }

    .txt2 {
      position: absolute;
      left: 0;
      width: 100%;
      bottom: size-m(10);
      font-size: size-m(32);
      color: #fff;
      text-shadow: 0.05em 0.05em 0.2em #000;
    }
  }

  .txtall {
    top: calc(50% + (40 - 333.5) * 100vw / 375);
    width: 100%;

    .logo {
      width: size-m(230);
    }

    .txt {
      font-size: size-m(26.2);
      font-weight: 600;
      margin: .7em 0 0 0;
      line-height: 1.3;
    }

    .t1 {
      font-size: size-m(30);
      flex-direction: column;
      gap: size-m(2);

      span:nth-child(1) {
        color: #46B258;
      }
    }

    .t2 {
      display: block;
      font-weight: 600;
      font-size: size-m(20);
      margin-top: size-m(12);

      span {
        color: #46B258;
      }
    }

  }

}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Rabbit from './rabbit.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
