<template>
    <div class="house-info text-white relative">
        <img class="logo2 relative" src="@/section/s1/logo.svg" alt="敦南詠楽" />
        <!--
        <img class="bg absolute bottom-[40px] left-0 w-full md:hidden" src="@/section/form/bg2.png" /> <img class="bg hidden md:block" src="@/section/s1/bg.png" /> -->
        <!-- <img class="bg md:hidden" src="@/section/s1/bg-m.png" /> -->
        <!-- <div class="links relative">
            <a target="_blank" href="https://www.da-li.com.tw/">
                <img src="@/section/form/btn1.svg" alt="達麗建設官網" />
            </a>
            <a target="_blank" href="https://unigiants.com.tw/">
                <img src="@/section/form/btn2.svg" alt="聯碩行銷團隊官網" />
            </a>
            <a target="_blank" href="https://www.facebook.com/unigiant/">
                <img src="@/section/form/btn3.svg" alt="聯碩城市風格誌" />
            </a>
        </div> -->
        <div class="content relative">
           <!--  <div class="title">建案資訊</div> -->
            <div class="list">
                <div class="item flex justify-start items-stretch" v-for="(item, idx) in info.houseInfos" :key="idx">
                    <div class="t1 whitespace-nowrap">{{ item[0] }}</div>
                    <div class="ll relative"></div>
                    <div class="t2 whitespace-nowrap">{{ item[1] }}</div>
                </div>
            </div>
        </div>
        <div class="bottomen absolute" data-aos="fade-up" data-aos-delay="0">The Aesthetics of Silence</div>
    </div>
<!--
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.gif" alt="達麗河蘊" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
    </div>  -->
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.house-info {
    width: 100%;
    margin: 0 auto;
    padding: sizem(40) sizem(0) sizem(100) sizem(0);
    font-family: 'Noto Serif TC';
    background: #30859966;
    @media screen and (min-width:768px) {
        // padding: size(116) size(0);
        padding: size(150) 0;
      //  height: size(968);
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    .links {
        margin-bottom: size-m(38);
        @media screen and (min-width:768px) {
            margin-bottom: 0;
            position: absolute;
            top: size(119);
            left: size(128);
        }

        img {
            height: size-m(25);
            width: auto;
            margin-bottom: size-m(13);
            @media screen and (min-width:768px) {
                height: size(43);
                margin-bottom: size(23);
            }
        }
    }

    .content {
        width: sizem(300);margin: auto;
        @media screen and (min-width:768px) {
          //  position: absolute;
            width: size(700);
            margin: 0 size(200) 0 auto;
          //  top: size(129);
          //  left: size(867);
        }

        .title {
            font-weight: 700;
            font-size: sizem(18);
            line-height: sizem(26);
            text-align: left;
            @media screen and (min-width:768px) {
                font-size: size(29);
                line-height: size(42);
                margin-bottom: size(28);
            }
        }

        .list {
            font-weight: 500;
            font-size: sizem(14);
            line-height:2.7;
            margin-bottom: size-m(74);
            @media screen and (min-width:768px) {
                font-size: size(25);
                margin-bottom: size(0);
            }

            .item {
              // margin-top: sizem();
                @media screen and (min-width:768px) {
                 //   margin-top: size(3);
            border-bottom: 1px solid #FFF9;
                }
            }
            .t1{width: 5em;text-align: right;}

            .ll {margin: .5em;
                &:after {
                    content: "";
                    position: absolute;
                    top: calc(50% - 0.4em);
                    left: 0;
                   // right: size-m(10);
                    height:1em;width: 1px;
                    background: #fff;
                    @media screen and (min-width:768px) {
                      //  left: size(10);
                     //   right: size(10);
                    }
                }
            }
        }
    }

    .logo2 {
        width: sizem(230);margin: sizem(50) auto;
        @media screen and (min-width:768px) {
            position: absolute;
            width: size(550);
            top: size(300);margin:auto;
            left: size(250);
        }
    }
    
    .bottomen{bottom: sizem(50);left:0;font-size: sizem(13);color: #FFF;width: 100%;
    text-transform:uppercase;
    letter-spacing: 0.1em;
    @media screen and (min-width: 768px) {
        bottom: size(160);left:size(250);font-size: size(17);
        width: size(550);
        text-align: center;
    }
    }
}
</style>

<script setup>
import info from "@/info"
</script>