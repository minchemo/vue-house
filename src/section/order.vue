<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <!-- Title -->

      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image
      <img class="order-title-img" src="@/section/form/ordertitle.png" alt="" srcset="">
 -->
      <!-- Custom Image -->

      <!-- Form -->
        <div class="form mx-auto relative flex justify-center">
        <div class="s-order-title">CONTACT US</div>
          <div class="left h-full flex flex-col justify-between items-center">
            <label class="row"><span>姓名<span> *</span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" /></label>
              <label class="row"><span>手機<span> *</span></span>
                <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" /></label>
              <label class="row"><span>電子信箱</span>
                <input type="text" placeholder="電子信箱" class="input w-full rounded-none" :value="formData.email"
              @input="(event) => (formData.email = event.target.value)" /></label>
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

      <div
        class="flex flex-col md:flex-row gap-8 md:gap-0 items-center md:items-end justify-between w-full"
      >
        <div class="flex flex-col">
          <!-- Policy -->
          <div
            class="flex gap-2 items-center justify-start control relative z-10"
          >
            <input
              type="checkbox"
              v-model="formData.policyChecked"
              :checked="formData.policyChecked"
              class="checkbox bg-white rounded-none"
            />
            <p class="text-black">
              本人知悉並同意<label
                for="policy-modal"
                class="modal-button text-[#36677F] cursor-pointer font-bold hover:opacity-70 whitespace-nowrap"
                >「個資告知事項聲明」</label
              >內容
            </p>
          </div>
          <Policy />

          <!-- Recaptcha -->
          <vue-recaptcha
            class="flex justify-start mt-8 relative z-10 left-0 ml-0"
            ref="recaptcha"
            :sitekey="info.recaptcha_site_key_v2"
            @verify="onRecaptchaVerify"
            @expired="onRecaptchaUnVerify"
          />
        </div>

        <!-- Send -->
        <div class="send btn cursor-pointer relative z-10" @click="send()">
          {{ sending ? "發送中.." : "立即預約" }}
        </div>
      </div>

      <!-- Contact Info -->
      <ContactInfo />
    </div>

    <!-- Map -->
    <Map v-if="info.address" />

    <!-- HouseInfo -->
    <!-- <HouseInfo /> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order-section {
  position: relative;
  overflow: hidden;
  min-height: size(500);
  // background-color: #e89213;
 // background: url("@/section/order_bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 0 size(364);
  padding-top: size(103);

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }
}

.order {
  position: relative;
  width: 100%;
  padding-top: 0;

  .bird {
    @apply absolute;
    width: size(155);
    top: size(420);
    right: size(450);
    animation: fly 6s ease-in-out infinite alternate-reverse;

    @keyframes fly {
      from {
        transform: skewX(-10deg) skewY(-3deg) translate(-4%, 8%) rotate(10deg);
      }

      to {
        transform: skewX(10deg) skewY(3deg) translate(4%, -8%) rotate(0deg);
      }
    }
  }

  .s-order-title {
    @apply absolute left-0;
    top: size(-120);
    font-size: size(32);
    font-weight: 500;
    color: #36677f;
    border-bottom: 1px solid #fff;
    padding-bottom: size(15);
  }

  .order-title {
    @apply text-left relative left-0 inline-block;
    font-size: size(40);
    font-weight: 700;
    color: #36677f;
    padding-top: 0;
    margin-left: size(0);
    margin-right: auto;
    border-bottom: 1px solid #fff;
    padding-bottom: size(20);
  }

  .order-title-img {
    width: size(557);
    margin-bottom: size(0);
  }
  .order-subTitle {
    font-size: size(17);
    color: black;
    padding-top: 0.8em;
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
    @apply left-1/2 -translate-x-1/2;
    width: size(1191);
    min-width: 680px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;

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
      background-color: #a6a6a6;
      position: absolute;
    }
    .row {
      background: rgba($color: #fff, $alpha: 0.3);
      border: 1px solid #a6a6a6;
      color: #36677f;
      display: flex;
      width: 100%;
      align-items: center;
      > span {
        width: 5.5em;
        text-align: left;
        padding-left: 1em;
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
      }
      option {
        color: #36677f;
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
        color: #36677f;
      }
      textarea {
        @apply text-[#36677F];
      }
    }
  }

  .send {
    font-size: 20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #36677f;
    border: 1px solid #36677f;
    background: #fff;
    border-radius: 0;

    width: size(442);
    height: size(87);
    line-height: 3.3;
    z-index: 10;
    font-weight: 700;
    position: relative;

    @apply hover:bg-[#36677F] hover:text-white;
  }

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width: 768px) {
  .order-section {
    min-height: sizem(800);
    position: relative;
    // background: url("@/section/order_bgm.jpg");
    // overflow: hidden;
    // padding-top: sizem(200);
    padding: 0 sizem(30);
    padding-top: sizem(50);

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{sizem(30)};
      bottom: sizem(590);
    }
  }

  .order {
    width: 100%;
    // padding-bottom: sizem(63);
    // border-radius: sizem(68) sizem(68) 0 0;
    /* padding-top: sizem(0);
    margin-top: sizem(0);

    .order-title-img {
      width: sizem(315);
      margin-bottom: sizem(22);
    } */

    .s-order-title {
      @apply absolute left-0 flex items-center justify-center w-full;
      font-size: sizem(18);
      font-weight: 500;
      color: #36677f;
      top:sizem(-60);
      border-bottom: 1px solid #fff;
      padding-bottom: size(25);
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
      margin-top: sizem(20);

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
import { ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

import { useToast } from "vue-toastification"
const toast = useToast()

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  email: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

const sending = ref(false)

//非必填
// const bypass = ["msg", "room_type", "email"]
const bypass = ["msg","room_type","area","city","email"];

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
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
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmContent = urlParams.get("utm_content");
  const utmCampaign = urlParams.get("utm_campaign");
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

  const presend = new FormData();
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
    presend.append(key, value);
  }

  presend.append("utm_source", utmSource);
  presend.append("utm_medium", utmMedium);
  presend.append("utm_content", utmContent);
  presend.append("utm_campaign", utmCampaign);

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

    fetch("contact-form.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "formThanks";
      }
      sending.value = false
    });


    // toast.success(`表單已送出，感謝您的填寫`)
  }
}
</script>