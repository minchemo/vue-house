<template>
  <div class="section2">
  <!--  <div 
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="0" class="subsection subsection1">
      <div class="video-box">
        <img src="~@/projects/llcs/s2/play-btn.png" alt="" srcset="" />
      </div>
    </div> -->
    <div class="subsection subsection2" id="subsection2">
      <img
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="0"
        data-aos-offset="-100"
        v-if="!isMobile"
        class="building"
        src="~@/projects/llcs/s2/building.png"
        alt=""
        srcset=""
      />
      <img
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="0"
        data-aos-offset="-100"
        v-else
        class="building"
        src="~@/projects/llcs/s2/building_mo.png"
        alt=""
        srcset=""
      />
      <div 
      data-aos="fade" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="-100" class="title">塭仔圳文教核心</div>
      <div 
      data-aos="fade"
        data-aos-offset="-100" class="name">3D模擬示意圖，僅供參考</div>
      <div class="features">
        <div
          class="f-item"
          v-bind:class="'f-i-' + feature.wheelIndex"
          v-for="(feature, i) in tenFeatures"
          :key="i"
          @click="setFeatureCurrent(i + 3)"
        >
          <div class="f-item-img">
            <img
              v-show="feature.wheelIndex != 5"
              class="f-item-img-init"
              :src="feature.img"
              alt=""
            />
            <img
              v-show="feature.wheelIndex == 5"
              class="f-item-img-hover"
              :src="feature.imgHover"
              alt=""
            />
          </div>
          <div class="f-item-txt">
            <div
              v-if="!isMobile"
              class="f-item-title"
              v-html="feature.title"
            ></div>
            <img
              class="f-item-divider"
              src="~@/projects/llcs/s2/10-features/divider.png"
              alt=""
              srcset=""
            />
            <div class="f-item-content" v-html="feature.content"></div>
            <img
              v-if="isMobile"
              class="f-item-divider"
              src="~@/projects/llcs/s2/10-features/divider.png"
              alt=""
              srcset=""
            />
          </div>
          <img
            v-if="!isMobile"
            class="f-item-divider"
            src="~@/projects/llcs/s2/10-features/divider.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.features {
  position: absolute;
  right: 41vw;
  z-index: 1;
  bottom: 26vw;

  .f-item {
    display: flex;
    align-items: center;
    margin: 0 0;
    transition: all 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 26vw;
    opacity: 1;

    .f-item-img {
      margin-right:1.6vw;
      .f-item-img-init {
        width: 6vw;
      }
      .f-item-img-hover {
        width: 6vw;
      }
    }
    .f-item-txt {
      max-width: 100%;
      display: flex;
      align-items: center;
      color: #fff;
      .f-item-title {
        font-size: 1.2vw;
        letter-spacing: 3px;
        min-width: 68px;
        line-height: 1.2;
      }
      .f-item-content {
        font-size: 0.9vw;
        letter-spacing: 3px;
        line-height: 1.3;
        width: 100%;
        text-align: left;
      }
    }
    .f-item-divider {
      height: 64px;
      width: 3px;
      margin: 0 1vw;
    }

    &:hover {
      cursor: pointer;
      left: 15px;
    }

    &.f-i-1 {
      transform: translate(7vw, -32vw);
      opacity: 0;
      pointer-events: none;
    }
    &.f-i-2 {
      transform: translate(8.5vw, -24vw);
      opacity: 0;
      pointer-events: none;
    }
    &.f-i-3 {
      transform:translate(8.5vw, -20vw);
      opacity: 0.4;
    }
    &.f-i-4 {
      transform:translate(5vw, -9.5vw);
      opacity: 1;
    }
    &.f-i-5 {
      //current
      transform: translate(0, 0);
      opacity: 1;
    }
    &.f-i-6 {
      transform: translate(-8.2vw, 8vw);
      opacity: 1;
    }
    &.f-i-7 {
      transform:translate(-18.5vw, 14.5vw);
      opacity: 0.4;
    }
    &.f-i-8 {
      transform: translate(-27vw, 21vw);
      opacity: 0;
      pointer-events: none;
    }
    &.f-i-9 {
      transform: translate(-42vw, 23vw);
      opacity: 0;
      pointer-events: none;
    }
    &.f-i-10 {
      transform: translate(-35vw, 36vw);
      opacity: 0;
      pointer-events: none;
    }
    &.f-i-11 {
      transform: translate(-35vw, 36vw);
      opacity: 0;
      pointer-events: none;
    }
    &.f-i-12 {
      transform: translate(-35vw, 36vw);
      opacity: 0;
      pointer-events: none;
    }
  }
}

