<template>
  <div class="section9">
    <!-- <img src="./s1/b.png" alt="" class="b1">
    <img src="./s1/b.png" alt="" class="b2">
    <img src="./s1/b.png" alt="" class="b3"> -->
    <!-- <img src="./s1/b.png" alt="" class="b4"> -->
    <!-- <div class="img1"><img src="./s2/img.png" alt=""></div> -->
      <div class="img" data-aos="fade" data-aos-delay="0">
      <!-- <div class="an"><img src="./s1/img.png" alt="水漾"></div> -->
    </div>
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img loading="lazy" :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
    <!-- <img src="./s1/logobg.png" alt="睿暘水漾LOGO" class="logobg"> -->
    <h3 class="title1">
      高人一等的好
    </h3>
    <h3 class="title2">
      住過就知道
    </h3>
    <hr>
    <h3 class="desc">
      {{slideList[slideIndex].desc}}
    </h3>
    <h3 class="subtitle flex-c">
      {{slideList[slideIndex].subtitle}}
    </h3>

  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: size(1920);
  height: size(791);
  min-height: size(791);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title1 {
  @include img_l_pc(320, 134, 330);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ec6300;
  white-space: nowrap;
}

.title2 {
  @include img_l_pc(286, 202, 518);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ec6300;
  white-space: nowrap;
}

hr {
  @include img_l_pc(504, 288, 327);
  border: solid  size(1) #f6ab00;
}

.desc {
  @include img_l_pc(475, 322, 330);
  font-size: size(28.9);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.59);
  text-align: left;
  color: #231815;
}

.txt {
  @include img_r_pc(187, 980, 25);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(26);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.61);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(239, 81, 10, 93);
  border: 1px solid #6e3a1d;
  border-radius: 40px / 40px;
  font-size: size(45);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.6);
  text-align: left;
  color: #6e3a1d;
  white-space: nowrap;
}

.logobg {
  // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
  @include div_l_pc(704, 758, 0, 245);
  // background-image: url('./s1/logobg.png');
  background-size: cover;
}

.b1 {
  @include img_l_pc(198, 180, 130);
  animation: an2 3s infinite alternate;
    transform: translateY(-30%);
  z-index: 2;
}

.b2 {
  @include img_l_pc(315, 570, 650);
  animation: an 2.5s infinite alternate;
    transform: translateY(-15%);
  z-index: 2;
}

.b3 {
  @include img_r_pc(300, 650, -170);
  animation: an 2s infinite alternate;
    transform: translateY(15%);
  z-index: 2;
}

.b4 {
  @include img_r_pc(671, 0, -300);
  animation: an 4.5s infinite alternate;
    transform: translateY(30%);
}
.img1 {
  @include img_l_pc(550, 100, 150);
  animation: an 2.5s infinite alternate;
    transform: translateY(10%);
  img{width: 100%;transform: rotate(25deg);}
}
// .img {
//   @include img_c_pc(1700, calc(50% - 5vw), size(1540));
//   img{width: 100%;
//   transform-origin: 0 0;
//   transform: rotate(45deg);
//  }
//   .an{width: 100%;
//   animation: an 2.5s linear infinite alternate;
//   transform-origin: 0 0;
//   transform:translate(-10%,-20%);
//  }
// }

@keyframes an {
  to {
    transform: translate(0);
  }
}

@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
  }
}

/* Swipe */
.swipe {
  width: size(960);
  height: size(600);
  top: size(0);
  right: size(64);
  object-fit: cover;
}

// begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

// begin
// .swipe-left-leave-to {
//   margin-left: -100vw;
//   z-index: 0;
// }
// // end
// .swipe-left-enter {
//   opacity: 0.5;
//   margin-left: 0;
//   z-index: 1;
// }

// .swipe-left-enter-active {
//   transition: all 0.5s ease;
// }

