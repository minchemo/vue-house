<template>
  <div class="s1">
    <img
      data-aos="fade"
      data-aos-delay="0"
      class="butterfly"
      src="@/projects/dh/s1/butterfly.png"
      alt=""
      srcset=""
    />
    <div class="info">
      <div class="t1" data-aos="fade-up"  v-if="!isMobile">
        在南港經貿,遇見一座森林
      </div>
      <div class="t1" data-aos="fade-up"  v-else>
        在南港經貿<br />遇見一座森林
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="200" v-if="!isMobile">
        達欣企業集團｜南港新作2653-8888
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="200" v-else>
        2653-8888
      </div>
      <div class="t3" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
        達欣企業集團｜南港新作
      </div>
      <div
        class="order"
        data-aos="fade"
        data-aos-delay="600"
        v-scroll-to="{
          element: `.contact`,
          offset: 0,
        }"
      >
        立即預約
      </div>
      <img
        class="comp"
        data-aos="fade"
        data-aos-delay="600"
        src="@/projects/dh/s1/comp.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="divider" data-aos="scaleY"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
@import "@/assets/style/variableColor.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background-image: url("~@/projects/dh/bg.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  .butterfly {
    position: absolute;
    left: 10%;
    top: 29%;
    width: size(411);
  }
  .info {
    margin-top: size(250);
    color: #1b485b;
    margin-left: size(500);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .t1 {
      font-weight: bold;
      font-size: size(95);
    }
    .t2 {
      margin-top: size(60);
      font-weight: 500;
      font-size: size(50);
    }
    .order {
      margin-top: size(125);
      width: size(191);
      height: size(56);
      color: #c28c65;
      border: size(2) solid;
      font-weight: 600;
      padding-bottom: 4px;
      font-size: size(31);
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        transition:0.5s;
        background: #c28c65;
        cursor: pointer;
        color: #fff;
      }
    }
    .comp {
      margin-top: size(48);
      height: size(25.5);
    }
  }
  .divider {
    position: absolute;
    width: size(2);
    height: size(202);
    background: #c28c65;
    bottom: -#{size(100)};
    z-index: 10;
    &::before {
      content: "Scroll";
      transform: rotate(90deg);
      display: inline-block;
      font-family: "Noto Sans TC";
      font-weight: bold;
      color: #b68460;
      font-size: size(12);
      letter-spacing: 2px;
      position: absolute;
      top: size(30);
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      width: size(8);
      height: size(8);
      border-radius: 100%;
      border: size(2) solid #b68460;
      background: #fff;
      top: 0;
      left: 0;
      margin-left: -#{size(3)};
      z-index: 10;
      animation: swipe 2s alternate-reverse infinite;

      @keyframes swipe {
        from {
          transform: translateY(-#{size(5)});
        }
        to {
          transform: translateY(size(202));
        }
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s1 {
    position: relative;
    width: size-m(375);
    height: size-m(668);
    background-image: url("~@/projects/dh/bg_m.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .butterfly {
      position: relative;
      left: unset;
      top: unset;
      width: size-m(128);
      height: auto;
      margin-top: size-m(50);
    }
    .info {
      margin-top: 0;
      margin-left: 0;
      .t1 {
        border-top: 1px solid;
        border-bottom: 1px solid;
        padding: size-m(13) 0;
        font-weight: bold;
        font-size: size-m(35.6);
        line-height: 1.5;
        margin: size-m(18) 0;
      }
      .t2 {
        margin-top: 0;
        font-size: size-m(28);
        font-weight: bold;
      }
      .t3 {
        margin-top: size-m(5);
        font-size: size-m(12);
        font-weight: bold;
      }
      .order {
        display: none;
      }
      .comp {
        margin-top: size-m(80);
        height: size-m(11);
      }
    }
    .divider {
      display: none;
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
  name: "s1",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
    };
  },
};
</script>