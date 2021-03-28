<template>
<!-- 有輪播 todo -->
  <div class="section4">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s4/bg.jpg" alt="三標價值 舉市唯一" class="img" data-aos="fade" data-aos-delay="400">
        <div class="text"><h3>三標價值 舉市唯一<span>國際地標＋富裕指標＋權貴商標</span></h3><p>「聯上鉑金」以雍容富麗酒店式精品豪邸，雍容尊貴的新古典品味，深長框景、古典燈飾、空中閣樓、斜屋頂格柵…宏偉聖殿造型典雅靜謐，仰之彌高、望之神往，匹配地王珍稀價值，百年不朽世紀傳奇！</p>
</div>
</div>
      <div v-if="isMobile">
        <img src="./s4/mo/bg.jpg" alt="三標價值 舉市唯一" class="img" data-aos="fade" data-aos-delay="400">
        <div class="text"><h3>三標價值 舉市唯一<span>國際地標＋富裕指標＋權貴商標</span></h3><p>「聯上鉑金」以雍容富麗酒店式精品豪邸，雍容尊貴的新古典品味，深長框景、古典燈飾、空中閣樓、斜屋頂格柵…宏偉聖殿造型典雅靜謐，仰之彌高、望之神往，匹配地王珍稀價值，百年不朽世紀傳奇！</p>
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
.text{background: url('./s2/title.png') no-repeat;position: absolute;text-align:left;background-size: 65em auto;
font-size:0.92vw;line-height: 1.6;top: 15vw;left: 9vw;padding: 2.7em 2em 0 3em;right: 0;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;margin: -1.2em 0 0 0;}
span{color: #fff;font-size: 0.7em;padding: 0;font-weight: normal;display: block}
p{color: rgba(255,255,255, 0.7);width: 30em; text-align: justify; }
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
  }
  .text{background-image: url('./s2/mo/titleall.png');background-size: 100% auto;font-size:3.8vw;top:10vw; left: 0;bottom: 0; padding: 0 1em 0 1.7em;
  
h3{margin:0.1em 0 0 0;}
span{display: block;padding:0 0 0.3em 0}
p{width: 23em;}
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
      // slideList: [
      //   {
      //     src: require('./s4/mo/img1.jpg'),
      //   },
      //   {
      //     src: require('./s4/mo/img2.jpg'),
      //   },
      //   {
      //     src: require('./s4/mo/img3.jpg'),
      //   },
      // ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
