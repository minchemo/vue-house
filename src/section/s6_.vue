<template>
  <article class="s6">
    <div class="a">
      <div class="left">
        <div class="t">
          <div class="t1" data-aos="fade-up" data-aos-delay="0">泰嘉引進國際 回到在地</div>
          <img src="@/section/ring.svg" class="ring1" alt="" srcset="">
        </div>
        <img class="team" src="@/section/s6_/team.svg" data-aos="fade-up" data-aos-delay="200"  alt="" srcset="">
      </div>
      <div class="divid" v-if="!$isMobile()"></div>
      <div class="right" data-aos="fade-up" data-aos-delay="200" v-if="!$isMobile()">
        泰嘉以高標準展現對美學品質的要求，超前南台灣，<br>
        創下在首購產品即合作國內外知名設計團隊的紀錄，<br>
        攜手紐約Handel Architects、新加坡Aedas，日本Tange團隊設計能量，<br>
        並邀集國內頂尖人才呂建勳、羅耕甫等大師共創美學火花，<br>
        拓寬了同級新視野，展現出泰嘉將建築推向世界格局的企圖心！
      </div>
    </div>
    <div class="b">
      <div class="guys">
        <div class="guy" v-for="guy in images">
          <img :src="guy.image" alt="" srcset="">

          <template v-if="$isMobile()">
            <div class="flex flex-col f">
              <div class="t1" data-aos="fade-up" data-aos-delay="0">{{ guy.t1 }}</div>
              <div class="t2" data-aos="fade-up" data-aos-delay="200" v-html="guy.t2"></div>
            </div>
          </template>
          <template v-else>
            <div class="t1" data-aos="fade-up" data-aos-delay="0">{{ guy.t1 }}</div>
            <div class="t2" v-html="guy.t2" data-aos="fade-up" data-aos-delay="200"></div>
          </template>
        </div>
      </div>
    </div>
    <div class="m-content" v-if="$isMobile()">
      泰嘉以高標準展現對美學品質的要求，超前南台灣，<br>
