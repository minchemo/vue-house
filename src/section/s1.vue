<template>
  <article class="s1 overflow-hidden flex flex-col items-center justify-center">
    <div class="title flex flex-col items-center justify-center">
      <img loading="lazy" class="logo" src="@/section/s1/logo_n.svg" alt="" srcset="" data-aos="fade" data-aos-delay="600">
      <div class="t1" data-aos="fade" data-aos-delay="0">長耀里藏富貴 26層新古典頂級地標</div>
      <div class="t2 font-['noto_sans_tc']" data-aos="fade" data-aos-delay="200">起因富貴，師出有名，懷藏因地適宜的森情，與不退而求其次的雄心，溫柔隱身富貴森林公園，<br v-if="!$isMobile()">
        這是林口第 18 個里，唯一住在公園的里，這個里，屬於長耀，屬於你。<br>
        家的理想樣貌，一座種在公園裡的建築，將於以里為名的綠金疆土上完美實現。</div>
      <div class="t3 font-['noto_sans_tc']" data-aos="fade" data-aos-delay="400">新國際豪宅生活式樣<br v-if="$isMobile()" /><span
          v-else>｜</span>18-29坪 入主富貴公園</div>
    </div>
      <img loading="lazy" class="buck" src="@/section/s1/buck.png" alt="" srcset="">
      <div class="buckbbg" v-if="!$isMobile()"></div>
      <div class="linestyle"></div>
    <lazy-component>
      <img loading="lazy" class="circle" src="@/section/s1/circle.png" alt="" srcset="">
      <img loading="lazy" class="circle2" src="@/section/s1/circle2.png" alt="" srcset="">
    </lazy-component>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  background-size: contain;
  width: 100%;
  height: size(1080);
  position: relative;
  background-color: #3a574c;

  .title {
    .t1 {
      font-weight: 700;
      font-size: size(56);
      line-height: 150%;
      color: #fff;
      border-bottom: 1px solid;
      padding-bottom: size(10);
      margin-bottom: size(10);
    }

    .t2 {
      font-weight: 400;
      font-size: size(16);
      line-height: 200%;
      letter-spacing: size(0.5);
      color: #fff;
    }

    .t3 {
      position: relative;
      font-weight: 400;
      font-size: size(20);
      line-height: size(29);
      text-align: center;
      margin: size(30) 0;
      color: #fff;

      &::after {
        content: '';
        height: size(1);
        width: size(140);
        right: 105%;
        background-color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        content: '';
        height: size(1);
        width: size(140);
        left: 105%;
        background-color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .logo {
      width: size(450);
      margin-bottom: size(50);
    }
  }

  .leaf {
    position: absolute;
    width: size(1983);
    bottom: -#{size(112)};
    left: -#{size(41)};
    animation: move 3s alternate-reverse infinite ease-in-out;
    transform-origin: bottom;
    z-index: 5;

    @keyframes move {
      from {
        transform: skewX(0deg);
      }

      to {
        transform: skewX(5deg);
      }
    }
  }

  .circle {
    position: absolute;
    left: -#{size(288)};
    bottom: 0;
    width: size(785.78);
    animation: float 4s alternate-reverse infinite ease-in-out;
    opacity: .2;
  }

  .circle2 {
    position: absolute;
    left: size(1461);
    top: size(112);
    width: size(378);
    animation: float 3s alternate-reverse infinite ease-in-out;
    opacity: .2;
  }

  @keyframes float {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(10%);
    }
  }

  .buck {
    position: absolute;
    right: size(900);
    bottom: size(29);
    width: size(150);
    z-index: 4;
  }
  .linestyle{
    position: absolute;
    width: size(1820);
    height: size(930);
    top: size(100);
    bottom: size(50);
    left: size(50);
    right: size(50);
    border-radius: size(30);
    border: #fff 1px solid;
  }
  .buckbbg{
    position: absolute;
    width: size(100);
    height:size(80);
    bottom: size(30);
    right: size(902);
    background: #3a574c;
    z-index: 3;

  }

  .buck-e {
    position: absolute;
    right: -#{size(22)};
    bottom: -#{size(29)};
    width: size(523);
    z-index: 3;
  }
}

@media screen and (max-width: 767px) {

  .s1 {
    height: size-m(667);
    padding-bottom: size-m(100);

    .title {
      .t1 {
        font-size: size-m(20);
        text-shadow: 0px 0px size-m(10) rgba(0, 0, 0, 0.1);
        border-bottom: size-m(1) solid;
        padding-bottom: size-m(6);
        margin-bottom: size-m(18);
      }

      .t2 {
        font-size: size-m(12);
        line-height: 180%;
        letter-spacing: size-m(0.02);
        width: size-m(305);
      }

      .t3 {
        font-size: size-m(16);
        line-height: size-m(23);
        text-align: center;
        margin: size-m(29) 0;

        &::after {
          width: size-m(59);
          height: 1px;
        }

        &::before {
          width: size-m(59);
          height: 1px;
        }
      }

      .logo {
        width: size-m(150);
        margin-bottom: size-m(20);
      }
    }

    .leaf {
      width: 105%;
      bottom: -#{size-m(20)};
      left: -2.5%;
      animation: move 3s alternate-reverse infinite ease-in-out;

      @keyframes move {
        from {
          transform: skewX(-1deg);
        }

        to {
          transform: skewX(1deg);
        }
      }
    }

    .circle {
      left: size-m(220);
      bottom: 0;
      width: size-m(261);
    }

    .circle2 {
      left: -#{size-m(13)};
      top: size-m(326);
      width: size-m(158);
    }

    @keyframes float {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(10%);
      }
    }

    .buck {
      position: absolute;
      right: unset;
      left: size-m(120);
      bottom: size-m(40);
      width: size-m(120);
      z-index: 4;
    }

    .linestyle{
    position: absolute;
    width: size-m(355);
    height: size-m(627);
    top: size-m(20);
    bottom: size-m(20);
    left: size-m(10);
    right: size-m(10);
    border-radius: size(30);
    border: #fff 1px solid;
  }

    .buck-e {
      position: absolute;
      right: unset;
      left: -#{size-m(8)};
      bottom: 0;
      width: size-m(168);
      z-index: 3;
    }
  }
}
</style>
<script setup>
import { ref } from 'vue';
</script>
