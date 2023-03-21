<template>
  <article class="s9 font-['noto_sans_tc']">
    <div class="text-box">
      <div class="title text-white" data-aos="fade-up" data-aos-delay="0">
        建築精銳大師共聚
      </div>
      <div class="subtitle text-white" data-aos="fade-up" data-aos-delay="200">
        聯名共手創作
      </div>
      <img class="ring1" src="@/section/ring.svg" alt="">
      <div class="content" data-aos="fade-up" data-aos-delay="400">
        泰嘉把建築的思考理路拉長<br />
        從原始圖面到落地執行，不斷磨圖優化<br />
        堅持慢磨細工，對細節吹毛求疵<br />
        讓完美成為泰嘉的建築基因
      </div>
    </div>
    <div class="guys" v-if="$isMobile()">
      <div class="guy" v-for="guy in images_m">
        <div class="avatar" :style="{ backgroundImage: `url('${guy.image}')` }"></div>
        <div class="text">
          <div class="t2" data-aos="fade-up" data-aos-delay="200">{{ guy.t2 }}</div>
          <div class="t1" data-aos="fade-up" data-aos-delay="0">{{ guy.t1 }}</div>
          <div class="t3" v-html="guy.t3" data-aos="fade-up" data-aos-delay="400"></div>
        </div>
      </div>
    </div>
    <div class="guys" v-else>
      <div class="guy" v-for="guy in images">
        <div class="avatar" :style="{ backgroundImage: `url('${guy.image}')` }"></div>
        <div class="text">
          <div class="t1" data-aos="fade-up" data-aos-delay="0">{{ guy.t1 }}</div>
          <div class="t2" data-aos="fade-up" data-aos-delay="200">{{ guy.t2 }}</div>
          <div class="t3" v-html="guy.t3" data-aos="fade-up" data-aos-delay="400"></div>
        </div>
      </div>
    </div>
    <div class="work">
      <img src="@/section/s9/work.jpg" alt="" srcset="">
      <p>泰嘉近兩年完工業績 成屋實景</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
  position: relative;
  width: 100%;
  height: size(1080);
  background-image: url('@/section/s9/bg.jpg');
  background-size: cover;
  background-position: bottom;

  .text-box {
    position: absolute;
    top: size(157);
    left: size(136);
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
      transform:scaleX(-1);
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
    top: size(557);
    left: size(136);
    display: flex;
    align-items: flex-end;
    gap: size(9.75);

    .guy {
      position: relative;
      display: flex;
      flex-direction: column;
      color: #fff;

      .avatar {
        width: size(200.25);
        height: size(270.92);
        background-size: cover;
        margin-bottom: size(20);

        &:after {
          content: '';
          width: size(2);
          height: size(34);
          background-color: #FF0000;
          position: absolute;
          left: size(12);
          bottom: -#{size(19)};
        }
      }

      .text {
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
    }
  }

  .work {
    @apply absolute;
    width: size(839);
    height: size(692);
    right: 0;
    bottom: size(181);
    img {
      width: 100%;
    }
    p {
      font-weight: 400;
      font-size: size(15);
      line-height: size(22);
      text-align: right;
      letter-spacing: 0.07em;
      color: #6C6C6C;
      padding-right: size(10);
      margin-top: size(5);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
    height: size-m(795);
    padding: size-m(30) 0;
  background-image: url('@/section/s9/bgm.jpg');

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
        margin-bottom: size-m(10);
      }

      .content {
        font-size: size-m(12);
        line-height: 2;
      }
    }

    .guys {
      @apply relative grid grid-cols-2 top-0 left-0 items-start justify-center;
      row-gap: size-m(5);
      gap: size-m(5);
      width: size-m(304);
      margin: 0 auto;
      .guy {
        width: size-m(146);
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        color: #fff;

        .avatar {
          flex-basis: size-m(68);
          height: size-m(92);
          margin-bottom: 0;
          background-position: center;

          &:after {
            width: size-m(20);
            height: size-m(2);
            left: size-m(63);
            bottom: size-m(82)
          }
        }

        .text {
          @apply flex flex-col;
          padding-left: size-m(6);

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
          @apply hidden;
          content: none;
          
        }
      }
    }
  .work {
    @apply relative;
    width: size-m(340);
    height: size-m(270);
    right: 0;
    bottom:0;
    margin:  0 auto;
    margin-top: size-m(58.98);
    
    p {
      font-size: size-m(10);
      line-height: size-m(14);
      padding-right: 0;
      margin-top: size-m(5);
    }
  }

  }
}
</style>
<script setup>
const images = [
  {
    image: new URL("../section/s9/4.jpg", import.meta.url).href,
    t1: '呂金發',
    t2: '董事長',
    t3: '打造理想建築'
  },
  {
    image: new URL("../section/s9/3.jpg", import.meta.url).href,
    t1: '王東奎',
    t2: '建築外觀',
    t3: '名宅風格 豪邸巨匠'
  },
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
];

const images_m = [
  {
    image: new URL("../section/s9/3_m.jpg", import.meta.url).href,
    t1: '王東奎',
    t2: '建築外觀',
    t3: '名宅風格<br/>豪邸巨匠'
  },
  {
    image: new URL("../section/s9/4_m.jpg", import.meta.url).href,
    t1: '呂金發',
    t2: '董事長',
    t3: '打造理想建築',
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
];
</script>
