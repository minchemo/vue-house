<template>
  <article class="s9 font-['noto_sans_tc']">
    <div class="text-box">
      <img class="t1" v-if="!$isMobile()" src="@/section/s12/title.svg" alt="" data-aos="fade-up" data-aos-delay="0">
      <img class="t1" v-if="$isMobile()" src="@/section/s12/title_m.svg" alt="" data-aos="fade-up" data-aos-delay="0">

      <div v-if="!$isMobile()" class="content" data-aos="fade-up" data-aos-delay="400">
        泰嘉以高標準展現對美學品質的要求，超前南台灣，<br>
        創下在首購產品即合作國內外知名設計團隊的紀錄，<br>
        攜手紐約Handel Architects、新加坡Aedas，日本Tange團隊設計能量，<br>
        並邀集國內頂尖人才呂建勳、羅耕甫等大師共創美學火花，<br>
        拓寬了同級新視野，展現出泰嘉將建築推向世界格局的企圖心！
      </div>
      <div v-if="$isMobile()" class="content" data-aos="fade-up" data-aos-delay="400">
        泰嘉以高標準展現對美學品質的要求，超前南台灣，<br>
        創下在首購產品即合作國內外知名設計團隊的紀錄，<br>
        攜手紐約Handel Architects、新加坡Aedas，<br>
        日本Tange團隊設計能量，並邀集國內頂尖人才<br>
        呂建勳、羅耕甫等大師共創美學火花，<br>
        拓寬了同級新視野，<br>
        展現出泰嘉將建築推向世界格局的企圖心！
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
    <img class="decor" src="@/section/s12/decor.png" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
  position: relative;
  width: 100%;
  height: size(1000);
  background-color: #DCDCDD;

  .text-box {
    position: absolute;
    top: size(100);
    left: size(151);
    text-align: left;
    z-index: 5;

    .t1{
      width: size(1026);
      margin-bottom: size(50);
    }

    .title {
      font-weight: 700;
      font-size: size(40);
      line-height: size(58);
      letter-spacing: 0.07em;
      
    }

    .content {
      font-weight: 400;
      font-size: size(20);
      line-height: size(38);
      letter-spacing: 0.07em;
      color: #595757;
    }
  }

  .guys {
    position: absolute;
    bottom: size(50);
    left: size(151);
    display: flex;
    align-items: flex-end;
    gap: size(7.5);
    z-index: 5;

    .guy {
      position: relative;
      display: flex;
      flex-direction: column;
      color: #595757;

      &.large {

        .avatar {
          width: size(448);
          height: size(578);
        }
      }

      .avatar {
        width: size(220);
        height: size(347.63);
        background-size: cover;
        margin-bottom: size(30);
      }

      .text {
        padding-left: size(20);

        .t1 {
          font-weight: 500;
          font-size: size(27);
          letter-spacing: 0.07em;
          margin-right: size(10);
        }

        .t2 {
          font-weight: 400;
          font-size: size(18);
        }

        .t3 {
          font-weight: 400;
          font-size: size(15);
          margin-top: size(2);
        }
      }

      &:after {
        content: '';
        width: size(1);
        height: size(76);
        background-color: #67BDE0;
        position: absolute;
        left: size(10);
        bottom: size(60);
      }
    }
  }

  .decor {
    position: absolute;
    top: size(200);
    right: size(65);
    width: size(1039);
    opacity: 1;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
    height: size-m(1438);
    padding: size-m(30) 0;

    .text-box {
      position: relative;
      top: size-m(40);
      left: auto;
      text-align: center;
      margin-bottom: size-m(37);
      z-index: 1;

      .t1{
      width: size-m(300);
      margin-bottom: size-m(30);
    }

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
      top: size-m(40);

      left: size-m(30);
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
        flex-direction: row;
        color: #595757;

        &.large {

          .avatar {
            width: size-m(375);
            height: size-m(178);
            margin-bottom: size-m(10);
          }

          .text {
            position: absolute;
            right: size-m(26);
            top: size-m(63);
          }
        }

        .avatar {
          width: size-m(99);
          height: size-m(127);
          margin-bottom: size-m(5);
        }

        .text {
          padding-left: size-m(15);
          padding-top: size-m(20);
          margin-right: size-m(50);

          .t1 {
            font-size: size-m(20);
            margin-right: size-m(5);
            margin-bottom: size-m(5);
          }

          .t2 {
            font-size: size-m(15);
          }

          .t3 {
            font-weight: 400;
            font-size: size-m(12);
            margin-top: size-m(0);
          }
        }

        &:after {
          content: '';
          width: size-m(50);
          height: size-m(1);
          left: size-m(90);
          top: size-m(15);
        }
      }
    }

    .decor {
      top: size-m(40);
      left: size-m(0);
      width: size-m(365);
    }
  }
}
</style>
<script setup>
const images = [
  {
    image: new URL("../section/s12/1.jpg", import.meta.url).href,
    t1: '紐約',
    t2: 'Handel Architects',
    t3: 'Gary Handel'
  },
  {
    image: new URL("../section/s12/2.jpg", import.meta.url).href,
    t1: '紐約',
    t2: 'Handel Architects',
    t3: 'Allen Cheng'
  },
  {
    image: new URL("../section/s12/3.jpg", import.meta.url).href,
    t1: '新加坡',
    t2: 'Aedas',
    t3: 'Steven Thor'
  },
  {
    image: new URL("../section/s12/4.jpg", import.meta.url).href,
    t1: '新加坡',
    t2: 'Aedas',
    t3: 'Keith Griffiths'
  },
  {
    image: new URL("../section/s12/5.jpg", import.meta.url).href,
    t1: '日本',
    t2: 'Tange',
    t3: '丹下憲孝'
  },
  {
    image: new URL("../section/s12/6.jpg", import.meta.url).href,
    t1: '台北 呂建勳',
    t2: '建築外觀',
    t3: '哈佛建築大師'
  },
  {
    image: new URL("../section/s12/7.jpg", import.meta.url).href,
    t1: '高雄 羅耕甫 ',
    t2: '橙田建築│室研所',
    t3: '地景藝術大師'
  },
];

const images_m = [
  {
    image: new URL("../section/s12/1.jpg", import.meta.url).href,
    t1: '紐約',
    t2: 'Handel Architects',
    t3: 'Gary Handel'
  },
  {
    image: new URL("../section/s12/2.jpg", import.meta.url).href,
    t1: '紐約',
    t2: 'Handel Architects',
    t3: 'Allen Cheng'
  },
  {
    image: new URL("../section/s12/3.jpg", import.meta.url).href,
    t1: '新加坡',
    t2: 'Aedas',
    t3: 'Steven Thor'
  },
  {
    image: new URL("../section/s12/4.jpg", import.meta.url).href,
    t1: '新加坡',
    t2: 'Aedas',
    t3: 'Keith Griffiths'
  },
  {
    image: new URL("../section/s12/5.jpg", import.meta.url).href,
    t1: '日本',
    t2: 'Tange',
    t3: '丹下憲孝'
  },
  {
    image: new URL("../section/s12/6.jpg", import.meta.url).href,
    t1: '台北 呂建勳',
    t2: '建築外觀',
    t3: '哈佛建築大師'
  },
  {
    image: new URL("../section/s12/7.jpg", import.meta.url).href,
    t1: '高雄 羅耕甫 ',
    t2: '橙田建築│室研所',
    t3: '地景藝術大師'
  },
];
</script>
