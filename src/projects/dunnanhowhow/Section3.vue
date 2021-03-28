<template>
  <!-- 區塊3, 4, 5 合併 -->
  <div class="section3">
    <div class="bg relative">
      <div></div>
      <div v-if="!isMobile">
        <div id="section3">
          <div class="img-bg p1">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="0.5" direction="down">
            <img class="js-parallax" data-parallax="0" src="./s3/bg1.png" alt />
            <img class="js-parallax" data-parallax="1" src="./s3/bg2.png" alt  />
          </parallax>
           </div>
          <div class="img-bg p2">
          <parallax breakpoint="(min-width: 10px)" :speed-factor="0.7" direction="down">
            <img class="js-parallax" data-parallax="10" src="./s3/bg2.png" alt />
            <img class="js-parallax" data-parallax="2" src="./s3/bg1.png" alt />
          </parallax>
           </div>
          <div class="relative flex">
            <div class="left">
              <img src="./s3/信義商圈.jpg" alt class />
              <div class="img-title">信義商圈</div>
            </div>
            <div class="right">
              <div class="content">
                <div class="subtitle">Entertainment</div>
                <div class="title">娛樂處處任你行</div>
                <div class="desc">
                  鄰近六大娛樂商圈<br />
                  好逛 - 師大、永康<br />
                  好吃 - 公館、通化<br />
                  好玩 - 信義、忠孝
                </div>
              </div>
            </div>
          </div>
          <div class="relative flex">
            <div class="left">
              <img src="./s3/六張犁捷運站.jpg" alt class />
              <div class="img-title">六張犁捷運站</div>
            </div>
            <div class="right">
              <div class="content">
                <div class="subtitle">City Center</div>
                <div class="title">鬧中取靜真天龍</div>
                <div class="desc">
                  捷運步行5分鐘 環繞21條公車線<br />
                  3捷 - 板南線、信義線、文湖線<br />
                  4快 - 建國、基隆高架、環東大道、水源快速<br />
                  1高 - 北二高
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section4">
          <div class="img-bg p3">
          <parallax breakpoint="(min-width: 80px)" :speed-factor="0.6" direction="down">
            <img class="js-parallax" data-parallax="2" src="./s3/bg3.png" alt />
            <img class="js-parallax" data-parallax="2" src="./s3/bg3.png" alt />
          </parallax>
           </div>
          <div class="relative flex" id="section4-1">
            <div class="left">
              <div :class="`slide slide1`" data-aos="fade" data-aos-delay="600">
                <div
                  v-for="(slide, index) in slideList1"
                  :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
                  :key="`s41-slide-${index}`"
                >
                  <img
                    :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
                    :src="slide.src"
                    alt
                  />
                  <div class="slide-text">
                    <div class="img-title">{{slideList1[slideIndex1].title}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="content">
                <div class="title">好居生活宅</div>
                <div class="desc" >食衣育樂一手抓，全方位生活機能，全聯、屈臣氏、康是美…藥妝超市任你逛！<br />
                大安運動中心周末運動好去處！<br />
                敦南綠蔭道、多處綠海公園漫步樂活步調！<br />
                通化、公館、師大夜市，美食揪團滿足你的胃！</div>
              </div>
            </div>
          </div>
          <div class="relative flex" id="section4-2">
            <div class="left">
              <div :class="`slide slide1`" data-aos="fade" data-aos-delay="600">
                <div
                  v-for="(slide, index) in slideList2"
                  :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
                  :key="`s41-slide-${index}`"
                >
                  <img
                    :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
                    :src="slide.src"
                    alt
                  />
                  <div class="slide-text">
                    <div class="img-title">{{slideList2[slideIndex2].title}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="content">
                <div class="title">好學人文宅</div>
                <div
                  class="desc"
                >鬧中取靜書卷香，大安國小、芳和實中、和平高中、台科大，頂尖學區，直至全台最高學府－台灣大學，穿梭巷弄咖啡香，一杯咖啡一本書，度過優閒下午時光。</div>
              </div>
            </div>
          </div>
          <div class="relative flex" id="section4-3">
            <div class="left">
              <div :class="`slide slide1`" data-aos="fade" data-aos-delay="600">
                <div
                  v-for="(slide, index) in slideList3"
                  :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`"
                  :key="`s41-slide-${index}`"
                >
                  <img
                    :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`"
                    :src="slide.src"
                    alt
                  />
                  <div class="slide-text">
                    <div class="img-title">{{slideList3[slideIndex3].title}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="content">
                <div class="title">好購時尚宅</div>
                <div class="desc">時尚名媛、都市型男必購天龍之心大安地段，敦南遠企旁俬藏珠寶盒，鄰近五光十色台北時尚基地信義商圈，逛街購物盡顯都會品味。</div>
              </div>
            </div>
          </div>
        </div>
        <div id="section5" class="relative">
          <!-- <parallax breakpoint="(min-width: 68px)" :speed-factor="0.06" direction="up">
          </parallax> -->
          <div class="s5-content">
            <div class="img-block relative">
              <div class="border"></div>
              <div class="img-title">3D示意圖僅供參考</div>
            </div>
            <div class="text">
              <div class="title">
                新跳島主義，
                <br />都會垂直森林新浪潮
              </div>
              <div class="desc">不只在陽台種樹，回歸人文角度，學習在水泥叢林與大自然有機共生。</div>
              <div class="title">
                  <span>精緻奢華21-24坪時尚宅</span><br />
                  3.6米挑高空間精品寓邸<br />
                  靜巷純3併戶戶雙面採光 　
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMobile">
        <div id="section3">
          <div class="relative">
            <img src="./s3/信義商圈.jpg" alt class="m-img" />
            <div class="img-title">信義商圈</div>
          </div>
          <div class="relative">
            <img src="./s3/mo/bg1.png" alt class="img-bg" />
            <img src="./s3/mo/bg2.png" alt class="img-bg" />
            <div class="right">
              <div class="content">
                <div class="subtitle">Entertainment</div>
                <div class="title">娛樂處處任你行</div>
                <div class="desc">
                  鄰近六大娛樂商圈
                  <br />好逛 - 師大、永康
                  <br />好吃 - 公館、通化
                  <br />好玩 - 信義、忠孝
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="./s3/六張犁捷運站.jpg" alt class="m-img" />
            <div class="img-title">六張犁捷運站</div>
          </div>
          <div class="relative">
            <img src="./s3/mo/bg2.png" alt class="img-bg" />
            <div class="right">
              <div class="content">
                <div class="subtitle">City Center</div>
                <div class="title">鬧中取靜真天龍</div>
                <div class="desc">
                  捷運步行5分鐘 環繞21條公車線
                  <br />3捷 - 板南線、信義線、文湖線
                  <br />4快 - 建國、基隆高架、
                  <br />　 　 環東大道、水源快速
                  <br />1高 - 北二高
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section4">
          <div class="relative" id="section4-1">
            <div :class="`slide slide1`" data-aos="fade" data-aos-delay="600">
              <div
                v-for="(slide, index) in slideList1"
                :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
                :key="`s41-slide-${index}`"
              >
                <img
                  :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
                  :src="slide.src"
                  alt
                />
                <div class="slide-text">
                  <div class="img-title">{{slideList1[slideIndex1].title}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="./s4/mo/bg1.png" alt class="img-bg" />
            <div class="right">
              <div class="content">
                <div class="title">好居生活宅</div>
                <div
                  class="desc"
                >食衣育樂一手抓，全方位生活機能，全聯、屈臣氏、康是美…藥妝超市任你逛！<br/>
                大安運動中心周末運動好去處！<br/>
                敦南綠蔭道、多處綠海公園漫步樂活步調！<br/>
                通化、公館、師大夜市，美食揪團滿足你的胃！</div>
              </div>
            </div>
          </div>
          <div class="relative" id="section4-2">
            <div :class="`slide slide1`" data-aos="fade" data-aos-delay="600">
              <div
                v-for="(slide, index) in slideList2"
                :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
                :key="`s41-slide-${index}`"
              >
                <img
                  :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
                  :src="slide.src"
                  alt
                />
                <div class="slide-text">
                  <div class="img-title">{{slideList2[slideIndex2].title}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative" id="section4-3">
            <img src="./s4/mo/bg1.png" alt class="img-bg" />
            <div class="right">
              <div class="content">
                <div class="title">好學人文宅</div>
                <div
                  class="desc"
                >鬧中取靜書卷香，大安國小、芳和實中、和平高中、台科大，頂尖學區，直至全台最高學府－台灣大學，穿梭巷弄咖啡香，一杯咖啡一本書，度過優閒下午時光。</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div :class="`slide slide1`" data-aos="fade" data-aos-delay="600">
              <div
                v-for="(slide, index) in slideList3"
                :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`"
                :key="`s41-slide-${index}`"
              >
                <img
                  :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`"
                  :src="slide.src"
                  alt
                />
                <div class="slide-text">
                  <div class="img-title">{{slideList3[slideIndex3].title}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="./s4/mo/bg1.png" alt class="img-bg" />
            <div class="right">
              <div class="content">
                <div class="title">好購時尚宅</div>
                <div class="desc">時尚名媛、都市型男必購天龍之心大安地段，敦南遠企旁俬藏珠寶盒，鄰近五光十色台北時尚基地信義商圈，逛街購物盡顯都會品味。</div>
              </div>
            </div>
          </div>
        </div>

        <div id="section5" class="relative">
          <div class="relative">
            <div class="img-title">3D示意圖僅供參考</div>
          </div>
          <div class="relative">
            <div class="right">
              <div class="content">
                <div class="title">
                  新跳島主義，
                  <br />都會垂直森林新浪潮
                </div>
                <div class="desc">不只在陽台種樹，回歸人文角度，學習在水泥叢林與大自然有機共生。</div>
                <div class="title">
                  <span>精緻奢華21-24坪時尚宅</span><br />
                  3.6米挑高空間精品寓邸<br />
                  靜巷純3併戶戶雙面採光
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: visible;
  background-image: url('./s3/bg.jpg');
  background-attachment: fixed;
  background-position:center top;
  margin: 0 120px 0 0;
}

.Masthead {
  z-index: 3;
}

.img-bg {
  width: 100% !important;
  margin: 0 auto;
  height: 100%;
  position: absolute;
  right:0;
  top: 0;
  object-fit: cover;
  display: block;
  &.p1{
  top:-30vw;
  div img:nth-child(2) {
    opacity: 0
  }}
  &.p2{
  top: -22vw;
  div img:nth-child(2) {
    opacity: 0
  }}
  &.p3{
  top: 2vw;}
  &.img-s5-3{
  animation: an 2s infinite alternate;
  transform: translateY(-1.5%);}
  &.img-s5-4{
  animation: an 2s infinite alternate;
  transform: translateY(-3%);}
}
@keyframes an{
    to {
      transform: translateY(0);
    }
}

.img-title {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height:2.3em;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  );
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #ffffff;
  text-align: right;
  padding: 5px 10px 0 0;
  z-index: 3;
}

.subtitle {
  font-size: calc(100vw * 21 / 1920);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: 2.52px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 10px;
  font-family: 'Didot';
  font-style: italic;
}

.title {
  font-size: calc(100vw * 36 / 1920);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 6.48px;
  text-align: left;
  color: #b8a57e;
  margin-bottom: 10px;
}

.desc {
  font-size: calc(100vw * 18 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 10px;
  width: calc(100vw * 450 / 1920);
}

.img-bg{position: absolute;top: 0;right: 0;}
.flex{display: flex;}
.left {
  width: calc(100vw * 1213 / 1920);
  flex:1 1 auto;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: calc(100vw * 801 / 1920);
  }
}
.right {
  width: calc(100vw * 707 / 1920);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding:0 0 0 calc(100vw * 90 / 1920);box-sizing:border-box;
  
}
#section4{
  .desc{width: 24em;}
}
.s5-content {
  position: absolute;
  width: calc(100vw * 1300 / 1920);
  bottom: 15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .img-block {
    width: calc(100vw * 800 / 1920);
    img {
      width: 100%;
      position: relative;
      z-index: 2;
    }

    .border {
      border: 3px solid rgba(186, 151, 116, 0.5);
      transform: translate(-10px, 10px);
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .text {
  }

  .title {
    font-size: calc(100vw * 29 / 1920);
    line-height: 1.56;
    text-align: justify;
    letter-spacing:0.3em;
      span{letter-spacing:0.255em;}
  }
}

#section4 .content {
}

#section5 .img-bg {
  &:nth-child(1) {
    position: relative;
    height: calc(100vw * 1060 / 1920);
    object-fit:initial;
  }
}

.is-parallax{transition: all 0.3s;}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: 100% calc(100vh - 63px);
    background-image: url('./s3/mo/bg.jpg');
    margin: 0;
  }

  .m-img {
    width: 100vw;
    height: auto;
  }

  .right {
    position: absolute;
    top: 50px;
    left: auto;
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
  }

  .img-bg {
    width: 100vw !important;
    margin: 0 auto;
    height: auto !important;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    display: block;

    &:nth-child(1) {
      position: relative;
    }
  }

  .subtitle {
    font-size: calc(100vw * 21 / 375);
  }
  .title {
    font-size: calc(100vw * 36 / 375);
  }
  .desc {
    font-size: calc(100vw * 18 / 375);
  width:auto;
  }

  #section4,
  #section5 {
    .content {
      width: calc(100vw * 290 / 375);
      margin: 0 auto;
    }
  }
#section4 .desc{
    width: auto;
}
  #section5 {
    .img-bg {
      &:nth-child(1) {
        position: relative;
      }
    }
    .title {
      font-size: calc(100vw * 25 / 375);
      white-space: nowrap;
      letter-spacing: 2.4px;
      span{letter-spacing: 1.8px;}
    }
    .desc {
      margin-bottom: 20px;
    }
  }

