<template>
  <div id="app">
    <div ref="gtmNoScript" />
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+TC:100,200,300,400,500,600,700,800,900&subset=chinese-traditional");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,200,300,400,500,600,700,800,900&subset=chinese-traditional");
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #b8b8b8 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 9px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #b8b8b8;
  border-radius: 0px;
  border: 3px solid #ffffff;
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
