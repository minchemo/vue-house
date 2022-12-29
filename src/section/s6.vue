<template>
  <article class="s6">
    <img v-if="$isMobile()" class="top-tree" src="@/section/s6/lil_tree.png" alt="" srcset="">
    <img v-else class="top-tree" src="@/section/s6/tree.png" alt="" srcset="">
    <div class="header">
      <div class="t1" data-aos="fade-down">戶戶挑高 陽光美寓</div>
      <img class="en" data-aos="fade-down" data-aos-delay="200" src="@/section/s6/en.png" alt="" srcset="">
      <div class="selection-bar" v-bind:class="{ pos0: selected == '25', pos1: selected == '10' }"></div>
      <div class="selection" data-aos="fade-down" data-aos-delay="400" v-bind:class="{ selected: selected == '25' }"
        @click="change('25')">
        約<span>25</span>坪<b class="bold">溫馨居</b></div>
      <div class="selection" data-aos="fade-down" data-aos-delay="600" v-bind:class="{ selected: selected == '10' }"
        @click="change('10')">
        約<span>10</span>坪<b class="bold">時尚居</b></div>
    </div>
    <div class="main">
      <div class="swiper">
        <Splide :key="selected" @splide:move="onMove"
          :options="{ type: 'loop', arrows: false, gap: 50, autoplay: true, interval: 4000, }" ref="splide">
          <SplideSlide data-aos="fade" class="slide" v-for="img, i in imgs[selected].img1">
            <img :src="img">
            <div class="caption">{{ captions[selected][i] }}</div>
          </SplideSlide>
        </Splide>
        <div class="arrows">
          <img @click="splide.splide.go('<')" src="@/section/s6/prev.png" alt="" srcset="">
          <img @click="splide.splide.go('>')" src="@/section/s6/next.png" alt="" srcset="">
        </div>
      </div>
      <div class="txt" >
        <div class="t1" :key="selected" data-aos="fade-left">{{ imgs[selected].t1 }}</div>
        <div class="t2" :key="selected" data-aos="fade-left">{{ imgs[selected].t2 }}</div>
        <img v-if="!$isMobile()" class="tree" src="@/section/s6/lil_tree.png" alt="" srcset="">
        <div class="plan" v-bind:class="{ a: selected == '25', b: selected == '10' }">
          <div class="marker pos1" v-bind:class="{ selected: currentIndex + 1 == 1 }" @click="splide.splide.go(0)">
          </div>
          <div class="marker pos2" v-bind:class="{ selected: currentIndex + 1 == 2 }" @click="splide.splide.go(1)">
          </div>
          <div class="marker pos3" v-bind:class="{ selected: currentIndex + 1 == 3 }" @click="splide.splide.go(2)">
          </div>
          <div class="marker pos4" v-bind:class="{ selected: currentIndex + 1 == 4 }" @click="splide.splide.go(3)">
          </div>
        </div>
        <!-- <img class="plan" :src="imgs[selected].img2[currentIndex]" alt="" srcset=""> -->
      </div>
    </div>
  </article>
</template>
  
