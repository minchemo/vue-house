<template>
    <div class="section10">
        <div class="house-info flex flex-col md:flex-row items-center justify-center bg-[#304730]">
            <img class="house-logo m-0" src="@/section/form/house_logo.png" alt="" srcset="">
            <div class="items-center justify-center">
                <div class="info-box mx-auto flex flex-col items-center justify-center">
                    <!-- <div class="title text-[#595757]">建案資訊</div> -->
                    <div class="info-items w-full grid grid-cols-1">
                        <div class="item font-bold flex items-center w-full whitespace-nowrap border-b pb-4"
                            v-for="item in info.houseInfos">
                            <p class="text-[#C6A93E]" v-html="item[0]"></p>
                            <p class="whitespace-pre-line leading-normal text-left text-[#fff] font-normal"
                                v-html="item[1]">
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <div class="footernone"></div>
    <!--div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="宗大敘山" srcset=""></a>

        <a href="https://www.h65.tw/admin/test/login" target="_blank" class="text-white text-xs">網頁製作</a>
    </div-->
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.house-info {
    gap: size(254);
    height: size(950);
}

.house-logo {
    width: size(482);
}
.info-box {
    width: size(800);

    .title {
        width: 100%;
        font-size: size(36);
        font-weight: 700;
        margin-bottom: size(36);
    }

    .info-items {
        row-gap: size(20);
        column-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(23);
            align-items: flex-start;
            justify-self: center;
            line-height: 1.5;
            text-align: left;
            gap: size(72);
            max-width: size(588);

            p:first-child {
                width: 4.5em;
            }
        }
    }
}

@media screen and (max-width:768px) {
.house-info {
    gap: size-m(66);
    padding: size-m(100) 0 size-m(50) 0;
    height: auto;
}

.house-logo {
    width: size-m(265.8);
}
    .footernone{margin-bottom: size-m(83);}
    .footer {
        // margin-bottom: size-m(0);
        margin-bottom: size-m(83);
    }

    .info-box {
        width: size-m(313);
        padding: size-m(30) 0;

        .title {
            font-size: size-m(29);
        }

        .info-items {
            row-gap: size-m(20);

            .item {
                font-size: size-m(14);
            max-width: size-m(295);
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>