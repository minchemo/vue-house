<template>
  <div class="house-info" id="house-info">
    <div class="main">
      <div class="content-left">

        <!--div class="title">太平洋建設</div>
        <a class="link" href="https://www.pacific-group.com.tw/" target="_blank">
          <img src="~@/assets/img/pacific-logo.png" alt="" class="pacific" srcset="" />
        </a>
        <br><br-->
        <div class="title">聯碩地產行銷團隊</div>
        <a class="link" href="https://unigiants.com.tw/" target="_blank">
          <img src="~@/assets/img/house-logo.svg" width="197" alt="" srcset="" />
        </a>
        <a
          class="link"
          href="https://www.facebook.com/unigiant/"
          target="_blank"
        >
          <img src="~@/assets/img/house-logo2.svg" width="222" alt="" srcset="" />
        </a>
      </div>
      <div class="content">
        <h3 class="title">建案資訊</h3>
        <div class="info">
          <div class="item" :key="infos[0]" v-for="infos in houseInfos">
            <h3 class="label">{{ infos[0] }}</h3>
            <p class="desc" v-html="infos[1]"></p>
          </div>
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

<style lang="scss">
.desc {
  img {
    width: 150%;
  }
}
@media only screen and (max-width: 767px) {
  .desc {
    img {
      width: 80%;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
.house-info {
  width: 100vw;
  background: url('~@/projects/cm/footer_bg.jpg');
  background-size: cover;
  background-color: #000;
  position: relative;
  z-index: 1;
  .main {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    padding: 50px;
    .content-left {
      .pacific{
          width: 260px !important;
        }
      .title {
        font-size: 30px;
        color: #fff;
        font-family: "Noto Serif TC", sans-serif;
        text-align: left;
      }
      .link {
        display: block;
        text-align: left;
        margin: 30px 0;
        
        img {
          width: 197px;
        }
        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .title {
        font-size: 32px;
        margin-bottom: 20px;
        font-weight: bold;
        color: $house_title_color;
        font-family: $family3;
        text-align: left;
        width: 100%;
      }
      .info {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
      }
      .item {
        width: 100%;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid $house_border_color;
        display: flex;
        align-items: center;
        white-space: nowrap;
        justify-content: space-between;
        &:nth-of-type(even) {
          margin-right: 0;
        }
        &:nth-child(1) {
          border-top: 1px solid $house_border_color;
          padding-top: 16px;
        }
        &:nth-last-child(1) {
          border-bottom: 1px solid $house_border_color;
        }
        .label {
          font-size: 16px;
          color: $house_label_color;
          margin-bottom: 0;
          margin-right: 20px;
          white-space: nowrap;
          font-family: "Noto Serif TC", sans-serif;
          font-weight: 300;
        }
        .desc {
          font-size: 16px;
          text-align: left;
          line-height: 1.4;
          color: $house_desc_color;
          font-family: "Noto Serif TC", sans-serif;
          font-weight: 300;
          a {
            color: #000;
          }
        }
      }
    }
  }
}
/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .house-info {
    width: 100vw;
    //background: $house_bg;
    background-color: #000;
    position: relative;
    z-index: 1;
    .main {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
      padding: 10px;
      padding: 30px 0;
      flex-direction: column;
      .content-left {
        .pacific{
          width: 220px !important;
        }
        .title {
          font-size: 24px;
          color: #fff;
          font-family: "Noto Serif TC", sans-serif;
          font-weight: 600;
          text-align: left;
        }
        .link {
          display: block;
          text-align: left;
          margin: 20px 0;
          img {
            width: 50%;
          }
          &:hover {
            opacity: 0.7;
            cursor: pointer;
          }
        }
      }
      .content {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .title {
          font-size: 32px;
          margin-bottom: 20px;
          font-weight: 600;
          color: $house_title_color;
          font-family: $family3;
          text-align: left;
          width: 100%;
          font-family: "Noto Serif TC", sans-serif;
        }
        .info {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          width: 100%;
        }
        .item {
          padding-bottom: 8px;
          margin-bottom: 8px;
          &:nth-child(1) {
            padding-top: 8px;
          }
          .label {
            font-size: 16px;
            font-weight: 600;
            font-family: "Noto Serif TC", sans-serif;
          }
          .desc {
            font-size: 12px;
            font-weight: 600;
            font-family: "Noto Serif TC", sans-serif;
          }
        }
      }
    }
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