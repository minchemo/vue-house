<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <!-- Title -->
      <!-- 
        <div class="order-title text-center">{{ info.order.title }}</div> 
      上面是原本的
      -->
      <h3 class="order-title" data-aos="fade-up" data-aos-delay="0"><span class="title_c">{{ info.order.title }}</span><span class="en">RESERVATION</span></h3>
      <div class="order-subTitle text-center">{{ info.order.subTitle }}</div>
      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image
      <img class="order-title-img" src="@/section/form/ordertitle.png" alt="" srcset="">
 -->
      <!-- Custom Image -->

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row"><span>姓名<span>(必填)</span></span>
          <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" /></label>
            <label class="row"><span>手機<span>(必填)</span></span>
              <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" /></label>

          <label class="row" v-if="info.room_type"><span>需求房型</span>
            <select class="select w-full rounded-none bg-white" v-model="formData.room_type">
           <option value="" selected disabled>請選擇房型</option> 
            <option v-for="room in info.room_type" :value="room" v-text="room"></option>
          </select></label>
          <label class="row" v-if="info.budget"><span>購屋預算</span>
            <select class="select w-full rounded-none bg-white" v-model="formData.budget">
           <option value="" selected disabled>請選擇預算</option>
            <option v-for="budget in info.budget" :value="budget" v-text="budget"></option>
          </select>
        </label>
          <label class="row"><span>居住縣市</span>
          <select class="select w-full rounded-none" v-model="formData.city">
            <option value="" selected disabled>請選擇城市</option>
            <option v-for="city in cityList" :value="city.value">
              {{ city.label }}
            </option>
          </select></label>
          <label class="row"><span>居住地區</span>
          <select class="select w-full rounded-none" v-model="formData.area">
            <option value="" selected disabled>請選擇地區</option>
            <option v-for="area in areaList" :value="area.value">
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
        {{ sending? '發送中..': '即刻預約' }}
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
 // padding-top: size(406);
   overflow: hidden;
    min-height: size(500);
 background: transparent;
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
  padding-top:size(100);
  &::before{content: "";width:100%;mix-blend-mode: multiply;
  height: 100%;background: #22491B;display: block;
  position: absolute;bottom:0%;left:0%;
}
  

  .order-title {
    @apply font-['Noto_serif_TC',serif];
    font-size: size(18);
    font-weight: 700;
    color: #F1CC8B;
    padding-top:2em;
  .title_c{
    font-size:3.5em;}
    .en{letter-spacing: 0.11em;;display: block;}
    &::before{
      content: "";
      z-index: -1;
    position: absolute;display: block;
      background-image: url("data:image/svg+xml,%3Csvg stroke='%23b77f6199' fill='none' stroke-width='2' viewBox='0 0 261 261' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M178.7,81.7l-48.5-19.9L81.8,82l-20,48.5L82,178.9l48.5,19.9l48.4-20.2l19.9-48.5L178.7,81.7z M141,203.1l23.8,9.8l9.8-23.8L141,203.1z M86.4,189.4l10,23.8l23.8-9.9L86.4,189.4z M47.5,96.3l10,23.8l13.9-33.7L47.5,96.3z M71.6,174.6l-14.1-33.7l-9.8,23.9L71.6,174.6z M95.9,47.7l-9.8,23.8l33.6-14L95.9,47.7z M164.4,47.5l-23.8,9.9l33.7,13.8L164.4,47.5z M189.2,86l14,33.6l9.8-23.8L189.2,86z M189.4,174.3l23.8-9.9l-9.9-23.8L189.4,174.3z M53.1,130.5l-12.5-29.9L3.4,130.7l37.5,29.7L53.1,130.5z M219.9,100.1l-12.3,30l12.5,29.8l37.3-30.1L219.9,100.1z M172.3,45.6l12.5,30l29.9,12.3l5.1-47.7L172.3,45.6z M130.1,53.1l29.9-12.5L129.9,3.2l-29.8,37.5L130.1,53.1z M40.3,40.8l5.5,47.6l29.9-12.5l12.3-30L40.3,40.8z M45.9,172.7l-5.1,47.7l47.5-5.5l-12.4-29.8L45.9,172.7z M130.6,207.5L100.7,220l30.1,37.2l29.7-37.4L130.6,207.5z M220.5,219.8l-5.5-47.5l-29.9,12.5l-12.3,29.9L220.5,219.8z M251.2,84.1l-25.3,10.5l33.5,26.6C258.6,108.7,255.8,96.2,251.2,84.1L251.2,84.1z M222.8,87.3l25.3-10.6c-5.3-11.7-12.2-22.5-20.7-32.1L222.8,87.3z M172.8,37.5l42.4-4.8c-9.6-8.3-20.4-15.2-32.1-20.4L172.8,37.5z M175.8,9.2c-12-4.5-24.6-7.2-37.3-8l26.9,33.3L175.8,9.2z M94.8,34.6l26.5-33.4c-12.5,0.9-25,3.6-37,8.2L94.8,34.6z M44.8,33.2l42.6,4.5L76.9,12.5C65.2,17.8,54.4,24.8,44.8,33.2z M12.4,77.4l25.2,10.4l-4.8-42.4C24.4,55.1,17.5,65.9,12.4,77.4L12.4,77.4z M1.3,122.1l33.2-26.9L9.3,84.8C4.8,96.8,2.1,109.4,1.3,122.1L1.3,122.1z M9.5,176.3l25.3-10.6L1.3,139.3C2.2,151.9,4.9,164.4,9.5,176.3z M37.8,173.1l-25.3,10.6c5.3,11.8,12.3,22.6,20.7,32L37.8,173.1L37.8,173.1z M87.9,223l-42.4,4.9c9.7,8.4,20.4,15.2,32,20.4L87.9,223L87.9,223z M122.2,259.4l-27-33.4l-10.4,25.3C97,255.9,109.5,258.6,122.2,259.4z M165.9,225.8l-26.6,33.6c12.7-0.9,25.2-3.6,37.2-8.2L165.9,225.8z M216,227.3l-42.8-4.6l10.6,25.3C195.6,242.8,206.4,235.8,216,227.3z M248.4,183.1l-25.4-10.4l4.9,42.6C236.4,205.6,243.3,194.8,248.4,183.1L248.4,183.1z M259.6,138.3l-33.5,27l25.4,10.4C256,163.6,258.8,151,259.6,138.3z'/%3E%3C/svg%3E");
      width: 1em;height: 1em;top:0em;left:0;right: 0;margin: auto;
      font-size: 10.3em;
      
    }
  }

  .order-title-img {
    width: size(1008);
    margin-bottom: size(155);
  }
  .order-subTitle{
    font-size: size(17);
    color: #fff;
    padding-top:.8em;
    letter-spacing: 0em;
    font-weight: 500;
  }
  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
    background-color: #055F76;
  }

  .form {
    width: size(920);
    min-width: 680px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(70);
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
      background-color: #fff;
      position: absolute;
    }
    .row{background: #ffffff;border: 1px solid #CCC;//color: #000;
    font-weight: 500;
      display: flex;width: 100%;
      
    align-items:center;
      > span{
        color: #000;
        width: 5.5em;
        text-align: left;padding-left:1em ;
        > span{color: #F00;font-size: 12px;}
      }
      input,select{background:none;flex: 1;}
      option{color: #666;}
      select{background: url("//h65.tw/img/select.svg") no-repeat calc(100% - .5em) 100%;
      background-size:auto 200%;
      transition: background .3s;
      //filter: brightness(0) invert(1);

      &:focus{
        background-position:calc(100% - .5em) 0%;
      }
      }
    }
  }

  .send {
    font-size:20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #FFF;
    background:#BE9F6B;
    //border: 1px solid #FFF9;
    border:0;
    border-radius: .5em;

    width: 308px;
    height:3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 700;
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
    min-height: sizem(800);
    position: relative;
    // overflow: hidden;
   // padding-top: sizem(200);

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{sizem(30)};
      bottom: sizem(590);
    }

  }

  .order {
    width: 100%;
    padding-bottom: sizem(63);

    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055F76;
    }

    .order-title {
      font-size: sizem(12);
      // padding-top:4.5em;
  .title_c{
    font-size:2.8em;}
    &::before{
      font-size: 7.3em;top:0.1em;}
    }
    .order-subTitle{
      font-size: sizem(13);
      padding-top:0;
    }


    .form {
      width: sizem(310);
      min-width: 0;
      height: auto;
      gap: 0;
      margin-bottom: sizem(20);
      flex-direction: column;
      margin-top: sizem(30);

      .left {
        width: 100%;
        gap: 0;
        .row{
         margin: 0 0 sizem(15);
        }
      }

      .right {
        width: 100%;
        height: sizem(100);
        .row{
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
const bypass = ["project", "msg", "people", "email", "room_type","budget", "city", "area"]

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
