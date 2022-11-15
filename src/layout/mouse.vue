<template>
    <div class="mouse"></div>
</template>
<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const moveMouse = (e) => {
    var clickable = e.target.classList.contains('clickable');

    gsap.to('.mouse', {
        css: {
            left: e.pageX,
            top: e.pageY,
            transform: clickable ? 'scale(2.5)' : 'scale(1)',
            cursor: 'pointer'
        },
        duration: 0.3 //速度
    })

}

onMounted(() => {
    window.document.addEventListener('mousemove', moveMouse);
})

</script>

<style lang="scss">


.mouse {
  @apply absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  margin: -15px 0 0 -15px;
  background: #BAA43C;
  opacity: 0.8;
  border-radius: 80%;
  backface-visibility: hidden;
  pointer-events: none;
  z-index: 99999999999999;
}

</style>