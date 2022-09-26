<template>
  <article class="s10 font-['noto_sans_tc']">
    <div class="box">
      <div class="title" data-aos="fade-up" data-aos-delay="0">拓境精品 暖心設備</div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">集結世界優質品牌 細膩匠作</div>
      <div class="items">
        <div class="item" v-for="item in items1" :class="{'darkbg': item.darkBg}">
          <img :src="item.icon" alt="" srcset="">
          <p v-html="item.content" data-aos="fade-up" data-aos-delay="0"></p>
        </div>
      </div>
    </div>
    <div class="box box2">
      <div class="title" data-aos="fade-up" data-aos-delay="0">拓造承諾 領先業界<br>
        超越標準 主動延長保固</div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">付諸實際行動 給嘉人最堅實守護</div>
      <div class="items">
        <div class="item onlyText" v-for="item in items2" :class="{'darkbg': item.darkBg}">
          <p v-html="item.content" data-aos="fade-up" data-aos-delay="0"></p>
        </div>
      </div>
    </div>
    <img class="mo-decor" src="@/section/s10/bg_m.png" alt="" srcset="" v-if="$isMobile()">
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s10 {
  position: relative;
  width: 100%;
  height: size(1060);
  background-color: #7BA9D3;
  background-image: url('@/section/s10/bg.png');
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: size(105);

  .box {

    .title {
      font-weight: 700;
      font-size: size(40);
      letter-spacing: 0.07em;
      text-align: center;
      color: #fff;
    }

    .subtitle {
      font-weight: 400;
      font-size: size(20);
      letter-spacing: 0.07em;
      text-align: center;
      color: #fff;
    }

    .items {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: size(8);
      margin-top: size(65);

      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: size(174);
        height: size(174);
        padding: size(20);
        border: size(1) solid #fff;

        img {
          width: 100%;
          max-width: size(110);
          max-height: size(40);
          margin-top: size(10);
        }

        p {
          margin-top: auto;
          margin-bottom: 0;
          font-weight: 400;
          font-size: size(15);
          line-height: size(22);
          text-align: center;
          letter-spacing: 0.07em;
          color: #fff;
        }

        &.darkbg {
          background-color: #595757;
          border: size(1.5) solid #595757;
        }

        &.onlyText {

          p {
            margin-bottom: auto;
            line-height: size(30);
            font-size: size(20);
            padding-top: size(20);

            span {
              font-weight: 500;
              font-size: size(63);
            }
          }
        }
      }
    }
  }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s10 {
    height: auto;
    background-image: url('@/section/s10/bg_m.png');
    gap: size-m(105);
    padding-top: size-m(50);
    padding-bottom: size-m(45);

    .box {
      .title {
        font-size: size-m(20);
      }

      .subtitle {
        font-size: size-m(12);
      }

      &.box2 {
        .items {
          grid-template-columns: repeat(4, 1fr);

          .item {
            width: size-m(75);
            height: size-m(75);
          }
        }
      }

      .items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: size-m(5);
        margin-top: size-m(28);

        .item {
          width: size-m(108);
          height: size-m(108);
          padding: size-m(8);
          border: size-m(1) solid #fff;

          img {
            width: 100%;
            max-width: size-m(65);
            max-height: size-m(40);
            margin-top: size-m(8);
          }

          p {
            font-size: size-m(12);
            line-height: 1.3;
            letter-spacing: 1;
            white-space: nowrap;
          }

          &.darkbg {
            background-color: #595757;
            border: size(1.5) solid #595757;
          }

          &.onlyText {

            p {
              margin-bottom: auto;
              line-height: 1.3;
              font-size: size-m(12);
              padding-top: 0;

              span {
                font-size: size-m(43);
              }
            }
          }
        }
      }
    }

    .mo-decor {
      position: absolute;
      left: 0;
      bottom: size-m(151);
      width: 100%;
    }

  }
}
</style>
<script setup>
const items1 = [
  {
    icon: new URL("../section/s10/1.svg", import.meta.url).href,
    content: '德國國寶品牌<br/>浴室面盆、龍頭',
    darkBg: true,
  },
  {
    icon: new URL("../section/s10/2.svg", import.meta.url).href,
    content: '日系時尚美學<br/>主浴免治馬桶<br/>主浴冷暖風機<br/>系統櫥櫃',
  },
  {
    icon: new URL("../section/s10/3.svg", import.meta.url).href,
    content: '日本精品工藝<br/>次浴馬桶',
    darkBg: true,
  },
  {
    icon: new URL("../section/s10/4.svg", import.meta.url).href,
    content: '歐洲原廠設計<br/>耐磨環保地壁磚',
  },
  {
    icon: new URL("../section/s10/5.svg", import.meta.url).href,
    content: '日本第一品牌<br/>瓦斯雙口爐<br/>落地型烘碗機<br/>隱藏式排油煙機',
    darkBg: true,
  },
  {
    icon: new URL("../section/s10/6.svg", import.meta.url).href,
    content: '德國原裝進口<br/>全棟淨軟水系統',
  },
  {
    icon: new URL("../section/s10/7.svg", import.meta.url).href,
    content: '獨家設計訂製<br/>堅固耐熱<br/>全實木大門',
    darkBg: true,
  },
  {
    icon: new URL("../section/s10/8.svg", import.meta.url).href,
    content: '領先國際科技<br/>智慧門鎖',
  },
  {
    icon: new URL("../section/s10/9.svg", import.meta.url).href,
    content: '氣密/水密/隔音/<br/>抗風壓氣密窗',
    darkBg: true,
  },
];
const items2 = [
  {
    content: '<span>1</span>年<br/>電器保固',
    darkBg: true,
  },
  {
    content: '<span>3</span>年<br/>地壁磚保固',
    darkBg: false,
  },
  {
    content: '<span>5</span>年<br/>防水保固',
    darkBg: true,
  },
  {
    content: '<span>15</span>年<br/>結構保固',
    darkBg: false,
  },
];
</script>
