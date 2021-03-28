<template>
  <div class="section9">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s9/bg.jpg" alt class="img" />
        <img
          src="./s9/yt.jpg"
          alt
          class="video-img"
          @click="openDialog"
          data-aos="fade"
          data-aos-delay="500"
        />
        <div class="title">3D示意圖僅供參考</div>
        <div :class="`video-dialog ${isShowDialog ? 'show' : ''}`">
          <iframe
            ref="player"
            src="https://www.youtube.com/embed/78tx7GS-5tY?&enablejsapi=1&playerapiid=ytplayer"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
        </div>
      </div>
      <div v-else>
        <img src="./s9/bg_m.jpg" alt class="img" />
        <img
          src="./s9/yt.jpg"
          alt
          class="video-img"
          @click="openDialog"
          data-aos="fade"
          data-aos-delay="500"
        />
        <div class="title">3D示意圖僅供參考</div>
        <div :class="`video-dialog ${isShowDialog ? 'show' : ''}`">
          <iframe
            ref="player"
            src="https://www.youtube.com/embed/78tx7GS-5tY?&enablejsapi=1&playerapiid=ytplayer"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 0 120px 0 0;
}

.img {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}

.video-img {
  cursor: pointer;
  width: calc(100% * 850 / 1920);
  left: calc(100% * 890 / 1920);
  position: absolute;
  top: 25%;
}

.title {
  font-size: calc(100vw * 18 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  position: absolute;
  left: calc(100vw * 730 / 1920);
  bottom: 5px;
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
  display: none;

  &.show {
    display: block;
    z-index: 210;
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
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
  }

  .video-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    transform: none;
  }

  .title {
    left: auto;
    right: 20px;
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
import { isMobile } from '@/utils'
export default {
  name: 'section9',

  data() {
    return {
      isMobile,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    openDialog() {
      this.isShowDialog = true
      this.$refs.player.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*',
      )
    },
    closeDialog() {
      this.isShowDialog = false
      this.$refs.player.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        '*',
      )
    },
  },

  created() {
    console.log(this.isMobile)
  },
  mounted() {},
}
</script>
