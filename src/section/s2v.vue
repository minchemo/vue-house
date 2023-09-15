<template>
    <div class="s2v relative bg-[#000]">
      <div class="video" >
       <iframe data-aos="fade-up" src="https://www.youtube.com/embed/-GF_23Huuk8?autoplay=1&mute=1&mute=1&loop=1&playlist=-GF_23Huuk8" title="YouTube video player" frameborder="0"
    allowfullscreen></iframe>
      </div>
    </div>
  </template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s2v {overflow: hidden;}
iframe {
   width: 100%;
   height: 100%;
}
.video {
    width: size(1400);
    height: size(790);
    margin: size(60) auto;
    background: url('@/section/s2/v.jpg') center;
    background-size: cover;
}

@media screen and (max-width:768px) {

    .video {
        width: 95%;
        height: sizem(330);
    margin: sizem(10) auto;
        .play {
            width: 100%;
            height: 100%;
            cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
            img{
            width: sizem(60);}
        
        &:hover {
            opacity: .7;
        }
        }

        .player {            
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 999;
        transition: all .5s;
        transform: translateY(200%);
        background-color: rgba(0,0,0,.8);
            backdrop-filter: blur(15px);
            gap: sizem(50);
        &.open {
            transform: translateY(0%);
        }

            .video-box {
                height: auto;
                width: 100%;
            background-color: #000;
            }

            .close {
                background-color: #fff;
                padding: sizem(10) sizem(25);
                font-size: sizem(15);
                border-radius: 9999px;
                transition: all .2s;
            &:hover {
                cursor: pointer;
                transform: scale(1.05);
            }
            }

        }
    }
}
</style>


<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import AOS from "aos";
const globals = getCurrentInstance().appContext.config.globalProperties;
</script>