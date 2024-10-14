<template>
  <div class="thanks">
    <img class="logo" src="@/section/form/thanks/logo.svg" alt="" srcset="" />
    <div class="t">
      <div class="t1">
        感謝您預約《AI慕光城》<br />
        專人會盡快與您聯繫
      </div>
      <!--div class="t2">{{ reservationDate }}</div>
      <div class="t3">{{ reservationTime }}</div>
      <div class="t4">高雄市前鎮區凱旋四路688號</div-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.thanks {
  @apply relative w-full bg-cover;
  @apply flex flex-col items-center;
  background-image: url("@/section/form/thanks/bg.jpg");
  height: 100dvh;
  padding-top: size(133);

  .logo {
    width: size(493);
    margin-bottom: size(38);
  }

  .t {
    @apply text-white text-center;
    line-height: size(49);
    .t1 {
      font-size: size(24);
      font-weight: 500;
      margin-bottom: size(70);
    }
    .t2 {
      font-size: size(53);
      font-weight: 500;
      margin-bottom: size(11);
    }
    .t3 {
      font-size: size(33);
      font-weight: 400;
    }
    .t4 {
      font-size: size(26);
      font-weight: 400;
    }
  }
}

@media screen and (max-width: 767px) {
  .thanks {
    background-image: url("@/section/form/thanks/bgm.jpg");
    height: 100dvh;
    padding-top: sizem(151);

    .logo {
      width: sizem(245);
      margin-bottom: sizem(63);
    }

    .t {
      @apply text-white text-center;
      line-height: sizem(24);
      .t1 {
        font-size: sizem(13);
        font-weight: 500;
        margin-bottom: sizem(48);
      }
      .t2 {
        font-size: sizem(25);
        font-weight: 500;
        margin-bottom: sizem(4);
      }
      .t3 {
        font-size: sizem(17);
        font-weight: 400;
        margin-bottom: sizem(20);
      }
      .t4 {
        font-size: sizem(13);
        font-weight: 400;
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

const reservationDate = ref("")
const reservationTime = ref("")

onMounted(() => {
  const t = window.localStorage.getItem("reservation")
  if (!t) {
    window.location.href = "404"
  } else {
    let decodeBase64 = atob(t)
    decodeBase64 = decodeBase64.split(",")
    reservationDate.value = decodeBase64[0]
    reservationTime.value = decodeBase64[1]
  }
})
</script>
