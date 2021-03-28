<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">接待會館</div>
    <div
      class="info"
      v-html="address"
    ></div>
    <a
      class="cta"
      :href="link"
      target="_blank"
      @click="window.dotq = window.dotq || [];
window.dotq.push(

 {

   'projectId': '10000',

   'properties': {

     'pixelId': '10101258',

     'qstrings': {

       'et': 'custom',

       'ea': 'map10101258'

     }

 } } );
"
    >開啟導航</a>
  </div>
</template>

<script>
export default {
  name: 'MessengerDialog',
  components: {},
  props: ['link', 'address'],
  data() {
    return {
      window,
    }
  },

  methods: {},
}
</script>
