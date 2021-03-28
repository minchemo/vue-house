<template>
  <div class="section1">
    <v-touch
      class="bg"
      @swipeleft="decIndex"
      @swiperight="addIndex"
    >
      <div class="indigator flex absolute">
        <div
          :class="`${bubbleIndex === 0 ? 'active' : ''}`"
          @click="bubbleIndex = 0"
        ></div>
        <div
          :class="`${bubbleIndex === 1 ? 'active' : ''}`"
          @click="bubbleIndex = 1"
        ></div>
        <div
          :class="`${bubbleIndex === 2 ? 'active' : ''}`"
          @click="bubbleIndex = 2"
        ></div>
        <div
          :class="`${bubbleIndex === 3 ? 'active' : ''}`"
          @click="bubbleIndex = 3"
        ></div>
        <div
          :class="`${bubbleIndex === 4 ? 'active' : ''}`"
          @click="bubbleIndex = 4"
        ></div>
      </div>
      <div :class="`animate-slide slide1 ${bubbleIndex === 0 ? 'active' : ''}`">
        <div class="balls">
          <img
            src="./ball/bright.png"
            alt=""
            :class="`ball${index} absolute`"
            v-for="index in 5"
            :key="`slide1-ball${index}`"
          >
        </div>
        <img
          src="./s1/img1.png"
          alt=""
          class="img absolute"
        >
        <img
          src="./s1/b1.png"
          alt=""
          class="bubble absolute"
        >
        <img
          src="./s1/timg.png"
          alt=""
          class="timg absolute"
        >
        <div class="title absolute">別人的是房<br />自己的才是家</div>
        <div class="subtitle absolute">HOUSE OF<br />HAPPINESS</div>
        <div class="img-title absolute">租不如買<br />自己的最好</div>
      </div>
      <div :class="`animate-slide slide2 ${bubbleIndex === 1 ? 'active' : ''}`">
        <div class="balls">
          <img
            src="./ball/bright.png"
            alt=""
            :class="`ball${index} absolute`"
            v-for="index in 8"
            :key="`slide2-ball${index}`"
          >
        </div>
        <img
          src="./s1/img2.png"
          alt=""
          class="img absolute"
        >
        <img
          src="./s1/b2.png"
          alt=""
          class="bubble absolute"
        >
        <img
          src="./s1/timg.png"
          alt=""
          class="timg absolute"
        >
        <div class="title absolute">做牛做馬<br />更要當家做自己</div>
        <div class="subtitle absolute">HOUSE OF<br />HAPPINESS</div>
        <div class="img-title absolute">買房不求人<br />有薪就有家</div>
      </div>
      <div :class="`animate-slide slide3 ${bubbleIndex === 2 ? 'active' : ''}`">
        <div class="balls">
          <img
            src="./ball/bright.png"
            alt=""
            :class="`ball${index} absolute`"
            v-for="index in 7"
            :key="`slide3-ball${index}`"
          >
        </div>
        <img
          src="./s1/img3.png"
          alt=""
          class="img absolute"
        >
        <img
          src="./s1/b3.png"
          alt=""
          class="bubble absolute"
        >
        <img
          src="./s1/timg.png"
          alt=""
          class="timg absolute"
        >
        <div class="title absolute">養兒防老OUT<br />養房抗老IN</div>
        <div class="subtitle absolute">HOUSE OF<br />HAPPINESS</div>
        <div class="img-title absolute">全民抗老運動<br />神采飛洋開跑</div>
      </div>
      <div :class="`animate-slide slide4 ${bubbleIndex === 3 ? 'active' : ''}`">
        <div class="balls">
          <img
            src="./ball/bright.png"
            alt=""
            :class="`ball${index} absolute`"
            v-for="index in 8"
            :key="`slide4-ball${index}`"
          >
        </div>
        <img
          src="./s1/img4.png"
          alt=""
          class="img absolute"
        >
        <img
          src="./s1/b4.png"
          alt=""
          class="bubble absolute"
        >
        <img
          src="./s1/timg.png"
          alt=""
          class="timg absolute"
        >
        <div class="title absolute">公園 校園 花園<br />誠徵有園人</div>
        <div class="subtitle absolute">HOUSE OF<br />HAPPINESS</div>
        <div class="img-title absolute">洲子洋公園<br />和你真投緣</div>
      </div>
      <div :class="`animate-slide slide5 ${bubbleIndex === 4 ? 'active' : ''}`">
        <div class="balls">
          <img
            src="./ball/bright.png"
            alt=""
            :class="`ball${index} absolute`"
            v-for="index in 6"
            :key="`slide5-ball${index}`"
          >
        </div>
        <img
          src="./s1/img5.png"
          alt=""
          class="img absolute"
        >
        <img
          src="./s1/b5.png"
          alt=""
          class="bubble absolute"
        >
        <img
          src="./s1/timg.png"
          alt=""
          class="timg absolute"
        >
        <div class="title absolute">愛情與麵包<br />我家全包</div>
        <div class="subtitle absolute">HOUSE OF<br />HAPPINESS</div>
        <div class="img-title absolute">低自備<br />低月付<br />低總價<br />3低入手</div>
      </div>
    </v-touch>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: 100vh;
  max-height: 1080px;
  // background-color: #fddb3e;
  // background-image: url('./s1/kv_city_bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  z-index: 6;
  overflow: hidden;
  // pointer-events: none;

  > .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &.active {
      opacity: 1;
    }
  }
}

