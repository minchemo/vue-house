<template>
  <div class="section3">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s3/bg.jpg" alt="同步國際 創造臨海城市新傳奇" class="img" data-aos="fade" data-aos-delay="400">
        <div class="text"><h3>同步國際 創造臨海城市新傳奇</h3><p>亞洲新灣區　一如　東京港區<br>
虎之門之丘、六本木之丘、東京中城、赤坂SAKAS <br>
世紀豪宅、時尚頂尖，東京最惜售的鑽石地段<br>
薈萃奢華富裕品味，創造國際級資產價值</p>
</div>
      </div>
      <div v-if="isMobile">
        <img src="./s3/mo/bg.jpg" alt="同步國際 創造臨海城市新傳奇" class="img" data-aos="fade" data-aos-delay="400">
         <div class="text"><h3>同步國際<br>創造臨海城市新傳奇</h3><p>亞洲新灣區　一如　東京港區<br>
虎之門之丘、六本木之丘、東京中城、赤坂SAKAS <br>
世紀豪宅、時尚頂尖，東京最惜售的鑽石地段<br>
薈萃奢華富裕品味，創造國際級資產價值</p>
</div> </div>
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
font-size:0.92vw;line-height: 1.6;top: 5.5vw; left: 53.8vw;padding: 2.7em 2em 0 3em;right: 0;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.7);}
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 950 / 1920);
    right: calc(100vw * 232 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }
  .text{background-image: url('./s2/mo/titleall.png');background-size: 100% auto;font-size:3.8vw;top:auto; left: 0;bottom: 5vw; padding: 0 1em 0 1.7em;}

}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section3',

  data() {
    return {
      isMobile,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
