<template>
  <div class="section6">
    <Subsection1 />
    <Subsection2 />
    <Subsection3 />
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section6 {
  height: auto;
  background-size: 100% auto;
  background: url('~@/projects/llcs/s4/bg.jpg') fixed center ;
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section6 {
  background-image: url('~@/projects/llcs/s4/bg-mo.jpg');
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
import Subsection1 from "@/projects/llcs/s6/subsection1.vue";
import Subsection2 from "@/projects/llcs/s6/subsection2.vue";
import Subsection3 from "@/projects/llcs/s6/subsection3.vue";

export default {
  name: "section6",

  data() {
    return {
      isMobile,
    };
  },
  components: {
    Subsection1,
    Subsection2,
    Subsection3,
  },

  methods: {},

  created() {},
};
</script>
