<template>
  <article class="s7">
    <div class="t1">11-25坪景觀宅</div>
    <div class="t2">竹圍站50米｜挑高3米6</div>
    <img class="tree" src="./s7/tree.png" alt="" srcset="">
  </article>
</template>
  
<style lang="scss" scoped>
  @import '@/assets/style/function.scss';
  
  .s7 {
    @apply relative;
    height: size(700);
    background-image: url('./s7/bg.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: size(130);
    .t1{
      font-weight: 700;
      font-size: size(78);
      letter-spacing: 0.185em;
      color: #000000;
    }
    .t2{
      font-weight: 500;
      font-size: size(40);
      letter-spacing: 0.065em;
      color: #C9A063;
    }
    .tree{
      @apply absolute;
      width: size(404);
      top: size(218);
      right: size(294);
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
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
  .s7 {
    height: sizem(280);
    background-image: url('./s7/bgm.jpg');
    padding-top: sizem(50);
    .t1{
      font-size: sizem(28);
    }
    .t2{
      font-size: sizem(20);
    }
    .tree{
      width: sizem(141);
      top: sizem(105);
      right: -#{sizem(10)};
    }
  }
  }
  </style>
<script setup>
import { ref } from 'vue';
const selected = ref(0)
</script>
  