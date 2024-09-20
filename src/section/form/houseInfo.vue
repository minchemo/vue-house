<template>
  <div
    class="houseinfo md:flex md:items-center md:justify-between bg-[#8FC31F]"
  >
    <img class="logo" src="@/section/logo2.png" />
    <div
      class="info-box"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
      <div class="title">
        建案資訊
        <img src="@/section/houseInfoTitle.png" alt="" srcset="" />
      </div>
      <div class="info-items">
        <div
          class="item flex justify-between items-center w-full whitespace-nowrap"
          v-for="item in info.houseInfos"
        >
          <p>{{ item[0] }}</p>
          <p>{{ item[1] }}</p>
        </div>
      </div>
    </div>
    <img
      class="tree"
      v-if="!isMobile"
      src="@/section/houseInfoTree.png"
      alt=""
      srcset=""
    />
    <img
      class="tree"
      v-else
      src="@/section/houseInfoTreem.png"
      alt=""
      srcset=""
    />
  </div>
  <!--div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
      <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
              src="@/section/form/footerlogo.gif" alt="Lixin" srcset=""></a>
      <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
  </div-->
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.houseinfo {
  @apply relative;
  color: #fff;
  padding: size(126) size(228) size(120);
  @media screen and (max-width: 768px) {
    padding: sizem(69) sizem(50);
  }

  .logo {
    width: size(332) !important;
    margin-left: size(280);
    margin-top: size(50);
    @media screen and (max-width: 768px) {
      width: sizem(223);
      margin: 0 auto sizem(62) auto;
    }
  }
  .tree {
    @apply absolute left-0 top-0 z-10;
    width: size(814);
  }
}

.info-box {
  width: size(680);

  .title {
    width: 100%;
    font-size: size(29);
    font-weight: 500;
    line-height: normal;
    letter-spacing: size(1.45);
    margin-bottom: size(12);
    text-align: left;
    img {
      height: size(14);
    }
  }

  .info-items {
    row-gap: size(20);
    column-gap: size(20);

    .item {
      line-height: normal;
      font-size: size(18);
      align-items: flex-start;
      line-height: 1.5;
      text-align: left;
      letter-spacing: size(0.9);
      border-bottom: 1px solid #b8fa61;
      padding-bottom: size(9);
      margin-bottom: size(9);
      color: #000;

      &:first-child {
        border-top: 1px solid #b8fa61;
        padding-top: size(9);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .houseinfo {
    padding-top: sizem(100);
    .logo {
      width: sizem(196) !important;
      margin-left: 0;
      margin-top: 0;
      margin-bottom: sizem(35) !important;
    }
    .tree {
      @apply absolute left-0 top-0 z-10;
      width: 80%;
    }
  }
  .footer {
    margin-bottom: sizem(63);
    display: none;
  }

  .info-box {
    width: sizem(275);
    padding: 0;

    .title {
      font-size: sizem(20);
      margin-bottom: sizem(11);
      img {
        height: sizem(14);
      }
    }

    .info-items {
      .item {
        font-size: sizem(12);
        letter-spacing: sizem(0);
        padding-bottom: sizem(8);
        margin-bottom: sizem(8);

        &:first-child {
          border-top: 1px solid #fff;
          padding-top: sizem(8);
        }
      }
    }
  }
}
</style>

<script setup>
import info from "@/info"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
