<template>
  <div class="contact" id="contact">
    <Order />
    <HouseInfo />

    <div class="circles">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div v-if="!isMobile" class="circle"></div>
      <div v-if="!isMobile" class="circle"></div>
      <div v-if="!isMobile" class="circle"></div>
      <div v-if="!isMobile" class="circle"></div>
      <div v-if="!isMobile" class="circle"></div>
      <div v-if="!isMobile" class="circle"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.circles {
  position: absolute;
  z-index: 2;
  //z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 0;
  div {
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    &:nth-child(1) {
      width: 16vw;
      height: 16vw;
      opacity: 0.1;
      left: 23vw;
      top: 5vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }
    &:nth-child(2) {
      width: 17vw;
      height: 17vw;
      opacity: 0.12;
      left: -3vw;
      top: 16vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }
    &:nth-child(3) {
      width: 8vw;
      height: 8vw;
      opacity: 0.16;
      left: 6vw;
      top: 27vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }
    &:nth-child(4) {
      width: 17vw;
      height: 17vw;
      opacity: 0.14;
      left: 36vw;
      top: 24vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }
    &:nth-child(5) {
      width: 10vw;
      height: 10vw;
      opacity: 0.14;
      right: 35vw;
      top: 5vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }
    &:nth-child(6) {
      width: 5vw;
      height: 5vw;
      opacity: 0.14;
      right: 33vw;
      top: 8vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }

    &:nth-child(7) {
      width: 13vw;
      height: 13vw;
      opacity: 0.14;
      right: 25vw;
      top: 21vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }

    &:nth-child(8) {
      width: 10vw;
      height: 10vw;
      opacity: 0.14;
      right: 35vw;
      top: 38vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }

    &:nth-child(9) {
      width: 8vw;
      height: 8vw;
      opacity: 0.14;
      right: 24vw;
      top: 51vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }

    &:nth-child(10) {
      width: 12vw;
      height: 12vw;
      opacity: 0.14;
      left: 24vw;
      top: 50vw;
      animation: bubble (random(5) + 1) + s alternate-reverse infinite;
    }

    @keyframes bubble {
      from {
        transform: translate(0, 0);
      }
      to {
        transform: translate(-10px, 10px);
        opacity: 0;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .circles {
    z-index: 5;
    div {
      border-radius: 100%;
      background-color: #fff;
      position: absolute;
      &:nth-child(1) {
        width: 50vw;
        height: 50vw;
        opacity: 0.1;
        left: 31vw;
        top: 8vw;
      }
      &:nth-child(2) {
        width: 24vw;
        height: 24vw;
        opacity: 0.12;
        right: 0;
        top: 16vw;
        left: unset;
        animation: bubble-data-v-35d024a4 4s alternate-reverse infinite;
      }
      &:nth-child(3) {
        width: 40vw;
        height: 40vw;
        opacity: 0.16;
        left: 6vw;
        top: 203vw;
        animation: bubble (random(5) + 1) + s alternate-reverse infinite;
      }
      &:nth-child(4) {
        width: 60vw;
        height: 60vw;
        opacity: 0.05;
        left: unset;
        top: 157vw;
        right: -20vw;
        animation: bubble (random(5) + 1) + s alternate-reverse infinite;
      }

      @keyframes bubble {
        from {
          transform: translate(0, 0);
        }
        to {
          transform: translate(-10px, 10px);
          opacity: 0;
        }
      }
    }
  }
}
</style>

<script>
import { isMobile, isTablet } from "@/utils";
import Order from "@/components/Order.vue";
import HouseInfo from "@/components/HouseInfo.vue";

export default {
  name: "contactSection",
  components: {
    Order,
    HouseInfo,
  },
  data() {
    return {
      isMobile,
    };
  },

  methods: {},
};
</script>
