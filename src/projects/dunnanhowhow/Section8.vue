<template>
  <div class="section8">
    <div class="bg relative">
      <div v-if="!isMobile">
        <div :class="`slide slide`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
            <div class="slide-text">
              <div class="img-title">{{slideList[slideIndex].title}}</div>
            </div>
          </div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./s8/flag_2.png" alt />
            <img @click="addIndex" src="./s8/flag_1.png" alt />
          </div>
        </div>
        <div class="content">
          <div class="title">3米6自由式，雙面採光好生活</div>
          <div class="desc">高人一等的3米6空間，打破傳統框架侷限。戶戶雙面採光，坐擁高規格生活尺度，同步國際LOFT生活美學。</div>
        </div>
      </div>
      <div v-if="isMobile">
        <div class="slide relative" data-aos="fade" data-aos-delay="800">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
            <div class="slide-text">
              <div class="img-title">{{slideList[slideIndex].title}}</div>
            </div>
          </div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./s8/flag_2.png" alt style="width:15px;" />
            <img @click="addIndex" src="./s8/flag_1.png" alt style="width:15px;" />
          </div>
          <div class="name">{{slideList[slideIndex].name}}</div>
        </div>
        <div class="content">
          <div class="title">3米6自由式<br />雙面採光好生活</div>
          <div class="desc">高人一等的3米6空間，打破傳統框架侷限。戶戶雙面採光，坐擁高規格生活尺度，同步國際LOFT生活美學。</div>
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
  margin: 0 120px 0 0;
}

.img {
  width: 100%;
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

.content {
  width: calc(100vw * 700 / 1920);
  height: calc(100vw * 220 / 1920);
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: calc(100% * 50 / 1920);
  padding-left: calc(100% * 67 / 1920);
  padding-right: calc(100% * 67 / 1920);
  position: absolute;
  top: calc(100vw * 170 / 1920);
  right: 0;
}

.title {
  font-size: calc(100vw * 36 / 1920);
  white-space: nowrap;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 6.48px;
  text-align: left;
  color: #b8a57e;
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
}

.img-title {
  position: absolute;
  bottom: 10px;
  right: 20px;
  height: 30px;
  font-size:18px;
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

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
  }

  .content {
    width: 100vw;
    height: auto;
    background-color: #cb181e;
    padding-top: calc(100vw * 20 / 375);
    padding-left: calc(100vw * 30 / 375);
    padding-right: calc(100vw * 30 / 375);
    padding-bottom: calc(100vw * 50 / 375);
    position: relative;
    top: auto;
    right: 0;

  }

  .title {
    font-size: calc(100vw * 36 / 375);
  }

  .desc {
    font-size: calc(100vw * 18 / 375);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section8',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          title: '3D示意圖僅供參考',
          src: require('./s8/1.jpg'),
        },
        {
          title: '3D示意圖僅供參考',
          src: require('./s8/2.jpg'),
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