// .swipe-left-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    right: 1.5em;
    bottom: 1em;
    font-size: 0.78125vw;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #fff;
    text-shadow: 0 0.1em 0.3em #000;
  }

  // &:nth-child(1) {
  //   z-index: 1;
  //   // opacity: 1;
  // }

  // &.base {
  //   z-index: 1;
  //   opacity: 1;
  // }
  // &.active {
  //   z-index: 2;
  //   // opacity: 1;
  // }
}

.pagination {
  width: auto;
  right: 0;
  top: -35px;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 10px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    box-shadow: 0 0 0 1px #27a8a8;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #27a8a8;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #27a8a8;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section9 {
    width: 100vw;
    height: calc(760);
    min-height: sizem(760);
    max-height: sizem(812);
  }
  .title1 {
    @include img_l_m(166, 462, 63);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ec6300;
    white-space: nowrap;
  }

  .title2 {
    @include img_l_m(138, 498, 173);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ec6300;
    white-space: nowrap;
  }

  hr {
    @include img_l_m(248, 546, 63);
    border: solid 2px #f6ab00;
  }

  .desc {
    @include img_l_m(248, 560, 63);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: sizem(0.59);
    text-align: left;
    color: #231815;
  }

  .subtitle {
    @include div_l_m(184, 63, 18, 158);
    border: 1px solid #6e3a1d;
    border-radius: 40px / 40px;
    font-size: sizem(34);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.6);
    text-align: left;
    color: #6e3a1d;
    white-space: nowrap;
  }

  .logobg {
    // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
    @include div_r_m(347, 386, 404, 0);
    background-image: none;
    background-size: cover;
  }

  .b1 {
    @include img_l_m(80, 60, -20);
    animation: an2 1.5s infinite alternate;
    z-index: 5;
  }

  .b2 {
    @include img_l_m(116, 700, 90);
    animation: an 2.5s infinite alternate;
  }

  .b3 {
    @include img_l_m(134, 400, -50);
    animation: an 2.5s infinite alternate;
    z-index: auto;
  }

  .b4 {
    @include img_r_m(62, 1117, 63);
    animation: an 4.5s infinite alternate;
  }

  .img1 {
    display: none;
  }

  .img2 {
    @include img_r_m(548, 1250, -280);
    animation: an 2.5s infinite alternate;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(320);
    // min-height: sizem(750);
    top: sizem(104);
    left: sizem(0);
    object-fit: cover;
  z-index:3;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    z-index: 0;
    height: sizem(320);
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height: sizem(320);
      bottom: 0;
      left: 0;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #bd2b27;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #bd2b27;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #bd2b27;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 1;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section9',

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s9/1.jpg'),
          title: '',
          desc:
            '挑高的室內空間讓家盡情舒展，多出來的空間可以收納行李箱、戰利品、換季衣物，裝修變化多更多，盡情打造出獨具風格的家。',
          subtitle: '3米6空間',
          name: '3D參考示意圖',
        },
        {
          img: require('./s9/2.jpg'),
          title: '',
          desc:
            '挑高的室內空間讓家盡情舒展，多出來的空間可以收納行李箱、戰利品、換季衣物，裝修變化多更多，盡情打造出獨具風格的家。',
          subtitle: '3米6空間',
          name: '3D參考示意圖',
        },
        {
          img: require('./s9/3.jpg'),
          title: '',
          desc:
            '挑高的室內空間讓家盡情舒展，多出來的空間可以收納行李箱、戰利品、換季衣物，裝修變化多更多，盡情打造出獨具風格的家。',
          subtitle: '3米6空間',
          name: '3D參考示意圖',
        },
        {
          img: require('./s9/4.jpg'),
          title: '',
          desc:
            '挑高的室內空間讓家盡情舒展，多出來的空間可以收納行李箱、戰利品、換季衣物，裝修變化多更多，盡情打造出獨具風格的家。',
          subtitle: '3米6空間',
          name: '3D參考示意圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
