<template>
  <div class="section7">
    <div class="title">
      <p class="t1">DESIGN YOUR HOME</p>
      <h2 class="t2">訂製家有FU 裝修自選宅</h2>
      <div class="divider"></div>
      <p class="t3">
        我們都知道量身訂製的最合身<br
          v-if="isMobile"
        />，從一枚戒指、一雙鞋、到一件外套，<br />
        當然更不論一處容納進生活五感的居家空間。<br
          v-if="isMobile"
        />今采裝修自選方案，建材裝修隨選搭配，<br
          v-if="isMobile"
        />為你的專屬空間添上獨家品味。
      </p>
    </div>
    <div class="switch-box">
      <div class="buttons">
        <div
          class="b1"
          @click="changeType('客廳廚具')"
          v-bind:class="{ active: type == '客廳廚具' }"
        >
          客廳廚具
        </div>
        <div
          class="b2"
          @click="changeType('衛浴磁磚')"
          v-bind:class="{ active: type == '衛浴磁磚' }"
        >
          衛浴磁磚
        </div>
      </div>
      <div v-if="type == '客廳廚具'" class="type">
        <div class="t-b">
          <div class="t-t">｜客廳地磚｜</div>
          <div
            class="t-b-b"
            @click="changeColor(0, '石紋灰')"
            v-bind:class="{ active: typeColor[0] == '石紋灰' }"
          >
            <img src="~@/projects/ab/s7/客廳/石紋灰.png" alt="" />
          </div>
          <div
            class="t-b-b"
            @click="changeColor(0, '書卷黃')"
            v-bind:class="{ active: typeColor[0] == '書卷黃' }"
          >
            <img src="~@/projects/ab/s7/客廳/書卷黃.png" alt="" />
          </div>
          <div
            class="t-b-b"
            @click="changeColor(0, '清水灰')"
            v-bind:class="{ active: typeColor[0] == '清水灰' }"
          >
            <img src="~@/projects/ab/s7/客廳/清水灰.png" alt="" />
          </div>
        </div>
        <div class="t-b">
          <div class="t-t">｜廚　　具｜</div>
          <div
            class="t-b-b"
            @click="changeColor(1, 'A廚具')"
            v-bind:class="{ active: typeColor[1] == 'A廚具' }"
          >
            <img src="~@/projects/ab/s7/客廳/A廚具.png" alt="" />
          </div>
          <div
            class="t-b-b"
            @click="changeColor(1, 'B廚具')"
            v-bind:class="{ active: typeColor[1] == 'B廚具' }"
          >
            <img src="~@/projects/ab/s7/客廳/B廚具.png" alt="" />
          </div>
        </div>
      </div>
      <div v-else class="type">
        <div class="t-b">
          <div class="t-t">｜衛浴地磚｜</div>
          <div
            class="t-b-b"
            @click="changeColor(0, '義大利銀狐白')"
            v-bind:class="{ active: typeColor[0] == '義大利銀狐白' }"
          >
            <img src="~@/projects/ab/s7/衛浴/義大利銀狐白.png" alt="" />
          </div>
          <div
            class="t-b-b"
            @click="changeColor(0, '撒哈拉淺灰')"
            v-bind:class="{ active: typeColor[0] == '撒哈拉淺灰' }"
          >
            <img src="~@/projects/ab/s7/衛浴/撒哈拉淺灰.png" alt="" />
          </div>
        </div>
        <div class="t-b">
          <div class="t-t">｜衛浴壁磚｜</div>
          <div
            class="t-b-b"
            @click="changeColor(1, '義大利馬莫灰')"
            v-bind:class="{ active: typeColor[1] == '義大利馬莫灰' }"
          >
            <img src="~@/projects/ab/s7/衛浴/義大利馬莫灰.png" alt="" />
          </div>
          <div
            class="t-b-b"
            @click="changeColor(1, '撒哈拉深灰')"
            v-bind:class="{ active: typeColor[1] == '撒哈拉深灰' }"
          >
            <img src="~@/projects/ab/s7/衛浴/撒哈拉深灰.png" alt="" />
          </div>
        </div>
      </div>
      <div class="preview"></div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section7 {
  height: auto;
  width: 95vw;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  font-family: "Noto Sans TC";
  padding-bottom: 10vh;

  .title {
    color: #d20028;
    width: 90vw;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding: 5vh 0;

    .t1 {
      font-size: 1vw;
      opacity: 0.3;
      font-weight: bold;
      margin-bottom: 1vw;
    }
    .t2 {
      font-size: 2vw;
      font-weight: bold;
    }
    .divider {
      width: 100%;
      height: 1px;
      background: #d20028;
      margin: 2vh 0;
    }
    .t3 {
      font-size: 0.8vw;
      line-height: 2;
    }
  }
  .switch-box {
    height: 85vh;
    position: relative;
    width: 85%;
    border: 3px solid #d20028;
    z-index: 10;
    margin: 0 auto;
    .buttons {
      writing-mode: vertical-lr;
      display: flex;
      height: 100%;
      justify-content: space-around;
      border-right: 3px solid #d20028;
      z-index: 11;
      position: relative;

      div {
        height: 100%;
        padding: 0 2vh;
        background-color: #fff;
        font-size: 1.5rem;
        transition: all 0.3s;
        color: #d20028;
        &.active {
          background-color: #d20028;
          color: #fff;
          position: relative;

          &::after {
            content: "";
            border-right: 1px solid;
            border-top: 1px solid;
            width: 2vw;
            height: 2vw;
            position: absolute;
            right: -1vw;
            top: 50%;
            transform: translate(0, -50%) rotate(45deg);
            border-color: #d20028;
            background: #d20028;
            opacity: 1;
            animation: fadeIn 1s;

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          }
        }
        &:hover {
          cursor: pointer;
          background-color: #d20028;
          color: #fff;
        }
      }
    }
    .type {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      height: 100%;
      justify-content: space-around;
      padding-left: 8vh;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 0.7) 20%,
        rgba(255, 255, 255, 1) 100%
      );
      .t-b {
        display: flex;
        flex-direction: column;
        align-items: center;
        .t-t {
          font-size: 1.5rem;
          margin-bottom: 1.5vh;
          color: #000;
        }
        .t-b-b {
          position: relative;
          width: 3vw;
          height: 3vw;
          margin-bottom: 1.5vh;
          border-radius: 100%;
          filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.35));
          img {
            max-width: 100%;
          }
          &.active {
            border: 3px solid #d2002775;
          }
          &.active::after {
            opacity: 1;
          }

          &:hover {
            cursor: pointer;
            border: 3px solid #d2002775;
          }
          &:hover::after {
            opacity: 1;
          }

          &::after {
            content: "";
            width: 3.8vw;
            height: 3.8vw;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 2px solid #d20028;
            border-radius: 100%;
            opacity: 0;
            transition: opacity 0.3s;
          }
        }
      }
    }
    .preview {
      height: 0;
      padding-top: 55.78%;
      background-size: cover;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      transform-origin: right top;
      box-shadow: 2vh 2vh 0 #d20028;
      transition: all 0.3s;
    }
  }
  .bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(~@/projects/ab/s7/bg.jpg);
    background-size: cover;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section7 {
    width: 100vw;
    padding-bottom: 20vh;
    .title {
      color: #d20028;
      width: 90vw;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      padding: 5vh 0;
      margin-bottom: 50px;
      .t1 {
        font-size: 1rem;
        opacity: 0.3;
        font-weight: bold;
        margin-bottom: 1vw;
      }
      .t2 {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .divider {
        width: 100%;
        height: 1px;
        background: #d20028;
        margin: 2vh 0;
      }
      .t3 {
        font-size: .8rem;
        line-height: 2;
      }
    }
    .switch-box {
      height: 85vh;
      position: relative;
      width: 96%;
      border: 3px solid #d20028;
      z-index: 10;
      margin: 0 auto;
      .buttons {
        display: flex;
        justify-content: center;
        border-right: 0;
        z-index: 11;
        position: relative;
        writing-mode: horizontal-tb;
        height: 50px;
        margin-top: -50px;
        border: 2px solid #d20028;
        width: 90%;
        margin-left: auto;
        margin-right: auto;

        div {
          height: 100%;
          background-color: #fff;
          font-size: 1.2rem;
          transition: all 0.3s;
          color: #d20028;
          line-height: 50px;
          width: 100%;
          &.active {
            background-color: #d20028;
            color: #fff;
            position: relative;

            &::after {
              content: "";
              border-right: 1px solid;
              border-top: 1px solid;
              width: 20px;
              height: 20px;
              position: absolute;
              right: 0;
              top: unset;
              bottom: -10px;
              left: 50%;
              transform: translate(-50%) rotate(45deg);
              border-color: #d20028;
              background: #d20028;
              opacity: 1;
              animation: fadeIn 1s;

              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            }
          }
          &:hover {
            cursor: pointer;
            background-color: #d20028;
            color: #fff;
          }
        }
      }
      .type {
        display: flex;
        flex-direction: row;
        position: absolute;
        left: 0;
        top: unset;
        bottom: 0;
        z-index: 10;
        height: auto;
        justify-content: space-around;
        padding-left: 0;
        background: transparent;
        height: 50px;
        margin-bottom: -75px;
        margin-right: auto;
        margin-left: auto;
        width: 100%;
        .t-b {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          .t-t {
            font-size: 1rem;
            margin-bottom: 2vh;
            color: #000;
            width: 100%;
          }
          .t-b-b {
            position: relative;
            width: 10vw;
            height: 10vw;
            margin-bottom: 1.5vh;
            border-radius: 100%;
            filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.35));
            margin: 5px;
            img {
              max-width: 100%;
            }
            &.active {
              border: 3px solid #d2002775;
            }
            &.active::after {
              opacity: 1;
            }

            &:hover {
              cursor: pointer;
              border: 3px solid #d2002775;
            }
            &:hover::after {
              opacity: 1;
            }

            &::after {
              content: "";
              width: 10.5vw;
              height: 10.5vw;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              border: 2px solid #d20028;
              border-radius: 100%;
              opacity: 0;
              transition: opacity 0.3s;
            }
          }
        }
      }
      .preview {
        height: 0;
        padding-top: 55.78%;
        background-size: cover;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        transform-origin: right top;
        box-shadow: 1vh 1vh 0 #d20028;
        transition: all 0.3s;
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
export default {
  name: "section7",

  data() {
    return {
      isMobile,
      type: "客廳廚具",
      typeColor: ["石紋灰", "A廚具"], // 預設先用
      previewImg: [
        {
          type: ["石紋灰", "A廚具"],
          src: require("@/projects/ab/s7/客廳/石紋灰+A廚具.png"),
        },
        {
          type: ["清水灰", "A廚具"],
          src: require("@/projects/ab/s7/客廳/清水灰+A廚具.png"),
        },
        {
          type: ["書卷黃", "A廚具"],
          src: require("@/projects/ab/s7/客廳/書卷黃+A廚具.png"),
        },
        {
          type: ["石紋灰", "B廚具"],
          src: require("@/projects/ab/s7/客廳/石紋灰+B廚具.png"),
        },
        {
          type: ["清水灰", "B廚具"],
          src: require("@/projects/ab/s7/客廳/清水灰+B廚具.png"),
        },
        {
          type: ["書卷黃", "B廚具"],
          src: require("@/projects/ab/s7/客廳/書卷黃+B廚具.png"),
        },
        {
          type: ["義大利銀狐白", "義大利馬莫灰"],
          src: require("@/projects/ab/s7/衛浴/義大利銀狐白+義大利馬莫灰.png"),
        },
        {
          type: ["撒哈拉淺灰", "義大利馬莫灰"],
          src: require("@/projects/ab/s7/衛浴/撒哈拉淺灰+義大利馬莫灰.png"),
        },
        {
          type: ["義大利銀狐白", "撒哈拉深灰"],
          src: require("@/projects/ab/s7/衛浴/義大利銀狐白+撒哈拉深灰.png"),
        },
        {
          type: ["撒哈拉淺灰", "撒哈拉深灰"],
          src: require("@/projects/ab/s7/衛浴/撒哈拉淺灰+撒哈拉深灰.png"),
        },
      ],
    };
  },

  methods: {
    changeType(type) {
      this.type = type;
      if (type == "客廳廚具") {
        this.typeColor = ["石紋灰", "A廚具"];
      } else {
        this.typeColor = ["義大利銀狐白", "義大利馬莫灰"];
      }

      this.setPreviewImg();
    },
    changeColor(group, color) {
      this.typeColor.splice(group, 1, color);
      this.setPreviewImg();
    },
    setPreviewImg() {
      const filtered = this.previewImg.find((item, array, index) => {
        let key = item.type.toString();
        let target = this.typeColor.toString();

        return key == target;
      });

      if (filtered) {
        $(".preview").css({ "background-image": `url(${filtered.src})` });
      }
    },
    resizePreview() {
      let parentHeight = $(".switch-box").height();
      let previewHeight = $(".switch-box .preview").outerHeight();
      let ratio = parentHeight / previewHeight;

      $(".switch-box .preview").css("transform", "scale(" + ratio + ")");

      $(".switch-box").width($(".switch-box .preview").width() + "px");
      $(".switch-box").height($(".switch-box .preview").outerHeight() + "px");

      parentHeight = $(".switch-box").height();
      previewHeight = $(".switch-box .preview").outerHeight();
      ratio = parentHeight / previewHeight;

      $(".switch-box .preview").css("transform", "scale(" + ratio + ")");
    },
  },

  mounted() {
    this.resizePreview();
    this.setPreviewImg();
  },
};
</script>
