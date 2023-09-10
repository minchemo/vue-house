<template>
	<article class="s2 relative">
		<div class="view">
			<Fullview class="viewB" />
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
	width: 100%;
	height: size(1135);
	background: linear-gradient(180deg, #D9308A 0%, #A60967 57%, #A20664 71%, #D82F8A 100%);
	.view {
		width: size(1735);
		height: 100%;
		margin: 0 auto;
		border-radius: size(100);
		overflow: hidden;
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s2 {
	width: 100%;
	height: sizem(750);
	.view {
		width: 100%;
		height: 100%;
		
		.viewB{
			@apply absolute bottom-0;
			height: 85%;
		}

	}

}
  }

</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
import Fullview from '../components/fullview.vue';
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
