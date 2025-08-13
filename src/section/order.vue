<template>
  <div id="order" class="order relative text-center">
    <img class="leaf-left pc" src="./order/leaf-left.png" alt="">
    <img class="leaf-left ph" src="./order/leaf-left-m.png" alt="">
    <img class="leaf-right" src="./order/leaf-right.png" alt="">
    <div class="order-section">
      <!-- Title -->
      <div class="order-title font-['Noto_Serif_TC',serif] text-center">{{ info.order.title }}</div>
      <div class="order-subTitle text-center">{{ info.order.subTitle }}</div>

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name"><span>姓名<span>(必填)</span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" /></label>

          <label class="row"><span>手機<span>(必填)</span></span>
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" /></label>

          <!-- 動態 select 欄位產生 預算 用途 等 在index.js控制  -->
          <template v-for="(fieldData, fieldKey) in selectFields" :key="fieldKey">
            <label class="row">
              <span>{{ fieldData.title }}<span v-if="fieldData.bypass">*</span></span>
              <select class="select w-full rounded-none bg-white" v-model="formData[fieldKey]">
                <option value="" disabled>{{ fieldData.hold }}</option>
                <option v-for="option in fieldData.option" :value="option" :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </template>
          <!-- 動態 select end-->
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
            class="row textarea w-full h-full rounded-none" placeholder="請輸入您的留言"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-[#423E3D]">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#52777D] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-3 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send -->
      <div class="sendall mt-8 mx-auto">
        <button class="send hover:scale-90 btn cursor-pointer" v-if="!submitted" @click="send" :disabled="sending">
          即刻預約
        </button>
        <div v-else class="send-load">
          <svg class="animate-spin h-5 w-5 text-[#52777D]" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
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

.order {
  width: 100%;
  padding-top: size(115);
  background: linear-gradient(to right, #f7f7f7 0%, #d7d7d7 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  .leaf-left {
    width: size(465);
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes an {
    to {
      transform: translate(0)
    }
  }

  .leaf-right {
    width: size(465);
    position: absolute;
    bottom: calc(35% + #{size(440 - 1080 * .5)});
    right: 0;
    animation: an 2s ease-in-out alternate infinite;
    transform: skewX(-3deg);
    transform-origin: right bottom;
  }

  .order-section {
    background-image: url(./order/bg.png);
    background-size: auto 100%;
    position: relative;
    overflow: hidden;
    min-height: size(500);
  }

  .order-title {
    font-size: size(45);
    font-weight: 800;
    color: #423E3D;

    .line {
      width: size(439);
    }
  }

  .order-title-img {
    width: size(1186);
    margin: size(80) auto size(35);
  }

  .order-subTitle {
    font-size: size(17);
    padding-top: .4em;
    letter-spacing: .1em;
    color: #423E3D;
  }

  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
  }

  .form {
    width: size(920);
    min-width: 700px;
    gap: size(80);
    margin-top: size(30);
    margin-bottom: size(40);
    z-index: 50;
    align-items: stretch;

    .left {
      position: relative;
      flex: 1;
      gap: size(15);
      align-items: flex-start;
    }

    .right {
      flex: 1;
      height: auto;
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
      color: #423E3D;
      display: flex;
      width: 100%;
      align-items: center;

      >span {
        width: 5.5em;
        text-align: left;
        padding-left: 1em;
        font-weight: 600;

        >span {
          color: #52777D;
          font-size: 12px;
        }
      }

      input,
      select {
        background: inherit;
        flex: 1;
        font-weight: 200;
        color: #666666;

        //姓名、手機、備註的註解文字
        &::placeholder {
          font-weight: 200;
          color: #666666;
        }
      }

      option {
        font-weight: 200;
        color: #666666;
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

  //備註
  textarea {
    color: #666666 !important;

    &::placeholder {
      font-weight: 200;
      color: #666666;
    }
  }

  .sendall {
    font-size: 20px;
    font-weight: 400;
    line-height: 3.3;
    color: #fff;
    height: 3.3em;
  }

  .send {
    font-size: 20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #FFF;
    background-color: #423E3D;
    border: 0;
    width: 320px;
    height: 3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
    border-radius: 0;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .send-load {
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    height: 100%;
  }

  .animate-spin {
    display: inline-block;
    margin: 0 .5em;
    animation: spin 1s linear infinite;
  }

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

//立昕
.footer {
  width: 100%;
  height: 40px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.pc {
  display: block;
}

.ph {
  display: none;
}

@media screen and (max-width:768px) {

  .order-section {
    min-height: sizem(800);
    position: relative;
  }

  .order {
    width: 100%;
    background: linear-gradient(to right, #E7E7E7 0%, #F6F6F6 100%);

    .leaf-left {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .leaf-right {
      width: size(1300);
      position: absolute;
      bottom: calc(17% + #{size(440 - 1080 * .5)});
    }

    .order-title-img {
      width: sizem(250);
      margin: sizem(50) auto sizem(30);
    }

    .order-title {
      font-size: sizem(27);
      margin-top: size(100);

      .line {
        width: sizem(258);
      }
    }

    .order-subTitle {
      font-size: sizem(11);
      padding-top: size(50);
    }

    .form {
      width: sizem(310);
      min-width: 0;
      height: auto;
      gap: sizem(10);
      margin-bottom: sizem(10);
      flex-direction: column;
      margin-top: sizem(20);

      .row {
        &>span {
          font-size: size(60);

          >span {
            font-size: 10px;
          }
        }

        select {
          font-size: size(50);
        }

        input {
          font-size: size(50);
        }
      }

      .left {
        width: 100%;
        gap: sizem(15);

        label {
          height: sizem(50);
        }
      }

      .right {
        width: 100%;
        height: sizem(100);

        .row {
          height: 10em;
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
      width: sizem(310);
      height: sizem(72);
      font-size: size(100);
    }

    .control {
      font-size: sizem(14.6);
    }
  }

  //備註
  textarea {
    font-size: size(50) !important;
  }

  .pc {
    display: none;
  }

  .ph {
    display: block;
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
import { computed, getCurrentInstance, ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

// const selectFields = info.selectFields

import { useToast } from "vue-toastification"
const toast = useToast()

const sending = ref(false)

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
  presend.append("case_code", info.case_code ? info.case_code : info.caseid);

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
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &email=${formData.email}
      &cityarea=${formData.city}${formData.area}
      &msg=${formData.room_type}；${formData.budget}；${formData.msg}
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
    fetch("https://service-sys.lixin.com.tw/reserve/" + info.caseid, {
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