.img-title {
      font-size:12px;
}
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import Parallax from '@/components/Parallax.vue'
export default {
  name: 'section3',
  components: {
    Parallax,
  },
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList1: [
        {
          title: '敦化南路綠蔭樹海',
          src: require('./s4/1/敦化南路綠蔭樹海1.jpg'),
        },
        {
          title: '敦化南路綠蔭樹海',
          src: require('./s4/1/敦化南路綠蔭樹海2.jpg'),
        },
        {
          title: '台大醉月湖',
          src: require('./s4/1/台大醉月湖5.jpg'),
        },
        {
          title: '基地附近綠蔭街廓',
          src: require('./s4/1/基地附近綠蔭街廓4.jpg'),
        },
        {
          title: '嘉興公園',
          src: require('./s4/1/嘉興公園5.jpg'),
        },
        {
          title: '大安運動中心',
          src: require('./s4/1/大安運動中心7.jpg'),
        },
      ],
      slideList2: [
        {
          title: '芳和實中',
          src: require('./s4/2/芳和實中1.jpg'),
        },
        {
          title: '和平實驗小學',
          src: require('./s4/2/和平實驗小學1.jpg'),
        },
        {
          title: '大安國小',
          src: require('./s4/2/大安國小3.jpg'),
        },
        {
          title: '台大',
          src: require('./s4/2/台大3.jpg'),
        },
        {
          title: '和平高中',
          src: require('./s4/2/和平高中4.jpg'),
        },
        {
          title: '台科大',
          src: require('./s4/2/台科大5.jpg'),
        },
      ],
      slideList3: [
        {
          title: '信義商圈',
          src: require('./s4/3/信義商圈.jpg'),
        },
        {
          title: '信義商圈',
          src: require('./s4/3/信義商圈1.jpg'),
        },
        {
          title: '台北101',
          src: require('./s4/3/台北101.jpg'),
        },
        {
          title: '遠企商圈',
          src: require('./s4/3/遠企商圈3.jpg'),
        },
        {
          title: '信義商圈',
          src: require('./s4/3/信義商圈4.jpg'),
        },
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
