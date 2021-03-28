<template>
  <div class="section6">
    <div class="bg relative">
      <img src="./s6/bg.png" alt class="img" />
      <div v-if="!isMobile">
        <div class="container">
          <div class="content">
            <div class="avatar" data-aos="fade" data-aos-delay="200">
              <img src="./s6/1/1.jpg" alt />
              <div class="border"></div>
            </div>
            <div class="items">
              <div class="text">
                <div class="title">
                  豪邸御用名家-
                  <br />三十三景觀設計-鄭如珊
                </div>
                <div class="desc">創造人在環境中流動與呼吸的藝術，回歸人文角度，不只是在空間種樹，而是讓人與植物一起涵養共生。</div>
                <div class="desc">
                  代表業績：
                  <br />國泰美術觀道
                  <br />吉美敦南花園
                  <br />三發景悅
                </div>
              </div>
              <div class="imgs">
                <img
                  src="./s6/1/2.jpg"
                  alt
                  @click="showDialog(0)"
                  data-aos="fade"
                  data-aos-delay="300"
                />
                <img
                  src="./s6/1/3.jpg"
                  alt
                  @click="showDialog(1)"
                  data-aos="fade"
                  data-aos-delay="400"
                />
                <img
                  src="./s6/1/4.jpg"
                  alt
                  @click="showDialog(2)"
                  data-aos="fade"
                  data-aos-delay="500"
                />
              </div>
            </div>
          </div>
          <div class="content content2">
            <div class="items">
              <div class="text">
                <div class="title">
                  兩岸高端豪宅總監-
                  <br />珩荷空間設計-徐慈姿
                </div>
                <div class="desc">打造機能人文公設空間，感受裝置藝術所釋放的人文情懷，在簡潔時尚的環境流動中，感受美學公共空間的魅力</div>
                <div class="desc">
                  代表業績：
                  <br />台中帝寶
                  <br />寶舖縱橫天廈
                  <br />大隱頤海大院
                  <br />北京中軸國際
                </div>
              </div>
              <div class="imgs">
                <img
                  src="./s6/2/2.jpg"
                  alt
                  @click="showDialog(3)"
                  data-aos="fade"
                  data-aos-delay="500"
                />
                <img
                  src="./s6/2/3.jpg"
                  alt
                  @click="showDialog(4)"
                  data-aos="fade"
                  data-aos-delay="600"
                />
                <img
                  src="./s6/2/4.jpg"
                  alt
                  @click="showDialog(5)"
                  data-aos="fade"
                  data-aos-delay="700"
                />
                <img
                  src="./s6/2/5.jpg"
                  alt
                  @click="showDialog(6)"
                  data-aos="fade"
                  data-aos-delay="800"
                />
              </div>
            </div>
            <div class="avatar" data-aos="fade" data-aos-delay="1000">
              <img src="./s6/2/1.png" alt />
            </div>
          </div>
        </div>
        <div :class="`dialog ${isShow ? 'show' : ''}`">
          <img :src="dialogImg" alt class="dialog-img" />
          <img src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
        </div>
      </div>
      <div v-if="isMobile">
        <div class="m-container">
          <div class="top-imgs">
            <img src="./s6/1/1_m.jpg" alt data-aos="fade" data-aos-delay="300" />
            <div class="imgss">
              <img
                src="./s6/1/2.jpg"
                alt
                @click="showDialog(0)"
                data-aos="fade"
                data-aos-delay="400"
              />
              <img
                src="./s6/1/3.jpg"
                alt
                @click="showDialog(1)"
                data-aos="fade"
                data-aos-delay="500"
              />
              <img
                src="./s6/1/4.jpg"
                alt
                @click="showDialog(2)"
                data-aos="fade"
                data-aos-delay="600"
              />
            </div>
          </div>
          <div class="text">
            <div class="title">
              豪邸御用名家-
              <br />三十三景觀設計-
              <br />鄭如珊
            </div>
            <div class="desc">創造人在環境中流動與呼吸的藝術，回歸人文角度，不只是在空間種樹，而是讓人與植物一起涵養共生。</div>
            <div class="desc">
              代表業績：
              <br />國泰美術觀道
              <br />吉美敦南花園
              <br />三發景悅
            </div>
          </div>
          <div class="top-imgs top-imgs2">
            <div class="imgss">
              <img
                src="./s6/2/2.jpg"
                alt
                @click="showDialog(3)"
                data-aos="fade"
                data-aos-delay="500"
              />
              <img
                src="./s6/2/3.jpg"
                alt
                @click="showDialog(4)"
                data-aos="fade"
                data-aos-delay="600"
              />
              <img
                src="./s6/2/4.jpg"
                alt
                @click="showDialog(5)"
                data-aos="fade"
                data-aos-delay="700"
              />
              <img
                src="./s6/2/5.jpg"
                alt
                @click="showDialog(6)"
                data-aos="fade"
                data-aos-delay="800"
              />
            </div>
            <img src="./s6/2/1_m.png" alt data-aos="fade" data-aos-delay="1000" />
          </div>
          <div class="text">
            <div class="title">
              兩岸高端豪宅總監-
              <br />珩荷空間設計-
              <br />徐慈姿
            </div>
            <div class="desc">打造機能人文公設空間，感受裝置藝術所釋放的人文情懷，在簡潔時尚的環境流動中，感受美學公共空間的魅力</div>
            <div class="desc">
              代表業績：
              <br />台中帝寶
              <br />寶舖縱橫天廈
              <br />大隱頤海大院
              <br />北京中軸國際
            </div>
          </div>
        </div>
        <div :class="`dialog ${isShow ? 'show' : ''}`">
          <img :src="dialogImg" alt class="dialog-img" />
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
  background-color: #cb181e;
  margin: 0 120px 0 0;
}

