<template>
  <div id="order" class="order relative bg-[#fff] text-center">
    <div class="order-section">
      <!-- Title -->
      <div class="order-title text-center text-[#fff]">{{ info.order.title }}</div>
      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image -->
      <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="icon" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="icon" srcset="" data-aos="fade"
      data-aos-duration="1000"> -->

      <!-- Custom Image -->
      <!-- <img class="decor" v-if="!$isMobile()" data-aos="fade" src="@/section/form/decor.png" alt="" srcset=""> -->

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center items-start" data-aos="zoom-in">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name w-full">
          <input type="text" placeholder="姓名" class="input w-full rounded-none input-style" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" /></label>
            <label class="row w-full">
              <input type="text" placeholder="手機" class="input w-full rounded-none input-style" :value="formData.phone"
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
          <label class="row w-full">
          <select class="select w-full rounded-none input-style select-style" v-model="formData.city">
            <option value="" selected disabled>居住縣市</option>
            <option v-for="city in cityList" :value="city.value" :key="city">
              {{ city.label }}
            </option>
          </select></label>
          <label class="row w-full">
          <select class="select w-full rounded-none input-style select-style" v-model="formData.area">
            <option value="" selected disabled>居住地區</option>
            <option v-for="area in areaList" :value="area.value" :key="area">
              {{ area.label }}
            </option>
          </select></label>
        </div>
        <div class="right h-full">
          <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
            class="row textarea w-full h-full rounded-none input-style" placeholder="備註訊息"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-[#FFF]">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#FF3EA1] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send --><div class="sendall mt-8 mx-auto" style="font-size:20px;font-weight: 400;
    line-height: 3.3;height:3.3em">
      <button class="send hover:scale-90 btn cursor-pointer" v-if="!submitted" @click="send" :disabled="sending">
      立即預約
</button>
<div v-else class="send-load text-[#FFF]" style="letter-spacing: 0.7em;
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
    <Map />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order-section {
  background-image: url('@/section/form/bg.webp');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: size(0);
  position: relative;
  height: auto;
  padding-top: size(100);
  overflow: hidden;

  .z-10 {
    z-index: 10;
    position: relative;
  }

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }

  .decor {
    position: absolute;
    width: size(316);
    top: size(67);
    right: 0;
    z-index: 10;
    transform: scale(2.5) translate(-50%,-50%) rotate(12deg);
  }
}

.order {
  width: 100%;
  padding-top: size(0);

  .order-title {
    @apply relative z-10 font-['noto_sans_tc'];
    font-size: size(43);
    font-weight: 500;
    margin-bottom: size(60);
    width: size(292);
    text-align: center;
    margin: 0 auto;
    margin-bottom: size(20);

    // &::after {
    //   content: '';
    //   width: 150%;
    //   height: 110%;
    //   background-image: url('@/section/form/title_decor.png');
    //   background-size: contain;
    //   background-position: center;
    //   background-repeat: no-repeat;
    //   position: absolute;
    //   left: -25%;
    //   top: 0;
    // }
  }

  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
    background-color: #055F76;
  }

  .order-title-img {
    display: block;
    width: size(859);
    margin: 0 auto;
    margin-bottom: size(40);
  }

  .form {
    width: size(920);
    height: 300px;
    gap: size(80);
    margin-bottom: size(50);
    z-index: 50;

    .input-style {
      border-radius: 0;
      background-color: rgba(255,255,255,0.1);
      border: 1px solid #fff;
      color:#fff;

      &::placeholder {
        color: #fff !important;
      }

    }

    .select-style {
      option {
        background-color: #000;
      }
    }

    .left {
      width: size(419);
    }

    .right {
      width: size(419);
    }

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #fff;
      position: absolute;
    }
  }

  .send {
    font-size: size(22);
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background-color: #FF3EA1;
    width: size(350);
    height: 3.3em;
    line-height: 3.3;
    border: 0;
    border-radius: 10px;
    z-index: 10;
    position: relative;
  }

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width:1300px) {
  .order-section {
    padding-top: size(200)
  }
}
@media screen and (max-width:768px) {
  .order-section {
    background-image: url('@/section/form/bg_m.webp');
    height: auto;
    padding-bottom: sizem(0);
    padding-top: sizem(120);
    position: relative;
    overflow: hidden;
  &::after {
    width: 100%;
    height: 100%;
  }

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{sizem(30)};
      bottom: sizem(590);
    }

    .decor {
      position: absolute;
      width: sizem(148);
      top: -#{sizem(50)};
      right: -#{sizem(35)};
    }
  }

  .order {
    width: 100%;
    // border-radius: sizem(68) sizem(68) 0 0;
    padding-top: sizem(0);
    margin-top: sizem(0);


    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055F76;
    }

    .order-title {
      font-size: sizem(29);
      font-weight: 700;
      margin-bottom: sizem(30);
      width: 100%;
    }

    .order-title-img {
      width: sizem(208);
      margin-bottom: sizem(20);
    }

    .form {
      width: sizem(310);
      height: auto;
      gap: sizem(15);
      margin-bottom: sizem(20);
      flex-direction: column;

      .left {
        width: 100%;
        gap: sizem(15);
      }

      .right {
        width: 100%;
        height: sizem(100);
      }

      &::after {
        display: none;
      }
    }

    .send {
      font-size: sizem(21);
      width: 92%;
      border-radius: sizem(10);
    }

    .control {
      font-size: sizem(14.6);
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
const onRecaptchaVerify = (token) => {
  formData.r_verify = token;
}
const onRecaptchaUnVerify = () => {
  formData.r_verify = false
}

const send = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || "null"; // 确保有有效的来源
  const utmMedium = urlParams.get("utm_medium") || "null";
  const utmContent = urlParams.get("utm_content") || "null";
  const utmCampaign = urlParams.get("utm_campaign") || "null";
  const pad = (n) => String(n).padStart(2, '0');
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  

  const presend = new FormData();
  let pass = true;
  let unfill = [];
  let idx = 0;

//有性別的話 性別顯示
if (formData.gender) {
  formData.name = `${formData.name}(${formData.gender})`;
}


  // 验证必填字段
  for (const [key, value] of Object.entries(formData)) {
  if (!bypass.includes(key) && (value === "" || value === false)) {
    unfill.push(formDataRef[key] || key)
    pass = false
  }
  if (key !== "r_verify" && key !== "policyChecked") {
    presend.append(key, value)
  }
}
  
  presend.append("utm_source", utmSource);
  presend.append("utm_medium", utmMedium);
  presend.append("utm_content", utmContent);
  presend.append("utm_campaign", utmCampaign);
  presend.append("message", formData.msg)
  presend.append("case_code", info.case_code?info.case_code:info.caseid );

  // 如果有必填字段为空，返回
  if (!pass) {
    toast.error(`「${unfill.join(", ")}」為必填或必選`);
    return;
  }

  // 手机格式验证
  const MobileReg = /^(09)[0-9]{8}$/;
  if (!formData.phone.match(MobileReg)) {
    toast.error("手機格式錯誤 ( 09開頭10位數字 )");
    return;
  }

  // 如果通过验证
  if (pass && !sending.value) {
  sending.value = true;
  submitted.value = true;
    /*
    */
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &email=${formData.email}
      &cityarea=${formData.city}${formData.area}
      &msg=${formData.room_type}；${formData.msg}
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
   //caseid 在index.js裡設定
    fetch("https://service-sys.lixin.com.tw/reserve/"+ info.caseid, {
      method: "POST",
      body: presend,
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "formThanks";
        } else {
          return response.json().then(err => {
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
  }
};
</script>