<template>
  <div>
    <div class="order-bg">
      <!-- <img src="@/projects/fs/order/bg.png" alt="" class="bg-img"> -->
      <!-- <img src="@/projects/fs/order/bg1.png" alt="" class="bg-img no-mix"> -->
      <!-- <img src="@/projects/fs/order/bg_m.jpg" alt="" class="bg-img" v-if="isMobile"> -->
      <div class="order-tt"></div>
      <div class="order-top">
        <!-- <div class="title-block">
        <h3 class="title">{{order.title}}</h3>
        <div class="subtitle">{{order.subTitle}}</div>
      </div> -->
        <div class="order-title_text">
          <div class="order-title" v-html="order.title" v-if="order.title"></div>
          <div class="order-subtitle" v-html="order.subTitle" v-if="order.subTitle"></div>
        </div>
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
                <label>居住城市</label>
                <el-select v-model="form.city" placeholder>
                  <el-option v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value" no-data-text="無數據"></el-option>
                </el-select>
              </div>
              <div class="row">
                <label>居住地區</label>
                <el-select v-model="form.area" placeholder>
                  <el-option v-for="area in areaList" :key="area.value" :label="area.label" :value="area.value" no-data-text="請先選擇居住城市"></el-option>
                </el-select>
              </div>
            </div>
            <div class="group">
              <div class="row">
                <el-input type="textarea" :rows="2" placeholder="請輸入您的留言 (選填)" v-model="form.msg"></el-input>
              </div>
            </div>
          </div>
          <div class="control flex-c">
            <el-checkbox v-model="checked" checked>
            </el-checkbox>
            <div class="el-checkbox__label">
              <h3>
                本人知悉並同意<br v-if="isMobile">
                <span @click="showPolicyDialog">「個資告知事項聲明」</span>
                內容
              </h3>
            </div>
          </div>
          
        <div style="margin: 0 auto;z-index:2;" v-if="!isMobile" data-aos="fade-down" data-aos-delay="600">
          <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
        </div>
        <div style="margin: 0 auto;z-index:2;" v-if="isMobile">
          <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
        </div>
        <el-button class="form-submit flex-c" type="primary" :disabled="!checked || !isVerify" @click="submit" :loading="isSubmit">立即預約</el-button>
       
          <!-- <el-button class="form-submit flex-c" type="primary" @click="submit" :loading="isSubmit">立即預約</el-button> -->
          <Loading :loading="isSubmit" :isOpacity="true" />
        </div>
      </div>
      <ContactInfo />
      <GoogleMap />
    </div>
    <el-dialog title="隱私權聲明" :visible.sync="policyVisible" width="600px" fullscreen>
      <div class="policy-dialog-content">
        <div class="subtitle">非常歡迎您光臨「{{info.caseName}}網站」（以下簡稱本網站），為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</div>
        <h3>一、隱私權保護政策的適用範圍</h3>

        <p>隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</p>

        <h3>二、個人資料的蒐集、處理及利用方式</h3>

        <ul>
          <li>
            當您造訪本網站或使用本網站所提供之功能服務時，
            我們將視該服務功能性質，請您提供必要的個人資料，
            並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，
            本網站不會將個人資料用於其他用途。
          </li>
          <li>本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。</li>
          <li>
            於一般瀏覽時，伺服器會自行記錄相關行徑，
            包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
          </li>
          <li>為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。</li>
        </ul>

        <h3>三、資料之保護</h3>

        <ul>
          <li>
            本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，
            加以保護網站及您的個人資料採用嚴格的保護措施， 只由經過授權的人員才能接觸您的個人資料，
            相關處理人員皆簽有保密合約，如有違反保密義務者， 將會受到相關的法律處分。
          </li>
          <li>如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</li>
        </ul>

        <h3>四、網站對外的相關連結</h3>

        <p>本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>

        <h3>五、與第三人共用個人資料之政策</h3>

        <p>本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。</p>

        <p>前項但書之情形包括不限於：</p>

        <ul>
          <li>經由您書面同意。</li>
          <li>法律明文規定。</li>
          <li>為免除您生命、身體、自由或財產上之危險。</li>
          <li>與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。</li>
          <li>當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</li>
          <li>有利於您的權益。</li>
          <li>本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。</li>
        </ul>

        <h3>六、Cookie之使用</h3>

        <p>
          為了提供您最佳的服務， 本網站會在您的電腦中放置並取用我們的Cookie，
          若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行
          。
        </p>

        <h3>七、隱私權保護政策之修正</h3>

        <p>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ContactInfo from '@/components/ContactInfo.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import PolicyDialog from '@/components/PolicyDialog.vue'
