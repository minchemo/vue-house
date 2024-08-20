<template>
  <div id="order" class="order relative text-center">
    <img
      class="bg"
      src="@/section/order/bgm.png" alt="bg" v-if="$isMobile()"
    />
    <div class="inkbg absolute" v-else>
    <div
      class="ink1 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink2 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink3 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink4 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink5 absolute" data-aos="fade" data-aos-delay="0">
      <img
      src="./s1/ink1.webp" alt="ink"
      />
    </div>
    <div
      class="ink6 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink3.png" alt="ink"
      />
    </div>
    <div
      class="ink7 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink3.png" alt="ink"
      />
    </div>
    <div
      class="ink8 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink3.png" alt="ink"
      />
    </div>
    <div
      class="ink9 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink3.png" alt="ink"
      />
    </div>
  <div
      class="ink10 absolute" data-aos="fade" data-aos-delay="600">
    <img
      src="./s1/ink4.png" alt="ink"
    />
  </div>
  <div
      class="ink11 absolute" data-aos="fade" data-aos-delay="600">
    <img
      src="./s1/ink5.png" alt="ink"
    />
  </div>
    </div>
    <div class="order-section">
      <div class="intro">
        <img
          class="logo"
          src="@/section/order/logo.png"
          alt=""
          srcset=""
          data-aos="fade-up"
          data-aos-delay="0"
        />
        <div class="t" data-aos="fade-up" data-aos-delay="0">
          接待中心<br />

          新北市三重區仁安街108號<br /><br />
          禮賓專線<br />
          02-8282-8088
        </div>
      </div>
      <!-- Title -->

      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image
      <img class="order-title-img" src="@/section/form/ordertitle.png" alt="" srcset="">
 -->
      <!-- Custom Image -->

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center z-10">
        <div class="s-order-title">
          <p>
            {{ info.order.title }}
          </p>
          <p>
            {{ info.order.subTitle }}
          </p>
        </div>
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

          <label class="row" v-if="info.room_type"
            ><span>需求房型</span>
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
            ><span>購屋預算</span>
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
            ><span>居住縣市</span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value" :key="city">
                {{ city.label }}
              </option>
            </select></label
          >
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

      <div
        class="form-send flex flex-col md:flex-row items-center md:items-end justify-between w-full"
      >
        <div class="flex flex-col">
          <!-- Policy -->
          <div
            class="flex gap-2 items-center justify-start control relative z-10  whitespace-nowrap"
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
                class="modal-button text-[#955B37] cursor-pointer font-bold hover:opacity-70 whitespace-nowrap"
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
          {{ sending ? "發送中.." : "立即預約" }}
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

.order-section {
  position: relative;
  overflow: hidden;
  // height: size(2821);
  // background-color: #e89213;
/*  background-image: url("@/section/orderbg.jpg");
  background-size: cover;
  background-position: center;
  */
  padding: 0 0;

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
  position: relative;
  width: 100%;
  padding-top: 0;
.bg{position: absolute;top: size(-140);;left: 0;width: 100%;z-index:2;
  user-select: none;// opacity: .7;
  pointer-events: none;}

  .ink1{top: size(533);left:size(-310);width:size(2135);height:size(1255);
  img{width: 100%;height: 100%;
    transform: rotate(-0deg);//opacity: .3;
  filter:invert(86%) sepia(4%) saturate(1113%) hue-rotate(319deg) brightness(111%) contrast(98%);
}
}

.ink2{top: size(-140);left:size(-80);width:size(2187);height:size(970);
  img{width: 100%;height: 100%;
    transform: rotate(-0deg);//opacity: .3;
    filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);
}
}
.ink3{top: size(2029);left:size(-310);width:size(2135);height:size(1255);
  img{width: 100%;height: 100%;
    transform: rotate(-0deg);//opacity: .3;
   filter:invert(86%) sepia(4%) saturate(1113%) hue-rotate(319deg) brightness(111%) contrast(98%);
}
}

.ink4{top: size(1417);left:size(5);width:size(2455);height:size(1085);
  img{width: 100%;height: 100%;
    transform: rotate(180deg);//opacity: .3;
    filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);
}
}

