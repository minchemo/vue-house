<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <label class="row"
          ><span>姓名</span>
          <input
            type="text"
            placeholder="請輸入姓名"
            class="input w-full rounded-none"
            :value="formData.name"
            @input="(event) => (formData.name = event.target.value)"
        /></label>
        <label class="row"
          ><span>電話</span>
          <input
            type="text"
            placeholder="請輸入連絡電話"
            class="input w-full rounded-none"
            :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)"
        /></label>
        <label class="row"
          ><span>預約人數</span>
          <select v-model="formData.reservation.vistor_count">
            <option value="1">1 人</option>
            <option value="2">2 人</option>
            <option value="3">3 人</option>
            <option value="4">4 人</option>
            <option value="5">5 人</option>
          </select>
        </label>
        <label class="row"
          ><span>預約日期</span>
          <div class="calendar-bar">
            <VDatePicker
              v-model="selectedDate"
              :min-date="minDate"
              :max-date="maxDate"
              :attributes="calendarAttributes"
            >
              <template #default="{ togglePopover }">
                <button
                  class="input w-full rounded-none"
                  @click.stop="togglePopover"
                >
                  {{ formatDate(selectedDate) }}
                </button>
              </template>
            </VDatePicker>
          </div>
        </label>

        <label class="row tworow"
          ><span>預約時段</span>
          <div class="time-btns">
            <div
              class="item"
              v-for="(r, i) in reservations"
              :key="i"
              :class="{
                active: r.slots < MAX_COUNT,
                selected: formData.reservation.time == r.time,
              }"
              @click="onSelectSlots(r)"
            >
              {{ r.time }}
            </div>
          </div>
        </label>

        <div class="flex flex-col items-start mt-4">
          <!-- Policy -->
          <div class="flex gap-2 items-center justify-center control">
            <input
              type="checkbox"
              v-model="formData.policyChecked"
              :checked="formData.policyChecked"
              class="checkbox bg-white rounded-md"
            />
            <p class="text-[#fff]">
              本人知悉並同意<label
                for="policy-modal"
                class="modal-button text-[#FFF000] cursor-pointer hover:opacity-70"
                >「個資告知事項聲明」</label
              >內容
            </p>
          </div>
          <Policy />

          <!-- Recaptcha -->
          <vue-recaptcha
            class="flex w-full justify-center mt-8 z-10"
            ref="recaptcha"
            :sitekey="info.recaptcha_site_key_v2"
            @verify="onRecaptchaVerify"
            @expired="onRecaptchaUnVerify"
          />
        </div>

        <!-- Send -->
        <div
          class="send grow hover:scale-[98%] btn cursor-pointer"
          @click="send()"
        >
          {{ sending ? "發送中.." : "即刻預約" }}
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
  //display: none;
  position: relative;
  // padding-top: size(406);
  overflow: hidden;
  min-height: size(500);
  // background: linear-gradient(180deg, #418DBD 0%, #000A39 100%);

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }
}

