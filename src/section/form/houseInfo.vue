<template>
    <div class="house" v-if="info.houseInfos.length > 0">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="flex-1 items-center justify-center pb-10">
                <div class="h-full info-box  flex flex-col items-center justify-center">
                    <div class="title">建案資訊</div>
                    <div class="info-items mt-4 grid grid-cols-1 md:grid-cols-2 ">
                        <div class="item font-bold flex items-center w-full whitespace-nowrap"
                            v-for="item in info.houseInfos" :key="item">
                            <p class="mr-5 border-l-2 border-[#FFF] pl-2 text-[#FFF] font-[700]" v-html="item[0]">
                            </p>
                            <p class="whitespace-pre-line leading-normal text-left text-[#FFF] font-normal"
                                v-html="item[1]">
                            </p>
                        </div>
                    </div>
                </div>
                <img src="../order/dblogo.png" class="logo" alt="都廳大院">
            </div>
        </div>
    </div>
    <!-- 
    <div class="bg-[#ceaa6d]  py-5 flex items-center justify-center">
            <p class="db"><img src="@/section/form/dblogo.svg" alt="得邦廣告" srcset=""></p>
    </div> -->
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#FFF]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="//h35.banner.tw/img//footerLogo.gif" alt="立炘數位" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank" class="text-white text-xs">網頁製作</a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

// .map {
//     width: size(772);
//     height: size(642);
//     background-color: #75E3D5;
//     background-image: url('@/section/form/map.png');
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
// }
.displaynone {
    display: none;
}

.house {
    height: size(340);
    font-size: size(22);
    background: #042f75;


    // height:4em;
    img {
        height: 1.3em;
        vertical-align: middle;
    }
}

.info-box {
    margin: size(50) auto 0;
    width: size(800);

    .title {
        font-size: size(40);
        font-weight: 700;
        color: #FFF;
        margin: 0 auto .5em auto;
    }

    //建案資訊下方內容
    .info-items {
        row-gap: size(20);
        column-gap: size(20);
        margin-left: size(70);
        width: 100%;

        .item {
            line-height: size(17);
            font-size: size(16);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;
        }
    }
}

//得邦log
.logo {
    margin-top: size(50);
    margin-right: size(20);
}

@media screen and (max-width:768px) {
    .house {
        // background:#fff;
        height: sizem(380);
        font-size: sizem(14);
    }

    .footer {
        margin-bottom: sizem(63);
    }

    .info-box {
        width: sizem(313);
        margin: size(300) auto 0;

        .title {
            font-size: sizem(29);
            width: auto;
        }

        //建案資訊下方內容
        .info-items {
            row-gap: sizem(20);
            margin-left: 0;
            width: 82%;

            .item {
                font-size: sizem(14);
            }
        }
    }

    //得邦log
    .logo {
        margin-top: size(150);
    }

}
</style>

<script setup>
import info from "@/info"


</script>