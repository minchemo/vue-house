<template>
    <div class="s2v relative bg-[#000]">
    <div class="video" v-if="!isAppleDevice()&!globals.$isMobile()">
      <!-- YouTube视频嵌入到原始的iframe位置 -->
      <div :id="'youtube-player-' + id"></div>
    </div>
    <div class="video" v-else>
       <iframe src="https://www.youtube.com/embed/-GF_23Huuk8" title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    </div>


      <!--    <div class="video" v-if="globals.$isMobile()">
          <div class="play" @click="toggleVideo">
      <img loading="lazy" src="./s2/play.svg" alt="" srcset="" >
      </div>
      <div class="player" v-bind:class="{ 'player': true, 'open': videoOpened }">
        <div class="video-box aspect-video">
          <iframe
            v-if="videoOpened"
            src="https://www.youtube.com/embed/-GF_23Huuk8?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="close shadow-xl font-bold" @click="stopVideo">
          返回
        </div>
      </div></div> -->
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
}

@media screen and (max-width:768px) {

    .video {
        width: 95%;
        height: sizem(330);
    background: url('@/section/s2/v.jpg') center;
    background-size: cover;
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

const videoOpened = ref(false);

const toggleVideo = () => {
  videoOpened.value = !videoOpened.value;
};
const stopVideo = () => {
  videoOpened.value = false;
};

// YouTube视频初始化
const id = "-GF_23Huuk8"; // 您的YouTube视频ID
let player;

function isAppleDevice() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}
if (!isAppleDevice()&!globals.$isMobile()) {

onMounted(() => {
  player = new window.YT.Player(`youtube-player-${id}`, {
    videoId: id,
    width: "1920",
    height: "1080",
    playerVars: {
      autoplay: 1, // 启用自动播放
      loop: 1, // 启用循环播放
      controls: 1,
      showinfo: 0,
      autohide: 1,
      modestbranding: 1,
      mute: 1, // 静音播放
      suggestedQuality: "default",
      iv_load_policy: 3,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
});

function onPlayerReady(event) {
  // 视频已准备好，可以进行操作
  // 在此处可以添加其他初始化逻辑
}

function onPlayerStateChange(event) {
  // 视频状态发生变化（例如播放、暂停、停止等）
  if (event.data === window.YT.PlayerState.ENDED) {
    // 当视频结束时，重新播放
    player.seekTo(0);
    player.playVideo();
  }
}

// 存储播放器实例，以便以后进行操作
const playerId = `youtube-player-${id}`;
const playerElement = document.getElementById(playerId);

}
</script>