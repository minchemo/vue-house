<template>
    <!--  -->
    <div class="house" v-if="info.houseInfos.length > 0">
        <div class="flex h-full flex-col md:flex-row items-center justify-between">
            
            <div class="flex-1 items-center justify-center py-10 font-['Noto_Sans_TC']">
                <div class="h-full info-box mx-auto flex flex-col items-center justify-center">
                    <div class="title">建案資訊</div>
                    <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2 ">
                        <div class="item font-bold flex items-center w-full whitespace-nowrap"
                            v-for="item in info.houseInfos">
                            <p class="sub mr-5 pl-2 text-[#fff]" v-html="item[0]"></p>
                            <p class="whitespace-pre-line leading-normal text-left font-normal"
                                v-html="item[1]">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--
    <div class="house bg-[#b6006499] flex items-center justify-center py-6 ">
          <img src="@/section/form/dblogo.svg" alt="得邦廣告" srcset="">
    </div> -->
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="//h35.banner.tw/img//footerLogo.gif" alt="立炘數位" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank" class="text-white text-xs">網頁製作</a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

$house-c1:#fFF;
$house-c2:#fff;
.displaynone{display: none;}
.house {
    position: relative;
    overflow: hidden; 
   // height: auto;
    color: $house-c2;
    font-size: size(22);
    // height:4em;
    background: #A4A428;
}
.info-box {position: relative;z-index: 30;
    width: 50em;
    font-size: 16px;

    .title {
        font-size:2em;
        font-weight: 700;
        color: $house-c1;
        margin: 0.6em auto 0.5em auto;
    }

    .info-items {
        row-gap:1.4em;
        column-gap:1em;

        margin-bottom:3em;
        .item {
            line-height: size(17);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;
            border-left: 2px solid $house-c1;
         /*  &::before{
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3CradialGradient id='fg' cx='9' cy='9' fx='7' fy='7' r='13' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23f7dd9e'/%3E%3Cstop offset='.4' stop-color='%23ffa813'/%3E%3Cstop offset='1' stop-color='%23ac572e'/%3E%3C/radialGradient%3E%3Ccircle fill='url(%23fg)' cx='10' cy='10' r='10'/%3E%3C/svg%3E");
            display: block;
            width: .7em;
        }
            */

             .sub{
              color: $house-c1;
                // min-width: 4.5em;
            }
        }
    }
}
.houseimg{width: 100%;position: relative;z-index: 5;}
@media screen and (max-width:768px) {
.house {
    // background:#fff;
  //  height: sizem(400);
    font-size: sizem(13);
}

.houseimg{width: 100%;object-fit: cover;height: 16.5vw;}
    .footer {
        margin-bottom: sizem(0);
        //margin-bottom: sizem(63);
    }

    .info-box {
        width: sizem(313);
        padding: 0;

        .title {
            font-size: sizem(29);
            width: auto;
        }

        .info-items {
            row-gap: sizem(20);

            .item {
                font-size: sizem(13);
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"
import {computed, getCurrentInstance } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());


</script>