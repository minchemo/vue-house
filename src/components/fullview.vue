<template>
    <div class="viewbox" ref="viewbox">
        <img class="view1 select-none" ref="viewImg" src="@/section/s2/view.jpg" alt="" srcset="">
        
        <div class="mask" v-bind:class="{ hide: swiped }">
            <img 
            src="data:image/png;base64,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" 
            alt="" srcset="">
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox {
    position: relative;
    width: 100%;
    height: 100%;
	// background-color: #0F2F58;

    
        .view1{
        position: absolute; 
        left: 0;
        top: 0;   
      //  background-image: url(@/section/s3/view.webp);
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
    .viewbox {
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

const viewbox = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 2.62; //調整此值設定X軸位置偏移參數


onMounted(() => {
    viewImg.value.addEventListener('load', () => {

        let scroll = new BScroll(viewbox.value, {
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