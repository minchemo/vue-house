<template>
  <article class="s4">
    <img class="en" data-aos="fade-down" src="@/section/s4/en.png" alt="" srcset="">
    <div class="main">
      <div class="box"></div>
      <img class="tree" src="@/section/s4/tree.png" alt="" srcset="">
      <div class="t1" data-aos="fade-left">
        水岸經典至美<br>
        天際最美建築
      </div>
      <div class="t2" data-aos="fade-left">
        外觀運用黑白交錯的現代建築語彙，垂直立面手法，輔以幾何韻律的方形格柵，體現與藍天白雲為襯、山河海為景的均衡之美，蓋一棟讓心靈沉澱的水岸景觀建築！
      </div>
      <div class="t3" data-aos="fade-left">3D外觀示意僅供參考，實際依現場施工為主</div>
    </div>
  </article>
</template>
  
<style lang="scss" scoped>
  @import '@/assets/style/function.scss';
  
  .s4 {
    @apply relative;
    height: size(1080);
    background: #013755;
    background-image: url('@/section/s4/bg.jpg');
    background-size: cover;
    padding-top: size(59);
    .en {
      @apply absolute;
      width: size(736.15);
      left: size(112.44);
      top: size(85.28);
    }
    .main {
      @apply absolute;
      top: size(106);
      right: size(115);
      width: size(354);
      display: flex;
      flex-direction: column;
      color: #fff;
      .box {
        width: size(352);
        height: size(463);
        border-right: size(3) solid #C9A063; 
        border-top: size(3) solid #C9A063; 
      }
      .tree {
        @apply absolute;
        width: size(346);
        height: size(340);
        top: size(123);
        left: size(75);
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
      .t1 {
        font-weight: 700;
        font-size: size(55);
        line-height: 133.2%;
        text-align: right;
        letter-spacing: 0.085em;
        white-space: nowrap;
        margin-top: size(39);
      }
      .t2 {
        font-weight: 300;
        font-size: size(18);
        line-height: 180.7%;
        text-align: justify;
        letter-spacing: 0.165em;
        color: #FFFFFF;
        margin-top: size(34);
        margin-bottom: size(10);
      }
      .t3 {
        white-space: nowrap;
        font-weight: 400;
        font-size: size(16);
        line-height: 236.7%;
        letter-spacing: 0.145em;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {

    .s4 {
    height: sizem(667);
    background-image: url('@/section/s4/bgm.jpg');
    padding-top: sizem(41) !important;
    padding: 0 sizem(30);
    .en {
      width: sizem(315);
      left: sizem(30);
      bottom: sizem(20);
      top: unset;
    }
    .main {
      @apply relative;
      top: unset;
      right: unset;
      width: 100%;
      display: flex;
      flex-direction: column;
      color: #fff;
      padding-top: sizem(33);
      .box {
        @apply absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: sizem(253);
        border-right: sizem(2) solid #C9A063; 
        border-top: sizem(2) solid #C9A063; 
      }
      .tree {
        @apply absolute;
        width: sizem(140);
        height: sizem(137.57);
        top: -#{sizem(27)};
        left: unset;
        right: -#{sizem(14)};
      }
      .t1 {
        font-size: sizem(25);
        line-height: 122.7%;
        text-align: left;
        letter-spacing: 0.025em;
        margin-top: 0;
      }
      .t2 {
        font-size: sizem(13);
        margin-top: sizem(12);
        margin-bottom: sizem(12);
        padding-right: sizem(25);
      }
      .t3 {
        font-size: sizem(12);
      }
    }
  }
  }
  </style>
<script setup>
import { ref } from 'vue';
</script>
  