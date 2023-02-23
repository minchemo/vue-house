<template>
    <div class="house">
        <div class="flex h-full flex-col md:flex-row items-center justify-between">
            <!-- <div class="map"></div> -->
            <div class="flex-1 items-center justify-center md:py-10 font-['Noto_Sans_TC']">
                <div class="h-full info-box mx-auto flex flex-col items-center justify-center">
                    <div class="title ">建案資訊</div>
                    <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2 ">
                        <div class="item font-bold flex items-center w-full whitespace-nowrap"
                            v-for="item in info.houseInfos">
                            <p class="mr-5 border-l-4 border-[#397968] pl-2 text-[#397968]" v-html="item[0]"></p>
                            <p class="whitespace-pre-line leading-normal text-left text-[#000] font-normal"
                                v-html="item[1]">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="長耀加" srcset=""></a>

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
.displaynone{display: none;}
.house {
    // background-image: url('@/section/form/housebg.jpg');
    background-color: #fff;
    background-size:101%;
    background-position: center;
    background-repeat: no-repeat;
    height: size(379);
}
.info-box {
    

    width: size(800);

    .title {
        @apply font-['Noto_Serif_TC'];
        font-size: size(40);
        font-weight: 700;
        color: #397968;
        // border-bottom: size(2) solid #C9A063;
        width: size(172);
        margin: 0 auto;
        margin-bottom: size(50) !important; 
    }

    .info-items {
        row-gap: size(20);
        column-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(17);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;

            p:first-child {
                width: 4.5em;
            }
        }
    }
}

@media screen and (max-width:768px) {
.house {
    // background-image: url('@/section/form/housebgm.jpg');
    background-size:101%;
    background-position: center;
    background-repeat: no-repeat;
    height: sizem(400);
}
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
                font-size: sizem(14);
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>