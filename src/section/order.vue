<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <img src="./s1/title.svg" alt="" class="order-title-img">
   <!--  <img src="./s1/title.svg" alt="" class="order-title-img" v-if="!isMobile">
    <img src="./s1/titlem.svg" alt="" class="order-title-img" v-else> -->
<!--
      <div class="order-title text-center" v-if="info.order.title" v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle"
        v-html="$isMobile() && info.order.subTitle_mo ? info.order.subTitle_mo : info.order.subTitle">
      </div>
  -->
      <!-- FORM -->
      <div class="form mx-auto relative flex justify-center">

        <div class="left h-full flex flex-col justify-between items-center">
          <div class="name">
          <!-- 姓名 -->
          <label class="row">
            <span>姓名<span>*</span></span>
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
          </div>

          <!-- 手機 -->
          <label class="row">
            <span>手機<span>*</span></span>
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

      <!-- 同意 -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" class="checkbox" />
        <p class="text-[#fff]">
          本人知悉並同意<label for="policy-modal" class="text-[#ff0] cursor-pointer">「個資告知事項聲明」</label>內容
        </p>
      </div>

      <Policy />

      <!-- recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8" :sitekey="info.recaptcha_site_key_v2" @verify="onRecaptchaVerify"
        @expired="onRecaptchaExpired" />

      <!-- submit -->
      <div class="sendall mt-8 mb-12 mx-auto">

        <button v-if="!submitted" class="send" :disabled="sending" @click="send">
          送出表單
        </button>

        <div v-else class="send-load">
          發送中...
        </div>

      </div>

      <ContactInfo />
    </div>

    <Map v-if="info.address" />
    <HouseInfo />

  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";

$o-title-c: #A30C24; //.order-title

.order {
  width: 100%;
  padding-top: size(100);
  font-size: 16px;

  .order-section {
    position: relative;
    overflow: hidden;
    min-height: size(500);
  }

.order-title-img{
  width:sizem(250);
  @media screen and (min-width: 768px) {
 //  width: min(1200px, 95%); //最大1200px
  width:size(500);
    margin-bottom: size(20);
  margin: 0 auto 0 auto;
  display: block;
  }
}
  .order-title {
    font-size: 2.5em;
    font-weight: 400;
    color: $o-title-c;
    padding-top: 1.5em;
  }

  .order-subTitle {
    font-size: 1.0625em;
    padding-top: .5em;
    letter-spacing: .1em;
  }

  .form {
    width: min(1200px, 95%); //最大1200px
    //  height: 350px;
    gap: 4em;
    margin-top: 2.8em;
    margin-bottom: 3em;
    z-index: 50;
    align-items: stretch;

    .left {
      position: relative;
      flex: 1;
      gap: 1.25em;
      align-items: flex-start;
      //   width: size(419);
    }

    .right {
      flex: 1;
      height: auto;
      //  width: size(419);
    }
/*
    &::after {
      content: "";
      width: 1px;
      height: 100%;
      background-color: #8dcaff99;
      position: absolute;
      top: 0;left:0;right: 0;margin: auto;
    }
*/

    .row {
      background: #fff;
      border: 1px solid #999;
      color: #000;
      display: flex;
      width: 100%;
      align-items: center;

      >span {
        min-width: 5.5em;
        text-align: left;
        padding-left: 1em;

        >span {
          color: #F00;
        }
      }

      input,
      select {
        background: inherit;
        flex: 1;
      }

      option {
        color: #666;
      }

      select {
        background: url("//h35.banner.tw/img//select.svg") no-repeat calc(100% - .5em) 100%;
        background-size: auto 200%;
        transition: background .3s;

        &:focus {
          background-position: calc(100% - .5em) 0%;
        }
      }

      //沒有性別的話這條槓掉
    }

      .name {
        width: 100%;
        display: flex;
        .row{flex: 1;}
      // width: calc(100% - 3.8em);
      }
    .gender {
      display: flex;
      right: 0;
      flex-direction: column;
      margin-left: .7em;
      color: #fff;

      label:first-child {
        margin-bottom: .3em;
      }

      input {
        margin-right: .3em;
      }
    }
  }

  .send {
    font-size: 1.4em;
    background-color: #2ea724;
    //border: 1px solid #FFF9;
    border: 0;
    padding: .7em 0;
    letter-spacing: 0.5em;
    line-height: 1.5;
    text-indent: 0.5em;
    border-radius: .5em;
    text-align: center;
    width: 14em;
    z-index: 10;
    color: #fff;
    position: relative;
    transition: transform .5s;
    margin-bottom: 2em;
    &:hover{transform: scale(1.1);}
  }
  .send-load{color: #fff;}

  .control {
    font-size: 16px;
    color: #000;
    position: relative;
    input[type="checkbox"] {border: 1px solid #fff;}
  }
 
}

@media screen and (max-width:768px) {
  .order-section {
    min-height: sizem(800);
    position: relative;
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
  padding-top: sizem(96);
    padding-bottom: sizem(63);

    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055F76;
    }

    .order-title {
      /*  font-size: sizem(27);
      padding-top:2em;
      .line{width: sizem(258);
      
      }*/
    }

    .order-subTitle {
      // font-size: sizem(13);
      padding-top: 0;
    }


    .form {
      width: sizem(310);
      min-width: 0;
      flex-direction: column;
      gap: 0;
      margin: 2em auto 1.1em;
      /*  height: auto;
      gap: sizem(15);
      margin-bottom: sizem(20);
      margin-top: sizem(20);*/

      .left {
        width: 100%;
        //gap: sizem(15);
      }

      .right {
        width: 100%;
        height: 6.25em;
        margin-top: 1.1em;

        .row {
          height: 7em;
        }
      }

      &::after {
        display: none;
      }
    }

    .send {
      width: sizem(310);
    }

    .control {
      font-size: 14px;
    }
  }
}
</style>

<script setup>
// 2026-10-28 修正版
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
  // 🚀 發送流程：ABC 
  // ====================================================
  try {
  // C：備份，不等待
  fetch(scriptUrl, {
    method: "GET",
    mode: "no-cors",
    keepalive: true
  }).catch(() => {})

  // B：過渡期仍使用，不擋跳轉，但失敗要留紀錄
  fetch("https://service-sys.lixin.com.tw/reserve/" + (info.caseid_j || info.caseid), {
    method: "POST",
    body: presendB,
    keepalive: true
  }).catch((e) => console.warn("B 系統送出失敗", e))

  // A：主要系統，等它成功才跳轉
  const resA = await fetch("https://leads.lixin.com.tw/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(presendA),
    keepalive: true
  })

  if (!resA.ok) throw new Error("A not ok")

  window.location.href = "formThanks"
} catch (err) {
  console.error("A 系統送出失敗:", err)
  toast.error("送出失敗，請稍後再試")
  sending.value = false
  submitted.value = false
}
}
</script>