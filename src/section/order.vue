<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <div class="order-title font-['Noto_Serif_TC',serif] " v-if="info.order.title" v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle"
        v-html="$isMobile() && info.order.subTitle_mo ? info.order.subTitle_mo : info.order.subTitle">
      </div>
<!--  -->
      <!-- FORM -->
      <div class="form mx-auto relative flex justify-center">

        <div class="left h-full flex flex-col justify-between items-center">
          <!-- 姓名 -->
          <label class="row">
            <span>貴賓姓名<span>*</span></span>
            <input v-model="formData.name" type="text" class="input w-full" placeholder="請填寫姓名" />
          </label>
          <!-- 性別（可開關） -->
          <div v-if="info.formConfig?.gender?.enabled" class="gender">
            <label>
              <input type="radio" value="男" v-model="formData.gender" />先生
            </label>
            <label>
              <input type="radio" value="女" v-model="formData.gender" />女士
            </label>
          </div>

          <!-- 手機 -->
          <label class="row">
            <span>聯絡電話<span>*</span></span>
            <input v-model="formData.phone" type="text" class="input w-full" placeholder="請填寫電話" />
          </label>

          <!-- 動態欄位 -->
          <template v-for="(field, key) in selectFields" :key="key">
            <label class="row" v-if="!field.hidden">

              <span>
                {{ field.title }}
                <span v-if="field.required">*</span>
              </span>

              <select v-if="field.type === 'select'" v-model="formData[key]" class="select w-full rounded-none">

                <option value="" disabled>{{ field.hold }}</option>
                <option v-for="opt in field.option" :key="opt" :value="opt">
                  {{ opt }}
                </option>
              </select>

              <input v-else v-model="formData[key]" type="text" class="input w-full"
                :placeholder="field.hold" />
            </label>
          </template>

          <!-- 縣市 -->
          <label class="row" v-if="info.locationConfig?.city?.enabled">
            <span>居住縣市<span v-if="info.locationConfig?.city?.required">*</span></span>

            <select v-model="formData.city" class="select w-full">
              <option value="" disabled>請選擇城市</option>
              <option v-for="c in cityList" :key="c.value" :value="c.value">
                {{ c.label }}
              </option>
            </select>
          </label>

          <!-- 地區 -->
          <label class="row" v-if="info.locationConfig?.area?.enabled && formData.city">
            <span>居住地區<span v-if="info.locationConfig?.area?.required">*</span></span>

            <select v-model="formData.area" class="select w-full">
              <option value="" disabled>請選擇地區</option>
              <option v-for="a in areaList" :key="a.value" :value="a.value">
                {{ a.label }}
              </option>
            </select>
          </label>

        </div>

        <!-- 留言 -->
        <div class="right">
          <textarea v-model="formData.msg" class="row textarea w-full h-full rounded-none"
            placeholder="(非必填) 請輸入您的留言"></textarea>
        </div>

      </div>

      <div class="flex order-send mx-auto justify-between flex-wrap">
<div class="">
      <!-- Recaptcha -->
      <vue-recaptcha class="flex mb-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />
        
        <!-- Policy -->
      <div class="flex gap-2 mb-8 justify-center control text-left">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-[#000]">本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#c00] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容<br>
            你所登錄的個人資料將做為以下用途<br>
          (一)本網站所載之相關事項通知<br>
(二)客戶管理與服務<br>
(三)本公司行銷業務之推廣本案實際內容以現場公布為準
        </p>
      </div>
      <Policy />

      </div>
<div>
        <!-- Send --><div class="sendall mx-auto mt-0">
      <button class="send hover:scale-90 btn cursor-pointer" v-if="!submitted" @click="send" :disabled="sending">
  送出表單
</button>
<div v-else class="send-load">
  <svg
    class="animate-spin h-5 w-5 text-blue-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
  <span>發送中...</span>
</div>
</div></div>
</div>
      
</div>
<!-- Contact Info -->
 <ContactInfo />

    <Map v-if="info.address" />
    <HouseInfo />

  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";


.area-drop-enter-active {
  transition: all 0.35s ease;
  overflow: hidden;
}
.area-drop-enter-from {
  max-height: 0;
  opacity: 0;
}
.area-drop-enter-to {
  max-height: 4em;
  opacity: 1;
}
.order-section {
  position: relative;
 // padding-top: size(406);
   overflow: hidden;
    min-height: size(500);z-index: 3;

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }

}

