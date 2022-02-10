<template>
  <div class="s6">
    <div class="content">
      <div class="img-box">
         <div class="t4" data-aos="fade-up">
          ⼒麒企業總部
        </div>
      </div>
      <div class="text">
        <div class="t1" data-aos="fade">
          <img src="@/projects/tm/s6/entitle.svg" alt="" srcset="" />
        </div>
        <div class="t2" data-aos="fade">力麒建設 30年集大成</div>
        <div class="t3" data-aos="fade-up">地標造境，以心打造建築藝術</div>
        <div class="t4" v-if="!isMobile" data-aos="fade-up">
          堅持細節30年不變的精神，使得力麒建設口碑卓然不群，<br />
          建築藝術化的眼光與開發意志，讓力麒建設穩居高級住宅首選品牌；<br />
          近年來，更以集團化全方位思考的眼光，與精工卓鑄的執行力，<br />
          為深情的土地薈萃菁英團隊，不斷創新豪宅里程碑。
        </div>
        <div class="t4" v-else data-aos="fade-up">
          堅持細節30年不變的精神，使得力麒建設口碑卓然不群，
          建築藝術化的眼光與開發意志，讓力麒建設穩居高級住宅首選品牌；
          近年來，更以集團化全方位思考的眼光，與精工卓鑄的執行力，
          為深情的土地薈萃菁英團隊，不斷創新豪宅里程碑。
        </div>

      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s6 {
  width: 100%;
  height: size(900);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("~@/projects/tm/s6/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    .img-box {
      width: size(784);
      height: size(800);
      background-image: url("~@/projects/tm/s6/1.jpg");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      .t4 {
      color: #fff;
      font-size: size(18);
      line-height: 2.5;
      margin-bottom: 5px;
      margin-left: 20px;
      text-shadow: black 0.1em 0.1em 0.2em


    }
    }
    .text {
      text-align: left;
      margin-left: size(130);
      .t1 {
        position: relative;
        width: size(782);
        margin-bottom: size(15);
        img {
          width: 100%;
        }
        &:before {
          content: "";
          width: size(200);
          height: 1px;
          background: #000;
          position: absolute;
          transform: rotate(110deg);
          transform-origin: center;
          left: -#{size(155)};
          top: size(60);
        }
      }
      .t2 {
        color: #4d4d4d;
        font-size: size(70);
        margin-bottom: size(85);
        font-weight: 400;
      }
      .t3 {
        position: relative;
        color: #b38f4f;
        font-size: size(44);
        margin-bottom: size(20);
        &:before {
          content: "";
          width: size(1000);
          height: 1px;
          background: #fff;
          position: absolute;
          left: 0;
          top: -#{size(20)};
        }
      }
      .t4 {
        color: #4d4d4d;
        font-size: size(20);
        line-height: 2;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s6 {
    width: 100%;
    height: size-m(667);
    background-image: url("~@/projects/tm/s6/bg_m.jpg");
  background-attachment: unset;
    .content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column-reverse;
      height: 100%;
      .img-box {
        width: size-m(375);
        height: size-m(356);
        background-image: url("~@/projects/tm/s6/1.jpg");
        background-size: cover;
        background-position: center;

        .t4 {
          color: #fff;
          font-size: size-m(12);
          line-height: 2.5;
    }
      }
      .text {
        text-align: left;
        margin-left: 0;
        margin-bottom: size-m(20);
        .t1 {
          position: relative;
          width: size-m(317);
          margin-bottom: size-m(15);
          &:before {
            content: unset;
          }
        }
        .t2 {
          font-size: size-m(25);
          margin-bottom: size-m(45);
        }
        .t3 {
          font-size: size-m(18);
          margin-bottom: size-m(10);
          &:before {
            content: "";
            width: size-m(400);
            height: 1px;
            background: #000;
            position: absolute;
            left: -#{size-m(100)};
            top: -#{size-m(35)};
          }
        }
        .t4 {
          width: size-m(314);
          color: #4d4d4d;
          font-size: size-m(12);
          line-height: 2;
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
  name: "s6",
  data() {
    return {
      isMobile,
    };
  },
};
</script>

