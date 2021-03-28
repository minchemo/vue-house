<template>
  <div class="section10">
    <div class="bg">
      <div :class="`dialog ${isDialogShow ? 'show' : ''}`">
        <div class="relative">
          <img src="./s4/close.png" alt class="close" @click="isDialogShow = false" />
          <iframe
            ref="iframe"
            :src="currentIframe"
            :height="iframeHeight"
            :width="iframeWidth"
            frameborder="0"
            style="background: #fff"
          ></iframe>
        </div>
      </div>
      <div>
        <div class="title-block">
          <h3 class="title">愛樂生活</h3>
          <div class="subtitle">The Life</div>
        </div>
        <div class="container" @mouseover="stopSwipe" @mouseleave="startSwipe">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide
              v-for="(slide, index) in slideList"
              :index="index"
              :key="slide.img"
              class="item"
            >
              <div class="mask" @click="showIframeDialog(slide.link)">
                <div class="border">
                  <h3 class="title">{{slide.title}}</h3>
                  <div class="desc">{{slide.desc}}</div>
                </div>
              </div>
              <img :src="slide.src" :class="`item-img`" />
            </swiper-slide>
          </swiper>
        </div>
        <!-- <div :class="`slide relative`" v-if="isMobile">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="name">{{slideList[slideIndex].title}}</div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./arrow-left.png" alt />
            <img @click="addIndex" src="./arrow-right.png" alt />
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item {
    // width: 20%;
    position: relative;
    cursor: pointer;

    &:hover {
      .mask {
        opacity: 0;
      }
    }
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      display: flex;
      opacity: 1;
      transition: all 0.5s;

      .border {
        width: 100%;
        margin: 10px;
        border: solid 1px #dfae2e;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      .title {
        width: 100%;
        font-size: 30px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
      }

      .desc {
        width: 100%;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
      }
    }
    img {
      width: 100%;
      cursor: pointer;
    }

    .title {
      font-size: 16px;
      text-align: center;
      color: #ffffff;
    }
  }
}

