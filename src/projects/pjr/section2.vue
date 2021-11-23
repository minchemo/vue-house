<template>
  <div class="section2" >影片</div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section2 {
  min-height: 100vh;
  background-color: rgba($color: #231815, $alpha: 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
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
};
</script>
