<template>
  <div class="s1 relative">
    <img class="absolute decor" src="@/section/s1/decor.png" alt="" srcset="">
    <img class="absolute logo" src="@/section/s1/logo.png" alt="" srcset="">
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: size(1080);
  background-image: url('@/section/s1/bg.jpg');
  background-size: contain;
  background-position: center;

  .decor {
    width: size(859);
    height: size(690);
    right: 0;
    bottom: 0;
  }

  .logo {
    width: size(696.15);
    height: size(272.07);
    left: size(270);
    top: size(180);
  }
}

@media screen and (max-width:768px) {}
</style>

<script setup>
</script>