.img {
  width: 100vw;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: absolute;
  }
}

.container {
  width: 1300px;
  margin: 130px auto 0;
  position: relative;
  z-index: 1;
}
.content {
  display: flex;
  align-items: flex-end;
  margin-bottom: 65px;
}

.avatar {
  position: relative;
  img {
    width: calc(100vw * 500 / 1920);
    position: relative;
    z-index: 1;
  }
  .border {
    border: 3px solid rgba(186, 151, 116, 0.5);
    transform: translate(-10px, 10px);
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.items {
  width: calc(100vw * 800 / 1920);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.text {
  width: calc(100vw * 530 / 1920);
  .title {
    font-size: calc(100vw * 36 / 1920);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 6.48px;
    text-align: left;
    color: #b8a57e;
  }

  .desc {
    font-size: calc(100vw * 18 / 1920);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-bottom: 25px;
  }
}

.imgs {
  display: flex;
  justify-content: space-between;
  padding-left: 1%;
  img {
    width: 32.5%;
    cursor: pointer;
  }
}

.content2 {
  .avatar {
    width: calc(100vw * 410 / 1920);
  }

  .items {
    width: calc(100vw * 890 / 1920);
  }

  .text {
    width: calc(100vw * 530 / 1920);
    margin-top: -80px;
  }

  .imgs {
    padding-left: 0%;
    padding-right: 2%;
    img {
      width: 24%;
    }
  }
}

.dialog {
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

  .dialog-img {
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

  .m-container {
    position: relative;
    z-index: 1;
  }

  .top-imgs {
    width: 100vw;
    display: flex;
    align-items: flex-start;
    height: calc(100vw * 290 / 375);
     > *{margin:0 0 0  calc(100vw * 10 / 375);
     &:nth-child(1){margin: 0;}
     }
    > img {
      width: calc(100vw * 233 / 375);
    }

    > .imgss {
      width: calc(100vw * 142 / 375);
      height: calc(100vw * 290 / 375);
    
      display: flex; flex-direction:column;
      > *{margin:calc(100vw * 10 / 375) 0 0 0  ;
     &:nth-child(1){margin: 0;}
     }
      img {
        width: 100%;flex:1 1 auto;
      }
    }
  }

  .top-imgs2 {
    height: calc(100vw * 394 / 375);
    > img {
      width: calc(100vw * 235 / 375);
    }
    > .imgss {
      width: calc(100vw * 130 / 375);
      height: calc(100vw * 394 / 375);
    }
  }

  .text {
    width: calc(100vw * 300 / 375);
    margin: 0 auto;

    .title {
      font-size: calc(100vw * 32 / 375);
      letter-spacing: 2.5px;
      line-height: 1.2;
      margin-top: 25px;
      margin-bottom: 15px;
    }

    .desc {
      font-size: calc(100vw * 18 / 375);
    }
  }

  .dialog {
    .dialog-img {
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
  name: 'section6',

  data() {
    return {
      isMobile,
      dialogImg: '',
      imgList: [
        require('./s6/1/2.jpg'),
        require('./s6/1/3.jpg'),
        require('./s6/1/4.jpg'),
        require('./s6/2/2.jpg'),
        require('./s6/2/3.jpg'),
        require('./s6/2/4.jpg'),
        require('./s6/2/5.jpg'),
      ],
      isShow: false,
    }
  },

  computed: {},

  methods: {
    showDialog(index) {
      this.dialogImg = this.imgList[index]
      this.isShow = true
    },
    closeDialog() {
      this.isShow = false
    },
  },

  created() {},
  mounted() {},
}
</script>