img {
  pointer-events: none;
}

.indigator {
  position: absolute;
  right: size(73);
  bottom: size(47);
  z-index: 2;
  > div {
    width: 15px;
    height: 15px;
    background-color: #fff;
    margin: 0 5px;
    opacity: 0.4;
    border-radius: 20px;
    cursor: pointer;
    &.active {
      background-color: #3c2723;
      opacity: 0.7;
    }
  }
}

.animate-slide {
  transition: all 0.5s;
  .balls {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      > img:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }
  .bubble {
    transform: scale(0);
    // transform-origin: bottom left;
    opacity: 0;
    transition: transform 1s, opacity 0.3s;
  }

  .img {
    transform: translateY(50px);
    opacity: 0;
    transition: transform 1s, opacity 0.3s;
  }

  .img-title {
    font-size: size(51);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: 2.51px;
    text-align: center;
    color: #231815;
    opacity: 0;
    transition: opacity 1s;
    transition-delay: 0.5s;
  }

  .timg {
    width: size(91);
    opacity: 0;
    transition: opacity 1s;
    transition-delay: 0.5s;
  }

  .title {
    font-size: size(97);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    transform: translateY(50px);
    opacity: 0;
    transition: transform 1s, opacity 0.3s;
    transition-delay: 0.3s;
  }

  .subtitle {
    opacity: 0.53;
    font-family: 'khmer';
    font-size: size(115);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.84;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    transform: translateY(50px);
    opacity: 0;
    transition: transform 1s, opacity 0.3s;
    transition-delay: 0.5s;
  }

  &.active {
    .bubble {
      transform: scale(1);
      opacity: 1;
    }

    .img {
      transform: translateY(0);
      opacity: 1;
    }

    .img-title {
      opacity: 1;
    }

    .timg {
      opacity: 1;
    }

    .title {
      transform: translateY(0);
      opacity: 1;
    }

    .subtitle {
      transform: translateY(0);
      opacity: 0.53;
    }
  }
}

.slide1 {
  background-color: #3ca4d5;

  .bubble {
    width: size(342);
    top: size(277);
    right: size(210);
  }

  .img {
    width: size(1342);
    right: size(72);
    bottom: 0;
  }

  .img-title {
    top: size(358);
    right: size(248);
  }

  .timg {
    top: size(497);
    right: size(332);
  }

  .title {
    top: size(195);
    left: size(240);
  }

  .subtitle {
    top: size(482);
    left: size(244);
  }

  .ball1 {
    height: size(506);
    left: size(-350);
    top: size(391);
  }

  .ball2 {
    width: size(267);
    top: size(448);
    left: size(826);
  }

  .ball3 {
    width: size(310);
    left: size(216);
    bottom: size(-200);
  }

  .ball4 {
    width: size(664);
    top: size(-400);
    right: 0;
  }

  .ball5 {
    height: size(310);
    right: size(-160);
    top: size(578);
  }
}