.order {
  width: 100%;
  padding-top: size(40);
  background: #D5E3E7;
  color: #333;
  font-size: 15px;
  line-height: 1.7;
  /*
  background:url("@/section/form/bg.jpg");
  background-size: auto;
  */
 // background: linear-gradient(to bottom, #195c45, #000704);
  


  .order-title {
    font-size: size(40);
    font-weight: 700;
  //  color: #fff;
    padding-top:1.5em;
    //filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
    .line{width: size(439);}
  }

  .order-title-img {
    width: size(1008);
    margin-bottom: size(155);
  }
  .order-subTitle{
    font-size: size(17);
    // color: #fff;
    padding-top:.8em;
    letter-spacing: .1em;
    //font-weight: 500;filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
  }
  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
  //  background-color: #055F76;
  }

  .order-send{
    width: size(920);
    min-width: 750px;}
  .form {
    width: size(920);
    min-width: 750px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;
    line-height: 1.7;

    .left {position: relative;
      flex: 1;
      gap: size(20);
      align-items: flex-start;
      //   width: size(419);
    }

    .right {
      flex: 1;
      height: auto;
      //  width: size(419);
    }

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #fff9;
      position: absolute;
    }
    .row{color: #000;
      display: flex;width: 100%;
      align-items:flex-start;
      flex-direction:column;
      justify-content:flex-start;
      > span{
        width: 6.2em;
        text-align: left;padding-left:0;
        > span{color: #F00;//font-size: 12px;
          }
      }
      input,select{background: #fffb;flex: 1;padding: 1em;
    border-radius: 0em;}
      option{color: #000;background: #fffb;}
      select{background:#fffb url("//h35.banner.tw/img//select.svg") no-repeat calc(100% - .5em) 100%;
      background-size:auto 200%;
      transition: background .3s;
      &:focus{
        background-position:calc(100% - .5em) 0%;
      }
      }
      // &.name{width: calc(100% - 3.8em);}//沒有性別的話這條槓掉
    }
    .gender{display: flex;position: absolute;right: 0;
       //flex-direction:column;
      label:first-child{margin-right: 1em;}
      input{margin-right: .3em;}
    }
    .room_type{display: flex; flex-wrap: wrap;
      flex-direction:row;
      span:first-child{width: 100%;}
      label{margin-right: 1.5em;}
      input{margin-right: .3em;}
    }
  }

      input::placeholder{color: #333;}
      
      textarea{background:#fffb}
      textarea::placeholder{color: #333;}
  .sendall{
  font-size:20px;
  font-weight: 400;
    line-height: 3.3;
    
  height:3.5em;}
  .send {
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background-color: #036eb5;
    //border: 1px solid #FFF9;
    border:0;
    border-radius: 3em;

    width: 308px;
    height:3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
    //box-shadow: .2em .2em .05em #0004;
  }
  @keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.send-load{
  letter-spacing: 0.9em;
  text-indent: 0.9em;
  height:100%;}
.animate-spin {
  display: inline-block;margin:0 .5em; animation: spin 1s linear infinite;
}

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width:768px) {
  .order-section {
    min-height: sizem(800);
    position: relative;
    margin-bottom:sizem(50);
    // overflow: hidden;
   // padding-top: sizem(200);

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{sizem(30)};
      bottom: sizem(590);
    } 

  }

  .order {
    width: 100%;
    padding-bottom: sizem(63);

    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055F76;
    }

    .order-title {
      font-size: sizem(27);
      padding:.6em 0 .2em;
    }
    .order-subTitle{
      font-size: sizem(13);
      padding-top:0;
      letter-spacing: 0;
    }

  .order-send{
      width: sizem(310);
      min-width: 0;}

    .form {
      width: sizem(310);
      min-width: 0;
      height: auto;
      gap: sizem(15);
      margin-bottom: sizem(20);
      flex-direction: column;
      margin-top: sizem(20);

      .left {
        width: 100%;
        gap: sizem(15);
      }

      .right {
        width: 100%;
        height: sizem(100);
        .row{
          height: 7em;
        }
      }

      &::after {
        display: none;
      }
    }
    .sendall {
      font-size: sizem(21);
    }

    .send {
      font-size: sizem(21);
      width: sizem(310);
      height: sizem(72);
    }

    .control {
      font-size: sizem(14.6);
    }
  }
}
</style>
<script setup>
// 2026-09-24 修正版
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
import Map from "@/section/form/map.vue"
import HouseInfo from "@/section/form/houseInfo.vue"