.ink5{top: size(473);left:size(-160);width:size(2970);height:size(990);
  img{width: 100%;height: 100%;
    transform: rotate(0deg);
}
}
  .ink6{top: size(775);left:size(-450);width:size(1340);height:size(310);
    transform: translate(-10%,-10%);
    img{width: 100%;height: 100%;
      transform: rotate(24deg);
    //  filter:invert(91%) sepia(67%) saturate(3215%) hue-rotate(294deg) brightness(100%) contrast(91%);
    }
  }
  .ink7{top: size(630);left:size(1020);width:size(830);height:size(290);
    transform: translate(-10%,-10%);
    img{width: 100%;height: 100%;
      transform: perspective(5vw)rotate(10deg)rotateX(-7deg)rotateY(3deg);
     filter:invert(79%) sepia(17%) saturate(537%) hue-rotate(358deg) brightness(98%) contrast(89%);
    }
  }
  .ink8{top: size(740);left:size(-80);width:size(770);height:size(210);
    transform: translate(-10%,-10%);
    img{width: 100%;height: 100%;
      transform: rotate(7.5deg);
    filter:invert(79%) sepia(17%) saturate(537%) hue-rotate(358deg) brightness(98%) contrast(89%);
    }
  }
  .ink9{top: size(2320);left:size(250);width:size(1550);height:size(400);
    transform: translate(-10%,-10%);
    img{width: 100%;height: 100%;
      transform: rotate(189deg);
      filter:invert(91%) sepia(67%) saturate(3215%) hue-rotate(294deg) brightness(100%) contrast(91%);
    }
  }

  .ink10{top: size(150);left:size(960);width:size(1290);
    transform: translate(-10%,-10%);
    img{width: 100%;
      transform: rotate(17deg);
    //  filter:brightness(30%);
    }
  }
  .ink11{top: size(1175);left:size(-530);width:size(1770);
    transform: translate(-10%,-10%);
    img{width: 100%;
      transform: rotate(0deg);
    //  filter:brightness(0%);
    }
  }


  .s-order-title {
    @apply absolute left-0 bottom-[115%] text-center w-full;
    p {
      font-size: size(32);
      font-weight: 500;
      color: #231815;

      &:nth-child(2) {
        font-size: size(18);
        margin-top: size(5);
      }
    }
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
   // @apply left-1/2 -translate-x-1/2;
    width:100%;
    // min-width: 680px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;
    margin: size(45) auto;
    width: size(900);

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
      background: rgba($color: #fff, $alpha: 1);
      border: 1px solid #a6a6a6;
      color: #231815;
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
.form-send{
    margin: 0 auto size(45) auto;
    width: size(900);}
  .send {
    font-size: 20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background: #c9a063;
    border-radius: 20px;
    border: 0;

    width: size(442);
    height: size(87);
    line-height: 3.3;
    z-index: 10;
    font-weight: 700;
    position: relative;

    @apply hover:bg-[#bd8e48] hover:text-white;
  }

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width: 768px) {
  .order-section {
    @apply bg-cover;
    min-height: sizem(800);
    position: relative;
  //  background-image: url("@/section/orderbgm.jpg");
    // overflow: hidden;
    // padding-top: sizem(200);
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
    width: 100%;

.ink1{top: sizem(190);left:sizem(-345);width:sizem(850);height:sizem(515);
    img{
      transform: rotate(-0deg);
  }
}
.ink2{top: sizem(-27);left:sizem(-266);width:sizem(906);height:sizem(410);
    img{
      transform: rotate(-0deg);
  }
}
.ink3{top: sizem(1310);left:sizem(-370);width:sizem(895);height:sizem(540);
    img{
      transform: rotate(0deg);
  }
}
.ink4{top: sizem(645);left:sizem(-267);width:sizem(910);height:sizem(410);
    img{
      transform: rotate(0deg);
  }
}
.ink5{top: sizem(205);left:sizem(-270);width:sizem(1150);height:sizem(420);
    img{
      transform: rotate(0deg);
     // filter:brightness(30%) ;
  }
}

    .s-order-title {
      @apply absolute left-0 bottom-[105%] flex flex-col items-center justify-center w-full;
      p {
        font-size: sizem(29);
        font-weight: 500;
        color: #231815;

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
      margin-top: sizem(220);

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
      margin-top: 1em;
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
