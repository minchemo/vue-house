<template>
    <div class="s2v relative bg-[#000]">
      <div class="video" >
       <iframe data-aos="fade-up" src="https://www.youtube.com/embed/0Y43DRbvRaM?autoplay=1&mute=1&mute=1&loop=1&playlist=0Y43DRbvRaM" title="YouTube video player" frameborder="0"
    allowfullscreen></iframe>
      </div>
    </div>
  </template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s2v {overflow: hidden;}
iframe {
   width: 100%;
   height: 100%;
}
.video {
    width: size(1400);
    height: size(790);
    margin: size(60) auto;
    background: url('@/section/s2/v.jpg') center;
    background-size: cover;
}

@media screen and (max-width:768px) {

    .video {
        width: 95%;
        height: sizem(330);
    margin: sizem(10) auto;
    }
}
</style>


<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import AOS from "aos";
const globals = getCurrentInstance().appContext.config.globalProperties;
</script>