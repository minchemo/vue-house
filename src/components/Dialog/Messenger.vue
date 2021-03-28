<template>
  <div class="dialog-content">
    <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
    <div class="dialog-desc">Facebook Messenger</div>
    <div class="info">線上諮詢</div>
    <a
      class="cta"
      :href="messenger"
      target="_blank"
      @click="window.dotq = window.dotq || [];

 window.dotq.push(

 {

   'projectId': '10000',

   'properties': {

     'pixelId': '10101258',

     'qstrings': {

       'et': 'custom',

       'ea': 'FB10101258'

     }

 } } );"
    >立即諮詢</a>
  </div>
</template>

<script>
export default {
  name: 'MessengerDialog',
  components: {},
  props: ['messenger'],
  data() {
    return {
      window,
    }
  },

  methods: {},
}
</script>
