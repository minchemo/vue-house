<template>
  <div class="section12">
    <!-- https://codepen.io/ciprian/pen/WqLwvE -->
    <!-- https://codepen.io/dudleystorey/pen/PZyMrd -->
    <!-- <iframe
      v-if="!isMobile"
      ref
      class="video-bg"
      src="https://www.youtube.com/embed/eflYegCFh4M?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=eflYegCFh4M"
      frameborder="0"
      allowfullscreen
    ></iframe> -->
    <div class="video_box">
      <div v-if="!isMobile" :id="`youtube-player-${randomId}`" ref="player" class="video-ifame"></div>
      <video loading="lazy" muted loop autoplay playsinline class="video" v-else>
        <source :src="videoUrl" type="video/mp4">
        <!-- <source src="movie.ogg" type="video/ogg"> -->
        Your browser does not support the video tag.
      </video>
    </div>
    <!-- <img src="./s12/player_icon.png" alt="" class="play-btn" v-if="isMobile" @click="isDialog = true"> -->
    <!-- <div class="video" v-if="isDialog && isMobile">
      <div class="video_box_dialog">
        <iframe title="youtube" :src="videoUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <img class="close" @click="isDialog = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII=" />
    </div> -->
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.video-ifame {
  width: 100.5%;
  height: 100.5%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section12 {
  // height: 100vh;
  overflow: hidden;
  // position: relative;
  height: size(907);
  background-size: cover;
}
.video_box {
  @include div_c_pc(1920, 907, 0);
  background: #000 url('./s12/video_img.jpg') no-repeat center;
  position: absolute;
  z-index: 6;
  left: 0;
  overflow: hidden;

  iframe {
    opacity: 0;
    animation: op 1s 3s ease-out forwards;
  }
}
@keyframes op {
  to {
    opacity: 1;
  }
}
.video-bg {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  //z-index: 3;
}

.line-bg {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAQAAADYv8WvAAAADUlEQVQIHWNkSGOAAAADRABoDg6qmwAAAABJRU5ErkJggg==');
}

.news-container {
  @include div_c_pc(472 * 3 + 21 * 2, 480, 312 + 907);
  // overflow: visible;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
}

.item-img {
  width: size(472);
  margin: 0 auto;
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section12 {
    margin: 0 0 0 0;
    overflow: hidden;
    width: 100vw;
    height: sizem(205);
    min-height: 0;
    max-height: sizem(205);
    // margin-top: sizem(-60);
  }

  .video_box {
    width: 100%;
    position: absolute;
    height: 100%;
    background: #000 url('./s12/video_img.jpg') no-repeat center;
    background-size: cover;
    opacity: 1;
  }

  .video_box_dialog {
    width: 100%;
    position: absolute;
    height: size-m(260);
    background: #000 url('./s12/video_img.jpg') no-repeat center;
    background-size: cover;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    overflow: hidden;
    // height: size(910);
    opacity: 1;
    // animation: op 1s 3s ease-out forwards;
  }
  .video-bg {
    width: size-m(1190);
    height: size-m(667);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    object-fit: cover;
    object-position: center;
  }

  .play-btn {
    @include img_c_m(32, 80);
    cursor: pointer;
    z-index: 6;
  }

  .video {
    width: 100vw;
    height: size-m(215);
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    // top: 50%;
    // transform: translateY(-50%);
    background-color: #000;
    position: absolute;
    > source {
      width: 100vw;
      height:  size-m(215);
    }
    // width: 100vw;
    // height: 100vh;
    // position: fixed;
    // left: size-m(0);
    // top: 0;
    // background: rgba(0, 0, 0, 0.6);
    // z-index: 200;
    // transition: opacity 0.5s;

    // iframe {
    //   width: 100vw;
    //   height: size-m(260);
    //   left: 0;
    //   right: 0;
    //   margin: 0 auto;
    //   // top: 50%;
    //   // transform: translateY(-50%);
    //   position: absolute;
    //   background-color: #fff;
    // }

    .close {
      position: absolute;
      cursor: pointer;
      right: 15px;
      top: 50px;
      width: size-m(30);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import info from '@/info'

export default {
  name: 'section12',
  mixins: [slider],
  props: ['viewIndex'],
  data() {
    return {
      isPC,
      isMobile,
      info,
      player: '',
      // id: 'irs0m1qWkl8',
      isDialog: false,
    }
  },

  methods: {
    onPlayerReady(event) {
      event.target.playVideo()
    },
    loadVideo() {
      console.log(`youtube-player-${this.randomId}`)
      this.player = new window.YT.Player(`youtube-player-${this.randomId}`, {
        videoId: this.randomId,
        width: '1920',
        height: '1080',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 1,
          showinfo: 0,
          autohide: 1,
          modestbranding: 1,
          mute: 1,
          suggestedQuality: 'default',
          iv_load_policy: 3,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      })
    },

    // videoPlayer() {
    //   console.log('videoPlayer')
    //   this.player.playVideo()
    // },
    onPlayerStateChange(e) {
      if (e.data === window.YT.PlayerState.ENDED) {
        this.player.loadVideoById(this.id)
      }
    },
  },

  created() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },

  mounted() {},

  computed: {
    randomId() {
      const index = Math.floor(Math.random() * 2)
      const ids = [
        'irs0m1qWkl8',
        'e43e1I7kPY8',
      ]
      console.log(index, ids[index])
      return ids[index]
    },

    videoUrl() {
      const index = Math.floor(Math.random() * 2)
      const mobileLinks = [
        'https://h35.banner.tw/ace/L2Jyobm.mp4',
        'https://h35.banner.tw/ace/EgIQDkt.mp4',
      ]
      return mobileLinks[index]
    },
  },

  watch: {
    viewIndex(val) {
      if (val === 1) {
        if (!this.isMobile) {
          if (!window.YT) {
            window.onYouTubeIframeAPIReady = this.loadVideo
          } else {
            this.loadVideo()
          }
        }
      }
    },
  },
}
</script>