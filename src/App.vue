<template>
  <div id="app">
    <div ref="gtmNoScript" />
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">

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