.slide2 {
  background-color: #f3d847;

  .bubble {
    width: size(375);
    top: size(441);
    right: size(669);
  }

  .img {
    width: size(1300);
    right: 0;
    bottom: 0;
  }

  .img-title {
    top: size(525);
    right: size(732);
  }

  .timg {
    top: size(673);
    right: size(817);
  }

  .title {
    top: size(195);
    left: size(295);
    color: #492923;
  }

  .subtitle {
    top: size(482);
    left: size(295);
  }

  .ball1 {
    height: size(506);
    left: size(-350);
    top: size(391);
  }

  .ball2 {
    width: size(139);
    top: size(701);
    left: size(433);
  }

  .ball3 {
    width: size(86);
    left: size(285);
    bottom: size(48);
  }

  .ball4 {
    width: size(178);
    bottom: size(42);
    left: size(718);
  }

  .ball5 {
    height: size(276);
    right: size(744);
    top: size(10);
  }

  .ball6 {
    height: size(109);
    right: size(572);
    top: size(62);
  }

  .ball7 {
    width: size(329);
    top: size(-102);
    right: size(58);
  }

  .ball8 {
    width: size(272);
    top: size(384);
    right: size(27);
  }
}

.slide3 {
  background-color: #d8187c;

  .bubble {
    width: size(417);
    top: size(374);
    right: size(814);
  }

  .img {
    width: size(1334);
    left: 0;
    bottom: 0;
  }

  .img-title {
    top: size(476);
    right: size(843);
  }

  .timg {
    top: size(623);
    right: size(957);
  }

  .title {
    top: size(195);
    right: size(150);
    color: #fff;
    text-align: right;
  }

  .subtitle {
    top: size(482);
    right: size(150);
  }

  .ball1 {
    height: size(650);
    left: size(-350);
    top: size(258);
  }

  .ball2 {
    width: size(80);
    top: size(140);
    left: size(633);
  }

  .ball3 {
    width: size(349);
    left: size(872);
    top: size(-140);
  }

  .ball4 {
    width: size(148);
    top: size(73);
    right: size(268);
  }

  .ball5 {
    height: size(164);
    left: size(687);
    bottom: size(104);
  }

  .ball6 {
    height: size(253);
    right: size(485);
    top:size(670);
  }

  .ball7 {
    width: size(784);
    right: size(-285);
    top: size(650);
  }
}

.slide4 {
  background-color: #a3ca0f;

  .bubble {
    width: size(404);
    top: size(189);
    right: size(793);
  }

  .img {
    width: size(762);
    left: size(79);
    top: 50%;
    margin-top:size(-300);
  }

  .img-title {
    top: size(289);
    right: size(850);
  }

  .timg {
    top: size(438);
    right: size(935);
  }

  .title {
    top: size(195);
    right: size(150);
    color: #fff;
    text-align: right;
  }

  .subtitle {
    top: size(482);
    right: size(150);
  }

  .ball1 {
    width: size(409);
    left: size(22);
    top: size(-178);
  }

  .ball2 {
    width: size(75);
    top: size(138);
    left: size(557);
  }

  .ball3 {
    width: size(73);
    left: size(128);
    top: size(339);
  }

  .ball4 {
    width: size(199);
    top: size(856);
    left: size(94);
  }

  .ball5 {
    height: size(536);
    left: size(359);
    bottom: size(-204);
  }

  .ball6 {
    height: size(199);
    right: size(768);
    top: size(592);
  }

  .ball7 {
    width: size(388);
    right: size(283);
    top: size(700);
  }

  .ball8 {
    width: size(104);
    right: size(95);
    top: size(670);
  }
}