@media only screen and (max-width: 767px) {
  .features {
    right: 93vw;
    bottom: auto;
    top:96vw;

    .f-item {
      flex-direction: column;
      width: 90vw;

      .f-item-img {
        margin-right: 0;
        .f-item-img-init {
          width: 70px;
        }
        .f-item-img-hover {
          width: 70px;
        }
      }
      .f-item-txt {
        display: flex;
        align-items: center;
        max-width: 100%;
        color: #fff;
        .f-item-content {
          letter-spacing: 4px;
          line-height: 1.3;
          font-size: 16px;
          text-align: justify;
          width: auto;
          text-align: center;
        }
      }
      .f-item-divider {
        height: 54px;
        width: 5px;
        margin: 0 15px;
      }

      &:hover {
        cursor: pointer;
        left: 0;
      }

      &.f-i-1 {
        transform: translate(58vw, -11vw);
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-2 {
        transform: translate(58vw, -11vw);
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-3 {
        transform: translate(46vw, -11vw);
        pointer-events: none;
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-4 {
        transform: translate(25vw, -2vw);
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-5 {
        //current
        transform: translate(0, 0);
        pointer-events: none;
        .f-item-img {
          margin-right: 0;
          .f-item-img-init {
            width: 70px;
          }
          .f-item-img-hover {
            width: 100px;
            animation: zoomIn 0.5s;

            @keyframes zoomIn {
              from {
                width: 70px;
              }
              to {
                width: 100px;
              }
            }
          }
        }
      }
      &.f-i-6 {
        transform: translate(-26vw, 4vw);
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-7 {
        transform: translate(-50vw, -2vw);
        pointer-events: none;
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-8 {
        transform: translate(-70vw, -2vw);
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-9 {
        transform: translate(-70vw, -2vw);
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-10 {
        transform: translate(-70vw, -2vw);
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-11 {
        transform: translate(-70vw, -2vw);
        .f-item-txt {
          display: none;
        }
      }
      &.f-i-12 {
        transform: translate(-70vw, -2vw);
        .f-item-txt {
          display: none;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section2 {
  height: auto;
  // background-image: url("~@/projects/llcs/s2/bg.jpg");
  // background-size: cover;

  .subsection {
    position: relative;
    height: 100vh;
  max-height:calc(108000vw / 1920);
  min-height:calc(90000vw / 1920);

    &.subsection1 {
      .video-box {
        position: absolute;
        width: 80%;
        height: 90%;
        background-color: #333;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 5%;
          cursor: pointer;
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }

    &.subsection2 {
      .title {
        position: absolute;
        z-index: 2;
        color: #fff000;
        font-size: 2.5vw;
        border-bottom: 4px solid;
        padding-bottom: 0.5vw;
        font-family: "Noto Serif TC";
        font-weight: bold;
        left: 50%;
        top: 50%;
        transform: translate(-60%, -100%);
      }
      .name {
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-47em, 15em);
        font-size: calc(1500vw / 1920);
        color: #fff;
        }
      .building {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 75%;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {

    .subsection {
      height: unset;
  max-height:unset;
  min-height:0;

      &.subsection1 {
        height: 25vh;
        .video-box {
          width: 90%;
          height: 80%;
          img {
            width: 15%;
          }
        }
      }

      &.subsection2 {
        height: 157vw;
        .title {
        font-size:calc(2500vw / 375);
          border-bottom: 0px solid;
          border-left: 1px solid;
          padding:0 0 0 0.2em;
          width: 1.2em;
          left: 50%;
          top: 50%;
          transform: translate(340%, -150%);
        }
      .name {
        transform: translate(5em, -8em);
        font-size: calc(1200vw / 375);
        top: auto;
          left: 0vw;
          bottom: 161px;
        color: #fff;
        }
        .building {
          position: absolute;
          left: 0;
          bottom: 161px;
          width:100%;
          height: unset;
        }
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import "hammerjs";

export default {
  name: "section2",

  data() {
    return {
      isMobile,
      tenFeatures: [
        {
          img: require("@/projects/llcs/s2/10-features/1_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/1.png"),
          title: "城市<br>新生",
          content: "398公頃城市新生計畫，新北門面全面翻新",
          wheelIndex: 8,
          realIndex: 3,
        },
        {
          img: require("@/projects/llcs/s2/10-features/2_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/2.png"),
          title: "軌道<br>經濟",
          content: "機捷A5站、加乘五泰輕軌，交織增值美景",
          wheelIndex: 9,
          realIndex: 4,
        },
        {
          img: require("@/projects/llcs/s2/10-features/3_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/3.png"),
          title: "便利<br>交通",
          content: "3快、4高、5捷運交通網，快意串聯全台",
          wheelIndex: 10,
          realIndex: 5,
        },
        {
          img: require("@/projects/llcs/s2/10-features/4_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/4.png"),
          title: "商圈<br>環抱",
          content: "副都心等6大黃金商圈環抱，生活機能全包",
          wheelIndex: 11,
          realIndex: 6,
        },
        {
          img: require("@/projects/llcs/s2/10-features/5_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/5.png"),
          title: "綠意<br>薈萃",
          content: "近鄰22公頃運動公園、16處塭仔圳公園地",
          wheelIndex: 12,
          realIndex: 7,
        },
        {
          img: require("@/projects/llcs/s2/10-features/6_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/6.png"),
          title: "文教<br>核心",
          content: "下樓就是非營利幼兒園，鄰國中、小預定地",
          wheelIndex: 8,
          realIndex: 8,
        },
        {
          img: require("@/projects/llcs/s2/10-features/7_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/7.png"),
          title: "復刻<br>信義",
          content: "新古典建築語彙，信義豪宅級大器飛簷頂蓋",
          wheelIndex: 9,
          realIndex: 9,
        },
        {
          img: require("@/projects/llcs/s2/10-features/8_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/8.png"),
          title: "頂規<br>建材",
          content: "豪宅級建材德國精品廚具、衛浴、杜拜磁磚",
          wheelIndex: 10,
          realIndex: 10,
        },
        {
          img: require("@/projects/llcs/s2/10-features/9_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/9.png"),
          title: "健康<br>防疫",
          content: "美國NASA指定防疫建材、全棟式濾水系統",
          wheelIndex: 1,
          realIndex: 1,
        },
        {
          img: require("@/projects/llcs/s2/10-features/10_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/10.png"),
          title: "全齡<br>公設",
          content: "專為您打造空中花園、健身房、兒童遊戲室",
          wheelIndex: 2,
          realIndex: 2,
        },
      ],
      currentActiveFeature: 5,
      pushFeatureInterval: null,
      pushFeatureRemain: 5,
      isInViewport: false,
    };
  },

  methods: {
    onScreenShow() {
      let self = this;

      function isOnScreen(elem) {
        if (elem.length == 0) {
          return;
        }
        var $window = jQuery(window);
        var viewport_top = $window.scrollTop();
        var viewport_height = $window.height();
        var viewport_bottom = viewport_top + viewport_height;
        var $elem = jQuery(elem);
        var top = $elem.offset().top;
        var height = $elem.height();
        var bottom = top + height;

        return (
          (top >= viewport_top && top < viewport_bottom) ||
          (bottom > viewport_top && bottom <= viewport_bottom) ||
          (height > viewport_height &&
            top <= viewport_top &&
            bottom >= viewport_bottom)
        );
      }

      window.addEventListener("scroll", function (e) {
        if (isOnScreen(jQuery(".subsection2"))) {
          self.isInViewport = true;
        } else {
          self.isInViewport = false;
        }
      });
    },
    setFeatureCurrent(i) {
      const offset = Math.abs(this.currentActiveFeature - i);

      if (offset > 0) {
        for (let index = 0; index < this.tenFeatures.length; index++) {
          let currentIndex = this.tenFeatures[index]["wheelIndex"];
          if (i < this.currentActiveFeature) {
            //向上旋轉
            let targetIndex = currentIndex + offset;
            if (targetIndex > 10) {
              targetIndex = targetIndex - 10;
            }
            this.tenFeatures[index]["wheelIndex"] = targetIndex;
          } else {
            //向下旋轉
            let targetIndex = currentIndex - offset;
            if (targetIndex <= 0) {
              targetIndex = targetIndex + 10;
            }
            this.tenFeatures[index]["wheelIndex"] = targetIndex;
          }
        }

        this.currentActiveFeature = i;
      }
    },
    pushFeature() {
      if (this.pushFeatureRemain > 0) {
        this.tenFeatures.forEach((elem, i) => {
          if (
            this.tenFeatures[i]["realIndex"] !=
              this.tenFeatures[i]["wheelIndex"] &&
            this.tenFeatures[i]["realIndex"] < this.tenFeatures[i]["wheelIndex"]
          ) {
            this.tenFeatures[i]["wheelIndex"]--;
          }
        });

        this.pushFeatureRemain--;
      }
    },
    initGesture() {
      const self = this;
      const hammertime = new Hammer($(".features")[0]);
      hammertime.on("swipeleft", function (ev) {
        let target = self.currentActiveFeature - 1;
        if (target <= 0) {
          target = 10;
        }
        self.setFeatureCurrent(target);
      });
      hammertime.on("swipedown", function (ev) {
        ev.preventDeafult;
      });
      hammertime.on("swiperight", function (ev) {
        let target = self.currentActiveFeature + 1;
        if (target > 10) {
          target = 1;
        }
        self.setFeatureCurrent(target);
      });
    },
  },

  created() {},

  mounted() {
    this.pushFeatureInterval = setInterval(() => {
      if (this.isInViewport) this.pushFeature();
    }, 500);
    this.onScreenShow();
    if (isMobile) {
      this.initGesture();
    }
  },
};
</script>
