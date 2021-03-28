<template>
  <div class="section5">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s5/bg.jpg" alt class="img" />
        <img src="./s5/bg1.png" alt class="img" />
        <img src="./s5/left_img1.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s5/left_img2.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s5/stitle.png" alt="建築強人/景觀大師/專利結構 攜手擘畫" class="img" />
        <img src="./s5/title.png" alt="四大團隊" class="img" />
        <div :class="`slide slide1`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList1"
            :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
            :key="`s51-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`" :src="slide.src" alt />
            <div class="slide-text">
              <div class="title">{{slideList1[slideIndex1].title}}</div>
            </div>
          </div>
        </div>
        <div :class="`slide slide2`" data-aos="fade" data-aos-delay="0">
          <div
            v-for="(slide, index) in slideList2"
            :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
            :key="`s52-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`" :src="slide.src" alt />
            <div class="slide-text">
              <div class="title">{{slideList2[slideIndex2].title}}</div>
            </div>
          </div>
        </div>
        <!-- <img src="./s4/img2a.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s4/img3a.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s4/lineba.png" alt class="img" />
        <img src="./s4/stitlea.png" alt class="img" />
        <img src="./s4/titlea.png" alt class="img" />-->
        <div class="text">頤昌建築２０２０鉅作，邀請陳朝雄建築師、冠宇和瑞空間設計、戴雲發Alfa-Safe攜手合作</div>
      </div>
      <div v-if="isMobile">
        <img src="./s5/mo/bg.jpg" alt class="img" />
        <img src="./s5/mo/bg1.png" alt class="img" />
        <img src="./s5/mo/left_img1a.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s5/mo/left_img2a.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s5/mo/stitlea.png" alt="建築強人/景觀大師/專利結構 攜手擘畫" class="img" />
        <img src="./s5/mo/titlea.png" alt="四大團隊" class="img" />
        <div class="text">頤昌建築２０２０鉅作，邀請陳朝雄建築師、冠宇和瑞空間設計、戴雲發Alfa-Safe攜手合作</div>
        <div :class="`slide relative`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList3"
            :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`" :src="slide.src" alt />
          </div>
          <div class="slide-text">
            <div class="title">{{slideList3[slideIndex3].title}}</div>
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
  overflow: hidden;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}

.text {
  width: calc(100vw * 885 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #666666;
  right: calc(100vw * 158 / 1920);
  bottom: calc(100vw * 142 / 1920);
  position: absolute;
}

.slide {
  position: absolute;
}

.slide1 {
  width: calc(100vw * 520 / 1920);
  top: calc(100vw * 349 / 1920);
  right: calc(100vw * 599 / 1920);
}

.slide2 {
  width: calc(100vw * 450 / 1920);
  top: calc(100vw * 349 / 1920);
  right: calc(100vw * 139 / 1920);
}

.slide-text {
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: right;
  color: #ffffff;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 2px 10px;
  background: #000;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 1050 / 1920);
    right: calc(100vw * 139 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
    overflow: visible;
  }

  .img {
    &:nth-child(1) {
      position: relative;
      height: calc(100vw * 1600 / 750);
    }
  }

  .text {
    width: calc(100vw * 319 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #666;
    left: calc(100vw * 21 / 375);
    top: calc(100vw * 222 / 375);
  }

  .slide,
  .slide1,
  .slide2 {
    width: 100vw;
    height: calc(100vw * 318 / 375);
    position: absolute;
    top: calc(100vw * 279 / 375);
  }

  .slide-text {
    font-size: calc(100vw * 20 / 375);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section5',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList1: [
        {
          src: require('./s5/img1-1.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img1-2.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img1-3.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img1-4.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img1-5.jpg'),
          title: '頤昌詠萃',
        },
      ],

      slideList2: [
        {
          src: require('./s5/img2-1.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img2-2.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img2-3.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img2-4.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img2-5.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
      ],

      slideList3: [
        {
          src: require('./s5/img1-1.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-1.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img1-2.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-2.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img1-3.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-3.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img1-4.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-4.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img1-5.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-5.jpg'),
          title: '冠宇和瑞空間設計／業績',
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