import info from "@/info"
import { cityList, renderAreaList } from "@/info/address.js"
import { ref, reactive, watch, computed, getCurrentInstance } from "vue"
import { VueRecaptcha } from "vue-recaptcha"
import { useToast } from "vue-toastification"

const toast = useToast()
const sending = ref(false)
const submitted = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const selectFields = info.selectFields || {}
const formConfig = info.formConfig || {}
const locationConfig = info.locationConfig || {}

// ==========================
// 🔥 FORM DATA
// ==========================
const formData = reactive({
  name: "",
  phone: "",
  email: "",
  msg: "",
  city: "",
  area: "",
  gender: "",
  policyChecked: false,
  r_verify: false,

  ...Object.keys(selectFields).reduce((acc, k) => {
    acc[k] = ""
    return acc
  }, {})
})

// ==========================
// 🔥 FIELD LABEL MAP
// ==========================
const fieldLabelMap = {
  name: "姓名",
  phone: "手機",
  email: "信箱",
  gender: "性別",
  city: "居住縣市",
  area: "居住地區",
  policyChecked: "個資聲明",
  r_verify: "我不是機器人",
  ...Object.fromEntries(
    Object.entries(selectFields).map(([k, v]) => [k, v.title])
  )
}

// ==========================
// 🔥 AREA LIST CONTROL
// ==========================
const areaList = ref([])

watch(() => formData.city, (val) => {
  if (!val) {
    formData.area = ""
    areaList.value = []
    return
  }

  areaList.value = renderAreaList(val)
  formData.area = ""
})

// ==========================
// 🔥 REQUIRED RULE ENGINE
// ==========================
const isRequired = (key) => {
  if (key === "name" || key === "phone") return true
  if (key === "policyChecked") return true
  if (key === "r_verify") return true
  if (key === "gender") return formConfig.gender?.required
  if (key === "city") return locationConfig.city?.required
  if (key === "area") return locationConfig.area?.required

  if (selectFields[key]) return selectFields[key].required

  return false
}

// ==========================
// 🔥 RECAPTCHA
// ==========================
const onRecaptchaVerify = (token) => {
  formData.r_verify = token
}

const onRecaptchaExpired = () => {
  formData.r_verify = false
  toast.warning("驗證已過期")
}

