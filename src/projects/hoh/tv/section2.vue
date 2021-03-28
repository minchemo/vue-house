<template>
  <div>
    <div class="bg relative">
      <div
        v-if="!isMobile"
        class="container flex-ac flex-jb relative left"
      >
        <div class="container">
          <!-- 區塊1 -->
          <img
            src="./2/tit.png"
            alt=""
            class="title-img1"
          >
          <div class="title">
            今年聖誕節，要在THE VIEW<br />與妳一起閃亮
          </div>
          <div class="desc">
            全國最大聖誕活動，最密集百貨商圈慶典，國際旅人必訪景點，<br />世界知名雷射光雕秀，視覺驚艷歡樂無限，商城中軸優勢空前！
          </div>
          <img
            src="./2/img.jpg"
            alt=""
            class="img1"
          >

          <!-- 區塊2 -->
          <img
            src="./3/tit.png"
            alt=""
            class="title-img2"
          >
          <div class="title">
            傳奇地段難以被超越<br />200米就是府中商圈
          </div>
          <div class="desc">
            府中商圈，範圍涵蓋中山路一段、四川路、館前東西路、重慶路、國慶路，<br />
            過去是板橋最熱鬧的地段，也是全新北市唯一從舊商圈，<br />
            街邊店，特色名店，與流行文化，接軌國際時尚精品的超級夢幻地段！
          </div>
          <img
            src="./3/img1.jpg"
            alt=""
            class="img2"
          >
          <div class="imgs-six">
            <img
              src="./3/2-1.jpg"
              alt=""
            >
            <img
              src="./3/2-2.jpg"
              alt=""
            >
            <img
              src="./3/2-3.jpg"
              alt=""
            >
            <img
              src="./3/2-4.jpg"
              alt=""
            >
            <img
              src="./3/2-5.jpg"
              alt=""
            >
            <img
              src="./3/2-6.jpg"
              alt=""
            >
          </div>

          <!-- 區塊3 -->
          <div class="color">
            <img
              src="./4/tit.png"
              alt=""
              class="title-img3"
            >
            <div class="title">
              捷運那麼近，百貨這麼多<br />五星飯店多耀眼
            </div>
            <div class="desc">
              地段決勝權，眼界即世界，步行5分鐘府中捷運站，<br />
              區內Mega City大遠百，環球購物，誠品生活，<br />
              新板希爾頓，凱薩5星級酒店，新北信義大新板特區。
            </div>
            <img
              src="./4/img1.jpg"
              alt=""
              class="img2"
            >
            <div class="imgs-six">
              <img
                src="./4/2-1.jpg"
                alt=""
              >
              <img
                src="./4/2-2.jpg"
                alt=""
              >
              <img
                src="./4/2-3.jpg"
                alt=""
              >
              <img
                src="./4/2-4.jpg"
                alt=""
              >
              <img
                src="./4/2-5.jpg"
                alt=""
              >
              <img
                src="./4/2-6.jpg"
                alt=""
              >
            </div>
          </div>
          <!-- 區塊4 -->
          <img
            src="./5/tit.png"
            alt=""
            class="title-img4"
          >
          <div class="title">
            近500坪核心基地，75米雙塔地標<br />新板特區稀有無雙
          </div>
          <div class="desc">
            時尚小豪宅強勢回歸，首購唯一立可入主，超大門廳氣勢驚人，<br />崗石巨擎迴旋樓梯，巨盞水晶絕美高挑，與特區豪門齊賞落櫻之繽，小宅也潛藏豪宅靈魂！
          </div>
          <div class="imgs-three">
            <img
              src="./5/1.jpg"
              alt=""
            >
            <img
              src="./5/2.jpg"
              alt=""
            >
            <img
              src="./5/3.jpg"
              alt=""
            >
          </div>

          <!-- 區塊5 -->
          <img
            src="./6/tit.png"
            alt=""
            class="title-img5"
          >
          <div class="title">
            高層景觀飯店寓所，降板湯缸特仕版
          </div>
          <div class="desc">
            以極具國際飯店質感的遊創手法，令收藏家驚艷不已，<br />
            戶戶降版大湯缸，在新板吋土吋金的天秤前，泡湯享受成為生活幸福圖騰，<br />
            創造人生中最美好時光，妳值得THE VIEW寵愛妳
          </div>
          <img
            src="./6/img1.jpg"
            alt=""
            class="img6"
          >
          <div class="imgs-six">
            <img
              src="./6/2-1.jpg"
              alt=""
            >
            <img
              src="./6/2-2.jpg"
              alt=""
            >
            <img
              src="./6/2-3.jpg"
              alt=""
            >
            <img
              src="./6/2-4.jpg"
              alt=""
            >
            <img
              src="./6/2-5.jpg"
              alt=""
            >
            <img
              src="./6/2-6.jpg"
              alt=""
            >
          </div>

          <!-- 區塊6 -->
          <img
            src="./7/tit.png"
            alt=""
            class="title-img6"
          >
          <div class="title">
            收藏新板獨一無二<br />國宸建設用一塊土地，重拾生活幸福細節
          </div>
          <div class="desc">
            那些生活中的幸福，藏在每一天的細節裡，在社區門廳、在迴旋樓梯，<br />
            在主臥、在雙人共舞的客廳…這些生活體會的小事，慢慢凝聚成幸福的版圖，<br />
            對於土地，國宸看得見新價值，超越人生更大的版圖，是我們不斷追求的目標。
          </div>
          <img
            src="./7/img.jpg"
            alt=""
            class="img7"
          >

          <!-- 區塊7 -->
          <div class="contact-title">
            基本資料
          </div>
          <div class="contact-info">
            高層景觀飯店寓所 府中商圈200米 全新舉薦15-21坪<br />
            貴賓專線：<a href="tel:+886-2-29516688">02-29516688</a><br />
            接待會館：新北市板橋區四川路1段67號<br />
            個案官網：<a
              href="https://tv.h35.tw"
              target="_blank"
            >tv.h35.tw</a>
          </div>
        </div>
      </div>
      <div v-if="isMobile">
        <!-- 區塊1 -->
        <img
          src="./2/tit.png"
          alt=""
          class="title-img1"
        >
        <div class="title">
          今年聖誕節，要在THE VIEW<br />與妳一起閃亮
        </div>
        <div class="desc">
          全國最大聖誕活動，最密集百貨商圈慶典，國際旅人必訪景點，世界知名雷射光雕秀，視覺驚艷歡樂無限，商城中軸優勢空前！
        </div>
        <img
          src="./2/img.jpg"
          alt=""
          class="img1"
        >

        <!-- 區塊2 -->
        <img
          src="./3/tit.png"
          alt=""
          class="title-img2"
        >
        <div class="title">
          傳奇地段難以被超越<br />200米就是府中商圈
        </div>
        <div class="desc">
          府中商圈，範圍涵蓋中山路一段、四川路、館前東西路、重慶路、國慶路，過去是板橋最熱鬧的地段，也是全新北市唯一從舊商圈，街邊店，特色名店，與流行文化，接軌國際時尚精品的超級夢幻地段！
        </div>
        <div
          class="overscroll"
          @scroll="handleScroll1"
        >
          <div
            class="mask"
            v-show="showMask1"
          ></div>
          <img
            src="./箭頭.png"
            alt
            class="hand"
            v-show="showMask1"
          />
          <img
            src="./3/img1.jpg"
            alt=""
            class="img2"
          >
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.src"
              :class="`item-img`"
            />
          </swiper-slide>
        </swiper>

        <!-- 區塊3 -->
        <div class="color">
          <img
            src="./4/tit.png"
            alt=""
            class="title-img3"
          >
          <div class="title">
            捷運那麼近，百貨這麼多<br />五星飯店多耀眼
          </div>
          <div class="desc">
            地段決勝權，眼界即世界，步行5分鐘府中捷運站，區內Mega City大遠百，環球購物，誠品生活，新板希爾頓，凱薩5星級酒店，新北信義大新板特區。
          </div>
          <div
            class="overscroll"
            @scroll="handleScroll2"
          >
            <div
              class="mask"
              v-show="showMask2"
            ></div>
            <img
              src="./箭頭.png"
              alt
              class="hand"
              v-show="showMask2"
            />
            <img
              src="./4/img1.jpg"
              alt=""
              class="img2"
            >
          </div>
          <swiper
            :options="swiperOption"
            ref="mySwiper"
          >
            <swiper-slide
              v-for="(slide, index) in slideList2"
              :index="index"
              :key="slide.img"
              class="item"
            >
              <img
                :src="slide.src"
                :class="`item-img`"
              />
            </swiper-slide>
          </swiper>
        </div>

        <!-- 區塊4 -->
        <img
          src="./5/tit.png"
          alt=""
          class="title-img4"
        >
        <div class="title">
          近500坪核心基地，75米雙塔地標<br />新板特區稀有無雙
        </div>
        <div class="desc">
          時尚小豪宅強勢回歸，首購唯一立可入主，超大門廳氣勢驚人，崗石巨擎迴旋樓梯，巨盞水晶絕美高挑，與特區豪門齊賞落櫻之繽，小宅也潛藏豪宅靈魂！
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
        >
          <swiper-slide
            v-for="(slide, index) in slideList3"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.src"
              :class="`item-img height`"
            />
          </swiper-slide>
        </swiper>

        <!-- 區塊5 -->
        <img
          src="./6/tit.png"
          alt=""
          class="title-img5"
        >
        <div class="title">
          高層景觀飯店寓所<br />
          降板湯缸特仕版
        </div>
        <div class="desc">
          以極具國際飯店質感的遊創手法，令收藏家驚艷不已，戶戶降版大湯缸，在新板吋土吋金的天秤前，泡湯享受成為生活幸福圖騰，創造人生中最美好時光，妳值得THE VIEW寵愛妳
        </div>
        <img
          src="./6/img1.jpg"
          alt=""
          class="img6"
        >
        <swiper
          :options="swiperOption"
          ref="mySwiper"
        >
          <swiper-slide
            v-for="(slide, index) in slideList4"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.src"
              :class="`item-img`"
            />
          </swiper-slide>
        </swiper>

        <!-- 區塊6 -->
        <img
          src="./7/tit.png"
          alt=""
          class="title-img6"
        >
        <div class="title">
          收藏新板獨一無二<br />國宸建設用一塊土地<br />
          重拾生活幸福細節
        </div>
        <div class="desc">
          那些生活中的幸福，藏在每一天的細節裡，在社區門廳、在迴旋樓梯，在主臥、在雙人共舞的客廳…這些生活體會的小事，慢慢凝聚成幸福的版圖，對於土地，國宸看得見新價值，超越人生更大的版圖，是我們不斷追求的目標。
        </div>
        <img
          src="./7/img_m.jpg"
          alt=""
          class="img7"
        >

        <!-- 區塊7 -->
        <div class="contact-title">
          基本資料
        </div>
        <div class="contact-info">
          高層景觀飯店寓所 府中商圈200米 全新舉薦15-21坪<br />
          貴賓專線：<a href="tel:+886-2-29516688">02-29516688</a><br />
          接待會館：新北市板橋區四川路1段67號<br />
          個案官網：<a
            href="https://tv.h35.tw"
            target="_blank"
          >tv.h35.tw</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
