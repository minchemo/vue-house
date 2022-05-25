<template>
  <div class="s2" id="scene">
    <div class="video-wrapper">
      <div class="video">
        <!-- <iframe
          src="https://www.youtube.com/embed/YqpsA2Sa2vE?controls=0"
          frameborder="0"
          id="existing-iframe-example"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe> -->
        <div id="player"></div>
      </div>
    </div>

    <img class="play" @click="playVideo()" src="@/projects/wv/s2/play.svg" alt="" srcset=""
      v-bind:class="{ hide: isLoading || isPlaying }" />
    <p class="loading" v-if="isLoading">Loading...</p>
    <div class="bg" v-bind:class="{ hide: isPlaying }"></div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";

/* 螢幕尺寸標準 */
.s2 {
  width: size(1920);
  height: size(1080);

  .video-wrapper {
    overflow: hidden;
    max-width: 100%;

    .video {
      position: relative;
      padding-bottom: 56.25%;
      /* 16:9 */
      padding-top: 25px;
      width: 300%;
      /* enlarge beyond browser width */
      left: -100%;

      /* center */
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url("~@/projects/wv/s2/bg.jpg");
    background-size: cover;
    z-index: 1;
    opacity: 1;
    transition: 0.3s all;

    &.hide {
      opacity: 0;
      z-index: -1;
    }
  }

  .play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: size(94);
    height: size(116);
    cursor: pointer;
    z-index: 2;
    opacity: 1;
    transition: 0.3s all;

    &:hover {
      opacity: 0.5;
    }

    &.hide {
      opacity: 0;
      z-index: -1;
    }
  }

  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-family: "Noto Sans TC";
    color: #fff;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s2 {
    .video-wrapper {
      overflow: hidden;
      max-width: 100%;

      .video {
        position: relative;
        padding-bottom: 50%;
        /* 16:9 */
        padding-top: 25px;
        width: 300%;
        left: -100%;

        /* center */
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    .play {
      width: size-m(50);
      height: auto;
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "s2",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      player: null,
      isPlaying: false,
      isLoading: false,
    };
  },
  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
    playVideo() {
      this.player.playVideo();
    },
    onPlayerStateChange(event) {
      if (event.data == 2 || event.data == 0) {
        this.isLoading = false;
        this.isPlaying = false;
      } else if (event.data == 1) {
        this.isLoading = false;
        this.isPlaying = true;
      } else {
        this.isLoading = true;
        this.isPlaying = false;
      }
    },
    stopVideo() {
      this.player.stopVideo();
    }
  },
  mounted() {
    YT.ready(() => {

      const self = this;
      this.player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'YqpsA2Sa2vE',
        playerVars: {
          'autoplay': false,
          'controls': 0,
          'enablejsapi': 1,
          'origin': 'localhost'
        },
        events: {
          'onReady': self.onPlayerReady,
          'onStateChange': self.onPlayerStateChange
        }
      });
    })


  },
  created() {
  },
};
</script>