<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <div class="order-title text-center" v-if="info.order.title" v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle" v-html="$isMobile() && info.order.subTitle_mo?info.order.subTitle_mo:info.order.subTitle"></div>

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name"><span>姓名<span>*</span></span>
          <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" /></label>
          <div class="gender">
          <label><input  type="radio" name="gender" value="男" 
              @input="(event) => (formData.gender = event.target.value)">先生</label>
          <label><input  type="radio" name="gender" value="女" 
              @input="(event) => (formData.gender = event.target.value)">女士</label>
        </div>
            <label class="row"><span>手機<span>*</span></span>
              <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" /></label>

<!-- 動態 select 欄位產生 預算 用途 等 在index.js控制  -->
<template v-for="(fieldData, fieldKey) in selectFields" :key="fieldKey">
    <label class="row">
      <span>{{ fieldData.title }}<span v-if="fieldData.bypass">*</span></span>
      <select
        class="select w-full rounded-none bg-white"
        v-model="formData[fieldKey]"
      >
        <option value="" disabled>{{ fieldData.hold }}</option>
        <option
          v-for="option in fieldData.option"
          :value="option"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
    </label>
  </template>
<!-- 動態 select end-->



        <!--  -->
          <label class="row"><span>居住縣市</span>
          <select class="select w-full rounded-none" v-model="formData.city">
            <option value="" selected disabled>請選擇城市</option>
            <option v-for="city in cityList" :value="city.value" :key="city">
              {{ city.label }}
            </option>
          </select></label>
          <label class="row"><span>居住地區</span>
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
        <p class="text-[#666]">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#A30C24] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send --><div class="sendall mt-8 mb-12 mx-auto" style="font-size:20px;font-weight: 400;
    line-height: 3.3;height:3.3em">
      <button class="send hover:scale-90 btn cursor-pointer" v-if="!submitted" @click="send" :disabled="sending">
  送出表單
</button>
<div v-else class="send-load text-[#333]" style="letter-spacing: 0.7em;
  text-indent: 0.9em;
  height:100%;">
  <svg
    class="h-5 w-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24" style=" display: inline-block;margin:0 .8em"
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
    >
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 12 12"
      to="360 12 12"
      dur="1s"
      repeatCount="indefinite" /></path>
  </svg>
  <span>發送中...</span>
</div>
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

$o-title-c:#A30C24; //.order-title

