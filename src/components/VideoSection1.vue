<template>
  <div class="section3">
    <div class="bg fullscreen" v-if="!isMobile">
      <div class="container">
        <div class="content">
          <h3 class="title">{{title}}</h3>
          <div class="list">
            <div :class="`item ${slideIndex == index ? 'active' : ''}`" v-for="(item, index) in slideList" :key="item.title">
              <div class="item-content" @click="slideIndex = index">{{item.title}}</div>
            </div>
          </div>
        </div>
        <div class="video-container">
          <div
            :class="`video-item ${slideIndex == sIndex ? 'active' : ''}`"
            v-for="(slide, sIndex) in slideList"
            :key="slide.img"
          >
            <img :src="slide.img" alt class="video-bg" />
            <img :src="playBtn" alt class="video-btn" @click="openDialog" />
          </div>
        </div>
      </div>
      <div :class="`video-dialog ${isShowDialog ? 'show' : ''}`">
        <iframe
          ref="player"
          :src="slideList[slideIndex].video"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img :src="close" alt class="close" @click="closeDialog" />
      </div>
    </div>
    <div class="bg fullscreen" v-if="isMobile">
      <h3 class="title">{{title}}</h3>
      <div class="video-container">
        <div
          :class="`video-item ${slideIndex === sIndex ? 'active' : ''}`"
          v-for="(slide, sIndex) in slideList"
          :key="slide.img"
        >
          <img :src="slide.img" alt class="video-bg" />
          <img :src="playBtn" alt class="video-btn" @click="openDialog" />
        </div>
      </div>
      <div class="btn-group">
        <div
          class="btn"
          @click="slideIndex =
        slideIndex === 0 ? slideList.length - 1 : slideIndex - 1"
        >
          <img :src="arrows[0]" alt />
        </div>
        <div class="btn-title">{{slideList[slideIndex].title}}</div>
        <div
          class="btn"
          @click="slideIndex =
        slideIndex === slideList.length - 1 ? 0 : slideIndex + 1"
        >
          <img :src="arrows[1]" alt />
        </div>
      </div>
      <div :class="`video-dialog ${isShowDialog ? 'show' : ''}`">
        <iframe
          ref="player"
          :src="slideList[slideIndex].video"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img :src="close" alt class="close" @click="closeDialog" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $video_section_bg;
  padding: 60px 0 0 0;
}
.container {
  width: calc(100vw * 1550 / 1920);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.content {
  width: calc(100vw * 400 / 1920);
  font-size: calc(100vw * 26 / 1920);
  display: flex;
  flex-direction: column;
  .title {
    font-size: 1.3em;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: $video_section_title_color;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .list {
    flex: 3 3 auto;
    display: flex;
    flex-direction: column;
  }

  .item {
    flex: 1 1 auto;
    border-top: 1px solid $video_section_item_border;
    padding: 8px 0;
    cursor: pointer;

    .item-content {
      font-size: 1em;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: $video_section_item_color;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 15px;
      transition: all 0.3s;
    }

    &:hover,
    &.active {
      .item-content {
        background: $video_section_item_bg_hover;
      }
    }
    &:nth-last-child(1) {
      border-bottom: 1px solid $video_section_item_border;
    }
  }
}

.video-container {
  width: calc(100vw * 1080 / 1920);
  height: calc(100vw * 810 / 1920);
  position: relative;
  margin: 0 0 0 calc(100vw * 20 / 1920);
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border: 5px solid $video_section_item_border;
    position: absolute;
    top: calc(100vw * 30 / 1920);
    left: calc(100vw * 30 / 1920);
  }
  .video-item {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s;
    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    &.active {
      opacity: 1;
      z-index: 3;
    }

    .video-btn {
      cursor: pointer;
      z-index: 2;
    }
  }
}

.video-dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s;

  &.show {
    z-index: 10;
    opacity: 1;
  }

  iframe {
    width: calc(90vh * 1920 / 1080 - 80px);
    height: calc(90vh - 70px);
    max-width: calc(90vw - 70px);
    max-height: calc(90vw * 1080 / 1920 - 70px);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .close {
    position: absolute;
    cursor: pointer;
    right: 35px;
    top: 25px;
    width: 40px;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .bg {
    padding: 0;
  }
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    display: block;
    padding-top: calc(100vh * 155 / 750);
    height: calc(100vw * 750 / 375) !important;
    background: $video_section_bg_m;
    background-size: 100% 100%;
  }

  .video-container {
    width: 100vw;
    height: calc(100vw * 280 / 375);
    &::before {
      display: none;
    }
  }

  .title {
    font-size: calc(100vw * 38 / 375);
    color: $video_section_title_color;
    margin-bottom: 40px;
  }

  .btn-group {
    display: flex;
    width: 100vw;
    background: $video_section_btn_bg;

    .btn {
      width: calc(100vw * 55 / 375);
      height: 70px;
      background: $video_section_btn_bg;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: $video_section_btn_hover_bg;
      }
    }

    .btn-title {
      width: calc(100vw * 320 / 375);
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: center;
      color: $video_section_item_color;
    }
  }

  .video-dialog {
    iframe {
      width: 100vw;
      height: calc(90vw * 1280 / 1920);
      max-width: 100vw;
      max-height: 100vh;
    }

    &.show {
      z-index: 101;
    }

    .close {
      width: 40px;
      top: calc(50% - 90vw * 250 / 750 - 45px);
      right: 10px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
// 引用範例
// <VideoSection1
//       :playBtn="require('@/projects/sfdy/video/play-btn.png')"
//       title="開箱系列影片"
//       :close="require('@/projects/sfdy/video/close.png')"
//       :arrows="[require('@/projects/sfdy/video/arrow-left.png'), require('@/projects/sfdy/video/arrow-right.png')]"
//       :slideList="[
//         {
//           title: '釋放壓力，回家就是享受的開始',
//           img: require('@/projects/sfdy/video/1.jpg'),
//           video: 'https://www.youtube.com/embed/-60Gqkr3TtU?&enablejsapi=1&playerapiid=ytplayer',
//           isPlay: false,
//         },
//         {
//           title: '內容街景大公開',
//           img: require('@/projects/sfdy/video/2.jpg'),
//           video: 'https://www.youtube.com/embed/-60Gqkr3TtU',
//           isPlay: false,
//         },
//         {
//           title: '屋內機密大公開',
//           img: require('@/projects/sfdy/video/3.jpg'),
//           video: 'https://www.youtube.com/embed/454jJog_1xI',
//           isPlay: false,
//         },
//       ]"
//     />

export default {
  name: 'VideoSection1',
  components: {},

  props: ['playBtn', 'title', 'close', 'arrows', 'slideList'],

  mixins: [slider],

  data() {
    return {
      isMobile,
      isTablet,
      isShowDialog: false,
    }
  },

  mounted() {},

  methods: {
    openDialog() {
      this.isShowDialog = true
      this.$refs.player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
    },
    closeDialog() {
      this.isShowDialog = false
      this.$refs.player.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    }
  },
}
</script>
