<template>
  <div class="section4">
    <Subsection1 />
    <div v-if="isMobile" class="spacer"></div>
    <Subsection2 />
    <div v-if="isMobile" class="spacer"></div>
    <Subsection3 />
    <div v-if="isMobile" class="spacer"></div>
    <Subsection4 />
    <Subsection5 />
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section4 {
  height: auto;
  background-size: cover;
  background-image: url('~@/projects/llcs/s4/bg.jpg');
  
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    .spacer {
      position: relative;
      width: 100%;
      height: 5vh;
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
import Subsection1 from "@/projects/llcs/s4/subsection1";
import Subsection2 from "@/projects/llcs/s4/subsection2";
import Subsection3 from "@/projects/llcs/s4/subsection3";
import Subsection4 from "@/projects/llcs/s4/subsection4";
import Subsection5 from "@/projects/llcs/s4/subsection5";

export default {
  name: "section4",
  components: {
    Subsection1,
    Subsection2,
    Subsection3,
    Subsection4,
    Subsection5
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
