<template>
  <div class="house-info" id="house-info">
    <div class="content">
      <h3 class="title" data-aos="fade-down" data-aos-delay="0">建案資訊</h3>
      <div class="info">
        <div class="item" :key="infos[0]" v-for="(infos, index) in houseInfos" data-aos="fade-right" :data-aos-delay="100 + index * 100">
          <h3 class="label">{{infos[0]}}</h3>
          <p class="desc" v-html="infos[1]"></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import info from '@/info'
import Footer from '@/layouts/Footer.vue'
export default {
  name: 'houseInfo',
  components: {
    Footer,
  },
  data() {
    return {
      houseInfos: info.houseInfos,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.house-info {
  width: 100vw;
  background: $house_bg;
  position: relative;
  z-index: 1;
}
.content {
  width:46em;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size:calc(100vw * 16 / 1920); //建案資訊內文大小
  line-height: 1.6;
  padding: 2em 0; //建案資訊塊的上下間距
}

.title {
  font-size: 2.1em;
  margin: 1em 0;
  font-weight: 500;
  color: $house_title_color;
  font-family: $family3;
  font-weight: bold;
  letter-spacing: 0.5em;
}

.info {
  display: flex;
  flex-wrap: wrap;
}

.item {
  margin-bottom:2em;
  margin-right: 10em;
  width: 17em;
  //height: 30px;
  line-height: 1.4;
  //border-left: 4px solid $house_border_color;
  padding-left:0.6em;
  display: flex;
  align-items: center;
  white-space: nowrap;position: relative;
  &::before{content: "";width: 4px;height: 1.4em;background:$house_border_color;margin: 0px 0.8em 0 0;position: absolute;top:0;left: 0;}
  &:nth-of-type(even) {
    margin-right: 0;
  }

  .label {
    font-size:1em;
    color: $house_label_color;
    margin-bottom: 0;
    margin-right:0.8em;
    white-space: nowrap;
    font-family: $family3;
    width: 4.5em;
  }

  .desc {
    text-align: left;
    color: $house_desc_color;
    font-family: $family3;
    font-weight: bold;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .content {
    height: 45em;
    width: 100%;
   //margin-bottom: 0;
    font-size:calc(100vw * 16 / 375);
   // padding-bottom: 1em;
  }

  .title {
    margin: 0.3em 0;
  }

  .item {
    align-items: flex-start;
    margin: 0;
    width: 100%;
    height: auto;
    margin-left:1.3em;
    white-space: normal;
  }

  .info {
    width: 100%;
    flex: 1;
    justify-content: space-around;
    align-content: space-around;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 686px;
  }

  .title {
    font-size: 32px;
    margin: 40px 0 24px;
  }

  .item {
    margin-bottom: 20px;
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}
</style>
