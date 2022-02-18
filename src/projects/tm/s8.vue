<template>
  <div class="s8">
    <div class="content">
      <div class="img-box"></div>
      <div class="text">
        <div class="t2" data-aos="fade">
          建築大師李天鐸<br />
          揮毫天沐山水
        </div>
        <div class="t3" data-aos="fade-up">
          用土地的心情，還原生活空間每一幕
        </div>
        <div class="t4" v-if="!isMobile" data-aos="fade-up">
          從大安官巷豪宅「泰安連雲」、「東騰千里」、陽明山豪宅別墅「過院來」、<br />
          水岸豪宅「海納川」、「東騰天母」、「新美齊Jade 12」、「玥隱信義」等，<br />
          國家金獎建築大師李天鐸，每一次的建築創作都帶給在地環境全新的質變昇華
        </div>
        <div class="t4" v-else data-aos="fade-up">
          從大安官巷豪宅「泰安連雲」、「東騰千里」、陽明山豪宅別墅「過院來」、
          水岸豪宅「海納川」、「東騰天母」、「新美齊Jade 12」、「玥隱信義」等，
          國家金獎建築大師李天鐸，每一次的建築創作都帶給在地環境全新的質變昇華
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s8 {
  width: 100%;
  height: size(900);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("~@/projects/tm/s8/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img-box {
      width: size(968);
      height: size(900);
      background-image: url("~@/projects/tm/s8/1.jpg");
      background-size: cover;
      background-position: center;
      position: relative;
      &::after {
        content: "";
        width: size(968);
        height: size(865);
        border: 3px solid #fff;
        position: absolute;
        top: size(17.5);
        left: size(17.5);
        z-index: 1;
      }
    }
    .text {
      text-align: right;
      margin-right: size(130);
      .t2 {
        color: #4d4d4d;
        font-size: size(70);
        margin-bottom: size(35);
        font-weight: 400;
        font-weight: 500;
        line-height: 1.1;
      }
      .t3 {
        position: relative;
        color: #b38f4f;
        font-size: size(38);
        margin-bottom: size(50);
        font-weight: 600;
      }
      .t4 {
        color: #4d4d4d;
        font-size: size(20);
        line-height: 2.5;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s8 {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("~@/projects/tm/s8/bg_m.jpg");
    background-size: cover;
    padding-top: size-m(40);
  background-attachment: unset;
    .content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column-reverse;
      .img-box {
        width: 100%;
        height: size-m(350);
        background-image: url("~@/projects/tm/s8/1.jpg");
        background-size: cover;
        background-position: center;
        position: relative;
        &::after {
          content: "";
          width: size-m(352);
          height: size-m(348);
          border: 1px solid #fff;
          position: absolute;
          bottom: size-m(11.5);
          top: unset;
          left: size-m(11.5);
          z-index: 1;
        }
      }
      .text {
        text-align: center;
        margin-right: 0;
        margin-bottom: size-m(40);
        .t2 {
          font-size: size-m(25);
          margin-bottom: size-m(10);
          line-height: 1.5;
        }
        .t3 {
          font-size: size-m(20);
          margin-bottom: size-m(10);
          font-weight: 400;
        }
        .t4 {
          font-size: size-m(12);
          line-height: 2;
          width: size-m(314);
        }
      }
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

export default {
  name: "s8",
  data() {
    return {
      isMobile,
    };
  },
};
</script>

