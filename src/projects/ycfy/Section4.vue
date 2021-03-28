<template>
  <div class="section4">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s4/bg.jpg" alt class="img" />
        <img src="./s4/bg1.png" alt class="img" />
        <img src="./s4/img1a.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s4/img2a.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s4/img3a.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s4/lineba.png" alt class="img" />
        <img src="./s4/stitlea.png" alt="文青商圈/環球商圈/三井商圈 豐享生活" class="img" />
        <img src="./s4/titlea.png" alt="三大商圈" class="img" />
        <div class="text">從便利商店到星巴克，簡餐到拉麵，國賓、威秀影城到三井Outlet，享受整個林口的美好豐盛</div>
      </div>
      <div v-if="isMobile">
        <img src="./s4/mo/bg.jpg" alt class="img" />
        <img src="./s4/mo/bg1.png" alt class="img" />
        <img src="./s4/mo/lineba.png" alt class="img" />
        <img src="./s4/mo/stitlea.png" alt="文青商圈/環球商圈/三井商圈 豐享生活" class="img" />
        <img src="./s4/mo/titlea.png" alt="三大商圈" class="img" />
        <div class="text">從便利商店到星巴克，簡餐到拉麵<br />國賓、威秀影城到三井Outlet，享受整個林口的美好豐盛</div>
        <div :class="`slide relative`" data-aos="fade"
        data-aos-delay="0">
            <div
              v-for="(slide, index) in slideList"
              :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
              :key="`s4-slide-${index}`"
            >
              <img
                :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
                :src="slide.src"
                alt
              />
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
  width: calc(100vw * 900 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #666;
  right: calc(100vw * 152 / 1920);
  top: calc(100vw * 300 / 1920);
  position: absolute;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 1050 / 1920);
    right: calc(100vw * 142 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
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

  .slide {
    position: absolute;
    bottom: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section4',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s4/mo/img1.jpg'),
        },
        {
          src: require('./s4/mo/img2.jpg'),
        },
        {
          src: require('./s4/mo/img3.jpg'),
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
