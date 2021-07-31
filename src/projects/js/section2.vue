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
  height: 90vh;
  .bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("~@/projects/js/s2/bg.jpg");
  }
  .title-box {
    position: absolute;
    z-index: 1;
    color: #fff;
    text-align: left;
    left: 200px;
    top: 200px;
    .title {
      font-size: 80px;
      font-weight: bold;
      span {
        color: #fdd93f;
      }
    }
    .subtitle {
      margin-top: 40px;
      font-size: 30px;
      text-align: justify;
      letter-spacing: 3px;
      line-height: 1.5;
      width: 670px;
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
    };
  },

  methods: {},

  created() {},
};
</script>
