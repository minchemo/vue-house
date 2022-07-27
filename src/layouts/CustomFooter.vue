<template>
  <div>
    <div class="custom-footer">
      <div class="info">
        <div class="left">
          <div class="logo">
            <img
              v-lazy
              :temp="require('@/projects/pjr/footer/logo.svg')"
              alt="藏美表參道"
              srcset=""
            />
          </div>
          <h2>基本資料</h2>
          <div class="divider"></div>
          <div class="houseInfo">
            <div class="houseInfoItem" v-for="(item, i) in houseInfos" :key="i">
              <div class="label" v-html="item[0] + '│'"></div>
              <div class="value" v-html="item[1]"></div>
            </div>
          </div>
          <div class="divider"></div>
        </div>
        <div class="right order-now">
          <h2>立即預約</h2>
          <el-input v-model="form.name" placeholder="請輸入姓名"></el-input>
          <el-input v-model="form.phone" placeholder="請輸入電話"></el-input>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input
                v-model="form.captcha"
                placeholder="請輸入驗證碼"
              ></el-input
            ></el-col>

            <el-col :span="12">
              <div class="form-cus-btn" @click="getMobileValidCode">
                取得驗證碼
              </div>
            </el-col>
          </el-row>
          <el-input
            v-model="form.email"
            placeholder="請輸入電子郵件"
          ></el-input>
          <el-select v-model="form.city" placeholder="居住縣市">
            <el-option
              v-for="city in cityList"
              :key="city.value"
              :label="city.label"
              :value="city.value"
              no-data-text="無數據"
            ></el-option>
          </el-select>
          <el-select v-model="form.area" placeholder="鄉鎮市區">
            <el-option
              v-for="area in areaList"
              :key="area.value"
              :label="area.label"
              :value="area.value"
              no-data-text="請先選擇居住城市"
            ></el-option>
          </el-select>
          <div class="warning">
            <div class="title">你所登錄的個人資料將做為以下用途</div>
            <div class="content">
              (一)本網站所載之相關事項通知 (二)客戶管理與服務
              (三)本公司行銷業務之推廣本案實際內容以現場公布為準
            </div>
            <el-checkbox v-model="form.checked" class="form-check"
              >本人已知悉以上個人資料蒐集聲明事項</el-checkbox
            >
          </div>
          <div class="form-cus-btn" @click="send()">立即送出</div>
        </div>
      </div>
      <div class="g-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.255944658406!2d121.52107331598049!3d25.05931284342806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a942fa89fd67%3A0x540bd134d1b96bfa!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDkuK3lsbHljJfot6_kuozmrrU5MeiZnw!5e0!3m2!1szh-TW!2stw!4v1637494808426!5m2!1szh-TW!2stw"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";

