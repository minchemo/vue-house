<template>
  <div class="order-bg">
    <!-- <div class="order-title" v-scroll-to="{ element: `#contact` }">{{order.title}}</div> -->
    <div class="section section-form">
      <div class="title" data-aos="fade-up" data-aos-duration="1000">
        <img
          :src="
            isMobile
              ? require('../pages/mobile-texture/section-form/title1.png')
              : require('../pages/texture/section-form/title1.png')
          "
          alt="2021市心質感高規宅 西門大院 LIFE WITH BOOKS & GARDEN"
        />
      </div>
      <div class="subtitle" data-aos="fade-up" data-aos-duration="1000">
        <img
          src="../pages/texture/section-form/title2.png"
          alt="院中有園，圓滿一家子心願 即將公開 歡迎預約優先賞屋"
          v-if="!isMobile"
        />
      </div>
      <div class="bg">
        <img
          src="../pages/texture/section-form/bg.png"
          alt=""
          v-if="!isMobile"
        />
      </div>
      <div class="form" data-aos="fade-up" data-aos-duration="1000">
        <div class="left">
          <div>
            <label for="name">姓名</label>
            <input type="text" name="" id="name" v-model="form.name" />
          </div>
          <div>
            <label for="phone">手機</label>
            <input type="text" name="" id="phone" v-model="form.phone" />
          </div>
          <div>
            <label for="city">居住城市</label>
            <select type="text" name="" id="city" v-model="form.city">
              <option
                v-for="city in cityList"
                :key="city.value"
                :label="city.label"
                :value="city.value"
                >{{ city.label }}</option
              >
            </select>
          </div>
          <div>
            <label for="county">居住地區</label>
            <select type="text" name="" id="county" v-model="form.area">
              <option
                v-for="area in areaList"
                :key="area.value"
                :label="area.label"
                :value="area.value"
                >{{ area.label }}</option
              >
            </select>
          </div>
        </div>
        <div class="right">
          <textarea
            name=""
            id="note"
            placeholder="請輸入您的留言 (選填)"
            cols="30"
            rows="10"
            v-model="form.msg"
          ></textarea>
        </div>
        <div class="bottom">
          <label class="policy-container" for="policy">
            本人知悉並同意<span @click="showPolicyDialog"
              >「個資告知事項聲明」</span
            >內容
            <input type="checkbox" id="policy" v-model="checked" />
            <span class="checkmark"></span>
          </label>
          <div id="send-form" class="hover" @click="submit" :loading="isSubmit">
            立即預約
          </div>
        </div>
      </div>
    </div>
    <!-- <h3 class="order-subtitle">{{order.subTitle}}</h3> -->
    <!-- <div class="order">
      <div class="form">
        <div class="group">
          <div class="row">
            <label>姓名<span>*</span></label>
            <el-input v-model="form.name" placeholder></el-input>
          </div>
          <div class="row">
            <label>手機<span>*</span></label>
            <el-input v-model="form.phone" placeholder></el-input>
          </div>
          <div class="row">
            <label>E-mail</label>
            <el-input v-model="form.email" placeholder></el-input>
          </div>
          <div class="row">
            <label>居住城市</label>
            <el-select v-model="form.city" placeholder>
              <el-option v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value"></el-option>
            </el-select>
          </div>
          <div class="row">
            <label>居住地區</label>
            <el-select v-model="form.area" placeholder no-data-text="請先選擇居住城市">
              <el-option v-for="area in areaList" :key="area.value" :label="area.label" :value="area.value"></el-option>
            </el-select>
          </div>
        </div>
        <div class="group">
          <div class="row">
            <el-input type="textarea" :rows="2" placeholder="請輸入您的留言 (選填)" v-model="form.msg"></el-input>
          </div>
        </div>
      </div>
      <div class="control">
        <el-checkbox v-model="checked">
          <p>
            本人知悉並同意
            <span @click="showPolicyDialog">「個資告知事項聲明」</span>
            內容
          </p>
        </el-checkbox>
      </div>
      <div style="margin: 0 auto">
        <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true"></vue-recaptcha>
      </div>
      <el-button class="form-submit" type="primary" :disabled="!checked || !isVerify" @click="submit" :loading="isSubmit">立即預約</el-button>
    </div> -->
    <ContactInfo />
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.218562810977!2d120.20789631542323!3d23.015745922357652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzU2LjciTiAxMjDCsDEyJzM2LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1609495064404!5m2!1szh-TW!2stw"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
    <!-- <GoogleMap /> -->
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
import ContactInfo from "@/components/ContactInfo.vue";
import GoogleMap from "@/components/GoogleMap.vue";
import PolicyDialog from "@/components/PolicyDialog.vue";
import info from "@/info";
import { isMobile } from "@/utils";
import { cityList, renderAreaList } from "@/info/address";
// import Loading from '@/components/Loading.vue'
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "order",
  components: {
    ContactInfo,
    GoogleMap,
    PolicyDialog,
    // Loading,
    VueRecaptcha
  },

  data() {
    return {
      isMobile,
      cityList,
      info,
      order: info.order,
      form: {
        name: "",
        phone: "",
        email: "",
        city: "",
        area: "",
        msg: ""
      },
      checked: false,
      isSubmit: false,
      isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
      window
    };
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city);
    }
  },

  methods: {
    showPolicyDialog() {
      this.policyVisible = true;
    },

    alertValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "請填寫必填欄位",
        message: h("i", { style: "color: #82191d" }, "「姓名、手機」是必填欄位")
      });
    },

    submit() {
      if (this.isSubmit) return;
      // if (!this.isVerify) return
      if (!this.checked) return;
      this.isSubmit = true;
      if (
        !this.form.name ||
        !this.form.phone
        // ||
        // !this.form.email ||
        // !this.form.city ||
        // !this.form.area
      ) {
        this.alertValidate();
        this.isSubmit = false;
        return;
      }
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmContent = urlParams.get("utm_content");
      const utmCampaign = urlParams.get("utm_campaign");
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("phone", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("msg", this.form.msg);
      formData.append("city", this.form.city);
      formData.append("area", this.form.area);
      formData.append("utm_source", utmSource);
      formData.append("utm_medium", utmMedium);
      formData.append("utm_content", utmContent);
      formData.append("utm_campaign", utmCampaign);
      const time = new Date();
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      const day = time.getDate();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&email=${this.form.email}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: "GET"
        }
      );
      fetch("contact-form.php", {
        method: "POST",
        body: formData
      }).then(response => {
        this.isSubmit = false;
        if (response.status === 200) {
          window.location.href = "formThanks";
        }
      });
      window.dotq = window.dotq || [];

      window.dotq.push({
        projectId: "10000",

        properties: {
          pixelId: "10101258",

          qstrings: {
            et: "custom",

            ea: "lead10101258"
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// @import '@/assets/style/variableColor.scss';
// .order-bg {
//   // background-color: $order_bg_color;transparent
//   background-color: transparent;
//   background-image: $order_bg_image;
//   background-size: cover;
//   position: relative;
//   padding-top: 80px;
//   overflow: hidden;

//   .order-title {
//     margin-top: 40px;
//     margin-bottom: 8px;
//     font-size: calc(100vw * 38 / 1920);
//     text-align: center;
//     color: $order_title_color;
//     width: calc(100vw * 500 / 1920);
//     background-color: #3d2824;
//     border-radius: 60px / 60px;
//     display: block;
//     margin: 40px auto 8px;
//     height: 60px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     position: relative;
//     z-index: 3;
//     &::before {
//       content: '';
//       position: absolute;
//       width: 1200px;
//       max-width: 95vw;
//       height: 1px;
//       background-color: #3d2824;
//       z-index: -1;
//     }
//   }

//   .order-subtitle {
//     font-size: 20px;
//     text-align: center;
//     color: $order_subtitle_color;
//     margin-bottom: 40px;
//     position: relative;
//     z-index: 3;
//   }

//   .order {
//     width: 920px;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     z-index: 3;
//   }

//   .form {
//     display: flex;
//     align-items: center;
//     > .group {
//       flex: 1;
//     }
//   }

//   .group {
//     height: 236px;

//     &:nth-child(1) {
//       border-right: 1px solid rgba(0, 0, 0, 0.2);
//       .row {
//         justify-content: flex-start;
//       }
//     }

//     &:nth-child(2) {
//       .row {
//         justify-content: flex-end;
//         height: 100%;
//       }
//     }
//   }

//   .row {
//     display: flex;
//     align-items: center;
//     margin-bottom: 15px;

//     &:nth-last-child(1) {
//       margin-bottom: 0;
//     }

//     label {
//       width: 92px;
//       font-size: 16px;
//       opacity: 0.8;
//       color: $order_input_label_color;

//       span {
//         color: #ff0000;
//       }
//     }
//   }

//   .control {
//     margin-top: 60px;
//     margin-bottom: 20px;
//   }
// }

// /* 平板尺寸 */
// @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
//   .order-title {
//     font-size: 32px;
//   }

//   .order-subtitle {
//     font-size: 16px;
//   }

//   .order {
//     width: 920px;
//     margin: 0 auto;
//   }
// }

// /* 螢幕尺寸標準 */
// /* 手機尺寸 */
// @media only screen and (max-width: 767px) {
//   .order-bg {
//     // background-image: $order_bg_image_m;
//     background-color: transparent;
//     background-size: auto 250vw;
//     padding-top: 40px;
//     .order-title {
//       font-size: 18px;
//       margin-top: 10px;
//       margin-bottom: 20px;
//       width: 90vw;
//       height: 30px;
//       position: relative;
//       z-index: 2;
//     }

//     .order-subtitle {
//       display: none;
//     }
//     .order {
//       width: 95% !important;
//       margin: 0 auto;
//       padding: 0;
//       position: relative;
//       z-index: 2;
//     }

//     .form {
//       flex-direction: column;
//     }

//     .group {
//       width: 100%;
//       height: auto !important;
//       margin-bottom: 0px !important;
//       border: none !important;
//     }

//     .row {
//       margin-bottom: 12px !important;
//       label {
//         width: 30% !important;
//       }
//     }

//     .control {
//       margin-top: 10px;
//       margin-bottom: 10px;
//     }
//   }
// }
</style>
