<template>
  <div class="s1">
    <img
      class="butterfly"
      src="@/projects/dh/s1/butterfly.png"
      alt=""
      srcset=""
    />
    <div class="info">
      <div class="t1">在南港經貿,遇見一座森林</div>
      <div class="t2">達欣企業集團｜南港新作2653-8888</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background-image: url("~@/projects/dh/bg.png");
  background-size: cover;
  .butterfly {
    width: size(411);
  }
  .info {
    .t1 {
      font-size: size(107);
    }
    .t2 {
        font-size: size(50);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s1 {
    position: relative;
    width: size-m(375);
    height: size-m(769);
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
  name: "s1",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
    };
  },
};
</script>