.title-img1 {
  width: 406px;
  display: block;
  margin: 0 auto;
  margin: 116px auto 70px;
}

.title {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 2px;
  text-align: center;
  color: #000000;
  margin-bottom: 26px;
  font-family: 'Noto Serif TC', serif;
}

.desc {
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: 0.69px;
  text-align: center;
  color: #000000;
  margin: 0 auto;
}
.color {
  background-color: #ddd4cf;
  padding-top: 120px;
  padding-bottom: 15px;
  margin-bottom: 120px;
  width: 100vw;
  left: calc(50% - 50vw);
  position: relative;
}

.img1 {
  width: 91%;
  margin: 60px auto 120px;
  display: block;
}

.img6 {
  width: 91%;
  display: block;
  margin: 46px auto 22px;
}

.img7 {
  width: 91%;
  display: block;
  margin: 53px auto 95px;
}

.title-img2 {
  width: 508px;
  display: block;
  margin: 0 auto;
  margin-bottom: 73px;
}

.title-img3 {
  width: 406px;
  display: block;
  margin: 0 auto;
  margin-bottom: 66px;
}

.title-img4 {
  width: 334px;
  display: block;
  margin: 0 auto;
  margin-bottom: 75px;
}

.title-img5 {
  width: 257px;
  display: block;
  margin: 0 auto;
  margin-bottom: 67px;
}

