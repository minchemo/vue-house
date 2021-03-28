<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s2/bg.jpg" alt="山河海匯 世界極景總和" class="img" data-aos="fade" data-aos-delay="400">
        <div class="text"><h3>亞灣之心　海洋之都　轉動高雄 黃金十年</h3><p>政府與企業聯手重金建設，展現高度的重視與信心<br>
海洋之都、南向起點、新創基地、改變地貌<br>
亞洲新灣區國際城市之門，成就全球水岸建築新場域<br>
一一見證邁向世界級的海洋之都新時代！</p>
</div>
        <!--<img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
      </div>
      <div v-if="isMobile">
        <img src="./s2/mo/bg.jpg" alt="山河海匯 世界極景總和" class="img" data-aos="fade" data-aos-delay="400">
        <!-- <img src="./s2/mo/t.png" alt="放眼世界頂級豪宅，能夠成就非凡獨特珍稀價值，唯有無法複製的景觀，港灣海景調色、壽山濃綠寫意、雄女青青校園，永恆無垠山河海景觀，一如東京港區，國際同步創造臨海都市新傳奇。" class="img" data-aos="fade" data-aos-delay="600">
        -->
        <div class="text"><h3>亞灣之心 海洋之都<br>轉動高雄 黃金十年</h3><p>政府與企業聯手重金建設，展現高度的重視與信心<br>
海洋之都、南向起點、新創基地、改變地貌<br>
亞洲新灣區國際城市之門，成就全球水岸建築新場域<br>
一一見證邁向世界級的海洋之都新時代！</p>
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
.text{background: url('./s2/title.png') no-repeat;position: absolute;text-align:left;
font-size:0.92vw;line-height: 1.6;top: 37vw; left: 33vw;padding: 2.7em 2em 0 3em;right: 0;background-size: 65em auto;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.7);}
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 595 / 1920);
    right: calc(100vw * 202 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }
.text{background-image: url('./s2/mo/titleall.png');background-size: 100% auto;font-size:3.8vw;top:auto; left: 0;bottom: 15vw; padding: 0 1em 0 1.7em;
h3{}
p{}
}
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section2',

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
