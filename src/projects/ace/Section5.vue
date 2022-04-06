<template>
  <div class="section5">
    <img loading="lazy" src="./s5/bg.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isPC">
    <!-- <img src="./mo/w2.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isMobile"> -->
    <div class="bg" v-if="isMobile"></div>
    <div class="txt">
    <div class="title" data-aos="fade-down" data-aos-delay="100">
      四大王牌
    </div>
    <h1 class="subtitle" v-if="isPC" data-aos="fade-down" data-aos-delay="200">
      國際團隊打造 時尚精品飯店宅
    </h1>
    <h1 class="subtitle" v-if="isMobile" data-aos="fade-down" data-aos-delay="200">
      國際團隊打造<br />時尚精品飯店宅
    </h1>
    </div>
   <!-- <div class="desc flex-c" data-aos="fade-down" data-aos-delay="300">
      買名牌包 不如收藏精品宅
    </div> -->
    <div class="imgs flex-ac flex-jb wrap">
      <div @click="showDialog(0)" data-aos="fade-down" data-aos-delay="400"><img src="./s5/1.jpg" :alt="`${info.caseName}_img1`"></div>
      <div @click="showDialog(1)" data-aos="fade-down" data-aos-delay="500"><img src="./s5/2.jpg" :alt="`${info.caseName}_img2`"></div>
      <div @click="showDialog(2)" data-aos="fade-down" data-aos-delay="600"><img src="./s5/3.jpg" :alt="`${info.caseName}_img3`"></div>
      <div @click="showDialog(3)" data-aos="fade-down" data-aos-delay="700"><img src="./s5/4.jpg" :alt="`${info.caseName}_img4`"></div>
    </div>
    <div :class="`dialog ${isDialog ? 'active' : ''}`">
      <img loading="lazy" src="./all/close.png" :alt="`${info.caseName}_close`" class="dialog-close" @click="isDialog = false">
      <div class="dialog-content">
        <div class="dialog-toptitle" v-html="dialogData.toptitle"></div>
        <h2 class="dialog-title" v-html="dialogData.title"></h2>
        <h1 class="dialog-subtitle" v-html="dialogData.subtitle"></h1>
        <div class="dialog-label flex-ac" v-html="dialogData.label"></div>
        <div class="dialog-desc" v-html="dialogData.desc"></div>
        <div class="dialog-work" v-html="dialogData.work"></div>
        <div class="dialog-imgs" v-if="isPC">
          <div><img loading="lazy" :src="dialogData.imgs[0].img" :alt="`${info.caseName}_img`">
            <div class="dialog-name" v-html="dialogData.imgs[0].name"></div>
          </div>
          <div><img loading="lazy" :src="dialogData.imgs[1].img" :alt="`${info.caseName}_img`">
            <div class="dialog-name" v-html="dialogData.imgs[1].name"></div>
          </div>

        </div>
        <div class="dialog-imgs" v-if="isMobile">
          <div class="img-item">
            <img loading="lazy" :src="dialogData.imgs[0].img" :alt="`${info.caseName}_img`">
            <div class="dialog-name" v-html="dialogData.imgs[0].name"></div>
          </div>

          <div class="img-item">
            <img loading="lazy" :src="dialogData.imgs[1].img" :alt="`${info.caseName}_img`">
            <div class="dialog-name" v-html="dialogData.imgs[1].name"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.dialog-subtitle {
  color: #c7a26e;
  span {
    font-family: 'Noto Serif TC', serif;
    color: #fff;
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg {
  @include img_c_pc(1655, 0);
  height: 102%;
}

.txt{
  @include img_c_pc(580, 123);
  top: calc(50% + 100vw * (160 - 540) / 1920);
  width: 100%;
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  line-height: 1.4;
}
.title {
  font-size:1.5em;
  color: #285065;
  white-space: nowrap;
}

.subtitle {
  font-size:1.6em;
  font-weight: 900;
  color: #685335;
  margin: 0.1em 0 0.33em 0;
}

.desc {
  font-size:1em;
  letter-spacing:-0.04em;
  color: #ffffff;
  background-color: #685335;
  line-height: 1.5;
  padding: 0.2em 0.7em;
}

.imgs {
  @include div_c_pc(302 * 4 + 28 * 3, 400, 385);
  top: calc(50% + 100vw * (400 - 540) / 1920);

  div {
    width: size(302);
    cursor: pointer;
    img {
      width: 100%;
      transition: transform 1s;
    }
    &:hover img {
      transform: rotateY(-360deg);
    }
  }
}

.dialog {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  left: 100%;
  top: 0;
  transition: left 1s;
  z-index: 1000;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;

  &.active {
    left: 0;
  }
  .dialog-content {
    position: relative;
    width: 90%;
    max-width: size(1270);
    height: 90%;
    max-height: size(852);
    padding: 0 30% 0 0;
    background-color: #0000;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;

    font-stretch: normal;
    font-style: normal;
    text-align: justify;
    letter-spacing: normal;
    line-height: 1.6;
    color: #ffffff;
  }
  .dialog-toptitle {
    width: 100%;
    font-size: size(25);
    font-weight: 500;
    letter-spacing: 0.05em;
    color: #ffffff;
    margin: 0 0 -0.5em 0;
  }
  .dialog-title {
    width: 100%;
    font-size: size(90);
    font-weight: 900;
    color: #ffffff;
    margin: 0 0 -0.1em 0;
  }

  .dialog-subtitle {
    width: 100%;
    font-size: size(48);
    font-weight: 900;
    line-height: 1.2;
    color: #c4a06d;

    span {
      color: #fff;
    }
  }

  .dialog-label {
    font-size: size(30);
    font-weight: 500;
    background-color: #c7a26e;
    white-space: nowrap;
    padding: 0 0.5em;
    margin: 0.7em 0;
  }

  .dialog-desc {
    font-size: size(24);
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #fff;
    text-align: justify;
    width: 90%;
    // white-space: nowrap;
  }

  .dialog-work {
    font-size: size(27);
    width: 90%;
    font-weight: 700;
    line-height: 1.48;
    letter-spacing: 0.02em;
    text-align: justify;
    color: #c7a26e;
    // white-space: nowrap;
  }

  .dialog-imgs {
    @include img_r_pc(600, 0, 0);
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      position: relative;
      flex: 1 1 48%;
      height: 48%;
      margin: size(10) 0;
    }

    img {
      width: auto;
      border-radius: size(45);
      height: 100%;
    }

    .dialog-name {
      position: absolute;
      right: 1em;
      bottom: 1em;
      font-size: size(22);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.35;
      letter-spacing: normal;
      text-align: right;
      color: #ffffff;
      white-space: nowrap;
    }
  }

  .dialog-close {
    width: size(61);
    top: size(40);
    right: size(49);
    position: absolute;
    cursor: pointer;
    z-index: 5;
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section5 {
    width: 100%;
    height:auto;
    //height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
  }

  .bg {
    @include img_r_m(375, 0, 0);
    left: 50%;transform: translateX(-50%);
    background: #fff;
    height: 100%;
  }
.txt{
  position: relative;
  width:  sizem(310);
  top: sizem(40);
  font-size: sizem(15);
}
  .imgs {
    @include img_c_m(330, 0);
    height:auto;
    position: relative;
    flex-wrap: wrap;
    margin-top:sizem(60);

    > div {
      position: relative;
      flex: 1 1 40%;
      height:auto;
      margin: sizem(10);
    }
  }

  .dialog {
    .dialog-content {
      width: sizem(310);
      max-width: sizem(310);
      height: sizem(580);
      max-height: sizem(580);
      padding: 0 0 sizem(170) 0;
    }
    .dialog-toptitle {
          font-size: sizem(20);
      }
    .dialog-title {
      font-size: sizem(40);
    }

    .dialog-subtitle {
      font-size: sizem(27);

      span {
        color: #fff;
      }
    }

    .dialog-label {
      font-size: sizem(15);
    }

    .dialog-desc {
      font-size: sizem(15);
      width: 100%;
    }

    .dialog-work {
      font-size: sizem(15);
      width: 100%;
    }

    .dialog-imgs {
      width: 120%;
      height: sizem(143);
      flex-direction: row;
      top: auto;
      bottom: sizem(30);
      left: -10%;
      right: auto;
      // padding: 0 sizem(35);
      display: flex;
      align-items: center;
      overflow-x: scroll;
      .img-item {
        height: 100%;
        margin: 0 sizem(-15) 0 sizem(30);
        /* min-width: sizem(206);
        margin-bottom: 0;
        margin-right: sizem(15);
        border-radius: size(10);
        position: relative;*/
        img {
          width: auto;
          height: 100%;
        }
      }

      .dialog-name {
        font-size: sizem(12);
      }
    }

    .dialog-close {
      width: sizem(30);
      top: sizem(33);
      right: sizem(36);
      position: absolute;
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section5',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogData: {
        imgs: [
          {
            img: require('./s5/1-1.jpg'),
            name: '北京 水立方',
          },
          {
            img: require('./s5/1-2.jpg'),
            name: '碧波白',
          },
        ],
      },
      item_list: [
        {
          toptitle: '建築王牌',
          title: 'Andrew Forst',
          subtitle: '國際級建築贏家<br /><span>PTW</span>王牌登場',
          label: '131年澳洲建築設計先驅‧不是王牌不出手',
          desc:
            '超越一世紀建築經驗，PTW僅精挑地王打造國際級地標建築，以高度美學語彙雋永鑄刻，每一出手必締造令人驚豔的傳世經典。「太陽帝國」王牌造型積層堆疊出碩大宏偉外觀，以36層雲端高度擎起建築美學新標竿，是大台北的第一次，更是台灣建築史上嶄新的一次。',
          work:
            '代表作品：One Central Park、雪梨Lumiere北京 水立方、杜拜 Paim Jebel',
          imgs: [
            {
              img: require('./s5/1-1.jpg'),
              name: '北京 水立方',
            },
            {
              img: require('./s5/1-2.jpg'),
              name: '碧波白',
            },
          ],
        },
        {
          toptitle: '燈光王牌',
          title: '林朗菴',
          subtitle: '<span>燈光巨擘</span>蘭克斯<br />王牌天廈全城聚焦',
          label: '36層鋼骨地標耀眼世界‧不容忽視的豔羨目光',
          desc:
            '從台北101到仁愛帝寶，蘭克斯以半世紀燈光專業，點亮無數國際級建築地標。隨時段靈動調整的光線層次角度，映照出建築最美的光影，創造的不只是雋永美學價值，更凝聚出全城仰望的城市地景，為旅人指引回家的方向。',
          work: '代表作品：台北101、仁愛帝寶、W Hotel<br />澳門威尼斯人酒店',
          imgs: [
            {
              img: require('./s5/2-1.jpg'),
              name: '仁愛帝寶',
            },
            {
              img: require('./s5/2-2.jpg'),
              name: '台北101',
            },
          ],
        },
        {
          toptitle: '空間王牌',
          title: '袁世賢',
          subtitle: '史上最華麗展演<br />盛情款待<span>王與后</span>',
          label: '美國Muse大獎．百年一遇精品訂製空間',
          desc:
            '德國iF DESIGN、German Design Award、義大利A’Design大獎設計名師袁世賢，以生活的立體感知為基底，透過光影轉換借景入境，讓太陽帝國休閒會所不僅是頂級社交休閒場域，更成為家的空間延展，散發無限美學張力。',
          work: '代表作品：台北美麗信花園酒店、台南煙波大飯店、桂田磐古、璽園、山水裊裊',
          imgs: [
            {
              img: require('./s5/3-1.jpg'),
              name: '山水裊裊',
            },
            {
              img: require('./s5/3-2.jpg'),
              name: '台南煙波酒店',
            },
          ],
        },
        {
          toptitle: '景觀王牌',
          title: '徐世萃',
          subtitle: '信義豪宅御用<br /><span>景觀生態</span>之王',
          label: '國際建築視野‧城市花園綠藝新觀',
          desc:
            '信義豪宅御用，專為頂級建築打造會呼吸的城市綠帶，完美融合建築物與環境界線，使空間與土地產生最自然連結。戶外庭園不只是家向世界延伸的舞台，更是城市中具永續生態視野的最美地景。',
          work: '代表作品：維多利亞酒店、碧波白、甲山林-城上城、希望城市、富春居、墾丁凱薩大飯店',
          imgs: [
            {
              img: require('./s5/4-1.jpg'),
              name: '維多利亞酒店',
            },
            {
              img: require('./s5/4-2.jpg'),
              name: '碧波白',
            },
          ],
        },
      ],
    }
  },

  methods: {
    showDialog(index) {
      this.dialogData = this.item_list[index]
      this.slideList = this.item_list[index].imgs
      this.isDialog = true
    },
  },

  created() {},

  mounted() {
    this.dialogData = this.item_list[0]
  },

  computed: {},
}
</script>
