<template>
  <div id="order" class="order relative bg-[#DFDDC8] text-center">
    <div class="order-section font-['noto_sans_tc']">
      <!-- particle -->
      <div id="particle"></div>

      <!-- Order content text -->
      <div class="order-content">
        <div class="text" data-aos="fade-up">放眼世界的壯闊格局<br />
          以亞洲新灣區為願景<br />
          展現海洋城市朗闊氣度<br />
          基隆港市合一再生計畫<br />
          西岸輕軌、四鐵城際轉運中心<br />
          海洋廣場、國門廣場、郵輪碼頭啟用<br />
          北台灣新藍色經濟政策基地<br />
          世界級山河海灣大景<br />
          共敬基隆江山的美好
        </div>
        <div class="divi"></div>
        <div class="text" data-aos="fade-up">一面海，一面城<br />
          一邊享受港灣城市的全新盛景<br />
          一邊收納無垠海洋的壯闊療癒<br />
          全世界國際港灣，都有世界級豪宅地標<br />
          以海洋都心的環宇氣勢，立足站前四鐵特區<br />
          對坐國門廣場海景首排，站上世界層峰舞台
        </div>
        <div class="divi"></div>
        <div class="text" data-aos="fade-up">
          曾經走過、也許路過<br />
          唯獨這片港灣好景不容錯過<br />
          基隆站前四鐵特區海景首席<br />
          敬邀您在海洋新國門發展起飛的關鍵時刻<br />
          用國際的前瞻眼光<br />
          見證亞灣都心最擲地有聲的一次
        </div>
        <div class="t2"  data-aos="fade-up">
          站前四鐵特區 國門廣場對坐<br />
          首席海景殿廈 即將定址現身
        </div>
        <img v-if="!$isMobile()"  data-aos="fade-up" class="comingsoon" src="@/section/form/comingsoon.png" alt="" srcset="">
        <img v-else class="comingsoon"  data-aos="fade-up" src="@/section/form/comingsoon_m.png" alt="" srcset="">
      </div>

      <img v-if="!$isMobile()"  data-aos="fade-up" class="bubbles" src="@/section/form/bubbles.png" alt="">
      <img v-else class="bubbles"  data-aos="fade-up" src="@/section/form/bubbles_m.png" alt="">

      <!-- Title -->
      <div class="order-title text-center  text-white">{{ info.order.title }}</div>
      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image -->
      <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="海揚" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="海揚" srcset="" data-aos="fade"
      data-aos-duration="1000"> -->

      <!-- Custom Image -->

      <!-- Form -->
      <div class="form mx-auto relative flex items-start justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <input type="text" placeholder="姓名" class="input w-full rounded-full" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" />
          <input type="text" placeholder="手機" class="input w-full rounded-full" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" />

          <select class="select w-full rounded-full" v-model="formData.room_type">
            <option value="" selected disabled>需求房型</option>
            <option value="1房">1房</option>
            <option value="2房">2房</option>
            <option value="3房">3房</option>
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
            class="modal-button text-[#CC0000] font-bold cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send -->
      <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer" @click="send()">
        {{ sending ? '發送中..' : '送出表單' }}
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

#particle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.order-content {
  color:#fff;
  padding-top: size(300);
  .text {
    font-weight: 200;
    font-size: size(20);
    line-height: 2;
    text-align: center;
    letter-spacing: 0.1em;
  }
  .divi {
    width: size(148);
    height: size(1);
    background-color: #9DEDFF;
    margin: size(100) auto;
  }

  .t2 {
    font-weight: 700;
    font-size: size(40);
    line-height: size(58);
    margin-top: size(183);
    margin-bottom: size(43);
  }
  .comingsoon {
    width: size(500);
    margin-bottom: size(211);
  }
}

.bubbles {
  pointer-events: none;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  animation: float 10s alternate-reverse infinite linear;

  @keyframes float {
    from {
      transform: translateY(0) skew(-2deg);
    }
    to {
      transform: translateY(5%) skew(2deg);
    }
  }
}

.order-section {
  background-image: url('@/section/form/bg.png');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: size(0);
  position: relative;
  min-height: size(3110);
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
    font-size: size(43);
    font-weight: 400;
    margin-bottom: size(40);
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
    background-color: #C9A063;
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


.bubbles {
  width: 90%;
  left: 5%;
  top: 1%;
}

  .order-content {
  padding-top: size-m(152);
  .text {
    font-size: size-m(14);
  }
  .divi {
    width: size-m(115);
    height: size-m(1);
    margin: size-m(75) auto;
  }

  .t2 {
    font-size: size-m(20);
    line-height: size-m(36);
    margin-top: size-m(118);
    margin-bottom: size-m(29);
  }
  .comingsoon {
    width: size-m(250);
    margin-bottom: size-m(129);
  }
}

  .order-section {
    background-image: url('@/section/form/bg_m.png');
    height: size-m(2700);
    padding-bottom: 0;
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
    margin-top: size-m(0);


    .cus-divider {
      margin: 0 auto;
      width: size-m(117);
      height: size-m(2);
      margin-bottom: size-m(25);
      background-color: #055F76;
    }

    .order-title {
      font-size: size-m(29);
      font-weight: 700;
      margin-bottom: size-m(10);
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

onMounted(() => {
  setTimeout(() => {
    
  particlesJS.load('particle', './nasa.json', function () {
    console.log('callback - particles-js config loaded');
  });
  }, 100);
})
</script>
