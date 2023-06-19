<template>
  <article class="s1 overflow-hidden flex flex-col items-center justify-center">
      <div class="linestyle"></div>
    <div class="title flex flex-col items-center justify-center">
      <img class="logo" src="@/section/s1/logo_n.svg" alt="長耀里" srcset="">
      <h2 class="t1">長耀里藏富貴 26層新古典頂級地標</h2>
      <p class="t2 font-['noto_sans_tc']">起因富貴，師出有名，懷藏因地適宜的森情，與不退而求其次的雄心，溫柔隱身富貴森林公園，<br v-if="!$isMobile()">
        這是林口第 18 個里，唯一住在公園的里，這個里，屬於長耀，屬於你。<br>
        家的理想樣貌，一座種在公園裡的建築，將於以里為名的綠金疆土上完美實現。</p>
      <h3 class="t3 font-['noto_sans_tc']">新國際豪宅生活式樣<br v-if="$isMobile()" /><span
          v-else>｜</span>18-29坪 入主富貴公園</h3>
    </div>
      <img class="buck" src="@/section/s1/buck.webp" alt="長耀里" srcset="">
      <div class="buckbbg" v-if="!$isMobile()"></div>
    <lazy-component>
      <img class="circle" src="@/section/s1/circle.webp" alt="長耀里" srcset="">
      <img class="circle2" src="@/section/s1/circle2.webp" alt="長耀里" srcset="">
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
      color: #fff;
      font-weight: 400;

  .title {
    .t1 {
      font-weight: 700;
      font-size: size(56);
      line-height: 150%;
      border-bottom: 1px solid;
      padding-bottom: size(10);
      margin-bottom: size(10);
    }

    .t2 {
      font-size: size(16);
      line-height: 200%;
      letter-spacing: 0.03em;
      
      text-align:justify;
    }

    .t3 {
      position: relative;
      font-size: size(20);
      line-height: size(29);
      text-align: center;
      margin: size(30) 0;
      display: flex;
      align-items:center;
      gap: .5em;


      &::after,
      &::before {
        content: '';
        height: 1px;
        width: size(140);
        background-color: #fff;
      }
    }

    .logo {
      width: size(450);
      margin-bottom: size(50);
    }
  }
  .circle,
  .circle2 {
    position: absolute;
    animation: float 4s alternate-reverse infinite ease-in-out;
      transform: translateY(10%);
    opacity: .2;
  }


  .circle {
    left: size(-288);
    bottom: 0;
    width: size(786);
  }

  .circle2 {
    left: size(1461);
    top: size(112);
    width: size(378);
    animation-delay: 2s;
  }

  @keyframes float {
    from {
      transform: translateY(0);
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
        padding-bottom: size-m(6);
        margin-bottom: size-m(18);
      }

      .t2 {
        font-size: size-m(12);
        line-height: 180%;
        letter-spacing:0;
        width: size-m(305);
      }

      .t3 {
        font-size: size-m(16);
        line-height: size-m(23);
        text-align: center;
        margin: size-m(29) 0;
        &::after,
        &::before {
          width: size-m(59);}
      }

      .logo {
        width: size-m(150);
        margin-bottom: size-m(20);
      }
    }


    .circle {
      left: size-m(220);
      width: size-m(261);
    }

    .circle2 {
      left: -#{size-m(13)};
      top: size-m(326);
      width: size-m(158);
    }
    .buck {
      right: unset;
      left: size-m(120);
      bottom: size-m(40);
      width: size-m(120);
    }

    .linestyle{
    width: size-m(355);
    height: size-m(627);
    top: size-m(20);
    bottom: size-m(20);
    left: size-m(10);
    right: size-m(10);
    border-radius: size(30);
  }

    .buck-e {
      position: absolute;
      right: unset;
      left: size-m(-8);
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
