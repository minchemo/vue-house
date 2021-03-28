<template>
  <div class="order-bg">
    <h3 class="order-title">{{info.order.title}}</h3>
    <h3 class="order-subtitle">{{info.order.subTitle}}</h3>
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
            <label>E-mail</label>
            <el-input v-model="form.email" placeholder></el-input>
          </div>-->
          <div class="row">
            <label>居住城市</label>
            <el-select v-model="form.city" placeholder="請選擇居住城市">
              <el-option
                v-for="city in cityList"
                :key="city.value"
                :label="city.label"
                :value="city.value"
              ></el-option>
            </el-select>
          </div>
          <div class="row">
            <label>居住地區</label>
            <el-select v-model="form.area" placeholder="請選擇居住地區" no-data-text="請先選擇居住城市">
              <el-option
                v-for="area in areaList"
                :key="area.value"
                :label="area.label"
                :value="area.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <!-- <div class="group">
          <div class="row">
            <el-input type="textarea" :rows="2" placeholder="請輸入您的留言 (選填)" v-model="form.msg"></el-input>
          </div>
        </div>-->
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
      <!-- <div class="hint">
        *參觀前請告知現場為網路預約客戶，提供登記預約大名及電話核對資料
        <br />賞屋完成即可抽7-11禮卷。
        <br />*兌換時間即日起至108/11/30止。
        <br />*本公司保有修改活動辦法及活動日期之權利。
      </div> -->
      <el-button
        class="form-submit"
        type="primary"
        :disabled="!checked"
        @click="submit"
        :loading="isSubmit"
      >立即預約</el-button>
    </div>
    <div class="info-group">
      <div class="info-address">{{info.address}}</div>
      <a class="google-btn flex-c" :href="info.googleLink" target="_blank">
        <span class="flex-c">
          <font-awesome-icon icon="map-marker-alt" />導航 Google 地圖
        </span>
      </a>
    </div>
    <Footer />

    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
// import ContactInfo from '@/components/ContactInfo.vue'
// import GoogleMap from '@/components/GoogleMap.vue'
import PolicyDialog from '@/components/PolicyDialog.vue'
import info from '@/info'
import { cityList, renderAreaList } from '@/info/address'
import Footer from '@/layouts/Footer.vue'

export default {
  name: 'order',
  components: {
    // ContactInfo,
    // GoogleMap,
    Footer,
    PolicyDialog,
  },

  data() {
    return {
      cityList,
      order: info.order,
      form: {
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
      },
      checked: false,
      isSubmit: false,
      policyVisible: false,
      showValidateDialog: false,
      info,
    }
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city)
    },
  },

  methods: {
    showPolicyDialog() {
      this.policyVisible = true
    },

    alertValidate() {
      const h = this.$createElement
      this.$notify({
        title: '請填寫必填欄位',
        message: h(
          'i',
          { style: 'color: #82191d' },
          '「姓名、手機、 E-mail、居住城市、居住地區」是必填欄位',
        ),
      })
    },

    submit() {
      if (this.isSubmit) return
      if (!this.checked) return
      this.isSubmit = true
      if (
        !this.form.name ||
        !this.form.phone ||
        // !this.form.email ||
        !this.form.city ||
        !this.form.area
      ) {
        this.alertValidate()
        this.isSubmit = false
        return
      }
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmContent = urlParams.get('utm_content')
      const utmCampaign = urlParams.get('utm_campaign')
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('phone', this.form.phone)
      formData.append('email', this.form.email)
      formData.append('msg', this.form.msg)
      formData.append('city', this.form.city)
      formData.append('area', this.form.area)
      formData.append('utm_source', utmSource)
      formData.append('utm_medium', utmMedium)
      formData.append('utm_content', utmContent)
      formData.append('utm_campaign', utmCampaign)
      const time = new Date()
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const hour = time.getHours()
      const min = time.getMinutes()
      const sec = time.getSeconds()
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&email=${this.form.email}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: 'GET',
        },
      ).then(() => {
        fetch('contact-form.php', {
          method: 'POST',
          body: formData,
        }).then(response => {
          this.isSubmit = false
          if (response.status === 200) {
            window.location.href = 'formThanks'
          }
        })
      })
    },
  },
}
</script>
<style lang="scss">
.row .el-input__inner {
  width: 100% !important;
  height: 48px !important;
}

