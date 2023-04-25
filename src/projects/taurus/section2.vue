<template>
  <div class="section2">影片區塊</div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section2 {
  position: relative;
  height: 0;
  background-image: url("./s2/bg.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #1a1a1a;
  padding-bottom: 56.25%;
  z-index: 0;
  margin-top: -10vh;
}
/* 平板尺寸 */
@media only screen and (min-width: 768px) and (max-width: 1280px) {
  
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    margin-top: 0vh;
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
