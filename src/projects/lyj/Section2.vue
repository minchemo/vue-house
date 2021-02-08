<template>
  <div class="section2">
    <div class="bg"></div>
        <div :class="`slide`">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="name">{{slideList[slideIndex].title}}</div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <div  @click="decIndex" class="arrow-l"></div>
            <div  @click="addIndex" class="arrow-r"></div>
            <!-- <img @click="decIndex" src="./arrow-left.png" alt />
            <img @click="addIndex" src="./arrow-right.png" alt /> -->
          </div>
        </div>
    <div class="title">
      <div class="title1" data-aos="fade-down" data-aos-delay="100">低基期<span>✕</span>高獲利</div>
 <!--     <div class="title2" data-aos="fade-down" data-aos-delay="200">
        首購價圓豪宅夢
      </div>
      <div class="title3" data-aos="fade-down" data-aos-delay="400">
        五項唯一質感建商　全台矚目　潛銷個案
      </div>  -->
      <div class="title4" data-aos="fade-down" data-aos-delay="600">
        1字頭投資台中港新市鎮<br />
        超前部署10倍高投報
      </div>
    </div>
    <div class="badge" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-300" v-scroll-to="{ element: `#contact` }">
      <span class="badge-text">首創台北聯銷</span
      ><span class="badge-text-2">限戶賞屋</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/function.scss";

/* 螢幕尺寸標準 */
.section2 {
  width: 100%;
  height: 90vh;
  min-height: size(800);
  max-height: size(1080);
    background: #EBE3D4;

  position: relative;

  .title {
    font-family: "Noto Sans TC", serif;
    position: absolute;
    right:0;
    width: 40%;
    height: 100%;
    z-index: 1;
    color: #000a;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 0 3em 0;
    align-items:flex-start;
    padding: 0 0 0 5em;
      font-size: size(20);
      line-height: 1.6;
      letter-spacing:0.15em;


    .title1 {
      font-size:2.75em;
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size:0.55em;
        margin: 0 0.5em;
      }
    }
    .title2 {
      font-size:1.3em;
      margin-top:0.8em;
    }
    .title3 {
      font-size:1.3em;
      margin-top: 1.15em;
      margin-bottom: 1.1em;
      padding:0.7em 0.3em;
      border-top: 1px solid;
      border-bottom: 1px solid ;
    }
    .title4 {
      font-size:1.3em;
      margin-top: 0.5em;
      padding:0.5em 0.3em;
      border-top: 1px solid #0004;
      text-align: left;
      width: 26em;
      font-weight: 300;
      line-height: 1.7;
    }
  }

  .badge {
    position: absolute;
    right: 1em;
    bottom:2em;
    z-index: 10;

    .badge-text {
      font-size: size(22);
      margin-right: size(18);
      letter-spacing: size(2);
      color: #606060;
    }

    .badge-text-2 {
      font-size: size(22);
      display: inline-block;
      padding: size(20) size(32);
      background: #004881;
      color: #fff;
      cursor: pointer;
      &:hover{background: #003057;}
    }
  }

  .slide {
    position: absolute;
    top: 0;left: 0;
  width:60%;
  height: 100%;
  /*  .name {
      position: absolute;
      right: 0;
      margin: 0 auto;
      bottom: 0;
      font-size: 17px;
      color: #fff;
      letter-spacing: 2px;
      background: rgba(0, 0, 0, 0.6);
      padding: 5px 15px;
    }*/
    .slide-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    .btn-group{
      top: 0;
      bottom: 0;
      height: 100%;
    }
.arrow-l,
.arrow-r{
  position: absolute;
  height: 100%;
  width: 10%;
  font-size: size(40);
        transform: scaleX(-1);
      z-index:2;
      &::before{
        position: absolute;
        content: "";
        top:calc(50% - 0.5em);
        left:calc(50% - 0.7em);
        width:1em;
        height:1em;
        //background: #ccc9;
        transform: rotate(45deg);
        border: 0.1em solid #fff;
        border-width: 0.1em 0.1em 0 0;
        transform-origin: center center;
  }
}
.arrow-r{right: 0;
        transform: scaleX(1);}
}

}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
  height: size-m(575);
  min-height: size-m(0);
  max-height: size-m(1000);
    .title {
      width: 90%;
      right: 50%;
      margin-right: -45%;
      justify-content: flex-start;
    padding: 3em 0 0 1em;
        font-size: size-m(15); transform: scaleX(0.95);
      letter-spacing:0.2em;

      .title1 {
      font-size:2.2em;
      }
      .title4 {
      font-size:1em;
    color: #000c;
      margin-top: 0.6em;
      padding:0.8em 0.3em;
      letter-spacing:0.3em;
      line-height: 1.8;
      }
    }

    .badge {
      bottom: unset;
      top: size-m(240);
      right: size-m(20);

      .badge-text {
        font-size: size-m(16);
        margin-right: size-m(18);
        letter-spacing: size-m(2);
      }

      .badge-text-2 {
        font-size: size-m(16);
        padding: size-m(14) size-m(22);
      }
    }

  .slide {
    top:size-m(300);
  width:100%;
  height:size-m(275);
  
  }
  }
  
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import slider from '@/mixins/slider.js'
export default {
  name: "default",
  mixins: [slider],

  data() {
    return {
      isMobile,
      isDialogShow: false,
      imgSrc: '',
      slideList: [
        {
          src: require('./s2/1.jpg'),
          title: '',
        },
        {
          src: require('./s2/2.jpg'),
          title: '',
        },
        {
          src: require('./s2/3.jpg'),
          title: '',
        },
      ],
    }
  },

  methods: {
    showDialog(slide) {
      this.isDialogShow = true
      this.imgSrc = slide.src
    },
  },
};
</script>