<style lang="scss">
  @import '@/assets/style/function.scss';
  
  .s6 {
    @apply relative;
    height: size(1080);
    background-color: #E9E6E2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: size(50);
    .top-tree{
      @apply absolute;
        width: size(360);
        top: -#{size(280)};
        left: -#{size(1)};
        animation: wave 3s alternate-reverse infinite ease-in-out;
        transform-origin: bottom center;
        @keyframes wave {
          from {
            transform: skewX(-1deg);
          }
          to {
            transform: skewX(1deg);
          }
        }
    }
    .header {
      @apply relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: size(2) solid #013755;
      padding-bottom: size(5);
      .t1 {
        font-weight: 700;
        font-size: size(55);
        letter-spacing: -0.005em;
        color: #013755;
        margin-right: size(50);
      }
      .en {
        width: size(645);
        margin: unset;
        margin-right: size(98.86);
      }
      .selection {
        font-weight: 500;
        font-size: size(24.35);
        line-height: 100%;
        letter-spacing: 0.03em;
        color: #C1C1C1;
        margin-right: size(90);
        cursor: pointer;
        span{
          font-weight: 700;
          font-size: size(48);
        }
        &:last-child {
          margin-right: 0;
        }
        &.selected {
          color: #C9A063;
        }
        &:hover {
          color: #C9A063;
        }
      }
      .selection-bar {
        @apply absolute;
        width: size(183);
        height: size(9);
        background-color: #013755;
        bottom: -#{size(5)};
        right: 0;
        transition: all .5s;
        &.pos0{
          transform: translateX(-#{size(272)});
        }
        &.pos1{
          transform: translateX(0);
        }
      }
    }
    .main {
      gap: size(98);
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      .swiper {
        @apply relative;
        width: size(1150);
        height: size(784);
        background-color: grey;
        .slide {
          img {
            width: size(1150);
            height: size(784);
          }
        .caption {
          
      @apply absolute;
      left: size(10);
      bottom: size(5);
      font-weight: 400;
      font-size: size(16);
      color: #FFFFFF;
        }
        }
        .arrows {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 size(16);
          
          img {
            width: size(12);
            height: size(30);
            margin: unset;
            cursor: pointer;
          }
        }
      }
      .txt{
        @apply relative;
        padding-bottom: size(480);
        .tree {
          @apply absolute;
          width: size(241);
          left: size(272);
          top: -#{size(142)};
          transform-origin: 50% 100%;
        }
        .tree {
            animation: wave 2s alternate-reverse infinite ease-in-out;
            @keyframes wave {
              from {
                transform: skewX(-3deg);
              }
              to {
                transform: skewX(3deg);
              }
            }
          }
        .t1 {
          font-weight: 700;
          font-size: size(36);
          line-height: 122.7%;
          letter-spacing: 0.01em;
          color: #013755;
          margin-bottom: size(20);
        }
        .t2 {
          font-weight: 400;
          font-size: size(18);
          line-height: 180.7%;
          text-align: justify;
          letter-spacing: 0.165em;
          color: #013755;
          width: size(445);
        }
        .plan {
          @apply absolute;
          width: size(457);
          height: size(452);
          right: 0;
          bottom: 0;
          background-size: contain;
          

          &.a {
            background-image: url('@/section/s6/a_plan.png');
          }

          &.b {
            background-image: url('@/section/s6/b_plan.png');
            background-repeat: no-repeat;
            background-position-x: 50%;
          }

          &.a {
            .marker {
              &.pos1 {
              right: 30%;
              bottom: 28%;
              }
              &.pos2 {
                right: 57%;
                bottom: 50%;
              }
              &.pos3 {
                right: 77%;
                bottom: 62%;
              }
              &.pos4 {
                right: 27%;
                bottom: 51%;
              }
            }
          }

          &.b {
            .marker {
              &.pos1 {
                right: 30%;
                bottom: 20%;
              }
              &.pos2 {
                right: 25%;
                bottom: 60%;
              }
              &.pos3 {
                right: 48%;
                bottom: 78%;
              }
              &.pos4 {
                right: 52%;
                bottom: 39%;
              }
            }
          }

          .marker {
            @apply absolute;
            width: size(35);
            height: size(51);
            background-image: url('@/section/s6/marker.png');
            background-size: contain;
            cursor: pointer;
            transition: all .25s;
            &:hover {
              background-image: url('@/section/s6/marker_selected.png');
            }
            &.selected {
              background-image: url('@/section/s6/marker_selected.png');
            }
          }
        }
      }
    }
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {

  .s6 {
    height: sizem(759);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: size(0);
    padding-top: sizem(34) !important;
    padding: 0 sizem(30); 
    .top-tree{
      @apply absolute;
        width: sizem(160);
        top: -#{sizem(55)};
        left: sizem(241);
    }
    .header {
      flex-wrap: wrap;
      justify-content: space-between;
      border-bottom: sizem(1) solid #013755;
      padding-bottom: sizem(10);
      .t1 {
        font-size: sizem(25);
        letter-spacing: 0.025em;
        margin-right: 0;
        margin-bottom: sizem(11);
        flex-basis: 100%;
      }
      .en {
        flex-basis: 100%;
        width: 100%;
        margin: unset;
        margin-right: 0;
        margin-bottom: sizem(18);
      }
      .selection {
        font-size: sizem(13);
        margin-right: size(0);
        padding: 0 sizem(25);
        span{
          font-size: sizem(20);
        }
        &.selected {
          color: #C9A063;
        }
        &:hover {
          color: #C9A063;
        }
        .bold{
          margin-left: sizem(5);
          font-size: sizem(16)
        }
      }
      .selection-bar {
        @apply absolute;
        width: sizem(126.14);
        height: sizem(3);
        bottom: -#{sizem(1.5)};
        &.pos0{
          transform: translateX(-#{sizem(173)});
        }
        &.pos1{
          transform: translateX(-#{sizem(15)});
        }
      }
    }
    .main {
      width: 100%;
      gap: 0;
      flex-direction: column-reverse;
      align-items: flex-start;
      padding-top: sizem(30);
      .swiper {
        @apply absolute;
        bottom: 0;
        left: 0;
        width: sizem(375);
        height: sizem(255.65);
        background-color: grey;
        .slide {
          img {
            width: 100%;
            height: 100%;
          }
      .caption {
        left: sizem(10);
        bottom: sizem(5);
        font-size: sizem(12);
      }
        }
        .arrows {
          padding: 0 sizem(16);
          
          img {
            width: sizem(8);
            height: sizem(20);
          }
        }
      }
      .txt{
        @apply relative;
        padding-bottom: 0;
        .t1 {
          font-size: sizem(20);
          margin-bottom: sizem(7);
        }
        .t2 {
          font-size: sizem(13);
          width: 100%;
        }

        .plan {
          @apply relative;
          width: sizem(224);
          height: sizem(221);
          margin: 0 auto;
        
          &.a {
            .marker {
              &.pos1 {
              right: 30%;
              bottom: 28%;
              }
              &.pos2 {
                right: 57%;
                bottom: 50%;
              }
              &.pos3 {
                right: 77%;
                bottom: 62%;
              }
              &.pos4 {
                right: 27%;
                bottom: 51%;
              }
            }
          }

          &.b {
            .marker {
              &.pos1 {
                right: 30%;
                bottom: 20%;
              }
              &.pos2 {
                right: 23%;
                bottom: 60%;
              }
              &.pos3 {
                right: 50%;
                bottom: 78%;
              }
              &.pos4 {
                right: 52%;
                bottom: 39%;
              }
            }
          }

          .marker {
            width: sizem(16.78);
            height: sizem(24.45);
          }
        }
      }
    }
  }
  }
  </style>
<script setup>
import AOS from 'aos';
import { getCurrentInstance, ref, nextTick } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const selected = ref('25');
const splide = ref(null);

const change = async (target) => {
  selected.value = target;
  splide.value.splide.go(0)
  currentIndex.value = 0;
  splide.value.splide.refresh();
  await nextTick()
  AOS.refreshHard();
};

const onMove = (i, i1, i2) => {
  currentIndex.value = i1;
}

//let suffix = globals.$isMobile() ? 'm' : '';
const currentIndex = ref(0);
const imgs = {
  '10': {
    t1: '輕奢貴族 大套房',
    t2: '超實在方正格局規劃，室內無虛坪，乾溼分離浴室，挑高設計，靈活規劃收納空間，打造適合頂客、菁英族群，居住兼辦公的景觀套房',
    img1: [new URL(`./s6/b1.jpg`, import.meta.url).href, new URL(`./s6/b2.jpg`, import.meta.url).href, new URL(`./s6/b3.jpg`, import.meta.url).href, new URL(`./s6/b4.jpg`, import.meta.url).href,],
  },
  '25': {
    t1: '完美家庭 正兩房',
    t2: '豪宅格局規劃，開放式客餐廳規劃，雙衛浴從容超美學，戶戶邊間、挑高3米6，將山、河、海風景帶入生活，構築家的好窗景',
    img1: [new URL(`./s6/a1.jpg`, import.meta.url).href, new URL(`./s6/a2.jpg`, import.meta.url).href, new URL(`./s6/a3.jpg`, import.meta.url).href, new URL(`./s6/a4.jpg`, import.meta.url).href,],
  },
}

const captions = {
  '10': ["3D樣品屋示意圖", "3D樣品屋示意圖", "3D樣品屋示意圖", "3D樣品屋示意圖"],
  '25': ["3D樣品屋示意圖", "3D樣品屋示意圖", "3D樣品屋示意圖", "3D樣品屋示意圖"]
}
</script>
  