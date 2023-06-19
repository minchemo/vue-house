<template>
    <div class="s2 relative">
      <img loading="lazy" class="play" src="./s2/play.webp" alt="長耀里" srcset="" @click="toggleVideo">
      <div class="player" v-bind:class="{ 'player': true, 'open': videoOpened }">
        <div class="video-box aspect-video">
          <iframe
            v-if="videoOpened"
            src="https://www.youtube.com/embed/-EEVOmxNSaM?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="close shadow-xl font-['noto_sans_tc'] font-bold" @click="stopVideo">
          返回
        </div>
      </div>
    </div>
  </template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
    width: 100%;
    height: size(1080);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('@/section/s2/videobg.webp');
    background-size: cover;

    .play {
        width: size(142);
        cursor: pointer;

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
        backdrop-filter: blur(10px);
        gap: size(50);
        transition: all .5s;
        transform: translateY(200%);
        background-color: rgba(0,0,0,.8);

        &.open {
            transform: translateY(0%);
        }

        .video-box {
            height: 80%;
            background-color: #000;

            iframe {
                width: 100%;
                height: 100%;
            }
        }

        .close {
            background-color: #fff;
            padding: size(10) size(25);
            font-size: size(24);
            border-radius: 9999px;
            transition: all .2s;
            cursor: pointer;

            &:hover {
                transform: scale(1.05);
            }
        }

    }
}

@media screen and (max-width:768px) {

    .s2 {
        height: size-m(667);
        background-image: url('@/section/s2/videobg_m.webp');

        .play {
            width: size-m(84);
        }

        .player {
            backdrop-filter: blur(15px);
            gap: size-m(50);

            .video-box {
                height: auto;
                width: 100%;
            }

            .close {
                padding: size-m(10) size-m(25);
                font-size: size-m(15);
            }

        }
    }
}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue";
const globals = getCurrentInstance().appContext.config.globalProperties;

const videoOpened = ref(false);

const toggleVideo = () => {
  videoOpened.value = !videoOpened.value;
};

const stopVideo = () => {
  videoOpened.value = false;
};
</script>