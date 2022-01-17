<template>
  <div class="contact" id="contact">
    <Order />
    <HouseInfo />
  </div>
</template>
<style lang="scss" scoped></style>

<script>
import Order from "@/components/Order.vue";
import HouseInfo from "@/components/HouseInfo.vue";
import Footer from "@/layouts/Footer.vue";

export default {
  name: "contactSection",
  components: {
    Order,
    HouseInfo,
    Footer
  },

  methods: {}
};
</script>