import info from '@/info'
import { cityList, renderAreaList } from '@/info/address'
import { isMobile } from '@/utils'
import Loading from '@/components/Loading.vue'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'order',
  components: {
    ContactInfo,
    GoogleMap,
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
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
        time_start: '',
        time_end: '',
      },
      checked: false,
      isSubmit: false,
      isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
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
      this.checked = true
    },

    alertValidate() {
      const h = this.$createElement
      this.$notify({
        title: '請填寫必填欄位',
        message: h(
          'i',
          { style: 'color: #82191d' },
          '「姓名、手機，並勾選個資法聲明」',
        ),
      })
    },

    // alertValidatePhone() {
    //   const h = this.$createElement
    //   this.$notify({
    //     title: '手機格式錯誤',
    //     message: h(
    //       'i',
    //       { style: 'color: #82191d' },
    //       '格式範例：09xxxxxxxx',
    //     ),
    //   })
    // },

    submit() {
      if (this.isSubmit) return
      if (!this.isVerify) return
      if (!this.checked) return
      this.isSubmit = true
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
        this.alertValidate()
        this.isSubmit = false
        return
      }

      // if (!/1{2}[0-9]{8}$/.test(this.form.phone)) {
      //   this.alertValidatePhone()
      //   this.isSubmit = false
      //   return
      // }
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
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
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
      )
      fetch('contact-form.php', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        this.isSubmit = false
        if (response.status === 200) {
          window.location.href = 'formThanks'
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
@import '@/assets/style/function.scss';
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
}
.order-bg {
  // background-color: $order_bg_color;
  background-image: $order_bg_image;
  background-repeat: Srepeat;
  position: relative;
  // padding-top: 130px;
  background-size: 100vw auto;
  background-attachment: fixed;
  background-position: 80% 0%;
  font-family: $family3;
  input,
  textarea,
  button {
    font-family: $family3;
  }

  .order-tt {
    position: relative;
    width: size(1440);
    height: size(350);
    margin: 0 auto size(-300);
    top: size(-300);
    background: rgba(0, 0, 0, 0.8);
  }
  .order-top {
    width: size(1440);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    overflow: hidden;
  }
  .order-title_text {
    font-size: calc(100vw * 16 / 1920);
    text-align: center;
    line-height: 1.6;
    padding: 1em 0;
  }
  .order-title {
    font-family: $family2;
    width: 100%;
    font-weight: 900;
    letter-spacing: 0.5em;
    color: $order_title_color;
    font-size: 2.1em;
  }

  .order-subtitle {
    width: 100%;
    font-size: 1em;
    color: $order_subtitle_color;
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
        height: 100%;
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
      opacity: 0.8;
      font-weight: bold;
      color: $order_input_label_color;
    }
  }

  .control {
    margin-top: 0px;
    margin-bottom: 20px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  /*
  .order-title {
  }

  .order-subtitle {
  }
  */

  .order {
    width: 920px;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .order-bg {
    // background-image: $order_bg_image_m;
    background-attachment: initial;
    background-size: cover;
    padding-top: 0px;
    margin: 0;
    position: relative;
    z-index: 2;

    > img {
      display: block;
    }

    .order-tt {
      width: 100%;
      height: sizem(20);
      top: 0;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.8);
    }
    .order-top {
      width: 100%;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.8);
      position: relative;
      overflow: hidden;
    }
    .order-title_text {
      font-size: calc(100vw * 16 / 375);
    }
    .order-title {
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
      margin-bottom: 12px !important;

      &.house {
        margin-top: 20px;
      }
      label {
        width: 30% !important;
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
  }
}
</style>
