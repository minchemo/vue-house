<template>
    <div class="viewbox" ref="viewbox">
        <img class="view1" ref="viewImg" src="@/section/s2/view.webp" alt="" srcset="">
        
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
            z-index: 1000;
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
                height: sizem(47);
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