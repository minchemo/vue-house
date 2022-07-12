<template>
  <div class="s9 relative bg-white">
    <div class="info">
      <div>
        <div class="t1">名品建材 用心呵護最愛的家人</div>
        <div class="t2">網羅知名品牌建材，為您打造最舒適的家居感受，<br v-if="!$isMobile()">
          並提供客製化木地板顏色挑選，讓您在自己的國度做主！</div>
      </div>
      <div class="brands" data-aos="zoom-in" data-aos-delay="0">
        <img src="@/section/s9/1.png" alt="" srcset="" data-aos="zoom-in" data-aos-delay="0">
        <img src="@/section/s9/2.png" alt="" srcset="" data-aos="zoom-in" data-aos-delay="100">
        <img src="@/section/s9/3.png" alt="" srcset="" data-aos="zoom-in" data-aos-delay="200">
        <img src="@/section/s9/4.png" alt="" srcset="" data-aos="zoom-in" data-aos-delay="300">
        <img src="@/section/s9/5.png" alt="" srcset="" data-aos="zoom-in" data-aos-delay="400">
        <img src="@/section/s9/6.png" alt="" srcset="" data-aos="zoom-in" data-aos-delay="500">
      </div>
    </div>
    <lazy-component>
      <img v-if="!$isMobile()" class="bg" src="@/section/s9/bg.png" alt="" srcset="">
      <img v-else class="bg" src="@/section/s9/bg_m.png" alt="" srcset="">
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

      img {
        width: size(263);
      }

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
    width: 100%;
    height: size-m(667);

    .info {
      flex-direction: column;
      margin-top: size-m(35);
      padding: 0 size-m(35);

      .t1 {
        font-size: size-m(20);
        margin-bottom: size-m(25);
      }

      .t2 {
        font-size: size-m(14);
      }

      .brands {
        margin-top: size-m(30);
        margin-left: unset;
        grid-template-columns: repeat(2, 1fr);
        column-gap: size-m(30);
        row-gap: size-m(27);

        img {
          width: size-m(140);
        }

      }
    }


    .bg {
      width: 100%;
    }
  }
}
</style>

<script setup></script>