/* 螢幕尺寸標準 */
.custom-footer {
  width: 100%;
  background: #eaeaeb;
  padding: size(150) 0 size(30) 0;
  .info {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;

    .left {
      width: 50%;
      .logo {
        width: size(250);
        margin: size(20) auto;
        img {
          width: 100%;
        }
      }
      h2 {
        font-size: size(29);
        margin-bottom: size(30);
        
        font-weight: 500;
      }
      .divider {
        width: 100%;
        height: 1px;
        background-color: #267f98;
        position: relative;
      }
      .houseInfo {
        .houseInfoItem {
          font-size: size(24);
          display: flex;
          margin: size(30) 0;
          font-weight: 500;
          .label {
            color: #267f98;
          }
          .value {
          }
        }
      }
    }
    .right {
      width: 40%;
      display: flex;
      flex-direction: column;
      h2 {
        font-size: size(29);
        margin-bottom: size(30);
        font-weight: 500;
      }
      .el-select {
        margin-left: 0;
        margin-bottom: size(20);
        height: size(53) !important;
        font-size: size(16) !important;
      }
      .el-input {
        margin-bottom: size(20);
        input {
          height: size(53) !important;
          width: 100% !important;
          font-size: size(16) !important;
        }
      }
      .warning {
        text-align: left;
        margin: size(20) 0;
        .title {
          font-size: size(17);
        }
        .content {
          margin: size(20) 0;
          font-size: size(14.8);
          line-height: 1.5;
        }
        .form-check {
          transform: scale(1.5);
          transform-origin: left;
      //    font-family: "Noto Sans TC";
          .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #000;
          }
        }
      }
      .form-cus-btn {
        width: 100%;
        height: size(53);
        background-color: #267f97;
        color: #fff;
        line-height: size(53);
        font-size: size(20);
        cursor: pointer;
     //   font-family: "Noto Sans TC", Noto Sans TC, serif;
        font-weight: 500;

        &:hover {
          background-color: #146379;
        }
      }
    }
  }

  .g-map {
    width: 80%;
    margin: size(50) auto;
    iframe {
      width: 100%;
      height: size(260);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .custom-footer {
    width: 100%;
    background: #eaeaeb;
    padding: size(150);
    .info {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;

      .left {
        width: 100%;
        .logo {
          width: size-m(163);
          margin: size-m(20) auto;
          img {
            width: 100%;
          }
        }
        h2 {
          font-size: size-m(14.5);
          margin-bottom: size-m(30);
        }
        .divider {
          width: 100%;
          height: 1px;
          background-color: #267f98;
          position: relative;
        }
        .houseInfo {
          .houseInfoItem {
            font-size: size-m(14.5);
            display: flex;
            margin: size-m(15) 0;
            .label {
              color: #267f98;
            }
            .value {
            }
          }
        }
      }
      .right {
        width: 100%;
        display: flex;
        flex-direction: column;
        h2 {
          font-size: size-m(14.5);
          margin-top: size-m(60);
          margin-bottom: size-m(20);
        }
        .el-select {
          margin-left: 0;
          margin-bottom: size-m(10);
          height: size-m(42) !important;
          font-size: size-m(16) !important;
        }
        .el-input {
          margin-bottom: size-m(10);
          input {
            height: size-m(42) !important;
            width: 100% !important;
            font-size: size-m(12) !important;
          }
        }
        .warning {
          text-align: left;
          margin: size-m(20) 0;
          .title {
            font-size: size-m(12);
          }
          .content {
            margin: size-m(20) 0;
            font-size: size-m(12);
            line-height: 1.5;
          }
          .form-check {
            transform: scale(1);
            transform-origin: left;
        //    font-family: "Noto Sans TC";
          }
        }
        .form-cus-btn {
          width: 100%;
          height: size-m(42) !important;
          background-color: #267f97;
          color: #fff;
          line-height: size-m(42) !important;
          font-size: size-m(14);
          cursor: pointer;

          &:hover {
            background-color: #146379;
          }
        }
      }
    }

    .g-map {
      width: 90%;
      margin: size-m(20) auto;
      padding-bottom: size-m(20);
      iframe {
        width: 100%;
        height: size-m(100);
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import { cityList, renderAreaList } from "@/info/address";
import info from "@/info";
import Footer from "@/layouts/Footer.vue";

export default {
  name: "custom-footer",
  components: {
    Footer,
  },
  data() {
    return {
      cityList,
      info,
      houseInfos: info.houseInfos,
      isMobile,
      form: {
        name: "",
        phone: "",
        email: "",
        city: "",
        area: "",
        captcha: "",
        checked: false,
      },
      duration: 0
    };
  },

  watch: {
    "this.form.area": {},
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city);
    },
  },

  methods: {
    send() {
      if (this.form.name == "") {
        this.showNotify("姓名必須填寫", "", "error");
      } else if (this.form.phone == "") {
        this.showNotify("電話必須填寫", "", "error");
      } else if (!this.form.captcha) {
        this.showNotify("驗證碼未填寫", "", "error");
      } else if (this.form.email == "") {
        this.showNotify("Email 必須填寫", "", "error");
      } else if (this.form.city == "") {
        this.showNotify("居住縣市必須填寫", "", "error");
      } else if (this.form.area == "") {
        this.showNotify("鄉鎮市區必須填寫", "", "error");
      } else if (!this.form.checked) {
        this.showNotify("聲明事項尚未確認", "", "error");
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = urlParams.get("utm_source");
        const utmMedium = urlParams.get("utm_medium");
        const utmContent = urlParams.get("utm_content");
        const utmCampaign = urlParams.get("utm_campaign");

        fetch("https://www.hiyes.tw/BuildingCase/Booking", {
          method: "POST",
          body: {
            Name: this.form.name,
            Email: this.form.email,
            MobilePhone: this.form.phone,
            City: this.form.city,
            Dist: this.form.area,
            SmsVerifyCode: this.form.captcha,
            ProjectId: "a0B6F00001knryN",
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_content: utmContent,
            utm_campaign: utmCampaign,
          },
        }).then((response) => {
          this.isSubmit = false;
          window.location.href = `formThanks${
            utmCampaign ? `?utm_campaign=${utmCampaign}` : ""
          }`;
          this.recordPageView(1); // record user behavior
        });
      }
    },
    showNotify(title, message, type) {
      this.$notify({
        title: title,
        message: message,
        duration: 5000,
        offset: 100,
        type: type,
      });
    },
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
          return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    listCookie() {
      const cookieArray = document.cookie.split(";");
      for (var i = 0; i < cookieArray.length; i++) {
        let thisCookie = cookieArray[i].split("=");
        let cName = unescape(thisCookie[0]);
        let cValue = unescape(thisCookie[1]);
        console.log(cName, cValue);
      }
    },
    recordPageView(state) {
      if (state === 1) {
        fetch("https://data.hiyes.tw/rec/pv", {
          method: "POST",
          body: {
            guid: this.getCookie("hiyes_case_uid"),
            project: "pjavenue",
            phone: this.form.phone,
            state,
          },
        });
      } else {
        fetch("https://data.hiyes.tw/rec/pv", {
          method: "POST",
          body: {
            guid: this.getCookie("hiyes_case_uid"),
            project: "pjavenue",
            state,
          },
        });
      }
    },
    generateGUID() {
      fetch("https://data.hiyes.tw/rec/uuid", {
        method: "GET",
      })
        .then((response) => {
          return response.text();
        })
        .then((guid) => {
          if (!this.getCookie("hiyes_case_uid")) {
            this.setCookie("hiyes_case_uid", guid, 2);
          }
        });
    },
    // 跨域問題待處理
    getMobileValidCode() {
      if (this.form.phone == "") {
        this.showNotify("請先填寫手機號碼", "", "error");
        return;
      }

      const data = {
        mobilePhone: this.form.phone,
      };
      fetch("https://www.hiyes.tw/Auth/SendSmsVerifyCode", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }).then((response) => {
        console.log(response);
      });
    },
  },

  mounted() {
    this.generateGUID();

    setInterval(() => {
      this.duration ++;
    }, 1000);
  },

  created() {},
};
</script>
