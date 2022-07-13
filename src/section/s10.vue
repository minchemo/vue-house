<template>
  <div class="s10 relative bg-white">
    <div class="info">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">好漾生活 先卡位享優惠</div>
      <div class="t2" data-aos="fade-up" data-aos-delay="200">
        貴賓專線：<span>02-2285-0528</span><br>
        接待會館：新北市蘆洲區中山一路101號
      </div>
    </div>
    <lazy-component>
      <img v-if="!$isMobile()" class="leaf" src="@/section/s10/leaf.png" alt="" srcset="">
      <img v-else class="leaf" src="@/section/s10/leaf_m.png" alt="" srcset="">
    </lazy-component>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  overflow: hidden;
  width: 100%;
  height: size(466);
  background-color: #469B6D;

  .leaf {
    position: absolute;
    right: 0;
    top: 0;
    width: size(399);
    animation: ani1 4s infinite alternate-reverse ease-in-out;
    transform-origin: right;

    @keyframes ani {
      from {
        transform: skewY(5deg);
      }

      to {
        transform: skewY(0deg);
      }
    }
  }

  .info {
    text-align: center;
    margin-top: size(130);
    color: #fff;

    .t1 {
      font-weight: 700;
      font-size: size(85);
      letter-spacing: 0.07em;
      display: inline-block;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: -#{size(30)};
        bottom: size(10);
        height: 80%;
        width: size(10);
        background-color: #fff;
      }

      &::after {
        content: '';
        position: absolute;
        right: -#{size(30)};
        bottom: size(10);
        height: 80%;
        width: size(10);
        background-color: #fff;
      }
    }

    .t2 {
      font-weight: 400;
      font-size: size(35);
      line-height: size(51);
      letter-spacing: 0.07em;
      margin-top: size(40);

      span {
        font-size: size(72);
      }
    }
  }

}


@media screen and (max-width:768px) {

  .s10 {
    width: 100%;
    height: size-m(176);

    .leaf {
      position: absolute;
      right: 0;
      top: 0;
      width: size-m(178);
      animation: ani1 4s infinite alternate-reverse ease-in-out;
      transform-origin: right;

      @keyframes ani {
        from {
          transform: skewY(5deg);
        }

        to {
          transform: skewY(0deg);
        }
      }
    }

    .info {
      margin-top: size-m(55);

      .t1 {
        font-size: size-m(20);
        display: inline-block;
        position: relative;

        &::before {
          left: -#{size-m(20)};
          bottom: size-m(2);
          width: size-m(3);
        }

        &::after {
          right: -#{size-m(20)};
          bottom: size-m(2);
          width: size-m(3);
        }
      }

      .t2 {
        font-size: size-m(15);
        line-height: size-m(22);
        margin-top: size-m(40);
        text-align: left;
        margin-left: size-m(40);

        span {
          font-size: size-m(29);
          margin-left: size-m(2);
          letter-spacing: 0.075em;
        }
      }
    }

  }
}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"

</script>
