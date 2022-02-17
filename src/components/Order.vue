<template>
  <div class="order-bg">
    <div class="order-top">
      <!-- <div class="title-block">
        <h3 class="title">{{order.title}}</h3>
        <div class="subtitle">{{order.subTitle}}</div>
      </div> -->
      <!-- <h3 class="order-title" v-html="order.title"></h3> -->
      <div class="order-title-img" data-aos="zoom-in">
        <!-- <img v-if="!isMobile" src="~@/projects/cm/order_title.svg" alt="力麒天沐" srcset="">
        <img v-else src="~@/projects/cm/order_title_m.svg" alt="力麒天沐" srcset=""> -->
      </div>
      <div class="order-title" v-html="order.title"></div>
      <div class="order-subtitle" v-html="order.subTitle"></div>
      <div class="order">
        <div class="form">
          <div class="group">
            <div class="row">
              <label>姓名</label>
              <el-input v-model="form.name" placeholder></el-input>
            </div>
            <div class="row">
              <label>手機</label>
              <el-input v-model="form.phone" placeholder></el-input>
            </div>
            <div class="row">
              <label>驗證碼</label>
              <div class="validate_box">
                <el-input
                  class="validate_text"
                  v-model="form.captcha"
                  placeholder
                ></el-input>
                <el-button class="get_validate_text" @click="getMobileValidCode"
                  >取得驗證碼</el-button
                >
              </div>
            </div>
            <div class="row">
              <label>電子郵件</label>
              <el-input v-model="form.email" placeholder></el-input>
            </div>
            <!-- <div class="row">
              <label>喜好房型</label>
              <el-select v-model="form.room" placeholder>
                <el-option
                  v-for="room in ['2房', '3房']"
                  :key="room"
                  :label="room"
                  :value="room"
                ></el-option>
              </el-select>
            </div> -->
            <!-- <div class="row">
              <label>方便接聽<br />電話時間</label>
              <el-select v-model="form.contacttime" placeholder>
                <el-option
                  v-for="contacttime in ['上午', '中午', '下午', '晚上']"
                  :key="contacttime"
                  :label="contacttime"
                  :value="contacttime"
                ></el-option>
              </el-select>
            </div> -->
            <div class="row">
              <label>居住城市</label>
              <el-select v-model="form.city" placeholder>
                <el-option
                  v-for="city in cityList"
                  :key="city.value"
                  :label="city.label"
                  :value="city.value"
                  no-data-text="無數據"
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>居住地區</label>
              <el-select v-model="form.area" placeholder>
                <el-option
                  v-for="area in areaList"
                  :key="area.value"
                  :label="area.label"
                  :value="area.value"
                  no-data-text="請先選擇居住城市"
                ></el-option>
              </el-select>
            </div>
            <!-- <div class="row">
              <label>性別</label>
              <el-select v-model="form.gender" placeholder>
                <el-option
                  v-for="gender in ['女', '男', '其他']"
                  :key="gender"
                  :label="gender"
                  :value="gender"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>資訊來源</label>
              <el-select v-model="form.infoSource" placeholder>
                <el-option
                  v-for="infoSource in [
                    '戶外廣告看版',
                    'FB',
                    '聯播網',
                    '邀請卡',
                    '簡訊',
                    '介紹',
                    '其他',
                  ]"
                  :key="infoSource"
                  :label="infoSource"
                  :value="infoSource"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div> -->
          </div>
          <div class="group">
            <div class="row" style="height: 100%">
              <el-input
                type="textarea"
                :rows="7"
                placeholder="請輸入您的留言 (選填)"
                v-model="form.msg"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="control">
          <el-checkbox v-model="form.checked">
            <h3>
              本人知悉並同意
              <span @click="showPolicyDialog">「個資告知事項聲明」</span>
              內容
            </h3>
          </el-checkbox>
        </div>
        <div style="margin: 0 auto; z-index: 2" v-if="!isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <div style="margin: 0 auto; z-index: 2" v-if="isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <el-button
          class="form-submit bt_registration"
          type="primary"
          :disabled="!form.checked || !isVerify"
          @click="submit"
          :loading="isSubmit"
          >立即預約</el-button
        >
        <Loading :loading="isSubmit" :isOpacity="true" />
      </div>
    </div>

    <ContactInfo />
    <GoogleMap />
    <PolicyDialog
      :policyVisible="policyVisible"
      @hidePolicyDialog="hidePolicyDialog"
    />
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import PolicyDialog from "@/components/PolicyDialog.vue";
import info from "@/info";
import { cityList, renderAreaList } from "@/info/address";
import { isMobile } from "@/utils";
import Loading from "@/components/Loading.vue";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "order",
  components: {
    GoogleMap,
    ContactInfo,
    PolicyDialog,
    Loading,
    VueRecaptcha,
  },

  data() {
    return {
      cityList,
      info,
      order: info.order,
      isMobile,
      form: {
        name: "",
        phone: "",
        captcha: "",
        email: "",
        contacttime: "",
        city: "",
        area: "",
        gender: "",
        infosource: "",
        parking: "",
        houseStyle: "",
        room: "",
        msg: "",
        time_start: "",
        time_end: "",
        checked: false,
      },
      checked: false,
      isSubmit: false,
      isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
    };
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city);
    },
  },

  methods: {
    showPolicyDialog() {
      this.policyVisible = true;
    },
    hidePolicyDialog() {
      this.policyVisible = false;
    },

    // alertValidate() {
    //   const h = this.$createElement;
    //   this.$notify({
    //     title: "請填寫必填欄位",
    //     message: h(
    //       "i",
    //       { style: "color: #82191d" },
    //       "「姓名、手機、驗證碼」是必填欄位"
    //     ),
    //   });
    // },

    // alertPhoneValidate() {
    //   const h = this.$createElement;
    //   this.$notify({
    //     title: "格式錯誤",
    //     message: h("i", { style: "color: #82191d" }, "「手機」需為 10 碼數字"),
    //   });
    // },

    showNotify(title, message, type) {
      this.$notify({
        title: title,
        message: message,
        duration: 5000,
        offset: 100,
        type: type,
      });
    },
    submit() {
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

        let data = {
          Name: this.form.name,
          Email: this.form.email,
          MobilePhone: this.form.phone,
          City: this.form.city,
          Dist: this.form.area,
          SmsVerifyCode: this.form.captcha,
          ProjectId: "a0B6F00001m71Pq",
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_content: utmContent,
          utm_campaign: utmCampaign,
        };

        fetch("https://www.hiyes.tw/BuildingCase/Booking", {
          method: "POST",
          body: JSON.stringify(data),
        })
          .then((response) => {
            this.isSubmit = false;
            window.location.href = `formThanks${
              utmCampaign ? `?utm_campaign=${utmCampaign}` : ""
            }`;
            this.recordPageView(1); // record user behavior
          })
          .catch((err) => {
            this.showNotify("預約失敗", err, "error");
          });
      }
    },

    // API串接
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
            guid: this.getCookie("hiyes_uid"),
            project: "pjavenue",
            phone: this.form.phone,
            state,
          },
        });
      } else {
        fetch("https://data.hiyes.tw/rec/pv", {
          method: "POST",
          body: {
            guid: this.getCookie("hiyes_uid"),
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
          if (!this.getCookie("hiyes_uid")) {
            this.setCookie("hiyes_uid", guid, 2);
          }
        });
    },
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
};
</script>

