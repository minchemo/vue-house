<template>
  <div class="house-info" id="house-info">
    <div class="content">
      <h3 class="title">建案資訊</h3>
      <div class="info">
        <div class="item" :key="infos[0]" v-for="infos in houseInfos">
          <h3 class="label">{{ infos[0] }}</h3>
          <a
            :href="infos[2]"
            class="desc"
            target="_blank"
            v-html="infos[1]"
          ></a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import info from "@/info";
import Footer from "@/layouts/Footer.vue";
export default {
  name: "houseInfo",
  components: {
    Footer,
  },
  data() {
    return {
      houseInfos: info.houseInfos,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
.house-info {
  width: 100vw;
  background: $house_bg;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
  z-index: 1;
}
.content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 50px;
}

.title {
  font-size: 32px;
  line-height: 36px;
  margin: 30px 0;
  font-weight: bold;
  color: $house_title_color;
  font-family: $family3;
  width: 80vw;
  padding: 10px 20px;
  position: relative;
  &::after {
    content: "";
    width: 100vw;
    height: 1px;
    background: #fff;
    position: absolute;
    left: -10vw;
    bottom: 0;
  }
}

.info {
  display: flex;
  flex-wrap: wrap;
}

.item {
  font-size: 20px;
  margin-bottom: 30px;
  margin-right: 160px;
  width: 500px;
  height: 30px;
  border-left: 4px solid $house_border_color;
  padding-left: 0.45em;
  display: flex;
  align-items: center;
  white-space: nowrap;

  &:nth-of-type(even) {
    margin-right: 0;
  }

  .label {
    color: $house_label_color;
    margin-bottom: 0;
    margin-right: 0;
    white-space: nowrap;
    font-family: $family3;
    font-weight: 700;
    width: 4.7em;
    text-align: left;
  }

  .desc {
    text-align: left;
    line-height: 1.4;
    color: $house_desc_color;
    font-family: $family3;
    font-weight: 500;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .content {
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 0;
  }

  .title {
    font-size: 24px;
    margin: 20px 0 24px;
    width: 100vw;
    &::after {
      content: "";
      width: 100vw;
      height: 1px;
      background: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  .item {
    margin-bottom: 20px;
    margin-right: 20px;
    width: 100%;
    height: auto;
    margin-left: 20px;
    white-space: normal;
    font-size: 14px;
  }

  .info {
    width: 100%;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 686px;
  }

  .title {
    font-size: 24px;
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