<template>
  <article class="s21 relative" id="s21">
    <img src="./s2/s2.png">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s21 {
  position: relative;
  img{width: 100%;object-fit: cover; 
    background: url("./s2/s2.webp") center;background-size: cover;
  
    @media screen and (max-width: 767px) {
      height: sizem(360);
    }
  }
  /*width: 100%;height: sizem(360);
 
  @media screen and (min-width: 768px) {
    height: size(1080);
  }*/
}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const splide = ref()
const sConfig = {
  autoWidth: true,
  arrows: false,
  autoplay: true,
  pagination: false,
  gap: 0,
  type: "loop",
}


const imgs = [
  {
    img: new URL("./s2/1.webp", import.meta.url).href,
    caption: "",
   // caption: "依政府公開計畫繪製，僅供參考請以實際為主",
  },
  {
    img: new URL("./s2/2.webp", import.meta.url).href,
    caption: "",
   // caption: "圖片來源google地圖，僅供參考請以實際為主",
  },
]

</script>