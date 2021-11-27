<template>
  <div class="section3">
    <GodModView uk-parallax="viewport:0.3;blur:50,0;y:50,0" />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section3 {
  position: relative;
  height: auto;
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
import GodModView from "@/components/GodModView.vue"

export default {
  name: "section3",
  components: {
    GodModView
  },
  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() { },
};
</script>
