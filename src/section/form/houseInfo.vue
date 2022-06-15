<template>
    <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="map"></div>
        <div class="flex-1 items-center justify-center">
            <div class="info-box mx-auto mt-4 flex flex-col items-center justify-center">
                <div class="title">建案資訊</div>
                <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2">
                    <div class="item font-bold flex items-center w-full whitespace-nowrap"
                        v-for="item in info.houseInfos">
                        <p class="mr-4 md:mr-2 border-l-4 md:border-l-2 border-black pl-2">{{ item[0] }}</p>
                        <p>{{ item[1] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="" srcset=""></a>
        <p class="text-white text-xs">網頁製作</p>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.map {
    width: size(772);
    height: size(642);
    background-color: #75E3D5;
    background-image: url('@/section/form/map.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.info-box {
    width: size(676);

    .title {
        width: 100%;
        font-size: size(43);
        font-weight: 700;
        border-top: size(1) solid;
        border-bottom: size(1) solid;
    }

    .info-items {
        row-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(17);
        }
    }
}

@media screen and (max-width:768px) {
    .footer {
        margin-bottom: size-m(63);

    }

    .map {
        width: size-m(375);
        height: size-m(324);
        background-image: url('@/section/form/map_m.png');
    }

    .info-box {
        width: size-m(313);
        padding: size-m(30) 0;

        .title {
            font-size: size-m(29);
            border-top: size-m(1) solid;
            border-bottom: size-m(1) solid;
        }

        .info-items {
            row-gap: size-m(20);

            .item {
                line-height: size-m(15);
                font-size: size-m(15);
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>