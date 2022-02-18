<template>
  <div class="s5">
    <div class="content">
      <GodModView />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s5 {
  width: 100%;
  height: size(1001);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    align-items: start;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
.s5 {
  width: 100%;
  height: size-m(667);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    align-items: start;
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
import GodModView from "@/components/GodModView.vue";

export default {
  name: "s5",
  components: {
    GodModView,
  },
  data() {
    return {
      isMobile,
    };
  },
};
</script>

