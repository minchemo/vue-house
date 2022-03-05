<template>
  <div id="app">
    <div ref="gtmNoScript" />
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&family=Noto+Serif+TC:wght@100;200;300;400;500;600;700&display=swap");

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000000;
}
</style>

<script>
import AstrictMask from "@/components/AstrictMask";
import gtm from "@/mixins/gtm.js";

export default {
  name: "App",
  mixins: [gtm],
  components: {
    AstrictMask,
  },
  mounted() {
  },
};
</script>
