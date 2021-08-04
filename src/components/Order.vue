<template>
  <div class="order-bg">
    <!-- <img src="@/projects/fs/order/bg.png" alt="" class="bg-img"> -->
    <!-- <img src="@/projects/fs/order/bg1.png" alt="" class="bg-img no-mix"> -->
    <!-- <img src="@/projects/fs/order/bg_m.jpg" alt="" class="bg-img" v-if="isMobile"> -->
    <div class="order-top">
      <!-- <div class="title-block">
        <h3 class="title">{{order.title}}</h3>
        <div class="subtitle">{{order.subTitle}}</div>
      </div> -->
      <h3 class="order-title" v-html="order.title"></h3>
      <!--<div class="order-title-img">
        <img src="@/assets/img/order-title.png" alt="" />
      </div>-->
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
            <!-- <div class="row">
              <label>聯絡時間(起)</label>
              <el-time-select
                v-model="form.time_start"
                :editable="false"
                :picker-options="{
                  start: '10:00',
                  step: '01:00',
                  end: '18:00',
                }"
              ></el-time-select>
            </div>
            <div class="row">
              <label>聯絡時間(迄)</label>
              <el-time-select
                v-model="form.time_end"
                :editable="false"
                :picker-options="{
                  start: '10:00',
                  step: '01:00',
                  end: '18:00',
                }"
              ></el-time-select>
            </div> -->
            <!-- <div class="row">
              <label>想看房型</label>
              <el-select v-model="form.house" placeholder>
                <el-option
                  v-for="city in ['甜蜜2房', '幸福3房', '都想看看']"
                  :key="city"
                  :label="city"
                  :value="city"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div> -->
            <!-- <div class="row">
              <label>E-mail</label>
              <el-input v-model="form.email" placeholder></el-input>
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
          </div>
          <div class="group">
            <div class="row">
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
          <el-checkbox v-model="checked">
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
          :disabled="!checked || !isVerify"
          @click="submit"
          :loading="isSubmit"
          >立即預約</el-button
        >
        <Loading :loading="isSubmit" :isOpacity="true" />
      </div>
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
        city: "",
        area: "",
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
      formData.append("room", this.form.room);
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
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
.order-bg-draw {
  width: 300px;
  position: absolute;
  right: 5vw;
  bottom: 0;
  z-index: 15;
}
.draw2 {
  width: 100%;
  left: -1%;
  top: 0;
  animation: tree-skew 10s ease-in-out;
  animation-iteration-count: infinite;
  transform-origin: left;
  transform: skew(0, 0);
  position: absolute;
}
.draw2-bird {
  width: 3.5%;
  left: 13vw;
  top: 6.7vw;
  animation: bird-skew 4s ease-in-out;
  animation-iteration-count: infinite;
  transform-origin: center;
  transform: skew(0, 0);
  position: absolute;
}
.draw2-leaf1 {
  width: 30%;
  left: 0vw;
  top: 6.7vw;
  position: absolute;
}
.draw2-leaf2 {
  width: 30%;
  left: 10vw;
  top: 6.7vw;
  position: absolute;
}

@keyframes tail-rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes tree-skew {
  0% {
    transform: skew(0, 0);
  }
  50% {
    transform: skew(3deg, 0deg);
  }
  100% {
    transform: skew(0, 0);
  }
}

@keyframes bird-skew {
  0% {
    transform: skew(0, 0);
  }
  50% {
    transform: skew(8deg, 8deg);
  }
  100% {
    transform: skew(0, 0);
  }
}

.fall-container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: absolute;

  img {
    max-width: 50px;
    position: absolute;
    transform-origin: 0px -800px 0px;
    animation-name: fall, sway;
    animation-duration: 14s, 14s;
    animation-fill-mode: both;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite;
    opacity: 0;
    z-index: 10;
  }

  .leaf {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
  }
  .leaf1 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf2 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf3 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf4 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf5 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf6 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf7 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf8 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf9 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
  .leaf10 {
    top: -#{random(200)}px;
    left: #{random(100)}vw;
    animation-delay: #{random(10)}s;
  }
}

@keyframes sway {
  0% {
    transform: rotateZ(-15deg) rotateX(55deg);
  }
  30% {
    transform: rotateZ(20deg) rotateX(80deg);
    animation-timing-function: ease-in-out;
  }
  60% {
    transform: rotateZ(-20deg) rotateX(55deg);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: rotateZ(0deg) rotateX(10deg);
    animation-timing-function: ease-in-out;
  }
}

@keyframes fall {
  20% {
    opacity: 1;
  }
  100% {
    margin-top: 150vh;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
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
  background-image: $order_bg_image;
  background-repeat: no-repeat;
  position: relative;
  background-size: 100vw auto;
  background-position: top;
  font-family: $family3;
  // padding-top: 10vw;

  input,
  textarea,
  button {
    font-family: $family3;
    background: $order_submit_bg;
    border-radius: 0 !important;
  }
  .order-top {
    //background-color: $order_bg_color;
    position: relative;
    overflow: hidden;
    padding-top: 5vw;
    padding-bottom: 20vh;
    //margin: 0 2vw;
  }
  .order-title {
    font-family: DFLiSongStd;
    //font-family: $family1;
    width: 80vw;
    padding-top: 20px;
    padding-bottom: 8px;
    font-weight: bold;
    line-height: 1.3;
    font-size: calc(100vw * 60 / 1920);
    text-align: center;
    color: $order_title_color;
    margin: 0 auto;
  }
  .order-title-img {
    width: 50vw;
    margin: 0 auto;

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
  }

  .order {
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    justify-content: space-between;
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
    height: 250px;
    margin-bottom: 40px;

    &:nth-child(1) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      .row {
        justify-content: flex-start;
      }
    }
    &:nth-child(2) {
      .row {
        justify-content: flex-end;
        align-items: flex-start;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 92px;
      font-size: 16px;
      font-weight: 500;
      opacity: 0.8;
      color: $order_input_label_color;
      text-align: left;
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
  .order-bg {
    background-color: $order_bg_color;
    background-image: $order_bg_image_m;
    background-size: cover;
    padding-top: 0;
    margin: 0;
    position: relative;
    z-index: 2;
    background-size: 325vw auto;

    > img {
      display: block;
    }
    .order-title {
      padding-top: 10px;
      padding-bottom: 5px;
      font-size: calc(100vw * 30 / 375);
    }
    .order-title-img {
      width: 90vw;
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
      top: 10vw;
      padding-bottom: 0;
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
    }

    .row {
      margin-bottom: 12px !important;

      &.house {
        margin-top: 20px;
      }
      label {
        /*width: 30% !important;*/
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
      font-weight: normal;
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
