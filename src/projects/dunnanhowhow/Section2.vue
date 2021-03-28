<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <!--<img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
        <img src="./s2/bg.jpg" alt="" class="img-bg">
        <img src="./s2/icon.png" alt="" class="img-bg" data-aos="fade-up" data-aos-delay="400">
      </div>
      <div v-if="isMobile">
        <Map :tagList="tagList" :bgSrc="bgmSrc" :hand="hand"></Map>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  margin: 0 120px 0 0;
}

.img-bg {
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
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      tagList: [],
      bgmSrc: require('./s2/mo/bg.jpg'),
      hand: require('./s2/mo/箭頭.png'),
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
