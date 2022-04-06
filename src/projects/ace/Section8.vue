<template>
  <div class="section8">
    <img loading="lazy" src="./s8/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img" v-if="isPC">
    <!-- <img src="./mo/b.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isMobile"> -->
    <div class="bg" v-if="isMobile"></div>
    <div class="txt">
    <div class="title" data-aos="fade-down" data-aos-delay="100">
      公設王牌
    </div>
    <h1 class="subtitle" data-aos="fade-down" data-aos-delay="200">
      頂尖世代層峰會所
    </h1>
    <ul class="desc">
      <li data-aos="fade-down" data-aos-delay="300">罕見天際私人會所，近760坪花園會館</li>
      <li data-aos="fade-down" data-aos-delay="400">25項頂級休閒公設．3層名流社交場域</li>
      <li data-aos="fade-down" data-aos-delay="500">雲頂層峰視野．凌空百米俯覽城市</li>
      <li data-aos="fade-down" data-aos-delay="600">飯店式管理．盡享大牌隱私尊榮</li>
    </ul>
    </div>
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img loading="lazy" :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
          <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
      </div>
    <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width:100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width:100%;
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

.txt{
  @include img_l_pc(501, 334, 118);
  top: calc(50% - 10.729vw);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: justify;
  line-height: 1.4;
}
.title {
  font-size:1.5em;
  color: #285065;
  white-space: nowrap;
}

.subtitle {
  font-size:1.6em;
  font-weight: 900;
  color: #685335;
  margin: 0.1em 0 0.33em 0;
}
.desc {
  font-size:0.9em;
  line-height: 1.5;
  color: #284e62;
  padding-bottom:1em;
  li{position: relative;
  padding:0.32em 0 0.32em 1em;}
  li::before{
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 9' fill='%23c7a578'%3E%3Crect x='0' y='0' width='5' height='5' transform='translate(4 0) rotate(45)'/%3E%3C/svg%3E");
    width: 0.7em;height: 0.7em;
    display: inline-block;
    margin: 0 0.3em 0 -1em;position: relative
  }
}

/* Swipe */
.swipe {
  width: size(1080);
  height: size(615);
  top: calc(50% + ((221 - 540) * 0.0520833333333333vw));
  right: size(118);
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
  padding: 0 0;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(50);
    cursor: pointer;
    height: 100%;
    object-fit:contain;
    background: #0000;
    transition: all 0.3s;
    padding: size(10);
    &:hover{background: #0004;}
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
  .section8 {
    width: 100vw;
    height:auto;
    min-height: sizem(0);
    max-height: sizem(2000);
  }
  .bg {
    @include img_r_m(375, 0, 0);
    left: 50%;transform: translateX(-50%);
    background: #fff;
    height: 100%;
  }
  
.txt{
  position: relative;
  width:  sizem(310);
  font-size: sizem(15);
  top: auto;
  left: auto;
  margin: auto;
}
/* 
  .title {
    @include img_l_m(104, 60, 40);
    font-size: sizem(24);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.33;
    letter-spacing: normal;
    text-align: left;
    color: #285065;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(208, 107, 40);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #685335;
    white-space: nowrap;
  }

  .desc {
    @include div_l_m(310, 27, 155, 40);
    font-size: sizem(16);
    // background-color: #685335;
  } */
  .desc {
    font-size: 1.06em;
    padding-bottom: 1.8em;
  }

  /* Swipe */
  .swipe {
    position: relative;
  width: sizem(345);
  height: sizem(196);
    // min-height: sizem(750);
    top: sizem(0);
    left: calc(50% - 46vw);
    object-fit: cover;
    margin-bottom: sizem(30);
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
    height:100%;
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height:100%;
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
    bottom: sizem(91);
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
    left: 0%;
    height: 100%;
    padding: 0px;
    z-index: 1;
    position: absolute;
    top:50%;
    transform: translateY(-50%);

    .prev-btn,
    .next-btn {
    width: sizem(40);
    padding: sizem(10);
    /*  width:auto;
      height:100%;
      cursor: pointer;
      // background-color: #ec6300;
      img {
        height: 100%;
      }
      */
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
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  mixins: [slider],

  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s8/slider_1.jpg'),
        },
        {
          img: require('./s8/slider_2.jpg'),
        },
        {
          img: require('./s8/slider_3.jpg'),
        },
        {
          img: require('./s8/slider_4.jpg'),
        },
        {
          img: require('./s8/slider_5.jpg'),
        },
        {
          img: require('./s8/slider_6.jpg'),
        },
        {
          img: require('./s8/slider_7.jpg'),
        },
        {
          img: require('./s8/slider_8.jpg'),
        },
        {
          img: require('./s8/slider_9.jpg'),
        },
        {
          img: require('./s8/slider_10.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex(val) {
      if (val === 8) {
        this.slideIndex = 0
      }
    },
  }
}
</script>
