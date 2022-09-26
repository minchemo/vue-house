<template>
  <article class="s9 font-['noto_sans_tc']">
    <div class="text-box">
      <div class="title text-white" data-aos="fade-up" data-aos-delay="0">
        台積流域 高大領域 價值守恆
      </div>
      <div class="subtitle text-white" data-aos="fade-up" data-aos-delay="200">
        聯名共手創作
      </div>
      <img class="ring1" src="@/section/ring2.svg" alt="">

      <div class="content" data-aos="fade-up" data-aos-delay="400">
        泰嘉把建築的思考理路拉長<br />
        從原始圖面到落地執行，不斷磨圖優化<br />
        堅持慢磨細工，對細節吹毛求疵<br />
        讓完美成為泰嘉的建築基因
      </div>
    </div>
    <div class="guys">
      <div class="guy" v-for="guy in $isMobile() ? images_m : images" :class="{'large': guy.large}">
        <div class="avatar" :style="{backgroundImage: `url('${guy.image}')`}"></div>
        <div class="text">
          <div class="t1" data-aos="fade-up" data-aos-delay="0">{{guy.t1}}</div>
          <div class="t2" data-aos="fade-up" data-aos-delay="200">{{guy.t2}}</div>
          <div class="t3" v-html="guy.t3" data-aos="fade-up" data-aos-delay="400"></div>
        </div>
      </div>
    </div>
    <img class="decor" src="@/section/s9/decor.png" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
  position: relative;
  width: 100%;
  height: size(1000);
  background-color: #7BA9D3;

  .text-box {
    position: absolute;
    top: size(76);
    left: size(151);
    text-align: left;

    .title {
      font-weight: 700;
      font-size: size(40);
      line-height: size(58);
      letter-spacing: 0.07em;
    }

    .subtitle {
      font-weight: 300;
      font-size: size(40);
      line-height: size(58);
      letter-spacing: 0.07em;
      margin-top: size(10);
    }

    .ring1 {
      width: size(48);
      margin-top: size(20);
      margin-bottom: size(20);
    }

    .content {
      font-weight: 400;
      font-size: size(20);
      line-height: size(38);
      letter-spacing: 0.07em;
      color: #fff;
    }
  }

  .guys {
    position: absolute;
    top: size(245);
    left: size(613);
    display: flex;
    align-items: flex-end;
    gap: size(7.5);

    .guy {
      position: relative;
      display: flex;
      flex-direction: column;
      color: #fff;

      &.large {

        .avatar {
          width: size(448);
          height: size(578);
        }
      }

      .avatar {
        width: size(229.12);
        height: size(347.63);
        background-size: cover;
        margin-bottom: size(30);
      }

      .text {
        padding-left: size(20);

        .t1 {
          font-weight: 500;
          font-size: size(30);
          letter-spacing: 0.07em;
          display: inline-block;
          margin-right: size(10);
        }

        .t2 {
          font-weight: 400;
          font-size: size(20);
          display: inline-block;
        }

        .t3 {
          font-weight: 400;
          font-size: size(20);
          margin-top: size(5);
        }
      }

      &:after {
        content: '';
        width: size(1.5);
        height: size(76);
        background-color: #fff;
        position: absolute;
        left: size(10);
        bottom: size(42);
      }
    }
  }

  .decor {
    position: absolute;
    top: size(455);
    left: size(65);
    width: size(485);
    filter: invert(87%) sepia(0%) saturate(547%) hue-rotate(289deg) brightness(83%) contrast(92%);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
    height: auto;
    padding: size-m(30) 0;

    .text-box {
      position: relative;
      top: auto;
      left: auto;
      text-align: center;
      margin-bottom: size-m(37);
      z-index: 1;

      .title {
        font-size: size-m(20);
        line-height: 1;
        letter-spacing: 0.07em;
      }

      .subtitle {
        font-size: size-m(20);
        line-height: 1;
        margin-top: size-m(5);
      }

      .ring1 {
        width: size-m(18);
        margin-top: size-m(15);
        margin-bottom: size-m(20);
      }

      .content {
        font-size: size-m(12);
        line-height: 2;
      }
    }

    .guys {
      position: relative;
      top: auto;
      left: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: auto;
      z-index: 1;

      .guy {
        position: relative;
        display: flex;
        flex-direction: column;
        color: #fff;

        &.large {

          .avatar {
            width: size-m(375);
            height: size-m(178);
            margin-bottom: size-m(20);
          }

          .text {
            position: absolute;
            right: size-m(26);
            top: size-m(63);
          }
        }

        .avatar {
          width: size-m(122.3);
          height: size-m(185.5);
          margin-bottom: size-m(10);
        }

        .text {
          padding-left: size-m(10);

          .t1 {
            font-size: size-m(16);
            margin-right: size-m(5);
          }

          .t2 {
            font-size: size-m(12);
          }

          .t3 {
            font-weight: 400;
            font-size: size-m(12);
            margin-top: size-m(0);
          }
        }

        &:after {
          content: '';
          width: size-m(1);
          height: size-m(40);
          left: size-m(5);
          bottom: size-m(42);
        }
      }
    }

    .decor {
      top: size-m(100);
      left: size-m(145);
      width: size-m(252);
    }
  }
}
</style>
<script setup>
const images = [
  {
    image: new URL("../section/s9/1.jpg", import.meta.url).href,
    t1: '許富居',
    t2: '景觀設計',
    t3: '豪宅指定 景觀權威'
  },
  {
    image: new URL("../section/s9/2.jpg", import.meta.url).href,
    t1: '唐忠漢',
    t2: '公設設計',
    t3: '美學首席 指揮空間層次'
  },
  {
    image: new URL("../section/s9/3.jpg", import.meta.url).href,
    t1: '王東奎',
    t2: '建築外觀',
    t3: '名宅風格 豪邸巨匠'
  },
  {
    image: new URL("../section/s9/4.jpg", import.meta.url).href,
    t1: '呂金發',
    t2: '董事長',
    t3: '理想建築實踐家',
    large: true
  },
];

const images_m = [
  {
    image: new URL("../section/s9/4_m.jpg", import.meta.url).href,
    t1: '呂金發',
    t2: '董事長',
    t3: '理想建築實踐家',
    large: true
  },
  {
    image: new URL("../section/s9/1_m.jpg", import.meta.url).href,
    t1: '許富居',
    t2: '景觀設計',
    t3: '豪宅指定<br/>景觀權威'
  },
  {
    image: new URL("../section/s9/2_m.jpg", import.meta.url).href,
    t1: '唐忠漢',
    t2: '公設設計',
    t3: '美學首席<br/>指揮空間層次'
  },
  {
    image: new URL("../section/s9/3_m.jpg", import.meta.url).href,
    t1: '王東奎',
    t2: '建築外觀',
    t3: '名宅風格<br/>豪邸巨匠'
  },
];
</script>
