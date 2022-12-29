<template>
  <article class="s2">
    <div class="main-img">
      <img data-aos="fade-down" class="content" src="@/section/s2/en.png" alt="" srcset="">
      <div class="caption">環景現場空拍合成修飾</div>
    </div>
    <img class="tree" v-if="$isMobile()" src="@/section/s2/tree.png" alt="" srcset="">
    <div class="bottom">
      <div class="left">
        <div class="t1" data-aos="fade-right">沁心自在人生</div>
        <div class="t2" data-aos="fade-right">
          回到心靈憩所<br />
          感受居家和自然間的完美距離<br />
          跟天空對話，跟山、河、海對話<br />
          無限棟距景觀，視野終於寬廣<br />
          都會難得靜謐處——
        </div>
        <div class="line"></div>
        <div class="t3" data-aos="fade-right">
          上一秒還在城囂中匆忙<br />
          下一刻已回歸丰景人生
        </div>
      </div>
      <div class="right">
        <div v-if="!$isMobile()" data-aos="fade-up" class="imgs">
          <div class="img-box">
            <img src="@/section/s2/a.jpg" alt="" srcset="">
            <div class="caption">八里河岸合成修飾</div>
          </div>
          <div class="img-box">
            <img src="@/section/s2/b.jpg" alt="" srcset="">
            <div class="caption">金色水岸自行車道</div>
          </div>
        </div>
        <div v-else>
          <Splide :options="{ arrows: false, gap: 50, autoplay: true, interval: 4000, type: 'loop' }" ref="splide">
            <SplideSlide class="slide">
              <img src="@/section/s2/a.jpg" alt="" srcset="">
              <div class="caption">八里河岸合成修飾</div>
            </SplideSlide>
            <SplideSlide class="slide">
              <img src="@/section/s2/b.jpg" alt="" srcset="">
              <div class="caption">金色水岸自行車道</div>
            </SplideSlide>
          </Splide>
        </div>
        <img data-aos="fade-up" class="en" src="@/section/s2/en2.png" alt="" srcset="">
        <img data-aos="fade-up" v-if="$isMobile()" @click="splide.splide.go('>')" src="@/section/s2/next.png" class="next"
          alt="" srcset="">
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
    @apply relative;
  height: size(1600);
  background: #013755;
    padding-top: size(93);
  .main-img {
    @apply mx-auto relative bg-cover;
    width: size(1707);
    height: size(1000);
    background-image: url('@/section/s2/1.jpg');
    .content {
      @apply mx-auto block relative;
      top: size(263.8);
      width: size(883.37);
    }
    &::after {
      @apply absolute;
      content: '';
      width: size(13);
      height: size(277);
      background: #C9A063;
      right: -#{size(6.5)};
      top: size(55);
      z-index: 1;
    }
    .caption {
      @apply absolute;
      right: size(10);
      bottom: size(5);
      font-weight: 400;
      font-size: size(16);
      color: #FFFFFF;
    }
  }
  .bottom {
    margin-top: size(55);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 size(104);
    .left {
      .t1 {
font-weight: 700;
font-size: size(55);
line-height: 122.7%;
letter-spacing: 0.025em;
color: #FFFFFF;
margin-bottom: size(20);

      }
      .t2 {
font-weight: 300;
font-size: size(18);
line-height: 202.2%;
letter-spacing: 0.165em;
color: #FFFFFF;

      }
      .line {
        width: size(137);
        height: size(3);
        background-color: #C9A063;
        margin: size(26) 0;
      }
      .t3 {
        font-weight: 300;
font-size: size(20);
line-height: 184.7%;
letter-spacing: 0.52em;
color: #FFFFFF;
      }
    }
    .right {
      width: size(905);
      .imgs {
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        .img-box {
          @apply relative;
          img {

            width: size(440);
            margin: unset;
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
      }
      .en {
        width: size(750);
        margin-top: size(20);
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

.s2 {
    height: sizem(738);
    padding-top: 0;
  .main-img {
    @apply mx-auto relative bg-cover;
    width: 100%;
    height: sizem(219.68);
    .content {
      top: size-m(47);
      width: sizem(310);
    }
    &::after {
      width: sizem(170);
      height: sizem(5);
      right: unset;
      left: 0;
      top: sizem(218);
    }
    .caption {
      right: sizem(10);
      bottom: sizem(5);
      font-size: sizem(12);
    }
  }
  .tree {
    @apply absolute;
    top: sizem(311);
    right: -#{sizem(28)};
    width: sizem(198.55);
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
  
  .bottom {
    margin-top: sizem(20);
    align-items: flex-start;
    flex-direction: column;
    padding: 0 sizem(30);
    .left {
      .t1 {
        font-size: sizem(25);
        margin-bottom: sizem(10);
      }
      .t2 {
        font-weight: 400;
        font-size: sizem(13);
        line-height: 189.2%;
        letter-spacing: 0.165em;
      }
      .line {
        width: sizem(69);
        height: sizem(1);
        background-color: #C9A063;
        margin: sizem(15) 0;
      }
      .t3 {
        font-size: sizem(13);
        letter-spacing: 0.165em;
      }
    }
    .right {
      @apply relative;
      width: 100%;
      padding-top: sizem(20);
      div {
        width: sizem(264.57);
        display: flex;
        justify-content: space-between;

        .slide{
          width: sizem(264.57);
          img {
            width: 100%;
          }
          .caption {
            @apply absolute;
            left: sizem(10);
            bottom: sizem(5);
            font-weight: 400;
            font-size: sizem(12);
            color: #FFFFFF;
          }
        }
        
        img {
          width: auto;
          margin: unset;
        }
      }
      .en {
        width: 100%;
        margin-top: sizem(20);
      }
      .next {
        position: absolute;
        width: sizem(8);
        right: sizem(0);
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
}
</style>
<script setup>
import { ref } from 'vue';


const splide = ref(null);
</script>