.order {
  width: 100%;
  padding-top: size(40);
  font-size:16px;

.order-section {
  position: relative;
  overflow: hidden;
  min-height: size(500);
}
.order-title {
  font-size: 2.5em;
  font-weight: 400;
  color: $o-title-c;
  padding-top:1.5em;
}
  .order-subTitle{
    font-size: 1.0625em;
    padding-top:.5em;
    letter-spacing: .1em;
  }

  .form {
    width: size(920);
    min-width: 750px;
    //  height: 350px;
    gap: 4em;
    margin-top: 2.8em;
    margin-bottom: 3em;
    z-index: 50;
    align-items: stretch;

    .left {position: relative;
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
    .row{background: #fff;border: 1px solid #999;color: #000;
      display: flex;width: 100%;
    align-items:center;
      > span{
        width: 5.5em;
        text-align: left;padding-left:1em ;
        > span{color: #F00;
          }
      }
      input,select{background: inherit;flex: 1;}
      option{color: #666;}
      select{background:url("//h35.banner.tw/img//select.svg") no-repeat calc(100% - .5em) 100%;
      background-size:auto 200%;
      transition: background .3s;
      &:focus{
        background-position:calc(100% - .5em) 0%;
      }
      }
       &.name{width: calc(100% - 3.8em);}//沒有性別的話這條槓掉
    }
    .gender{display: flex;position: absolute;right: 0; flex-direction:column;
      label:first-child{margin-bottom: .3em;}
      input{margin-right: .3em;}
    }
  }
  .send {
  font-size:20px;
    font-size:inherit;
    background-color: #A30C24;
    //border: 1px solid #FFF9;
    border:0;
  letter-spacing: 0.9em;
    text-indent: 0.9em;
    height:100%;
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
    .order-subTitle{
     // font-size: sizem(13);
      padding-top:0;
    }


    .form {
      width: sizem(310);
      min-width: 0;
      flex-direction: column;
      gap: 0;margin: 2em auto 1.1em;
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
        height:6.25em;
        margin-top: 1.1em;

        .row{
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
import {computed, getCurrentInstance, ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

// const selectFields = info.selectFields

import { useToast } from "vue-toastification"
const toast = useToast()

const sending = ref(false)
const submitted = ref(false)

// 後端那 name phone email msg 為必要欄位 請勿刪除
const requiredFields = {
  // 固定必要欄位 (請勿刪)
  name: "姓名",
  phone: "手機",
  email: "信箱",
  msg: "備註訊息",
  city: "居住縣市",
  area: "居住地區",
  policyChecked: "個資告知事項聲明",
  r_verify: "機器人驗證"
}

// selectFields
const selectFields = info.selectFields || {}

// 初始 formData（包含 selectFields 欄位）
const formData = reactive({
  ...Object.keys(requiredFields).reduce((acc, key) => {
    acc[key] = key === "policyChecked" || key === "r_verify" ? false : ""
    return acc
  }, {}),
  ...Object.keys(selectFields).reduce((acc, key) => {
    acc[key] = ""
    return acc
  }, {})
})

// bypass（非必填欄位，根據 selectFields 的 bypass 設定）
const staticBypass = ["email", "msg", "city", "area"]
const bypass = [
  ...staticBypass,
  ...Object.entries(selectFields)
    .filter(([_, field]) => field.bypass !== true)
    .map(([key]) => key)
]

// 中文對照（formDataRef）
const formDataRef = {
  ...requiredFields,
  ...Object.entries(selectFields).reduce((acc, [key, val]) => {
    acc[key] = val.title || key
    return acc
  }, {})
}

const areaList = ref([])

watch(
  () => formData.city,
  (newVal, oldVal) => {
    areaList.value = renderAreaList(newVal)
    formData.area = areaList.value[0].value
  }
)
// 新系統這裡需調整
/*
const onRecaptchaVerify = (token) => {
  formData.r_verify = token;
}
const onRecaptchaUnVerify = () => {
  formData.r_verify = false
}*/
const send = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const utmSource = urlParams.get("utm_source") || "null";
  const utmMedium = urlParams.get("utm_medium") || "null";
  const utmContent = urlParams.get("utm_content") || "null";
  const utmCampaign = urlParams.get("utm_campaign") || "null";

  const time = new Date();
  const date = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  let pass = true;
  let unfill = [];

  // 性別加入姓名
  if (formData.gender) {
    const genderTag = `(${formData.gender})`;
    if (!formData.name.endsWith(genderTag)) {
      formData.name += genderTag;
    }
  }

  // 必填驗證
  for (const [key, value] of Object.entries(formData)) {
    if (!bypass.includes(key) && (value === "" || value === false)) {
      unfill.push(formDataRef[key] || key);
      pass = false;
    }
  }

  if (!pass) {
    toast.error(`「${unfill.join(", ")}」為必填或必選`);
    return;
  }

  // 手機驗證
  const MobileReg = /^(09)[0-9]{8}$/;
  if (!formData.phone.match(MobileReg)) {
    toast.error("手機格式錯誤 (09開頭10位數字)");
    return;
  }

  if (sending.value) return;

  sending.value = true;
  submitted.value = true;

  // ===== 建立 API 結構 =====
  const presend = {
    caseId: info.caseid,
    form: {}
  };

  // 塞入所有表單資料
  for (const [key, value] of Object.entries(formData)) {
    if (key !== "policyChecked" && key !== "r_verify") {
      presend.form[key] = value;
    }
  }

  // msg 改成 note
  presend.form.note = formData.msg;
  delete presend.form.msg;

  // UTM
  presend.form.utm_source = utmSource;
  presend.form.utm_medium = utmMedium;
  presend.form.utm_content = utmContent;
  presend.form.utm_campaign = utmCampaign;

  // ===== Google Sheet 備份 =====
  fetch(
    `https://script.google.com/macros/s/AKfycbzqyW-sbiYwNAwunTDkp3ncVcvPnPEkvsUQWswyprd2b1V2u1HQ/exec?name=${formData.name}
    &phone=${formData.phone}
    &email=${formData.email}
    &cityarea=${formData.city}${formData.area}
    &msg=${formData.room_type || ""}；${formData.msg}
    &utm_source=${utmSource}
    &utm_medium=${utmMedium}
    &utm_content=${utmContent}
    &utm_campaign=${utmCampaign}
    &date=${date}
    &campaign_name=${info.caseName}`,
    {
      method: "GET"
    }
  );

  // ===== API =====
  fetch("https://mail-service-735828106799.asia-east1.run.app/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(presend)
  })
    .then((response) => {
      if (response.status === 200) {
        window.location.href = "formThanks";
      } else {
        return response.json().then((err) => {
          console.error("後端錯誤訊息：", err);
          toast.error(err.message || "提交失敗");
        });
      }
    })
    .catch((error) => {
      console.error("傳送失敗：", error);
      toast.error("無法連線或伺服器錯誤");
    })
    .finally(() => {
      sending.value = false;
    });
};
</script>
