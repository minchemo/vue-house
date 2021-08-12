<template>
  <div class="section3 f-p-section">
    <GodModView />
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section3 {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
    clip-path: polygon(0% 0%, 
    0% calc(100% - 4vw), 
    10%  calc(100% - 4.2vw),
    20%  calc(100% - 3.9vw),
    30%  calc(100% - 3.3vw),
    40%  calc(100% - 2.4vw),
    50%  calc(100% - 1.3vw),
    60%  calc(100% - 0.4vw),
    65%  calc(100% - 0.1vw),
    68%  calc(100% - 0vw),
    71%  calc(100% - 0.1vw),
    76%  calc(100% - 0.4vw),
    81%  calc(100% - 0.7vw),
    86%  calc(100% - 1.3vw),
    95%  calc(100% - 2.8vw),
    100%  calc(100% - 4vw),
    100% 0%);
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
@media screen and (min-width: 767px) and (max-width: 700px) {

}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import GodModView from "@/components/GodModView.vue";

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
