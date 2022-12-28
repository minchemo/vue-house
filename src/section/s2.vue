<template>
  <article class="s2">
    <div class="main-img">
      <img data-aos="fade-down" class="content" src="./s2/GRAND RIVERSIDE.png" alt="" srcset="">
    </div>
    <img class="tree" v-if="$isMobile()" src="./s2/tree.png" alt="" srcset="">
    <div class="bottom">
      <div class="left" >
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
        <div v-if="!$isMobile()" data-aos="fade-up">
          <img src="./s2/a.jpg" alt="" srcset="">
          <img src="./s2/b.jpg" alt="" srcset="">
        </div>
        <div v-else>
          <Splide :options="{ arrows: false, gap: 50, autoplay: true, interval: 4000, type: 'loop' }"
            ref="splide">
            <SplideSlide class="slide">
              <img src="./s2/a_m.jpg" alt="" srcset="">
            </SplideSlide>
            <SplideSlide class="slide">
              <img src="./s2/b_m.jpg" alt="" srcset="">
            </SplideSlide>
          </Splide>
        </div>
        <img  data-aos="fade-up" class="en" src="./s2/RIVERSIDE SEENERY.png" alt="" srcset="">
        <img  data-aos="fade-up" v-if="$isMobile()" @click="splide.splide.go('>')" src="./s2/next.png" class="next" alt="" srcset="">
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
    background-image: url('./s2/1.jpg');
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
font-weight: 400;
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
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        img {
          width: size(440);
          margin: unset;
        }
      }
      .en {
        width: 100%;
        margin-top: size(40);
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
    background-image: url('./s2/1_m.jpg');
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
  }
  .tree {
    @apply absolute;
    top: sizem(311);
    right: -#{sizem(28)};
    width: sizem(198.55);
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
