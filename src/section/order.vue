<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <div class="order-title text-center font-['Noto_Serif_TC',serif]" v-if="info.order.title"
        v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle"
        v-html="$isMobile() && info.order.subTitle_mo ? info.order.subTitle_mo : info.order.subTitle"></div>

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name"><span>姓名<span>*</span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" /></label>

          <label class="row"><span>手機<span>*</span></span>
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" /></label>

          <!-- 動態 select 欄位產生 預算 用途 等 在index.js控制  -->
          <template v-for="(fieldData, fieldKey) in selectFields" :key="fieldKey">
            <label class="row" v-if="!fieldData.hidden">
              <span>{{ fieldData.title }}<span v-if="fieldData.required">*</span></span>
              <select class="select w-full rounded-none bg-white" v-model="formData[fieldKey]">
                <option value="" disabled>{{ fieldData.hold }}</option>
                <option v-for="option in fieldData.option" :value="option" :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </template>
          <!-- 動態 select end-->



          <!--  -->
          <label class="row" v-if="info.locationConfig?.city?.enabled"><span>居住縣市<span v-if="info.locationConfig?.city?.required">*</span></span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value" :key="city">
                {{ city.label }}
              </option>
            </select></label>
          <label class="row" v-if="info.locationConfig?.area?.enabled"><span>居住地區<span v-if="info.locationConfig?.area?.required">*</span></span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value" :key="area">
                {{ area.label }}
              </option>
            </select></label>
        </div>
        <div class="right">
          <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
            class="row textarea w-full h-full rounded-none" placeholder="(非必填) 請輸入您的留言"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-[#fff]">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#FF0] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaExpired" />

      <!-- Send -->
      <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer" @click="send()">
        {{ sending ? '發送中..' : '立即預約' }}
      </div>

      <!-- Contact Info -->
      <ContactInfo />
    </div>


    <!-- Map -->
    <Map v-if="info.address" />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";


.order-section {
  position: relative;
  // padding-top: size(406);
  overflow: hidden;
  min-height: size(500);
  background: url("@/section/form/bg2.png");
  background-size: auto;
  background-position: top;

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
  // padding-top: size(10);
  // background: linear-gradient(to bottom, #195c45, #000704);



  .order-title {
    font-size: size(40);
    font-weight: 700;
    color: #F8F66F;
    padding-top: 1em;

    //padding-bottom:.3em;
    //filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
    .line {
      width: size(439);
    }
  }

  .order-title-img {
    width: size(1008);
    margin-bottom: size(155);
  }

  .order-subTitle {
    font-size: size(17);
    color: #F8F66F;
    padding-top: .8em;
    padding-bottom: 1em;
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

  .form {
    width: size(920);
    min-width: 750px;
    //  height: 350px;
    gap: size(80);
    margin-top: 0.5vw;
    margin-bottom: size(80);
    z-index: 50;
    align-items: stretch;

    .left {
      position: relative;
      flex: 1;
      gap: size(32);
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
      background-color: #0003;
      position: absolute;
    }

    .row {
      background: #fff;
      border: 1px solid #999;
      color: #000;
      display: flex;
      width: 100%;
      align-items: center;

      >span {
        width: 5.5em;
        text-align: left;
        padding-left: 1em;

        >span {
          color: #F00; //font-size: 12px;
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

      //&.name{width: calc(100% - 3.8em);}//沒有性別的話這條槓掉
    }

    .gender {
      display: flex;
      position: absolute;
      right: 0;
      flex-direction: column;

      label:first-child {
        margin-bottom: .3em;
      }

      input {
        margin-right: .3em;
      }
    }
  }

  .send {
    font-size: 20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #000;
    background-color: #F8F66F;
    //border: 1px solid #FFF9;
    border: 0;
    border-radius: .5em;

    width: 308px;
    height: 3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
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
    background: url("@/section/form/bgm2.png");
    background-size: cover;
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
      padding-top: 1em;
      padding-bottom: .3em;

      .line {
        width: sizem(258);
      }
    }

    .order-subTitle {
      font-size: sizem(13);
      padding-bottom: 0;
    }


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

        .row {
          height: 7em;
        }
      }

      &::after {
        display: none;
      }
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
  // 留言：沒填時一律送「無留言」（B 系統留言空白會被擋）
  const msgText = (formData.msg || "").trim() || "無留言"

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
  presendA.form.note = msgText
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
  if (extraFieldsForBMessage.length > 0) {
    extraFieldsForBMessage.push(`留言：${msgText}`)
  } else {
    extraFieldsForBMessage.push(msgText)
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

  if (dynamicMsgParts.length > 0) {
    dynamicMsgParts.push(`留言：${msgText}`)
  } else {
    dynamicMsgParts.push(msgText)
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
  const t = new Date(Date.now() + 8 * 60 * 60 * 1000)
  const pad = (n) => String(n).padStart(2, "0")
  const date = `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())} ${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`
  scriptParams.append("date", date)
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
    }).catch(() => { })

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