.control {
  .el-checkbox__inner {
    border: 1px solid #666 !important;
  }
}

.el-select {
  margin-left: 0 !important;
  width: 100%;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.order-bg {
  background-color: $order_bg_color;
  // background-image: url('../assets/img/order-bg.jpg');
  position: relative;
  padding-top: 80px;

  .order-title {
    font-size: calc(100vw * (135 / 1920));
    background-size: cover;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 18px;
    text-align: center;
    color: $order_title_color;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.38;
    letter-spacing: 7.2px;
    text-align: center;
  }

  .order-subtitle {
    font-size: 20px;
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 40px;
    font-size: 26px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.54;
    letter-spacing: normal;
  }

  .order {
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .form {
    display: flex;
    align-items: center;
    > .group {
      flex: 1;
    }
  }

  .group {
    height: 250px;

    &:nth-child(1) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      .row {
        justify-content: flex-start;
      }
    }

    &:nth-child(2) {
      .row {
        justify-content: flex-end;
        height: 100%;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    width: 920px;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      min-width: 92px;
      font-size: 16px;
      opacity: 0.8;
      color: $order_input_label_color;
    }
  }

  .control {
    margin-top: 60px;
    margin-bottom: 20px;
  }
}

.hint {
  color: #545454;
  font-size: 14px;
  text-align: left;
  width: 650px;
  margin: 0 auto;
  line-height: 1.75;
}

.info-group {
  background: #fff;
  display: flex;
  width: calc(100vw * (1200 / 1920));
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 80px;

  .info-address {
    width: 84%;
    height: 78px;
    margin-top: 1px;
    box-shadow: 0 0 0 1px #00007d;
    color: #444;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .google-btn {
    width: 36%;
    height: 80px;
    cursor: pointer;
    text-decoration: none;
    color: $contact_google_btn_color;
    background-color: $contact_google_btn_bg;
    box-shadow: $contact_btn_border;
    transition: all 0.5s;

    svg {
      color: $contact_google_btn_icon;
      width: 24px;
      height: 24px;
      margin-right: 12px;
      transition: all 0.5s;
    }

    &:hover {
      background-color: $contact_google_hover_btn_bg;
      color: $contact_google_hover_btn_color;

      svg {
        color: $contact_google_hover_btn_icon;
      }
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .order-title {
    font-size: 32px;
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
    padding-top: 40px;
    .order-title {
      font-size: 34px;
      letter-spacing: normal;
      margin-top: 10px;
      margin-bottom: 20px;
    }

    .order-subtitle {
      // display: none;
      font-size: 14px;

      span {
        font-size: 11px;
        transform: translate(0px, 0.5px);
      }
    }
    .order {
      width: 95% !important;
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
      width: 100%;
      margin-bottom: 12px !important;
      label {
        width: 30% !important;
      }
    }

    .control {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .hint {
    color: #545454;
    font-size: 12px;
    text-align: left;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
    line-height: 1.75;
  }

  .info-group {
    background: #fff;
    display: flex;
    width: 90vw;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    height: 80px;
    flex-wrap: wrap;

    .info-address {
      width: 100%;
      height: 60px;
      margin-top: 0px;
      box-shadow: 0 0 0 1px #000;
      color: #444;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .google-btn {
      width: 100%;
      height: 60px;
      cursor: pointer;
      text-decoration: none;
      color: $contact_google_btn_color;
      background-color: $contact_google_btn_bg;
      box-shadow: $contact_btn_border;
      transition: all 0.5s;

      svg {
        color: $contact_google_btn_icon;
        width: 24px;
        height: 24px;
        margin-right: 12px;
        transition: all 0.5s;
      }

      &:hover {
        background-color: $contact_google_hover_btn_bg;
        color: $contact_google_hover_btn_color;

        svg {
          color: $contact_google_hover_btn_icon;
        }
      }
    }
  }
}
</style>
