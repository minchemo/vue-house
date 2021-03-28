<template>
  <div class="section5">
    <div class="bg relative">
      <div v-if="!isMobile">
        <div class="btn-group">
          <img src="./s5/left.png" alt class="btn left" @click="decIndex" />
          <img src="./s5/right.png" alt class="btn right" @click="addIndex" />
        </div>
        <div :class="`slide`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
            <img src="./s5/tbg.png" alt class="img" />
            <div class="slide-text">
              <h3>{{slideList[slideIndex].title}}</h3>
              <p>{{slideList[slideIndex].p}}</p>
            </div>
          </div>
        </div>
        <!-- <img src="./s4/img2a.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s4/img3a.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s4/lineba.png" alt class="img" />
        <img src="./s4/stitlea.png" alt class="img" />
        <img src="./s4/titlea.png" alt class="img" />-->
      </div>
      <div v-if="isMobile">
        <img src="./s5/mo/title.png" alt class="img" />
        <div :class="`slide`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
          </div>
        </div>
        <div class="btn-group">
          <img src="./s5/left.png" alt class="btn left" @click="decIndex" />
          <img src="./s5/right.png" alt class="btn right" @click="addIndex" />
        </div>
        <div class="slide-text">
              <h3>{{slideList[slideIndex].title}}</h3>
              <p>{{slideList[slideIndex].p}}</p>
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
  z-index: 1;
  &.fix {
    position: fixed;
  }
  // &:nth-child(1) {
  //   position: relative;
  // }
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
  min-height: 100vh;
  height:62vw;
  .slide-img{height: 100%;}
}

.slide-text {
  font-size:0.92vw;line-height: 1.6;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 1.2px;
  text-align:left;
  color: #ffffff;
  position: absolute;
  padding: 2px 10px;
  left:calc(100vw * 1180 / 1920);
  top: calc(100vw * 825 / 1920);
  z-index: 3;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.7);width: 36em;}
}

.btn-group {
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  margin: 0 auto;
  right: 0;
  z-index: 3;

  .btn {
    cursor: pointer;
    position: absolute;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
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
    overflow: visible;
  }

  .img {
    &:nth-child(1) {
      position: relative;margin: 0 0 5em;
    }
  }

  .slide {
    // height: calc(100vw * 250 / 375);
    position: absolute;
    top: 0;
  height:auto;
  .slide-img{height:auto;}
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

  .slide-text {
    font-size: calc(100vw * 11 / 375);
    left: calc(100vw * 0 / 375);
    right: auto;
    top: 76vw;
    bottom:auto;  
    padding: 0 2em 0 3em;
h3{}
p{width: auto;}
  }

  .btn-group {
    top: 25%;

    > img {
      width: 30px;
    }
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
      slideList: [
        {
          src: isMobile
            ? require('./s5/mo/迎賓車道圖.jpg')
            : require('./s5/1迎賓車道圖.jpg'),
          title: '飯店式迴車廣場',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
        {
          src: isMobile
            ? require('./s5/mo/大廳.jpg')
            : require('./s5/2大廳.jpg'),
          title: '挑高7米迎賓大廳 Lobby',
          p: '',
        },
        {
          src: isMobile
            ? require('./s5/mo/沙發區.jpg')
            : require('./s5/3沙發區.jpg'),
          title: '歐式午茶交誼廳 Lounge',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
        {
          src: isMobile
            ? require('./s5/mo/長型會客區.jpg')
            : require('./s5/4長型會客區.jpg'),
          title: '歐式尊爵饗宴廳 Ballroom',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
        {
          src: isMobile
            ? require('./s5/mo/視聽室.jpg')
            : require('./s5/視聽室.jpg'),
          title: 'VIP包廂影廳',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
        {
          src: isMobile
            ? require('./s5/mo/SKY.jpg')
            : require('./s5/SKY.jpg'),
          title: 'SKY BAR',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
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
