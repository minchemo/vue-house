<template>
  <div class="section2">
    <img src="./s2/bg.png" :alt="`${info.caseName}_雙和建案`" class="bg" v-if="isPC">
    <!-- <img src="./mo/w1.png" :alt="`${info.caseName}_bg`" class="bg" v-if="isMobile"> -->
    <div class="bg" v-if="isMobile"></div>
    <img src="./s2/img1.png" :alt="`${info.caseName}_雙和建案`" class="img1" v-if="isPC">
    <img src="./s2/title_t.png" :alt="`${info.caseName}_雙和建案`" class="title_t">
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" v-if="isPC">
        <!-- <transition-group name="swipe-fade" mode="out-in"> -->
        <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item flex-c wrap absolute`">
          <div :class="`complex-item flex-c wrap ${slideIndex === i ? 'turn' : ''}`" v-for="(item, index) in slide.items" :key="item.name + index">
            <img :src="item.icon" :alt="`${info.caseName}_icon`">
            <div class="complex-name" v-html="item.name"></div>
          </div>
        </div>
        <!-- </transition-group> -->
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
          <img src="./all/prev-btn.png" :alt="`${info.caseName}_雙和建案`" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" :alt="`${info.caseName}_雙和鋼骨`" class="next-btn" @click="addIndex">
        </div>
      </div>
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" v-if="isMobile">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.icon + i" :class="`swipe-item absolute ${slideIndex === i ? 'turn' : ''}`">
            <img :src="slide.icon" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
      <div class="prev-btn flex-c">
        <img src="./all/prev-btn.png" :alt="`${info.caseName}_雙和買房`" @click="decIndex">
      </div>
      <div class="next-btn flex-c">
        <img src="./all/next-btn.png" :alt="`${info.caseName}_雙和買房`" @click="addIndex">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
//  overflow: hidden;
}

.bg-img {
  width:  100%;
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

.bg {
  @include img_r_pc(1320, 0, 0);
  height: 100%;
}

.img1 {
  @include img_l_pc(520, 27, 187);
  width: auto;
  height:99%;
  top: 2%;
  z-index: 2;
}

.title_t {
  @include img_r_pc(530, 109, 393);
  z-index: 2;
  top:calc(50% - 22vw);
}

/* Swipe */
.swipe {
  width: size(1980 - 119 - 721);
  height: size(1080 - 400);
  top:calc(50% - 14vw);
  right: size(80);
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

@keyframes flip {
  to {
    transform: rotateY(360deg);
  }
}

.complex-item {
  width: size(240);
  margin: size(10) size(30);

  &.turn {
    img {
      border: 7px solid #0000;
      border-radius: 50%;
      box-shadow:0 0 0 3px #a67c27;
      animation: flip 1s 0s ease-in-out forwards;
    }
  }

  img {
    width: size(177);
    margin-bottom: 10px;
  }

  .complex-name {
    font-size: size(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: size(0.92);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }
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
  left: 0;
  bottom: 12px;
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
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: rgba(255, 255, 255, 0.38);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #fff;
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
        background: #fff;
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
    width: size(46);
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
  .section2 {
    width: 100vw;
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
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

  .bg {
    @include img_r_m(375, 0, 0);
    left: 0;transform: translateX(0%);
    background: #000;
    height: 100%;
  }
  .title_t {
    @include img_r_m(286, 52, 44);
    top:calc(50% + ((70 - 302) * 0.266666vw));
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(330);
    // min-height: sizem(750);
    top:calc(50% + ((190 - 302) * 0.266666vw));
    left: 0;
    right: 0;
    margin: 0 auto;
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
    z-index: 0;
    height: sizem(330);
    bottom: 0;
    left: 0;

    img {
      width: sizem(225);
      height: sizem(225);
      // height: sizem(330);
      margin: 3px auto;
      bottom: 0;
      left: 0; border: 7px solid #0000;
      border-radius: 50%;
      box-shadow:0 0 0 3px #a67c27;
      animation: flip 1s 0s ease-in-out forwards;
    }

    .name {
      right: 0;
      left: 0;
      margin: 0 auto;
      bottom: 2em;
      font-size: sizem(18);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: sizem(0.72);
      text-align: center;
      color: #ffffff;
      white-space: nowrap;
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
    width: 90%;
    left: 5%;
    height: sizem(30);
    padding: 0px;
    z-index: 1;
    position: absolute;
    top:calc(50% + 10vw);
    .prev-btn,
    .next-btn {
      width:auto;
      height:100%;
      cursor: pointer;
      // background-color: #ec6300;
      img {
        height: 100%;
      }
    }

    // .prev-btn {
    //   border-top-right-radius: 25px;
    //   border-bottom-right-radius: 25px;
    // }

    // .next-btn {
    //   border-top-left-radius: 25px;
    //   border-bottom-left-radius: 25px;
    // }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import info from '@/info'

export default {
  name: 'section2',
  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      slideList: isMobile ? [
            {
              icon: require('./s2/icon/1.jpg'),
              name: '36層浩瀚之境<br />獻給王與后的專屬天空',
            },
            {
              icon: require('./s2/icon/2.jpg'),
              name: '澳洲PTW集131年大成<br />重寫雙和摩天史',
            },
            {
              icon: require('./s2/icon/3.jpg'),
              name: '近760坪沙龍花園會館<br />獨家3層私人會所',
            },
            {
              icon: require('./s2/icon/4.jpg'),
              name: '101燈光設計<br />信義豪宅4大建築團隊精鑄',
            },
            {
              icon: require('./s2/icon/5.jpg'),
              name: '黃金級綠建築<br />每次呼吸都是博物館的空氣',
            },
            {
              icon: require('./s2/icon/6.jpg'),
              name: '七星級飯店式物業管理<br />生生世世養尊處優',
            },
            {
              icon: require('./s2/icon/7.jpg'),
              name: '雙和核心、1高2捷3快環繞<br />大台北速度贏家',
            },
            {
              icon: require('./s2/icon/8.jpg'),
              name: '中和線、環狀線<br />雙捷運3分鐘腳程增值南都心',
            },
            {
              icon: require('./s2/icon/9.jpg'),
              name: '雙和市中心<br />購物中心、COSTCO..眾星拱月',
            },
            {
              icon: require('./s2/icon/10.jpg'),
              name: '雙和唯一，15萬噸鋼骨用量<br />BRB+CFT柱雙制震',
            },
          ]
        : [
            {
              items: [
                {
                  icon: require('./s2/icon/1.jpg'),
                  name: '36層浩瀚之境<br />獻給王與后的專屬天空',
                },
                {
                  icon: require('./s2/icon/2.jpg'),
                  name: '澳洲PTW集131年大成<br />重寫雙和摩天史',
                },
                {
                  icon: require('./s2/icon/3.jpg'),
                  name: '近760坪沙龍花園會館<br />獨家3層私人會所',
                },
                {
                  icon: require('./s2/icon/4.jpg'),
                  name: '101燈光設計<br />信義豪宅4大建築團隊精鑄',
                },
                {
                  icon: require('./s2/icon/5.jpg'),
                  name: '黃金級綠建築<br />每次呼吸都是博物館的空氣',
                },
              ],
            },
            {
              items: [
                {
                  icon: require('./s2/icon/6.jpg'),
                  name: '七星級飯店式物業管理<br />生生世世養尊處優',
                },
                {
                  icon: require('./s2/icon/7.jpg'),
                  name: '雙和核心、1高2捷3快環繞<br />大台北速度贏家',
                },
                {
                  icon: require('./s2/icon/8.jpg'),
                  name: '中和線、環狀線<br />雙捷運3分鐘腳程增值南都心',
                },
                {
                  icon: require('./s2/icon/9.jpg'),
                  name: '雙和市中心<br />購物中心、COSTCO..眾星拱月',
                },
                {
                  icon: require('./s2/icon/10.jpg'),
                  name: '雙和唯一，1.5萬噸鋼骨用量<br />BRB+CFT柱雙制震',
                },
              ],
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
