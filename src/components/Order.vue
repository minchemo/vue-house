<template>
  <div class="order-bg">
    <!-- <img src="@/projects/fs/order/bg.png" alt="" class="bg-img"> -->
    <!-- <img src="@/projects/fs/order/bg1.png" alt="" class="bg-img no-mix"> -->
    <!-- <img src="@/projects/fs/order/bg_m.jpg" alt="" class="bg-img" v-if="isMobile"> -->

    <div class="order-top">
    </div>

    <ContactInfo />
    <GoogleMap />
    <PolicyDialog :policyVisible="policyVisible" />
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

    alertValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "請填寫必填欄位",
        message: h(
          "i",
          { style: "color: #82191d" },
          "「姓名、手機」是必填欄位"
        ),
      });
    },

    alertPhoneValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "格式錯誤",
        message: h("i", { style: "color: #82191d" }, "「手機」需為 10 碼數字"),
      });
    },

    submit() {
      if (this.isSubmit) return;
      if (!this.isVerify) return;
      if (!this.checked) return;
      this.isSubmit = true;
      if (
        !this.form.name ||
        !this.form.phone
        // ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
      ) {
        this.alertValidate();
        this.isSubmit = false;
        return;
      }
      if (this.form.phone.length != 10) {
        this.alertPhoneValidate();
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
      formData.append("contacttime", this.form.contacttime);
      formData.append("msg", this.form.msg);
      formData.append("room", this.form.room);
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
      formData.append("city", this.form.city);
      formData.append("area", this.form.area);
      formData.append("gender", this.form.area);
      formData.append("infosource", this.form.area);
      formData.append("parking", this.form.area);
      formData.append("houseStyle", this.form.area);
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
          method: "GET",
        }
      );
      fetch("contact-form.php", {
        method: "POST",
        body: formData,
      }).then((response) => {
        this.isSubmit = false;
        if (response.status === 200) {
          window.location.href = "formThanks";
        }
      });
    },
  },
};
</script>

<style lang="scss">
.el-input {
  border-left: 1px solid #eee !important;
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";

.bird {
  position: absolute;
  top: 0%;
  left: 50%;
  z-index: 1;
  width: 80vw;
  transform: translate(-50%, 10%) skew(0deg, 0deg) scale(1);
  animation: fly infinite alternate-reverse 7s;

  @keyframes fly {
    0% {
      transform: translate(-50%, 10%) skew(0deg, 0deg) scale(0.9);
    }
    100% {
      transform: translate(-55%, 12%) skew(20deg, 2deg) scale(1.1);
    }
  }
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  // mix-blend-mode: screen;
  //background: ("~@/projects/fs/order/bg_m.jpg");
  &.no-mix {
    mix-blend-mode: normal;
    height: 100%;
  }
  padding: 0 2vw;
}
.order-bg {
  //background-color: $order_bg_color;
  //background-image: $order_bg_image;
  background-repeat: no-repeat;
  position: relative;
  background-size: 110vw auto;
  background-position: top;
  font-family: $family3;
  // padding-top: 10vw;

  input,
  textarea,
  button {
    font-family: $family3;
    background: $order_submit_bg;
    border-radius: $order_submit_borderradius !important;
  }
  .order-top {
    //background-color: $order_bg_color;
    //background-image: url("~@/assets/img/contact_bg.jpg");
    background: $order_bg_image no-repeat;
    background-size: cover;
    background-position: bottom right;
    position: relative;
    padding: 5vw 0;
    padding-bottom: 600px;
  }
  .order-title {
    font-family: $family1;
    width: auto;
    padding-top: 20px;
    padding-bottom: 1vw;
    font-weight: 900;
    line-height: 1.3;
    font-size: 1.5vw;
    text-align: center;
    color: $order_title_color;
    margin: 0 auto;
    margin-bottom: 2vw;
    border-bottom: 1px solid;
    display: inline-block;
  }
  .order-title-img {
    width: 30vw;
    margin: 3vh auto;
    //margin-bottom: 1vw;

    img {
      width: 100%;
      max-width: 500px;
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
    font-weight: 600;
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
    height: 300px;
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
    background: $order_input_bg;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 5vw;
      font-size: 16px;
      font-weight: 600;
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
    //background-color: $order_bg_color;
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
      margin-bottom: 10vw;
      line-height: 1.5;
    }
    .order-top {
      background-image: $order_bg_image_m;
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
