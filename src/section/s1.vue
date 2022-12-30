<template>
  <article class="s1">

    <img src="@/section/s1/bg.jpg" class="bg" data-aos="fade" data-aos-delay="0" />

    <img src="@/section/s1/gif4.gif" class="gif" data-aos="fade" data-aos-delay="0" />
    <div class="img">
      <img src="@/section/s1/1.png" class="img1 tree" />
      <img src="@/section/s1/2.png" class="img2 tree" />
      <img src="@/section/s1/2.png" class="img3 tree" />
      <img src="@/section/s1/3.png" class="img4 tree" />
      <img src="@/section/s1/boat.png" class="boat" />
    </div>
    <div class="txt">
      <img class="logo" data-aos="fade-up" src="@/section/s1/logo.png" alt="" srcset="">
      <div class="t1" data-aos="fade-up" data-aos-delay="200">重新定義河岸第一排</div>
      <div class="t2" data-aos="fade-up" data-aos-delay="400">竹圍站50米｜11-25坪景觀宅</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  overflow: hidden;
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
  opacity: .5;
  }
.bg{
  position: absolute;
  width: 100%;height:auto;
  min-height: size(1080);
  max-height: size(1080);
  top: calc(50% + (0 - 535) * 100vw / 1920);
  left:0;object-fit: cover;
  }
  .gif{
    position: absolute;
    width:100%;
    height: size(360);
    // top: size(718);
    top: calc(50% + (718 - 535) * 100vw / 1920);
    opacity: .5;
    left: 0;mix-blend-mode: soft-light;filter: blur(0.05vw);
  }
  
  .img1{
    position: absolute;
    width: size(400);
    // top: size(495);
    top: calc(50% + (495 - 535) * 100vw / 1920);
    left: size(140);
    transform-origin: 50% 100%;
  }
  .img2{
    position: absolute;
    width: size(237);
    // top: size(800);
    top: calc(50% + (800 - 535) * 100vw / 1920);
    left: size(470);
    transform-origin: 50% 100%;
  }
  .img3{
    position: absolute;
    width: size(250);
    // top: size(445);
    top: calc(50% + (450 - 535) * 100vw / 1920);
    right: size(175);
    transform-origin: 50% 100%;
  }
  .img4{
    position: absolute;
    width: size(170);
    // top: size(530);
    top: calc(50% + (535 - 535) * 100vw / 1920);
    right: size(425);
    transform-origin: 50% 100%;
  }
  .tree {
    animation: wave 2s alternate-reverse infinite ease-in-out;
    @keyframes wave {
      from {
        transform: skewX(-2deg);
      }
      to {
        transform: skewX(2deg);
      }
    }
  }
  .boat {
    position: absolute;
    width: size(280);
    right: size(586);
    bottom: size(130);
    animation: wave2 3s alternate-reverse infinite ease-in-out;
    @keyframes wave2 {
      from {
        transform: translate(-4%, -1%) skewX(2deg);
      }
      to {

        transform: translate(4%, 1%) skewX(-2deg);
      }
    }
  }
  .txt {
    position:absolute;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translate(-50%);
    left: 50%;
    top: size(197);
    .logo{
      width: size(440.64);
    }
    .t1{
font-weight: 700;
font-size: size(70);
line-height: 124.2%;
letter-spacing: 0.145em;

color: #000000;
margin-top: size(33);
margin-bottom: size(11);
    }
    .t2{
font-weight: 400;
font-size: size(40);
line-height: 124.2%;
letter-spacing: 0.065em;
color: #C9A063;

    }
  }
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: sizem(667);
    max-height: sizem(812);
    overflow: hidden;
    margin: 0;
  }
.bg{
  height:100%;
  top:0;
  min-height: sizem(667);
  max-height: sizem(812);
  }
  .gif{
    width:200%;
    height: sizem(280);
    top: calc(70% + (435 - 667 * .7) * 100vw / 375);
    left: -50%;
  }
  .img1{
    width: sizem(200);
    top: calc(70% + (260 - 667 * .7) * 100vw / 375);
    left: sizem(-90);
  }
  .img2{
    width: sizem(120);
    top: calc(90% + (540 - 667 * .90) * 100vw / 375);
    left: sizem(5);
  }
  .img3{
    width: sizem(80);
    top: calc(64% + (355 - 667 * .64) * 100vw / 375);
    right: sizem(5);
  }
  .img4{
    width: sizem(55);
    top: calc(64% + (380 - 667 * .64) * 100vw / 375);
    right: sizem(80);

 
}
  .txt {
    position:absolute;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translate(-50%);
    left: 50%;
    top: sizem(91);
    width: 100%;
    .logo{
      width: sizem(208);
    }
    .t1 {
      font-size: sizem(25);
      margin-top: sizem(16);
      margin-bottom: sizem(8);
    }
    .t2{
      font-size: sizem(16);
    }
  }
  .boat {
    width: sizem(115.7);
    right: sizem(89.3);
    bottom: sizem(140);
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