<style lang="scss">
.el-input {
  border-left: 1px solid #eee !important;
}

.validate_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 311px;
  height: 48px;
  margin-left: 21px;
  .validate_text {
    border-left: 0 !important;
    margin-right: 10px !important;
    input {
      width: 100% !important;
    }
  }

  .get_validate_text {
    width: 50%;
    height: 100% !important;
    background-color: #b4904f !important;
    color: #ffffff;

    &:hover {
      span {
        color: #000;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .validate_box {
    width: 100%;
    margin-left: 0;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
@import "@/assets/style/function.scss";

.bg-img {
  width: 110%;
  position: absolute;
  top: 0;
  right: -2%;
  pointer-events: none;
}
.order-bg {
  //background-color: $order_bg_color;
  background-image: $order_bg_image;
  background-repeat: repeat-y;
  position: relative;
  background-size: 100%;
  background-position: top center;
  font-family: $family3;
  // padding-top: 10vw;

  input,
  textarea,
  button {
    font-family: $family3;
    background: $order_submit_bg;
    border-radius: $order_submit_borderradius !important;
    border: $order_submit_border;
  }
  .order-top {
    // background-color: $order_bg_color;
    //background-image: url("~@/assets/img/contact_bg.jpg");
    // background: $order_bg_image no-repeat;
    background-size: 100%;
    background-position: bottom right;
    position: relative;
    padding: 5vw 0;
    padding-bottom: 500px;
  }
  .order-title {
    font-family: $family1;
    width: auto;
    padding-top: 20px;
    padding-bottom: 1vw;
    font-weight: 500;
    line-height: 1.3;
    font-size: size(50);
    letter-spacing: size(30);
    text-align: center;
    color: $order_title_color;
    margin: 0 auto;
    margin-bottom: size(20);
    display: inline-block;
  }
  .order-title-img {
    width: 40vw;
    margin: 3vh auto;
    //margin-bottom: 1vw;

    img {
      width: 100%;
      max-width: 750px;
    }
  }

  .contact-brick {
    position: absolute;
    width: 20vw;
    left: 15vw;
    top: 42vw;
  }

  .order-subtitle {
    width: 100vw;
    font-size: 20px;
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 40px;
    padding-bottom: 18px;
    line-height: 1.5;
    font-weight: 500;
  }

  .order {
    position: relative;
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    justify-content: space-between;
    z-index: 1;
  }

  .form {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: space-between;
    > .group {
      flex: 1;
      align-items: flex-start;
    }
  }

  .group {
    height: 330px;
    margin-bottom: 40px;
    align-content: space-between;
    display: flex;
    flex-wrap: wrap;

    &:nth-child(1) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      margin-right: 40px;
      padding-right: 40px;
      .row {
        width: 100%;
        // justify-content: flex-start;
        .el-input {
          width: auto;
        }
      }
    }
    &:nth-child(2) {
      .row {
        //justify-content: flex-end;
        //align-items: flex-start;
        //height: 100%;
        width: 100%;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
    //margin-bottom: 15px;
    //  background: $order_input_bg;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 5vw;
      font-size: 16px;
      font-weight: 500;
      opacity: 0.8;
      color: $order_input_label_color;
      text-align: left;
      padding-left: 15px;
      white-space: nowrap;
      line-height: 1.2;
    }
  }

  .control {
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .order-title {
    font-size: 32px;
  }

  .order-title-img {
    width: 90vw;
  }

  .order-subtitle {
    font-size: 16px;
  }

  .order {
    width: 920px;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .bird {
    width: 100vw;
  }
  .order-bg {
    background-image: $order_bg_image_m;
    background-size: contain;
    padding-top: 0;
    margin: 0;
    position: relative;
    z-index: 2;

    > img {
      display: block;
    }
    .order-title {
      padding-top: 10px;
      padding-bottom: 5px;
      font-size: calc(100vw * 30 / 375);
    }
    .order-title-img {
      width: 80vw;
    }

    .order-subtitle {
      // display: none;
      font-size: 14px;
      max-width: 80vw;
      margin: 0 auto;
      margin-bottom: 0vw;
      line-height: 1.5;
    }
    .order-top {
      // background-image: $order_bg_image_m;
      background-size: contain;
      background-repeat: repeat;
      // top: 10vw;
      padding-bottom: 50px;
    }
    .order {
      width: 85% !important;
      margin: 0 auto;
      padding: 0;
    }

    .form {
      flex-direction: column;
    }

    .group {
      width: 100%;
      height: auto !important;
      margin-bottom: 0px !important;
      border: none !important;
      padding-right: 0 !important;
      &:nth-child(1) {
        .row {
          .el-input {
            width: 100%;
          }
        }
      }
    }
    .row {
      margin-bottom: 12px !important;

      &.house {
        margin-top: 20px;
      }
      label {
        width: 40% !important;
        text-align: left;
      }
    }

    .control {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .hint {
      width: calc(100vw * 334 / 375);
      font-size: 12px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    @keyframes leaf {
      100% {
        transform: skew(2deg);
      }
    }
  }
}
</style>
