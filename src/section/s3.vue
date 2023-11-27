<template>
	<article class="s3">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s3/bg.jpg);
}

@media screen and (max-width: 767px) {
	.s3 {
	width: 100%;
	height: sizem(667);
	

}
  }

</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

const scrollTo = (target) => {
	let el = document.getElementById(target);
	smoothScroll({
		scrollTo: el
	})
}
</script>
