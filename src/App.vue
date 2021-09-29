<template>
  <div id="app">
    <div ref="gtmNoScript" />
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300,600,900&subset=chinese-traditional');
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
</style>

<script>
import AstrictMask from '@/components/AstrictMask'
import gtm from '@/mixins/gtm.js'


export default {
  name: 'App',
  mixins: [gtm],
  components: {
    AstrictMask,
  },
}
</script>