// ==========================
// 🔥 SUBMIT (正式發送)
// ==========================
const send = async () => {
  const urlParams = new URLSearchParams(window.location.search)

  const utmSource = urlParams.get("utm_source") || "null"
  const utmMedium = urlParams.get("utm_medium") || "null"
  const utmContent = urlParams.get("utm_content") || "null"
  const utmCampaign = urlParams.get("utm_campaign") || "null"

  const utm = {
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_content: utmContent,
    utm_campaign: utmCampaign
  }

  // 1. 性別標籤處理
  if (formData.gender && formConfig.gender?.enabled) {
    const tag = `(${formData.gender})`
    if (!formData.name.includes(tag)) {
      formData.name += tag
    }
  }

  // 2. 必填欄位驗證
  const unfill = []
  for (const [key, value] of Object.entries(formData)) {
    if (!isRequired(key)) continue
    if (value === "" || value === false) {
      unfill.push(key)
    }
  }

  if (unfill.length) {
    const labels = unfill.map(k => fieldLabelMap[k] || k)
    toast.error(`請填寫：${labels.join(", ")}`)
    return
  }

  const phoneReg = /^(09)[0-9]{8}$/
  if (!phoneReg.test(formData.phone)) {
    toast.error("手機格式錯誤")
    return
  }

  if (sending.value) return
  sending.value = true
  submitted.value = true

  // ====================================================
  // 📦 1. A 系統資料組裝 (leads.lixin - 主要系統)
  // ====================================================
  const presendA = {
    caseId: info.caseid,
    form: {},
    validation: {
      siteKey: info.recaptcha_site_key_v2,
      recaptchaToken: formData.r_verify
    }
  }

  for (const [k, v] of Object.entries(formData)) {
    if (["policyChecked", "r_verify"].includes(k)) continue
    if (k === "area" && !v) continue
    presendA.form[k] = v
  }
  presendA.form.note = formData.msg
  delete presendA.form.msg
  Object.assign(presendA.form, utm)

  // ====================================================
  // 📦 2. B 系統資料組裝 (service-sys - 舊系統)
  // ====================================================
  const presendB = new FormData()

  // 基本標準欄位
  presendB.append("name", formData.name || "")
  presendB.append("phone", formData.phone || "")
  if (formData.email) presendB.append("email", formData.email)
  if (formData.gender) presendB.append("gender", formData.gender)
  if (formData.city) presendB.append("city", formData.city)
  if (formData.area) presendB.append("area", formData.area)

  const assignedBFields = {
    room_type: false,
    budget: false
  }
  const extraFieldsForBMessage = []

  // 走訪 selectFields 依據 apiB 歸類，多餘項目放入留言
  for (const [key, fieldConfig] of Object.entries(selectFields)) {
    const val = formData[key]
    if (!val) continue

    const label = fieldConfig.title || key
    const targetBKey = fieldConfig.apiB || key

    if (targetBKey === "room_type" && !assignedBFields.room_type) {
      presendB.append("room_type", val)
      assignedBFields.room_type = true
    } else if (targetBKey === "budget" && !assignedBFields.budget) {
      presendB.append("budget", val)
      assignedBFields.budget = true
    } else {
      extraFieldsForBMessage.push(`${label}：${val}`)
    }
  }

  // 留言組裝 (雙重傳遞 message 與 msg)
  if (formData.msg) {
    if (extraFieldsForBMessage.length > 0) {
      extraFieldsForBMessage.push(`留言：${formData.msg}`)
    } else {
      extraFieldsForBMessage.push(formData.msg)
    }
  }

  const combinedBMessage = extraFieldsForBMessage.join(" / ")
  presendB.append("message", combinedBMessage)
  presendB.append("msg", combinedBMessage)

  // UTM 與案件號
  Object.entries(utm).forEach(([k, v]) => presendB.append(k, v))
  presendB.append(
    "case_code",
    info.case_code || info.caseid_j || info.caseid || ""
  )

  // ====================================================
  // 📦 3. C 系統資料組裝 (Google Apps Script - 備份試算表)
  // ====================================================
  const dynamicMsgParts = []

  for (const [key, fieldConfig] of Object.entries(selectFields)) {
    const val = formData[key]
    if (val) {
      const label = fieldConfig.title || key
      dynamicMsgParts.push(`${label}：${val}`)
    }
  }

  if (formData.msg) {
    if (dynamicMsgParts.length > 0) {
      dynamicMsgParts.push(`留言：${formData.msg}`)
    } else {
      dynamicMsgParts.push(formData.msg)
    }
  }

  const combinedCMsg = dynamicMsgParts.join(" / ")

  const scriptParams = new URLSearchParams()
  scriptParams.append("name", formData.name || "")
  scriptParams.append("phone", formData.phone || "")
  scriptParams.append("email", formData.email || "")
  scriptParams.append("cityarea", `${formData.city || ""}${formData.area || ""}`)
  scriptParams.append("msg", combinedCMsg)
  scriptParams.append("utm_source", utmSource)
  scriptParams.append("utm_medium", utmMedium)
  scriptParams.append("utm_content", utmContent)
  scriptParams.append("utm_campaign", utmCampaign)
  scriptParams.append("date", new Date().toISOString())
  scriptParams.append("campaign_name", info.caseName || "")

  const scriptUrl = `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?${scriptParams.toString()}`

  // ====================================================
  // 🚀 發送流程：ABC 平行平行發送，任意一個成功即判定成功
  // ====================================================
  try {
    const results = await Promise.allSettled([
      // A 系統
      fetch("https://leads.lixin.com.tw/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(presendA)
      }),
      // B 系統
      fetch("https://service-sys.lixin.com.tw/reserve/" + (info.caseid_j || info.caseid), {
        method: "POST",
        body: presendB
      }),
      // C 系統 (Google Script)
      fetch(scriptUrl, {
        method: "GET",
        mode: "no-cors",
        keepalive: true
      })
    ])

    const aSuccess = results[0].status === "fulfilled" && results[0].value.ok
    const bSuccess = results[1].status === "fulfilled" && results[1].value.ok
    const cSuccess = results[2].status === "fulfilled"

    // 只要 A, B, C 有任意一個發送成功，就跳轉至感謝頁
    if (aSuccess || bSuccess || cSuccess) {
      window.location.href = "formThanks"
    } else {
      toast.error("送出失敗，請稍後再試")
    }

  } catch (err) {
    console.error("表單送出未預期異常:", err)
    toast.error("系統錯誤")
  } finally {
    sending.value = false
  }
}
</script>