.title-img6 {
  width: 424px;
  display: block;
  margin: 0 auto;
  margin-bottom: 39px;
}

.img2 {
  width: 1164px;
  margin: 60px auto 30px;
  display: block;
}

.imgs-six {
  width: 1165px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 102.5px;

  img {
    display: block;
    width: 375px;
    margin: 0 0 17.5px;
  }
}

.imgs-three {
  width: 91%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 120px;
  img {
    width: 389px;
  }
}

.contact-title {
  display: inline-block;
  padding: 0px 27.5px;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: 1.44px;
  text-align: center;
  color: #47266b;
  margin: 0 auto 20px;
  border-left: 1px solid #452765;
  border-right: 1px solid #452765;
}

.contact-info {
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: 1.2px;
  text-align: center;
  color: #000000;
  margin-bottom: 70px;
  a {
    color: #4a2969;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    height: auto;
    background-color: #fff;
  }

  .title-img1 {
    width: 188px;
    margin: 66px auto 22px;
  }

  .title-img2 {
    width: 223px;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .title-img3 {
    width: 188px;
    display: block;
    margin: 0 auto;
    margin-bottom: 13px;
  }

  .title-img4 {
    width: 147px;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    margin-top: 0;
  }

  .title-img5 {
    width: 111px;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    margin-top: 60px;
  }

  .title-img6 {
    width: 183px;
    display: block;
    margin: 66px auto 20px;
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-bottom: 35px;
  }

  .desc {
    width: 322px;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.75px;
    text-align: center;
    color: #000000;
    margin-bottom: 40px;
  }
  .color {
    padding-top: 66px;
    margin-bottom: 66px;
  }
  .img1 {
    margin-bottom: 66px;
  }
  .img2 {
    margin: 6px auto 30px;
  }
  .img1,
  .img6,
  .img7 {
    width: 100vw;
  }
  .img7 {
    margin-bottom: 40px;
  }

  .img2 {
    width: auto;
    height: size-m(626);
  }

  .overscroll {
    width: 100vw;
    overflow-y: hidden;
    overflow-x: scroll;
    position: relative;

    .mask {
      width: 200vw;
      height: size-m(626);
      position: absolute;
      top: 6px;
      left: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  .item-img {
    //  height: 214px;
    width: 100%;

    &.height {
      height: size-m(459);
    }
  }

  .swiper-container {
    margin-bottom: 16px;
  }

  .contact-title {
    display: inline-block;
    padding: 0px 11.5px;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 0.56px;
    text-align: center;
    color: #47266b;
    margin: 0 auto 10px;
  }

  .contact-info {
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-bottom: 35px;
    a {
      color: #4a2969;
    }
  }

  .hand {
    position: absolute;
    z-index: 2;
    display: block;
    width: 102px !important;
    height: auto !important;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 40% !important;
    display: block;
    animation: swing 2.5s ease-in-out 0s infinite;
  }
  @keyframes swing {
    0% {
      transform: translateX(20px);
    }

    50% {
      transform: translateX(-20px);
    }

    100% {
      transform: translateX(20px);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section2',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      showMask1: false,
      showMask2: false,
      swiperOption: {
        slidesPerView: isMobile ? 1.2 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 15 : 30,
        slidesPerColumn: isMobile ? 1 : 2,

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        { src: require('./3/2-1.jpg') },
        { src: require('./3/2-2.jpg') },
        { src: require('./3/2-3.jpg') },
        { src: require('./3/2-4.jpg') },
        { src: require('./3/2-5.jpg') },
        { src: require('./3/2-6.jpg') },
      ],

      slideList2: [
        { src: require('./4/2-1.jpg') },
        { src: require('./4/2-2.jpg') },
        { src: require('./4/2-3.jpg') },
        { src: require('./4/2-4.jpg') },
        { src: require('./4/2-5.jpg') },
        { src: require('./4/2-6.jpg') },
      ],

      slideList3: [
        { src: require('./5/1.jpg') },
        { src: require('./5/2.jpg') },
        { src: require('./5/3.jpg') },
      ],

      slideList4: [
        { src: require('./6/2-1.jpg') },
        { src: require('./6/2-2.jpg') },
        { src: require('./6/2-3.jpg') },
        { src: require('./6/2-4.jpg') },
        { src: require('./6/2-5.jpg') },
        { src: require('./6/2-6.jpg') },
      ],
      desc_list: [
        [
          '友達以上，戀人未滿，女人做自己的直覺永遠第一',
          '小宅也有豪宅闊砌，新板也能小薪限定',
          '人生不做隱形冠軍，優雅和品味的縮時攝影',
          '妳值得THE VIEW寵愛妳',
        ],
        [
          '可以遠離塞車的馬路，5分鐘投入府中站的快速',
          '捷運直達北車雙子星，忠孝敦南，國際信義101',
          '可達、可遊、可居、可望的地段美境',
        ],
        [
          '板南線勇奪捷運日運量200萬人次前5大站',
          '北車（占7.6%）西門站（占3.6%）',
          '市政府站（占2.9%）、忠孝復興站（占2.3%）',
          '板橋站（占2.0%）',
          '雙北最有價值捷運金脈',
        ],
      ],
    }
  },

  computed: {},

  methods: {
    handleScroll1() {
      this.showMask1 = false
    },
    handleScroll2() {
      this.showMask2 = false
    },
  },

  created() {},
  mounted() {
    if (this.isMobile) {
      setTimeout(() => {
        const map = document.querySelector('.overscroll')
        console.log(map)
        const mapBg = document.querySelector('.img2')
        const text = document.querySelector('.map .text')
        if (text) {
          text.style.left = `${mapBg.clientWidth / 2 - 100}px`
        }
        const hand = document.querySelector('.hand')

        if (hand) {
          hand.style.left = `${mapBg.clientWidth / 2 - 75}px`
        }

        map.scrollTo(mapBg.clientWidth / 2 - window.innerWidth / 2, 0)
      }, 500)

      setTimeout(() => {
        this.showMask1 = true
        this.showMask2 = true
      }, 1500)
    }
  },
}
</script>
