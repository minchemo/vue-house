<template>
  <div id="order" class="order relative bg-[#fff] text-center">
    <div class="order-section font-['noto_sans_tc']">
      <!-- Title -->
      <div class="order-title text-center text-[#fff]">{{ info.order.title }}</div>
      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image -->
      <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="泰嘉拓真" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="泰嘉拓真" srcset="" data-aos="fade"
      data-aos-duration="1000"> -->

      <!-- Custom Image -->
      <!-- <img class="decor" v-if="!$isMobile()" data-aos="fade" src="@/section/form/decor.png" alt="" srcset=""> -->

      <!-- Form -->
      <div class="form mx-auto relative flex items-start justify-center" data-aos="zoom-in">
        <div class="left h-full flex flex-col justify-between items-center">
          <input type="text" placeholder="姓名" class="input w-full rounded-full" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" />
          <input type="text" placeholder="手機" class="input w-full rounded-full" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" />

          <select class="select w-full rounded-full" v-model="formData.room_type">
            <option value="" selected disabled>需求房型</option>
            <option value="2房">2房</option>
            <option value="3房">3房</option>
            <option value="店面">店面</option>
          </select>

          <select class="select w-full rounded-full" v-model="formData.city">
            <option value="" selected disabled>居住縣市</option>
            <option v-for="city in cityList" :value="city.value">
              {{ city.label }}
            </option>
          </select>
          <select class="select w-full rounded-full" v-model="formData.area">
            <option value="" selected disabled>居住地區</option>
            <option v-for="area in areaList" :value="area.value">
              {{ area.label }}
            </option>
          </select>
        </div>
        <div class="right h-full">
          <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
            class="textarea w-full h-full rounded-3xl" placeholder="備註訊息"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control relative z-10">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-white">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#FFFF00] font-bold cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send -->
      <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer" @click="send()">
        {{ sending ? '發送中..' : '立即預約' }}
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
  background-image: url('@/section/form/bg.png');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: size(0);
  position: relative;
  height: auto;
  padding-top: size(70);
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
    @apply relative z-10 font-['noto_serif_tc'];
    font-size: size(43);
    font-weight: 700;
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
    color: #000;
    background-color: #BBAD90;
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

@media screen and (max-width:768px) {
  .order-section {
    // background-image: url('@/section/form/bg_m.png');
    height: auto;
    padding-bottom: sizem(0);
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
import { ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

import { useToast } from "vue-toastification"
const toast = useToast()

const sending = ref(false)

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  project: "",
  email: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: true,
})

//非必填
const bypass = ["project", "msg", "email"]

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  "建案", //project
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

    idx++;

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
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &room_type=${formData.room_type}
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
        method: "GET"
      }
    );

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