創下在首購產品即合作國內外知名設計團隊的紀錄，<br>
攜手紐約Handel Architects、新加坡Aedas，<br>
日本Tange團隊設計能量，<br>
並邀集國內頂尖人才呂建勳、<br>
羅耕甫等大師共創美學火花，<br>
拓寬了同級新視野，<br>
展現出泰嘉將建築推向世界格局的企圖心！
    </div>
    <div class="c"></div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  @apply flex flex-col items-center justify-end font-['noto_sans_tc'] text-white relative;
  width: 100%;
  height: size(1080);
  background-image: url('@/section/s6_/bg.jpg');
  background-size: auto 100%;
  background-position: center right;
  background-repeat: no-repeat;

  .a {
    @apply flex justify-center items-center;
    .left {
      @apply flex flex-col;
      gap: size(40);
      .t {
        @apply flex;
        gap: size(39);
        .t1{
          font-weight: 700;
          font-size: size(40);
          line-height: size(58);
          letter-spacing: 0.07em;}
        .ring1 {
          width: size(48);
        }
      }
      .team {
        width: size(525);
      }
    }
    .divid {
      width: size(1);
      height: size(232);
      background-color: #fff;
      margin-left: size(155);
      margin-right: size(130);
    }
    .right {
      font-weight: 400;
      font-size: size(20);
      line-height: size(34);
      letter-spacing: 0.07em;
    }
  }
  .b {
    margin-top: size(44);
    .guys {
      @apply flex;
      gap: size(27);
      .guy {
        @apply relative;
        width: size(204);
        height: size(391);
        background-color: rgba(0,0,0,.18);
        img {
          width: 100%;
        }
        .t1{
          font-weight: 500;
          font-size: size(25);
          line-height: size(36);
          letter-spacing: 0.07em;
          margin-top: size(8);
          padding-left: size(16);
        }
        .t2 {
          padding-left: size(16);
          font-weight: 400;
          font-size: size(18);
          line-height: size(29);
        }
        &::after {
          content: '';
          width: size(2);
          height: size(95.2);
          background-color: #FF0000;
          position: absolute;
          left: size(7.6);
          bottom: size(36.5);
        }
      }
    }
  }
  .c {
    margin-top: size(20);
    background-image: url('@/section/s6_/bot.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: size(300);
  }
  
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
  @apply flex flex-col items-center justify-start font-['noto_sans_tc'] text-white relative;
  height: size-m(1245);
  background-image: url('@/section/s6_/bgm.jpg');
  padding-top: size-m(25);

  .a {
    @apply flex-col;
    .left {
      @apply flex flex-col;
      gap: size-m(17);
      .t {
        @apply flex-col items-center;
        gap: size-m(12);
        .t1{  
          font-size: size-m(20);
          line-height: size-m(29);
          letter-spacing: 0.07em;
        }
        .ring1 {
          width: size-m(18);
        }
      }
      .team {
        width: size-m(294.16);
      }
        }
  }
  .b {
    margin-top: size-m(33.89);
    .guys {
      @apply grid grid-cols-2;
      gap: size-m(6);
      row-gap: 0;
      .guy {
        @apply flex;
        width: size-m(149);
        height: size-m(97);
        
        img {
          width: size-m(71.7);
          height: size-m(97);
          margin: unset;
        }
        .t1{
          font-size: size-m(13);
          line-height: size-m(19);
          letter-spacing: 0.07em;
          margin-top: size-m(16.7);
          padding-left: size-m(3.5);
        }
        .t2 {
          padding-left: size-m(3.5);
          font-size: size-m(12);
          line-height: size-m(19);
        }
        &::after {
          content: '';
          width: size-m(21.09);
          height: size-m(2);
          position: absolute;
          left: size-m(66.42);
          bottom: size-m(86.46);
        }
        &:nth-child(3), &:nth-child(4) , &:nth-child(7) {
            @apply flex-row-reverse;
          .t1, .t2 {
            @apply text-right;
          padding-left: 0;
          padding-right: size-m(3.5);
          }
        }
      }
    }
  }
  .m-content {
    margin-top: size-m(25);
    width: size-m(323);
    text-align: center;
    font-weight: 400;
font-size: size-m(12);
line-height:  size-m(23);
letter-spacing: 0.07em;
white-space: nowrap;
  }
  .c {
    margin-top: size-m(67);
    background-image: url('@/section/s6_/botm.jpg');
    width: size-m(348);
    height: size-m(354);
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const images = [
  {
    image: new URL("../section/s6_/1.jpg", import.meta.url).href,
    t1: '紐約',
    t2: 'Gary Handel',
  },
  {
    image: new URL("../section/s6_/2.jpg", import.meta.url).href,
    t1: '紐約',
    t2: 'Allen Cheng',
  },
  {
    image: new URL("../section/s6_/3.jpg", import.meta.url).href,
    t1: '新加坡',
    t2: 'Steven Thor',
  },
  {
    image: new URL("../section/s6_/4.jpg", import.meta.url).href,
    t1: '新加坡',
    t2: 'Keith Griffiths',
  },
  {
    image: new URL("../section/s6_/5.jpg", import.meta.url).href,
    t1: 'Tange',
    t2: '丹下憲孝',
  },
  {
    image: new URL("../section/s6_/6.jpg", import.meta.url).href,
    t1: '台北 呂建勳',
    t2: isMobile ? '呂建勳<br>建築師事務所<br>哈佛建築大師' : '呂建勳建築師事務所<br>哈佛建築大師',
  },
  {
    image: new URL("../section/s6_/7.jpg", import.meta.url).href,
    t1: '高雄 羅耕甫',
    t2: isMobile ? '橙田建築<br>室研所<br>地景藝術大師' : '橙田建築│室研所<br>地景藝術大師',
  },
];
</script>
