<template>
  <article class="s1 overflow-hidden flex flex-col items-center justify-center">
      <div class="linestyle"></div>
    <div class="title flex flex-col items-center justify-center">
      <img class="logo-light" src="@/section/s1/light.png" alt="長耀里" srcset="">
      <img class="logo" v-if="!$isMobile()" src="@/section/s1/logo.png" alt="長耀里" srcset="">
      <img class="logo" v-else src="@/section/s1/logo_m.png" alt="長耀里" srcset="">
      <img class="t1-img" v-if="!$isMobile()" src="@/section/s1/t1.svg" alt="長耀里" srcset="">
      <h2 class="t3" v-if="!$isMobile()">2609-2000</h2>
      <h2 class="t1" v-if="$isMobile()">爭藏！林口國際級公園景觀名宅生活</h2>
      <p class="t2" v-if="$isMobile()">
        【長耀里2】長耀建設深耕林口代表之作<br>
        坐落中心商業帶黃金軸線<br>
        入主富貴公園千坪綠馥<br>
        坐落在中心商業帶的黃金軸線<br>
        800米直達科技大廠ＡＳＭＬ預定地<br>
        榮耀新北國際ＡＩ智慧園區<br><br>
        富人名流爭相收藏<br>
        一期深受肯定，二期矚目而生！
        </p>
      <h3 class="t4" v-if="$isMobile()">18-29坪精質入主｜130米永恆棟距<br>26層新古典最美地標</h3>
    </div>
    <img class="logoicon" v-if="$isMobile()" src="@/section/s1/logoicon.svg" alt="長耀里" srcset="">
      <!--img class="buck" src="@/section/s1/buck.webp" alt="長耀里" srcset="">
      <div class="buckbbg" v-if="!$isMobile()"></div-->
    <lazy-component>
      <!--img class="circle" src="@/section/s1/circle.webp" alt="長耀里" srcset="">
      <img class="circle2" src="@/section/s1/circle2.webp" alt="長耀里" srcset=""-->
    </lazy-component>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  background-image: url('@/section/s1/bg.jpg');
  background-size: cover;
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
      position: absolute;
      top:size(836);
      font-weight: 600;
      font-size: size(45);
      line-height: size(29);
      text-align: center;
      margin: size(30) 0;
      display: flex;
      align-items:center;
      gap: .5em;
      color: #DCC35F;


      &::after,
      &::before {
        content: '';
        height: 1px;
        width: size(350);
        background-color: #DCC35F;
      }
    }
    .logo-light{
      position: absolute;
      width: size(244);
      left: size(304);
      top: size(104);
      mix-blend-mode: plus-lighter;
      z-index: 2;
    }

    .logo {
      position: absolute;
      width: size(1031);
      top: size(190);
      margin-right: size(80);
    }
    .t1-img {
      position: absolute;
      width: size(684);
      top: size(580);
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
    background-image: url('@/section/s1/bg_m.jpg');
    background-size: cover;
    height: size-m(667);
    padding-bottom: size-m(100);

    .title {
      

      .t1 {
        font-size: size-m(20);
        padding-bottom: size-m(6);
        margin-bottom: size-m(18);
        margin-top: size-m(250);
        color: #DCC35F;
        text-shadow: black 0.1em 0.1em 0.2em
      }

      .t2 {
        font-size: size-m(13);
        line-height: 180%;
        letter-spacing:0;
        width: size-m(330);
        text-align: center;
        text-shadow: black 0.1em 0.1em 0.2em
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

      .t4 {
        font-size: size-m(20);
        text-align: center;
        margin-top: size-m(30);
        color: #fff;
        text-shadow: black 0.1em 0.1em 0.2em
      }

      

      .logo {
        width: size-m(220);
        margin-bottom: size-m(20);
        margin-right: size-m(-30);
        top:size-m(50);
      }

      .logo-light{
      width: size-m(71);
      left: size-m(125);
      top: size-m(30);
    }
    }

    .logoicon{
    width: size-m(57);
    position: absolute;
    bottom:size-m(20);
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
