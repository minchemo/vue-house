<template>
    <div class="s8 relative">
        <div class="o">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <img src="./s8/1.png" class="img1" data-aos="zoom-in" data-aos-delay="0"  />
        <img src="./s8/2.png" class="img2" data-aos="zoom-in-right" data-aos-delay="300" />
        <div class="txt">
            <img src="./s8/t1.png" data-aos="zoom-in" data-aos-delay="0" class="t1" v-if="!globals.$isMobile()" />
            <img src="./s8/t1m.png" data-aos="zoom-in" data-aos-delay="0" class="t1" v-else />
            <img src="./s8/t2.png" data-aos="zoom-in" data-aos-delay="200" class="t2" />
            <img src="./s8/t3.png" data-aos="zoom-in" data-aos-delay="400" class="t3" />
        </div>

    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  background-size: contain;
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
 // background: linear-gradient(to bottom, #e4b02a 0%,#f9ec38 100%);
    background:  linear-gradient(to bottom, #f9ec38 0%,#e4b02a 100%);

    .img1{position: absolute;
        top: calc(50% + (240 - 540) * 100vw / 1920);
        left: size(110);width:size(630);}
    .img2{position: absolute;
        top: calc(50% + (460 - 540) * 100vw / 1920);
        left: size(670);width:size(240);}
    .o{
        position: absolute;
        top: calc(50% + (220 - 540) * 100vw / 1920);
        left:  size(320);
        $o_size:size(650);
        width:$o_size;
        height:$o_size;
        div{
        position: absolute; top: 0;left: 0;
            background:linear-gradient(to right, #F9EC3811 0%,#fcf59b80 50%,#fff 100%);
            width:100%;height:100%;
            border-radius: 50%;
            &:first-child{left:-30.8%;}
            &:last-child{left:30.8%;}
        }
    }
    .txt{width:size(850);position: absolute;right: size(100);
        top: calc(50% + (327 - 540) * 100vw / 1920);
        text-align: center;
        .t1{
            width:size(610);
        }
        .t2{
            width:size(760);
            margin: 3.7vw auto 4.3vw auto;
        }
        .t3{
            width:size(750);
        }
        
    
    }
}

@media screen and (max-width:768px) {

    .s8 {
    min-height: size-m(667);
    max-height: size-m(750);
    overflow: hidden;
    
    .img1{ top: calc(50% + (210 - 375) * 100vw / 375);
        left:size-m(37.5);width:size-m(300);opacity: .5;
    }
    .img2{position: absolute;
        top: calc(50% + (460 - 540) * 100vw / 1920);
        top: size-m(496);
        left: size-m(250);width:size-m(80);}

    .o{
        position: absolute;
        top: size-m(150);
        left:size-m(57.5);
        $o_size:size-m(260);
        width:$o_size;
        height:$o_size;

        div{
            background:linear-gradient(to top, #F9EC3811 0%,#fcf59b80 50%,#fff 100%);

            &:first-child{left:0;
            top: -31%;}
            &:last-child{left:0;
            top:31%;}
        }
    }
    .txt{right: 0;width: 100%;
        top: size-m(65);
        .t1{
            width: size-m(18);
        }
        .t2{
            width: size-m(270);display: block;
            margin:80vw auto 6vw auto;
        }
        .t3{
            width: size-m(270);
        }
    
    }

    }

}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
import AOS from 'aos';
const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
    currentIdx.value = prevIdx
    AOS.refresh();
}
const globals = getCurrentInstance().appContext.config.globalProperties;
const imgs = ref([
    {
        img: globals.$isMobile() ? new URL("../section/s8/tem.jpg", import.meta.url).href : new URL("../section/s8/tem.jpg", import.meta.url).href,
        caption: '圖說',
        title: '精緻2房  精品飯店美學',
        btn: '<span>23</span>坪/二房'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s8/tem.jpg", import.meta.url).href : new URL("../section/s8/tem.jpg", import.meta.url).href,
        caption: '圖說',
        title: '精緻3房  精品飯店美學',
        btn: '<span>33</span>坪/三房'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s8/tem.jpg", import.meta.url).href : new URL("../section/s8/tem.jpg", import.meta.url).href,
        caption: '圖說',
        title: '超值大3房  精品飯店美學',
        btn: '<span>33</span>坪/三房'
    },
])
</script>