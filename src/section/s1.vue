<template>
  <article class="s1 overflow-hidden flex flex-col items-center justify-center">
    <div class="title flex flex-col items-center justify-center">
      <div class="t1">長耀里藏富貴 26層森林之王</div>
      <div class="t2 font-['noto_sans_tc']">起因富貴，師出有名，懷藏因地適宜的森情，與不退而求其次的雄心，溫柔隱身 2000 坪公園森林，<br>
        這是林口第 18 個里，唯一住在富貴公園裡的里，這個里，屬於長耀，屬於你。<br>
        家的理想樣貌，一座種在公園裡的建築，將於以里為名的綠金疆土上完美實現。</div>
      <div class="t3 font-['noto_sans_tc']">新國際豪宅生活式樣| 18-29坪 富貴公園首席</div>
      <img class="logo" src="@/section/s1/logo.png" alt="" srcset="">
    </div>
    <img class="leaf" src="@/section/s1/leaf.png" alt="" srcset="">
    <img class="circle" src="@/section/s1/circle.png" alt="" srcset="">
    <img class="circle2" src="@/section/s1/circle2.png" alt="" srcset="">
    <img class="buck" src="@/section/s1/buck.png" alt="" srcset="">
    <img class="buck-e" src="@/section/s1/buck-e.gif" alt="" srcset="">

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  background-size: contain;
  width: 100%;
  height: size(1080);
  position: relative;
  background-color: #E5DBC2;

  .title {
    .t1 {
      font-weight: 700;
      font-size: size(56);
      line-height: 150%;
      color: #B74F32;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid;
      padding-bottom: size(10);
      margin-bottom: size(10);
    }

    .t2 {
      font-weight: 400;
      font-size: size(16);
      line-height: 200%;
      letter-spacing: size(0.5);
    }

    .t3 {
      position: relative;
      font-weight: 400;
      font-size: size(20);
      line-height: size(29);
      text-align: center;
      margin: size(30) 0;

      &::after {
        content: '';
        height: size(1);
        width: size(140);
        right: 105%;
        background-color: #000;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        content: '';
        height: size(1);
        width: size(140);
        left: 105%;
        background-color: #000;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .logo {
      width: size(160);
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
  }

  .circle2 {
    position: absolute;
    left: size(1461);
    top: size(112);
    width: size(378);
    animation: float 3s alternate-reverse infinite ease-in-out;
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
    right: -#{size(22)};
    bottom: -#{size(29)};
    width: size(523);
    z-index: 4;
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
    min-height: size-m(667);
    max-height: size-m(750);
    overflow: hidden;
    background-size: contain;
  }
}
</style>
<script setup>
import { ref } from 'vue';
</script>
