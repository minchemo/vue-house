<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
    <div
      class="cloth2 absolute"
      data-aos="fade"
      data-aos-delay="200">
      <img
        src="@/section/s1/cloth.webp"
        alt="cloth"
      />
    </div>
    <div
      class="cloth1 absolute"
      data-aos="fade"
      data-aos-delay="0">
      <img
        src="@/section/s1/cloth.webp"
        alt="cloth"
      />
    </div>
      <img class="logo" src="@/section/logo.png" alt="" srcset=""><!-- Title -->
      <div class="order-title text-center" v-if="info.order.title" v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle" v-html="$isMobile() && info.order.subTitle_mo?info.order.subTitle_mo:info.order.subTitle"></div>
 
      <!-- Form -->
      <div class="form mx-auto relative flex justify-center z-10">
             <!--
        <div class="s-order-title">
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
              class="input w-full rounded-none placeholder:text-[#fff]"
              :value="formData.name"
              @input="(event) => (formData.name = event.target.value)"
          /></label>
          <label class="row"
            ><span>手機<span>(必填)</span></span>
            <input
              type="text"
              placeholder="手機"
              class="input w-full rounded-none placeholder:text-[#fff]"
              :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)"
          /></label>

          <label class="row" v-if="info.room_type"
            ><span>需求房型<span>(必填)</span></span>
            <select
              class="select w-full rounded-none"
              v-model="formData.room_type"
            >
              <option value="" selected disabled>請選擇房型</option>
              <option
                v-for="room in info.room_type"
                :value="room"
                v-text="room" :key="room"
              ></option></select
          ></label>
          <label class="row" v-if="info.budget.length > 0"
            ><span>購屋預算<span>(必填)</span></span>
            <select
              class="select w-full rounded-none bg-white"
              v-model="formData.budget"
            >
              <option value="" selected disabled>請選擇預算</option>
              <option
                v-for="budget in info.budget"
                :value="budget"
                v-text="budget" :key="budget"
              ></option>
            </select>
          </label>
          <label class="row"
            ><span>居住縣市<span>(必填)</span></span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value">
                {{ city.label }}
              </option>
            </select></label
          >
          <label class="row"
            ><span>居住地區<span>(必填)</span></span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value">
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

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-[#fff]">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#ff0] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send -->
      <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer" @click="send()">
        {{ sending? '發送中..': '確認送出' }}
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
  overflow: hidden;
  // background-color: #e89213;
//  background-image: url("@/section/orderbg.jpg");
background-image: linear-gradient(180deg, #83CCD3 38.5%, #7AC5CB 62.5%, #5FB3BD 76%, #4EA8B3 86%, #45A0B2 100%);

  background-size: cover;
  background-position: center;
  padding: size(142) 0 0;
  padding-top: size(142);

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }
  .cloth1{
    width: 106vw;
    top: size(-700);
  //  top: calc(50% + #{size(-770 - 1080 * .5)});
    left: 13.4vw;
    transform: rotate(5deg)translateX(10%);
    img{width: 100%;}
  }
  .cloth2{
    width: 116.7vw;
    top: size(-600);
  //  top: calc(50% + #{size(-670 - 1080 * .5)});
    left: -31.8vw;
    transform: rotate(-10deg)translateX(-10%);
  img{width: 100%;transform: rotate(51.1deg);opacity: 0.55;}
  }

  
}