.slide5 {
  background-color: #eb5a1e;

  .bubble {
    width: size(433);
    top: size(524);
    right: size(805);
  }

  .img {
    width: size(960);
    right: 0;
    top:50%;
    margin-top:size(-560);
  }

  .img-title {
    top: size(561);
    right: size(931);
  }

  .timg {
    top: size(846);
    right: size(984);
  }

  .title {
    top: size(195);
    left: size(150);
    color: #fff;
    text-align: left;
  }

  .subtitle {
    top: size(482);
    left: size(150);
  }

  .ball1 {
    width: size(549);
    left: size(645);
    top: size(-178);
  }

  .ball2 {
    width: size(159);
    top: size(174);
    left: size(707);
  }

  .ball3 {
    width: size(100);
    right: size(528);
    top: size(77);
  }

  .ball4 {
    width: size(172);
    top: size(354);
    right: size(755);
  }

  .ball5 {
    height: size(259);
    top: size(380);
    right: size(64);
  }

  .ball6 {
    height: size(244);
    left: size(178);
    bottom: size(70);
  }
}

// an 2s infinite alternate;
@keyframes an {
  to {
    transform: translateY(0);
  }
  // width: size(242);
  // height: size(242);
  // top: size(40);
  // left: size(20);
  // transform: translateY(5%);
  // animation: an 2s 3s infinite alternate;
}

