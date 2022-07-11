<template>
  <div class="s1 relative flex justify-center items-center z-10">
    <div class="text">
      <img class="t1" src="@/section/s1/t1.svg" alt="" srcset="">
      <img class="t2" src="@/section/s1/t2.svg" alt="" srcset="">
      <img class="t3" src="@/section/s1/t3.svg" alt="" srcset="">
    </div>
    <div class="leaf">
      <img class="r" src="@/section/s1/leaf_r.png" alt="" srcset="">
      <img class="l" src="@/section/s1/leaf_l.png" alt="" srcset="">
    </div>
    <div class="warn">（冷氣僅贈與室內室外機，不含安裝及管路操作）</div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: size(1080);
  background-color: #004A33;

  .text {
    width: size(1025);
    height: size(347);

    .t2 {
      margin-top: size(10);
      margin-bottom: size(50);
    }

    img {
      width: 100%;
    }
  }

  .leaf {
    img {
      position: absolute;
    }

    .r {
      width: size(277.95);
      left: size(1618);
      top: size(55);
      animation: ani 4s infinite alternate-reverse ease-in-out;
      transform-origin: bottom right;
    }

    .l {
      width: size(340.33);
      left: size(16);
      top: size(620);
      animation: ani 5s infinite alternate-reverse ease-in-out;
      transform-origin: bottom left;
    }

    @keyframes ani {
      from {
        transform: rotate(-10deg) skewY(5deg);
      }

      to {
        transform: rotate(0deg) skewY(-5deg);
      }
    }
  }

  .warn {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: size(32);
    font-weight: 400;
    color: #fff;
    top: size(991);
    pointer-events: none;
    letter-spacing: 0.12em;
  }
}

@media screen and (max-width:768px) {
  .s1 {}

}
</style>

<script setup>
</script>
