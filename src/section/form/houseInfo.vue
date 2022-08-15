<template>
    <div class="flex flex-col md:flex-row items-center justify-between bg-[#927764]">
        <!-- <div class="map"></div> -->
        <div class="flex-1 items-center justify-center py-4 md:py-10">
            <div class="info-box mx-auto mt-4 flex flex-col items-center justify-center font-['Noto_Serif_TC']">
                <div class="title">建案資訊</div>
                <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2">
                    <div class="item flex items-center w-full whitespace-nowrap"
                        v-for="item in info.houseInfos">
                        <p class="mr-5 border-l-2 border-color pl-2">{{ item[0] }}</p>
                        <p class="whitespace-pre-line text-left">{{ item[1] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="吉美富徠" srcset=""></a>

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

.info-box {

    width: size(800);

    .title {
        width: 100%;
        font-size: size(36);
        font-weight: 500;
        margin-bottom: size(36);
        color: #fff;
    }

    .info-items {
        row-gap: size(30);
        column-gap: size(50);
        color: #fff;
        line-height: 90%;


        .item {
            line-height: size(17);
            font-size: size(17);
            align-items: flex-start;
            text-align: left;

            p:first-child {
                width: 4.5em;
            }

            .border-l-2{
                border-left-width: 2px;
            }
            .pl-2{
                padding-right: size(17);
            }
            .border-color{
                border-color: #FFE7C4;
            }

        }
        
    }
}

@media screen and (max-width:768px) {
    .footer {
        margin-bottom: size-m(63);
    }

    .info-box {
        width: size-m(313);
        padding: size-m(30) 0;
            

        .title {
            font-size: size-m(29);
            text-align: left;
        }

        .info-items {
            row-gap: size-m(20);

            .item {
                font-size: size-m(14);
                line-height: 100%;
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>