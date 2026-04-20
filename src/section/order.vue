<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">

      <div class="order-title text-center" v-if="info.order.title" v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle"
        v-html="$isMobile() && info.order.subTitle_mo ? info.order.subTitle_mo : info.order.subTitle">
      </div>

      <!-- FORM -->
      <div class="form mx-auto relative flex justify-center">

        <div class="left h-full flex flex-col justify-between items-center">

          <!-- 姓名 -->
          <label class="row name">
            <span>姓名<span>*</span></span>
            <input v-model="formData.name" type="text" class="input w-full rounded-none" />
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
            <span>手機<span>*</span></span>
            <input v-model="formData.phone" type="text" class="input w-full rounded-none" />
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

              <input v-else v-model="formData[key]" type="text" class="input w-full rounded-none"
                :placeholder="field.hold" />
            </label>
          </template>

          <!-- 縣市 -->
          <label class="row" v-if="info.locationConfig?.city?.enabled">
            <span>居住縣市<span v-if="info.locationConfig?.city?.required">*</span></span>

            <select v-model="formData.city">
              <option value="" disabled>請選擇城市</option>
              <option v-for="c in cityList" :key="c.value" :value="c.value">
                {{ c.label }}
              </option>
            </select>
          </label>

          <!-- 地區 -->
          <label class="row" v-if="info.locationConfig?.area?.enabled && formData.city">
            <span>居住地區<span v-if="info.locationConfig?.area?.required">*</span></span>

            <select v-model="formData.area">
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
        <p class="text-[#666]">
          本人同意
          <label for="policy-modal" class="text-[#A30C24] cursor-pointer">
            個資告知事項聲明
          </label>
        </p>
      </div>

      <Policy />

      <!-- recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8" :sitekey="info.recaptcha_site_key_v2" @verify="onRecaptchaVerify"
        @expired="onRecaptchaExpired" />

      <!-- submit -->
      <div class="sendall mt-8 mb-12 mx-auto">

        <button v-if="!submitted" class="send btn" :disabled="sending" @click="send">
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
  padding-top: size(40);
  font-size: 16px;

  .order-section {
    position: relative;
    overflow: hidden;
    min-height: size(500);
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

    &::after {
      content: "";
      width: 1px;
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

      &.name {
        width: calc(100% - 3.8em);
      }

      //沒有性別的話這條槓掉
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
    font-size: inherit;
    background-color: #A30C24;
    //border: 1px solid #FFF9;
    border: 0;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    height: 100%;
    border-radius: .5em;
    width: 308px;
    z-index: 10;
    color: #fff;
    position: relative;
  }

  .control {
    font-size: 16px;
    color: #000;
    position: relative;
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
// 🔥 SUBMIT
// ==========================
const send = async () => {

  const urlParams = new URLSearchParams(window.location.search)

  const utm = {
    source: urlParams.get("utm_source") || "null",
    medium: urlParams.get("utm_medium") || "null",
    content: urlParams.get("utm_content") || "null",
    campaign: urlParams.get("utm_campaign") || "null"
  }

  // ======================
  // gender tag
  // ======================
  if (formData.gender && formConfig.gender?.enabled) {
    const tag = `(${formData.gender})`
    if (!formData.name.includes(tag)) {
      formData.name += tag
    }
  }

  // ======================
  // validation
  // ======================
  const unfill = []

  for (const [key, value] of Object.entries(formData)) {

    if (!isRequired(key)) continue

    if (value === "" || value === false) {
      unfill.push(key)
    }
  }

  if (unfill.length) {
    toast.error(`請填寫：${unfill.join(", ")}`)
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

  // ======================
  // A API
  // ======================
  const presendA = {
    caseId: info.caseidA,
    form: {},
    validation: {
      siteKey: info.recaptcha_site_key_v2,
      recaptchaToken: formData.r_verify
    }
  }

  for (const [k, v] of Object.entries(formData)) {
    if (["policyChecked", "r_verify"].includes(k)) continue

    // ❌ area 沒值不送
    if (k === "area" && !v) continue

    presendA.form[k] = v
  }

  presendA.form.note = formData.msg
  delete presendA.form.msg

  Object.assign(presendA.form, utm)

  // ======================
  // B API
  // ======================
  const presendB = new FormData()

  for (const [k, v] of Object.entries(formData)) {
    if (["policyChecked", "r_verify"].includes(k)) continue
    if (k === "area" && !v) continue

    presendB.append(k, v)
  }

  Object.entries(utm).forEach(([k, v]) => presendB.append(k, v))
  presendB.append("message", formData.msg)

  presendB.append(
    "case_code",
    info.case_code || info.caseidB || info.caseidA
  )

  // ======================
  // SUBMIT
  // ======================
  try {
    fetch("https://script.google.com/macros/s/AKfycbzqyW-sbiYwNAwunTDkp3ncVcvPnPEkvsUQWswyprd2b1V2u1HQ/exec")

    const [resA, resB] = await Promise.all([
      fetch("https://mail-service-735828106799.asia-east1.run.app/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(presendA)
      }),
      fetch("https://service-sys.lixin.com.tw/reserve/" + info.caseidB, {
        method: "POST",
        body: presendB
      })
    ])

    if (resA.ok || resB.ok) {
      window.location.href = "formThanks"
    } else {
      toast.error("送出失敗")
    }

  } catch (err) {
    console.error(err)
    toast.error("系統錯誤")
  } finally {
    sending.value = false
  }
}
</script>