.order {
  position: relative;
  width: 100%;

  .logo {
    position: relative;z-index: 2;
    width: size(559);
    margin-bottom: size(430);
  }
/*
  .s-order-title {
    @apply absolute left-0 top-0 text-center w-full;
    p {
      font-size: size(32);
      font-weight: 500;
      color: #fff;

      &:nth-child(2) {
        font-size: size(18);
        margin-top: size(5);
      }
    }
  }
*/
.order-title {
    font-size: size(52);
    letter-spacing: 0.02em;
    font-weight: 700;
    color: #FFF;
    padding:1.5em 0 .1em;
    //filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
  }
  .order-title-img {
    width: size(420);
    margin-bottom: size(10);
  }
  .order-subTitle{
    font-size: size(17);
    color: #fff;
    padding-top:.8em;
    letter-spacing: .1em;
    //font-weight: 500;filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
  }
  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
    background-color: #055f76;
  }

  .form {
  //  @apply left-1/2 -translate-x-1/2;
    width: size(920);
    min-width: 680px;
    //  height: 350px;
    gap: size(80);
    margin: size(45) auto size(50) auto;
    z-index: 50;
    align-items: stretch;
    //padding-top: size(150);

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
      background-color: #FFF;
      position: absolute;
    }
    .row {
      background: rgba($color: #fff, $alpha: 0);
      border: 1px solid #fff;
      color: #fff;
      display: flex;
      width: 100%;
      align-items: center;
      > span {
        width: 7.5em;
        text-align: left;
        padding-left: 1em;
        > span {
          color: #FFF000;
          font-size: 12px;
        }
      }
      input,
      select {
        @apply font-bold;
        background: none;
        flex: 1;
      }
      option {
        color: #000;
      }
      select {
        background: url("//h65.tw/img/select.svg") no-repeat calc(100% - 0.5em)
          100%;
        background-size: auto 200%;
        transition: background 0.3s;
         filter: brightness(0) invert(1);//箭頭白色 拿掉變黑色  其他顏色用工具變顏色

        &:focus {
          background-position: calc(100% - 0.5em) 0%;
        }
      }
      &::placeholder {
        color: #fff;
      }
      textarea {
        @apply text-[#fff];
      }
    }
  }

  .send {
    font-size:20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #FFF;
    background-color:#fff3;
    //border: 1px solid #FFF9;
    border:2px solid #fff;
    border-radius: 0em;
    width: 308px;
    height:3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
  }

  .control {
    font-size: calc(12px + #{size(4)});
    color: #000;
    position: relative;
  }
}

@media screen and (max-width: 768px) {
  .order-section {
    @apply bg-cover;
    min-height: sizem(800);
    position: relative;
 //   background-image: url("@/section/orderbgm.jpg");
  
    // overflow: hidden;
  //  padding: 0 sizem(30);
    padding-top: sizem(150);

    .logo {
      width: sizem(269);
    }

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{sizem(30)};
      bottom: sizem(590);
    }
  .cloth1{
        width: 237vw;
        top: -82.5vw;
        left: -30.6vw;
        img{transform: rotate(-1deg);height:sizem(700);}
  }
  .cloth2{
        width: 300vw;
        top: -91.5vw;
        left: -176.8vw;
  img{transform: rotate(55deg);opacity: 0.55;}
  }

  }

  .order {
    width: 100%;

    .s-order-title {
      @apply absolute left-0 top-0 flex flex-col items-center justify-center w-full;
      p {
        font-size: sizem(29);
        font-weight: 500;

        &:nth-child(2) {
          font-size: sizem(15);
          margin-top: sizem(5);
        }
      }
    }

    .order-title-img {
      width: sizem(200);
      margin-bottom: sizem(22);
    }

    .bird {
      @apply absolute;
      width: sizem(48.8);
      top: sizem(205);
      right: sizem(40);
    }

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
      font-size: sizem(13);
      padding: sizem(10) sizem(20);
    }

    .form {
      width: sizem(310);
      min-width: 0;
      height: auto;
      gap: 0;
      margin-bottom: sizem(20);
      flex-direction: column;
  /*    margin-top: sizem(100);
      padding-top: sizem(60); */

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
      font-size: sizem(21);
      width: sizem(310);
      height: sizem(72);
      background-size: cover;
    }

    .control {
      font-size: calc(12px + #{sizem(2)});
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
import { computed, ref, reactive, getCurrentInstance, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

import { useToast } from "vue-toastification"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
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
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: true,
})

//非必填
const bypass = [
  "project",
  "msg",
  "people",
  "email",
  "room_type",
  "budget",
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
      &email=${formData.email}
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