.order {
  width: 100%;
  padding-top: size(132);
  font-size: size(15);
  background: #000;

  .form {
    @apply relative z-[98];
    width: size(788);
    gap: size(27.8);
    @apply grid grid-cols-2;

    .row {
      background: transparent;
      border: none;
      color: #fff;
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: start;
      gap: size(10);
      > span {
        text-align: left;
        font-weight: 500;
        font-size: size(21);
      }
      input,
      .input,
      select {
        @apply bg-[#DD5510]/20 w-full;
        @apply border-[#DD5510] text-left;
        border-radius: size(5);
        height: size(53);
        padding: 0 size(20);
        color-scheme: dark;
        line-height: size(53);
      }

      select {
        @apply border-[#DD5510] border;
      }
      option {
        @apply bg-black;
      }
      &.tworow {
        grid-column: span 2;
        .time-btns {
          @apply flex w-full rounded;
          gap: size(18.23);
          .item {
            @apply flex-1 cursor-not-allowed opacity-20;
            height: size(60);
            border-radius: size(5);
            background: linear-gradient(
              180deg,
              #dd5510 0%,
              rgba(221, 85, 16, 0) 100%
            );
            border: 1px solid #dd5510;
            font-size: size(21);
            line-height: size(58);
            &.active {
              @apply opacity-100 cursor-pointer;
              &:hover {
                @apply opacity-80;
              }
            }
            &.selected {
              @apply bg-white text-black hover:opacity-100;
            }
          }
        }
      }
    }

    .calendar-bar {
      @apply relative z-20 w-full;
      .date-picker {
        @apply absolute left-0;
      }
    }
  }

  .send {
    font-size: 20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    border: 1px solid #dd5510;
    background: linear-gradient(180deg, #dd5510 0%, rgba(221, 85, 16, 0) 100%);
    border-radius: 0em;

    width: 80%;
    height: 3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 600;
    position: relative;
    font-family: "Noto serif tc";
    align-self: flex-end;
    justify-self: flex-end;
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
    padding-top: sizem(50);
    font-size: sizem(14);

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
      padding-top: 1.5em;
    }
    .order-subTitle {
      font-size: sizem(13);
      padding-top: 0;
    }

    .form {
      width: sizem(310);
      gap: sizem(14.3);
      @apply grid grid-cols-1;

      .row {
        background: transparent;
        border: none;
        color: #fff;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: start;
        gap: sizem(6.8);
        > span {
          text-align: left;
          font-weight: 500;
          font-size: sizem(13);
        }
        input,
        .input,
        select {
          @apply bg-[#DD5510]/20 w-full;
          @apply border-[#DD5510] text-left;
          border-radius: sizem(5);
          height: sizem(31.1);
          padding: 0 sizem(10);
          color-scheme: dark;
          line-height: sizem(31.1);
        }

        select {
          @apply border-[#DD5510] border;
        }
        option {
          @apply bg-black;
        }

        &.tworow {
          grid-column: span 1;
          .time-btns {
            @apply flex w-full rounded;
            gap: sizem(7.2);
            .item {
              @apply flex-1;
              height: sizem(34.5);
              border-radius: sizem(5);
              background: linear-gradient(
                180deg,
                #dd5510 0%,
                rgba(221, 85, 16, 0) 100%
              );
              border: 1px solid #dd5510;
              font-size: sizem(15);
              line-height: sizem(34.5);
              &:hover {
                @apply cursor-pointer opacity-80;
              }
            }
          }
        }
      }

      .calendar-bar {
        @apply relative z-[100] w-full;
        .date-picker {
          @apply absolute left-0;
        }
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
import {
  computed,
  getCurrentInstance,
  ref,
  reactive,
  watch,
  onMounted,
} from "vue"
import { VueRecaptcha } from "vue-recaptcha"

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

import { useToast } from "vue-toastification"
const toast = useToast()

const sending = ref(false)

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  budget: "",
  project: "",
  email: "",
  city: "",
  area: "",
  msg: "",
  reservation: {
    vistor_count: 5,
    date: "",
    time: "",
  },
  policyChecked: false,
  r_verify: true,
})

//非必填
const bypass = [
  "project",
  "msg",
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
  "用途", //budget
  "建案", //project
  "聯絡時間", //email
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

const minDate = ref(new Date("2025-01-02"))
const maxDate = ref(new Date("2025-01-26"))
const selectedDate = ref(new Date("2025-01-02"))
const calendarAttributes = ref([
  {
    highlight: true,
    dates: [],
  },
])
const slots = ref([])
const validReservationTime = ["10:00", "13:00", "15:00", "17:00"]
const reservations = reactive(
  validReservationTime.map((item) => ({ date: "", time: item, slots: 0 }))
)
const MAX_COUNT = 10

watch(
  () => selectedDate.value,
  (newVal, oldVal) => {
    checkSlots(newVal)
  }
)

onMounted(() => {
  getSlots()
})

const setAllReservationsDate = (dates) => {
  const dates_ = []
  dates.forEach((date) => {
    if (date.count < MAX_COUNT) {
      const datetime = date.reservation_datetime
      const reservationTime = date.reservation_time
      const isValidTime = validReservationTime.includes(reservationTime)

      if (isValidTime) {
        const d = new Date(datetime)
        dates_.push(d)
      }
    }
  })

  calendarAttributes.value = [
    {
      highlight: {
        fillMode: "light",
      },
      dates: dates_,
    },
  ]
}

const getSlots = async () => {
  const response = await fetch(
    "https://test-two.h65.tw/get_reservation_time_slots.php"
  )
  const data = await response.json()
  slots.value = data
  setAllReservationsDate(data)
  checkSlots(selectedDate.value)
}

const checkSlots = (date) => {  
  formData.reservation.time = ""
  formData.reservation.date = ""

  const formattedDate =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")

  const allSlotsByDate = slots.value.filter(
    (item) => item.reservation_datetime == formattedDate
  )

  reservations.forEach((item) => {
    const targetTime = allSlotsByDate.find(
      (i) => i.reservation_time == item.time
    )
    item.date = targetTime ? targetTime.reservation_datetime : ""
    item.slots = targetTime ? targetTime.count : 0
  })
}

const onSelectSlots = (data) => {
  console.log(data)

  if (data.date == "") {
    toast.error(`該時段不開放預約或已額滿`)
    return
  }

  formData.reservation.date = data.date
  formData.reservation.time = data.time
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

  /// 日期預約
  presend.append("reservation_date", formData.reservation.date)
  presend.append("reservation_time", formData.reservation.time)
  presend.append("reservation_count", formData.reservation.vistor_count)
  presend.delete("reservation")
  /// 日期預約 - end

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
      &project=${formData.project}
      &email=${formData.email}
      &cityarea=${formData.city}${formData.area}
      &msg=${formData.msg}
      &reservation_date=${formData.reservation.date}
      &reservation_time=${formData.reservation.time}
      &reservation_count=${formData.reservation.vistor_count}
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
        const dateString = `${formData.reservation.date},${formData.reservation.time}`
        const base64String = btoa(dateString)
        window.localStorage.setItem("reservation", base64String)
        window.location.href = "formThanks"
      }
      sending.value = false
    })

    // toast.success(`表單已送出，感謝您的填寫`)
  }
}

const formatDate = (dateValue) => {
  const date = dateValue
  const month = date.getMonth() + 1
  const day = date.getDate()
  const daysOfWeek = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
  const dayOfWeek = daysOfWeek[date.getDay()]
  return `${month}月${day}日 ${dayOfWeek}`
}
</script>
