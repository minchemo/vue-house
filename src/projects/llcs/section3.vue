<template>
  <div class="section3">
    <div  data-aos="fade" data-aos-duration="1000" data-aos-delay="0"   class="title">
      <img
        v-if="!isMobile"
        class="t1"
        src="@/projects/llcs/s3/t2.svg"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="t1"
        src="@/projects/llcs/s3/t2_mo.svg"
        alt=""
        srcset=""
      />
      <img
        v-if="!isMobile"
        class="t2"
        src="@/projects/llcs/s3/t1.svg"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="t2"
        src="@/projects/llcs/s3/t1_mo.svg"
        alt=""
        srcset=""
      />
    </div>
    <GodModView />
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section3 {
  height: auto;

  .title {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    .t1 {
      position: absolute;
      right: 57vw;
      width: 30vw;
      top: 5vh;
    }
    .t2 {
      position: absolute;
      right: 0;
      top: 5vh;
      width: 55vw;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section3 {
    height: auto;

    .title {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      .t1 {
        position: absolute;
        right: 0;
        width: 90vw;
        top: 60vw;
      }
      .t2 {
        position: absolute;
        right: 10vw;
        top: 5vh;
        width: 80vw;
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
import GodModView from "@/components/GodModView";

export default {
  name: "section3",
  components: {
    GodModView,
  },
  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
