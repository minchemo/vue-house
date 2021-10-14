<template>
  <div id="app">
    <div ref="gtmNoScript" />
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&subset=chinese-traditional');

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
