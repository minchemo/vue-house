<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <!-- Title -->
      <div class="order-title text-center">{{ info.order.title }}</div>
      <div class="order-subTitle text-center">{{ info.order.subTitle }}</div>

      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image
      <img class="order-title-img" src="@/section/form/ordertitle.png" alt="" srcset="">
 -->
      <!-- Custom Image -->

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center z-10">
       <!--  <div class="s-order-title">
          <p>
            {{ info.order.title }}
          </p>
          <p>
            {{ info.order.subTitle }}
          </p>
        </div> -->
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row"
            ><span>姓名<span>(必填)</span></span>
            <input
              type="text"
              placeholder="姓名"
              class="input w-full rounded-none placeholder:text-[#999999]"
              :value="formData.name"
              @input="(event) => (formData.name = event.target.value)"
          /></label>
          <label class="row"
            ><span>手機<span>(必填)</span></span>
            <input
              type="text"
              placeholder="手機"
              class="input w-full rounded-none placeholder:text-[#999999]"
              :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)"
          /></label>
          <label class="row" v-if="info.ctime"><span>連絡時段</span>
            <select class="select w-full rounded-none bg-white" v-model="formData.ctime">
            <option value="" selected disabled>請選擇時段</option>
            <option v-for="ctime in info.ctime" :value="ctime" v-text="ctime" :key="ctime"></option>
          </select></label>
          <label class="row" v-if="info.room_type.length > 0"
            ><span>需求房型</span>
            <select
              class="select w-full rounded-none"
              v-model="formData.room_type"
            >
              <option value="" selected disabled>請選擇房型</option>
              <option
                v-for="room in info.room_type"
                :value="room"
                v-text="room"
                :key="room"
              ></option></select
          ></label>
          <label class="row" v-if="info.budget.length > 0"
            ><span>購屋預算</span>
            <select
              class="select w-full rounded-none bg-white"
              v-model="formData.budget"
            >
              <option value="" selected disabled>請選擇預算</option>
              <option
                v-for="budget in info.budget"
                :value="budget"
                v-text="budget"
                :key="budget"
              ></option>
            </select>
          </label>
          <label class="row"
            ><span>居住縣市</span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value" :key="city">
                {{ city.label }}
              </option>
            </select></label
          >
          <!-- -->
          <label class="row"
            ><span>居住地區</span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value" :key="area">
                {{ area.label }}
              </option>
            </select></label
          >  
        </div>
        <div class="right">
          <textarea
            :value="formData.msg"
            @input="(event) => (formData.msg = event.target.value)"
            class="row textarea w-full h-full rounded-none"
            placeholder="請輸入您的留言"
          ></textarea>
        </div>
      </div>

        <div class="flex flex-col w-full items-center">
          <!-- Policy -->
          <div
            class="flex gap-2 items-center justify-start control relative z-10 whitespace-nowrap"
          >
            <input
              type="checkbox"
              v-model="formData.policyChecked"
              :checked="formData.policyChecked"
              class="checkbox bg-white rounded-none"
            />
            <p class="text-[#000]">
              本人知悉並同意<label
                for="policy-modal"
                class="modal-button text-[#c00] cursor-pointer font-bold hover:opacity-70 whitespace-nowrap"
                >「個資告知事項聲明」</label
              >內容
            </p>
          </div>
          <Policy />

          <!-- Recaptcha -->
          <vue-recaptcha
            class="flex justify-start mt-4 relative z-10 left-0 ml-0"
            ref="recaptcha"
            :sitekey="info.recaptcha_site_key_v2"
            @verify="onRecaptchaVerify"
            @expired="onRecaptchaUnVerify"
          />
        </div>

        <!-- Send -->
        <div class="send btn cursor-pointer relative z-10" @click="send()">
          {{ sending ? "發送中.." : "即刻預約" }}
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
  @apply bg-cover bg-bottom;
  position: relative;
  overflow: hidden;
  padding: 0 0;
  padding-top: size(150);
  font-size: 0.875rem;
//  background-image: url("@/section/orderbg.jpg");

  .intro {
    @apply flex flex-col items-center justify-end relative z-[5];
    padding-bottom: size(234);
    height: size(1641);
    .logo {
      width: size(622);
    }
    .t {
      margin-top: size(330);
      color: #231815;
      text-align: center;
      font-size: size(30);
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: size(6);
    }
  }

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }
}

