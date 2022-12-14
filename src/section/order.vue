<template>
  <div id="order" class="order relative text-center">
    <div class="order-section font-['noto_Serif_tc']"> 
    <div class="wave">
    <div class="shadow1"><img src="./s1/1.png" srcset="" /><img src="./s1/1.png" srcset="" />
    </div>
    <div class="shadow2"><img src="./s1/2.png" srcset="" /><img src="./s1/2.png" srcset="" /></div>
    <div class="shadow3"><img src="./s1/2.png" srcset="" /><img src="./s1/2.png" srcset="" /></div>
    <div class="l1"><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /></div>
    <div class="l2"><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /></div>
    <div class="l3"><img src="./s1/l2.svg" srcset="" /><img src="./s1/l2.svg" srcset="" /><img src="./s1/l2.svg" srcset="" /></div>
    <img src="./s1/light.png" class="light1" srcset="" />
  </div>
      <!--
<img v-if="!$isMobile()" src="@/section/form/img.png" class="img" />
<img v-else src="@/section/form/img_m.png" class="img" />

    -->

      <!-- Title
      <div class="order-title text-center  text-white">{{ info.order.title }}</div>
      --> <!-- <div class="cus-divider"></div> -->

      <img src="@/section/form/title.svg" class="order-title" />
      
      <!-- Title Image -->
      <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="豐郡京硯" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="豐郡京硯" srcset="" data-aos="fade"
      data-aos-duration="1000">rounded-full -->
      
      <!-- Custom Image -->

      <!-- Form -->
      <div class="form mx-auto relative flex items-start justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          
      <img src="@/section/form/img.svg" />
        </div>
        <div class="right h-full">
          <input type="text" placeholder="姓名" class="input w-full form-i" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" />
          <input type="text" placeholder="手機" class="input w-full form-i" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" />

             <!--
          <select class="select w-full form-i" v-model="formData.room_type">
            <option value="" selected disabled>需求房型</option>
            <option value="50坪以下">50坪以下</option>
            <option value="50~60坪">50~60坪</option>
            <option value="60~70坪">60~70坪</option>
            <option value="70坪以上">70坪以上</option>
          </select> -->

          <select class="select w-full form-i" v-model="formData.city">
            <option value="" selected disabled>居住縣市</option>
            <option v-for="city in cityList" :value="city.value">
              {{ city.label }}
            </option>
          </select>
          <select class="select w-full form-i" v-model="formData.area">
            <option value="" selected disabled>居住地區</option>
            <option v-for="area in areaList" :value="area.value">
              {{ area.label }}
            </option>
          </select>
          <textarea rows="5" :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
            class="textarea w-full h-full form-i" placeholder="備註訊息"></textarea>
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
      </div> </div>
      </div>



      <!-- Contact Info -->
      <ContactInfo />
    </div>


    <!-- Map -->
     <Map v-if="info.googleSrc" /> 

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";


.order-section {
 // background: url('@/section/form/bg2.jpg') 0 0;
 // background-size: size(1019) auto;
  padding-bottom: size(0);
  position: relative;
 // min-height: size(3110);
  padding-top: size(250);
  overflow: hidden;

  .img{position: absolute;bottom: 0;left: 0;width: 100%;}
  .z-10 {
    z-index: 10;
    position: relative;
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
$mar:0;
  .wave{
    position: absolute;bottom:$mar;left:$mar;right:$mar;top:$mar;
.shadow1{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(-100);
    transform: rotate(5deg);

  img{height: size(390);
  animation: wave 9s linear infinite;transform:translateX(-100%);}
}

.shadow2{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(260);
    transform: rotate(-3deg);
img{height: size(161);
  animation: wave 7s linear infinite reverse;transform:translateX(-100%);}
}

.shadow3{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(250);
    transform: rotate(3deg);
img{height: size(161);
  animation: wave 5s linear infinite;transform:translateX(-100%);}
}
.l1{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(160);
    transform: rotate(3deg);
img{height: size(161);
  animation: wave 6s linear infinite reverse;transform:translateX(-100%);}
}
.l2{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(270);
    transform: rotate(-3deg);
img{height: size(161);
  animation: wave 8s linear infinite;transform:translateX(-100%);}
}
.l3{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(100);
    transform: rotate(1deg);
img{height: size(233);
  animation: wave 10s linear infinite reverse;transform:translateX(-100%);}
}
@keyframes wave{
  to {transform:translateX(0%);}
}
.light1{position: absolute;
  width:size(2296);opacity: .7;
left: size(0);
bottom:size(100);}
}

.order {
  width: 100%;
  padding-top: size(0);

  .order-title {
    font-size: size(43);
    font-weight: 600;
    margin-bottom: size(80);
    color: #000;
    height:size(50);
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
    width:  size(1100);
   // height:  size(300);
    gap: size(80);
    margin-bottom: size(50);
    z-index: 50;

    .left {
      width: 50%;
      img{
        width: size(510);
      }
    }

    .right {
      width: 50%;
    }

    &::after {
      content: "";
      width: 1px;
      height: 100%;
      background-color: #fff;
      position: absolute;
    }
    .form-i{
      background: transparent;
      border:0px;
      border-bottom: 1px solid #fff;
      border-radius: 0;color: #fff;
      font-size: size(17);
      line-height: 1.6;
      margin-bottom:.8em ;
      option{color: #000;background: #fff;}
    }
  }

  .send {
    font-size: size(22);
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background-color: #733111;
    width:100%;
    height: 3.3em;
    line-height: 3.3;
    border: 0;
    border-radius: 1em;
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
  background-size: size-m(596) auto;
  padding-top: size-m(80);

.img{bottom: size-m(160);}

    .decor {
      position: absolute;
      width: size-m(148);
      top: -#{size-m(50)};
      right: -#{size-m(35)};
    }
  }


  .wave{
    bottom:  size-m(410);
.shadow1{
    bottom:  size-m(-140);
  img{height: size-m(182);}
}

.shadow2{
    bottom:  size-m(28);
img{height: size-m(75);}
}

.shadow3{
    bottom:  size-m(23);
img{height: size-m(75);}
}
.l1{
    bottom:  size-m(-19);
img{height: size-m(75);}
}
.l2{
    bottom:  size-m(33);
img{height: size-m(75);}
}
.l3{
    bottom:  size-m(-47);
img{height: size-m(109);}
}

.light1{
  width:size-m(1071);
bottom:size-m(-47);}
}

  .order {
    width: 100%;
    // border-radius: size-m(68) size-m(68) 0 0;
    padding-top: size-m(0);
    margin-top: size-m(0);


    .order-title {
      font-size: size-m(29);
      margin-bottom: size-m(10);
   // padding-top: size-m(20);
    height:size-m(18);
    }

    .cus-divider {
      margin: 0 auto;
      width: size-m(117);
      height: size-m(2);
      margin-bottom: size-m(25);
      background-color: #055F76;
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
      img{
        width: size-m(230);
      }
      }

      .right {
        width: 100%;
       // height: size-m(100);
       margin-top:  size-m(50);
      }

      &::after {
        display: none;
      }
    .form-i{
      font-size: size-m(15);
    }
    }

    .send {
      font-size: size-m(21);
      width: size-m(318);
      margin: 1.5em auto 3.5em;
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
