<template>
  <div id="order" class="order relative text-center">
    <div class="star">
      <div class="star01" data-aos="zoom-in" data-aos-delay="800"><img src="./s1/star1.png" alt="star"></div>
      <div class="star02" data-aos="zoom-in" data-aos-delay="300"><img src="./s1/star1.png" alt="star"></div>
      <div class="star03" data-aos="zoom-in" data-aos-delay="1100"><img src="./s1/star1.png" alt="star"></div>
      <div class="star04" data-aos="zoom-in" data-aos-delay="100"><img src="./s1/star1.png" alt="star"></div>
      <div class="star05" data-aos="zoom-in" data-aos-delay="200"><img src="./s1/star1.png" alt="star"></div>
      <div class="star06" data-aos="zoom-in" data-aos-delay="400"><img src="./s1/star1.png" alt="star"></div>
      <div class="star07" data-aos="zoom-in" data-aos-delay="700"><img src="./s1/star1.png" alt="star"></div>
      <div class="star08" data-aos="zoom-in" data-aos-delay="1000"><img src="./s1/star1.png" alt="star"></div>
      <div class="star09" data-aos="zoom-in" data-aos-delay="0"><img src="./s1/star1.png" alt="star"></div>
      <div class="star10" data-aos="zoom-in" data-aos-delay="500"><img src="./s1/star1.png" alt="star"></div>
      <div class="star11" data-aos="zoom-in" data-aos-delay="600"><img src="./s1/star1.png" alt="star"></div>
      <div class="star12" data-aos="zoom-in" data-aos-delay="900"><img src="./s1/star1.png" alt="star"></div>
    </div>
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
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row"><span>姓名<span>*</span></span>
          <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" /></label>
            <label class="row"><span>手機<span>*</span></span>
              <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" /></label>
<!--
          <select class="select w-full rounded-none bg-white" v-model="formData.room_type">
            <option value="" selected disabled>需求房型</option>
            <option value="二房">二房</option>
            <option value="三房">三房</option>
          </select>  -->
          <label class="row"><span>服務專員</span>
          <select class="select w-full rounded-none bg-white" v-model="formData.people">
            <option value="" selected disabled>選擇專員</option>
            <option value="陳睿珩">陳睿珩</option>
            <option value="曾依琇">曾依琇</option>
            <option value="翁雅如">翁雅如</option>
            <option value="林菀淳">林菀淳</option>
          </select></label>
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
        {{ sending? '發送中..': '立即預約' }}
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


.star{position: absolute;left: 0;top: 0;width: 100%;height:20vw;
> div {position: absolute;
img{width: 100%;}}
  .star01{width: size(395);top: 164%;left: 7%;
    img{opacity:0.1;transform: rotate(16deg);filter: saturate(50%)brightness(1.1);}
  }
  .star02{width: size(556);top: 104%;left: 48%;
    img{opacity: 0.1;transform: rotate(37deg);filter: saturate(50%)brightness(1.1);}
  }
  .star03{width: size(360);top: 175%;left: -3%;
    img{opacity: 0.1;transform: rotate(16deg);filter: saturate(50%)brightness(1.1);}
  }
  .star04{width: size(556);top: -8%;left: 72%;
    img{opacity: 0.1;transform: rotate(-39deg);filter: saturate(50%)brightness(1.1);}
  }
  .star05{width: size(484);top: 57%;left: 63%;
    img{opacity: 0.3;transform: rotate(170deg);}
  }
  .star06{width: size(268);top:163%;left: 53%;
    img{opacity: 0.3;transform: rotate(-94deg);}
  }
  .star07{width: size(147);top: 195%;left: 30%;
    img{opacity: 0.3;transform: rotate(-5deg);}
  }
  .star08{width: size(308);top: 127%;left: 3.5%;
    img{opacity: 0.3;transform: rotate(17deg);}
  }
  .star09{width: size(566);top: 51%;left: 78%;
    img{opacity: 0.3;transform: rotate(97deg);}
  }
  .star10{width: size(137);top: 175%;left: 65%;
    img{opacity: 0.3;transform: rotate(-32deg);filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);}
  }
  .star11{width: size(137);top: 195%;left: 42.5%;
    img{opacity: 0.3;transform: rotate(40deg);filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);}
  }
  .star12{width: size(137);top: 160%;left: 17%;
    img{opacity: 0.52;transform: rotate(27deg);filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);}
  }
}
.order-section {
  position: relative;
 // padding-top: size(406);
   overflow: hidden;
    min-height: size(500);

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

  .order-title {
    font-size: size(40);
    font-weight: 700;
    color: #fff;
    padding-top:2em;
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
      background-color: #fff;
      position: absolute;
    }
    .row{background: #FFF;border: 1px solid #CCC;color: #000;
      display: flex;width: 100%;
    align-items:center;
      > span{
        width: 5.5em;
        text-align: left;padding-left:1em;
        font-weight: 700;
        > span{color: #F00;}
      }
      input,select{background: inherit;flex: 1;}
      option{color: #666;}
      select{background: url("//h65.tw/img/select.svg") no-repeat calc(100% - .5em) 100%;
      background-size:auto 200%;
      transition: background .3s;
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
    background:#A92D41;
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
.star{
  height:sizem(604);

  .star01{width:sizem(118);top: -1%;left: 57%;
    img{transform: rotate(-20deg);}
  }
  .star02{width:sizem(162);top:19%;left: -4%;
    img{transform: rotate(121deg);}
  }
  .star03{width:sizem(108);top: 0%;left: 73%;
    img{transform: rotate(-20deg);}
  }
  .star04{width:sizem(167);top:122%;left: 18%;
    img{transform: rotate(152deg);}
  }
  .star05{width:sizem(149);top: 115%;left: 1%;
    img{transform: rotate(162deg);}
  }
  .star06{width:sizem(86);top: 122%;left: 76%;
    img{transform: rotate(34deg);}
  }
  .star07{width:sizem(43);top: 0%;left: 25%;
    img{transform: rotate(30deg);}
  }
  .star08{width:sizem(91);top: 10%;left: 69.5%;
    img{transform: rotate(-19deg);}
  }
  .star09{width:sizem(178);top: 129%;left: 10%;
    img{transform: rotate(164deg);}
  }
  .star10{width:sizem(43);top: 123%;left: 70%;
    img{transform: rotate(-107deg);}
  }
  .star11{width:sizem(43);top: 14%;left: 0%;
    img{transform: rotate(-68deg);}
  }
  .star12{width:sizem(45);top: 5%;left: 62%;
    img{transform: rotate(-15deg);}
  }

}
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
    // border-radius: sizem(68) sizem(68) 0 0;
   /* padding-top: sizem(0);
    margin-top: sizem(0);

    .order-title-img {
      width: sizem(315);
      margin-bottom: sizem(22);
    } */

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
      background-color: #055F76;
    }

    .order-title {
      font-size: sizem(25);
      // padding-top:4.5em;
    }
    .order-subTitle{
      font-size: sizem(13);
      padding-top:0;
    }


    .form {
      width: sizem(310);
      min-width: 0;
      height: auto;
      gap: sizem(15);
      margin-bottom: sizem(20);
      flex-direction: column;
      margin-top: sizem(20);

      .left {
        width: 100%;
        gap: sizem(15);
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
const bypass = ["project", "msg", "people", "email", "room_type", "city", "area"]

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
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
