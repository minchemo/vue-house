<template>
  <div id="order" class="order relative bg-[#CFCFCF] text-center">
    <div class="section7 order-section font-['noto_sans_tc']">
      <!-- Title -->
      <div class="order-title text-center text-[#fff] font-['noto_serif_tc']">{{ info.order.title }}</div>
      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image -->
      <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="宗大敘山" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="宗大敘山" srcset="" data-aos="fade"
      data-aos-duration="1000"> -->

      <!-- Custom Image -->
      <!-- <img class="decor" src="@/section/form/decor.png" alt="" srcset=""> -->

      <!-- Form -->
      <div class="form mx-auto relative flex items-start justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <input type="text" placeholder="姓名" class="input w-full rounded-none border border-[#C6A93E]"
            :value="formData.name" @input="(event) => (formData.name = event.target.value)" />
          <input type="text" placeholder="手機" class="input w-full rounded-none border border-[#C6A93E]"
            :value="formData.phone" @input="(event) => (formData.phone = event.target.value)" />

          <!--select class="select w-full rounded-none border border-[#C6A93E]" v-model="formData.room_type">
            <option value="" selected disabled>需求房型</option>
            <option value="2房">2房</option>
            <option value="3房">3房</option>
            <option value="店面">店面</option>
          </select-->

          <select class="select w-full rounded-none border border-[#C6A93E]" v-model="formData.city">
            <option value="" selected disabled>居住縣市</option>
            <option v-for="city in cityList" :value="city.value">
              {{ city.label }}
            </option>
          </select>
          <select class="select w-full rounded-none border border-[#C6A93E]" v-model="formData.area">
            <option value="" selected disabled>居住地區</option>
            <option v-for="area in areaList" :value="area.value">
              {{ area.label }}
            </option>
          </select>
          <input type="text" placeholder="電子信箱" class="input w-full rounded-none border border-[#C6A93E]"
            :value="formData.email" @input="(event) => (formData.email = event.target.value)" />
        </div>
        <div class="right h-full">
          <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
            class="textarea w-full h-full rounded-none border border-[#C6A93E]" placeholder="備註訊息"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p>
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#000] font-bold cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send -->
      <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer bg-[#C6A93E] hover:bg-[#bd9a1c]" @click="send()">
        {{ sending ? '發送中..' : '立即預約' }}
      </div>
    </div>


    <!-- Map -->
    <Map />

    <!-- Contact Info -->
    <ContactInfo />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order-section {
  // background-image: url('@/section/form/bg.png');
  @apply bg-white;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: size(90);
  position: relative;
  height: auto;
  padding-top: size(90);
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
    width: size(700);
    top: -#{size(310)};
    right: -#{size(250)};
    animation: rotate 10s infinite linear;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
}

.order {
  width: 100%;
  padding-top: size(0);

  .order-title {
    @apply mx-auto;
    font-size: size(38);
    font-weight: 600;
    padding: size(15) 0;
    margin-bottom: size(100);
    background-color: #304730;
    width: size(1563);
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
    height: 350px;
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
    color: #fff;
    width: size(350);
    height: 3.3em;
    line-height: 3.3;
    border: 0;
    border-radius: 0em;
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
    padding-bottom: size-m(80);
    position: relative;
    overflow: hidden;

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{size-m(30)};
      bottom: size-m(590);
    }

    .decor {
      position: absolute;
      width: size-m(148);
      top: -#{size-m(50)};
      right: -#{size-m(35)};
    }
  }

  .order {
    width: 100%;
    // border-radius: size-m(68) size-m(68) 0 0;
    padding-top: size-m(0);
    margin-top: size-m(70);


    .cus-divider {
      margin: 0 auto;
      width: size-m(117);
      height: size-m(2);
      margin-bottom: size-m(25);
      background-color: #055F76;
    }

    .order-title {
      font-size: size-m(20);
      font-weight: 700;
      margin-bottom: size-m(40);
      padding: size-m(10) 0;
      width: 100%;
    }

    .order-title-img {
      width: size-m(208);
      margin-bottom: size-m(20);
    }

    .form {
      width: size-m(310);
      height: auto;
      gap: size-m(15);
      margin-bottom: size-m(20);
      flex-direction: column;

      .left {
        width: 100%;
        gap: size-m(15);
      }

      .right {
        width: 100%;
        height: size-m(100);
      }

      &::after {
        display: none;
      }
    }

    .send {
      font-size: size-m(21);
      width: size-m(318);
    }

    .control {
      font-size: size-m(14.6);
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
const bypass = ["project", "msg", "email", "room_type"]

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
    send
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
      ``,
      {
        method: "GET"
      }
    ).then(() => {
      fetch("contact-form.php", {
        method: "POST",
        body: presend,
      }).then((response) => {
        if (response.status === 200) {
          window.location.href = "formThanks";
        }
        sending.value = false
      });
    });


    // toast.success(`表單已送出，感謝您的填寫`)
  }
}
</script>
