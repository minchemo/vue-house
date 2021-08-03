<template>
  <div class="section2">
    <div class="title-box">
      <div class="title"><span>幸福建築</span> 經典之作</div>
      <div class="subtitle">
        當代美學經典再現，實現對幸福的想望，透過臻璽建築，看到理想的人生。今生最有價值的投資，換更新住更好，輕取未來的圓夢起點。
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section2 {
  height: calc(100vh - 60px);
  max-height: calc(108000vw / 1920 - 60px);
  min-height: calc(90000vw / 1920 - 60px);
  .bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: url("~@/projects/js/s2/bg.jpg") center;
    background-size: cover;
  }
  .title-box {
    position: absolute;
    z-index: 1;
    color: #fff;
    text-align: left;
    left:7em;
    top:calc(50% - 11em);
    font-size: calc(2300vw / 1920);
      line-height: 1.6;
    .title {
      font-size:3em;
      font-weight: bold;
      span {
        color: #fdd93f;
      }
    }
    
    .subtitle {
      margin-top: 0.8em;
      text-align: justify;
      font-weight: 500;
      letter-spacing:0.1em;
      width: 25em;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
.section2 {
  height: calc(100vh - 123px);
  max-height: calc(81200vw / 375 - 123px);
  min-height: calc(66700vw / 375 - 123px);
  .bg {
    background:#395fb2 url("~@/projects/js/s2/bg-m.jpg") no-repeat bottom center;
    background-size: contain;
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
  name: "section2",

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
