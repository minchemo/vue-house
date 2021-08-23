<template>
  <div class="section2">
    <div class="subsection subsection1">
      <div class="video-box">
        <img src="~@/projects/llcs/s2/play-btn.png" alt="" srcset="" />
      </div>
    </div>
    <div class="subsection subsection2">
      <img
        class="building"
        src="~@/projects/llcs/s2/building.png"
        alt=""
        srcset=""
      />
      <div class="features">
        <div
          class="f-item"
          v-bind:class="'f-i-' + feature.wheelIndex"
          v-for="(feature, i) in tenFeatures"
          :key="i"
          @click="setFeatureCurrent(i + 1)"
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
            <div class="f-item-title" v-html="feature.title"></div>

            <img
              class="f-item-divider"
              src="~@/projects/llcs/s2/10-features/divider.png"
              alt=""
              srcset=""
            />
            <div class="f-item-content" v-html="feature.content"></div>
          </div>
          <img
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
  right: 38vw;
  z-index: 1;
  top: 20vw;

  .f-item {
    display: flex;
    align-items: center;
    margin: 50px 0;
    transition: all 0.9s;
    position: absolute;
    top: 0;
    left: 0;
    width: 31vw;
    opacity: 1;

    .f-item-img {
      margin-right: 30px;
      .f-item-img-init {
        width: 130px;
      }
      .f-item-img-hover {
        width: 130px;
      }
    }
    .f-item-txt {
      display: flex;
      align-items: center;
      color: #fff;
      max-width: 50%;
      .f-item-title {
        min-width: 70px;
        font-size: 28px;
        letter-spacing: 4px;
        line-height: 1.3;
        font-weight: bold;
      }
      .f-item-content {
        letter-spacing: 4px;
        line-height: 1.3;
        font-size: 20px;
        text-align: justify;
      }
    }
    .f-item-divider {
      height: 54px;
      width: 3px;
      margin: 0 20px;
    }

    &:hover {
      cursor: pointer;
      left: 15px;
    }

    &.f-i-1 {
      transform: translate(6vw, -32vw);
      opacity: 0;
      pointer-events: none;
    }
    &.f-i-2 {
      transform: translate(6vw, -24vw);
      opacity: 0;
      pointer-events: none;
    }
    &.f-i-3 {
      transform: translate(6vw, -16vw);
      opacity: 0.4;
    }
    &.f-i-4 {
      transform: translate(4vw, -8vw);
      opacity: 1;
    }
    &.f-i-5 {
      //current
      transform: translate(0, 0);
      opacity: 1;
    }
    &.f-i-6 {
      transform: translate(-6vw, 8vw);
      opacity: 1;
    }
    &.f-i-7 {
      transform: translate(-15vw, 16vw);
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
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section2 {
  height: auto;
  background-image: url("~@/projects/llcs/s2/bg.jpg");
  background-size: cover;

  .subsection {
    position: relative;
    height: 100vh;

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
          wheelIndex: 10,
          realIndex: 3,
        },
        {
          img: require("@/projects/llcs/s2/10-features/2_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/2.png"),
          title: "軌道<br>經濟",
          content: "機捷A5站、加乘五泰輕軌，交織增值美景",
          wheelIndex: 10,
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
          wheelIndex: 10,
          realIndex: 6,
        },
        {
          img: require("@/projects/llcs/s2/10-features/5_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/5.png"),
          title: "綠意<br>薈萃",
          content: "近鄰22公頃運動公園、16處塭仔圳公園地",
          wheelIndex: 10,
          realIndex: 7,
        },
        {
          img: require("@/projects/llcs/s2/10-features/6_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/6.png"),
          title: "文教<br>核心",
          content: "下樓就是非營利幼兒園，鄰國中、小預定地",
          wheelIndex: 10,
          realIndex: 8,
        },
        {
          img: require("@/projects/llcs/s2/10-features/7_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/7.png"),
          title: "復刻<br>信義",
          content: "新古典建築語彙，信義豪宅級大器飛簷頂蓋",
          wheelIndex: 10,
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
          wheelIndex: 10,
          realIndex: 1,
        },
        {
          img: require("@/projects/llcs/s2/10-features/10_.png"),
          imgHover: require("@/projects/llcs/s2/10-features/10.png"),
          title: "全齡<br>公設",
          content: "專為您打造空中花園、健身房、兒童遊戲室",
          wheelIndex: 10,
          realIndex: 2,
        },
      ],
      currentActiveFeature: 5,
    };
  },

  methods: {
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
      for (let i = 0; i < 10; i++) {
        for (let index = 0; index < this.tenFeatures.length; index++) {
          setTimeout(() => {
            const realIndex = this.tenFeatures[index]["realIndex"];

            if (this.tenFeatures[index]["wheelIndex"] > realIndex) {
              this.tenFeatures[index]["wheelIndex"]--;
            }
          }, 1000);
        }
      }
    },
  },

  created() {},

  mounted() {
    setInterval(() => {
      this.pushFeature();
    }, 100);
  },
};
</script>
