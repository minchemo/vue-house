<template>
  <div
    class="contact-info mx-auto bg-white flex flex-col items-center justify-between"
  >
    <div class="logo"></div>
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-between items-center">
        <img src="@/section/form/phone.svg" alt="" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-between items-center">
        <img src="@/section/form/messenger.svg" alt="" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-between items-center">
        <img src="@/section/form/fb.svg" alt="" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap">
      <div class="flex contact-item justify-between items-center address">
        <div>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-between items-center">
        <img src="@/section/form/gmap.svg" alt="" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.contact-info {
  width: size(1200);
  border-radius: size(115);
  padding: size(115) size(168) size(55) size(168);
  margin-top: size(60);
  .logo {
    width: size(434);
    height: size(118);
    background-image: url("@/section/form/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: size(40);
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);
    .contact-item {
      width: 100%;
      padding: size(15) size(55);
      background-color: #ffea00;
      border-radius: 9999px;
      font-size: size(16);
      letter-spacing: size(1);
      max-width: size(280);
      z-index: 1;
      cursor: pointer;
      &:hover {
        filter: hue-rotate(95deg);
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
      }
      &.address {
        z-index: 0;
        background-color: #eeeeee;
        position: relative;
        border-radius: 999px 0 0 999px;
        max-width: 9999px;
        justify-content: center;
        &::after {
          content: "";
          position: absolute;
          width: 50px;
          height: 100%;
          background-color: #eeeeee;
          left: 100%;
        }
      }
    }
    &.no-gap {
      gap: 0 !important;
    }
  }
}
</style>

<script setup>
import info from "@/info"
</script>
