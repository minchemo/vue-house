<template>
    <div class="house z-3 relative" v-if="info.houseInfos.length > 0">
        <div class=" flex h-full flex-col md:flex-row items-center justify-between">
            <div class="flex-1 items-center justify-center py-10">
                <div class="h-full info-box mx-auto flex flex-col items-center justify-center">
              <!--      <div class="title">建案資訊</div>  -->
      <h3 class="order-title" data-aos="fade-up" data-aos-delay="0"><span class="title_c">建案資訊</span><span class="en">INFORMATION</span></h3>
                    <div class="info-items mt-6 w-full grid grid-cols-1 md:grid-cols-2 ">
                        <div class="item font-bold flex items-center w-full whitespace-nowrap"
                            v-for="item in info.houseInfos">
                            <p class="mr-5 border-l-2 border-[#633804] pl-2 text-[#633804] font-[700]" v-html="item[0]"></p>
                            <p class="whitespace-pre-line leading-normal text-left text-[#333] font-normal"
                                v-html="item[1]">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 
    <div class="bg-[#ceaa6d]  py-5 flex items-center justify-center">
            <p class="db"><img src="@/section/form/dblogo.svg" alt="得邦廣告" srcset=""></p>
    </div> -->
    <div class="relative footer z-3 flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="//h65.tw/img/footerLogo.gif" alt="立炘數位" srcset=""></a>
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
.order{
.house {
   // height: auto;
    font-size: size(22);
    background: #FFF;
   // height:4em;
    img{height: 1.3em;vertical-align: middle;}

    .order-title {
    color: #633804;
    font-size: size(18);
    
    &::before{
        background-image: url("data:image/svg+xml,%3Csvg stroke='%2363380455' fill='none' stroke-width='2' viewBox='0 0 261 261' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M178.7,81.7l-48.5-19.9L81.8,82l-20,48.5L82,178.9l48.5,19.9l48.4-20.2l19.9-48.5L178.7,81.7z M141,203.1l23.8,9.8l9.8-23.8L141,203.1z M86.4,189.4l10,23.8l23.8-9.9L86.4,189.4z M47.5,96.3l10,23.8l13.9-33.7L47.5,96.3z M71.6,174.6l-14.1-33.7l-9.8,23.9L71.6,174.6z M95.9,47.7l-9.8,23.8l33.6-14L95.9,47.7z M164.4,47.5l-23.8,9.9l33.7,13.8L164.4,47.5z M189.2,86l14,33.6l9.8-23.8L189.2,86z M189.4,174.3l23.8-9.9l-9.9-23.8L189.4,174.3z M53.1,130.5l-12.5-29.9L3.4,130.7l37.5,29.7L53.1,130.5z M219.9,100.1l-12.3,30l12.5,29.8l37.3-30.1L219.9,100.1z M172.3,45.6l12.5,30l29.9,12.3l5.1-47.7L172.3,45.6z M130.1,53.1l29.9-12.5L129.9,3.2l-29.8,37.5L130.1,53.1z M40.3,40.8l5.5,47.6l29.9-12.5l12.3-30L40.3,40.8z M45.9,172.7l-5.1,47.7l47.5-5.5l-12.4-29.8L45.9,172.7z M130.6,207.5L100.7,220l30.1,37.2l29.7-37.4L130.6,207.5z M220.5,219.8l-5.5-47.5l-29.9,12.5l-12.3,29.9L220.5,219.8z M251.2,84.1l-25.3,10.5l33.5,26.6C258.6,108.7,255.8,96.2,251.2,84.1L251.2,84.1z M222.8,87.3l25.3-10.6c-5.3-11.7-12.2-22.5-20.7-32.1L222.8,87.3z M172.8,37.5l42.4-4.8c-9.6-8.3-20.4-15.2-32.1-20.4L172.8,37.5z M175.8,9.2c-12-4.5-24.6-7.2-37.3-8l26.9,33.3L175.8,9.2z M94.8,34.6l26.5-33.4c-12.5,0.9-25,3.6-37,8.2L94.8,34.6z M44.8,33.2l42.6,4.5L76.9,12.5C65.2,17.8,54.4,24.8,44.8,33.2z M12.4,77.4l25.2,10.4l-4.8-42.4C24.4,55.1,17.5,65.9,12.4,77.4L12.4,77.4z M1.3,122.1l33.2-26.9L9.3,84.8C4.8,96.8,2.1,109.4,1.3,122.1L1.3,122.1z M9.5,176.3l25.3-10.6L1.3,139.3C2.2,151.9,4.9,164.4,9.5,176.3z M37.8,173.1l-25.3,10.6c5.3,11.8,12.3,22.6,20.7,32L37.8,173.1L37.8,173.1z M87.9,223l-42.4,4.9c9.7,8.4,20.4,15.2,32,20.4L87.9,223L87.9,223z M122.2,259.4l-27-33.4l-10.4,25.3C97,255.9,109.5,258.6,122.2,259.4z M165.9,225.8l-26.6,33.6c12.7-0.9,25.2-3.6,37.2-8.2L165.9,225.8z M216,227.3l-42.8-4.6l10.6,25.3C195.6,242.8,206.4,235.8,216,227.3z M248.4,183.1l-25.4-10.4l4.9,42.6C236.4,205.6,243.3,194.8,248.4,183.1L248.4,183.1z M259.6,138.3l-33.5,27l25.4,10.4C256,163.6,258.8,151,259.6,138.3z'/%3E%3C/svg%3E");
    }
    }

}}

.info-box {
    width: size(800);

    .title {
        font-size: size(40);
        font-weight: 700;
        color: #633804;
        margin: 0 auto 1em auto;
    }

    .info-items {
        row-gap: size(20);
        column-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(16);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;

            p:first-child {
                // min-width: 4.5em;
            }
        }
    }
}
@media screen and (max-width:768px) {
.house {
    // background:#fff;
  //  height: sizem(400);
    font-size: sizem(14);
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