@keyframes an1 {
  to {
    transform: translateY(0) rotate(180deg);
  }

  // animation: an1 2s 2s infinite alternate !important;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height: calc(100vh - 60px);
    position: relative;
    margin: 0;
  }

  .indigator {
    position: absolute;
    width: size-m(145);
    left: 0;
    margin: 0 auto;
    right: 0;
    bottom: size-m(13);
    z-index: 2;
    > div {
      width: 15px;
      height: 15px;
      background-color: #fff;
      margin: 0 5px;
      opacity: 0.4;
      border-radius: 20px;
      cursor: pointer;
      &.active {
        background-color: #3c2723;
        opacity: 0.7;
      }
    }
  }

  .animate-slide {
    transition: all 0.5s;
    .balls {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 2;
        > img:nth-child(#{$i}) {
          transform: translateY((random(5) - 20) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }
    .bubble {
      transform: scale(0);
      // transform-origin: bottom left;
      opacity: 0;
      transition: transform 1s, opacity 0.3s;
    }

    .img {
      transform: translateY(50px);
      opacity: 0;
      transition: transform 1s, opacity 0.3s;
    }

    .img-title {
      font-size: size-m(16);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.24;
      letter-spacing: 2.51px;
      text-align: center;
      color: #231815;
      opacity: 0;
      transition: opacity 1s;
      transition-delay: 0.5s;
    }

    .timg {
      width: size-m(25);
      opacity: 0;
      transition: opacity 1s;
      transition-delay: 0.5s;
    }

    .title {
      font-size: size-m(29);
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      transform: translateY(50px);
      opacity: 0;
      transition: transform 1s, opacity 0.3s;
      transition-delay: 0.3s;
    }

    .subtitle {
      opacity: 0.53;
      font-family: 'khmer';
      font-size: size-m(35);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.84;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      transform: translateY(50px);
      opacity: 0;
      transition: transform 1s, opacity 0.3s;
      transition-delay: 0.5s;
    }

    &.active {
      .bubble {
        transform: scale(1);
        opacity: 1;
      }

      .img {
        transform: translateY(0);
        opacity: 1;
      }

      .img-title {
        opacity: 1;
      }

      .timg {
        opacity: 1;
        width: size-m(30);
      }

      .title {
        transform: translateY(0);
        opacity: 1;
      }

      .subtitle {
        transform: translateY(0);
        opacity: 0.53;
      }
    }
  }

  .slide1 {
    background-color: #3ca4d5;

    .bubble {
      width: size-m(111);
      top:auto;
      right: size-m(21);
      bottom:size-m(150);
    }

    .img {
      width: size-m(350);
      right: size-m(0);
      bottom: 0;
    }

    .img-title {
      top:auto;
      bottom:size-m(195);
      right: size-m(30);
    }

    .timg {
      right: size-m(63);
      top:auto;
      bottom:size-m(170);
    }

    .title {
      top: calc(50% - 30vw);
      left: size-m(21);
    }

    .subtitle {
      top: calc(50% - 6vw);
      left: size-m(21);
    }

    .ball1 {
      height: size-m(237);
      left: auto;
      right: size-m(-70);
      top:calc(50% - 82vw);
    }

    .ball2 {
      width: size-m(60);
      top: size-m(84);
      left: size-m(73);
    }

    .ball3 {
      width: auto;
      height: size-m(206);
      right: auto;
      left: size-m(-90);
      top:calc(50% + 8vw);
    }

    .ball4 {
      width: size-m(80);
      top:auto;
      right: size-m(183);
      bottom: size-m(100);
    }

    .ball5 {
      height: size-m(95);
      right: size-m(-40);
      top:calc(50% + 30vw);
    }
  }

  .slide2 {
    background-color: #f3d847;

    .bubble {
      width: size-m(122);
      top:auto;
      bottom:size-m(90);
      right: size-m(183);
    }

    .img {
      width: size-m(375);
      right: size-m(0);
      bottom: 0;
    }

    .img-title {
      top:auto;
      bottom:size-m(135);
      right: size-m(200);
    }

    .timg {
      top:auto;
      bottom:size-m(110);
      right: size-m(234);
    }

    .title {
      top: calc(50% - 30vw);
      left: size-m(21);
      color: #492923;
    }

    .subtitle {
      top: calc(50% - 6vw);
      left: size-m(21);
    }

    .ball1 {
      height: size-m(237);
      left: auto;
      right: size-m(-70);
      top:calc(50% - 70vw);
    }

    .ball2 {
      width: size-m(49);
      top: size-m(164);
      left: size-m(154);
    }

    .ball3 {
      width: auto;
      height: size-m(30);
      right: auto;
      left: size-m(315);
      top: auto;
      bottom: size-m(250);
    }

    .ball4 {
      width: size-m(99);
      top:calc(50% + 30vw);
      right: size-m(-20);
      left: auto;
    }

    .ball5 {
      height: size-m(19);
      right: size-m(154);
      top:calc(50% + 30vw);
    }

    .ball6 {
      height: size-m(109);
      right: size-m(572);
      top: size-m(62);
    }

    .ball7 {
      width: size-m(91);
      top:calc(50% + 40vw);
      right: size-m(315);
    }

    .ball8 {
      width: size-m(53);
      top:auto;
      right: size-m(262);
      bottom: size-m(10);
    }
  }

  .slide3 {
    background-color: #d7177c;

    .bubble {
      width: size-m(144);
      top:auto;
      bottom:size-m(130);
      right: size-m(55);
    }

    .img {
      width: size-m(375);
      right: size-m(0);
      bottom: 0;
    }

    .img-title {
      top:auto;
      bottom:size-m(185);
      right: size-m(62);
    }

    .timg {
      top:auto;
      bottom:size-m(160);
      right: size-m(108);
    }

    .title {
      top: calc(50% - 30vw);
      left: size-m(21);
      color: #fff;
      text-align: right;
    }

    .subtitle {
      top: calc(50% - 6vw);
      left: auto;
      right: size-m(23);
    }

    .ball1 {
      height: size-m(149);
      left: size-m(24);
      right: auto;
      top: size-m(67);
    }

    .ball2 {
      width: size-m(26);
      top: size-m(222);
      left: size-m(35);
    }

    .ball3 {
      width: auto;
      height: size-m(230);
      right: auto;
      left: size-m(-100);
      top: size-m(248);
      bottom: auto;
    }

    .ball4 {
      width: size-m(200);
      top: auto;
      bottom:size-m(-100);
      right: size-m(-100);
      left: auto;
    }

    .ball5 {
      height: size-m(51);
      left: 0;
      right: auto;
      top: size-m(573);
      z-index: 2;
    }

    .ball6 {
      width: size-m(47);
      top: size-m(518);
      right: size-m(133);
    }

    .ball7 {
      width: size-m(41);
      top: size-m(495);
      right: size-m(21);
    }

    .ball8 {
      width: size-m(214);
      top: size-m(483);
      right: size-m(-100);
    }
  }

  .slide4 {
    background-color: #a3ca0f;

    .bubble {
      width: size-m(125);
      top:auto;
      bottom:size-m(170);
      right: size-m(28);
      left: auto;
    }

    .img {
      width: size-m(231);
      right: auto;
      left: size-m(8);
      bottom: 0;
      top: auto;
    }

    .img-title {
      top:auto;
      bottom:size-m(215);
      right: size-m(40);
    }

    .timg {
      top:auto;
      bottom:size-m(190);
      right: size-m(73);
    }

    .title {
      top: calc(50% - 30vw);
      left: size-m(21);
      color: #fff;
      text-align: right;
    }

    .subtitle {
      top: calc(50% - 6vw);
      left: auto;
      right: size-m(23);
    }

    .ball1 {
      width: size-m(220);
      height: auto;
      left: size-m(-30);
      right: auto;
      top: size-m(-20);
    }

    .ball2 {
      width: size-m(24);
      top: size-m(257);
      left: size-m(143);
    }

    .ball3 {
      width: auto;
      height: size-m(29);
      right: auto;
      left: size-m(17);
      top: size-m(301);
      bottom: auto;
    }

    .ball4 {
      width: size-m(73);
      top: size-m(415);
      right: size-m(18);
      left: auto;
    }

    .ball5 {
      height: size-m(66);
      left: 0;
      right: auto;
      top: size-m(523);
    }

    .ball6 {
      width: size-m(73);
      height: auto;
      top: size-m(30);
      right: size-m(18);
    }

    .ball7 {
      width: size-m(175);
      top: size-m(508);
      right: size-m(121);
      z-index: 2;
    }
  }

  .slide5 {
    background-color: #eb5a1e;

    .bubble {
      width: size-m(148);
      top:auto;
      bottom:size-m(50);
      right: size-m(206);
    }

    .img {
      width: size-m(256);
      right: size-m(0);
      bottom: 0;
      top: auto;
    }

    .img-title {
      top:auto;
      bottom:size-m(95);
      right: size-m(250);
    }

    .timg {
      top:auto;
      bottom:size-m(70);
      right: size-m(272);
    }

    .title {
      top: calc(50% - 30vw);
      left: size-m(14);
      color: #fff;
      text-align: left;
    }

    .subtitle {
      top: calc(50% - 6vw);
      left: size-m(14);
      right: auto;
    }

    .ball1 {
      width: size-m(212);
      height: auto;
      left: auto;
      right: size-m(20);
      top: size-m(-10);
    }

    .ball2 {
      width: size-m(66);
      top: size-m(121);
      left: size-m(165);
    }

    .ball3 {
      width: auto;
      height: size-m(161);
      right: auto;
      left: size-m(-60);
      top: size-m(360);
      bottom: auto;
    }

    .ball4 {
      width: size-m(99);
      top: size-m(382);
      right: size-m(-20);
      left: auto;
    }

    .ball5 {
      height: size-m(31);
      left: size-m(165);
      right: auto;
      top: size-m(415);
    }

    .ball6 {
      width: size-m(47);
      top: auto;
      bottom: size-m(10);
      right: size-m(133);
    }

    .ball7 {
      width: size-m(41);
      top: size-m(495);
      right: size-m(21);
    }

    .ball8 {
      width: size-m(214);
      top: size-m(483);
      right: size-m(-100);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
// import Parallax from '@/components/Parallax.vue'

export default {
  name: 'section1',

  components: {
    // Parallax,
  },
  data() {
    return {
      isMobile,
      bubbleIndex: 0,
    }
  },
  computed: {},

  watch: {},

  methods: {
    decIndex() {
      if (this.bubbleIndex === 0) {
        this.bubbleIndex = 4
      } else {
        this.bubbleIndex = this.bubbleIndex - 1
      }
    },

    addIndex() {
      if (this.bubbleIndex === 4) {
        this.bubbleIndex = 0
      } else {
        this.bubbleIndex++
      }
    },
  },
  created() {
    setInterval(() => {
      if (this.bubbleIndex === 4) {
        this.bubbleIndex = 0
      } else {
        this.bubbleIndex++
      }
    }, 3000)
  },
}
</script>
