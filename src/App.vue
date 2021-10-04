<template>
  <div id="app">
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:600,700&subset=chinese-traditional');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400&subset=chinese-traditional');
</style>

<script>
import AstrictMask from '@/components/AstrictMask'

export default {
  name: 'App',
  components: {
    AstrictMask,
  },
}
</script>
