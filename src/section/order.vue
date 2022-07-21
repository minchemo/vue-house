  <template>
  <div class="order relative bg-[#DFDDC8] text-center">
    <div class="order-section font-['noto_sans_tc']">
      <!-- Title -->
      <div class="order-title text-center">{{ info.order.title }}</div>

      <!-- Title Image -->
      <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="公園漾" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="公園漾" srcset="" data-aos="fade"
      data-aos-duration="1000"> -->

      <!-- Custom Image -->
      <img v-if="!$isMobile()" class="bg-image" src="@/section/form/bg.png" alt="" srcset="">
      <img v-else class="bg-image" src="@/section/form/bg_m.png" alt="" srcset="">
      <Cat class="cat" />
      <Rabbit class="rabbit" />

      <!-- Form -->
      <div class="form mx-auto relative flex items-start justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <input type="text" placeholder="姓名" class="input w-full rounded-full" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" />
          <input type="text" placeholder="手機" class="input w-full rounded-full" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" />
          <select class="select w-full rounded-full" v-model="formData.room_type">
            <option value="" selected disabled>需求房型</option>
            <option value="3房1衛">3房1衛</option>
            <option value="3房2衛">3房2衛</option>
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
          <textarea :value="formData.note" @input="(event) => (formData.note = event.target.value)"
            class="textarea w-full h-full rounded-3xl" placeholder="備註訊息"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p>
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
        送出表單
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
  padding-bottom: size(52);
  position: relative;

  .cat {
    position: absolute;
    width: size(600);
    z-index: 1;
    pointer-events: none;
    bottom: -#{size(130)};
    left: 0;
  }
  .z-10{
    z-index: 10;
    position: relative;
  }

  .rabbit {
    position: absolute;
    width: size(550);
    z-index: 1;
    pointer-events: none;
    bottom: size(20);
    right: 0;
  }

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }

  &::after {
    content: '';
    width: 100%;
    height: size(50);
    background-color: #514118;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.order {
  width: 100%;
  padding-top: size(50);

  .order-title {
    font-size: size(43);
    font-weight: 500;
    margin-bottom: size(50);
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
    color: #fff;
    background-color: #3E3A39;
    width: size(350);
    height: 3.3em;
    line-height: 3.3;
    border: 0;
    border-radius: 1.6em;
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
    padding-bottom: 0;
    position: relative;

    .cat {
      position: absolute;
      width: size-m(220);
      z-index: 1;
      pointer-events: none;
      bottom: size-m(520);
      left: -#{size-m(40)};
    }

    .rabbit {
      position: absolute;
      width: size-m(170);
      z-index: 1;
      pointer-events: none;
      bottom: size-m(600);
      right: -#{size-m(30)};
    }

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{size-m(30)};
      bottom: size-m(590);
    }

    &::after {
      content: '';
      width: 100%;
      height: size(50);
      background-color: #514118;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  .order {
    width: 100%;
    // border-radius: size-m(68) size-m(68) 0 0;
    padding-top: size-m(40);
    margin-top: size-m(0);

    .order-title {
      font-size: size-m(29);
      font-weight: 500;
      margin-bottom: size-m(20);
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
import Cat from "./cat.vue"
import Rabbit from "./rabbit.vue"
const toast = useToast()

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  city: "",
  area: "",
  note: "",
  policyChecked: false,
  r_verify: true,
})

//非必填
const bypass = ["note",]

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  "居住縣市", //city
  "居住地區", //area
  "備註訊息", //note
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
      idx++
    }

    presend.append(key, value);
  }

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

  if (pass) {
    fetch("contact-form.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "formThanks";
      }
    });


    // toast.success(`表單已送出，感謝您的填寫`)
  }
}
</script>
