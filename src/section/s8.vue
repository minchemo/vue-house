<template>
  <div class="s8 relative">
    <div class="flex flex-col-reverse md:flex-row items-end h-full z-10 relative">

      <lazy-component>
        <img v-if="!$isMobile()" class="plan" src="@/section/s8/plan.png" alt="" srcset="">
        <img v-else class="plan" src="@/section/s8/plan_m.png" alt="" srcset="">
      </lazy-component>

      <div class="caption">A3傢俱配置參考圖</div>

      <div class="info">
        <div class="t1" data-aos="zoom-in" data-aos-delay="0">高坪效格局 幸福的極致展演</div>
        <div class="t2">單層三併、戶戶客廳面寬均3米、臥室採光無暗房，<br v-if="!$isMobile()">
          皆可放得下雙人床與衣櫥書桌，結合陽台空間，<br v-if="!$isMobile()">
          保持室內清新乾爽，同時完美區分公私領域，<br v-if="!$isMobile()">
          不僅提升空間機能使用性，更放大生活享受！</div>
        <div class="vr" @click="vrOpen = !vrOpen">
          <p>A3 樣品屋<br>
            VR 720 實境觀看</p>
        </div>
      </div>



    </div>
    <lazy-component>
      <img v-if="!$isMobile()" class="cloud" src="@/section/s8/cloud.png" alt="" srcset="">
      <img v-else class="cloud" src="@/section/s8/cloud_m.png" alt="" srcset="">
    </lazy-component>
  </div>


  <lazy-component>
    <div class="vr-box" v-bind:class="{ show: vrOpen }">
      <div class="close" @click="vrOpen = !vrOpen">關閉</div>
      <p class="loading">讀取中，請稍候...</p>
      <iframe src="https://www.eyehouse.co/live?c=c9975336095" frameborder="0"></iframe>
    </div>
  </lazy-component>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.vr-box {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba($color: #fff, $alpha: .5);
  backdrop-filter: blur(10px);
  transform: translateY(100%);
  transition: all .5s;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: size(100);

  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  &.show {
    transform: translateY(0%);
  }

  iframe {
    width: 90%;
    height: 85%;
    border-radius: 10px;
    z-index: 1;
  }

  .close {
    position: absolute;
    left: 50%;
    bottom: size(50);
    transform: translateX(-50%);
    font-size: size(32);
    font-weight: 700;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
}

.s8 {
  width: 100%;
  height: size(1080);
  background: linear-gradient(90deg, #E0E0E0 0%, #FFFFFF 50.21%, #E0E0E0 99.37%);
  padding: 0 size(165);
  padding-bottom: size(113);

  .cloud {
    position: absolute;
    width: size(1026.85);
    left: -#{size(31)};
    top: -#{size(112)};

  }

  .plan {
    width: size(930);
    margin-right: size(100);
  }

  .caption {
    font-weight: 400;
    font-size: size(20);
    letter-spacing: 0.07em;
    position: absolute;
    color: #231815;
    left: 0;
    bottom: -#{size(50)};
  }

  .info {
    .t1 {
      font-size: size(40);
      font-weight: 700;
      letter-spacing: 0.07em;
      margin-bottom: size(35);
    }

    .t2 {
      font-size: size(20);
      font-weight: 400;
      line-height: 158%;
      margin-bottom: size(75);

    }

    .vr {
      position: relative;
      width: size(547);
      height: size(460);
      background-image: url('@/section/s8/vr-preview.jpg');
      background-size: contain;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      p {
        font-weight: 700;
        font-size: size(40);
        line-height: size(58);
        text-align: center;
        letter-spacing: 0.07em;
        color: #fff;
        z-index: 1;
        position: relative;
        transition: all .5s;
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        right: 0;
        top: 0;
        background-color: rgba($color: #000000, $alpha: .5);
        transition: all .5s;
      }

      &:hover {

        &::after {
          background-color: rgba($color: #000000, $alpha: .0);
        }

        p {
          opacity: 0;
        }
      }
    }
  }
}


@media screen and (max-width:768px) {
  .vr-box {
    padding-bottom: size-m(20);
    align-items: flex-start;

    &.show {
      transform: translateY(0%);
    }

    iframe {
      width: 100%;
      height: 95%;
      border-radius: 0px;
    }

    .close {
      bottom: 2%;
      font-size: size-m(18);
    }
  }

  .s8 {
    height: size-m(667);
    padding: size-m(20) size-m(30);
    padding-bottom: size-m(50);

    .cloud {
      position: absolute;
      width: 100%;
      left: 0;
      top: size-m(25);

    }

    .plan {
      width: size-m(330);
      margin-right: 0;
    }

    .caption {
      font-size: size-m(12);
      left: 0;
      bottom: -#{size-m(30)};
    }


    .info {
      .t1 {
        font-size: size-m(20);
        margin-bottom: size-m(15);
      }

      .t2 {
        font-size: size-m(14);
        margin-bottom: size-m(30);

      }

      .vr {
        width: 100%;
        height: size-m(129);
        background-image: url('@/section/s8/vr-preview_m.jpg');
        margin-bottom: size-m(10);

        p {
          font-size: size-m(20);
          line-height: size-m(29);
          text-align: center;
          letter-spacing: 0.07em;
          color: #fff;
          z-index: 1;
          position: relative;
        }

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          right: 0;
          top: 0;
          background-color: rgba($color: #000000, $alpha: .7);
          transition: all .5s;
        }

        &:hover {

          &::after {
            background-color: rgba($color: #000000, $alpha: .2);
          }
        }
      }
    }
  }

}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
const vrOpen = ref(false);

</script>
