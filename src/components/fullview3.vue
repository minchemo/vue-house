<template>
    <div class="viewbox3" ref="viewbox3">
        <img class="view1 select-none" ref="viewImg" src="@/section/s2/001.webp" alt="" srcset="">
        
        <div class="mask" v-bind:class="{ hide: swiped }">
            <img 
            src="@/section/s2/hand.svg" alt="" srcset="">
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox3 {
    position: relative;
    width: 100%;
    height: 100%;
	// background-color: #0F2F58;

    
        .view1{
        position: absolute; 
        left: 0;
        top: 0;   
      //  background-image: url(@/section/s2/001.webp);
	  //  background-size: cover;
        }

    img {
        height: 100%;
        min-width: 100%;
        max-width: unset;
    }
    .mask {
        @apply hidden;
    }
}

@media screen and (max-width: 767px) {
    .viewbox3 {
        height: 100%;
        overflow: hidden;

        img {
            height: 100%;
        }
        

        .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            opacity: 1;
            transition: all 1s;
            background: transparentize(#093948, 0.6);

            img {
                min-width: unset;
                width:auto;
                height: sizem(55.2);
            }


            &.hide {
                opacity: 0;
            }
        }
    }
}
</style>
<script setup>
import BScroll from '@better-scroll/core'
import { onMounted, ref } from 'vue';

const viewbox3 = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 2.62; //調整此值設定X軸位置偏移參數


onMounted(() => {
    viewImg.value.addEventListener('load', () => {

        let scroll = new BScroll(viewbox3.value, {
            probeType: 2,
            scrollX: true,
            scrollY: true,
            disableTouch: false,
            disableMouse: false,
            bindToWrapper: true,
            eventPassthrough: "vertical",
            bounce: false,
        })

        scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500);
        setTimeout(() => {
            scroll.on("scroll", () => {
                swiped.value = true
            });
        }, 1000);
    })


})


</script>