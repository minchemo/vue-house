<template>
  <div class="s3" id="scene">
    <div class="viewbox">
      <GodModView
        :bgUrl="
          !isMobile
            ? require('@/projects/wv/s3/view.jpg')
            : require('@/projects/wv/s3/view_m.jpg')
        "
      />
    </div>
    <img
      v-if="!isMobile"
      class="title"
      src="@/projects/wv/s3/title.svg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />
    <img
      v-else
      class="title"
      src="@/projects/wv/s3/title_m.svg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s3 {
  width: size(1920);
  height: size(1080);
  .viewbox {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .title {
    position: absolute;
    width: size(1630);
    top: size(43);
    left: size(140);
    z-index: 1;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s3 {
    width: size-m(375);
    height: size-m(774);
    .title {
      position: absolute;
      width: size-m(330);
      top: size-m(35);
      left: 50%;
      margin-left: -#{size-m(165)};
      z-index: 10;
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
  name: "s3",
  props: ["scrollInstance"],
  components: {

    GodModView
  },
  data() {
    return {
      isMobile,
    };
  },
  methods: {
  },
  mounted() {
  },
  created() {
  },
};
</script>