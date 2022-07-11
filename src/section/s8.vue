<template>
  <div class="s8 relative">
    <div class="flex items-end h-full z-10 relative">

      <lazy-component>
        <img class="plan" src="@/section/s8/plan.png" alt="" srcset="">
      </lazy-component>

      <div class="info">
        <div class="t1">高坪效格局 幸福的極致展演</div>
        <div class="t2">單層三併、戶戶客廳面寬均3米、臥室採光無暗房，<br>
          皆可放得下雙人床與衣櫥書桌，結合陽台空間，<br>
          保持室內清新乾爽，同時完美區分公私領域，<br>
          不僅提升空間機能使用性，更放大生活享受！</div>
        <div class="vr">
          <p>A3 樣品屋<br>
            VR 720 實境觀看</p>
        </div>
      </div>
    </div>
    <lazy-component>

      <img class="cloud" src="@/section/s8/cloud.png" alt="" srcset="">
    </lazy-component>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

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
          background-color: rgba($color: #000000, $alpha: .2);
        }
      }
    }
  }
}


@media screen and (max-width:768px) {

  .s8 {
    width: 100%;

  }

}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
</script>