.order {
  @apply font-['Noto_Sans_TC'];
  position: relative;
  width: 100%;
  padding-top: 0;
  .bg {
    position: absolute;
    top: size(-140);
    left: 0;
    width: 100%;
    z-index: 2;
    user-select: none; // opacity: .7;
    pointer-events: none;
  }

  .order-title {
    font-size: size(45);
    font-weight: 700;
    color: #6D5E50;
    padding-top:2em;
  }
  .order-subTitle{
    color: #666;
    padding:.8em 0;
    letter-spacing: 0em;
    font-weight: 500;
  }

  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
    background-color: #055f76;
  }

  .form {
    // @apply left-1/2 -translate-x-1/2;
    // min-width: 680px;
    //  height: 350px;
    gap: size(80);
   //margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;
    margin: size(45) auto;
    width: size(900);
    min-width: 750px;
    flex-wrap: wrap;

    .left {
      flex: 1;
      gap: size(20);
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
      background-color: #E2EDEE;
      position: absolute;
    }
    .row {
      background: #E2EDEE;
      border: 0;
     // color: #231815;
      display: flex;
      width: 100%;
      align-items: center;
      > span {
        width: 5.5em;
        text-align: left;
        padding-left: 1em;
        font-weight: 700;
        > span {
          color: #f00;
          font-size: 12px;
        }
      }
      input,
      select {
        @apply font-bold;
        background: none;
        flex: 1;
        font-weight: 500;
      }
      option {
        color: #231815;
      }
      select {
        background: url("//h65.tw/img/select.svg") no-repeat calc(100% - 0.5em)
          100%;
        background-size: auto 200%;
        transition: background 0.3s;
        // filter: brightness(0) invert(1);

        &:focus {
          background-position: calc(100% - 0.5em) 0%;
        }
      }
      &::placeholder {
        color: #231815;
      }
      textarea {
        @apply text-[#231815];
      }
    }
  }
  .form-send {
    margin: 0 auto size(45) auto;
    width: size(900);
  }
  .send {
    font-size: 1.43em;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background: #6D5E50;
    border-radius: 10px;
    border: 0;
margin-top: 1.5em;
    width:22em;
    height: 4.35em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 700;
    position: relative;

    @apply hover:bg-[#bd8e48] hover:text-white;
  }

  .control {
  //  font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width: 768px) {
  .order-section {
    @apply bg-cover;
    min-height: sizem(800);
    position: relative;
    padding: 0 sizem(30);
    padding-top: sizem(0);

    .intro {
      @apply flex flex-col items-center justify-end;
      padding-bottom: sizem(107.5);
      height: sizem(685);
      .logo {
        width: sizem(243.01);
      }
      .t {
        margin-top: sizem(127);
        color: #231815;
        text-align: center;
        font-size: sizem(13);
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: sizem(2.6);
      }
    }

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{sizem(30)};
      bottom: sizem(590);
    }
  }

  .order {
    width: 100%;margin-top: sizem(150);
    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055f76;
    }

    .order-title {
      font-size: sizem(25);
      // padding-top:4.5em;
    }
    .order-subTitle {
     // font-size: sizem(13);
      font-size: .94em;
      padding: sizem(10) 0 sizem(10) 0;margin: 0 -1em;
    }

    .form {
      width: sizem(310);
      min-width: 0;
      height: auto;
      gap: 0;
      margin-bottom: sizem(20);
      flex-direction: column;
     // margin-top: sizem(150);

      .left {
        width: 100%;
        gap: 0;
        .row {
          margin: 0 0 sizem(15);
        }
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
     // font-size: sizem(21);
      width: sizem(310);
      height: 3.6em;
      background-size: cover;
      margin-top: 1em;
    }

    .control {
     //font-size: sizem(14.6);
    }
  }
}
</style>

<script setup>
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
import Map from "@/section/form/map.vue"
import HouseInfo from "@/section/form/houseInfo.vue"
import orderIntro from "@/section/order_intro.vue"
import orderBadge from "@/section/order_badge.vue"

import info from "@/info"

import { cityList, renderAreaList } from "@/info/address.js"
import { ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

import { useToast } from "vue-toastification"
const toast = useToast()

const sending = ref(false)

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  budget: "",
  project: "",
  people: "",
  email: "",
  ctime: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

//非必填
const bypass = [
  "project",
  "msg",
  "people",
  "email",
  "room_type",
  "budget",
  "ctime",
  "city",
  "area",
]

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  "預算", //budget
  "建案", //project
  "服務專員", //people
  "連絡時段", //ctime
  "信箱", //email
  "居住縣市", //city
  "居住地區", //area
  "備註訊息", //msg
  "個資告知事項聲明", //policyChecked
  "機器人驗證", //r_verify
])

const areaList = ref([])

watch(
  () => formData.city,
  (newVal, oldVal) => {
    areaList.value = renderAreaList(newVal)
    formData.area = areaList.value[0].value
  }
)

const onRecaptchaVerify = () => {
  formData.r_verify = true
}
const onRecaptchaUnVerify = () => {
  formData.r_verify = false
}

const send = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const utmSource = urlParams.get("utm_source")
  const utmMedium = urlParams.get("utm_medium")
  const utmContent = urlParams.get("utm_content")
  const utmCampaign = urlParams.get("utm_campaign")
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  const hour = time.getHours()
  const min = time.getMinutes()
  const sec = time.getSeconds()
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`

  const presend = new FormData()
  let pass = true
  let unfill = []
  let idx = 0

  //驗證
  for (const [key, value] of Object.entries(formData)) {
    if (!bypass.includes(key)) {
      if (value == "" || value == false) {
        unfill.push(formDataRef.value[idx])
      }
    }

    idx++

    presend.append(key, value)
  }

  presend.append("utm_source", utmSource)
  presend.append("utm_medium", utmMedium)
  presend.append("utm_content", utmContent)
  presend.append("utm_campaign", utmCampaign)

  //有未填寫
  if (unfill.length > 0) {
    pass = false
    toast.error(`「${unfill.join(", ")}」為必填或必選`)
    return
  }

  //手機驗證
  const MobileReg = /^(09)[0-9]{8}$/
  if (!formData.phone.match(MobileReg)) {
    pass = false
    toast.error(`手機格式錯誤 ( 09開頭10位數字 )`)
    return
  }

  if (pass && !sending.value) {
    sending.value = true
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &room_type=${formData.room_type}
      &budget=${formData.budget}
      &people=${formData.people}
      &project=${formData.project}
      &email=${formData.ctime}
      &cityarea=${formData.city}${formData.area}
      &msg=${formData.msg}
      &utm_source=${utmSource}
      &utm_medium=${utmMedium}
      &utm_content=${utmContent}
      &utm_campaign=${utmCampaign}
      &date=${date}
      &campaign_name=${info.caseName}`,
      {
        method: "GET",
      }
    )

    fetch("contact-form.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "formThanks"
      }
      sending.value = false
    })

    // toast.success(`表單已送出，感謝您的填寫`)
  }
}
</script>
