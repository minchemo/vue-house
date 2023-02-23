<template>
  <div id="order" class="order relative bg-[#DCDCDD] text-center">
    <div class="order-section font-['noto_sans_tc']">
      <!-- Title -->
      <!-- <div class="order-title text-center">{{ info.order.title }}</div> -->
      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image -->
      <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="長耀加" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="長耀加" srcset="" data-aos="fade"
      data-aos-duration="1000"> -->

      <!-- Custom title -->

      <div class="main">
        <img data-aos="fade-up" src="@/section/s1/logo.svg" class="logo" alt="" srcset="">
        <p data-aos="fade-up" data-aos-delay="200" class="t1">轉身繁華 衷於回家</p>
        <p data-aos="fade-up" data-aos-delay="400" class="t2"><span>20</span> 層建築與眾樹的巷遇</p>
        <img class="custitle" data-aos="fade-up" data-aos-delay="600" src="@/section/form/custitle.png" alt="" srcset="">
        <img class="custitle2" v-if="!$isMobile()" src="@/section/form/title.svg" alt="" srcset="">
        <img class="custitle2" v-else src="@/section/form/title_m.svg" alt="" srcset="">
        <img data-aos-delay="1700" data-aos="fade-right" class="leaf-small" src="@/section/s1/leaf_small.png" alt=""
          srcset="">
      </div>

      <!-- Custom Image -->
      <img class="leaf l" v-if="!$isMobile()" src="@/section/s1/leaf_l.png" alt="" srcset="">
      <img class="leaf r" v-if="!$isMobile()" src="@/section/s1/leaf_r.png" alt="" srcset="">
      <img class="leaf mb" v-if="$isMobile()" src="@/section/s1/leaf_mb.png" alt="" srcset="">
      <img class="leaf b" v-if="!$isMobile()" src="@/section/s1/leaf_b.png" alt="" srcset="">
      <img class="leaf b" v-else src="@/section/s1/leaf_b_m.png" alt="" srcset="">


      <!-- Form -->
      <div class="form mx-auto relative flex items-start justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <input type="text" placeholder="姓名" class="input w-full rounded-full" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" />
          <input type="text" placeholder="手機" class="input w-full rounded-full" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" />

          <select class="select w-full rounded-full" v-model="formData.room_type">
            <option value="" selected disabled>需求房型</option>
            <option value="28">28坪</option>
            <option value="36">36坪</option>
            <option value="47">47坪</option>
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
      <div class="flex gap-2 items-center justify-center control">
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
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  // padding-bottom: size(90);
  position: relative;
  min-height: size(1797);
  padding-top: size(138);
  overflow: hidden;
  

  .leaf {
    @apply select-none pointer-events-none absolute z-10;
    &.l {
      @apply mix-blend-multiply;
      width: size(423);
      top: -#{size(78)};
      left: -#{size(18)};
      animation: wave 3s alternate-reverse infinite ease-in-out;
      transform-origin: top left;
    }
    &.r {
      @apply mix-blend-multiply;
      width: size(423);
      top: -#{size(78)};
      right: -#{size(18)};
      animation: wave 3s alternate-reverse infinite ease-in-out;
      transform-origin: top right;
    }
    &.b {
      width: 110%;
      bottom: 0;
      left: 50%;
      margin-left: -55%;
      animation: wave2 3s alternate-reverse infinite ease-in-out;
      transform-origin: bottom center;
    }

    @keyframes wave {
      to {
        transform: skew(5deg, 1deg) rotate(-2deg)
      }
    }
    @keyframes wave2 {
      to {
        transform: skew(10deg, 0deg) rotate(0deg)
      }
    }

  }
  .main {
    @apply relative w-full flex flex-col items-center text-white;
    .leaf-small {
      @apply absolute;
      width: size(69.54);
      right: size(607.03);
      top: size(210.91);
    }
    .logo {
      width: size(563.74);
    }
    .t1 {
      @apply relative;
      font-family: 'Noto Sans TC';
      font-weight: 700;
      font-size: size(37);
      letter-spacing: 0.79em;
      margin-right: -0.79em;
      margin-top: size(26.82);
      transform-style: preserve-3d;

      &::after {
        content: '';
        position: absolute;
        right: 3%;
        bottom: -65%;
        width: size(184.71);
        height: size(76.92);
        background-size: contain;
        background-image: url('@/section/s1/style.png');
        transform: translateZ(-1px);
        animation: fadeIn 1s forwards;
        animation-delay: 1400ms;
        opacity: 0;

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        } 
      }
    }
    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(45);
      letter-spacing: 0.05em;
      margin-right: -0.05em;
      margin-top: size(55);
      display: flex;
      align-items: center;
      gap: size(10);
        letter-spacing: 0.15em;
      span {
        font-size: size(52);
      }
    }
    .custitle {
      width: size(657.73);
      margin-top: size(62);
      margin-bottom: size(94);
    }
    .custitle2 {
      width: size(875.79);
      margin-bottom: size(30);
    }
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
    font-size: size(40);
    font-weight: 700;
    color: #fff;
    border-bottom: size(2) solid #C9A063;
    width: size(172);
    margin: 0 auto;
    margin-bottom: size(50) !important; 
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
    color: #397968;
    background-color: #fff;
    width: size(318);
    height: size(72.75);
    line-height: 3.3;
    border: 0;
    border-radius: 9999px;
    z-index: 10;
    position: relative;
    font-weight: 700;
    font-family: 'Noto Serif TC';
  }

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width:768px) {
  .order-section {
    background-image: url('@/section/form/bgm.png');
    min-height: sizem(1774);
    padding-bottom: sizem(0);
    position: relative;
    padding-top: sizem(182);

    .leaf {
      &.mb {
        @apply mix-blend-multiply w-full left-0;
        top: -#{sizem(35)};
      }
      &.b {
        width: sizem(536.64);
        bottom: -#{sizem(135.58)};
        left: -#{sizem(64.61)};
        margin-left: 0;
        animation: wave2 3s alternate-reverse infinite ease-in-out;
        transform-origin: bottom center;
      }
  }
  .main {
    @apply relative w-full flex flex-col items-center text-white;
    bottom: 0;
    .leaf-small {
      @apply absolute;
      width: sizem(27.84);
      right: sizem(28.4);
      top: sizem(110.2);
    }
    .logo {
      width: sizem(275.69);
    }
    .t1 {
      font-size: sizem(17);
      margin-top: sizem(10);

      &::after {
        width: sizem(73.95);
        height: sizem(30.79);
        right: 6.5%;
      }
    }
    .t2 {
      font-size: sizem(21);
      margin-top: sizem(39);
      span{
        font-size: sizem(24);
      }
    }
    .custitle {
      width: sizem(278);
      margin-top: sizem(49);
      margin-bottom: sizem(119);
    }
    .custitle2 {
      width: sizem(315);
      margin-bottom: sizem(15);
    }
  }
  }

  .order {
    width: 100%;
    // border-radius: sizem(68) sizem(68) 0 0;
    padding-top: sizem(0);
    margin-top: sizem(0);
    padding-bottom: sizem(60);


    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055F76;
    }

    .order-title {
      width: sizem(118);
      font-size: sizem(29);
      font-weight: 700;
      margin-bottom: sizem(35) !important;
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
      width: sizem(318);
      height: sizem(72);
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
const bypass = ["project", "msg", "email", "room_type", "city", "area"]

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
