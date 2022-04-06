<template>
  <div class="section4">
    <img loading="lazy" src="./s4/bg.jpg" :alt="`${info.caseName}_bgimg`" class="bg-img" v-if="isPC">
    <img loading="lazy" src="./s4/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img" v-if="isPC">
    <div v-else>
      <Map :bgSrc="require('./s4/bg.jpg')" :bgText="require('./s4/bg.png')" :hand="require('./mo/4/小手.png')">
      </Map>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section4 {
    width: 100vw;
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    position: relative;
    > div {height: 100%;}
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import Map from '@/components/Map.vue'
import slider from '@/mixins/slider.js'

export default {
  name: 'section4',

  mixins: [slider],
  components: {
    Map,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList1: [
        // {
        //   img: require('./s4/1-4.jpg'),
        //   name: '全聯',
        // },
        // {
        //   img: require('./s4/1-5.jpg'),
        //   name: '愛買',
        // },
        // {
        //   img: require('./s4/1-2.jpg'),
        //   name: '力行市場',
        // },
        // {
        //   img: require('./s4/1-1.jpg'),
        //   name: 'IKEA宜家家具',
        // },
        // {
        //   img: require('./s4/1-3.jpg'),
        //   name: '家樂福',
        // },
      ],

      slideList2: [
        // {
        //   img: require('./s4/2-1.jpg'),
        //   name: '大台北都會公園',
        // },
        // {
        //   img: require('./s4/2-5.jpg'),
        //   name: '大台北都會公園',
        // },
        // {
        //   img: require('./s4/2-4.jpg'),
        //   name: '大台北都會公園',
        // },
        // {
        //   img: require('./s4/2-2.jpg'),
        //   name: '穀保家商',
        // },
        // {
        //   img: require('./s4/2-3.jpg'),
        //   name: '二重國小',
        // },
      ],

      slideList3: [
        // {
        //   img: require('./s4/3-1.jpg'),
        //   name: '捷運三重站',
        // },
        // {
        //   img: require('./s4/3-3.jpg'),
        //   name: '機捷三重站',
        // },
        // {
        //   img: require('./s4/3-4.jpg'),
        //   name: 'U-bike站',
        // },
        // {
        //   img: require('./s4/3-2.jpg'),
        //   name: '新北環快',
        // },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
