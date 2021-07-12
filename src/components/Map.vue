<template>
  <div class="map" id="map" @scroll="hide = true">
    <img :src="hand" alt :class="`hand ${hide ? 'hide' : ''}`" />
    <div class="mask" v-show="!hide"></div>
    <img class="map-bg" :src="bgSrc" alt />
    <slot></slot>
    <img
      :src="tag"
      data-aos="fade-down"
      :data-aos-delay="`${index + 1}00`"
      alt
      v-for="(tag, index) in tagList"
      :key="tag"
    />
  </div>
</template>
<style lang="scss" scoped>
#map {
  cursor: pointer;
}
</style>
<script>
import { isMobile } from "@/utils";
export default {
  name: "map",
  props: ["tagList", "bgSrc", "hand"],
  data() {
    return {
      isMobile,
      hide: false,
    };
  },
  methods: {
    dragToScroll() {
      const slider = document.querySelector("#map");
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - walk;
        $(".hand").fadeOut();
      });
    },
  },
  mounted() {
    if (this.isMobile) {
      setTimeout(() => {
        const map = document.querySelector(".map");
        const mapBg = document.querySelector(".map-bg");
        const text = document.querySelector(".map .text");
        if (text) {
          text.style.left = `${mapBg.clientWidth / 2 - 100}px`;
        }
        const hand = document.querySelector(".map .hand");

        if (hand) {
          // hand.style.width = `${mapBg.clientWidth}px`
          hand.style.left = `${mapBg.clientWidth / 2 - 200}px`;
        }

        map.scrollTo(mapBg.clientWidth / 2 - window.innerWidth / 2 - 120, 0);
      }, 400);
      setTimeout(() => {
        this.hide = false;
      }, 700);
    } else {
      this.dragToScroll();
    }
  },
};
</script>
