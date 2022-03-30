<template>
  <div class="section7">
    <div class="info">
      <div class="t1" data-aos="fade-up">BUILDING</div>
      <div class="t2" data-aos="fade-up" data-aos-delay="400">
        大大的家幸福滿滿
      </div>
      <div class="t3" data-aos="fade-up" data-aos-delay="800">
        千坪大基地，大氣開展，市心湖畔首排全新建築！無限隱私棟距，向自然做最大尺度的邀請，以自然為底色，以大城生活為筆，形塑頂級莊園生活氛圍！
      </div>
    </div>
    <div class="line" data-aos="fade-down"></div>
    <div class="caption">外觀3D圖</div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section7 {
  width: 100%;
  height: size(1170);
  background: url("~@/projects/gp/s7/bg.jpg");
  background-size: cover;
  background-position: center;
  .info {
    position: absolute;
    text-align: left;
    width: size(384);
    height: auto;
    color: #fff;
    line-height: 1.5;
    top: size(425);
    right: size(95);

    .t1 {
      font-size: size(32);
      font-weight: 500;
    }
    .t2 {
      font-size: size(48);
      font-weight: 600;
      filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.9));
    }
    .t3 {
      font-size: size(20);
      font-weight: 500;
      filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.9));
    }
  }
  .caption {
    position: absolute;
    right: size(15);
    bottom: size(20);
    font-size: size(12);
    color: #fff;
    font-weight: bold;
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
  .line {
    position: absolute;
    width: 1px;
    background: #fff;
    height: size(1030);
    right: size(66);
    &::after {
      content: "";
      width: size(20);
      height: size(20);
      background: #fff;
      border-radius: 100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section7 {
    width: 100%;
    height: size-m(667);
    background: url("~@/projects/gp/s7/bg_m.jpg");
    background-size: cover;
    .info {
      width: size-m(313);
      top: size-m(93);
      right: size-m(29);

      .t1 {
        font-size: size-m(16);
      }
      .t2 {
        font-size: size-m(20);
        font-weight: 500;
        margin-bottom: size-m(10);
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7));
      }
      .t3 {
        font-size: size-m(13);
        line-height: 2;
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7));
      }
    }
    .caption {
      position: absolute;
      right: size(30);
      bottom: size(40);
      font-size: size-m(12);
      color: #fff;
      font-weight: bold;
      writing-mode: horizontal-tb;
      text-orientation: upright;
    }
    .line {
      width: size-m(339.46);
      height: 1px;
      right: unset;
      left: 0;
      top: size-m(62);
      &::after {
        content: "";
        width: size-m(13);
        height: size-m(13);
        background: #fff;
        border-radius: 100%;
        position: absolute;
        bottom: unset;
        right: 0;
        top: 50%;
        left: unset;
        transform: translateY(-50%);
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
import { isMobile } from '@/utils'

export default {
  name: 'section7',
  components: {
  },
  data() {
    return {
      isMobile,
    }
  },
  methods: {
  },
  created() { },
  mounted() { }
}
</script>
