<template>
    <div class="flex items-center justify-between">
        <div class="map"></div>
        <div class="flex-1 items-center justify-center">
            <div class="info-box mx-auto flex flex-col items-center justify-center">
                <div class="title">建案資訊</div>
                <div class="info-items mt-4 w-full grid grid-cols-2 gap-x-2 gap-y-4">
                    <div class="item font-bold flex items-center w-full whitespace-nowrap"
                        v-for="item in info.houseInfos">
                        <p class="mr-2 border-l-2 border-black pl-2">{{ item[0] }}</p>
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
        .item {
            line-height: size(17);
            font-size: size(17);
        }
    }
}
</style>

<script setup>
import info from "@/info"


</script>