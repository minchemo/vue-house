<template>
  <article class="s4">
    <div class="view" data-aos="fade-up"  data-aos-duration="800">
      <Fullview />
    </div>
    <img v-if="$isMobile()" class="title" src="@/section/s4/title_m.png" alt="">
    <img v-else class="title" src="@/section/s4/title.png" alt="" data-aos="fade-up"  data-aos-duration="800">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  @apply relative flex items-center justify-center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  .view {
    width: size(1563);
    height: size(733);
  }
  .title {
    @apply relative md:absolute;
    width: size(1157.2);
    left: size(10);
    top: size(160);
  }
}

@media screen and (max-width: 767px) {
.s4 {
  @apply flex-col-reverse justify-start;
  width: 100%;
  height: auto;
  padding-top: size-m(82);
  .view {
    width: 100%;
    height: size-m(495);
  }
  .title {
    margin-bottom: size-m(30);
    width: size-m(319.53);
    left: 0;
    top: 0;
  }
}
}
</style>
<script setup>
import { ref } from 'vue';
import Fullview from '../components/fullview.vue';

const splideRef = ref(null);
</script>