.dialog {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 150;
  &.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: -70px;
    right: -70px;
    z-index: 2;
  }

  .detail {
    height: 70vh;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .container {
    width: 1240px;
    > img {
      width: 600px;
    }
  }
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 450px;
      cursor: pointer;
    }

    .item {
      .mask {
        .title {
          font-size: 24px;
        }

        .desc {
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    padding: 0 0 40px;
  }

  .fullscreen {
    height: auto !important;
  }

  .container {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 50vw;
      // height: 300px;
      cursor: pointer;
    }
  }

  .map-detail {
    width: 100vw;
  }

  .dialog {
    .close {
      cursor: pointer;
      position: absolute;
      width: 50px;
      top: -70px;
      right: 0px;
      z-index: 2;
    }
  }

  .swiper-wrapper {
    margin-left: 32%;
  }

  .swiper-slide {
    width: 90%;
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
  name: 'section10',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      isDialogShow: false,
      currentIframe: '',
      swiperOption: {
        slidesPerView: isMobile ? 'auto' : 6,
        centeredSlides: true,
        spaceBetween: 10,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      },
      iframeWidth: 960,
      iframeHeight: 536,
      slideList: [
        {
          src: require('./s10/report_0001.jpg'),
          title: '美食',
          desc: '三重人注意！不可不知日常美食',
          link: 'https://www.walkerland.com.tw/subject/view/135427',
        },
        {
          src: require('./s10/report_0002.jpg'),
          title: '美食',
          desc: '力行路上／最平價美食赤肉羹',
          link:
            'http://v84454058.pixnet.net/blog/post/343294696-%E3%80%90%E7%BE%BD%E8%AB%BEx%E4%B8%89%E9%87%8D%E7%8F%BE%E5%81%9A%E8%B5%A4%E8%82%89%E7%84%BF%E3%80%91%E4%B8%89%E9%87%8D%E5%8A%9B%E8%A1%8C%E8%B7%AF%E5%B9%B3%E5%83%B9%E5%A4%A7',
        },
        {
          src: require('./s10/report_0003.jpg'),
          title: '美食',
          desc: '三重獨家美食／軟嫩平價蜜汁雞排',
          link:
            'https://nixojov.pixnet.net/blog/post/337687421-%E3%80%90%E4%B8%89%E9%87%8D%E7%BE%8E%E9%A3%9F%E3%80%91%E5%8A%9B%E8%A1%8C%E8%B7%AF%E4%BA%8C%E6%AE%B5%E7%A2%B3%E7%83%A4%E8%9C%9C%E6%B1%81%E9%9B%9E%E6%8E%92-%E8%BB%9F%E5%AB%A9',
        },
        {
          src: require('./s10/report_0004.jpg'),
          title: '美食',
          desc: '三重獨家美食／軟嫩平價蜜汁雞排',
          link:
            'https://nixojov.pixnet.net/blog/post/337687421-%E3%80%90%E4%B8%89%E9%87%8D%E7%BE%8E%E9%A3%9F%E3%80%91%E5%8A%9B%E8%A1%8C%E8%B7%AF%E4%BA%8C%E6%AE%B5%E7%A2%B3%E7%83%A4%E8%9C%9C%E6%B1%81%E9%9B%9E%E6%8E%92-%E8%BB%9F%E5%AB%A9',
        },
        {
          src: require('./s10/report_0006.jpg'),
          title: '美食',
          desc: '乾式熟成&濕式熟成牛排通通讓你吃到飽',
          link:
            'https://nixojov.pixnet.net/blog/post/337687421-%E3%80%90%E4%B8%89%E9%87%8D%E7%BE%8E%E9%A3%9F%E3%80%91%E5%8A%9B%E8%A1%8C%E8%B7%AF%E4%BA%8C%E6%AE%B5%E7%A2%B3%E7%83%A4%E8%9C%9C%E6%B1%81%E9%9B%9E%E6%8E%92-%E8%BB%9F%E5%AB%A9',
        },
        {
          src: require('./s10/report_0007.jpg'),
          title: '美食',
          desc: '三重獨家美食／軟嫩平價蜜汁雞排',
          link:
            'https://nixojov.pixnet.net/blog/post/337687421-%E3%80%90%E4%B8%89%E9%87%8D%E7%BE%8E%E9%A3%9F%E3%80%91%E5%8A%9B%E8%A1%8C%E8%B7%AF%E4%BA%8C%E6%AE%B5%E7%A2%B3%E7%83%A4%E8%9C%9C%E6%B1%81%E9%9B%9E%E6%8E%92-%E8%BB%9F%E5%AB%A9',
        },
        {
          src: require('./s10/report_0008.jpg'),
          title: '美食',
          desc: '台北捷運美食地圖懶人包',
          link:
            'https://nixojov.pixnet.net/blog/post/337687421-%E3%80%90%E4%B8%89%E9%87%8D%E7%BE%8E%E9%A3%9F%E3%80%91%E5%8A%9B%E8%A1%8C%E8%B7%AF%E4%BA%8C%E6%AE%B5%E7%A2%B3%E7%83%A4%E8%9C%9C%E6%B1%81%E9%9B%9E%E6%8E%92-%E8%BB%9F%E5%AB%A9',
        },
        {
          src: require('./s10/report_0009.jpg'),
          title: '體育館',
          desc: '小巨蛋（三重市綜合體育館）',
          link:
            'http://library.taiwanschoolnet.org/cyberfair2005/bhjh2005/0702.htm',
        },
        {
          src: require('./s10/report_0010.jpg'),
          title: '公園',
          desc: '大台北都會公園',
          link: 'https://www.travelking.com.tw/tourguide/scenery102355.html',
        },
        {
          src: require('./s10/report_0011.jpg'),
          title: '行政中心',
          desc: '新北市三重區公所',
          link: 'https://www.sanchong.ntpc.gov.tw/',
        },
        {
          src: require('./s10/report_0012.jpg'),
          title: '醫院',
          desc: '新北市聯合醫院',
          link: 'https://www.ntch.ntpc.gov.tw/',
        },
        {
          src: require('./s10/report_0013.jpg'),
          title: '行政中心',
          desc: '新北市三重區衛生所',
          link: 'https://sanchong.health.ntpc.gov.tw/',
        },
      ],
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },

  mounted() {
    this.iframeWidth = window.screen.width / (10 / 7)
    this.iframeHeight = window.screen.width / (10 / 4)
    if (this.isTablet) {
      this.iframeWidth = 800
      this.iframeHeight = 450
    }
    if (this.isMobile) {
      this.iframeWidth = window.screen.width
      this.iframeHeight = window.screen.height * (0.7)
    }
  },
  methods: {
    startSwipe() {
      this.swiper.autoplay.start()
    },

    stopSwipe() {
      this.swiper.autoplay.stop()
    },

    showIframeDialog(link) {
      this.isDialogShow = true
      this.currentIframe = link
    },
  },
}
</script>
