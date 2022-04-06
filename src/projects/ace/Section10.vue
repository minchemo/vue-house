<template>
  <div>
    <div class="section10">
      <h3 class="title" v-if="isPC">睿暘建設 為好建築而生</h3>
      <h3 class="title1" v-if="isMobile">睿暘建設</h3>
      <h3 class="title2" v-if="isMobile">為好建築而生</h3>
      <h3 class="desc">不惜成本，我們把這裡當作蓋自己的家，每一件作品，我們都以代表作的心力細細雕琢，一輩子的幸福居所，放心交給睿暘專業建築團隊為您把關。</h3>
      <h3 class="subtitle">嚴選建材．信賴精工</h3>
      <h3 class="label flex-c">
        漾團隊
      </h3>
      <div class="item-container flex-ac flex-jb wrap">
        <img loading="lazy" class="item-img" :src="item[0]" alt="" v-for="item in item_list" :key="item[0]">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  // background-attachment: fixed;
  background-image: url('./s10/bg.jpg');
  overflow: hidden;
}

.bg-img {
  width: size(1920);
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

// .title {
//   @include img_c_pc(916, calc(50% - 20vw) ,size(880));
//   font-size: size(70);
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.2;
//   letter-spacing: size(6);
//   text-align: left;
//   color: #ea5504;
//   white-space: nowrap;
// }

// .subtitle {
//   @include img_c_pc(916, calc(50% - 1vw) ,size(880));
//   font-size: size(45);
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.2;
//   letter-spacing: size(4);
//   text-align: center;
//   color: #ea5504;
//   white-space: nowrap;
// }

// .desc {
//   @include img_c_pc(916, calc(50% - 14.8vw) ,size(880));
//   font-size: size(35);
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.86;
//   letter-spacing: size(2.45);
//   text-align: justify;
//   color: #231815;
// }

// .label {
//   //@include div_l_pc(181, 81, 95, 667);
//   @include img_c_pc(181, calc(50% - 19.7vw) ,size(667));
//   height: size(81);
//   border: 1px solid #6e3a1d;
//   border-radius: 40px / 40px;
//   font-size: size(45);
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.2;
//   letter-spacing: size(3.6);
//   text-align: left;
//   color: #6e3a1d;
//   white-space: nowrap;
// }

// .item-container {
//   @include img_c_pc(950, calc(50% + 3vw) ,size(864));
//   transition: all 0.3s;
// }

.item-img {
  width: size(166);
  margin-bottom: size(12);
  transition:transform 0.3s ;
  &:hover{transform: scale(1.2);}
}

.b1 {
  @include img_l_pc(269, 70, 20);
  animation: an2 1.5s infinite alternate;
}

.b2 {
  @include img_l_pc(214, 823, 20);
  animation: an 2.5s infinite alternate;
}

.b3 {
  @include img_r_pc(360, 401, -100);
  animation: an 2.5s infinite alternate;
}

@keyframes an {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
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
  .section10 {
    width: 100vw;
    min-height: auto;
    height: sizem(1500);
    min-height: sizem(1500);
    max-height: sizem(1500);
    background: #fbfbfa url('./s10/bg_m.jpg') scroll no-repeat 0 100%;
    background-size: 100% auto;
  }

  .bg-img {
    width: sizem(375);
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

  .title1 {
    @include img_l_m(148, 125, 33);
    font-size: sizem(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #ea5504;
    white-space: nowrap;
  }

  .title2 {
    @include img_l_m(224, 176, 120);
    font-size: sizem(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #ea5504;
    white-space: nowrap;
  }

  .subtitle {
    @include img_r_m(220, 417, 78);
    font-size: sizem(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.9);
    text-align: left;
    color: #ea5504;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(310, 235, 33);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(1.05);
    text-align: left;
    color: #231815;
  }

  .label {
    @include div_r_m(142, 63, 30, 31);
    border: 1px solid #6e3a1d;
    border-radius: 40px / 40px;
    font-size: sizem(34);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.6);
    text-align: left;
    color: #6e3a1d;
    white-space: nowrap;
  }

  .item-container {
    @include img_r_m(245, 483, 65);
    width: sizem(245);
    transition: all 0.3s;
  }

  .item-img {
    width: sizem(108);
    margin-bottom: sizem(30);
  }

  .b1 {
    @include img_l_m(80, 60, -20);
    animation: an2 1.5s infinite alternate;
  }

  .b2 {
    @include img_l_m(62, 548, 263);
    animation: an 2.5s infinite alternate;
  }

  .b3 {
    @include img_l_m(134, 560, 12);
    animation: an 2.5s infinite alternate;
  }

  .b4 {
    @include img_r_m(62, 1117, 63);
    animation: an 4.5s infinite alternate;
  }

  .img1 {
    display: none;
  }

  .img2 {
    @include img_r_m(548, 1250, -280);
    animation: an 2.5s infinite alternate;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import Map from '@/components/Map.vue'

export default {
  name: 'section10',

  components: {
    Map,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,

      item_list: [
        [
          require('./s10/1.png'),
          '漾恣遊',
          '雙捷交會9橋之都<br />前進北市第1門戶',
        ],
        [require('./s10/2.png'), '漾工法', '大器崗石基座<br /防水保固5年'],
        [require('./s10/3.png'), '漾規劃', '18-28坪純5併<br /精質嚴選49戶'],
        [require('./s10/4.png'), '漾房價', '早鳥預約驚喜價<br /首購輕享水岸宅'],
        [
          require('./s10/5.png'),
          '漾增值',
          '機捷A2a站到家門<br /擴大三重都市計畫',
        ],
        [
          require('./s10/6.png'),
          '漾水岸',
          '大台北都會公園旁<br /徜徉自然最樂活',
        ],
        [require('./s10/7.png'), '漾空間', '方正格局3米6<br /雙面採光0雨遮'],
        [
          require('./s10/8.png'),
          '漾生活',
          '三重熟成市中心<br /吃喝玩樂All in one',
        ],
        [require('./s10/9.png')],
        [require('./s10/10.png')],
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
