<template>
  <div class="s9 relative bg-white">
    <div class="info">
      <div>
        <div class="t1">名品建材 用心呵護最愛的家人</div>
        <div class="t2">網羅知名品牌建材，為您打造最舒適的家居感受，<br>
          並提供客製化木地板顏色挑選，讓您在自己的國度做主！</div>
      </div>
      <div class="brands">
        <img src="@/section/s9/1.png" alt="" srcset="">
        <img src="@/section/s9/2.png" alt="" srcset="">
        <img src="@/section/s9/3.png" alt="" srcset="">
        <img src="@/section/s9/4.png" alt="" srcset="">
        <img src="@/section/s9/5.png" alt="" srcset="">
        <img src="@/section/s9/6.png" alt="" srcset="">
      </div>
    </div>
    <lazy-component>
      <img class="bg" src="@/section/s9/bg.png" alt="" srcset="">
    </lazy-component>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  overflow: hidden;
  width: 100%;
  height: size(1080);

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: size(67);

    .t1 {
      font-weight: 700;
      font-size: size(40);
      line-height: size(58);
      letter-spacing: 0.07em;
      margin-bottom: size(30);
    }

    .t2 {
      font-weight: 400;
      font-size: size(20);
      line-height: 158%;
    }

    .brands {
      margin-left: size(105);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: size(60);
      row-gap: size(30);

    }
  }


  .bg {
    position: absolute;
    width: size(1534);
    left: 0;
    bottom: 0;
  }
}


@media screen and (max-width:768px) {

  .s9 {
    overflow: hidden;
  }
}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"

const activeImg = ref(1);
const globals = getCurrentInstance().appContext.config.globalProperties;

const swipeHandler = (e) => {
  if (e == 'right') {
    prev()
  } else {
    next()
  }
}

const next = () => {
  if (activeImg.value - 1 == 0) {
    activeImg.value = 3
  } else {
    activeImg.value--
  }
}
const prev = () => {
  if (activeImg.value + 1 == 4) {
    activeImg.value = 1
  } else {
    activeImg.value++
  }
}

setInterval(() => {

  if (globals.$isMobile()) prev()
  else next()

}, 4000);
</script>
